// T19 — public channel and group discovery: home door, directory, preview, join, request, offline, name lookup, channel page, leave.
// Browser simulation only. Writes docs/channel-discovery-check.json.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE),fs=require('fs');
(async()=>{
const b=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});
const checks=[],errors=[];
const ck=(v,t)=>{if(!v)throw Error('FAIL: '+t);checks.push(t)};
const ctx=await b.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
const p=await ctx.newPage();p.on('pageerror',e=>errors.push(e.message));
const url='file://'+process.cwd()+'/v21.html?mobile=1&version=2.1.2.1';
await p.goto(url);
// 1. Home door
const door=p.locator('.beyond [data-action=directory]');
ck(await door.count()===1&&(await door.innerText()).includes('Find public channels and groups'),'Home has one door to the public directory');
ck(await p.evaluate(()=>{const r=document.querySelector('.rows'),d=document.querySelector('.beyond');return !!(r.compareDocumentPosition(d)&Node.DOCUMENT_POSITION_FOLLOWING);}),'The door sits after Recent activity, not above people');
ck(await p.locator('.people-strip').count()===1,'Favourites strip unchanged');
// 2. Directory
await door.click();
ck((await p.locator('.head h2').innerText())==='Public directory','Directory opens as a temporary task');
ck((await p.locator('.return-context button').innerText()).includes('Your connections'),'Return route names the home');
ck(await p.locator('[data-listing]').count()===3,'Active view lists three of four fixtures');
ck(await p.evaluate(()=>document.activeElement.tagName)==='H2','Focus moves to the directory heading');
await p.locator('[data-dirtab=all]').click();
ck(await p.locator('[data-listing]').count()===4,'All view lists four');
await p.locator('[data-dirtab=new]').click();
ck(await p.locator('[data-listing]').count()===1&&(await p.locator('[data-listing] strong').innerText())==='Tide Tables','New view lists only Tide Tables');
await p.locator('[data-dirtab=all]').click();
await p.locator('#dirsearch').fill('coast');
ck(await p.locator('[data-listing]').count()===2,'Local filter on name and description');
ck(await p.locator('[data-listing=coast]').isDisabled()&&(await p.locator('.listing:has([data-listing=coast]) .preview').innerText()).includes('Already in your connections'),'Already subscribed rows say so');
ck(await p.locator('.listing:has([data-listing=coast]) [data-open=coast]').count()===1,'Already subscribed rows offer Open instead of Join');
await p.locator('#dirsearch').fill('tide');
ck(await p.locator('[data-listing]').count()===1,'Filter narrows to Tide Tables');
// 3. Preview with fetch
await p.locator('[data-listing=tides]').click();
ck((await p.locator('.join-preview').innerText()).includes('Fetching details')&&await p.locator('.join-preview .primary').isDisabled(),'Preview shows a fetching state with Join unavailable');
await p.waitForTimeout(700);
ck(await p.locator('.join-preview .facts li').count()===3,'Preview states three facts');
ck((await p.locator('.join-preview .facts').innerText()).includes("can't see each other")&&(await p.locator('.join-preview .facts').innerText()).includes('relays'),'Facts cover relays and reader visibility');
ck(await p.locator('[name=join-as]:checked').count()===1,'One identity is chosen');
ck(await p.evaluate(()=>{const r=document.querySelector('[data-action=join]').getBoundingClientRect(),n=document.querySelector('.listing.open strong').getBoundingClientRect();return n.top>=0&&r.bottom<=innerHeight;}),'Row name and Join are both on screen at 390 × 844');
ck(await p.evaluate(()=>{const l=document.querySelector('.listing.open'),pv=l.querySelector('.join-preview');return !!pv&&l.contains(pv);}),'Preview unfolds inside the tapped row');
await p.locator('[data-action=close-preview]').click();
ck(await p.locator('.join-preview').count()===0&&(await p.locator('#dirsearch').inputValue())==='tide','Not now closes the preview and keeps the search');
// 4. Join incognito
await p.locator('[data-listing=tides]').click();await p.waitForTimeout(700);
await p.locator('label.seg:has([value=incognito])').click();
await p.locator('[data-action=join]').click();
await p.waitForTimeout(50);
ck((await p.locator('.head h2').innerText())==='Close at hand.','Joining returns to the home');
ck((await p.locator('.app .feedback').innerText()).includes('added to your connections'),'Return names what was added');
const newRow=p.locator('.rows [data-open=tides]');
ck(await newRow.count()===1&&!(await newRow.innerText()).includes('Austin')&&!(await newRow.innerText()).includes('ncognito'),'New row shows no identity');
ck(await p.evaluate(()=>document.activeElement.dataset.open)==='tides','Focus lands on the new connection');
ck(await p.evaluate(()=>{const r=document.querySelector('.rows [data-open=tides]').getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight;}),'The new connection is on screen after the return');
await p.locator('.beyond [data-action=directory]').click();
ck((await p.locator('#dirsearch').inputValue())==='tide'&&(await p.locator('.listing:has([data-listing=tides]) .preview').innerText()).includes('Already in your connections'),'Directory keeps the search and marks the joined row');
// 5. Admin review request and duplicate guard
await p.locator('#dirsearch').fill('walkers');
await p.locator('[data-listing=walkers]').click();await p.waitForTimeout(700);
ck((await p.locator('[data-action=join]').innerText()).includes('Request to join'),'Reviewed groups offer a request, not a join');
await p.locator('[data-action=join]').click();
ck((await p.locator('.app .feedback').innerText()).includes('Request sent')&&(await p.locator('.head h2').innerText())==='Public directory','Request stays in the directory and says what happens next');
ck(await p.locator('[data-listing=walkers]').isDisabled()&&(await p.locator('.listing:has([data-listing=walkers]) .preview').innerText()).includes('Request sent'),'Pending row cannot be requested twice');
ck(await p.locator('.rows [data-open=walkers]').count()===0,'No connection is faked while a request is pending');
// 6. Offline
await p.locator('[data-action=directory-offline]').click();
ck((await p.locator('.pending').innerText()).includes('Directory unavailable')&&await p.locator('[data-listing]').count()===0,'Offline state replaces the listing');
await p.locator('.door[data-action=directory-online]').click();
ck((await p.locator('#dirsearch').inputValue())==='walkers'&&await p.locator('[data-listing]').count()===1,'Back online keeps the search');
// 7. Name lookup from home search
await p.locator('[data-action=home]').click();
await p.locator('#search').fill('#coast');
ck((await p.locator('.rows .empty').count())===1,'A #name matches no connection');
ck(await p.locator('[data-action=lookup]').count()===1&&(await p.locator('[data-action=lookup]').innerText()).includes('#coast'),'Lookup is offered, not performed');
await p.locator('[data-action=lookup]').click();await p.waitForTimeout(700);
ck((await p.locator('.pending').innerText()).includes('not found'),'Lookup reports not found with a next step');
ck(await p.locator('[data-action=directory]').count()===1,'Directory step offered under the search');
await p.locator('[data-action=directory]').click();
ck((await p.locator('.head h2').innerText())==='Public directory','Search leads to the directory');
// 8. Channel page
await p.goto(url+'#coast');
const note=await p.locator('.reading-note').innerText();
ck(note.includes('not visible while reading')&&note.includes('subscribers'),'Channel page states visibility and subscribers');
ck(!(await p.locator('.head small').innerText()).includes('as '),'No identity named while reading');
ck(await p.locator('.post').count()===2,'Two posts');
const r=p.locator('[data-react="coast:1"]');const before=await r.innerText();await r.click();
ck((await r.innerText())!==before&&await r.getAttribute('aria-pressed')==='true','Reacting is local and toggles');
await p.locator('[data-comment="coast:1"]').click();
ck(await p.evaluate(()=>{const a=document.querySelector('.post.commenting');return !!a&&!!a.querySelector('.comment')&&a.querySelector('[data-comment]').dataset.comment==='coast:1';}),'Comment crossing unfolds inside the tapped post');
ck((await p.locator('.comment .note').innerText()).includes('appear as Austin'),'Crossing names the identity');
ck(await p.locator('[data-action=confirm-comment]').isDisabled(),'Empty comment cannot be posted');
await p.locator('#comment').fill('Lovely route.');
await p.locator('[data-action=confirm-comment]').click();
ck((await p.locator('.post .outgoing').innerText()).includes('Lovely route.')&&(await p.locator('.post .outgoing small').innerText()).includes('public'),'Comment is logged as public');
ck(await p.locator('.composer').count()===0,'No private composer on a publication');
// 9. Leave
await p.locator('[data-action=more]').click();
ck((await p.locator('.leave h3').innerText()).includes('More for Coast Journal')&&(await p.locator('.leave [data-action=confirm-leave]').innerText()).includes('Leave Coast Journal'),'More opens favourite and Leave with a plain statement');
await p.locator('[data-action=cancel-leave]').click();
ck(await p.locator('.leave').count()===0,'Stay closes it');
await p.locator('[data-action=more]').click();await p.locator('[data-action=confirm-leave]').click();await p.waitForTimeout(50);
ck((await p.locator('.head h2').innerText())==='Close at hand.'&&await p.locator('.rows [data-open=coast]').count()===0,'Leaving returns home and removes the publication');
// 10. Fit
for(const w of [320,390]){const n=await b.newPage({viewport:{width:w,height:700}});await n.goto(url);await n.locator('.beyond [data-action=directory]').click();await n.locator('[data-listing=tides]').click();await n.waitForTimeout(700);ck(await n.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'No horizontal overflow in the preview at '+w);const small=await n.evaluate(()=>[...document.querySelectorAll('#app button')].filter(e=>e.getBoundingClientRect().height>0&&e.getBoundingClientRect().height<44).length);ck(small===0,'All visible controls at least 44 px at '+w);await n.close();}
ck(errors.length===0,'No page errors');
await b.close();
fs.writeFileSync('docs/channel-discovery-check.json',JSON.stringify({task:'T19',date:new Date().toISOString().slice(0,10),source:'v21.html (generated from prototypes/src/v21)',method:'Agent-operated headless Chromium via Playwright. Browser simulation only.',viewport:'390x844 plus 320/390 fit checks',checks,limits:['No human participants or physical phones','No screen reader, native keyboard or enlarged-text testing','Directory, relays, public names and joining are simulated; nothing leaves the page','RAM-only state; reload clears it']},null,2)+'\n');
console.log('PASS '+checks.length+' T19 channel discovery checks');
})().catch(e=>{console.error(e.message);process.exit(1)});
