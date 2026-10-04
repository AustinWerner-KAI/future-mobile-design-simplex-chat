# Community journey: manual test, findings and response

> **Latest edit — [V2.1.2.1: complete interface mockup](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2121.html). Start here.** [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.1). Published 4 October 2026: 14 interface states and the community-test refinements. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

4 October 2026 · agent-operated live-browser review. **[V2 is the earlier reference baseline](../v2.html).** [V2.1.2.1 refinement](../v2121.html) · [Interactive journey and checklist](../studies/community-journey.html) · [Task tracker](NEXT_STEPS.md).

## Scope and provenance

The test followed the published community journey on V2.1.2, revision `7b9ca2006d4ad4e3726a825a0fbe78521aa5e789`. The operator used computer-use controls to interact with the live page, inspect visible screens and decide the next action. This differs from the earlier scripted 18-check regression run. There were no human participants and no physical phone was used.

The user requested a restart. Both the prototype and reviewer ticks were reset before the retained run. The earlier three captures are excluded. Retained evidence comprises **23 browser-page screenshots**, from **21:17:45 to 21:21:29 Asia/Dubai** (17:17:45–17:21:29 UTC). The approximately 3 minute 43 second capture span includes inspection and tool overhead; it is not participant task time or a speed benchmark. Browser window dimensions varied during the run, recorded per image in the manifest. No controlled mobile device size was imposed.

Only browser page content was captured. No desktop, other application, microphone or continuous video was recorded. Native screen recording was unavailable. The user stopped capture; no further manual captures or video assembly followed. [Evidence manifest with original timestamps, dimensions and SHA-256 hashes](community-manual-test-evidence.json). Baseline images remain unchanged alongside later fix-verification captures.

## Test goal

Complete one human purpose across a person, a private group and a provider, while retaining drafts and understanding what crosses each boundary. Evaluate the octopus flow architecture through coordination, local action, adaptable space, retained context, deliberate crossing and coherent return. Do not infer protocol security or actual delivery from the simulated interface.

## What the operator entered

All input was fictional test content:

- Maya reply: “I will check with Family first. This reply stays with Maya.”
- Proposal title: “Saturday lunch at Harbour Café, 12:30”.
- Family reply: “Family draft: please confirm before I book.”
- Provider email reply: “Please hold the table while I check with the family.”
- Prepared excerpt: “Harbour Café has a table available on Saturday at 12:30. Not booked yet.”

“Not booked yet” was written by the operator; the application did not infer booking status.

## Detailed execution record

| Step | Action and observation | Outcome / evidence |
| --- | --- | --- |
| Reset | Reset prototype and clear reviewer ticks | Fresh Maya conversation, disabled send, 0/6 ticks. Capture 03 |
| Person | Write Maya reply; open Proposal; edit title | Reply remained separate; prefilled proposal review issue observed before editing. Captures 04–07 |
| First boundary | Review exact title and Family audience; cancel using “Keep it private” | Returned to preparation without sharing. Capture 08 |
| Explicit share | Review again and simulate title sharing; continue to Family | Family showed the selected title, without Maya’s source message or unsent reply. Captures 09–10 |
| Group | Write independent Family draft | Draft remained local; the existing Sunday message conflicted with the Saturday plan. Capture 11 |
| Provider | Open Harbour Café; choose Email | Provider showed its own correspondence, no group history, and an external-transport warning. Captures 12–13 |
| Second boundary | Write independent email reply; prepare an excerpt; review Family audience | Review showed the exact selected text and excluded email/addresses/reply. Captures 14–15 |
| Cancel/revise | Use “Keep editing” | Prepared excerpt retained. Capture 16 |
| Share excerpt | Review again, simulate sharing, open Family | Family contained title and excerpt; original email addresses and email reply were absent from the visible shared entries. Captures 17–18 |
| Return | Return to Maya, then home | Maya reply matched the entered draft; Family reply also matched on return. Home displayed retained draft markers. Captures 19–20 |
| Reopen/search | Search Harbour; reopen email; return home | Search retained. Email mode and visible draft remained. Captures 21–25 |
| Finish | All six reviewer steps ticked; inspect browser error log | 6/6 session steps checked; returned error log empty. This is not completion of human-testing task T05 |

### Instrumentation discrepancy

A browser text read of the email reply returned a redacted value. A later equality check therefore returned false; the tool also reported a length of ten rather than the entered sentence. The actual screenshot visibly showed the original sentence intact. The retained conclusion is **visually confirmed email draft retention**, with the text-check limitation recorded. This is not evidence of a product draft-loss bug. [Visual inspection](../studies/community-manual-test/24-21-inspect-email-draft-discrepancy.jpg).

## Findings and severity

Severity is a project prioritisation judgement: P1 means resolve before the next formative test because action or state is misleading; P2 means a clarity/space issue worth resolving. These are not participant error rates. The five findings below do not imply that a harmful share or data leak occurred.

### F01 / P1 — Two proposal destinations compete

