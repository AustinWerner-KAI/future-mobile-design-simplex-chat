# Design language

> **Latest edit — [V2.1.2.2: identity, discovery and the shape scale](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/blob/main/docs/V2_1_2_2.md). Start here.** [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.2) · [V2.1.2.1 mockup gallery](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2121.html) (14 states, 4 October 2026). Published 5 October 2026: profiles and incognito, public channel discovery, email handoff to a chosen chat, one shape scale and a running mobile audit. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

> Current reference, 5 October 2026: [V2.1.2.2 record](V2_1_2_2.md) · [shared design brief](DESIGN_BRIEF.md) · [evolution rationale](EVOLUTION_FROM_ANATOMY.md) · [visual progression](../studies/concept-progression.html). Dated audits and earlier palette proposals below remain iteration evidence.

## Flow architecture

**The octopus theory is the architecture of the flow. Human relationships organise the interface.** People and entities supply recognisable context; coordination, local action, adaptable space, retained state, deliberate sharing and coherent return govern movement through it. This applies to a grid or list without prescribing an octopus-shaped UI. It is an interaction architecture hypothesis, not a claim about SimpleX’s protocol implementation. [Read the flow rules and evaluation criteria](EVOLUTION_FROM_ANATOMY.md#the-octopus-theory-is-the-architecture-of-the-flow). V2 is the earlier review baseline; implementation gaps remain explicit.

## Intention

Organised, clean to the eye, generous with space and capable of adapting. Design has no ego: content and human intent take priority over a signature shape.

## Form

Use a continuous surface with a stable, named origin. The selected region expands into its workspace. Organic geometry should indicate an action or state; ordinary content can keep regular edges where that improves readability. Do not force eight controls or use a literal octopus as navigation.

## Current palette

White `#FFFFFF` for the canvas and private reading; pale blue `#E7EFF5` for channels; ice blue `#F0F5F9` for private identity fills; powder blue `#DCE9F3` for selected surfaces; oat `#EEE3D2` for external email. Neutral ink `#252B24` carries text. Clay `#8D3E2B` marks deliberate actions with warm-white lettering. Never write words in blue. Charcoal is the dark alternative. Colour reinforces labels and shapes; it does not establish privacy. See the [editable direction board](../visuals/design-direction.svg).

## Shape

Set 5 October 2026 and held by `scripts/check-shapes.cjs` and `scripts/check-studies.cjs`. Six shapes, nothing else:

| Shape | Radius | Used for |
|---|---|---|
| Circle | 50% | People, round controls (back, add, send, profile mark) |
| Pill | 999 px | Every tappable action and selected state: buttons, tabs, chips, segments, badges, doors |
| Container | 12 px | Cards, objects, boundaries, inputs, composer, tiles, fieldsets, pending notes, focus rings |
| Dialog | 16 px | Dialogs and sheets; a sheet sits 16 over 12 px cards so nesting steps evenly |
| Publication mark | 6 px | The page-shaped identity mark |
| Type badge | 5 px | The small type badge on group, publication and provider marks |

The crossing keeps its 3 px clay rule with no radius; it is the one defining moment. A tile inside a multi-column grid shows its edge (a visible border or background) or centres its content; never left-aligned in an invisible cell. Groups and providers are told apart by their badge, not by tint alone. The self mark is the only filled circle on the home.

## Typography

The project presentation uses an editorial serif for the thinking and readable sans serif for practical detail. The product needs compact, legible labels, scalable text and an unambiguous hierarchy. The editorial website and mobile UI need not use identical typography.

In the runtime every size is in rem, so the phone's text setting applies. Floor 12 px. Words stay whole at large text: `overflow-wrap: break-word`, tabs and chips in flex rows with `white-space: nowrap` and a 44 px minimum width, round controls clamped 44–56 px, avatars capped at 56 px, the header title capped by screen width. Checked at 16, 24 and 32 px root text on 320 and 390 wide screens.

## Movement

Gather → reach → open → settle. Movement should explain the transition and preserve the identity of the selected object. No perpetual drifting. Offer reduced motion and keyboard/tap routes. Current prototype timing is exploratory; do not treat it as a validated specification.

## Interaction

A reliable back route preserves draft and context. Sending is explicit. The recipient and channel remain visible. Image annotations have an author and a text alternative. Joined participants appear inside a sharing boundary only after acceptance. Agreement is recorded separately.

## Scaling

Home must support stable user choices and an accessible route to all conversations. Investigate hundreds of chats instead of assuming a few beautiful branches are enough. Do not silently reorder relationships to create a more attractive diagram.

## Evaluation

Ask: what does this curve help someone do? Does the motion clarify the destination? Can the person reverse it? Who sees the content? Does it still work with large text, a keyboard open and reduced motion?

## V2 progression

The original V2 palette adapted the website’s blue family, including blue text. This is now a historical direction. All five current V2 screens and previews follow the approved palette above. The five screens remain a concrete baseline for invites, profiles, trust and membership; the current inline study advances coordination and local action. See [the evolutionary mapping](EVOLUTION_FROM_ANATOMY.md) and [visual progression](../studies/concept-progression.html).

## Evidence and attribution

[Source, implementation-evidence and asset register](SOURCES.md). Project proposals and dated critiques are original interpretations; external facts, validation methods and visual provenance are distinguished in the register.
