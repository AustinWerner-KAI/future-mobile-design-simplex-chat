# Claude handoff — From anatomy to interface

Prepared for Austin on **5 October 2026, Asia/Dubai**. This is a transfer of project context and learnings, not a new design release. Project state before this handoff: commit `357ac96` on `main`.

## Start here

- Repository: https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat
- Latest edit: [V2.1.2.1 mockup gallery](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2121.html).
- [Interactive mobile candidate](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.1).
- [Community journey and focused test](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/studies/community-journey.html).
- [Durable todo list](NEXT_STEPS.md).

Read `AGENTS.md`, [DESIGN_MEMORY](DESIGN_MEMORY.md), [EVOLUTION_FROM_ANATOMY](EVOLUTION_FROM_ANATOMY.md), [V2_1](V2_1.md), [COMMUNITY_MANUAL_TEST](COMMUNITY_MANUAL_TEST.md) and [SOURCES](SOURCES.md). The [2028 reset](2028_DESIGN_RESET.md) is an earlier critique; its palette proposals are history, not current instructions.

## What Austin is building

An independent community design project exploring the future mobile experience for [SimpleX Chat](https://simplex.chat/). Title: **From anatomy to interface**. Contributors should see the original thinking, failed directions, iterations and current interactive work, then help critique and build it. This is unaffiliated with SimpleX and Jony Ive, and is not an official roadmap.

The project began with Jony Ive-inspired restraint, nature and the octopus's different evolutionary journey. Austin wants meaningful innovation, clean organisation, effective use of mobile space and design with no ego. A futuristic palette or curved card alone does not meet that ambition.

## The central thesis — preserve this

**Human relationships organise the interface. The octopus theory is the architecture of the flow.**

People, groups, publications and providers are recognisable entities. The octopus analogy governs:

1. Coordination: the relationship anchors the task.
2. Local action: tools unfold beside the content they concern.
3. Adaptable space: the active task earns surface; quiet context stays compact.
4. Retained context: drafts, reading position and return route survive local transitions.
5. Deliberate crossing: review exact content and audience before sharing across contexts.
6. Coherent return: recover the original relationship and working state.

It does not require a literal octopus silhouette, eight radial arms, organic decoration or a biological simulation. It is a design hypothesis, not SimpleX protocol architecture. Evolution is not a ladder: avoid “most evolved”, “furthest from humans”, universally communal octopuses or nine independent brains. Verified biology and upstream sources are in SOURCES.

## Founder feedback and its consequence

Austin supplied private feedback from Evgeny Poberezkin. The useful product direction is to model small human communities, make things simple, and organise around **who** the person engages with. People, groups, publications, providers and potentially places matter before public/private or long/short modes. Grid favourites are a hypothesis worth comparing, not proven user preference.

Do not reproduce private correspondence or unrelated political opinions. The project already records the design implications without publishing the private transcript. Email integration is speculative: no reviewed source establishes a committed SimpleX release.

## Current design and version status

V2.1.2.1 is the latest edit and leads GitHub About, README, documentation and review entry points. **V2 is the earlier reference baseline**. Older audits retain their original scope; do not rewrite them as tests of the latest version.

Home candidates share a runtime:

- 2.1.1: favourites grid/list, three initially visible, expand to six.
- 2.1.2: horizontal favourites strip and mixed recent list.
- 2.1.3: editable, overlapping personal collections; collections do not change permissions.
- 2.1.2.1: refined compact strip plus the small-community scenario.

The latest gallery contains 14 captured states of the implemented candidate, not a complete messaging application or exhaustive state coverage. Individuals, groups, publications and providers have different identity shapes/badges plus explicit labels. Icons are monograms/type marks, **not real QR codes**. A unique persistent QR avatar could reveal/correlate contact data; that suggestion was not implemented. The invitation uses a clearly labelled invalid demo QR.

Colour: white reading canvas, subtle blue identity/selection/publication materials, neutral lettering, oat email and clay primary actions. **No blue words.** Plum and broad tinted treatments were rejected. Do not present Austin's colour preferences as medical claims about eye health. Keep semantic labels and shape so colour is not the only cue.

## Working flow

Maya private reply → prepare a Saturday title locally → review exact title for Family → simulated share → Family group → Harbour Café → separate email draft → prepare/review selected excerpt for Family → return to Family/Maya with independent drafts retained.

Sharing a title is not agreement; opening the café shares no group history. External email does not inherit SimpleX chat security. Publications are read-only in this sample. All people and content are fictional; no real delivery, booking, verification, mailbox or contact creation occurs.

State is RAM-only. Reload clears it. Do not silently add persistence for sensitive drafts. Define choice, lifetime, storage and clearing first.

## Manual test learnings and fixes

An agent used live browser controls on the pre-fix V2.1.2 journey. No human participant or physical phone was used. The restarted run retained 23 browser screenshots. **No continuous recording/video exists.** Austin stopped recording; do not restart recording without a new request.

Five findings addressed in V2.1.2.1:

- F01: competing proposal destinations → one explicit Family review/share in the community scenario; local baseline shares name recipients.
- F02: visible valid default could not be reviewed until edited → default immediately reviewable; blank/duplicate titles blocked.
- F03: Sunday/Saturday mismatch → community group and proposal defaults use Saturday.
- F04: repeated instructions and tall stacked panels → one local preparation/review object; concise actions; email exclusions unfold on request.
- F05: page and iframe both scrolled → focused test mode locks outer scrolling; exit restores focus and preserves iframe state.

A browser tool masked an email field value during inspection. Visual evidence showed the draft retained; the report correctly treats that discrepancy as an instrumentation limitation, not a product draft-loss finding.

## Evidence and its limits

- [Manual report](COMMUNITY_MANUAL_TEST.md) and [immutable original screenshot manifest](community-manual-test-evidence.json): pre-fix baseline, separate from scripted checks.
- [UX-fix record](community-ux-fixes-check.json): 13 checks.
- [Community record](community-journey-check.json): 18 checks.
- [Latest interface record](v2121-interface-check.json): 14 captures at 390 × 844; 15 overflow checks across five contexts at 320/390/768 CSS pixels.
- Gallery images loaded and layout checked at 320/390/1440 during publication.
- Latest documentation correction checked 542 relative file links. External destinations and section anchors were not revalidated.

Browser checks establish the tested simulation behaviour. They do not establish human comprehension, native keyboard behaviour, screen-reader usability, real transport/security or performance. Do not combine historical test counts into a claim that all suites were rerun. Test records and screenshots are evidence, not a production readiness badge.

## Editable files and workflow

- Shared runtime: `prototypes/src/v21/app.js`, `style.css`, `index.html`.
- Generated output: `v21.html`. Rebuild with `node scripts/build-demo.mjs`; do not edit generated output alone.
- Directly authored galleries: `v2121.html`, `v21-options.html`.
- Test host: `studies/community-journey.html`.
- Capture script: `scripts/capture-v2121-interface.cjs`.
- Captures: `studies/v2121-captures/`.
- Scripts: `check-community-journey.cjs`, `check-community-ux-fixes.cjs`, `check-v21.cjs`, `check-v21-fixes.cjs` and other scoped variants.

Run a local server with `python3 -m http.server 8000`. Browser scripts require Playwright and Chrome supplied by the environment; dependencies are not bundled. On Austin's current machine:

```sh
export PLAYWRIGHT_MODULE=/Users/austinwernerltd/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright
export BROWSER_PATH='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
node scripts/check-community-journey.cjs
```

The local checkout is `/Users/austinwernerltd/Documents/Codex/2026-10-03/who-is-jonny-ive-and-what/outputs/octopus-community`. Paths may differ in Claude's environment. Check status before editing; preserve user changes. Refresh affected images after UI changes and update the source register, iteration record and task evidence. Original code MIT; original design CC BY 4.0, subject to LICENSING exclusions.

## What to do next

Follow NEXT_STEPS IDs; do not invent completed research. T01–T04 and T13–T18 are completed prototype/documentation milestones. Open tasks:

- **T05, priority:** real-phone/participant comparison of the homes; audience comprehension, keyboard, larger text, interruption and return.
- T06: explicit user-controlled relationships between people/providers/places.
- T07: group lifecycle, roles and permission changes.
- T08: contextual identities/profiles with isolated drafts and search.
- T09: full attachment preparation, cancellation, permission/failure and retry lifecycle.
- T10: deliberate recovery after reload/closing.
- T11: general recipient choice for email-to-chat handoff.
- T12: feasibility against upstream SimpleX mobile architecture.

T05 needs people and devices; an agent cannot tick it off by running browser scripts. If Austin asks for more implementation while that research is pending, agree a specific open task and retain clear evidence limits. Do not relaunch a broad visual redesign or silently replace the latest candidate.

## Collaboration preferences

Austin prefers action and brief progress updates; avoid repeated confirmations for already authorised reversible work. Finish the requested change and verification. He has authorised GitHub publication in this project, but another tool/session may impose its own access checks. Do not send messages to other people without explicit authorisation. Preserve the story and current-version links, and report what changed, what was checked and what remains untested.
