// Issue #6 (6 October 2026): one relationship, distinct channels. Harbour Café's email tab shows the thread and who
// wrote each message, flags a different sender address without inferring identity, keeps the attachment with the email,
// and forwards only through a reviewed crossing by ordinary email, with queued, accepted and bounced states.
// Fails on the pre-fix build. Browser simulation only: no mailbox, transport or delivery.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
(async()=>{const b=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});const checks=[],errors=[];const ck=(ok,t)=>{if(!ok)throw Error('FAIL '+t);checks.push(t)};
const p=await b.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});p.on('pageerror',e=>errors.push(e.message));const url='file://'+process.cwd()+'/v21.html?mobile=1&version=2.1.2.2';
const txt=s=>p.locator(s).first().innerText();const act=()=>p.evaluate(()=>document.activeElement.dataset.action||document.activeElement.id);
await p.goto(url+'#harbour');await p.waitForTimeout(150);await p.click('[data-tab=email]');
ck(await p.locator('[data-action=thread-toggle]').count()===1,'the email shows its thread');ck(/Thread · 2 messages · latest shown/.test(await txt('.object.email')),'thread size is stated');
ck(/Attachment: menu\.pdf · 2 pages · stays with this email/.test(await txt('.attachment-chip')),'the attachment is named and stays with the email');
await p.click('[data-action=thread-toggle]');ck(await p.getAttribute('[data-action=thread-toggle]','aria-expanded')==='true','the thread toggle reports its state');ck(/From: sam@harbour\.example · Thursday/.test(await txt('.earlier')),'each earlier message names its sender');
const idn=await txt('.identity-note');ck(/Different address from the latest message/.test(idn)&&/Not verified as Harbour Café/.test(idn),'a different sender address is flagged, not merged');
ck(await act()==='thread-toggle','focus stays on the thread toggle');
// email reply stays independent, carry crossing excludes attachments
await p.fill('#reply','Thanks, 12:30 please.');await p.click('.carry > summary');await p.click('label.recipient:has([value=family])');await p.click('[data-action=review-detail]');await p.click('.sharing-help summary');ck(/attachments/.test(await txt('.sharing-help')),'bringing a detail to a chat says attachments stay out');await p.click('[data-action=cancel-detail]');
// forward: invalid, review, includes, cancel
await p.click('[data-action=fwd-toggle]');ck(await act()==='fwd-to','Forward by email opens with focus on the address');ck(await p.locator('[data-action=fwd-review]').isDisabled(),'review is blocked without an address');
await p.fill('#fwd-to','alex@');ck(await p.locator('[data-action=fwd-review]').isDisabled()&&/does not look like an email address/.test(await txt('.fwd-hint')),'an invalid address explains itself');
await p.fill('#fwd-to','alex@studio.example');ck(!(await p.locator('[data-action=fwd-review]').isDisabled()),'a valid address can be reviewed');ck(!(await p.isChecked('#fwd-attach')),'the attachment is not included unless chosen');
await p.click('[data-action=fwd-review]');let rv=await txt('.forward-tool .boundary');ck(/To alex@studio\.example · by ordinary email, outside SimpleX/.test(rv),'review names the address and the transport');ck(/menu\.pdf is not included/.test(rv)&&/Earlier messages in the thread are not included/.test(rv),'review states what is left out');ck(await act()==='fwd-send','focus moves to Send forward');
await p.click('[data-action=fwd-cancel]');ck(await p.locator('.fwd-list').count()===0&&/Nothing was forwarded/.test(await txt('.app .feedback')),'cancel sends nothing');
// forward with attachment to an address that bounces
await p.click('[data-action=fwd-toggle]');await p.fill('#fwd-to','alex@studio.invalid');await p.check('#fwd-attach');await p.click('[data-action=fwd-review]');ck(/latest email text and menu\.pdf/.test(await txt('.forward-tool .boundary')),'review lists the attachment once chosen');
await p.click('[data-action=fwd-change]');ck(await p.inputValue('#fwd-to')==='alex@studio.invalid'&&await p.isChecked('#fwd-attach'),'Change keeps the address and the choice');await p.click('[data-action=fwd-review]');
await p.click('[data-action=fwd-send]');ck(/Queued/.test(await txt('.fwd-item small')),'a forward is queued first');await p.waitForTimeout(700);ck(/Accepted by your server in simulation · delivery unconfirmed/.test(await txt('.fwd-item small')),'then accepted by your server, delivery unconfirmed');await p.waitForTimeout(700);
ck(/Bounced · the receiving server rejected this address/.test(await txt('.fwd-item small'))&&/Nothing was delivered/.test(await txt('.fwd-item small')),'a bounce arrives after acceptance and says nothing was delivered');ck(await p.locator('.fwd-item.failed [data-action=fwd-edit]').count()===1,'a bounce offers Edit address and Remove');
await p.click('[data-action=fwd-edit]');ck(await p.inputValue('#fwd-to')==='alex@studio.invalid'&&await p.isChecked('#fwd-attach')&&await p.locator('.fwd-item').count()===0,'Edit address reopens the forward with its choices');
await p.fill('#fwd-to','alex@studio.example');await p.click('[data-action=fwd-review]');await p.click('[data-action=fwd-send]');await p.waitForTimeout(1500);ck(await p.locator('.fwd-item').count()===1&&/Accepted/.test(await txt('.fwd-item small')),'the corrected forward is accepted, once');
ck(await p.inputValue('#reply')==='Thanks, 12:30 please.','the email reply draft is untouched by forwarding');
// return keeps state; other channels unaffected
await p.click('[data-action=home]');await p.waitForTimeout(150);await p.click('[data-open=harbour] >> nth=0');await p.waitForTimeout(150);await p.click('[data-tab=email]');ck(await p.locator('.fwd-item').count()===1&&await p.getAttribute('[data-action=thread-toggle]','aria-expanded')==='true','leaving and returning keeps the thread view and forwards');
await p.click('[data-tab=chat]');ck(await p.locator('.forward-tool').count()===0&&await p.locator('.attachment-chip').count()===0,'staff chat shows none of the email tools');
// targets and overflow
await p.click('[data-tab=email]');await p.click('[data-action=fwd-toggle]');const small=await p.evaluate(()=>[...document.querySelectorAll('.object.email button,.forward-tool button,.forward-tool input')].filter(x=>{const r=x.getBoundingClientRect();return r.width&&r.height<44&&x.type!=='checkbox'}).map(x=>x.textContent.trim()||x.id));ck(!small.length,'email controls are 44 px ('+small.join(', ')+')');
for(const [w,px] of [[320,16],[390,32]]){await p.setViewportSize({width:w,height:844});await p.addStyleTag({content:`html{font-size:${px}px}`});await p.waitForTimeout(100);ck(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`no horizontal overflow at ${w} wide, ${px} px text`);}
if(errors.length)throw Error(errors.join('\n'));await b.close();console.log(`PASS ${checks.length} email-channel checks`);})().catch(e=>{console.error(e.message||e);process.exit(1)});
