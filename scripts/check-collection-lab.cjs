// Collection lab (7 October 2026): grids, lists and carousels, lab 1 rebuilt after the user research pass.
// Rules under test: stable by default (adding someone moves nobody; your order in every form), adaptable by choice
// (grid or list is the person's; large text suggests a list once), carousels only for sets that follow a line
// (an album; times that overflow), one screen reader stop per item, and the client frame around an interface that arrives.
// Usage: node scripts/check-collection-lab.cjs [path-to-lab.html]  (default studies/collection-lab.html).
// Run it against studies/carousel-lab.html to see the first lab fail.
// Browser simulation: touch is synthesised over CDP; screen reader structure is read from the markup, not VoiceOver.
// Research: RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md §1, §9.1 (F2, F5, F6, F8, F14); CHAT_SCROLLING.md.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);const path=require('path');
const LAB='file://'+path.resolve(process.cwd(),process.argv[2]||'studies/collection-lab.html');
(async()=>{const b=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});const rows=[],errors=[];
const ck=(id,ok,t)=>{rows.push([id,!!ok,t]);};
const tryck=async(id,t,fn)=>{try{ck(id,await fn(),t)}catch(e){ck(id,false,`${t} (${String(e.message||e).split('\n')[0].slice(0,90)})`)}};
const open=async(o={})=>{const ctx=await b.newContext({viewport:{width:o.w||390,height:844},hasTouch:true,isMobile:!!o.touch,reducedMotion:o.reduce?'reduce':'no-preference'});const p=await ctx.newPage();p.on('pageerror',e=>errors.push(e.message));await p.goto(LAB);await p.waitForTimeout(250);p.setDefaultTimeout(2500);return {ctx,p}};
const keys=p=>p.evaluate(()=>[...document.querySelectorAll('#home-phone .collection > li')].map(li=>li.dataset.key));
const activeIdx=(p,sel)=>p.evaluate(s=>[...document.querySelectorAll(s)].indexOf(document.activeElement),sel);
const ITEM='#home-phone .collection .item';

// H0: one screen reader stop per item, every button named
{const {ctx,p}=await open();
await tryck('H0','each favourite is one stop with a full name ("Maya, person")',()=>p.evaluate(()=>{const it=[...document.querySelectorAll('#home-phone .collection .item')];return it.length>0&&it.every(b=>/^.+, (person|group|publication|provider)$/.test(b.getAttribute('aria-label')||'')&&!b.querySelector('button,a,input,[tabindex]'))}));
await tryck('H0','each recent chat row is one stop holding name, last message and unread count',()=>p.evaluate(()=>{const li=[...document.querySelectorAll('#home-phone .rows > li')];return li.length>0&&li.every(l=>l.querySelectorAll('button,a,[tabindex]').length===1&&l.querySelector('.prev'))}));
await tryck('H0','each message is one block with its sender named for screen readers',()=>p.evaluate(()=>{const m=[...document.querySelectorAll('.phone .msg')];return m.length>0&&m.every(x=>{const n=x.querySelectorAll('button,a,input,[tabindex]').length;return x.classList.contains('album-msg')?n===1:n===0&&!!x.querySelector('.sr-only')})}));
await tryck('H0','the album is one stop that names the sender and all four photos',()=>p.evaluate(()=>{const a=document.querySelector('[data-album]');return !!a&&/Maya/.test(a.getAttribute('aria-label'))&&/4 photos/.test(a.getAttribute('aria-label'))}));
await tryck('H0','every button has a name',()=>p.evaluate(()=>[...document.querySelectorAll('button')].every(x=>(x.getAttribute('aria-label')||x.textContent).trim().length>0)));
await ctx.close();}

