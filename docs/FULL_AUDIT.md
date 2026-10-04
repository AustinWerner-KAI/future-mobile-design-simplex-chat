# Full project audit

> **Latest edit — [V2.1.2.1: complete interface mockup](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2121.html). Start here.** [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.1). Published 4 October 2026: 14 interface states and the community-test refinements. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

> Current reference, 4 October 2026: [shared design brief](DESIGN_BRIEF.md) · [evolution rationale](EVOLUTION_FROM_ANATOMY.md) · [visual progression](../studies/concept-progression.html). Dated audits and earlier palette proposals below remain iteration evidence.

3 October 2026 · From anatomy to interface

## Verdict

The project is ready to publish as an independent community design exploration. It now has a coherent starting point, visible iteration history, five working studies, nine visual boards, editable sources and practical ways to contribute. It is not ready to be described as a validated product design, accessible production messenger or security implementation.

The strongest idea is that different foundations can lead to a different design journey. The octopus offers an alternative functional model; simplex.chat provides a communication model from which to ask fresh interface questions. That idea now appears explicitly in the initiator’s thinking, README, opening presentation and contribution guidance. The community is invited to develop and challenge it, rather than reproduce a fixed visual style.

## Scope

Reviewed the website, README, concept library, narrative, design brief and language, iteration record, critique, community guidance, licences, visual catalogue and preserved prompts. Reviewed reference prototype code, historical studies, menu study, structural wireframes and the export process. Browser checks covered eight current standalone pages at 360, 390 and 1440 pixels. The earlier combined prototype remains an explicitly archived comparison, with its historical shortcomings intact.

## Findings corrected

| Area | Finding | Result |
|---|---|---|
| Story | The evolutionary premise was implied rather than explained. | Added a first-person thesis, with sources and a clear distinction between design ambition and an approved roadmap. |
| Beginning and iterations | Readers needed the anatomy model first without losing the actual creation sequence. | Anatomy remains the opening board; the separate iteration record preserves the sequence and includes the latest rework and list experiment. |
| Menu | The coordinated-path study did not answer the request for multiple messages in one list. | Added a working seven-conversation menu with two previews each, search, unread/group filters, local expansion, drafts and explicit simulated replies. |
| Invitation state | Backing out of review could leave a person labelled as invited; a pending invitation was difficult to find again after returning home. | Separate review from created invitation, clear cancelled reviews and provide a resume route for a pending invitation. |
| Boundary copy | Pending-state copy said an invitee could see nothing before joining, despite showing a proposal preview. | State what the invitation previews and what joining opens; keep private history excluded. |
| Photographs | A corrupt image file could become actionable, and a failed new selection could leave an old selection actionable. | Disable sending during selection and only enable it after successful image decoding. Errors keep sending disabled. Applied to both current photo studies. |
| Focus | Returning from a secondary flow always focused Maya rather than the originating path. | Restore focus to the selected path; focus the visible flow heading after navigation. |
| Visual consistency | The former composer clipped and the phone grew with content. | The preceding revision supplies border-box sizing, a bounded reference surface, an aligned composer and a scrolling active arm. Actual screenshots accompany it. |
| Documentation | README and challenge text still described the former stacked home. | Describe the path and list alternatives accurately and keep their scale unproven. |
| Provenance | Some text implied all nine generation prompts were included. | State that only the final two prompts were preserved; earlier seven prompts are unavailable. No prompts were reconstructed. |
| Community | Contributors needed a concrete way to develop the central idea. | Add role-specific questions, compare the two menu approaches and ask for a question, experiment, evidence and resulting decision. |

## Verification

- Eight pages at three widths: no horizontal page overflow, missing populated images, missing image alt attributes or broken local HTML links/anchors in the checked pages.
- Reference prototype: conversation/draft return, photo selection, simulated image send and point reply, plan creation, explicit invitation creation, review cancellation, pending-invitation return/revocation, joining, separate date confirmation, connection decline and labelled email composition.
- Error handling: an unreadable PNG remains unsendable.
- Menu: seven conversations and fourteen preview lines; person/message search, unread and group filtering, no-match state, keyboard opening and Escape return, draft preservation and explicit local send. Light and dark screenshots inspected.
- Story/library: anatomy remains first; all nine board files are present. Five active studies are linked; the previous combined study is retained for comparison.
- Export: current previews rebuild from their source files using Node built-ins. The menu is a complete standalone source document; other studies use the original minimal wrapper.
- Source context: rechecked the official SimpleX description and linked University of Chicago / Smithsonian material. No email roadmap commitment or animal social model is asserted.

These are implementation checks and a heuristic design assessment. No participant research, screen-reader certification, WCAG conformance, device-keyboard testing or production integration is claimed.

## Remaining design questions

1. **Scale and navigation.** The path home uses a few fixed samples. The list supports search but has not been tested with hundreds of conversations. Compare both using identical tasks rather than judging screenshots alone.
2. **Continuity of origin.** Secondary paths still reuse the shared Maya expansion surface. They should eventually unfold from their actual origin. The coordinating centre is explanatory, not a working control.
3. **State restoration.** Reference studies have independent optional host snapshots, and drafts survive local navigation. Full reload restoration across all flows is unfinished; photographs are memory-only. The menu explicitly keeps drafts in the current tab.
4. **Accessibility.** Keyboard routes and labels are present in tested flows, but image annotation still needs a navigable text list and editable coordinates. Large text, real virtual keyboards, screen readers and one-handed reach require deeper assessment. Fixed geometry in historical studies is retained as history.
5. **Protocol feasibility.** Sharing boundaries and delivery states are local simulations. Real SimpleX membership, retention, identity and transport behaviour need maintainers’ review.
6. **Email.** Email remains an explicitly labelled scenario with ordinary channel properties. Mixed identities, errors, threading and attachment scope are open questions.
7. **Visual realism.** Generated boards retain inconsistencies. They show directions, not exact implementation specifications. Actual prototype screenshots show what is runnable today.
8. **Moderation.** The initiator is named, but a dedicated private reporting contact has not been published. Existing conduct guidance avoids inviting sensitive details into public issues.

## The next contribution

Find Maya, identify an unread group, read the two latest messages, write a draft, close and return. Compare the list and path menus. Record navigation errors, audience misunderstandings and what is lost or retained. Then propose one change with before/after evidence. The project should evolve through those observations.

See [the thinking](THINKING.md), [contribution guidance](../CONTRIBUTING.md), [open challenges](CHALLENGES.md) and [prototype audit](PROTOTYPE_AUDIT.md).

## Follow-up / List continuity revision

The next iteration limits the list to one active conversation, preserves drafts when switching or filtering, marks retained drafts and updates both latest-message previews after simulated sending. Focused browser checks passed for these flows, keyboard input, reduced motion and horizontal fit at 360, 390 and 1440 pixels. See the [iteration record](ITERATIONS.md). Remaining research and production limitations above still apply.

## Evidence and attribution

[Source, implementation-evidence and asset register](SOURCES.md). Project proposals and dated critiques are original interpretations; external facts, validation methods and visual provenance are distinguished in the register.
