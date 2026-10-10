import {createBookingStudy} from '../prototypes/src/frame/booking-contract.mjs';
const $ = selector => document.querySelector(selector);
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let study, stage = 'closed', selected = {time:null,party:4}, reviewToken = null, failNext = false, returnScroll = 0;
function reset() {
  study = createBookingStudy({recipient:'Harbour Café',identity:'Austin',draft:$('#draft').value,scroll:0,focus:'offer-open'});
  stage='closed'; selected={time:null,party:4};reviewToken=null;failNext=false;
  $('#workspace').innerHTML='';$('#receipt-message').hidden=true;
  $('#offer-open').textContent='Explore times ↗';$('#offer-open').setAttribute('aria-expanded','false');
  $('#feedback').textContent='Your choice stays local until you review a request.';
  $('#live-phone').dataset.requests='0';
}
function feedback(text) { $('#feedback').textContent=text; }
function taskFocus(id) { document.getElementById(id)?.focus({preventScroll:true}); }
function render(focusId) {
  const state=study.host.inspect();$('#live-phone').dataset.requests=state.requests.length;
  const warning=state.notice?`<p class="warning">${escape(state.notice.text)}</p>`:'';
  if(stage==='review') {
    const r=state.review;
    $('#workspace').innerHTML=`<section class="review" aria-label="Client review"><p class="review-source">SimpleX · client review</p><h4>Review your request.</h4><dl><dt>To</dt><dd>${escape(r.recipient)}</dd><dt>As</dt><dd>${escape(r.identity)}</dd></dl><blockquote>${escape(r.text)}</blockquote><p class="small">A request for availability. No booking is confirmed.</p><div class="actions"><button id="cancel-review">Cancel review</button><button id="commit" class="primary">Simulate request</button></div></section>`;
  } else {
    const unavailable=state.offer.status!=='available';
    $('#workspace').innerHTML=`<section class="task" aria-label="Local table choices">${warning}<h4>Choose a time</h4><div class="choices" role="group" aria-label="Time">${state.offer.times.map(t=>`<button data-time="${t}" aria-pressed="${selected.time===t}" ${unavailable?'disabled':''}>${t}</button>`).join('')}</div><h4>Party size</h4><div class="choices" role="group" aria-label="Party size">${state.offer.sizes.map(n=>`<button data-party="${n}" aria-label="${n} people" aria-pressed="${selected.party===n}" ${unavailable?'disabled':''}>${n}</button>`).join('')}</div><p class="local-label">${selected.time?`${escape(selected.time)} · ${selected.party} people`:'Four people from the example message. Choose a time.'}<br>Local choice · nothing sent</p>${state.receipt?.status==='simulated-failure'?'<p class="warning">Request simulation failed. Nothing queued; review again to retry.</p>':''}<div class="actions"><button id="fold">Fold back</button><button id="review" class="primary" ${!state.choiceAvailable?'disabled':''}>Review request</button></div></section>`;
  }
  if(focusId){taskFocus(focusId);document.getElementById(focusId)?.scrollIntoView({block:'nearest',inline:'nearest'});}
}
function fold() {
  study.host.updateDraft($('#draft').value);
  const back=study.host.fold();stage='closed';reviewToken=null;
  $('#workspace').innerHTML='';$('#draft').value=back.context.draft;
  $('#offer-open').textContent='Reopen offer ↗';$('#offer-open').setAttribute('aria-expanded','false');
  const r=back.receipt;
  if(r?.status==='simulated-request') {
    $('#receipt-message').hidden=false;
    $('#receipt-message').innerHTML=`<div class="receipt"><strong>Request simulated</strong><p>${escape(r.request.text)}</p><small>As Austin · no delivery or booking confirmed</small></div>`;
  }
  $('#thread').scrollTop=returnScroll;
  taskFocus('offer-open');
  $('#live-phone').dataset.requests=study.host.inspect().requests.length;
  feedback(r?.status==='simulated-request'?'Request simulated. Your unsent draft is still here.':'Returned to your conversation. Your draft is unchanged.');
}
$('#offer-open').onclick=()=>{
  if(stage!=='closed'){fold();return;}
  returnScroll=$('#thread').scrollTop;study.host.updateDraft($('#draft').value);study.host.open();stage='choices';
  $('#offer-open').setAttribute('aria-expanded','true');$('#offer-open').textContent='Offer open · fold back';
  render();$('#workspace').scrollIntoView({block:'nearest'});taskFocus('fold');
  feedback('Offer opened. Choices stay local until reviewed.');
};
$('#draft').oninput=()=>study.host.updateDraft($('#draft').value);
$('#workspace').onclick=event=>{
 const button=event.target.closest('button');if(!button||button.disabled)return;
 try {
  if(button.dataset.time||button.dataset.party){
    const candidate={...selected};if(button.dataset.time)candidate.time=button.dataset.time;else candidate.party=Number(button.dataset.party);
    if(candidate.time)study.content.choose(candidate);selected=candidate;render();
    $('#workspace').querySelector(button.dataset.time?`[data-time="${candidate.time}"]`:`[data-party="${candidate.party}"]`)?.focus({preventScroll:true});
    feedback('Selection stays here. Nothing sent.');
  } else if(button.id==='review') {const r=study.host.prepareReview();reviewToken=r.token;stage='review';render('commit');feedback('Review the exact request, recipient and identity.');}
  else if(['edit-choice','cancel-review'].includes(button.id)){study.host.cancelReview();stage='choices';reviewToken=null;render('review');feedback('Review cancelled. No request queued.');}
  else if(button.id==='commit') {const result=study.host.confirm(reviewToken,{simulateFailure:failNext});failNext=false;reviewToken=null;stage='choices';if(result.status==='simulated-request')fold();else{render('review');feedback('Request simulation failed. Choices and draft retained.');}}
  else if(button.id==='fold')fold();
 } catch(error){feedback(error.message);stage='choices';render('fold');}
};
function changeOffer(kind) {
 if(kind==='changed')study.host.replaceOffer({times:['13:00'],sizes:[2,3,4,5,6]});else study.host.invalidateOffer(kind);
 if(stage!=='closed'){stage='choices';reviewToken=null;render();}
 $('#test-status').textContent='Study event applied: '+(kind==='changed'?'only 13:00 remains':kind)+'.';
 feedback(study.host.inspect().notice.text);
}
for(const kind of ['changed','expired','withdrawn'])$('#'+kind).onclick=()=>changeOffer(kind);
$('#fail').onclick=()=>{failNext=true;$('#test-status').textContent='The next request will fail locally. No outgoing request will be queued.';};
$('#reset').onclick=()=>{reset();$('#test-status').textContent='Study reset. Your current draft is retained.';};
$('#live-phone').addEventListener('keydown',e=>{if(e.key==='Escape'&&stage!=='closed'){e.preventDefault();if(stage==='review'){study.host.cancelReview();stage='choices';render('review');feedback('Review cancelled; nothing queued.');}else fold();}});
const staticChoices=`<div class="task"><h4>Choose a time</h4><div class="choices"><span>12:00</span><span class="selected">12:30</span><span>13:00</span></div><h4>Party size</h4><div class="choices"><span>2</span><span>3</span><span class="selected">4</span><span>5</span></div><p class="local-label">12:30 · four people<br>Local choice · nothing sent</p><div class="actions"><span class="static-button">Fold back</span><span class="static-button primary">Review request</span></div></div>`;
const staticReview=`<div class="review"><p class="review-source">SimpleX · client review</p><h4>Review your request.</h4><dl><dt>To</dt><dd>Harbour Café</dd><dt>As</dt><dd>Austin</dd></dl><blockquote>Table request: 4 people at 12:30. Please confirm availability.</blockquote><p class="small">A request. No booking confirmed.</p><div class="static-button primary">Simulate request</div></div>`;
const scenes=[
 ['01','Receive','The offer has a sender and a place. Nothing new is sent.','',false],
 ['02','Unfold & choose','The task grows beside its source. Your choice stays local.',staticChoices,false],
 ['03','Review','A separate client step names the exact text, audience and identity.',staticReview,false],
 ['04','Request','A simulated result becomes a readable message, not a claimed booking.','',true],
 ['05','Return','The extension folds away. Your unfinished reply is still yours.','',true],
 ['06','Recover','If the offer changes, retain the choice and ask; never silently substitute.',`<div class="task"><p class="warning">12:30 is no longer offered.<br>Your choice is retained; nothing sent.</p><h4>Still available</h4><div class="choices"><span>13:00</span></div><p class="local-label">Previous choice: 12:30 · four people</p><div class="static-button">Fold back</div></div>`,false]
];
$('#boards').innerHTML=scenes.map(([n,title,caption,task,result])=>`<figure class="board"><div class="phone" role="img" aria-label="${escape(title)} mockup: ${escape(caption)}"><div class="statusbar" aria-hidden="true"><strong>9:41</strong><span>▰ ▰ ▰</span></div><header class="chat-header"><span class="provider-mark">H</span><div><h2>Harbour Café</h2><p>Provider · conversation</p></div></header><div class="thread"><div class="bubble outgoing"><p>Do you have space for four?</p><small>You · 09:40</small></div><div class="source-message"><p>We can offer a few times.<br>Choose what works for you.</p><small>Harbour Café · 09:41</small></div><div class="offer-anchor"><span class="origin"></span><div class="offer-head"><p class="small">FROM HARBOUR CAFÉ</p><h3>A table together.</h3><p>Sample times · no real availability</p>${!task?`<div class="static-button ${result?'':'primary'}">${result?'Reopen offer ↗':'Explore times ↗'}</div>`:''}</div>${task}</div>${result?'<div class="receipt"><strong>Request simulated</strong><p>Four people at 12:30.</p><small>No delivery or booking confirmed</small></div>':''}</div><div class="composer"><small>Your draft · to Harbour Café as Austin</small><div class="static-draft">I will check with Family.</div><small>Unsent · still here</small></div></div><figcaption class="caption"><p class="eyebrow">${n} / ${title}</p><h3>${title}</h3><p>${caption}</p></figcaption></figure>`).join('');
reset();
