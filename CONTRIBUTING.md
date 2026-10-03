# Contributing

You do not need to code to participate. Start with one concrete interaction and explain what changes for the person using it.

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

1. Open a scoped issue or join an existing challenge.
2. Fork the repository and work on a branch.
3. Keep one problem per pull request. Link the issue and include before/after evidence.
4. Edit `prototypes/src/octopus-continuous.html` for the reference prototype. If submitting a separate experiment, use a descriptive folder under `prototypes/experiments/` with its own README and runnable preview.
5. Do not silently diverge source and preview. Explain your export process; rebuild the reference preview with `node scripts/build-demo.mjs`. Standalone experiments may use ordinary HTML/CSS/JavaScript.
6. Include validation appropriate to the change, without claiming user testing or accessibility compliance you have not performed.

No build, framework migration or dependency additions are required to contribute a design.

## Review criteria

Does it improve the task? Can people discover and reverse it? Does it preserve drafts and context? Is the audience clear? Does it work with reduced motion and large text? Can it scale beyond a few contacts? Is the effect worth its complexity?

Maintainers should record accepted and rejected directions in `docs/DECISIONS.md`, with the evidence and unresolved questions. Rejected directions remain useful research history.

## Attribution and rights

Identify what you created and list sources, assets and licences. Concept boards in `visuals/` were AI-generated; two preserved prompts are provided; exact prompts for the earlier seven boards are unavailable. Do not imply they are manufactured products or finished engineering specifications.

Original code contributions use MIT; original design and documentation contributions use CC BY 4.0 with attribution. See LICENSING.md for scope and third-party exclusions. No CLA or transfer of ownership is requested.
