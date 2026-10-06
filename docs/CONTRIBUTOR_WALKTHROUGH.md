# First contributor walkthrough

> **Latest edit — [V2.1.2.3: photos, email and a home at scale](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/blob/main/docs/V2_1_2_3.md). Start here.** [See the whole story](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/showcase.html) · [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.3). Published 6 October 2026: photo pins and photo tools, email threads and forwarding, a home for 100+ conversations with one opening motion, and the homepage audit. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

[Illustrated current-design tour and audit](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/studies/current-design-walkthrough.html) — use after first-discovery tasks to avoid leading participants.

[Open the participant walkthrough in HTML](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/studies/contributor-walkthrough.html). Editable page: [studies/contributor-walkthrough.html](../studies/contributor-walkthrough.html).

**Status: ready for participants. Human results: not yet collected.**

Prepared 4 October 2026. **Human sessions have not started.** The published-route check is an agent review, recorded separately in [contributor-pilot-check.json](contributor-pilot-check.json). This guide is ready for a small first round; it contains no participant findings.

## Decision we need to make

Can a designer unfamiliar with the project follow the design journey, identify the current V2 reference and make a useful first contribution without the maintainer explaining the repository?

If they cannot, revise the entry point, version labels or contribution route before adding more concepts. This round tests contributor orientation; it does not validate the messaging design or predict 2028 adoption.

## First round

Aim for three designers who have not worked on the project, ideally with differing GitHub familiarity and at least one using a phone. This is a practical pilot choice, not a statistically representative sample or a universal sufficient number. No participants are currently recruited, and no invitations have been sent. Scheduling and any compensation remain unset.

Allow approximately 15–20 minutes for this focused walkthrough. Let each person use their usual browser/device. Use fictional prototype content. Participation and recording are separate choices; notes are sufficient if they decline recording. Do not promise an incentive, storage arrangement or anonymity beyond what the organiser has actually arranged.

## Facilitator opening

“We’re checking whether this project explains itself to a new contributor. We’re testing the project, not you. Please say what you are looking for and what you expect to happen. You can skip a task or stop. I’ll take notes about the route; recording would need your separate agreement. Please don’t enter personal message content.”

Start at the [GitHub repository](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat). Do not explain the octopus thesis or point to the answer before the tasks. Keep the moderator checks below out of the participant’s view during the session.

## Tasks — give one at a time

1. **Understand the project:** “You’ve just found this project. Explain what it is trying to explore and who it belongs to.”
2. **Trace the journey:** “Find where the design thinking began and one later change. What prompted that change?”
3. **Identify the present:** “Find the experience the project is currently asking people to explore. How did you decide it was current?”
4. **Try continuity:** “Write an unsent reply to Maya, explore a tool in that relationship, then return to your words. Tell me what happened.” Do not send.
5. **Find the work:** “You want to work on the connection invitation. Find its latest visual and the file you would edit.”
6. **Choose a contribution:** “Find an unresolved question you could investigate. Show where you would propose your contribution.” Stop before submitting anything.

Between tasks ask only neutral prompts, such as “What are you looking for?” or “What makes you say that?” If help is needed, record it and give the minimum help required to continue. Avoid selling the concept or correcting their interpretation until the task ends.

## Moderator checks

- Task 1: independent speculative project, rather than official SimpleX work or a production app.
- Task 2: anatomy is the opening explanation, while actual creation order is preserved; different evolution informs behaviour rather than a literal eight-arm interface.
- Task 3: V2 gallery identified as the current reference; inline/unfolding and historical path studies identified as supporting material.
- Task 4: correct relationship, draft remains unsent and retained in page memory; no assumption of real delivery or reload persistence.
- Task 5: V2 Connect preview and its shared source/data located; generated output not mistaken for the only editable source.
- Task 6: scoped issue/proposal route, a stated problem and an evidence plan; no requirement to code.

These are interpretation checks, not a rigid script for where someone must click. A different route can succeed.

## Observation sheet — one per session

Participant code: ____ · Date: ____ · Device/browser: ____ · GitHub familiarity: ____
Consent to notes: ____ · Consent to recording, if requested: ____

| Task | Route/actions observed | Completed / partial / not completed / skipped | Help given | Exact quote, if recorded | Interpretation and confidence |
|---|---|---|---|---|---|
| 1 | Not collected | | | | |
| 2 | Not collected | | | | |
| 3 | Not collected | | | | |
| 4 | Not collected | | | | |
| 5 | Not collected | | | | |
| 6 | Not collected | | | | |

Keep observations separate from the moderator’s explanation. Record wrong-version choices, backtracking and uncertainty; do not turn unmeasured impressions into completion-time numbers. A participant may disagree with the concept while successfully understanding the project.

Closing prompts: “What was hardest to work out?” “What information would you need before making your first contribution?” Explain any simulation misconceptions after the tasks.

## Synthesis and next decision

After each session, record the observed issue, its consequence, supporting task/quote and a possible fix. After the round, compare patterns and exceptions. Repeated wrong-version choices justify revisiting hierarchy; one serious misunderstanding about audience or real sending deserves investigation even without repetition. Do not generalise percentages from this small convenience sample.

Publish an anonymised summary of the question, actual participants/method, observations, changes and remaining uncertainty. Obtain permission for attributed quotes. Keep personal details and raw recordings out of public GitHub issues. Until sessions happen, keep the results labelled **not collected**.

## Method and project references

The task-based observation, neutral instructions and think-aloud approach follow [GOV.UK guidance on moderated usability testing](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing). Our short duration and three-person pilot are project choices. [Current uploads](CURRENT_UPLOADS.md), [critique](CRITIQUE.md), [contribution guide](../CONTRIBUTING.md) and [source register](SOURCES.md) provide the reference answers and provenance.

The agent route check can be inspected in [check-contributor-route.cjs](../scripts/check-contributor-route.cjs). It requires Playwright and a browser path in `PLAYWRIGHT_MODULE` and `BROWSER_PATH`, like the other project browser checks. It does not replace human observations.

## Interactive V2.1 candidates — 4 October 2026

[Play and compare all three](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21-options.html), embedded or full screen. [Why grids: rationale, trade-offs and comparison tasks](WHY_GRIDS.md). Fictional, independent page sessions; no external sending. V2 is the earlier reference baseline.

## Small-community journey and live todo record

[Try the journey and session checklist](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/studies/community-journey.html) · [Project task checklist](NEXT_STEPS.md). T04 is a prototype milestone; real participant testing remains open.
