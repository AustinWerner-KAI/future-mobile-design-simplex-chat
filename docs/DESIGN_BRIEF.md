# From anatomy to interface — shared design brief

> **Latest edit — [V2.1.2.2: identity, discovery and the shape scale](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/blob/main/docs/V2_1_2_2.md). Start here.** [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.2) · [V2.1.2.1 mockup gallery](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2121.html) (14 states, 4 October 2026). Published 5 October 2026: profiles and incognito, public channel discovery, email handoff to a chosen chat, one shape scale and a running mobile audit. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

Updated 5 October 2026 for [V2.1.2.2](V2_1_2_2.md). Independent community exploration for [simplex.chat](https://simplex.chat/), maintained by AustinWerner-KAI. This document is the shared reference for the GitHub project, its public presentation website and its mobile interaction studies. It is not an official SimpleX brief, endorsement or roadmap.

## Flow architecture

**The octopus theory is the architecture of the flow. Human relationships organise the interface.** People and entities supply recognisable context; coordination, local action, adaptable space, retained state, deliberate sharing and coherent return govern movement through it. This applies to a grid or list without prescribing an octopus-shaped UI. It is an interaction architecture hypothesis, not a claim about SimpleX’s protocol implementation. [Read the flow rules and evaluation criteria](EVOLUTION_FROM_ANATOMY.md#the-octopus-theory-is-the-architecture-of-the-flow). V2 is the earlier review baseline; implementation gaps remain explicit.

## Project overview

Explore what messaging could become by 2028 when its interface grows from SimpleX’s different network and identity foundations. The mission is to help people act together without losing their place, draft or understanding of who can see what. The vision is a relationship that becomes a workspace when needed and settles back into a compact menu when the task is finished.

The octopus followed a different evolutionary path from humans. Our analogy is that SimpleX’s different foundations can lead to a different interface evolution from WhatsApp or Telegram. Evolution is not a ranking. Anatomy inspires behaviour: a coordinating surface, local actions, flexible expansion and deliberate visibility. It does not prescribe tentacles, eight destinations or an animal-shaped phone.

**Design has no ego. Space follows attention.** A familiar list can anchor a new experience; novelty must change the task, not merely its appearance. Our principles draw on interpretations of Jony Ive’s work, not his endorsement or attributed quotations.

### Objectives

- Keep private conversations, public channels and external email understandable in one menu.
- Let the active relationship unfold locally while retaining its source and surrounding context.
- Preserve private work through tool changes and make any crossing into shared space explicit.
- Communicate identity, audience and outcome without relying on colour alone.
- Share iterations and uncertainties so other designers and engineers can challenge and extend them.

Budget, production schedule and sponsorship are **not set**. This is a voluntary community study. Native implementation, backend services and provider costs require a separately agreed scope.

## Audience and strategy

Our primary audience hypothesis is people coordinating private conversations and small-group activities across messages, images and practical details. Secondary audiences are privacy-conscious SimpleX users, mobile designers and engineers evaluating how these interactions could fit the existing clients. These are working assumptions; no representative user research has been completed.

| Working persona | Situation | Design response to test |
|---|---|---|
| Everyday coordinator | Replies to Maya while arranging Saturday | Keep the reply draft independent of a proposed plan |
| Privacy-conscious participant | Moves between personal identity, groups and public reading | Show the actual profile and audience at the point of action |
| Person bridging email and chat | Receives a booking detail by external email | Carry only reviewed text into a private chat; retain the source |
| Community contributor | Wants to understand and improve the idea | Provide source files, decision history and a specific open question |

WhatsApp and Telegram provide familiar messaging conventions, but copying their interface is not our objective. Compare task effort, orientation and audience comprehension against both familiar messaging flows and our own V2 baseline. Do not claim superiority without evidence. The [SimpleX research](SIMPLEX_RESEARCH.md) and [project map](SIMPLEX_PROJECT_MAP.md) ground assumptions about the product; email integration remains speculative.

## Experience and information architecture

The website tells the story from anatomy to interface, exposes successive iterations and leads visitors to an interactive study and contribution path. It must explain why an idea changed, including rejected directions.

| Surface | Responsibility |
|---|---|
| Project homepage and history | Introduce the thesis, inspiration, sequence and open questions |
| V2 gallery and five baseline studies | Chats, QR connection, profiles, conversation trust and group membership |
| Nine-screen experience | Show connected task contexts and their spatial constraints |
| Inline relationship study | Combine private messages, channels and email; unfold local tools |
| Email storyboard | Show source, private preparation, exact sharing review and arrival |
| GitHub documentation | Preserve research, critique, design memory, build guidance and contribution challenges |

A private conversation can open reply, proposal, image and trust controls locally. Public channel content must remain visibly public. Email must retain external transport labels and From/To context; a unified menu must not imply it inherits SimpleX chat security. A recipient accepts an invitation before membership changes. Joining a group and agreeing to a plan are separate outcomes.

## Design guidelines

### Approved light direction

| Role | Colour | Use |
|---|---|---|
| Canvas / private reading | White `#FFFFFF` | Main mobile canvas and private-message surfaces |
| Primary ink | Neutral `#252B24` | Headings, names and body text |
| Channel surface | Pale blue `#E7EFF5` | Familiar but quiet public-channel material |
| Private identity fill | Ice blue `#F0F5F9` | Small avatar surfaces |
| Selected filter | Powder blue `#DCE9F3` | Selection background with neutral lettering |
| External email | Oat `#EEE3D2` | A distinct adjoining transport |
| Available action | Clay `#8D3E2B` | Deliberate commit, with warm-white text |

**Never write words in blue.** Blue belongs subtly in surfaces and small non-text cues. This is the initiator’s visual preference, not a medical claim. Charcoal remains a dark alternative, with light neutral text. Moss, Citrus and Petal remain comparison materials; Plum was rejected. Labels, identity shapes and boundaries supplement colour.

Use system/Avenir Next sans-serif for mobile content, approximately 14–16 CSS px body text with a clear hierarchy. Exhibition pages may use a restrained editorial serif. Support text enlargement; do not treat CSS pixels as native iOS points or Android dp. Avoid large decorative headers inside the phone, ornamental gradients, glow and blue typography.

White space separates meaning; the active task earns more surface. Keep controls reachable, labels concise and tool expansion attached to its origin. Honour reduced motion and retain a usable experience without animation. The [SVG visual guide](../visuals/design-direction.svg), [colour research](COLOUR_RESEARCH.md) and [design memory](DESIGN_MEMORY.md) form the shared visual reference. The guide is a direction board, not a final native screen specification.

## Technical specifications

The current build is a dependency-free static website using HTML, CSS and JavaScript, published through GitHub Pages. Edit `prototypes/src` and regenerate pages with `node scripts/build-demo.mjs`. V2 uses shared styles and screen data. Keep original code under MIT and original design material under CC BY 4.0 with attribution; third-party assets retain their own terms.

Content includes narrative text, diagrams, SVG, PNG screen previews and interactive browser studies. No video is required for this milestone. Use semantic headings, meaningful image descriptions, keyboard-operable controls, visible focus, reduced motion and responsive layouts. Content and links must remain readable in light and dark variants.

The prototypes use fictional people and in-memory state. They do not connect to a mailbox, deliver messages, authenticate profiles or cryptographically verify contacts. Reload clears state. The sample QR is a study marker, not a usable SimpleX invitation. Browser Back, explicit close and deep-link routes should preserve understandable context in studies that implement them.

Production integration would require maintainer review of the existing iOS/Android clients and network model. Scope includes native navigation, keyboard and safe areas, Dynamic Type/font scaling, assistive technologies, lifecycle restoration and actual profile/connection state. Email additionally needs purpose-bound provider permissions, refusal/revocation/reauthentication, independent accounts and drafts, truthful outbox status and provider reconciliation. Never silently forward source email, addresses or attachments into chat.

## Deliverables and validation

The community reference consists of this brief, the design memory, iteration history, visual guide, current V2 gallery, supporting inline prototype and email storyboard. Keep older thinking available while marking the current direction clearly.

First research milestone: compare opening Maya, preserving a reply, preparing a private object, reviewing its audience, cancelling or sharing deliberately and returning to the source. The email variant carries one editable detail across an explicit boundary. Test with long content, many relationships, small windows, enlarged text, reduced motion and assistive input.

Success must be assessed through comprehension, lost work, unintended sharing, recovery and effort—not whether the screen looks futuristic. Browser contrast/layout/interaction checks are useful implementation evidence, not proof of usability, native accessibility or protocol feasibility. No participant results exist yet.

## Invitation to build on the thinking

Choose one assumption, preserve its source and explain what you changed. Designers can propose alternative densities or disclosure patterns; researchers can test audience comprehension; engineers can map a component to a native client. Open an issue for a hypothesis or a pull request with rationale, before/after visuals and validation. See [contributor guidance](../CONTRIBUTING.md) and [open challenges](CHALLENGES.md).

The question for every contribution: **what comes from SimpleX’s foundations, what comes from the octopus analogy, what changes for the person, and what evidence could make us abandon it?**

## Evidence and attribution

[Source, implementation-evidence and asset register](SOURCES.md). Project proposals and dated critiques are original interpretations; external facts, validation methods and visual provenance are distinguished in the register.

## Rules added for V2.1.2.2 — 5 October 2026

These came out of the audits and now have checks behind them. [Design language](DESIGN_LANGUAGE.md) carries the detail.

- Identity is named only at the point of action: invitation, acceptance, comment crossing, composer. Never in a header or on a row.
- One shape scale: circle, pill, 12 px, 16 px, 6 px publication mark, 5 px type badge. Nothing else.
- Words stay whole at large text; every size in rem; round controls 44–56 px.
- A tile in a multi-column grid shows its edge or centres its content.
- Measure first, fix the shared stylesheet, add an assertion that fails on the pre-fix build. One running audit record: [MOBILE_AUDIT_LOG](MOBILE_AUDIT_LOG.md).
- Research before polish: [T05](T05_PROTOCOL.md) is ready and comes before further visual work.