// H1 and H2: a sideways swipe moves a carousel, a vertical one moves the page; it lands on an item
{const {ctx,p}=await open({touch:true});const cdp=await ctx.newCDPSession(p);
await tryck('H1','a mostly sideways swipe moves the carousel only; a mostly vertical one moves the page only',async()=>{await p.click('[data-lab=slots]');await p.waitForTimeout(250);
  await p.evaluate(()=>document.querySelector('#slot-car .track').scrollIntoView({block:'center',behavior:'instant'}));await p.waitForTimeout(200);
  const box=await p.locator('#slot-car .track').boundingBox();const x0=box.x+box.width*.8,y0=box.y+box.height/2;
  const st=()=>p.evaluate(()=>[document.querySelector('#slot-car .track').scrollLeft,document.querySelector('#convo-phone .phone-scroll').scrollTop+scrollY]);
  const swipe=async(dx,dy)=>{await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:x0,y:y0}]});for(let i=1;i<=20;i++){await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:x0+dx*i/20,y:y0+dy*i/20}]});await p.waitForTimeout(16)}await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await p.waitForTimeout(1000)};
  const a=await st();await swipe(-200,20);const s1=await st();await swipe(20,-200);const s2=await st();
  return s1[0]-a[0]>40&&Math.abs(s1[1]-a[1])<2&&Math.abs(s2[0]-s1[0])<2&&s2[1]-s1[1]>20});
await tryck('H2','after a swipe the times land on an item',()=>p.evaluate(()=>{const tr=document.querySelector('#slot-car .track'),r=tr.getBoundingClientRect(),pad=parseFloat(getComputedStyle(tr).scrollPaddingInlineStart)||0;return [...tr.children].some(li=>Math.abs(li.getBoundingClientRect().left-(r.left+pad))<=3)}));
await ctx.close();}
{const {ctx,p}=await open();
await tryck('H2','the album shows one whole photo at a time and lands on it after Next',async()=>{await p.click('[data-album]');await p.waitForTimeout(300);await p.click('#album-car [data-car=next]');await p.waitForTimeout(700);return p.evaluate(()=>{const tr=document.querySelector('#album-car .track'),r=tr.getBoundingClientRect();const full=[...tr.children].filter(li=>{const s=li.getBoundingClientRect();return s.left>=r.left-2&&s.right<=r.right+2});return full.length===1&&full[0].getAttribute('aria-label')==='2 of 4'})});
await ctx.close();}

// H3: large text, words whole, in grid and in list
for(const form of ['grid','list']){const {ctx,p}=await open();
await tryck('H3',`names stay whole at 200% text in the ${form}`,async()=>{if(form==='list')await p.click('[data-form=list]');await p.addStyleTag({content:'html{font-size:200%!important}'});await p.waitForTimeout(250);
  const broken=await p.evaluate(()=>{const out=[];document.querySelectorAll('#home-phone .collection .item strong').forEach(el=>{const tn=[...el.childNodes].find(n=>n.nodeType===3);if(!tn)return;const txt=tn.textContent;let i=0;for(const w of txt.split(/(\s+)/)){if(w.trim()){const r=document.createRange();r.setStart(tn,i);r.setEnd(tn,i+w.length);const lines=new Set([...r.getClientRects()].map(x=>Math.round(x.top)));if(lines.size>1&&!/-/.test(w))out.push(w)}i+=w.length}if(el.scrollWidth>el.clientWidth+1)out.push(txt+' (overflow)')});return out});
  return broken.length===0});
await ctx.close();}

// H4: keyboard; one Tab stop per collection; position announced in the album
{const {ctx,p}=await open();
await tryck('H4','one Tab stop for the whole collection',()=>p.evaluate(()=>[...document.querySelectorAll('#home-phone .collection .item')].filter(b=>b.tabIndex===0).length===1));
await tryck('H4','arrow keys follow the grid; Home and End reach the ends',async()=>{const cols=await p.evaluate(()=>{const t=[...document.querySelectorAll('#home-phone .collection .item')].map(x=>Math.round(x.getBoundingClientRect().top));return t.filter(v=>v===t[0]).length});await p.focus(ITEM);await p.keyboard.press('ArrowRight');const a=await activeIdx(p,ITEM);await p.keyboard.press('ArrowDown');const d=await activeIdx(p,ITEM);await p.keyboard.press('End');const e=await activeIdx(p,ITEM);const n=await p.locator(ITEM).count();await p.keyboard.press('Home');const h=await activeIdx(p,ITEM);return cols>1&&a===1&&d===1+cols&&e===n-1&&h===0});
await tryck('H4','the album announces "1 of 4", then "2 of 4" after the right arrow',async()=>{await p.click('[data-album]');await p.waitForTimeout(300);const s1=await p.textContent('#album-car [role=status]');await p.keyboard.press('ArrowRight');await p.waitForTimeout(300);const s2=await p.textContent('#album-car [role=status]');return s1==='1 of 4'&&s2==='2 of 4'});
await ctx.close();}

