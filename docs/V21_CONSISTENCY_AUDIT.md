# V2.1 consistency audit

> **Latest edit — [V2.1.2.1: complete interface mockup](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2121.html). Start here.** [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.1). Published 4 October 2026: 14 interface states and the community-test refinements. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

4 October 2026. Scope: all three V2.1 variants, shared interactive flows, embedded comparison, current grid rationale and project discovery links. This is an agent-operated code/browser audit, not a review of every historical prototype or human usability research.

**[V2 is the earlier reference baseline](../v2.html). [Open the candidate gallery](../v21-options.html).**

## Confirmed findings and fixes

| Finding | Correction |
| --- | --- |
| Collection rename updated the home but left membership checkbox labels stale | Both labels now update together; user text remains escaped |
| Re-rendering the home while a dialog was open removed its original focus target | Closing favourites, collections or invitations restores focus to the matching current trigger |
| Desktop mobile-study link omitted the selected variant | Each variant now links to its own mobile version |
| Status feedback was copied into unrelated dialogs and repeated across live regions | Feedback targets the active dialog or app surface and clears on close/navigation |
| Every relationship began with Maya’s seaside proposal | Defaults now follow each fictional conversation: sketches, lunch, chapter discussion or seaside plan |
| Latest-candidate navigation link overflowed the landing page at 390 CSS px | Project navigation wraps within the available width |

Documentation now explicitly distinguishes shared implementation from independent page/preview state. No private correspondence, biological claim or verified SimpleX protocol behaviour was added.

## Evidence

[Targeted audit record](v21-audit-check.json) covers label consistency, safe rendering, feedback scope, modal focus, variant links, contextual proposals and the landing/gallery/walkthrough page widths. Shared regressions are recorded in [refinement](v21-refinement-check.json), [options](v21-options-check.json), [targeted fixes](v21-fix-check.json), [gallery](v21-gallery-check.json) and [interaction](v21-browser-check.json) records. Updated screenshots are captured from the local generated build.

## Architecture and unresolved limits

The octopus theory remains the flow architecture: coordination, local action, adaptable space, retained context, deliberate crossing and coherent return. Human relationships organise the surface. The modal-focus and retained-state checks exercise that continuity; browser results do not establish that the concept is easier to use.

Still explicit prototype limits: fictional timestamps/unread counts, no real transport or storage, memory cleared on reload, scenario-specific email-sharing destinations (Maya in the baseline; Family in the later community journey), sample membership rather than live permissions, and no cryptographic verification. Native keyboards, screen readers, full accessibility conformance, real inbox performance and participant comprehension are not verified. The three variants remain candidates; this audit does not select a winner.
