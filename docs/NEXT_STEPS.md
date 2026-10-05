# Project todo and evidence tracker

> **Latest edit — [V2.1.2.1: complete interface mockup](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2121.html). Start here.** [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.1). Published 4 October 2026: 14 interface states and the community-test refinements. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

Updated 5 October 2026 (T11, T12, T19 scoped). **[V2 is the earlier reference baseline](../v2.html).** V2.1 candidates and the community journey are the next experiments. This checklist is the durable project record: update it in Git with a link to the implementation and evidence when an item is complete. Browser test-page ticks record a reviewer’s current session, not project completion.

Human relationships organise the interface. The octopus theory governs coordination, local action, adaptable space, retained context, deliberate crossing and coherent return. These are original design hypotheses, not an official SimpleX roadmap.

## Completed prototype work

- [x] **T01 — Relationship-first homes:** mixed people, groups, publications and providers; three interactive grid/strip/collection candidates. [Play](../v21-options.html) · [rationale](WHY_GRIDS.md).
- [x] **T02 — In-page invitation simulation:** identity choice, pending/accepted/revoked states and clear verification limits. [Scope and evidence](V2_1.md). This completes the browser demonstration, not real connections.
- [x] **T03 — Context continuity:** separate drafts, retained tool reading positions, return context and corrected navigation. [Audit](V21_CONSISTENCY_AUDIT.md).
- [x] **T04 — Small-community journey:** Maya proposal → reviewed title to Family → Harbour Café email → reviewed excerpt to Family → return to Maya’s draft. [Interactive test](../studies/community-journey.html) · [browser evidence](community-journey-check.json). Fictional groups and transport; no agreement or delivery implied.
- [x] **T11 — General email handoff:** choose a chat (Maya, Family, Alex or Book club), review exact text, audience and identity, cancel to share nothing, and block the same text to the same chat. No recipient preselected. [Record](T11_EMAIL_HANDOFF.md) · [browser evidence](email-recipient-check.json). Simulation only; human comprehension remains under T05.
- [x] **T12 — Engineering feasibility (desk review):** mapped the flow to SimpleX today. Providers correspond to business chats, publications to channels, collections to chat lists and favourites to the existing flag. Email and shared proposal objects stay speculative. [Feasibility map](T12_FEASIBILITY.md). Not a native code audit; maintainer confirmation of read-marking and cross-profile forwarding is outstanding.

## Manual test and refinement milestones

- [x] **T13 — Document the live-browser manual test:** restarted run, 23 captures, detailed execution, observation/inference separation and limitations. [Report](COMMUNITY_MANUAL_TEST.md) · [manifest](community-manual-test-evidence.json). This does not complete T05.
- [x] **T14 / F01 — Explicit proposal destination:** one Family sharing action in the community proposal; named recipients in baseline actions.
- [x] **T15 / F02 — Consistent default state:** visible valid default can be reviewed; empty and unchanged already-shared titles remain blocked.
- [x] **T16 / F03 — Coherent Saturday scenario:** group and provider fixture dates agree.
- [x] **T17 / F04 — Less repeated instruction:** one local proposal/review object, concise actions, optional email exclusions.
- [x] **T18 / F05 — Focused test surface:** remove outer scrolling during the task, retain iframe state and restore exit focus.

T14–T18 mark implemented prototype fixes, checked in [V2.1.2.1](../v2121.html) with [browser evidence](community-ux-fixes-check.json). Human validation remains open under T05.

## Next, in priority order

- [ ] **T05 — Real-phone comparison:** run the same tasks across the three homes with consenting participants. Check finding a relationship, audience comprehension, keyboards, enlarged text, interruptions and return. Record observations and limitations before choosing a layout; agent checks do not complete this item.
- [ ] **T06 — Connections between entities:** design explicit, user-controlled links between people, providers and places. Distinguish personal organisation from an actual shared affiliation. Do not infer membership from correspondence. Show cancellation and inspectable relationship evidence.
- [ ] **T07 — Complete group lifecycle:** joining/leaving, member/observer roles and permission changes. Show that observers cannot send and that membership differs from agreement to a plan.
- [ ] **T08 — Contextual identity and profiles:** active identity, incognito choice, switching and isolated drafts/search. Validate privacy boundaries against upstream implementation before making security claims.
- [ ] **T09 — Complete attachment lifecycle:** select/replace image, caption, cancel, denied permission, failure and safe retry. Distinguish preparation, queue, server acceptance and delivery.
- [ ] **T19 — Public channel and group discovery on mobile:** bring the website directory's search (local filtering by name and description, Active/New/All, subscriber counts) into the home search as a clearly separate public step, with a join preview that states the public audience, relay visibility and the identity used. Decide the data source with maintainers first. [Scope](T12_FEASIBILITY.md#channel-search-scope-owner-request-5-october-2026) · [Octopus flow model](CHANNEL_DISCOVERY_MODEL.md) · [Mockup](../studies/channel-discovery.html).
- [ ] **T10 — Recovery after closing/reloading:** define retention choice, location, lifetime and clearing of sensitive drafts. No storage is currently implemented. Specify recovery before adding persistence.

## How to tick off work

Keep each task ID stable. For completion, link the editable change, what was tested, the evidence record and remaining limitations. Implemented simulations can complete a prototype task; they cannot complete real-device, human-research or protocol-validation tasks. Reopen a task if later evidence invalidates it. No contributor owners or delivery dates are assigned yet.

[Run the community test and session checklist](../studies/community-journey.html) · [Propose a design](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/issues/new?template=design-proposal.yml) · [Contribution guide](../CONTRIBUTING.md).

Earlier next-step priorities arose from the supporting inline experiment; T02/T03 reconcile work now demonstrated in V2.1. Remaining group/profile, attachment, recovery and human-testing work stays open. Sources and verified upstream facts are recorded in [SOURCES.md](SOURCES.md). Original code MIT; design material CC BY 4.0.
