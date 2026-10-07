// Carousel lab (7 October 2026): grids, lists and carousels, lab 1 of 3. Ten hard cases (H1 to H10) for one carousel
// component, used on the home and inside an interface that arrives, plus the frame around that interface (F2, F5, F6, F8).
// Run with no argument for the lab; with "today" to run the same hard cases on the V2.1.2.3 favourites rail, which fails.
// Browser simulation: touch is synthesised over CDP, screen reader behaviour is read from the markup.
// Research: RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md §1, §8.2, §9.1 (F2, F5, F6, F8, F10, F11, F14), §10.1.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);const path=require('path');
const today=process.argv[2]==='today';
const LAB='file://'+path.join(process.cwd(),'studies/carousel-lab.html');
const RT='file://'+path.join(process.cwd(),'v21.html')+'?mobile=1&version=2.1.2.3';
(async()=>{const b=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});const rows=[],errors=[];
const ck=(id,ok,t)=>{rows.push([id,ok,t]);};
const open=async(opts={})=>{const ctx=await b.newContext({viewport:{width:opts.w||390,height:844},hasTouch:true,isMobile:!!opts.touch,reducedMotion:opts.reduce?'reduce':'no-preference'});const p=await ctx.newPage();p.on('pageerror',e=>errors.push(e.message));await p.goto(today?RT:LAB);await p.waitForTimeout(250);return {ctx,p}};
const T=today?{track:'.people-strip',item:'.people-strip .strip-person',vscroll:'.scroll',next:'[data-action=next-favourites]',prev:'[data-action=previous-favourites]',name:'.strip-person strong',region:'.people-strip'}
:{track:'#home-car .track',item:'#home-car .person',vscroll:'#home-phone .phone-scroll',next:'#home-car [data-car=next]',prev:'#home-car [data-car=prev]',name:'#home-car .person strong',region:'#home-car'};
const aligned=(p)=>p.evaluate(t=>{const tr=document.querySelector(t);const r=tr.getBoundingClientRect();const pad=parseFloat(getComputedStyle(tr).scrollPaddingInlineStart)||0;return [...tr.children].some(li=>Math.abs(li.getBoundingClientRect().left-(r.left+pad))<=3)},T.track);

// H1 and H2: touch, axis and snap
{const {ctx,p}=await open({touch:true});const cdp=await ctx.newCDPSession(p);
await p.evaluate(s=>document.querySelector(s).scrollIntoView({block:'center',behavior:'instant'}),T.track);await p.waitForTimeout(250);
const box=await p.locator(T.track).boundingBox();const x0=box.x+box.width*.8,y0=box.y+box.height/2;
const st=()=>p.evaluate(([t,v])=>[document.querySelector(t).scrollLeft,document.querySelector(v).scrollTop+scrollY],[T.track,T.vscroll]);
const swipe=async(dx,dy)=>{await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:x0,y:y0}]});for(let i=1;i<=20;i++){await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:x0+dx*i/20,y:y0+dy*i/20}]});await p.waitForTimeout(16)}await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await p.waitForTimeout(1000)};
const a=await st();await swipe(-200,20);const s1=await st();await swipe(20,-200);const s2=await st();
ck('H1',s1[0]-a[0]>40&&Math.abs(s1[1]-a[1])<2&&Math.abs(s2[0]-s1[0])<2&&s2[1]-s1[1]>20,`mostly sideways swipe moves the carousel only; mostly vertical swipe moves the page only (${Math.round(s1[0]-a[0])} px, ${Math.round(s2[1]-s1[1])} px)`);
ck('H2',await aligned(p),'after a swipe the carousel lands on an item');await ctx.close();}
for(const w of [320,390]){const {ctx,p}=await open({w});const f=await p.evaluate(t=>{const tr=document.querySelector(t),r=tr.getBoundingClientRect();const part=[...tr.children].map(li=>li.getBoundingClientRect()).find(s=>s.left<r.right-1&&s.right>r.right+1);return part?(r.right-part.left)/part.width:0},T.track);ck('H2',f>=.15&&f<=.75,`the next item peeks at ${w} wide (${Math.round(f*100)}% visible)`);await ctx.close();}

