// HP11 (6 October 2026): an entity's type badge never covers its monogram. On the home rail and the recent list,
// the letters of every badged avatar stay clear of the badge at 390 and 320 wide, with 16, 24 and 32 px root text.
// Fails on the pre-fix build ("CJ", "HC" and "BC" were covered). Browser simulation only.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
(async()=>{const b=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});const fails=[];let checked=0;
for(const [w,px] of [[390,16],[320,16],[390,24],[320,32]]){const p=await b.newPage({viewport:{width:w,height:844}});
await p.goto('file://'+process.cwd()+'/v21.html?mobile=1&version=2.1.2.2');if(px!==16)await p.addStyleTag({content:`html{font-size:${px}px!important}`});await p.waitForTimeout(200);
const r=await p.evaluate(()=>[...document.querySelectorAll('.avatar')].filter(a=>a.querySelector('.type-mark')&&a.getBoundingClientRect().width).map(a=>{const m=a.querySelector('.identity-mark')||a;const t=[...m.childNodes].find(n=>n.nodeType===3&&n.textContent.trim());if(!t)return null;const g=document.createRange();g.selectNodeContents(t);const tr=g.getBoundingClientRect(),br=a.querySelector('.type-mark').getBoundingClientRect();const ix=Math.max(0,Math.min(tr.right,br.right)-Math.max(tr.left,br.left)),iy=Math.max(0,Math.min(tr.bottom,br.bottom)-Math.max(tr.top,br.top));return{txt:t.textContent.trim(),area:ix*iy};}).filter(Boolean));
for(const x of r){checked++;if(x.area>0)fails.push(`${w} px wide, ${px} px text: badge covers "${x.txt}"`);}await p.close();}
await b.close();if(!checked)throw Error('No badged avatars found');if(fails.length)throw Error(fails.join('\n'));console.log(`PASS ${checked} badge-clear checks`);})().catch(e=>{console.error(e.message||e);process.exit(1)});
