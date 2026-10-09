# T05 — Real-phone comparison: protocol

5 October 2026. Prepared, not run. This is the plan for the first participant study of the V2.1 candidates. Nothing in this document is evidence; it becomes evidence when sessions are recorded in [T05_SESSIONS.md](T05_SESSIONS.md). [Facilitator page](../studies/t05-session.html).

## What we want to learn

Every design decision since T04 is a hypothesis with a stated abandonment condition. T05 tests the ones that only people can answer:

| Question | Hypothesis under test | Abandon if |
|---|---|---|
| Q1 Which home helps people find a relationship fastest? | The rail (V2.1.2.1) beats the grid (V2.1.1) and collections (V2.1.3) for finding someone | People take longer or miss more often on the rail |
| Q2 Do people understand the audience before they share? | The review step (T11) makes the audience and identity understood | People misname who will see the shared detail, or as whom |
| Q3 Do people notice a channel is public, and which identity they joined as? | The three facts and the identity control (T19) are read | People say "private" or cannot name the identity after joining |
| Q4 Do people look for an Explore tab? | One door after Recent activity is enough | People search the top of the screen or ask where to browse |
| Q5 Do mid-screen tools get missed? | Local tools unfolding beside content are found | People look for actions at the bottom edge or in the header first |
| Q6 Does context survive an interruption? | Drafts and place are recovered after leaving the page | People lose a draft or cannot say where they were |
| Q7 Does the interface hold at large text? | The rem scale (M2) keeps everything usable | Words break, controls overlap, or people zoom out to cope |
| Q8 Are corner targets a problem one-handed? | 44 px back and + are reachable | People shift grip, use two hands, or miss (E6) |

## Participants

- 6 to 9 people, recruited for variety of phone size and hand size, not for SimpleX knowledge. At least two who use their phone one-handed by habit and at least two who use enlarged text day to day.
- No one who has seen the prototypes or this repository.
- Their own phone where possible, in the default browser. Record make, model, screen size and system text size.

## Set-up

- Open `v21.html?mobile=1&version=X` for each home (X = 2.1.1, 2.1.2.1, 2.1.3). Reload between tasks that need a clean state; state is RAM only.
- Counterbalance home order with a Latin square across participants: ABC, BCA, CAB.
- Screen recording of the phone only. No camera on faces. Facilitator notes grip and reach by observation.
- Consent: one paragraph, read aloud, agreed verbally and ticked on the facilitator page. No names in the record; participants are P1 to P9.

## Tasks

Each task has a script read aloud, a success condition, and probe questions asked after the task, not during. Think-aloud is invited but not required.

| # | Script | Success | Probes | Questions served |
|---|---|---|---|---|
| T-A | "Find Alex and send a reply saying you'll look at the sketches." | Reply appears in Alex's conversation | None | Q1, Q5 |
| T-B | "Harbour Café has emailed about a table. Pass the time of the table on to your Book club." | Detail shared with Book club, nothing else sent | "Who can see what you just sent?" "What name did it go out under?" "Did Maya or the café get anything?" | Q2, Q5 |
| T-C | "Find something public about tides and follow it." | Tide Tables joined, person back on the home | "Is that public or private?" "Who can see that you follow it?" "What name did you join as?" | Q3, Q4 |
| T-D | "Start replying to Maya, then lock your phone / switch to another app for a moment and come back." | Draft present, same conversation open | "Where are you now?" "Is your reply still there?" | Q6 |
| T-E | Set system text to the largest size. Repeat T-A. | As T-A | "Anything hard to read or tap?" | Q7 |
| T-F | "Go back to the message you were writing to Maya." | Maya open with the T-D draft | None | Q6 |

T-A runs on all three homes. T-B to T-F run on the rail (V2.1.2.1) only, since T11 and T19 exist there. The home comparison is Q1; the rest is about the flow.

## What to record, per task

- Outcome: success, success with one hint, fail. A hint is any facilitator intervention.
- Time from the end of the script to success, from the recording.
- Hesitations and wrong taps, with where the person looked first.
- Probe answers verbatim.
- Grip: one hand, cradle, two hands, and any change during the task.

After all tasks: "Which home would you want, and why?" verbatim.

## Analysis

- Count outcomes per task per home. With 6 to 9 people this is a pattern, not a statistic. Report counts, never percentages.
- Any probe answer that names the wrong audience, identity or visibility is a finding against the hypothesis, however many people got it right.
- For each hypothesis, write one line: held, failed, or unclear, with the sessions that decide it.
- Findings go into [MOBILE_AUDIT_LOG](MOBILE_AUDIT_LOG.md) as a new section with the evidence level "participant study, n = N". Fixes follow the usual owner decision.

## Limits of this protocol

- A browser page is not the native app: no real keyboard behaviour on some phones, no native text scaling on iOS (page text size depends on browser settings), no push, no real relays. T-E tests the browser's text size, which is the closest available.
- Fictional content and a four-item directory. People may behave differently with their own contacts and a real listing.
- The facilitator knows the design. Read the scripts as written and do not explain the interface before or during a task.

## Collection comparison supplement — 9 October 2026

[Focused connected trial](../studies/collection-comparison.html) · [Protocol supplement and observation sheet](T05_COLLECTION_COMPARISON.md). Compares grid/list/rail with identical people and a find → unsent draft → third photo → return task. Use all six form orders across sessions; keep this form comparison separate from the original runtime/version comparison. No participant results exist. No recording starts automatically.
