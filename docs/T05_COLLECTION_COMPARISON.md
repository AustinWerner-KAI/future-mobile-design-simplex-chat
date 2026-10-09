# T05 supplement — find, act, return

9 October 2026. Prepared comparison surface; no participant results. [Open the focused trial](../studies/collection-comparison.html). This supplements [T05_PROTOCOL](T05_PROTOCOL.md), not replaces its audience, identity or discovery tasks. T05 remains open.

## Brief and question

Private messaging; prospective SimpleX users using their own phones and usual text/accessibility settings. Compare the same eight fictional connections in grid, list and rail. Primary question: which form helps someone find a relationship and recover their draft and place? This is mobile web, not a native integration. Risk: a pretty form can conceal a slower search or lost orientation.

The new surface joins the collection home and Maya album in a single phone-sized workspace. No generated interfaces, real transport, storage, analytics or automatic recording are added. Photos are labelled illustrated placeholders; reply drafts are intentionally unsent. A pause retains the page session; reload starts a fresh trial. Browser history is not modelled here: on-screen Back is the tested return route. Background eviction remains a separate limitation.

## Method

Use the six orders G/L/R, G/R/L, L/G/R, L/R/G, R/G/L, R/L/G across six to nine participants. Use Start fresh trial between forms; its label explicitly says it clears drafts. Reload also starts fresh. A layout query (`?layout=grid`, `list`, `rail`) selects the initial form. Everyone sees identical names/order/content. Recent activity also offers the same connections; record if participants use it rather than favourites. After Pause, select the next layout and choose Start fresh trial; Resume only resumes the original layout.

The explicit consent covers trying the fictional page. Ask separate consent for recording/notes and stop on request. No recording starts from the page. Use anonymous IDs, not names or contact details. Tell people nothing about the octopus before tasks. After repeat trials, report learning/order effects; repeated tasks can become easier through familiarity.

## Read aloud

1. “Find Alex and tell me what kind of connection Alex is.”
2. “Go back. Find Maya and start a reply saying ‘I will check with Family.’ Keep it unsent.”
3. “Look at Maya’s third photo, then go back to the reply you were writing.”
4. “Return to your connections, then go back to that reply.”

Ask afterwards: “What stayed the same, and what changed?” Then ask which layout they preferred and why. Do not suggest where to look, how to scroll, what should be retained or which form is expected to win.

## Observation sheet — copy once per form

- Anonymous session ID and order:
- Form, device/browser, usual text setting and assistive input:
- Alex: found independently / hint / not found; route and wrong turns:
- Maya draft: entered exact text; any assistance:
- Third photo: reached independently / hint / not reached:
- Return to composer: actual draft text, focus and interpretation:
- Home return: scroll/rail position and original connection focus:
- Reopen Maya: draft present / missing; reading position:
- Hesitations, accidental actions and facilitator hints:
- Optional app interruption: survived / evicted / unclear:
- Preference and explanation verbatim:

If timings are collected, use a separately consented recording or facilitator stopwatch and record the method. Do not treat browser automation durations as participant performance. No session export or persistence is implemented on this supplementary page; keep consented notes separately. Do not publish identifiable raw notes.

## Subtle octopus tells, human purpose

The relationship remains the coordinating centre; the album extends locally from its source; its dismissal restores the exact conversation and reply. A restrained, short movement marks entering a relationship and respects reduced motion. Form changes belong to a person's choice of trial, not an automatic rearrangement of their people. Recognisable names, typed entities, explicit controls and stable order do the functional work.

## Octopus check

- **Flow rules:** Retain useful state; Return coherently.
- **From SimpleX:** a home can rearrange existing previews; the task opens one conversation, not multiple live chats. This is a browser simulation, not a core implementation.
- **From the analogy:** an extension remains attached to its coordinating source; withdrawing it recovers the same context. No literal anatomy.
- **Rule test:** what survives back/cancellation, and is position/draft still clear? `scripts/check-collection-comparison.cjs` exercises draft, scroll, rail position, focus and album return. The connected trial is absent from the pre-change build, so these checks fail there; this does not demonstrate superiority over the original lab.
- **Research:** `RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md` §9.1 F8/F11, §10.2 step 2; `RESEARCH_NOTES/CHAT_SCROLLING.md` §6; collection lab audit §17.
- **Drop/revise if:** participants miss Maya more often, cannot recover the draft/place, mistake a placeholder for a real photograph, or keyboard/screen-reader users cannot enter and exit the album.

## Evidence boundary

Runtime browser checks are recorded in [collection-comparison-check.json](collection-comparison-check.json). They cover defined navigation and state, not native keyboard, VoiceOver/TalkBack, actual touch reach, participant comprehension or cryptographic guarantees. This is a research-support page, not V2.1.2.4 and not Study A/the programmable frame. The latest interface remains V2.1.2.3.

## Agent browser walkthrough — 9 October 2026

[Execution, two findings and fixes](COLLECTION_COMPARISON_REVIEW.md). Photo navigation now retains control focus; explicit fresh-trial reset replaces the reload-only instruction. [49-check record](collection-comparison-check.json). This does not complete participant testing.
