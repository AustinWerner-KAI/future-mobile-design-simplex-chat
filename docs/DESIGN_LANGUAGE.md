# Design language

## Intention

Organised, clean to the eye, generous with space and capable of adapting. Design has no ego: content and human intent take priority over a signature shape.

## Form

Use a continuous surface with a stable, named origin. The selected region expands into its workspace. Organic geometry should indicate an action or state; ordinary content can keep regular edges where that improves readability. Do not force eight controls or use a literal octopus as navigation.

## Palette

Warm white `#F6F4EC` for space, deep petrol `#153C34` for primary text/actions, soft sage `#E4EADD` for the active surface. Secondary text `#4F655C`. Test actual contrast at rendered sizes. Provide a coherent dark appearance in the product prototype.

## Typography

The project presentation uses an editorial serif for the thinking and readable sans serif for practical detail. The product needs compact, legible labels, scalable text and an unambiguous hierarchy. The editorial website and mobile UI need not use identical typography.

## Movement

Gather → reach → open → settle. Movement should explain the transition and preserve the identity of the selected object. No perpetual drifting. Offer reduced motion and keyboard/tap routes. Current prototype timing is exploratory; do not treat it as a validated specification.

## Interaction

A reliable back route preserves draft and context. Sending is explicit. The recipient and channel remain visible. Image annotations have an author and a text alternative. Joined participants appear inside a sharing boundary only after acceptance. Agreement is recorded separately.

## Scaling

Home must support stable user choices and an accessible route to all conversations. Investigate hundreds of chats instead of assuming a few beautiful branches are enough. Do not silently reorder relationships to create a more attractive diagram.

## Evaluation

Ask: what does this curve help someone do? Does the motion clarify the destination? Can the person reverse it? Who sees the content? Does it still work with large text, a keyboard open and reduced motion?

## V2 / SimpleX-aligned colour treatment

Observed on the current website: deep blue `#023789`, action gradient values `#001AA7` to `#0095E7`, pale-blue `#E8F3FF` / `#C0E2FF` and white. V2 uses dark blue for legible text and actions, pale blue for open surfaces and cyan for a boundary edge. These are observed website values adapted to UI roles, not an official native-app token specification. Proposed dark tokens are in `prototypes/src/menu-simplex.css` and `v2.css`. Preserve the original petrol/sage direction for comparison.
