/**
 * Original, UI-free study logic. No transport, storage, untrusted code or security
 * boundary. Host/content ports describe an intended split, not enforced isolation.
 */
export function createBookingStudy(context) {
  if (!context || !['recipient', 'identity', 'draft', 'focus'].every(k => typeof context[k] === 'string') || !Number.isFinite(context.scroll) || context.scroll < 0) {
    throw new TypeError('Expected a named relationship, identity and return context');
  }
  const copy = value => structuredClone(value);
  const source = copy(context);
  let choice = null, review = null, revision = 0, open = false, receipt = null;
  const requests = [], accepted = new Set();
  const times = ['12:00', '12:30', '13:00'];
  const sizes = [2, 3, 4, 5, 6];
  let offer = {times: [...times], sizes: [...sizes], status: 'available', revision: 1};
  let notice = null;
  const choiceAvailable = () => Boolean(choice && offer.status === 'available' && offer.times.includes(choice.time) && offer.sizes.includes(choice.party));
  const key = () => JSON.stringify([source.recipient, source.identity, choice.time, choice.party]);
  function prepare() {
    if (!open || !choiceAvailable()) throw new Error('Open and choose from the current available offer before review');
    review = {
      token: ++revision,
      offerRevision: offer.revision,
      recipient: source.recipient,
      identity: source.identity,
      text: `Table request: ${choice.party} people at ${choice.time}. Please confirm availability.`,
      choice: copy(choice),
      status: 'review-required'
    };
    return copy(review);
  }
  return {
    // Future content should receive only this local-choice port, not host methods.
    content: {
      choose(value) {
        if (!open || offer.status !== 'available') throw new Error('Workspace is closed or offer unavailable');
        if (!value || Object.keys(value).length !== 2 || !offer.times.includes(value.time) || !offer.sizes.includes(value.party)) {
          throw new TypeError('Only catalog time and party selections are allowed');
        }
        choice = {time: value.time, party: value.party};
        notice = null;
        review = null;
        receipt = null;
      }
    },
    host: {
      open() { open = true; return copy({offer, recipient: source.recipient, choice, choiceAvailable: choiceAvailable(), notice}); },
      // Host events simulate source updates; there is no clock or live availability.
      replaceOffer(value) {
        if (!value || Object.keys(value).length !== 2 || !Array.isArray(value.times) || !Array.isArray(value.sizes) ||
            !value.times.length || !value.sizes.length ||
            !value.times.every(time => times.includes(time)) || !value.sizes.every(size => sizes.includes(size)) ||
            new Set(value.times).size !== value.times.length || new Set(value.sizes).size !== value.sizes.length) {
          throw new TypeError('Expected nonempty unique selections from the study catalog');
        }
        offer = {times: [...value.times], sizes: [...value.sizes], status: 'available', revision: offer.revision + 1};
        review = null;
        notice = choice && !choiceAvailable()
          ? {code: 'choice-unavailable', text: 'Your choice is no longer offered. Choose again; nothing was changed or sent for you.'}
          : {code: 'offer-updated', text: 'The offer changed. Review it again before requesting.'};
      },
      invalidateOffer(reason) {
        if (!['expired', 'withdrawn'].includes(reason)) throw new TypeError('Unknown offer event');
        offer = {...offer, status: reason, revision: offer.revision + 1};
        review = null;
        notice = {code: reason, text: reason === 'expired' ? 'This offer expired. Your draft and choice are retained; no new request can be made.' : 'The café withdrew this offer. Your draft and choice are retained; no new request can be made.'};
      },
      updateDraft(text) {
        if (typeof text !== 'string') throw new TypeError('Draft must be text');
        source.draft = text;
      },
      prepareReview: prepare,
      cancelReview() { review = null; },
      confirm(token, {simulateFailure = false} = {}) {
        if (!open || !choiceAvailable() || !review || token !== review.token || review.offerRevision !== offer.revision) throw new Error('Current review is required');
        const snapshot = copy(review);
        review = null; // Consume approval even on a simulated failure: retry needs review.
        if (simulateFailure) {
          receipt = {status: 'simulated-failure', text: 'No request queued; choices retained.'};
          return copy(receipt);
        }
        if (accepted.has(key())) throw new Error('This request was already simulated in this session');
        const request = {id: `study-request-${requests.length + 1}`, recipient: snapshot.recipient, identity: snapshot.identity, text: snapshot.text};
        requests.push(request);
        accepted.add(key());
        receipt = {status: 'simulated-request', request: copy(request), text: 'Simulation only. No delivery or booking confirmed.'};
        return copy(receipt);
      },
      fold() {
        open = false;
        review = null;
        return copy({context: source, receipt, choice, offer, notice});
      },
      inspect() { return copy({open, choice, review, receipt, context: source, requests, offer, choiceAvailable: choiceAvailable(), notice}); }
    }
  };
}
