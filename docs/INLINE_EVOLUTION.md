# One relationship. Room to unfold.

> Current reference, 4 October 2026: [shared design brief](DESIGN_BRIEF.md) · [evolution rationale](EVOLUTION_FROM_ANATOMY.md) · [visual progression](../studies/concept-progression.html). Dated audits and earlier palette proposals below remain iteration evidence.

4 October 2026. A response to the initiator’s rejection of the blue palette and request to demonstrate the octopus thesis more convincingly.

[Open the experiment](../unfold.html) · [Nine-screen comparison](../experience.html) · [Preserved blue iteration](../prototypes/experience-blue.html) · [Design memory](DESIGN_MEMORY.md)

## Thesis

A different evolutionary path should produce a different organisation of action. Here the list remains the coordinating surface. Opening a relationship gives it space; its tools appear beside the source, and unrelated relationships remain accessible below it. Returning does not require rebuilding a private draft.

The octopus analogy informs local action, adaptable form and deliberate visibility. This prototype does not attempt to reproduce anatomy. Its fine line identifies the relationship that owns an action. More curves would not improve that ownership model.

## Colour

Current Chalk uses white canvas/private reading, pale blue channels, oat email, neutral lettering and clay actions. Small blue avatar/selection surfaces provide familiarity. Charcoal is the dark alternative; Moss, Citrus and Petal are comparison candidates. Colour does not encode trust, membership or delivery; words carry those states. [Current token roles and evidence](COLOUR_RESEARCH.md).

Earlier warm paper, sage and blanket blue rejection are recorded in [the iteration history](ITERATIONS.md). The initiator later welcomed subtle blue materials while prohibiting blue words. This is a preference, not an eye-health claim. Sampled contrast checks are not full accessibility conformance.

## What changed for the person

| Behaviour | Evolutionary prompt | Visible implementation |
|---|---|---|
| Find a relationship | Coordination | A single mixed list with explicit Private and Channel labels |
| Read and act in place | Local action | The expanded row retains the exact source and tools |
| Shape an object | Adaptable space | Proposal/image/security unfolds inside that relationship |
| Share deliberately | Selective disclosure | A private proposal has its own recipient/content boundary and explicit share |
| Fold and recover | Context continuity | Per-person reply drafts survive folding and switching tools within the page session |
| Reduce exposure | Concealment under human control | Explicit quiet button folds the active relationship and hides collapsed previews; opening a relationship explicitly allows reading |

Private messages and public channels now share the menu. Private entries use circular identity marks; channels use publication marks, angular containers and a distinct material with a written “Channel · public” label. Filters narrow the same list; they do not create separate top-level places. Channel expansion shows a publication and its audience, with no private composer. Comments are off for these fixtures; that is not a claim that SimpleX channels universally disallow comments.

Only Maya has the speculative proposal/image branch. Other people have separate replies and relationship-specific security text. Unchanged proposal snapshots cannot be shared again; changing the title enables a new version. A shared proposal does not imply Maya’s agreement. Security remains “Not verified here.”

## Build and navigation

Edit `prototypes/src/unfold.html` and run `node scripts/build-demo.mjs`. The resulting `unfold.html` is dependency-free HTML/CSS/JavaScript. Relationship changes use browser history; tools are temporary local expansions rather than new destinations. Back returns through opened/folded relationships. A direct `#Maya` link opens Maya; `?mobile=1` removes the exhibition text. The nine-screen design remains available as a comparison, and earlier iterations are retained.

All data is fictional and memory-only; reload clears it. Sending is simulated. There is no actual picker, QR connection, persistent draft, security comparison or SimpleX integration. Quiet mode provides visual concealment, not authentication or a security boundary. Browser history does not become a hidden-profile mechanism.

## Email, beside chat

The mixed menu now includes an external email context alongside private messages and public channels. Its envelope mark, dashed material boundary and “Email · external” label distinguish the transport. Opening the booking shows exact From/To addresses, an account-specific reply and a separate draft. Sending the email never adds it to Maya’s chat or to a channel. No mailbox is connected; integration and its security model remain speculative.

The next integration design must handle multiple accounts, authentication/reconnection, offline queues, attachments and any explicit sharing of email into chat. Shared UI must not imply shared security or silently change the audience.

## Five colour expressions

Chalk, Charcoal and Moss retain the quieter material studies. Citrus and Petal broaden hue and luminance substantially. The in-phone Colour control makes all five available in full-screen mode; switching material preserves the active relationship, tool and draft. Chalk and Charcoal are the recommended light/dark direction; the other three are comparison candidates.

## Tradeoffs and the next test

An expanded row pushes other conversations down. Long histories or many objects could turn the list into a cumbersome scroll. This experiment deliberately tests that risk rather than declaring inline expansion superior. The keyboard may reduce the visible source; there is no physical-device keyboard evidence yet.

Compare this variant with the nine-screen study using the same task: open Maya, draft a reply, shape a private proposal, explain exactly what sharing discloses, share one version, then return to the unsent reply. Interrupt by switching to Alex and returning. Record wrong audience assumptions, lost context and recovery effort. Also test long lists, large text and screen-reader traversal. Retain a conventional destination if it makes those tasks clearer.

Browser checks cover independent drafts, tool continuity, duplicate prevention, folding, Back, concealment, 80 tool/palette/window layouts and short/landscape full-screen layouts. They establish operation and geometry, not participant usability, native behaviour or protocol feasibility.

## Next email iteration

The [email evolution experiment](EMAIL_EVOLUTION.md) advances this baseline with private detail preparation, explicit crossing into Maya’s conversation and email queue/uncertain-outcome states. The previous reading-and-reply iteration is preserved in Git history at commit `9b216a3`.

## Evidence and attribution

[Source, implementation-evidence and asset register](SOURCES.md). Project proposals and dated critiques are original interpretations; external facts, validation methods and visual provenance are distinguished in the register.