**Observed:** Maya’s proposal offered a local “Share proposal” action and a separate “Review proposal for Family” action. The local audience appeared in surrounding text rather than the button label. [Baseline review](../studies/community-manual-test/07-04-family-sharing-review.jpg).

**Risk/inference:** a person could choose the wrong destination while following the group-plan task. No wrong share occurred in this run.

**Response in V2.1.2.1:** the community proposal has one destination-specific action: “Review title for Family”. The review names the group and sample audience. Baseline local sharing labels now name their recipient. No competing Maya share is present in the community proposal.

**Acceptance:** one community proposal object; one sharing destination at preparation; cancellation and exact-title review retained; independent Maya reply excluded from the handoff.

### F02 / P1 — Visible default title and disabled review disagree

**Observed:** the proposal displayed a prefilled title while Family review was disabled until the operator edited the title. [Baseline local proposal](../studies/community-manual-test/05-02-local-proposal.jpg).

**Risk/inference:** the person has no clear reason to rewrite an apparently valid title.

**Response:** the visible default is also the reviewable value. Blank or whitespace-only titles remain disabled. Editing updates the action immediately. An unchanged already-shared title cannot be shared again through the same action.

**Acceptance:** prefilled valid title can open review without editing; blank cannot; cancellation retains it; shared snapshot and edited draft remain distinct.

### F03 / P2 — Fictional date inconsistency

**Observed:** Family’s source message asked about Sunday; the proposal and café email concerned Saturday. [Baseline group](../studies/community-manual-test/10-07-family-title-no-private-history.jpg).

**Risk/inference:** date ambiguity distracts from evaluating audience and continuity. Real conversations can contain changing plans; this controlled scenario did not explain a change.

**Response:** the community scenario’s Family fixture now asks about Saturday, matching its home preview and relationship message. Other baseline fixtures remain separate.

**Acceptance:** group and provider content agree on the scenario date; no booked/agreed status is invented.

### F04 / P2 — Instructions compete with action and content

**Observed:** separate proposal and journey panels repeated preparation/privacy instructions; the provider repeated the email task explanation. Reviews contained long boundary descriptions. [Baseline excerpt review](../studies/community-manual-test/15-12-email-audience-review.jpg).

**Risk/inference:** more reading and scrolling may make the primary action harder to identify. No human comprehension or reading-time result is available.

**Response:** proposal preparation and review occupy one local object. Relationship entry offers a short action rather than a paragraph of instructions. The email review keeps recipient and selected text visible; exclusions expand under “What stays private?”. External email’s separate security boundary remains visible.

**Acceptance:** concise action/audience stays visible; exclusions remain inspectable; no meaningful privacy warning is removed; tools and reply draft remain within their relationship.

### F05 / P2 — Two scrolling surfaces complicate the mobile test

**Observed:** the fixed-height embedded prototype and outer checklist page both scrolled. Screens could show only part of the prototype while moving between instructions and actions. The operator used the embedded page; the full-screen route was not tested in this manual run.

**Risk/inference:** extra movement may be mistaken for a product-navigation problem, reducing the quality of formative test evidence.

**Response:** “Start focused test” expands the existing iframe within the browser viewport, disables outer-page scrolling and retains a reachable “Return to checklist” control. Entering and exiting does not reset the iframe or drafts. The full-screen link remains available.

**Acceptance:** focused test fits narrow/desktop viewports; only prototype content scrolls; exit returns keyboard focus to the entry button; task state survives.

## What worked and what remains unproven

Confirmed in this run: selected-title and selected-excerpt handoffs, cancellation, independent in-page drafts, Maya/group return, provider separation, retained search, and no reported console errors. The title and excerpt appeared in the simulated group record. These checks establish visible local behaviour, not real transport delivery, cryptographic exclusion or compliance.

The architecture’s **retained context**, **deliberate crossing** and **coherent return** were visible. The refinements target **local action** and **adaptable space** without changing the human relationship model. The octopus remains the flow analogy, not an animal-shaped interface or evidence that the result is usable.

Not tested: real software keyboards, physical reach, screen readers, native text scaling, live permissions, joins/leaves, profile switching, actual email, attachments, offline/reload recovery, large real inboxes or human preference. No SUS score, usability success percentage or generalised performance claim is reported. T05 remains open.

## Fix verification and follow-up

The original manual evidence records the pre-fix V2.1.2 journey. [UX-fix check record](community-ux-fixes-check.json) and [community regression record](community-journey-check.json) document later agent-operated Chrome verification of V2.1.2.1; these are separate from the manual baseline. [View the revised mockup](../v2121.html). [Task tracker](NEXT_STEPS.md) records each finding with its status and evidence.

Prioritise participant comparison of destination comprehension, default-state clarity, reading burden and focused test orientation. A browser pass closes the implementation task; it does not close the human-validation question.

Original project interpretation. Skills used: kings-of-mobile-design (mobile state, navigation, accessibility and validation principles). Broader sources and verified upstream facts: [SOURCES.md](SOURCES.md). Original code MIT; original design CC BY 4.0. Screenshots contain fictional test material on the public project page.
