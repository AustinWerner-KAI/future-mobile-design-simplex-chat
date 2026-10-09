# Project todo and evidence tracker

> **Latest edit — [V2.1.2.3: photos, email and a home at scale](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/blob/main/docs/V2_1_2_3.md). Start here.** [See the whole story](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/showcase.html) · [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.3). Published 6 October 2026: photo pins and photo tools, email threads and forwarding, a home for 100+ conversations with one opening motion, and the homepage audit. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

Updated 6 October 2026 (V2.1.2.3: issues #2, #3, #4, #6; homepage audit; the whole story in [the showcase](../showcase.html)). [What V2.1.2.3 contains](V2_1_2_3.md). **[V2 is the earlier reference baseline](../v2.html).** V2.1 candidates and the community journey are the next experiments. This checklist is the durable project record: update it in Git with a link to the implementation and evidence when an item is complete. Browser test-page ticks record a reviewer’s current session, not project completion.

Human relationships organise the interface. The octopus theory governs coordination, local action, adaptable space, retained context, deliberate crossing and coherent return. These are original design hypotheses, not an official SimpleX roadmap.

## Completed prototype work

- [x] **T01 — Relationship-first homes:** mixed people, groups, publications and providers; three interactive grid/strip/collection candidates. [Play](../v21-options.html) · [rationale](WHY_GRIDS.md).
- [x] **T02 — In-page invitation simulation:** identity choice, pending/accepted/revoked states and clear verification limits. [Scope and evidence](V2_1.md). This completes the browser demonstration, not real connections.
- [x] **T03 — Context continuity:** separate drafts, retained tool reading positions, return context and corrected navigation. [Audit](V21_CONSISTENCY_AUDIT.md).
- [x] **T04 — Small-community journey:** Maya proposal → reviewed title to Family → Harbour Café email → reviewed excerpt to Family → return to Maya’s draft. [Interactive test](../studies/community-journey.html) · [browser evidence](community-journey-check.json). Fictional groups and transport; no agreement or delivery implied.
- [x] **T11 — General email handoff:** choose a chat (Maya, Family, Alex or Book club), review exact text, audience and identity, cancel to share nothing, and block the same text to the same chat. No recipient preselected. [Record](T11_EMAIL_HANDOFF.md) · [browser evidence](email-recipient-check.json). Simulation only; human comprehension remains under T05.
- [x] **T19 — Public channel and group discovery:** home door after Recent activity, a curated directory that filters on the phone (Active/New/All), a preview that unfolds in the row with three facts and an identity choice, join and admin-review requests, an offline state, `#name` lookup on tap, and a channel page with reactions, a comment crossing and Leave. [Record](T19_CHANNEL_DISCOVERY.md) · [Model](CHANNEL_DISCOVERY_MODEL.md) · [Study](../studies/channel-discovery.html) · [browser evidence](channel-discovery-check.json). Simulation only; the data source still needs a maintainer decision and human evidence is under T05.
- [x] **T12 — Engineering feasibility (desk review):** mapped the flow to SimpleX today. Providers correspond to business chats, publications to channels, collections to chat lists and favourites to the existing flag. Email and shared proposal objects stay speculative. [Feasibility map](T12_FEASIBILITY.md). Not a native code audit; maintainer confirmation of read-marking and cross-profile forwarding is outstanding.
- [x] **T08 — Contextual identity and profiles:** profile mark and sheet on the rail home, switching with isolated connections, drafts and search, unhiding by full password in search, incognito chosen with the generated name shown and frozen once the invitation exists, acceptance that adds the contact and names the identity once, and a composer line that names it (closes F5). [Record](T08_IDENTITY.md) · [Model](IDENTITY_MODEL.md) · [Study](../studies/identity.html) · `scripts/check-identity.cjs` (35 checks, including the second-pass fixes J1–J6 in the [audit log](MOBILE_AUDIT_LOG.md)). Simulation only; whether a monogram alone identifies the profile is for T05, and two incognito facts stay with the maintainers.

- [x] **T26 — Grids, lists and carousels, lab 1 (7 October 2026):** a [carousel lab](../studies/carousel-lab.html) (40 checks; today's rail fails 11 of 18), then, after a user research pass, a [collection lab](../studies/collection-lab.html) built on three rules: stable by default, adaptable by choice, carousels only for sets that follow a line. `scripts/check-collection-lab.cjs`: 64 checks; the first lab fails 34 of the original 54. Browser simulation only. Adds to T05: find a favourite in grid, list and today's rail; add a favourite and find Maya; open and leave Maya's album with a screen reader. A five-question [community survey](../studies/collection-survey.md) is drafted and not posted. [Audit §17](MOBILE_AUDIT_LOG.md).

## Manual test and refinement milestones

- [x] **T13 — Document the live-browser manual test:** restarted run, 23 captures, detailed execution, observation/inference separation and limitations. [Report](COMMUNITY_MANUAL_TEST.md) · [manifest](community-manual-test-evidence.json). This does not complete T05.
- [x] **T14 / F01 — Explicit proposal destination:** one Family sharing action in the community proposal; named recipients in baseline actions.
- [x] **T15 / F02 — Consistent default state:** visible valid default can be reviewed; empty and unchanged already-shared titles remain blocked.
- [x] **T16 / F03 — Coherent Saturday scenario:** group and provider fixture dates agree.
- [x] **T17 / F04 — Less repeated instruction:** one local proposal/review object, concise actions, optional email exclusions.
- [x] **T18 / F05 — Focused test surface:** remove outer scrolling during the task, retain iframe state and restore exit focus.

T14–T18 mark implemented prototype fixes, checked in [V2.1.2.1](../v2121.html) with [browser evidence](community-ux-fixes-check.json). Human validation remains open under T05.

## Audits and the rules they produced

All in the [running mobile audit log](MOBILE_AUDIT_LOG.md), newest first: §17 grids, lists and carousels, from a carousel lab to a collection lab (A1–A9), §16 the whole story and V2.1.2.3 (S1–S5), §15 a home that feels continuous (issue #2, K1–K5), §14 one relationship, distinct channels (issue #6, C1–C5), §13 tools at the point of action (issue #3, T1–T5), §12 photograph you can discuss (issue #4, P1–P5), §11 website homepage (HP1–HP11), §10 full-screen route on a laptop (W1), §9 T08 runtime (H1–H3, J1–J6), §8 runtime shape scale and anchored tiles, §7 identity study (G1–G4, S1–S6), §6 information architecture (IA1–IA6), §5 T19 runtime (R1–R3), §4 discovery study (C1–C10, D1–D6, E1–E6), §3 flow and colour (F1–F5), §1 whole candidate (M1–M5), §2 T11 (A1–A4). Fixed items carry a check that fails on the pre-fix build. Still open: IA1–IA4, IA6, D3, D6, E6.

## Next, in priority order

- [ ] **T05 — Real-phone comparison:** run the same tasks across the three homes with consenting participants. Check finding a relationship, audience comprehension, keyboards, enlarged text, interruptions and return. Record observations and limitations before choosing a layout; agent checks do not complete this item. **Ready to run (5 October 2026):** [protocol](T05_PROTOCOL.md) with eight hypotheses and six tasks, a [facilitator page](../studies/t05-session.html) that exports one JSON per session, and an empty [session record](T05_SESSIONS.md). Needs 6 to 9 people and their phones. **Extended 6 October 2026:** add one measure, the home at 120 conversations against a plain list on the same task, so that execution is tested rather than asserted ([whitepaper section 10.2, step 2](RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md#102-sequence-of-studies)). T05 runs before any further visual work, including T22. **Prepared 9 October 2026:** [connected collection comparison](../studies/collection-comparison.html) with [supplement/observation sheet](T05_COLLECTION_COMPARISON.md), same eight people across grid/list/rail, unsent Maya draft and album return. 37 browser checks are preparation evidence, not T05 completion.
- [ ] **T20 — Maintainer answers:** five questions that decide open design points (link prefetch, link contents, read-marking, cross-profile forwarding, directory data source), written to post as-is: [MAINTAINER_QUESTIONS](MAINTAINER_QUESTIONS.md). **Extended 6 October 2026:** post them together with the two questions from the whitepaper ([section 10.2, step 1](RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md#102-sequence-of-studies)): which interface model SimpleX would adopt, and which core work it would consider. Complete when answers are recorded in SOURCES and the affected docs are updated.
- [ ] **T21 — Three gates before Study A:** decide whether a shared detail reveals its source, where payments live in an interface if anywhere, and whether interface state persists on the device ([whitepaper section 10.4](RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md#104-decisions-this-paper-does-not-make)). Record each decision in DECISIONS.md with its reason. Blocks T22.
- [ ] **T22 — Study A, a conversation renders its own interface:** a business and, in a second condition, a model reply through the same frame. Sender mark, client-owned boundary, typed actions, review before anything leaves, receipt, fold back with the draft intact. Checks that fail on the build without the frame. Cite [whitepaper section 9](RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md#9-a-framework-the-frame) in the PR. Blocked by T05 and T21.
- [ ] **T23 — Studies B, C and D, trust and access:** spoofing (an interface imitates the client's review step), trust without a store (first-seen against accepted by three contacts), and accessibility (screen reader, 200% text, status announced from a separate element). [Whitepaper section 10.2, steps 4 to 6](RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md#102-sequence-of-studies). Blocked by T22.
- [ ] **T24 — Multi-chat core specification:** turn the cost table in [Chat scrolling](RESEARCH_NOTES/CHAT_SCROLLING.md) and [whitepaper section 7.4](RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md#74-what-each-behaviour-costs) into a specification the maintainers could act on. A document, not a prototype version. Send with the T20 answers in hand.
- [ ] **T25 — Second real-phone round:** add one interface task to the [T05 protocol](T05_PROTOCOL.md) and run it again with 6 to 9 participants. The frame is named as a version (V2.2) only after this round. Blocked by T23.
- [ ] **T06 — Connections between entities:** design explicit, user-controlled links between people, providers and places. Distinguish personal organisation from an actual shared affiliation. Do not infer membership from correspondence. Show cancellation and inspectable relationship evidence.
- [ ] **T07 — Complete group lifecycle:** joining/leaving, member/observer roles and permission changes. Show that observers cannot send and that membership differs from agreement to a plan.
- [ ] **T09 — Complete attachment lifecycle:** select/replace image, caption, cancel, denied permission, failure and safe retry. Distinguish preparation, queue, server acceptance and delivery.
- [ ] **T10 — Recovery after closing/reloading:** define retention choice, location, lifetime and clearing of sensitive drafts. No storage is currently implemented. Specify recovery before adding persistence.

## Roadmap to 2028

Added 6 October 2026 from [the whitepaper, section 10](RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md#10-implications-for-the-simplex-chat-ui). Dates are the study's own estimates, not commitments and not a SimpleX roadmap. Each step depends on the one above it; if T05 slips for want of participants, everything below it slips with it.

| When | Step | Tasks | What it tests |
| --- | --- | --- | --- |
| October 2026 | Seven questions to the maintainers, three gates decided | T20, T21 | Which interface model and which core work SimpleX would consider |
| November to December 2026 | Real phones, real people | T05 | Finding a relationship, audience comprehension, the home at scale against a plain list |
| Q1 2027 | Study A: the frame | T22 | An interface that proposes, from a business and from a model, through one client frame |
| Q2 2027 | Studies B, C, D: trust and access | T23 | Spoofing, trust without a store, screen reader and large text |
| Q2 2027 | Multi-chat core specification | T24 | What several live chats would cost the core, written for the maintainers |
| H2 2027 | Second real-phone round, then V2.2 | T25 | One interface task on real phones; the frame is named a version only after this |
| 2028 | Measure against what ships | open | The study meets whatever SimpleX releases; a V3 only if the evidence earns it |

The six flow rules, the Chalk palette and the rule that an interface only proposes while the person sends do not change along the way.

## How to tick off work

Keep each task ID stable. For completion, link the editable change, what was tested, the evidence record and remaining limitations. Implemented simulations can complete a prototype task; they cannot complete real-device, human-research or protocol-validation tasks. Reopen a task if later evidence invalidates it. No contributor owners are assigned; the roadmap dates above are estimates, not deadlines.

[Run the community test and session checklist](../studies/community-journey.html) · [Propose a design](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/issues/new?template=design-proposal.yml) · [Contribution guide](../CONTRIBUTING.md).

Earlier next-step priorities arose from the supporting inline experiment; T02/T03 reconcile work now demonstrated in V2.1. Remaining group/profile, attachment, recovery and human-testing work stays open. Sources and verified upstream facts are recorded in [SOURCES.md](SOURCES.md). Original code MIT; design material CC BY 4.0.
