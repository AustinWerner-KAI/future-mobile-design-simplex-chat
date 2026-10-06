// The whole story (6 October 2026). showcase.html tells every chapter; each live phone opens on its own state; images load;
// local links resolve; no em dashes; no overflow; targets and text size. The homepage leads to V2.1.2.3 and the story,
// old version links are aliases, and ?tab= only opens a tab the conversation has. Fails on the pre-fix build.
// Browser simulation only.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);const fs=require('fs'),path=require('path');
(async()=>{const b=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});const checks=[],errors=[];const ck=(ok,t)=>{if(!ok)throw Error('FAIL '+t);checks.push(t)};
const root=process.cwd(),file=f=>'file://'+path.join(root,f);
ck(fs.existsSync(path.join(root,'showcase.html')),'showcase.html exists');
const p=await b.newPage({viewport:{width:1440,height:900}});p.on('pageerror',e=>errors.push('showcase: '+e.message));
await p.goto(file('showcase.html'));await p.evaluate(()=>document.querySelectorAll('img,iframe').forEach(x=>x.loading='eager'));await p.waitForTimeout(2500);
// chapters
const ids=await p.evaluate(()=>[...document.querySelectorAll('.toc a')].map(a=>a.getAttribute('href')));ck(ids.length===10&&await p.evaluate(ids=>ids.every(h=>document.querySelector(h)),ids),'ten chapters, each linked from the contents');
ck(/V2\.1\.2\.3/.test(await p.textContent('.hero .cta'))&&(await p.getAttribute('.hero .cta','href')).includes('version=2.1.2.3'),'the first action opens V2.1.2.3');
ck(/participants so far/.test(await p.textContent('.facts')),'the page states that no participant has used it yet');
// images
const broken=await p.evaluate(()=>[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.getAttribute('src')));ck(!broken.length,'every image loads ('+broken.join(', ')+')');
ck(await p.evaluate(()=>[...document.images].every(i=>i.alt&&i.alt.length>3)),'every image has a description');
// live phones open on their states
const frames=await p.evaluate(()=>[...document.querySelectorAll('.phone iframe')].map(f=>({src:f.getAttribute('src'),title:f.title})));ck(frames.length===7,'seven live phones');
const expect=[['','Close at hand.',d=>!!d.querySelector('[data-action=profiles]')],['#directory','Public directory',d=>!!d.querySelector('.listing, [data-action]')],['tab=email#harbour','Harbour Café',d=>!!d.querySelector('.carry')],['scale=120','Close at hand.',d=>/120 conversations/.test(d.querySelector('.recent').textContent)],['#alex','Alex',d=>!!d.querySelector('.photo-object')],['#maya','Maya',d=>!!d.querySelector('[data-action=photo-open]')],['tab=email#harbour','Harbour Café',d=>!!d.querySelector('[data-action=thread-toggle]')&&!!d.querySelector('[data-action=fwd-toggle]')]];
const handles=await p.$$('.phone iframe');for(let i=0;i<handles.length;i++){const fr=await handles[i].contentFrame();const [frag,h2,fn]=expect[i];const src=frames[i].src;ck(src.includes('version=2.1.2.3')&&(frag===''?!/[#&]/.test(src.split('version=2.1.2.3')[1]):src.includes(frag)),`phone ${i+1} links ${frag||'the home'}`);
const ok=await fr.evaluate(([h2,fs])=>{const f=new Function('d','return ('+fs+')(d)');return document.querySelector('#app h2').textContent.trim()===h2&&f(document);},[h2,fn.toString()]);ck(ok,`phone ${i+1} opens on ${h2}${frag?' ('+frag+')':''}`);ck(!!frames[i].title,`phone ${i+1} has a title`);}
// links
const hrefs=await p.evaluate(()=>[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')));const missing=hrefs.filter(h=>!/^(https?:|#|mailto:)/.test(h)).map(h=>h.split(/[?#]/)[0]||'index.html').map(h=>h.endsWith('/')?h+'index.html':h).filter(h=>!fs.existsSync(path.join(root,h)));ck(!missing.length,'every local link resolves ('+missing.join(', ')+')');
const deadHash=await p.evaluate(()=>[...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')).filter(h=>!document.querySelector(h)));ck(!deadHash.length,'every in-page link has a target ('+deadHash.join(', ')+')');
// words and layout
ck(!(await p.evaluate(()=>document.body.innerText+document.title+[...document.querySelectorAll('[alt],[title],[aria-label]')].map(x=>(x.alt||'')+(x.title||'')+(x.getAttribute('aria-label')||'')).join(''))).includes('—'),'no em dashes on the page');
for(const [w,h] of [[1440,900],[390,844],[320,700]]){await p.setViewportSize({width:w,height:h});await p.waitForTimeout(150);
ck(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`no horizontal overflow at ${w} wide`);
const small=await p.evaluate(()=>[...document.querySelectorAll('nav a,.cta,.text-link,.links a,.toc a')].filter(x=>{const r=x.getBoundingClientRect();return r.width&&r.height<44}).map(x=>x.textContent.trim()));ck(!small.length,`targets are 44 px at ${w} wide (${small.join(', ')})`);
const tiny=await p.evaluate(()=>[...document.querySelectorAll('body *')].filter(x=>[...x.childNodes].some(c=>c.nodeType===3&&c.textContent.trim())&&parseFloat(getComputedStyle(x).fontSize)<12).map(x=>x.textContent.trim().slice(0,30)));ck(!tiny.length,`text is 12 px or more at ${w} wide (${tiny.join(', ')})`);
const phone=await p.evaluate(()=>{const f=document.querySelector('.phone');const r=f.getBoundingClientRect();return r.right<=innerWidth&&r.left>=0});ck(phone,`live phones fit the screen at ${w} wide`);}
await p.close();
// homepage leads to the latest edit and the story
const h=await b.newPage({viewport:{width:390,height:844}});h.on('pageerror',e=>errors.push('index: '+e.message));await h.goto(file('index.html'));await h.waitForTimeout(300);
ck((await h.getAttribute('.hero .cta','href')).includes('version=2.1.2.3')&&/V2\.1\.2\.3/.test(await h.textContent('.hero .cta')),'homepage hero opens V2.1.2.3');
ck(await h.locator('.hero a[href="showcase.html"]').count()===1&&await h.locator('#latest a[href="showcase.html"]').count()>=1,'homepage links the whole story from the hero and the latest section');
ck(/V2\.1\.2\.3/.test(await h.textContent('#latest h2'))&&/V2\.1\.2\.3/.test(await h.textContent('aside[aria-label="Latest design version"]')),'the banner and the latest section name V2.1.2.3');
ck(!(await h.evaluate(()=>document.body.innerText)).includes('—'),'no em dashes on the homepage');await h.close();
// every page banner names the same latest edit
const pages=['v2.html','v21-options.html','v2121.html','concepts.html','studies/why-grids.html','studies/concept-progression.html'];for(const pg of pages){const t=fs.readFileSync(path.join(root,pg),'utf8');ck(/<aside aria-label="Latest design version"[\s\S]*?version=2\.1\.2\.3[\s\S]*?showcase\.html[\s\S]*?<\/aside>/.test(t),`${pg} banner names V2.1.2.3 and the story`);}
// runtime: aliases and the tab parameter
const r=await b.newPage({viewport:{width:390,height:844}});r.on('pageerror',e=>errors.push('runtime: '+e.message));
for(const v of ['2.1.2.1','2.1.2.2','2.1.2.3']){await r.goto(file('v21.html')+'?mobile=1&version='+v);await r.waitForTimeout(100);ck(/^2\.1\.2\.3/.test(await r.textContent('.app footer span'))&&(await r.textContent('#app h2')).trim()==='Close at hand.',`version=${v} opens V2.1.2.3`);}
await r.goto(file('v21.html')+'?mobile=1&version=2.1.2.3&tab=email#harbour');await r.waitForTimeout(100);ck(await r.getAttribute('[data-tab=email]','aria-pressed')==='true','tab=email opens Harbour Café on email');
await r.goto(file('v21.html')+'?mobile=1&version=2.1.2.3&tab=email#maya');await r.waitForTimeout(100);ck(await r.getAttribute('[data-tab=chat]','aria-pressed')==='true','an invalid tab is ignored');
await r.goto(file('v21.html')+'?mobile=1&version=2.1.2.3&tab=proposal#maya');await r.waitForTimeout(100);ck(await r.getAttribute('[data-tab=proposal]','aria-pressed')==='true','tab=proposal opens Maya on the proposal');
if(errors.length)throw Error(errors.join('\n'));await b.close();console.log(`PASS ${checks.length} showcase checks`);})().catch(e=>{console.error(e.message||e);process.exit(1)});
