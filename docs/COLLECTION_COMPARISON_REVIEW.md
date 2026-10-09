# Connected collection comparison — browser walkthrough and fixes

9 October 2026. Agent-operated walkthrough of the live GitHub Pages trial at revision `f9ca3b7`. All content was fictional. No participant, physical phone, native keyboard or screen reader was used. No screen recording was made. Later automated checks and static previews are distinct from this walkthrough.

## Task execution

The operator used browser UI controls, followed visible labels and inspected the accessibility tree after task transitions. Grid, list and rail were started in separate page sessions. Consent was checked only for the fictional agent trial, not on behalf of a human participant.

| Form | Execution | Observed result |
|---|---|---|
| Grid | Find Alex; back; open Maya; enter `I will check with Family.`; open album; Next twice; back to conversation; home; reopen Maya | Alex labelled Individual. Album reached `Café terrace`, Photo 3 of 4. Exact draft remained after both return steps. |
| List | Repeat the same sequence after reloading and choosing List | Exact draft remained when Maya reopened. The album returned to its conversation. |
| Rail | Choose Rail; use Next favourites; find Alex; repeat Maya draft/third-photo/home/reopen sequence | Alex opened and the draft remained after the full sequence. No preference or speed advantage was measured. |
| Paused grid | Pause; choose List; press Resume | Page blocked changing form and told the operator to reload. No fresh-trial action existed. |

No human task timings, preference rankings, reach estimates or comprehension results were collected. UI success in an agent walkthrough is not T05 evidence from participants.

## Findings

### CC1 — photo navigation resets focus

Observed: after pressing Next photo, the focused accessibility element was `Back to Maya’s conversation`. The next photo was displayed correctly, but each Next action rebuilt the viewer and focused its Back button.

Implication: a keyboard user must repeatedly traverse the album controls to continue. This is a design judgement from observed focus behaviour, not a screen-reader finding.

Fix: keep focus on the invoked photo control; at a boundary where that control becomes disabled, use the other enabled photo control. Closing still restores the album trigger. The new assertion `grid: photo focus stays on Next` failed on the pre-fix build before the implementation changed.

### CC2 — no direct fresh-trial transition

Observed: after pausing and selecting a new layout, Resume displayed a reload instruction. State protection worked, but the page offered no direct way to start the next layout.

Implication: a facilitator may have to explain browser reload and reselection between trials, adding overhead unrelated to the form comparison.

Fix: after the first trial, setup offers **Start fresh trial · clears drafts**. It explicitly resets draft, photo index, reading position, home/rail scroll and return context, and starts the selected layout. Resume continues to preserve the current trial; it never silently changes layout.

## Verification and scope

[49 scripted checks](collection-comparison-check.json) cover all three forms, focus on repeated photo navigation, exact draft retention, original connection focus, home/rail position, pause/resume, explicit fresh-trial layout and draft reset, consent, document fit and JavaScript errors. The script is [check-collection-comparison.cjs](../scripts/check-collection-comparison.cjs).

Static generated browser previews are in `studies/collection-comparison-captures/`. They illustrate the surface; they are not recordings or participant evidence. The participant supplement remains [T05_COLLECTION_COMPARISON](T05_COLLECTION_COMPARISON.md). T05 is still open, and V2.1.2.3 remains the latest app candidate.

On-screen Back is the tested return route in this supplementary prototype; browser history is not modelled. Native keyboards, device background eviction, VoiceOver/TalkBack and actual one-handed reach remain untested. The rail is a controlled form condition with the same fixtures as the grid and list, not a frozen reproduction of the V2.1.2.3 runtime.

## Octopus check

- **Flow rules served:** Retain useful state; Return coherently.
- **From SimpleX:** a single open conversation and deliberate local state. No new core capability is claimed.
- **From the analogy:** movement within the local extension retains a usable point of contact; return recovers its source. Recognisable labels and keyboard access serve humans.
- **The test:** what survives supported transitions, and is the return point clear? Repeated Next retains focus; fresh-trial reset is explicit and Resume retains the draft. Checks fail on the pre-fix build.
- **Research:** `INTERFACES_THAT_ARRIVE.md` §9.1 F8/F11, §10.2 step 2; `CHAT_SCROLLING.md` §6; collection audit §17.
- **What would reverse the choices:** participant evidence shows photo-control focus is disorienting, or the fresh-trial action causes unintended loss/confusion. Record such evidence under T05 before changing the rule.