// H5: buttons as well as swipe
{const {ctx,p}=await open();
await tryck('H5','previous and next are 44 px and off at the ends of the album',async()=>{await p.click('[data-album]');await p.waitForTimeout(300);const sz=await p.evaluate(()=>['prev','next'].map(k=>{const r=document.querySelector(`#album-car [data-car=${k}]`).getBoundingClientRect();return Math.min(r.width,r.height)}));const start=await p.evaluate(()=>document.querySelector('#album-car [data-car=prev]').disabled);for(let i=0;i<3;i++){await p.click('#album-car [data-car=next]');await p.waitForTimeout(600)}const end=await p.evaluate(()=>document.querySelector('#album-car [data-car=next]').disabled);return sz.every(x=>x>=44)&&start&&end});
await ctx.close();}

// H6: reduced motion
{const {ctx,p}=await open({reduce:true});
await tryck('H6','with reduced motion the album moves at once',async()=>{await p.click('[data-album]');await p.waitForTimeout(300);await p.click('#album-car [data-car=next]');await p.waitForTimeout(40);const mid=await p.evaluate(()=>document.querySelector('#album-car .track').scrollLeft);await p.waitForTimeout(500);const end=await p.evaluate(()=>document.querySelector('#album-car .track').scrollLeft);return end>0&&Math.abs(mid-end)<2});
await tryck('H6','with reduced motion changing grid to list does not glide',async()=>{await p.click('[data-form=list]');return p.evaluate(()=>document.getAnimations().length===0)});
await ctx.close();}

// H8: scale without hiding or moving anyone
{const {ctx,p}=await open();
await tryck('H8','with 500 favourites the home keeps the first 12 in place and adds an All 500 tile after them',async()=>{await p.click('[data-lab=many]');await p.waitForTimeout(300);return p.evaluate(()=>{const it=[...document.querySelectorAll('#home-phone .collection .item')];return it.length===13&&it[12].hasAttribute('data-all')&&/All 500/.test(it[12].textContent)})});
await tryck('H8','All shows every one of 500 in your order, and End reaches the last',async()=>{await p.click('[data-all]');await p.waitForTimeout(300);await p.focus(ITEM);await p.keyboard.press('End');await p.waitForTimeout(200);return p.evaluate(()=>{const it=[...document.querySelectorAll('#home-phone .collection .item')];const a=document.activeElement,sc=document.querySelector('#home-phone .phone-scroll').getBoundingClientRect(),r=a.getBoundingClientRect();return it.length===500&&a===it[499]&&r.top>=sc.top-1&&r.bottom<=sc.bottom+1})});
await ctx.close();}

// H9: return to what you left
{const {ctx,p}=await open();
await tryck('H9','back from a favourite returns focus to that favourite',async()=>{await p.locator(ITEM).nth(1).click();await p.click('[data-home=back]');return (await activeIdx(p,ITEM))===1});
await tryck('H9','back from a chat row returns focus to that row',async()=>{await p.click('[data-row="Harbour Café"]');await p.click('[data-home=back]');return p.evaluate(()=>document.activeElement===document.querySelector('[data-row="Harbour Café"]'))});
await tryck('H9','closing the album returns focus to the album, by button or Escape',async()=>{await p.click('[data-album]');await p.waitForTimeout(250);await p.click('[data-v=close]');const a=await p.evaluate(()=>document.activeElement===document.querySelector('[data-album]'));await p.click('[data-album]');await p.waitForTimeout(250);await p.keyboard.press('Escape');const b2=await p.evaluate(()=>document.activeElement===document.querySelector('[data-album]'));return a&&b2});
await tryck('H9','back from All returns focus to the All tile',async()=>{await p.click('[data-lab=many]');await p.waitForTimeout(250);await p.click('[data-all]');await p.click('[data-home=back-all]');return p.evaluate(()=>document.activeElement===document.querySelector('[data-all]'))});
await ctx.close();}

