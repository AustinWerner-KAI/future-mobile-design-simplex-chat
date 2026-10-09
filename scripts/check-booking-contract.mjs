import assert from 'node:assert/strict';
import {writeFileSync} from 'node:fs';
import {createBookingStudy} from '../prototypes/src/frame/booking-contract.mjs';
const checks = [];
const check = (name, run) => { run(); checks.push(name); };
const source = {recipient:'Harbour Café',identity:'Austin',draft:'I will check with Family.',scroll:280,focus:'offer-17'};
const create = () => createBookingStudy(source);
check('Reject incomplete source context',()=>assert.throws(()=>createBookingStudy({}),TypeError));
check('Content has no commit, review or transport port',()=>assert.deepEqual(Object.keys(create().content),['choose']));
check('Choosing locally queues nothing and leaves the conversation intact',()=>{
 const s=create();s.host.open();s.content.choose({time:'12:30',party:4});assert.deepEqual(s.host.inspect().requests,[]);assert.deepEqual(s.host.inspect().context,source);
});
check('Reject unsupported times, party sizes and injected recipient/HTML fields',()=>{
 const s=create();s.host.open();for(const value of [{time:'09:00',party:4},{time:'12:30',party:99},{time:'12:30',party:4,recipient:'Other'},{time:'12:30',party:4,html:'<script>'}])assert.throws(()=>s.content.choose(value),TypeError);
});
check('Commit requires a host-created review',()=>{const s=create();s.host.open();s.content.choose({time:'12:30',party:4});assert.throws(()=>s.host.confirm(1));});
check('Review binds exact text, recipient and identity; returned objects cannot rewrite it',()=>{
 const s=create();s.host.open();s.content.choose({time:'12:30',party:4});const r=s.host.prepareReview();assert.equal(r.text,'Table request: 4 people at 12:30. Please confirm availability.');r.recipient='Other';r.text='Injected';const out=s.host.confirm(r.token);assert.equal(out.request.recipient,source.recipient);assert.equal(out.request.identity,source.identity);assert.notEqual(out.request.text,'Injected');assert.equal(out.status,'simulated-request');
});
check('Changed selection invalidates prior review',()=>{const s=create();s.host.open();s.content.choose({time:'12:30',party:4});const r=s.host.prepareReview();s.content.choose({time:'13:00',party:4});assert.throws(()=>s.host.confirm(r.token));assert.equal(s.host.inspect().requests.length,0);});
check('Cancel shares nothing and retains choices and latest draft',()=>{const s=create();s.host.open();s.content.choose({time:'12:30',party:4});const r=s.host.prepareReview();s.host.updateDraft('Updated draft');s.host.cancelReview();assert.throws(()=>s.host.confirm(r.token));const back=s.host.fold();assert.equal(back.context.draft,'Updated draft');assert.equal(back.choice.time,'12:30');assert.equal(s.host.inspect().requests.length,0);});
check('Fold restores reading and focus context and invalidates review',()=>{const s=create();s.host.open();s.content.choose({time:'12:30',party:4});const r=s.host.prepareReview();assert.deepEqual(s.host.fold().context,source);assert.throws(()=>s.host.confirm(r.token));assert.throws(()=>s.content.choose({time:'12:00',party:2}));});
check('Double submission and re-review of the same request cannot duplicate the queue',()=>{const s=create();s.host.open();s.content.choose({time:'12:30',party:4});const r=s.host.prepareReview();s.host.confirm(r.token);assert.throws(()=>s.host.confirm(r.token));const again=s.host.prepareReview();assert.throws(()=>s.host.confirm(again.token));assert.equal(s.host.inspect().requests.length,1);});
check('Simulated failure retains selection; retry requires a fresh review and queues once',()=>{const s=create();s.host.open();s.content.choose({time:'12:30',party:4});const r=s.host.prepareReview();assert.equal(s.host.confirm(r.token,{simulateFailure:true}).status,'simulated-failure');assert.equal(s.host.inspect().requests.length,0);assert.throws(()=>s.host.confirm(r.token));const next=s.host.prepareReview();s.host.confirm(next.token);assert.equal(s.host.inspect().requests.length,1);assert.deepEqual(s.host.fold().context,source);});
check('Instances isolate requests; caller changes do not rewrite the bound source',()=>{const ctx=structuredClone(source),a=createBookingStudy(ctx),b=create();ctx.recipient='Other';a.host.open();a.content.choose({time:'12:30',party:4});a.host.confirm(a.host.prepareReview().token);assert.equal(a.host.inspect().requests[0].recipient,source.recipient);assert.equal(b.host.inspect().requests.length,0);});
writeFileSync(new URL('../docs/booking-contract-check.json',import.meta.url),JSON.stringify({date:new Date().toISOString(),method:'Node assertions against fictional UI-free study logic; no browser, person, transport or security isolation',checks},null,2)+'\n');
console.log(`PASS ${checks.length} booking contract checks`);
