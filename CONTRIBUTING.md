# Contributing

> **Latest edit — [V2.1.2.2: identity, discovery and the shape scale](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/blob/main/docs/V2_1_2_2.md). Start here.** [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.2) · [V2.1.2.1 mockup gallery](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2121.html) (14 states, 4 October 2026). Published 5 October 2026: profiles and incognito, public channel discovery, email handoff to a chosen chat, one shape scale and a running mobile audit. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

**[Next iteration: three priorities and how to contribute →](docs/NEXT_STEPS.md)**


**[Supporting inline experiment: walkthrough and audit →](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/studies/current-design-walkthrough.html)**


**Contributor tasks: [HTML contributor walkthrough](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/studies/contributor-walkthrough.html).** Ready for participants; 15–20 minutes, six tasks, no coding needed. Human results are not yet collected.

Before proposing a direction, read [the design memory](docs/DESIGN_MEMORY.md): the octopus’s different evolutionary path is the central analogy for an experience growing from SimpleX’s network and chat foundations. Explain the behavioural consequence of your proposal, not just its visual style.

You do not need to code to participate. Start with one concrete interaction and explain what changes for the person using it.

## Start with the right version

Follow [the design progression](studies/concept-progression.html), read [the shared brief](docs/DESIGN_BRIEF.md), then review [the current V2 designs](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2.html). [Current uploads](docs/CURRENT_UPLOADS.md) maps every study to its source and status. V2 is the current review and contribution reference. Inline and nine-context studies are supporting experiments; older combined/path studies are historical comparisons.

## A first contribution without designing a screen

Try the [short contributor walkthrough](docs/CONTRIBUTOR_WALKTHROUGH.md): can you explain the journey, find the current design and locate an editable source without help? Report one concrete point of confusion using [the finding form](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/issues/new?template=usability-finding.yml). Public submissions should omit personal details.

## Ways to help

- **Design:** a sketch, wireframe, motion study, alternative flow or component specification.
- **Research:** a task-based observation with consent, anonymised findings and a clear account of what was tested.
- **Accessibility:** keyboard, screen-reader, large-text, reduced-motion and one-handed-use observations.
- **Engineering:** a small working interaction or a feasibility note that explains constraints.
- **Privacy:** an audience or channel-boundary critique tied to a specific step.

## Build on the central idea

Our thesis is that simplex.chat can explore its own design journey, just as the octopus suggests an alternative way to solve familiar functional problems. Develop, challenge or replace a proposed behaviour; explain what follows from the communication model and what improves for the person. Compare the [list menu](prototypes/menu-list.html) with the [coordinated paths](prototypes/continuous-demo.html). A contribution need not look like an octopus to advance the idea. Read [the thinking](docs/THINKING.md) before treating a board as a specification.

## A useful proposal

Include the problem, the person and task, a before/after flow, the octopus analogy if it helps, accessible alternatives, privacy implications and a way to evaluate the change. Attach visuals or link a working prototype. State what is hypothetical and what you actually observed.

A polished image alone is not enough evidence to replace an interaction. Early sketches are welcome.

## A useful critique

Name the state, action and consequence. For example: “After opening Photo, my text draft disappeared when I returned to Write.” Include viewport, browser, input method and reproduction steps where relevant.

## Submit changes

1. Open a [scoped design proposal](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/issues/new?template=design-proposal.yml), report a [finding](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/issues/new?template=usability-finding.yml), or join an [existing challenge](docs/CHALLENGES.md).
2. Fork the repository and work on a branch.
3. Keep one problem per pull request. Link the issue and include before/after evidence.
4. Edit `prototypes/src/unfold.html` for the supporting inline prototype. For V2, use `prototypes/src/v2.css`, `v2.js`, `v2-screens.json` and the chat-menu sources listed in [Current uploads](docs/CURRENT_UPLOADS.md). The historical combined prototype uses `prototypes/src/octopus-continuous.html`. If submitting a separate experiment, use a descriptive folder under `prototypes/experiments/` with its own README and runnable preview.
5. Do not silently diverge source and preview. Explain your export process; rebuild the reference preview with `node scripts/build-demo.mjs`. Standalone experiments may use ordinary HTML/CSS/JavaScript.
6. Include validation appropriate to the change, without claiming user testing or accessibility compliance you have not performed.

No build, framework migration or dependency additions are required to contribute a design.

## Review criteria

Does it improve the task? Can people discover and reverse it? Does it preserve drafts and context? Is the audience clear? Does it work with reduced motion and large text? Can it scale beyond a few contacts? Is the effect worth its complexity?

Maintainers should record accepted and rejected directions in `docs/DECISIONS.md`, with the evidence and unresolved questions. Rejected directions remain useful research history.

## Attribution and rights

Identify what you created and list sources, assets and licences. Concept boards in `visuals/` were AI-generated; two preserved prompts are provided; exact prompts for the earlier seven boards are unavailable. Do not imply they are manufactured products or finished engineering specifications.

Original code contributions use MIT; original design and documentation contributions use CC BY 4.0 with attribution. See LICENSING.md for scope and third-party exclusions. No CLA or transfer of ownership is requested.

## Cite the basis for your work

Use [SOURCES.md](docs/SOURCES.md) to distinguish sourced facts, original ideas and test evidence. Cite factual claims beside the text; identify assets, licences and changes. Retain test methods and outputs when practical. Mark missing records explicitly rather than reconstructing evidence.
