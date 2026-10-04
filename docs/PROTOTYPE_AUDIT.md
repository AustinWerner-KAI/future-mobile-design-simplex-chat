# Prototype audit — from anatomy to interface

> **Latest edit — [V2.1.2.1: complete interface mockup](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2121.html). Start here.** [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.1). Published 4 October 2026: 14 interface states and the community-test refinements. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

> Current reference, 4 October 2026: [shared design brief](DESIGN_BRIEF.md) · [evolution rationale](EVOLUTION_FROM_ANATOMY.md) · [visual progression](../studies/concept-progression.html). Dated audits and earlier palette proposals below remain iteration evidence.

2026-10-03 · Review of the combined study against the initiator’s screenshot, the anatomy board and the project’s design principles. This is a heuristic and implementation review, not participant research or Jony Ive’s opinion.

## The central finding

The previous prototype demonstrated several useful actions, but its composition did not carry the central idea. A padded container grew indefinitely, rounded list rows stood in for flexible arms, and a large conventional reply form dominated the active surface. The illustration promised continuity and coordinated local action; the prototype needed to make those relationships visible.

## Findings and decisions

| Priority | Finding | Revision 02 |
|---|---|---|
| High | Content-box sizing added padding outside declared widths. The textarea and flow inputs could reach beyond their parent and be clipped. | Apply border-box sizing throughout the combined study; keep inputs inside the thread’s shared inset. |
| High | Fixed heights and later content-height overrides made the phone grow as tools opened. | Bound the device; retain the identity header; scroll the active arm’s content within it. |
| High | Home was a vertical stack with ornamental radii. | Arrange distinct paths around a visible You centre. Connecting lines express coordination, rather than decorate unrelated cards. |
| Medium | The home preview repeated the source message in the open conversation. | Suppress that preview while the Maya conversation is active. Show the sender and source message once. |
| Medium | An oversized composer competed with the message and tools. | Use a compact, aligned reply field, with a clear audience and explicit Send action. Tools unfold below a shared divider. |
| Medium | The website described a working study without showing its real appearance. | Add paired screenshots of the actual revised home and open conversation. Keep the visual boards identified as earlier concept explorations. |
| Medium | Contained photos could introduce empty margins, making a reply point appear detached from the image. | Preserve the displayed image’s own aspect ratio. Scroll tall images inside the arm instead of letterboxing them inside a differently proportioned target. |

## Anatomy translated into behaviour

**Centre → coordination.** You is the organising reference; relationships and activities have visible paths to it. This is a navigational hypothesis, not a claim that an octopus has a human social model.

**Arm → continuity.** Maya’s home object enlarges into the active surface, holds the draft and returns to its place. The device remains bounded as content changes.

**Local contact → tools.** Photo actions appear within the conversation; a reply point belongs to the displayed image. Actions require explicit sending.

**Boundary → audience.** A private reply identifies its audience. A plan invitation shows included material and keeps joining separate from agreeing to the date.

**Quiet return → retained context.** Closing preserves the in-memory draft. Full reload restoration remains unfinished.

## What is still weak

The new home uses a small set of fixed sample paths. It needs a searchable, accessible model for hundreds of relationships, zoomed text and varying label lengths. Secondary activities still reuse the Maya surface as their expansion origin; they should unfold from their own touched object. The visible centre currently explains organisation and has no interaction. Coordinated motion, one-handed reach, keyboard appearance and assistive-technology navigation need further work.

This revision improves the composition but does not yet establish a compelling replacement for the standard messaging model. Its strongest proposition is the continuity of relationship, tool and context. Community contributors should challenge the spatial navigation and compare it with a simple searchable list using actual task evidence.

Email is an explicitly labelled speculative scenario. Audience boundaries, invitations, delivery and confirmation are local simulations. No protocol implementation, security guarantee or validated founder roadmap is implied.

## Verification and comparison

Browser checks at 360, 390 and 1440 pixels covered surface bounds, composer alignment, draft return, selected-photo send and point reply, invitation acceptance, separate date confirmation and email composition. Actual screenshots were inspected. These checks are not a full accessibility audit or participant usability test.

- [Previous combined study](../prototypes/continuous-v1.html)
- [Revised combined study](../prototypes/continuous-demo.html)
- [Home screenshot](../visuals/previews/combined.png)
- [Open-arm screenshot](../visuals/previews/combined-conversation.png)

Next study: find Maya, reply, attach a photo, invite someone to a plan and return. Compare task success, mistaken audience assumptions and navigation effort with the original home. Record observations before making claims about better usability.

## Evidence and attribution

[Source, implementation-evidence and asset register](SOURCES.md). Project proposals and dated critiques are original interpretations; external facts, validation methods and visual provenance are distinguished in the register.