// H10: right to left
{const {ctx,p}=await open();await p.click('[data-lab=rtl]');await p.waitForTimeout(250);
await tryck('H10','right to left: the left arrow moves forward through the collection',async()=>{await p.focus(ITEM);await p.keyboard.press('ArrowLeft');const i=await activeIdx(p,ITEM);const x=await p.evaluate(()=>{const it=document.querySelectorAll('#home-phone .collection .item');return it[1].getBoundingClientRect().left<it[0].getBoundingClientRect().left});return i===1&&x});
await tryck('H10','right to left: your messages move to the other side',()=>p.evaluate(()=>{const o=document.querySelector('#convo-phone .msg.out').getBoundingClientRect(),i=document.querySelector('#convo-phone .msg:not(.out)').getBoundingClientRect();return o.left<i.left}));
await tryck('H10','right to left: a heading ends with its full stop, not before it',()=>p.evaluate(()=>{const h=document.querySelector('#home-phone h3');const w=document.createTreeWalker(h,NodeFilter.SHOW_TEXT);let t,n=null;while(t=w.nextNode())if(t.data.trim())n=t;const k=n.data.trimEnd().length;const r=document.createRange();r.setStart(n,k-1);r.setEnd(n,k);const dot=r.getBoundingClientRect();const a=document.createRange();a.selectNodeContents(h);return n.data.trimEnd().endsWith('.')&&a.getBoundingClientRect().right-dot.right<2}));
await ctx.close();}

// H11: changing form keeps order, place and the current person; the change glides briefly
{const {ctx,p}=await open();
await tryck('H11','grid and list show the same people in the same order',async()=>{const g=await keys(p);await p.click('[data-form=list]');await p.waitForTimeout(350);const l=await keys(p);return g.length>0&&JSON.stringify(g)===JSON.stringify(l)});
await tryck('H11','the person you were on stays current after the change',async()=>{await p.click('[data-form=grid]');await p.waitForTimeout(350);await p.focus(ITEM);await p.keyboard.press('ArrowRight');await p.click('[data-form=list]');await p.waitForTimeout(350);return p.evaluate(()=>{const c=[...document.querySelectorAll('#home-phone .collection .item')].filter(b=>b.tabIndex===0);return c.length===1&&/^Family/.test(c[0].getAttribute('aria-label'))})});
await tryck('H11','items glide to their new place in 300 ms or less',async()=>{await p.click('[data-form=grid]');const a=await p.evaluate(()=>document.getAnimations().map(x=>x.effect.getTiming().duration));return a.length>0&&a.every(d=>d>0&&d<=300)});
await tryck('H11','large text suggests a list once, and saying no keeps the grid',async()=>{const {ctx:c2,p:q}=await open();await q.click('[data-lab=large]');await q.waitForTimeout(200);const shown=await q.locator('.suggest').count();await q.click('[data-h=keep-grid]');await q.click('[data-lab=large]');await q.click('[data-lab=large]');await q.waitForTimeout(200);const again=await q.locator('.suggest').count();const form=await q.evaluate(()=>document.querySelector('#home-phone .collection').classList.contains('grid'));await c2.close();return shown===1&&again===0&&form});
await ctx.close();}

