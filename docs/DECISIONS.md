# Design decisions

> **Latest edit — [V2.1.2.2: identity, discovery and the shape scale](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/blob/main/docs/V2_1_2_2.md). Start here.** [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.2) · [V2.1.2.1 mockup gallery](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2121.html) (14 states, 4 October 2026). Published 5 October 2026: profiles and incognito, public channel discovery, email handoff to a chosen chat, one shape scale and a running mobile audit. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

> Current reference, 4 October 2026: [shared design brief](DESIGN_BRIEF.md) · [evolution rationale](EVOLUTION_FROM_ANATOMY.md) · [visual progression](../studies/concept-progression.html). Dated audits and earlier palette proposals below remain iteration evidence.

## Accepted working direction

- The conversation can expand into a workspace and return with drafts intact.
- A shared image can contain anchored replies.
- Membership and agreement are separate actions.
- Chat and email can be organised around a relationship, with explicit channels.

These are project directions, not validated outcomes.

## Open decisions

Home organisation; real expansion origins; handling hundreds of contacts; accessible image annotations; production protocol feasibility; private moderation contact; mixed-channel identity mapping.

## Record a new decision

Date / issue or discussion / problem / alternatives / decision / evidence / tradeoff / follow-up check.

## 2026-10-03 / Community launch terms

Owner and public visibility authorised: AustinWerner-KAI. Original code MIT; original design material CC BY 4.0 with attribution. The project narrative records the initiator’s thinking and invites independent alternatives.

## 2026-10-03 / Full audit and list alternative

The evolutionary analogy is now explicit in the initiator’s thinking: different foundations can lead to a different design journey. Added a seven-conversation multi-message list as an alternative to coordinated paths. Neither navigation model is validated. The full audit corrects invitation review state, image decode handling, focus return, stale descriptions and incomplete prompt provenance. Next decision should follow comparative task observations, not visual preference alone. See [FULL_AUDIT.md](FULL_AUDIT.md).

## 2026-10-03 / One active conversation in the list

Keep nearby conversations visible and allow one active workspace. Preserve per-person drafts when switching or filtering, show a draft marker on collapsed rows and bound message-history growth with an accessible scrolling region. This is an exploratory interaction choice; comparative usability testing remains open.

## V2 / Website identity and native-app fit

Publish five research-informed studies with blue/cyan/pale-blue/white colours. Use existing-app concepts: deliberate QR/link connection, contextual profiles, preview privacy, verification and group roles. Exclude speculative email from the present-app menu variant. The integration proposal reuses native state/handlers and keeps protocol changes out of the first slice. All current files remain browser simulations.

## Clarified purpose / Future experience, not present-app reinvention

The initiator reiterated that this is an exploration to determine what the future could look like. Use current SimpleX privacy, profiles and QR connections as foundations for future hypotheses. Native integration notes are conditional feasibility considerations, not a near-term implementation plan. Judge contributions by what they reveal about a future experience, rather than how closely they recreate the current app.

## 2026-10-04 / Current imagery and progression

Supersede the earlier broad blue V2 palette with white, subtle blue materials, neutral words and clay actions. Keep original concept bitmaps and dated audits as history; refresh current rendered screen previews. Present all nine originals, five V2 studies and current inline/email behaviour in one progression. Explain the different-evolution analogy with a cited biology reference and explicit limits. Budget, production rollout and native feasibility remain open.

## Evidence and attribution

[Source, implementation-evidence and asset register](SOURCES.md). Project proposals and dated critiques are original interpretations; external facts, validation methods and visual provenance are distinguished in the register.

## Earlier V2 reference decision — 4 October 2026

The owner initially selected [V2](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2.html) as the review reference. This decision is retained as history. The later request to make **[V2.1.2.1](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2121.html) the latest edit** supersedes that navigation priority. Lead review and contribution routes to the latest mockup and interactive candidate; preserve V2 and supporting experiments as earlier work. This changes publication status, not production readiness or validation.

## Flow architecture clarification — 4 October 2026

The owner clarified that the octopus theory is the architecture of the flow. Human relationships determine the entities; the octopus model informs interaction coordination, locality, adaptation, continuity and disclosure. [Canonical rules](EVOLUTION_FROM_ANATOMY.md#the-octopus-theory-is-the-architecture-of-the-flow). V2 was the selected reference at this stage; the later V2.1.2.1 publication decision below supersedes that navigation priority.

## 4 October 2026 — latest-edit discovery

The owner requested V2.1.2.1 be clearly identified everywhere as the latest edit. The mockup gallery and interactive version now lead documentation and review entry points. V2 remains available as the earlier reference baseline; statements in dated records describe their original review scope. This publication decision does not imply production readiness or participant validation.

## 5 October 2026 — identity named only at the point of action; mark only

From the T19 third-pass audit (E1): owners cannot see subscribers and readers cannot see each other, so naming an identity while reading implied a visibility that does not exist. Identity appears at the invitation, the acceptance line, the comment crossing and the composer, nowhere else. For T08 the owner chose a profile mark with no name in the home header; the spoken label names the active profile for screen readers. The risk, whether a monogram alone identifies the profile, moves to T05.

## 5 October 2026 — one shape scale

The owner asked for a critique of the shapes. Nine radii in the studies and fifteen in the runtime had no scale. Decision: circle for people and round controls; pill for every action and selected state; 12 px for every container; 16 px for dialogs; 6 px publication mark; 5 px type badge; 30 px device frame on desktop. Checks assert the scale in the runtime and the studies. Directly authored galleries keep their earlier radii until re-captured.

## 5 October 2026 — a fault seen twice becomes a rule

The owner noticed off-centre tiles and said he had seen the pattern before. Decision: when the owner sees a fault more than once, it becomes a framework rule with an assertion, not a one-off fix. First two: words stay whole at large text; grid tiles are anchored.

## 5 October 2026 — V2.1.2.2 is the latest edit

Everything built on 5 October 2026 on the rail candidate is named V2.1.2.2 and recorded in [V2_1_2_2](V2_1_2_2.md). The interactive runtime is the record; no new static gallery was captured because the publishing connector cannot carry images. `version=2.1.2.1` links are an alias of the same build; the V2.1.2.1 gallery is kept as the 4 October 2026 state. This is a publication decision, not production readiness or participant validation.