// H3: large text, words whole
{const {ctx,p}=await open();await p.addStyleTag({content:'html{font-size:200%!important}'});await p.waitForTimeout(200);
const broken=await p.evaluate(sel=>{const out=[];document.querySelectorAll(sel).forEach(el=>{const tn=[...el.childNodes].find(n=>n.nodeType===3);if(!tn)return;const txt=tn.textContent;let i=0;for(const w of txt.split(/(\s+)/)){if(w.trim()){const r=document.createRange();r.setStart(tn,i);r.setEnd(tn,i+w.length);const lines=new Set([...r.getClientRects()].map(x=>Math.round(x.top)));if(lines.size>1&&!/-/.test(w))out.push(w)}i+=w.length}if(el.scrollWidth>el.clientWidth+1)out.push(txt+' (overflow)')});return out},T.name);
ck('H3',!broken.length,`names stay whole at 200% text (${broken.join(', ')||'none broken'})`);await ctx.close();}

// H4: keyboard and screen reader
{const {ctx,p}=await open();
const sem=await p.evaluate(([r,t])=>{const reg=document.querySelector(r),tr=document.querySelector(t);const slides=[...tr.children];return {region:reg.getAttribute('aria-roledescription')==='carousel'&&!!reg.getAttribute('aria-label'),slides:slides.length>0&&slides.every((s,i)=>s.getAttribute('aria-roledescription')==='slide'&&s.getAttribute('aria-label')===`${i+1} of ${slides.length}`),hidden:!!tr.querySelector('[aria-hidden=true],[inert]')&&!tr.querySelector('.av, [aria-hidden=true].identity-mark'),tabbable:tr.querySelectorAll('button:not([tabindex="-1"])').length}},[T.region,T.track]);
ck('H4',sem.region&&sem.slides,'the carousel and each item are named for screen readers ("3 of 8")');
ck('H4',sem.tabbable===1,`one Tab stop for the whole carousel (${sem.tabbable})`);
await p.focus(T.item);await p.keyboard.press('ArrowRight');const k1=await p.evaluate(s=>[...document.querySelectorAll(s)].indexOf(document.activeElement),T.item);
await p.keyboard.press('End');const k2=await p.evaluate(s=>{const all=[...document.querySelectorAll(s)];return [all.indexOf(document.activeElement),all.length]},T.item);
await p.keyboard.press('Home');const k3=await p.evaluate(s=>[...document.querySelectorAll(s)].indexOf(document.activeElement),T.item);
ck('H4',k1===1&&k2[0]===k2[1]-1&&k3===0,'arrow keys, End and Home move through the items');
const status=await p.evaluate(r=>document.querySelector(r).querySelector('[role=status]')?.textContent||document.querySelector(r).parentElement.querySelector('[role=status]')?.textContent||'',T.region);
ck('H4',/1 of \d+/.test(status),`position is announced from a status element ("${status}")`);await ctx.close();}

// H5: buttons as well as swipe
{const {ctx,p}=await open();const sz=await p.evaluate(([n,v])=>[document.querySelector(n),document.querySelector(v)].map(e=>{const r=e.getBoundingClientRect();return Math.min(r.width,r.height)}),[T.next,T.prev]);
const startDisabled=await p.evaluate(s=>document.querySelector(s).disabled,T.prev);
await p.evaluate(t=>{const tr=document.querySelector(t);tr.scrollLeft=tr.scrollWidth},T.track);await p.waitForTimeout(300);const endDisabled=await p.evaluate(s=>document.querySelector(s).disabled,T.next);
ck('H5',sz.every(x=>x>=44),`previous and next are 44 px (${sz.map(Math.round).join(', ')})`);ck('H5',startDisabled&&endDisabled,'previous is off at the start and next is off at the end');await ctx.close();}

// H6: reduced motion
{const {ctx,p}=await open({reduce:true});const before=await p.evaluate(t=>document.querySelector(t).scrollLeft,T.track);await p.click(T.next);await p.waitForTimeout(40);const mid=await p.evaluate(t=>document.querySelector(t).scrollLeft,T.track);await p.waitForTimeout(600);const end=await p.evaluate(t=>document.querySelector(t).scrollLeft,T.track);
ck('H6',end>before&&Math.abs(mid-end)<2,'with reduced motion the carousel moves at once, without a slide');await ctx.close();}