// H12: stable, and nothing hidden by the sender
{const {ctx,p}=await open();
await tryck('H12','adding a favourite moves nobody already shown; the new one goes at the end',async()=>{const pos=()=>p.evaluate(()=>{const c=document.querySelector('#home-phone .collection').getBoundingClientRect();return [...document.querySelectorAll('#home-phone .collection > li')].map(li=>{const r=li.getBoundingClientRect();return [li.dataset.key,Math.round(r.left-c.left),Math.round(r.top-c.top)]})});const r0=await pos();await p.click('[data-lab=add]');await p.waitForTimeout(400);const r1=await pos();return r1.length===r0.length+1&&r0.every((x,i)=>JSON.stringify(x)===JSON.stringify(r1[i]))&&r1[r1.length-1][0]==='Noor'});
await tryck('H12','five times that fit are all shown, with a count, and no carousel',()=>p.evaluate(()=>{const box=document.querySelector('#slot-box');const s=box.querySelector('.slots');return !!s&&!box.querySelector('.carousel')&&s.querySelectorAll('.slot').length===5&&/5 times · all shown/.test(box.textContent)&&s.scrollWidth<=s.clientWidth+1}));
await tryck('H12','twelve times say they are more than fit and offer Show all',async()=>{await p.click('[data-lab=slots]');await p.waitForTimeout(250);return p.evaluate(()=>{const box=document.querySelector('#slot-box');return !!box.querySelector('#slot-car')&&/12 times · more than fit/.test(box.textContent)&&!!box.querySelector('[data-c=all]')})});
await tryck('H12','Show all lays out all twelve with nothing past the edge',async()=>{await p.click('[data-c=all]');await p.waitForTimeout(250);return p.evaluate(()=>{const s=document.querySelector('#slot-box .slots');if(!s)return false;const f=document.querySelector('#convo-phone .frame').getBoundingClientRect();const b=[...s.querySelectorAll('.slot')];return b.length===12&&b.every(x=>{const r=x.getBoundingClientRect();return r.left>=f.left&&r.right<=f.right})})});
await ctx.close();}

// H13: states
{const {ctx,p}=await open();
await tryck('H13','no favourites shows an empty state that says how to add someone',async()=>{await p.click('[data-lab=none]');await p.waitForTimeout(200);return p.evaluate(()=>!!document.querySelector('#home-phone .empty')&&/choose Keep close/.test(document.querySelector('#home-phone .empty').textContent)&&!document.querySelector('#home-phone .collection'))});
await tryck('H13','a time taken since sent is marked, cannot be chosen, and says why',async()=>{await p.click('[data-lab=taken]');await p.waitForTimeout(200);const s='#convo-phone [data-slot="1"]';const lab=await p.textContent(s);await p.click(s,{force:true});return /Taken since sent/.test(lab)&&(await p.getAttribute(s,'aria-disabled'))==='true'&&(await p.getAttribute(s,'aria-pressed'))==='false'&&/taken after Harbour Café sent/.test(await p.textContent('#convo-status'))});
await tryck('H13','offline: sending is called queued, never sent or accepted',async()=>{await p.click('[data-lab=offline]');await p.click('#convo-phone [data-slot="0"]');await p.click('[data-c=suggest]');const btn=await p.textContent('[data-c=send]');await p.click('[data-c=send]');const rc=await p.textContent('#convo-phone .receipt');return /Queue to send/.test(btn)&&/Queued on this phone · not sent yet/.test(rc)&&!/accepted/.test(rc)});
await tryck('H13','back online, the queued reply is accepted, delivery still unconfirmed',async()=>{await p.click('[data-lab=offline]');await p.waitForTimeout(200);return /accepted by server, delivery unconfirmed/.test(await p.textContent('#convo-phone .receipt'))});
await ctx.close();}

// H14: profiles are isolation boundaries
{const {ctx,p}=await open();
await tryck('H14','switching to Work shows only Work\'s favourites and names the profile',async()=>{const per=await keys(p);await p.click('[data-lab=profile]');await p.waitForTimeout(200);const wk=await keys(p);const st=await p.textContent('#lab-status');return wk.join()==='Dana,Ops team,Supplier desk'&&!wk.some(k=>per.includes(k))&&/Switched to Work/.test(st)});
await tryck('H14','switching back shows Personal\'s favourites and no Work ones',async()=>{await p.click('[data-lab=profile]');await p.waitForTimeout(200);const k=await keys(p);return k[0]==='Maya'&&!k.includes('Dana')});
await ctx.close();}

