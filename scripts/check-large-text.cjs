// Audit M2/M3: browser text-size setting and short landscape. Uses Chromium's default font size preference
// (what a person changes in browser settings), not page zoom. Browser simulation only; not iOS Dynamic Type or Android font scale.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE),fs=require('fs'),os=require('os'),path=require('path');
(async()=>{const checks=[],ck=(v,t)=>{if(!v)throw Error('FAIL: '+t);checks.push(t)};
const url=h=>'file://'+process.cwd()+'/v21.html?mobile=1&version=2.1.2.1'+h;
for(const size of [16,24,32]){const dir=fs.mkdtempSync(path.join(os.tmpdir(),'v21-font-'));fs.mkdirSync(dir+'/Default');fs.writeFileSync(dir+'/Default/Preferences',JSON.stringify({webkit:{webprefs:{default_font_size:size}}}));
for(const vp of [{width:320,height:640},{width:390,height:844}]){const ctx=await chromium.launchPersistentContext(dir,{executablePath:process.env.BROWSER_PATH,viewport:vp,reducedMotion:'reduce',headless:true});const p=ctx.pages()[0]||await ctx.newPage();
for(const h of ['','#maya','#family','#coast','#harbour']){await p.goto(url(h));if(h==='#harbour')await p.locator('[data-tab=email]').click();
const r=await p.evaluate(()=>{const h2=document.querySelector('.app h2'),words=h2.textContent.trim().split(/\s+/),range=document.createRange();let split=false;const t=h2.firstChild;if(t&&t.nodeType===3){let i=0;for(const w of words){const s=t.textContent.indexOf(w,i);range.setStart(t,s);range.setEnd(t,s+w.length);if(range.getClientRects().length>1)split=true;i=s+w.length;}}
return {root:parseFloat(getComputedStyle(document.documentElement).fontSize),ox:document.documentElement.scrollWidth>innerWidth,scroll:document.querySelector('.scroll').getBoundingClientRect().height,split,body:parseFloat(getComputedStyle(document.querySelector('.app .preview, .app .local p, .app .object h3 + p')).fontSize),small:[...document.querySelectorAll('.app button')].filter(e=>e.offsetParent&&e.getBoundingClientRect().height<44).length}});
const tag=size+'px text, '+vp.width+' wide, '+(h.slice(1)||'home');
ck(r.body>=size*0.8,'Body text scales with the setting: '+tag);ck(!r.ox,'No horizontal overflow: '+tag);ck(!r.split,'Title words stay whole: '+tag);ck(r.small===0,'Buttons stay at least 44 px: '+tag);ck(r.scroll>=300,'Content area at least 300 px: '+tag);}
await ctx.close();}fs.rmSync(dir,{recursive:true,force:true});}
const b=await chromium.launch({executablePath:process.env.BROWSER_PATH,headless:true});const p=await b.newPage({viewport:{width:844,height:390}});
for(const h of ['#maya','#harbour']){await p.goto(url(h));const r=await p.evaluate(()=>({scroll:document.querySelector('.scroll').getBoundingClientRect().height,note:getComputedStyle(document.querySelector('.dock .note')).display,ph:document.querySelector('#reply').placeholder}));ck(r.scroll>=190,'Landscape conversation area at least 190 px: '+h);ck(r.note==='none'&&/Reply to|Email reply to/.test(r.ph),'Landscape audience moves into the composer placeholder: '+h);}
await b.close();
fs.writeFileSync('docs/large-text-check.json',JSON.stringify({audit:'MOBILE_AUDIT_LOG M2/M3',date:new Date().toISOString().slice(0,10),method:'Agent-operated headless Chromium; default font size preference set to 16, 24 and 32 px; 844 x 390 landscape. Not iOS Dynamic Type, Android font scale or a physical device.',checks},null,2)+'\n');
console.log('PASS '+checks.length+' large-text and landscape checks');})().catch(e=>{console.error(e.message);process.exit(1)});
