# Colour that explains the interface

4 October 2026. Research and application for the front-end mobile study. [Current nine designs](../experience.html) · [Inline alternative](../unfold.html)

## Recommendation for this project

Use Chalk as the light expression, Charcoal as the dark expression and Moss as a comparison. The inline experiment also offers distinctly different Plum (deep purple/peach), Citrus (chartreuse/forest) and Petal (pink/raspberry), selectable from the mobile Colour control. Keep reading surfaces quiet, concentrate the warm accent on an available action, and distinguish public channels with labelled publication shapes and a secondary material. Blue is no longer the current direction. This is a design choice for this product, not a scientifically “best” hue or a universal colour-psychology claim.

## What primary guidance supports

Google’s Material guidance separates surface, accent and semantic roles, pairs foreground/background roles, and advises assigning stronger colour to important actions rather than every component. This supports a coherent token system, not importing the marketing website’s blue into every mobile surface. [Android Developers: M3 theming](https://developer.android.com/codelabs/m3-design-theming).

Meaning must remain available through text or shape when colour cannot be distinguished. Thus “Private” versus “Channel · public,” circular versus publication marks, and explicit audience labels carry the distinction. Moss is not evidence that a channel is secure. [W3C: use of colour](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html).

Normal text needs at least 4.5:1 contrast under the relevant WCAG criterion; qualifying large text uses 3:1. We target 4.5:1 for all the measured text pairs, including secondary copy and placeholders. [W3C: text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

Visual information necessary to identify an active control or its state needs 3:1 against adjacent colours under the relevant non-text criterion. Focus and field boundaries need their own checks; body-text contrast alone is insufficient. Disabled controls have different requirements, but must still communicate their unavailable state. [W3C: non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

## Token roles

| Role | Chalk | Charcoal | Moss |
|---|---|---|---|
| Reading field | Warm paper `#F3EEE3` | Warm neutral `#20211F` | Deep moss `#25342B` |
| Primary text | Ink `#252B24` | Chalk `#F6F1E7` | Chalk `#F6F2E7` |
| Action | Clay `#8D3E2B` | Ember `#F2AC8E` | Sand `#EAC69D` |
| Public channel material | Pale moss / dark leaf | Dark leaf / light leaf | Earth / light sand |
| State | Written status and explicit controls | Same semantics | Same semantics |

All private entries retain the quiet reading field. Channel colour indicates content type, not encryption quality. Errors need explicit failure text and recovery; verification remains a distinct cryptographic state that this prototype cannot establish. Do not reuse action colour as a reassuring “verified” signal.

## What we measured

Run `node scripts/check-colour.cjs` with Playwright available. The check reads resolved CSS tokens from both generated pages across the three baseline and six inline palettes and measures 90 foreground/background pairs. It covers body/secondary/placeholder/action/channel text and essential field/focus pairs. The result is recorded in [colour-contrast.json](colour-contrast.json).

This is a token-pair check, not a full rendered accessibility audit. It does not cover every disclosure surface, photograph, disabled opacity, animation frame, device display, colour-vision condition or native component. Full WCAG conformance is not claimed. Large text, forced colours, sunlight/low-light readability and physical-device appearance remain evaluation tasks.

## Channel research changes the meaning of colour

SimpleX’s v6.5 announcement introduced channels as a beta; its current privacy documentation labels public channels experimental. Public channel content is visible to relays, while participation privacy has its own model. A unified menu must preserve that difference from private messaging. [Official announcement](https://simplex.chat/blog/20260430-simplex-channels-v6-5-consortium-crowdfunding-freedom-of-speech.html), [current privacy documentation](https://github.com/simplex-chat/simplex-chat/blob/stable/PRIVACY.md).

The sample channels here are public publications with comments off. These are fictional configurations, not complete implementations of the channel protocol. Private replies and public posting must never share an ambiguous composer.