// F: the frame around an interface that arrives
{const {ctx,p}=await open();const draft=()=>p.inputValue('#reply');const msgs=()=>p.locator('#convo-phone .msg.out').count();let d0='',m0=0;
await tryck('F','a sender mark says who sent the interface and what it cannot do',async()=>{d0=await draft();m0=await msgs();const t=await p.textContent('#convo-phone .frame-head');return /Harbour Café · interface/.test(t)&&/Cannot send/i.test(t)});
await tryck('F','choosing a time sends nothing and shows the choice',async()=>{await p.click('#convo-phone [data-slot="1"]');return (await msgs())===m0&&(await p.getAttribute('#convo-phone [data-slot="1"]','aria-pressed'))==='true'});
await tryck('F','review names the audience, identity and exact text, as the client\'s own step',async()=>{await p.click('[data-c=suggest]');const t=await p.textContent('.review');return /To Harbour Café · private conversation · as Austin/.test(t)&&/12:30/.test(t)&&!(await p.evaluate(()=>!!document.querySelector('.frame .review')))});
await tryck('F','cancel sends nothing and says so',async()=>{await p.click('[data-c=cancel]');return (await msgs())===m0&&/Nothing was sent/.test(await p.textContent('#convo-status'))});
await tryck('F','sending leaves one message and an honest receipt; your draft is untouched',async()=>{await p.click('#convo-phone [data-slot="1"]');await p.click('[data-c=suggest]');await p.click('[data-c=send]');return (await msgs())===m0+1&&/accepted by server, delivery unconfirmed/.test(await p.textContent('#convo-phone .receipt'))&&(await draft())===d0&&d0.length>0});
await ctx.close();}

// A: audit, 7 October 2026 (Kings of Mobile Design pass on this lab). Each check failed on the lab as first built.
{const {ctx,p}=await open();
await tryck('A1','the 13th favourite moves nobody: the first 12 stay in place and an All tile follows them',async()=>{for(let i=0;i<4;i++)await p.click('[data-lab=add]');const a=await keys(p);await p.click('[data-lab=add]');await p.waitForTimeout(300);const c=await keys(p);return a.length===12&&c.length===13&&a.every((k,i)=>c[i]===k)&&c[12]==='__all'});
await ctx.close();}
{const {ctx,p}=await open();
await tryck('A2','focus stays inside the open album; Escape still closes it and returns to the album',async()=>{await p.click('[data-album]');await p.waitForTimeout(300);for(let i=0;i<8;i++)await p.keyboard.press('Tab');const inside=await p.evaluate(()=>!!document.activeElement.closest('.viewer'));await p.keyboard.press('Escape');await p.waitForTimeout(100);const back=await p.evaluate(()=>!document.querySelector('.viewer')&&document.activeElement===document.querySelector('[data-album]'));return inside&&back});
await tryck('A3','back in a conversation returns to its row on the home',async()=>{await p.click('#convo-phone [data-back]');return p.evaluate(()=>document.activeElement===document.querySelector('#home-phone [data-row="Harbour Café"]'))});
await tryck('A3','sending your own reply adds it with an honest receipt and clears the box',async()=>{await p.click('#album-phone [data-send]');const t=await p.evaluate(()=>{const m=[...document.querySelectorAll('#album-phone .msg.out')].pop();return [m.textContent,document.getElementById('maya-reply').value]});return /Love the boats/.test(t[0])&&/accepted by server, delivery unconfirmed/.test(t[0])&&t[1]===''});
await tryck('A3','sending an empty reply sends nothing and says so',async()=>{const n=await p.locator('#album-phone .msg.out').count();await p.click('#album-phone [data-send]');return (await p.locator('#album-phone .msg.out').count())===n&&/Nothing to send/.test(await p.textContent('#lab-status'))});
await tryck('A4','recent rows draw each entity in its own shape (group, provider, person)',()=>p.evaluate(()=>{const av=n=>document.querySelector(`#home-phone [data-row="${n}"] .av`).classList;return av('Family').contains('group')&&av('Harbour Café').contains('provider')&&av('Maya').contains('person-shape')}));
await tryck('A7','text on photos sits on a solid background',()=>p.evaluate(()=>[...document.querySelectorAll('.album .tile span')].every(e=>{const m=getComputedStyle(e).backgroundColor.match(/[\d.]+/g);return m&&(m[3]===undefined||+m[3]===1)})));
await ctx.close();}
{const {ctx,p}=await open();
await tryck('A5','in the Work profile, Personal conversations are closed, and the review names the profile',async()=>{const r=await (async()=>{await p.click('#convo-phone [data-slot="0"]');await p.click('[data-c=suggest]');return p.textContent('.review')})();await p.click('[data-lab=profile]');await p.waitForTimeout(150);const closed=await p.evaluate(()=>['#album-phone','#convo-phone'].every(s=>/belongs to your Personal profile/.test(document.querySelector(s).textContent)&&!document.querySelector(s+' .msg')));await p.click('[data-lab=profile]');await p.waitForTimeout(150);const draft=await p.inputValue('#reply');return /Personal profile/.test(r)&&closed&&draft==='Thanks, see you then'});
await ctx.close();}
{const {ctx,p}=await open();
await tryck('A6','photos still arriving say so in the album and the viewer, never shown as broken',async()=>{await p.click('[data-lab=arriving]');await p.waitForTimeout(150);const lab=await p.getAttribute('[data-album]','aria-label');await p.click('[data-album]');await p.waitForTimeout(250);const v=await p.evaluate(()=>document.querySelectorAll('#album-car .photo.receiving').length);return /2 still receiving/.test(lab)&&v===2});
await ctx.close();}
{const {ctx,p}=await open();
await tryck('A8','after a resize the client measures again: times that no longer fit become a carousel',async()=>{await p.addStyleTag({content:'html{font-size:200%!important}'});await p.setViewportSize({width:391,height:844});await p.waitForTimeout(400);return p.evaluate(()=>!!document.querySelector('#slot-car'))});
await ctx.close();}

