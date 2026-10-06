// Issue #2 (6 October 2026): a home that feels continuous. With 120 fictional conversations (?scale=120) the rail home
// groups recent activity by time, shows twenty at a time, narrows to unread, finds Maya by search and keeps its place
// after a conversation. One opening and closing motion, none with reduced motion. Fails on the pre-fix build.
// Browser simulation only: no real contact list, sync or device animation timing.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
(async()=>{const b=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});const checks=[],errors=[];const ck=(ok,t)=>{if(!ok)throw Error('FAIL '+t);checks.push(t)};
const base='file://'+process.cwd()+'/v21.html?mobile=1&version=2.1.2.2';
const p=await b.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});p.on('pageerror',e=>errors.push(e.message));
const rows=()=>p.locator('.recent .entry').count();const heads=()=>p.evaluate(()=>[...document.querySelectorAll('.recent .when')].map(h=>h.textContent));const act=()=>p.evaluate(()=>document.activeElement.dataset.open||document.activeElement.dataset.action||document.activeElement.id);
// the seven-conversation home still reads as before, now grouped
await p.goto(base);await p.waitForTimeout(150);ck(await rows()===7,'seven conversations, all shown');ck(JSON.stringify(await heads())==='["Today","This week"]','recent activity is grouped Today, This week');ck(await p.locator('[data-action=recent-more]').count()===0,'no Show more when everything fits');
ck(await p.evaluate(()=>{const s=document.querySelector('.recent .section-head');return !s.querySelector('.entry,.when')&&[...document.querySelectorAll('.recent .when')].every(h=>{const r=h.nextElementSibling.getBoundingClientRect(),q=h.getBoundingClientRect();return h.nextElementSibling.matches('.rows')&&q.bottom<=r.top+1&&Math.abs(q.left-r.left)<2})}),'each time heading sits above its own rows, full width');
// 120 conversations
await p.goto(base+'&scale=120');await p.waitForTimeout(150);ck(/120 conversations/.test(await p.textContent('.recent .section-head')),'the home states 120 conversations');ck(await rows()===20,'only the newest twenty are shown');ck(/Show 20 more · 100 older/.test(await p.textContent('[data-action=recent-more]')),'Show more says how many are left');
const order=await p.evaluate(()=>[...document.querySelectorAll('.recent .entry')].map(e=>e.closest('.rows').previousElementSibling.textContent));ck(order.every((w,i)=>i===0||['Today','This week','Earlier'].indexOf(w)>=['Today','This week','Earlier'].indexOf(order[i-1])),'groups run newest to oldest');
await p.click('[data-action=recent-more]');ck(await rows()===40,'Show more adds twenty');ck(await p.evaluate(()=>document.activeElement===document.querySelectorAll('.recent .entry')[20]),'focus moves to the first new conversation');
await p.click('[data-action=recent-more]');ck((await heads()).includes('Earlier'),'older conversations fall under Earlier');
// unread
const unread=await p.evaluate(()=>Number(document.querySelector('[data-action=recent-unread]').textContent.match(/\d+/)[0]));await p.click('[data-action=recent-unread]');ck(await p.getAttribute('[data-action=recent-unread]','aria-pressed')==='true','Unread reports its state');ck(await rows()===Math.min(unread,20)&&await p.locator('.recent .entry .badge').count()===await rows(),'Unread shows only unread conversations ('+unread+')');ck(await act()==='recent-unread','focus stays on the filter');
await p.click('[data-action=recent-all]');ck(await rows()===20,'All returns to the newest twenty');
// Maya by search among 120
await p.fill('#search','maya');ck(await p.locator('.entry').count()===1&&/Maya/.test(await p.textContent('.entry')),'search finds Maya among 120');await p.fill('#search','');
// leave and return keeps the place
await p.click('[data-action=recent-more]');await p.evaluate(()=>document.querySelector('.scroll').scrollTop=1400);const before=await p.evaluate(()=>document.querySelector('.scroll').scrollTop);const target=await p.evaluate(()=>{const s=document.querySelector('.scroll').getBoundingClientRect();const e=[...document.querySelectorAll('.recent .entry')].find(x=>x.getBoundingClientRect().top>s.top+40);return e.dataset.open});
await p.click(`.recent [data-open="${target}"]`);await p.waitForTimeout(100);await p.fill('#reply','Back soon');await p.click('[data-action=home]');await p.waitForTimeout(200);
ck(await rows()===40,'returning keeps forty shown');const after=await p.evaluate(()=>document.querySelector('.scroll').scrollTop);ck(Math.abs(after-before)<2,'returning keeps the scroll position ('+before+' / '+after+')');ck(/Draft/.test(await p.textContent(`.recent [data-open="${target}"]`)),'the draft shows on its row');
// names whole and readable, targets, overflow
for(const [w,px] of [[320,16],[390,32]]){await p.setViewportSize({width:w,height:844});await p.addStyleTag({content:`html{font-size:${px}px}`});await p.waitForTimeout(100);
const cut=await p.evaluate(()=>[...document.querySelectorAll('.recent .entry strong')].filter(s=>s.scrollWidth>s.clientWidth+1||getComputedStyle(s).textOverflow==='ellipsis'&&s.scrollWidth>s.clientWidth).map(s=>s.textContent));ck(!cut.length,`names stay whole at ${w} wide, ${px} px text`);
const small=await p.evaluate(()=>[...document.querySelectorAll('.recent button')].filter(x=>{const r=x.getBoundingClientRect();return r.width&&r.height<44}).map(x=>x.textContent.trim()));ck(!small.length,`recent controls are 44 px at ${px} px text (${small.join(', ')})`);
ck(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`no horizontal overflow at ${w} wide, ${px} px text`);}
// motion: reduced motion has none
await p.setViewportSize({width:390,height:844});await p.goto(base);await p.waitForTimeout(100);await p.click('[data-open=maya] >> nth=0');ck(await p.evaluate(()=>document.getAnimations().length)===0,'reduced motion: opening has no animation');await p.click('[data-action=home]');await p.waitForTimeout(50);ck(await p.evaluate(()=>document.getAnimations().length)===0,'reduced motion: closing has no animation');
await p.close();
// motion: one opening and closing study
const m=await b.newPage({viewport:{width:390,height:844},reducedMotion:'no-preference'});m.on('pageerror',e=>errors.push(e.message));await m.goto(base);await m.waitForTimeout(100);
const anim=()=>m.evaluate(()=>document.getAnimations().filter(a=>a.effect.target.parentElement?.id==='app').map(a=>({name:a.animationName,d:a.effect.getTiming().duration,props:Object.keys(a.effect.getKeyframes()[0]).filter(k=>!['offset','easing','composite','computedOffset'].includes(k))})));
await m.click('[data-open=maya] >> nth=0');let a=await anim();ck(a.length>0&&a.every(x=>x.name==='open-in'),'opening slides the conversation in');ck(a.every(x=>x.d<=200),'opening lasts 200 ms or less');ck(await m.evaluate(()=>{document.getAnimations().forEach(a=>{a.pause();a.currentTime=20});const ok=document.documentElement.scrollWidth<=innerWidth&&document.querySelector('.app').scrollWidth<=document.querySelector('.app').clientWidth;document.getAnimations().forEach(a=>a.play());return ok}),'the slide never causes sideways scrolling');ck(a.every(x=>x.props.every(k=>['opacity','transform'].includes(k))),'only transform and opacity move');ck(await m.evaluate(()=>document.activeElement.tagName)==='H2','focus lands on the conversation title during the motion');
await m.waitForTimeout(450);ck((await anim()).length===0&&!(await m.evaluate(()=>document.querySelector('#app').dataset.motion)),'the motion ends and does not repeat on the next render');await m.fill('#reply','x');ck((await anim()).length===0,'typing does not replay the motion');
await m.click('[data-action=home]');await m.waitForTimeout(30);a=await anim();ck(a.length>0&&a.every(x=>x.name==='close-in'),'closing slides home back from the other side');
await m.waitForTimeout(450);ck(await m.locator('.recent').count()===1,'home is whole after closing');
if(errors.length)throw Error(errors.join('\n'));await b.close();console.log(`PASS ${checks.length} continuous-home checks`);})().catch(e=>{console.error(e.message||e);process.exit(1)});
