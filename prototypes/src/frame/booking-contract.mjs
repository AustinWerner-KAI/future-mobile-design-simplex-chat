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
  const key = () => JSON.stringify([source.recipient, source.identity, choice.time, choice.party]);
  function prepare() {
    if (!open || !choice) throw new Error('Open and choose before review');
    review = {
      token: ++revision,
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
        if (!open) throw new Error('Workspace is closed');
        if (!value || Object.keys(value).length !== 2 || !times.includes(value.time) || !sizes.includes(value.party)) {
          throw new TypeError('Only catalog time and party selections are allowed');
        }
        choice = {time: value.time, party: value.party};
        review = null;
        receipt = null;
      }
    },
    host: {
      open() { open = true; return copy({times, sizes, recipient: source.recipient, choice}); },
      updateDraft(text) {
        if (typeof text !== 'string') throw new TypeError('Draft must be text');
        source.draft = text;
      },
      prepareReview: prepare,
      cancelReview() { review = null; },
      confirm(token, {simulateFailure = false} = {}) {
        if (!open || !review || token !== review.token) throw new Error('Current review is required');
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
        return copy({context: source, receipt, choice});
      },
      inspect() { return copy({open, choice, review, receipt, context: source, requests}); }
    }
  };
}
