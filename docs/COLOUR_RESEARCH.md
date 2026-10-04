# Colour that explains the interface

4 October 2026. Research and application for the front-end mobile study. [Current nine designs](../experience.html) · [Inline alternative](../unfold.html)

## Recommendation for this project

Use Chalk as the light expression, Charcoal as the dark expression and Moss as a comparison. The inline experiment also offers distinctly different Citrus (chartreuse/forest) and Petal (pink/raspberry), selectable from the mobile Colour control. Keep reading surfaces quiet, concentrate the warm accent on an available action, and distinguish public channels with labelled publication shapes and a secondary material. Subtle blue material cues support familiarity in the current light direction; lettering stays neutral. This is a design choice for this product, not a scientifically “best” hue or a universal colour-psychology claim.

## What primary guidance supports

Google’s Material guidance separates surface, accent and semantic roles, pairs foreground/background roles, and advises assigning stronger colour to important actions rather than every component. This supports a coherent token system, not importing the marketing website’s blue into every mobile surface. [Android Developers: M3 theming](https://developer.android.com/codelabs/m3-design-theming).

Meaning must remain available through text or shape when colour cannot be distinguished. Thus “Private” versus “Channel · public,” circular versus publication marks, and explicit audience labels carry the distinction. Moss is not evidence that a channel is secure. [W3C: use of colour](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html).

Normal text needs at least 4.5:1 contrast under the relevant WCAG criterion; qualifying large text uses 3:1. We target 4.5:1 for all the measured text pairs, including secondary copy and placeholders. [W3C: text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

Visual information necessary to identify an active control or its state needs 3:1 against adjacent colours under the relevant non-text criterion. Focus and field boundaries need their own checks; body-text contrast alone is insufficient. Disabled controls have different requirements, but must still communicate their unavailable state. [W3C: non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

## Token roles

| Role | Chalk | Charcoal | Moss |
|---|---|---|---|
| Reading field | White `#FFFFFF` | Warm neutral `#20211F` | Deep moss `#25342B` |
| Primary text | Ink `#252B24` | Chalk `#F6F1E7` | Chalk `#F6F2E7` |
| Action | Clay `#8D3E2B` | Ember `#F2AC8E` | Sand `#EAC69D` |
| Public channel material | Pale moss / dark leaf | Dark leaf / light leaf | Earth / light sand |
| State | Written status and explicit controls | Same semantics | Same semantics |

All private entries retain the quiet reading field. Channel colour indicates content type, not encryption quality. Errors need explicit failure text and recovery; verification remains a distinct cryptographic state that this prototype cannot establish. Do not reuse action colour as a reassuring “verified” signal.

## What we measured

Run `node scripts/check-colour.cjs` with Playwright available. The check reads resolved CSS tokens from both generated pages across the three baseline and five inline palettes and measures 100 foreground/background pairs. It covers body/secondary/placeholder/action/channel text and essential field/focus pairs. The result is recorded in [colour-contrast.json](colour-contrast.json).

This is a token-pair check, not a full rendered accessibility audit. It does not cover every disclosure surface, photograph, disabled opacity, animation frame, device display, colour-vision condition or native component. Full WCAG conformance is not claimed. Large text, forced colours, sunlight/low-light readability and physical-device appearance remain evaluation tasks.

## Channel research changes the meaning of colour

SimpleX’s v6.5 announcement introduced channels as a beta; its current privacy documentation labels public channels experimental. Public channel content is visible to relays, while participation privacy has its own model. A unified menu must preserve that difference from private messaging. [Official announcement](https://simplex.chat/blog/20260430-simplex-channels-v6-5-consortium-crowdfunding-freedom-of-speech.html), [current privacy documentation](https://github.com/simplex-chat/simplex-chat/blob/stable/PRIVACY.md).

The sample channels here are public publications with comments off. These are fictional configurations, not complete implementations of the channel protocol. Private replies and public posting must never share an ambiguous composer.

## Rejected direction: Plum

The initiator rejected Plum on 4 October 2026. Its broad purple surface gave the reading context an intrusive identity without adding meaningful hierarchy. It is removed from the current choices; the email storyboard returns to Chalk. Earlier imagery and the proposal remain in Git history, not as a recommendation. Novelty alone is insufficient evidence for a palette.

## Service tones: one reading system

Current recommendation: Chalk for the light reading study, Charcoal for the dark alternative. Keep the canvas and primary reading hierarchy neutral. Private messages use white (`#FFFFFF`), public channels use a pale blue surface (`#E7EFF5`), and email uses pale oat (`#EEE3D2`). Service labels, identity shapes and recipient information still carry meaning. The dark version uses closely related charcoal, sage-grey and brown-grey surfaces.

Citrus, Petal and Moss remain comparison candidates, not claims of superior reading comfort. A palette cannot be called universally best for eyes. Text/background luminance contrast is a stronger supported basis for legibility than assigning a special benefit to a hue. Match the display to the user and environment, and test brightness, text size and preference on real devices. [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

The service text/preview pairs are now measured separately, bringing the sampled pair count to 100. This does not measure visual fatigue or establish an eye-health benefit.

## White canvas refinement

Following the initiator’s suggestion, the light study now uses a white canvas and white private-message surfaces. Pale blue channels and oat email retain their subtle service tones. Pale colour occupies the relevant service surface rather than colouring the entire reading field. Charcoal remains the dark alternative. This is a visual refinement to test, not a universal claim about eye comfort.

## Familiarity refinement — subtle blue materials

The current light study introduces pale blue channel surfaces (`#E7EFF5`), ice-blue private identity fills (`#F0F5F9`) and a powder-blue selected filter (`#DCE9F3`). The canvas and private reading surfaces remain white; external email remains oat. Text, links, labels and symbols remain neutral ink. These materials supersede sage in the current Chalk direction. The choice follows the initiator's preference for familiarity and neutral lettering; it does not establish medical harm from blue words. Contrast measurements cover the updated service tokens.
