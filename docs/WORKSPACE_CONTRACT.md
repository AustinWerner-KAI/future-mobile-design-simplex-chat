# Conversation workspace — executable study contract

9 October 2026. UI-free experimental logic for the [next innovation](NEXT_INNOVATION.md). Not a new visual candidate, production security boundary, booking integration or completed T22. Current interface: [V2.1.2.3](../v21.html?mobile=1&version=2.1.2.3).

## What is built

[booking-contract.mjs](../prototypes/src/frame/booking-contract.mjs) models one fictional Harbour Café workspace attached to a named relationship and identity. The host retains the conversation draft, reading position and focus target. Local content can propose only a catalog time and party size. The host constructs an exact review; only its confirmation method adds a simulated request to the page-memory queue.

| Event | Result |
| --- | --- |
| Open / choose | Local selection; no request |
| Review | Exact text, recipient and identity bound to a revision |
| Change choice | Old approval invalidated |
| Cancel review | No request; choices retained |
| Confirm current review | One simulated request and explicit simulation receipt |
| Repeat identical request | Blocked in this study session |
| Simulate failure | No queued request; choices retained; fresh review required for retry |
| Fold back | Latest draft and source reading/focus values returned; review invalidated |

This module returns restoration values; it does not move browser focus or scroll. Future UI code must apply and independently test those values. `updateDraft` represents a host-owned draft change while the workspace is open, so folding does not restore an obsolete snapshot.

## Run and evidence

From the repository root:

```sh
node scripts/check-booking-contract.mjs
```

[12 assertion groups](booking-contract-check.json) cover no-send preparation, exact review binding, injected/unsupported fields, stale approval, cancellation, source restoration, duplicate submission, failure/retry and instance isolation. [Check source](../scripts/check-booking-contract.mjs). Inputs are fictional. On the pre-change build the import fails because the module does not exist; no claim of a measured pre-existing security fault is made.

## Boundaries that matter

The content/host method split is an API convention in one JavaScript environment. It does **not** establish a sandbox, prove that only a human can call confirmation, prevent an interface impersonating the review UI, verify a sender, or isolate downloaded code. Those require a separate client integration, renderer and threat model.

There is no network, payment, forwarding, analytics or durable storage in this module. Duplicate suppression is per module instance and resets when it is recreated; it is not transport-level idempotency. Simulated failure means nothing was queued. Ambiguous delivery, offline queues, acknowledgements and refunds are outside scope. A real request could be rejected or unconfirmed; the receipt never calls it a booking.

Fixed fictional times avoid date/time-zone and real availability claims. The request remains within its source relationship. This does not resolve T21 source-disclosure or production persistence decisions.

## Next integration conditions

T05 and T21 remain open. This is engineering preparation, not the visual Study A. After those gates, use the catalog condition first; connect the module to a client-owned review and verify keyboard, touch, reduced motion, enlarged text, status announcements and actual focus/scroll recovery. Compare it with an ordinary-message condition before claiming that the workspace helps.

## Octopus check

- **Rules:** Act locally; Return coherently.
- **SimpleX foundation:** named relationship and deliberate sending are starting requirements; this module implements no SimpleX protocol.
- **Analogy:** the extension keeps a coordinating source and returns its latest useful context; no literal anatomy.
- **Rule tests:** preparation/cancel queue nothing, an exact current review queues once, fold returns draft/reading/focus. Defined by the 12 assertion groups, absent before this module.
- **Research:** [Interfaces that arrive §9.1 F5/F7/F8/F9](RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md#91-principles) and [§10.2–10.4](RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md#102-sequence-of-studies).
- **Revise/drop if:** the future renderer cannot enforce the intended boundary, people mistake preparation for sending or confirmation for booking, or ordinary messages complete the task more clearly.

Original project code and synthesis; code follows the repository MIT terms. Design documentation follows its original-material CC BY 4.0 terms. External rationale is cited in the research note; no new external feature or security claims are introduced here.
