# Next iteration: make the unfolding experience complete

> **Current project reference — [V2: five designs](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2.html). Start here.** Selected by the project owner on 4 October 2026. Inline/unfolding, email and nine-context pages are supporting experiments; dated audits below retain their original scope.

Published 4 October 2026. These are proposed next steps following the [current-design walkthrough and audit](CURRENT_DESIGN_WALKTHROUGH.md), not completed features or a committed SimpleX release schedule. Work is open for contributors; no owners or delivery dates are assigned.

The octopus analogy remains the starting question: distinct foundations can produce distinct behaviour. Keep the list as a coordinating surface, actions local to their relationship, and disclosure deliberate. Space follows attention; design has no ego.

## 1. Bring connections, groups and profiles into the unfolding experience

**Problem:** connection creation currently leaves the inline page. Groups and profile controls live in a separate comparative study.

**Design work:** explore invitation preparation, identity disclosure, pending/accepted/revoked states, group membership and roles, and profile changes within the coordinating surface. Preserve a clear difference between joining a group, agreeing to a plan and verifying a connection.

**Show:** an editable flow and before/after storyboard, including cancellation, back navigation and return to an unsent reply. Keep private messages, public channels and external email distinguishable.

**Evidence needed:** returning from each task retains the correct draft and relationship context; observer roles cannot send; profile changes do not expose another profile’s draft or search results. Browser simulation can check state logic, but real native identity and connection behaviour require upstream implementation.

## 2. Design draft recovery and complete image handling

**Problem:** current work lives in page memory and clears on reload. The inline image flow uses one fixed sample and does not demonstrate a complete attachment lifecycle.

**Design work:** define draft lifetime, explicit retention choices, sensitive-data handling and recovery after interruption. Design image selection/replacement, captions, cancellation, permission refusal, failure, retry and duplicate prevention. Distinguish local draft, queued work, server acceptance and recipient delivery.

**Show:** state diagrams, recovery screens and an editable prototype covering a lost connection and an interrupted session. Any persistence must state where data is kept, how long, and how it is cleared; do not silently add storage to the existing prototype.

**Evidence needed:** a recoverable draft returns to the right audience; cancellation retains or discards content as stated; retry does not create an unintended duplicate; ambiguous outcomes lead to inspection rather than a blind resend. No real delivery or security guarantee can be established by simulated states.

## 3. Test with real designers on phones

**Problem:** existing evidence is an agent-operated browser review. It does not establish human comprehension, native keyboard behaviour or physical-device usability.

**Research work:** recruit consenting designers with varied familiarity with GitHub and the project. Agree session arrangements before collecting notes; recording is a separate choice. No participants have yet been recruited and no sessions are scheduled.

**Show:** a task-based test plan for the current design, separate from the [contributor discovery walkthrough](CONTRIBUTOR_WALKTHROUGH.md). Include mixed-menu recognition, opening and folding a relationship, returning to a draft, email audience review, and proposed connection/image recovery flows.

**Evidence needed:** observe use on actual phones with keyboards visible, short screens and larger text. Record backtracking, hidden actions, draft loss and audience misunderstandings. Compare patterns and exceptions; avoid population claims from a small convenience sample. Publish an appropriately anonymised account distinguishing observation, interpretation and design response.

## How to contribute

Choose one transition or failure state. Explain the problem, show an editable alternative, name the hypothesis and describe how you would test it. Preserve earlier iterations and label speculative capabilities and local simulations.

[Propose a design](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/issues/new?template=design-proposal.yml) · [Report a finding](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/issues/new?template=usability-finding.yml) · [Contribution instructions](../CONTRIBUTING.md).

## Evidence and attribution

These priorities are original project recommendations derived from the [dated current-design audit](CURRENT_DESIGN_WALKTHROUGH.md) and [recorded browser checks](current-design-walkthrough-check.json). They are not external research findings or announced SimpleX features. Broader protocol, anatomy and method references are recorded in [SOURCES.md](SOURCES.md). Original design material uses CC BY 4.0; original code uses MIT, subject to [LICENSING.md](../LICENSING.md).
