// Static studies: words stay whole, targets stay 44 px, text stays 12 px or more, shapes stay in the scale, phones never clip or overflow.
// Runs on studies/channel-discovery.html and studies/identity.html at 320 and 390 wide with 16, 24 and 32 px root text. Browser simulation only.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
const files=['studies/channel-discovery.html','studies/identity.html'];
const sizes=[[320,16],[390,16],[320,24],[390,24],[390,32]];
(async()=>{const b=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});const checks=[],ck=(v,t)=>{if(!v)throw Error('FAIL: '+t);checks.push(t)};
for(const f of files){for(const [w,fs] of sizes){const p=await b.newPage({viewport:{width:w,height:900}});await p.goto('file://'+process.cwd()+'/'+f);await p.addStyleTag({content:`html{font-size:${fs}px}`});
const r=await p.evaluate(()=>{
const broken=[];document.querySelectorAll('.tabs span,.btn,.head h2,.head small,.row b,.prow b,.card b,.switch span,.ctx span,.group-h,.strip span,.on').forEach(el=>{const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);let n;while(n=walker.nextNode()){const t=n.textContent,re=/\S+/g;let m;while(m=re.exec(t)){if(m[0].length<3)continue;const rg=document.createRange();rg.setStart(n,m.index);rg.setEnd(n,m.index+m[0].length);const tops=new Set([...rg.getClientRects()].filter(x=>x.width>0).map(x=>Math.round(x.top)));if(tops.size>1)broken.push(m[0]);}}});
const small=[];document.querySelectorAll('.phone *').forEach(el=>{if(!el.children.length&&el.textContent.trim()&&parseFloat(getComputedStyle(el).fontSize)<12)small.push(el.textContent.trim().slice(0,20));});
const targets=[];document.querySelectorAll('.btn,.round,.mark,.tabs span,.switch span,.prow,.row,.check').forEach(el=>{const r=el.getBoundingClientRect();if(r.height>0&&(r.height<44||r.width<44))targets.push(el.textContent.trim().slice(0,20)+' '+Math.round(r.width)+'x'+Math.round(r.height));});
const allowed=new Set(['50%','999px','12px','6px','4px','16px 16px 0px 0px']);const radii=[];document.querySelectorAll('.phone *').forEach(el=>{const br=getComputedStyle(el).borderRadius;if(br&&br!=='0px'&&!allowed.has(br))radii.push((el.className||el.tagName)+' '+br);});
const clipped=[...document.querySelectorAll('.phone')].filter(ph=>ph.scrollHeight>ph.clientHeight+1).length;
return {broken:[...new Set(broken)],small,targets,radii:[...new Set(radii)],clipped,overflow:document.documentElement.scrollWidth>innerWidth,phones:document.querySelectorAll('.phone').length};});
const tag=`${f} at ${w} wide, ${fs}px text`;
ck(r.phones>0,'Phones render: '+tag);
ck(r.broken.length===0,'Words stay whole: '+tag+' '+JSON.stringify(r.broken));
ck(r.small.length===0,'No text under 12 px: '+tag+' '+JSON.stringify(r.small));
ck(r.targets.length===0,'Targets at least 44 px: '+tag+' '+JSON.stringify(r.targets));
ck(r.radii.length===0,'Shapes stay in the scale (circle, pill, 12 px card, 16 px sheet, 6 px publication mark, 4 px checkbox): '+tag+' '+JSON.stringify(r.radii));
ck(r.clipped===0,'No phone body clipped: '+tag);
ck(!r.overflow,'No sideways overflow: '+tag);
await p.close();}}
await b.close();console.log('PASS '+checks.length+' study checks');})().catch(e=>{console.error(e.message);process.exit(1)});