// H7 and H8: lab only
if(!today){{const {ctx,p}=await open();await p.evaluate(()=>document.querySelector('#slot-car').scrollIntoView({behavior:'instant'}));await p.click('#slot-car [data-car=next]');await p.waitForTimeout(700);
ck('H7',await p.evaluate(()=>{const tr=document.querySelector('#slot-car .track'),r=tr.getBoundingClientRect(),pad=parseFloat(getComputedStyle(tr).scrollPaddingInlineStart)||0;const ws=new Set([...tr.querySelectorAll('.slot')].map(s=>Math.round(s.getBoundingClientRect().width)));return ws.size>1&&[...tr.children].some(li=>Math.abs(li.getBoundingClientRect().left-(r.left+pad))<=3)}),'cards of different widths still land on an item');await ctx.close();}
{const {ctx,p}=await open();const t0=Date.now();await p.click('[data-lab=many]');const ms=Date.now()-t0;await p.focus('#home-car .person');await p.keyboard.press('End');await p.waitForTimeout(300);
const r=await p.evaluate(()=>{const tr=document.querySelector('#home-car .track'),a=document.activeElement,rr=tr.getBoundingClientRect(),ar=a.getBoundingClientRect();return {n:tr.children.length,label:a.closest('.slide').getAttribute('aria-label'),vis:ar.left>=rr.left-1&&ar.right<=rr.right+1}});
ck('H8',r.n===500&&ms<1500,`500 favourites render (${r.n}, ${ms} ms including the click)`);ck('H8',r.label==='500 of 500'&&r.vis,'End reaches the last of 500 and shows it');await ctx.close();}}
else{ck('H7',false,'not built: the rail has one item size');ck('H8',false,'not built: the rail shows six favourites at most');}

// H9: return to the same place
{const {ctx,p}=await open();await p.click(T.next);await p.waitForTimeout(500);const before=await p.evaluate(t=>document.querySelector(t).scrollLeft,T.track);
const idx=await p.evaluate(([t,i])=>{const tr=document.querySelector(t),r=tr.getBoundingClientRect();const all=[...document.querySelectorAll(i)];return all.findIndex(b=>{const s=b.getBoundingClientRect();return s.left>=r.left&&s.right<=r.right})},[T.track,T.item]);
await p.locator(T.item).nth(idx).click();await p.waitForTimeout(300);await p.click(today?'[data-action=home]':'[data-home=back]');await p.waitForTimeout(400);
const after=await p.evaluate(t=>document.querySelector(t).scrollLeft,T.track);const focus=await p.evaluate(([i,k])=>[...document.querySelectorAll(i)].indexOf(document.activeElement)===k,[T.item,idx]);
ck('H9',Math.abs(after-before)<3,`back returns the carousel to the same place (${Math.round(before)} / ${Math.round(after)})`);ck('H9',focus,'back returns focus to the person you opened');await ctx.close();}

// H10: right to left, long names
{const {ctx,p}=await open();if(today)await p.evaluate(()=>{document.querySelector('.people-strip').dir='rtl'});else await p.click('[data-lab=rtl]');await p.waitForTimeout(300);
const first=()=>p.evaluate(([t,i])=>{const tr=document.querySelector(t),r=tr.getBoundingClientRect();return [...document.querySelectorAll(i)].findIndex(b=>{const s=b.getBoundingClientRect();return s.left>=r.left-1&&s.right<=r.right+1})},[T.track,T.item]);
const f0=await first();await p.click(T.next);await p.waitForTimeout(700);const f1=await first();
ck('H10',f1>f0,`right to left: next moves forward (first visible ${f0} then ${f1})`);
const over=await p.evaluate(s=>[...document.querySelectorAll(s)].filter(e=>e.scrollWidth>e.clientWidth+1).length,T.name);ck('H10',over===0,'long names wrap without spilling');
if(!today){const m=await p.evaluate(()=>{const o=document.querySelector('.msg.out').getBoundingClientRect(),i=document.querySelector('.msg:not(.out)').getBoundingClientRect(),h=document.querySelector('.phone h3');const w=document.createTreeWalker(h,NodeFilter.SHOW_TEXT);let t,n=null;while(t=w.nextNode())if(t.data.trim())n=t;const k=n.data.trimEnd().length;const r=document.createRange();r.setStart(n,k-1);r.setEnd(n,k);const dot=r.getBoundingClientRect();const a=document.createRange();a.selectNodeContents(h);const all=a.getBoundingClientRect();return {mirrored:o.left<i.left,punct:n.data.trimEnd().endsWith('.')&&all.right-dot.right<2}});
ck('H10',m.mirrored,'right to left: your messages move to the other side (logical margins)');ck('H10',m.punct,'right to left: a heading ends with its full stop, not before it');}
await ctx.close();}