// Photos: real, licensed, stored with the lab; nothing loads from another site
{const {ctx,p}=await open();const ext=[];p.on('request',r=>{if(!r.url().startsWith('file:'))ext.push(r.url())});await p.reload();await p.waitForTimeout(400);
await tryck('PH','the four album photos load from this repository and none is broken',()=>p.evaluate(()=>{const im=[...document.querySelectorAll('.album .tile img')];return im.length===4&&im.every(i=>i.complete&&i.naturalWidth>0&&!/^https?:/.test(i.getAttribute('src')))}));
await tryck('PH','the album viewer shows each photo whole, with its caption on solid white',async()=>{await p.click('[data-album]');await p.waitForTimeout(300);return p.evaluate(()=>[...document.querySelectorAll('#album-car .photo')].every(d=>{const i=d.querySelector('img');return i&&getComputedStyle(i).objectFit==='contain'&&i.naturalWidth>0&&getComputedStyle(d.querySelector('span')).backgroundColor==='rgb(255, 255, 255)'}))});
ck('PH',ext.length===0,`no requests to other sites${ext.length?' ('+ext.slice(0,2).join(', ')+')':''}`);
await tryck('PH','the photographers are credited with links to the photos',()=>p.evaluate(()=>['Kirt Morris','Ruben Aster','Richard Stachmann','Ingrid Martinussen'].every(n=>[...document.querySelectorAll('a[href^="https://unsplash.com/photos/"]')].some(a=>a.textContent===n))));
await ctx.close();}

// P: the page itself
for(const w of [320,390,1440]){const {ctx,p}=await open({w});const r=await p.evaluate(()=>({over:document.documentElement.scrollWidth-innerWidth,small:[...document.querySelectorAll('button')].filter(e=>{const x=e.getBoundingClientRect();return x.width&&Math.min(x.width,x.height)<44}).map(e=>(e.getAttribute('aria-label')||e.textContent).trim()).slice(0,5),tiny:[...document.querySelectorAll('body *')].filter(e=>[...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim())&&parseFloat(getComputedStyle(e).fontSize)<12&&!e.closest('.sr-only')).length,em:document.body.innerText.includes('—')}));
ck('P',r.over<=0,`no sideways scroll at ${w} wide`);ck('P',!r.small.length,`targets 44 px at ${w} wide${r.small.length?' ('+r.small.join(', ')+')':''}`);ck('P',r.tiny===0,`text 12 px or more at ${w} wide`);if(w===390)ck('P',!r.em,'no em dashes');await ctx.close();}

await b.close();
const fails=rows.filter(r=>!r[1]);for(const r of rows)console.log(`${r[1]?'pass':'FAIL'} ${r[0]} ${r[2]}`);
if(errors.length)console.error('page errors: '+[...new Set(errors)].join(' | '));
if(fails.length){console.error(`FAIL ${fails.length} of ${rows.length} collection checks`);process.exit(1)}
if(errors.length)process.exit(1);
console.log(`PASS ${rows.length} collection checks`);})().catch(e=>{console.error(e.message||e);process.exit(1)});
