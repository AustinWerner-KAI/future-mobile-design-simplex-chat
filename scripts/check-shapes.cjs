// Runtime shape scale: every radius in the V2.1.2.1 runtime belongs to the scale set on 5 October 2026.
// Circle (people, round controls), pill (every action and selected state), 12 px (every container), 16 px (dialogs),
// 6 px (publication mark), 5 px (type badge), 30 px (the device frame on desktop). Also: a tile inside a multi-column grid
// is anchored, with a visible edge or background, or centred content; never left-aligned in an invisible cell (T11 tiles, 5 October 2026). Browser simulation only.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
const allowed=new Set(['50%','999px','12px','16px','6px','5px','30px']);
const screens=[['home',''],['maya','#maya'],['family','#family'],['coast','#coast'],['harbour','#harbour'],['directory','#directory']];
(async()=>{const b=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});const checks=[],ck=(v,t)=>{if(!v)throw Error('FAIL: '+t);checks.push(t)};
for(const [w,h] of [[390,844],[1440,900]]){const p=await b.newPage({viewport:{width:w,height:h}});
for(const [name,hash] of screens){await p.goto('file://'+process.cwd()+'/v21.html?mobile=1&version=2.1.2.1'+hash);await p.waitForTimeout(100);
if(name==='harbour'){await p.click('[data-tab=email]');await p.click('.carry > summary');await p.waitForTimeout(100);}
if(name==='directory'){await p.click('[data-listing=tides]');await p.waitForTimeout(700);}
if(name==='coast'){await p.click('[data-comment]');await p.click('[data-action=more]');await p.waitForTimeout(100);}
const bad=await p.evaluate(ok=>{const out=new Set();document.querySelectorAll('.app *').forEach(el=>{const br=getComputedStyle(el).borderRadius;if(br&&br!=='0px'&&!ok.includes(br))out.add((el.className&&el.className.baseVal===undefined?el.className.split(' ')[0]:el.tagName)+' '+br);});return [...out];},[...allowed]);
ck(bad.length===0,`Shapes stay in the scale on ${name} at ${w} wide ${JSON.stringify(bad)}`);
const floating=await p.evaluate(()=>{const out=[];document.querySelectorAll('.app *').forEach(g=>{const cs=getComputedStyle(g);if(cs.display!=='grid'||cs.gridTemplateColumns.split(' ').length<2)return;[...g.children].forEach(c=>{const k=getComputedStyle(c);const edge=(parseFloat(k.borderTopWidth)>0&&!k.borderTopColor.startsWith('rgba(0, 0, 0, 0)'))||(k.backgroundColor!=='rgba(0, 0, 0, 0)');const centred=k.justifyContent==='center'||k.textAlign==='center'||(k.display==='grid'&&k.placeItems.includes('center'));if(!edge&&!centred)out.push((typeof c.className==='string'?c.className.split(' ')[0]:c.tagName));});});return [...new Set(out)];});
ck(floating.length===0,`Grid tiles are anchored (visible edge or centred content) on ${name} at ${w} wide ${JSON.stringify(floating)}`);}
await p.close();}
// dialogs
const p=await b.newPage({viewport:{width:390,height:844}});await p.goto('file://'+process.cwd()+'/v21.html?mobile=1&version=2.1.2.1');
for(const a of ['invite','favourites']){await p.click(`[data-action=${a}]`);const bad=await p.evaluate(ok=>{const out=new Set();document.querySelectorAll('dialog[open], dialog[open] *').forEach(el=>{const br=getComputedStyle(el).borderRadius;if(br&&br!=='0px'&&!ok.includes(br))out.add((typeof el.className==='string'?el.className.split(' ')[0]:el.tagName)+' '+br);});return [...out];},[...allowed]);ck(bad.length===0,'Shapes stay in the scale in the '+a+' dialog '+JSON.stringify(bad));await p.keyboard.press('Escape');}
await b.close();console.log('PASS '+checks.length+' shape checks');})().catch(e=>{console.error(e.message);process.exit(1)});