// The frame around an interface that arrives (lab only)
if(!today){const {ctx,p}=await open();const draft=()=>p.inputValue('#reply');const msgs=()=>p.locator('#convo-phone .msg.out').count();const d0=await draft(),m0=await msgs();
ck('F2',/Harbour Café · interface/.test(await p.textContent('.frame-head'))&&/cannot send/i.test(await p.textContent('.frame-head')),'a sender mark says who sent the interface and what it cannot do');
await p.click('[data-c=about]');ck('F2',/cannot send anything, use the internet, or change this conversation/.test(await p.textContent('.frame-about')),'About explains it in layers');
await p.click('[data-slot="1"]');ck('F5',await msgs()===m0,'choosing an option sends nothing');ck('F5',await p.getAttribute('[data-slot="1"]','aria-pressed')==='true','the choice is shown as selected');
await p.click('[data-c=suggest]');ck('F6',/To Harbour Café · private conversation · as Austin/.test(await p.textContent('.review'))&&/12:30/.test(await p.textContent('.review')),'review names the audience, identity and exact text');
ck('F6',await p.evaluate(()=>getComputedStyle(document.querySelector('.review')).borderLeftColor)==='rgb(141, 62, 43)'&&!(await p.evaluate(()=>!!document.querySelector('.frame .review'))),'the review is the client\'s own clay step, outside the interface boundary');
await p.click('[data-c=cancel]');ck('F6',await msgs()===m0&&/Nothing was sent/.test(await p.textContent('#convo-status')),'cancel sends nothing and says so');
await p.click('[data-slot="1"]');await p.click('[data-c=suggest]');await p.click('[data-c=send]');
ck('F6',await msgs()===m0+1&&/accepted by server, delivery unconfirmed/.test(await p.textContent('.receipt')),'sending leaves a message and an honest receipt');
ck('F8',await draft()===d0&&d0.length>0,'your own draft is untouched throughout');await ctx.close();}

// Page: overflow, targets, text size, em dashes (lab only)
if(!today)for(const w of [320,390,1440]){const {ctx,p}=await open({w});const r=await p.evaluate(()=>({over:document.documentElement.scrollWidth-innerWidth,small:[...document.querySelectorAll('button,.lab-controls button')].filter(e=>{const x=e.getBoundingClientRect();return x.width&&Math.min(x.width,x.height)<44&&!e.classList.contains('person')}).map(e=>e.textContent.trim()).slice(0,5),person:[...document.querySelectorAll('.person')].slice(0,8).every(e=>e.getBoundingClientRect().height>=44),tiny:[...document.querySelectorAll('body *')].filter(e=>[...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim())&&parseFloat(getComputedStyle(e).fontSize)<12&&!e.closest('.sr-only')).length,em:document.body.innerText.includes('—')}));
ck('P',r.over<=0,`no sideways scroll at ${w} wide`);ck('P',!r.small.length&&r.person,`targets 44 px at ${w} wide (${r.small.join(', ')})`);ck('P',r.tiny===0,`text 12 px or more at ${w} wide`);if(w===390)ck('P',!r.em,'no em dashes');await ctx.close();}

await b.close();
const fails=rows.filter(r=>!r[1]);for(const r of rows)console.log(`${r[1]?'pass':'FAIL'} ${r[0]} ${r[2]}`);
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
if(fails.length){console.error(`FAIL ${fails.length} of ${rows.length} carousel checks (${today?'today\'s rail':'lab'})`);process.exit(1)}
console.log(`PASS ${rows.length} carousel checks (${today?'today\'s rail':'lab'})`);})().catch(e=>{console.error(e.message||e);process.exit(1)});
