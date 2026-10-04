# From different evolution to a different interface

> **Latest edit — [V2.1.2.1: complete interface mockup](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2121.html). Start here.** [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.1). Published 4 October 2026: 14 interface states and the community-test refinements. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

## The octopus theory is the architecture of the flow

**Human relationships define what the interface contains. The octopus theory informs how the experience flows.** This is the project owner’s architectural design thesis, clarified on 4 October 2026.

People, groups, publications, providers and potentially places are proposed destinations. Whether people recognise and organise them this way requires research. The octopus model informs coordination, local action, flexible working space and controlled movement between those destinations. A grid or a list can express this architecture: neither requires a radial layout or an animal silhouette.

Here, “architecture” means the intended organisation of interaction, state and transitions. It does not describe SimpleX’s protocol topology, its implementation architecture or a literal biological simulation. It is a design hypothesis to test, not proof that the current V2 screens already implement every rule.

| Flow rule | Intended behaviour (not a completion claim) | What to evaluate |
|---|---|---|
| Coordinate | A recognisable home connects the person to their entities and preserves orientation. | Can someone find an entity and return to their previous position? |
| Act locally | Tools belong to the selected relationship or content, with source and audience visible. | Can someone act without reconstructing the context? |
| Adapt the working space | The active task can unfold while its origin remains understandable. | Does expansion improve the task on a small screen and with a keyboard? |
| Retain useful state | Drafts and selections survive supported task changes; retention limits are explicit. | What survives back, cancellation, switching and interruption? |
| Cross deliberately | Content moves into another audience only through a clear, intentional action. | Can someone identify exactly what is shared, with whom and through which transport? |
| Return coherently | Completing or dismissing a task restores an understandable relationship context. | Is the person’s position, draft and outcome still clear? |

An example flow is **find Maya → open the relationship → prepare something privately → review its audience → share deliberately → return to Maya with the remaining draft intact**. This is a proposed interaction contract. V2 is the current review reference; the inline and email experiments supply partial demonstrations and expose gaps.

The distinction gives contributors two questions: **Does the structure reflect human relationships? Does the flow preserve coordination, locality, continuity and deliberate disclosure?** The biological research below explains the origin of the idea; these interaction rules are the project’s interpretation.

## The starting idea

Octopuses and humans share deep animal ancestry, then developed along different branches: octopuses are invertebrate molluscs; humans are vertebrate mammals. Octopuses have flexible arms and nervous-system arrangements unlike ours. A 2022 anatomical study identified intramuscular nerve cords connecting different arms. The researchers proposed possible roles in coordination and sensory feedback, but the cited report explicitly said the function of this particular arrangement was not yet known. It supports interest in alternative structures, not a proven control model for our interface. [University of Chicago research summary](https://biologicalsciences.uchicago.edu/news/unique-octopus-nervous-system).

This is not an evolutionary ladder, and humans did not evolve from octopuses. We do not claim nine independent brains, that octopuses are universally communal or that they are the most evolved animal. Our useful question is: **if the foundations differ, why should the resulting interface follow the same path?**

SimpleX describes communication without user IDs and contacts and groups held on the user’s device. Those foundations prompt a different set of interface questions from a global account directory. [SimpleX](https://simplex.chat/). This project explores the consequence; it is not a biological model of a network or a claim that every familiar messaging convention must disappear.

Cephalopod colour changes provide the camouflage reference. Deliberate UI visibility is our interpretation of that observation, not the animal’s intention mapped into software. [Smithsonian Ocean](https://ocean.si.edu/ocean-life/invertebrates/how-octopuses-and-squids-change-color).

## Translate differences into testable design

| Biological inspiration | Design interpretation | Proposed expression / supporting experiment | Limit |
|---|---|---|---|
| Alternative nervous-system organisation | Coordination with local action | Relationship index; tools beside the source | UI analogy, not a literal mapping to network topology |
| Flexible arms | Space adapts to the task | A compact row unfolds into a working surface | Curves must not reduce legibility or touch space |
| Local contact and sensing | Action belongs where its content is | Image replies and source-attached proposals | Essential actions need labelled alternatives |
| Selective visual exposure | Visibility is a deliberate choice | Hide previews; explicitly reopen; review sharing | Concealment is not authentication or cryptographic access control |
| Different evolutionary path | Different starting conditions may yield different solutions | Contextual identity, deliberate connections and explicit transport boundaries | Better outcomes require research, not metaphor |

## The progression we want contributors to see

This is a thematic summary, not a precise creation timeline. Consult [ITERATIONS.md](ITERATIONS.md) for the dated sequence and [the current-design check record](current-design-walkthrough-check.json) for the scope of browser observations.

1. **Early appearance studies:** cleaner lists, spaces and lenses. Design assessment: the appearance changed more than the underlying interaction model.
2. **Nature and anatomy:** branches, flexible regions and local points. Design concern: literal geometry might not scale; scalability and usability were not established by participant testing.
3. **Complete flow and sculptural studies:** invites, images and plans. Critique: continuity was often visual while navigation still rebuilt context.
4. **V2 foundations:** five concrete studies grounded invitations, profiles, verification and membership. Critique: still close to contemporary messaging.
5. **Behaviour reset:** the relationship becomes the workspace; the supporting browser experiment retains the reply draft across the tested local tool changes within the page session; reload clears its state. Question: does unfolding help people recover and understand the audience?
6. **Material refinement:** broad blue text, weak colour, Plum, warm paper and sage were explored. Current direction is white, subtle blue surfaces, neutral words, oat email and clay actions.
7. **Email boundary:** prepare one useful detail privately; review exact text and destination; share a snapshot while retaining the external source and reply.

[V2](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2.html) is the current project reference. [The inline study](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/unfold.html?mobile=1) is a supporting behavioural experiment. [The email storyboard](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/studies/email-storyboard.html) follows one crossing between transports. [The visual progression](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/studies/concept-progression.html) places these beside the original imagery.

## How imagery is maintained

The original nine bitmap boards remain historical artefacts with their original colours and inconsistencies. Repainting them would conceal why the thinking changed. Their gallery captions and catalogue place them in the documented progression. V2 is the owner-selected current reference, not a claim that it was created last. Rendered browser previews capture particular recorded states; they are static images and do not demonstrate that every control works or that the entire flow is validated. Capture/provenance records are listed in [SOURCES.md](SOURCES.md) and [ASSET_PROVENANCE.json](ASSET_PROVENANCE.json). The editable SVG board summarises the approved visual direction.

## Build on the difference

Choose one transition and compare it with a conventional flow. Record source retrieval, draft loss, audience mistakes and recovery. Contribute a competing sketch or implementation with its reason, what survives from the analogy and what you reject. Different evolution is our starting question, not proof that our answer is better.

## Accuracy review — 4 October 2026

Rechecked the cited University of Chicago, SimpleX and Smithsonian pages. Qualified the uncertain function of the inter-arm nerve arrangement; marked the entity model and flow rules as proposals; replaced the unsupported claim of demonstrated scaling failure with an open design concern; scoped draft retention to tested in-page changes; and distinguished static previews from implementation evidence. No participant results or verified protocol implementation are claimed.

## Evidence and attribution

[Source, implementation-evidence and asset register](SOURCES.md). Project proposals and dated critiques are original interpretations; external facts, validation methods and visual provenance are distinguished in the register.
