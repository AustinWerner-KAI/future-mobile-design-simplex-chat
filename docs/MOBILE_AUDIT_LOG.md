# Mobile audit log

One running record of mobile audits on the latest candidate. Add new audits at the top and keep older entries unchanged. Dated audits elsewhere in `docs/` remain as they were.

Method: the Kings of Mobile Design framework. Evidence level: agent-operated headless Chromium. No physical device, screen reader or participant was used. Sizes are CSS pixels, not iOS points or Android dp.

## 3. Flow, state and colour semantics — 5 October 2026

**Scope:** a scripted walkthrough of the V2.1.2.1 candidate plus T11 at 390 × 844. Steps: Maya reply and draft, return home, search to Family, proposal, resume home, browser Back, Coast Journal, Harbour Café chat and email send, invitation accept, quiet mode. Each step was judged against the six flow rules and framework sections 2, 3 and 5. Evidence level: browser simulation.

**Passed:**

- Drafts survive leaving and returning, and the home row shows "Draft".
- The return label names where you came from ("← Search results"), and the search text is kept.
- Focus moves to the relationship heading on open and to the composer after send.
- Browser Back from home leaves the study cleanly.
- Publications have no composer.
- Quiet mode hides previews but keeps an opened relationship readable.

| ID | Severity | Finding | Evidence | Proposed fix |
|---|---|---|---|---|
| F1 | P2 | Oat is used for the status bar ("Send simulated. No external delivery.") on every screen, including private chats. Oat is meant to mark external email only. | `.feedback{background:#eee3d2}`. The bar shows on Maya's chat after a send. | Use the neutral white or subtle blue for feedback, with a ruled top line. Keep oat for email surfaces only. |
| F2 | P2 | Your outgoing messages render below the local tool cards, not under the message they answer. In Maya, "See you then" sits below the Saturday lunch card. In Harbour Café, the email reply sits below the picker and the Return buttons. The conversation reads out of order. | Captures 03 and 08 in this audit. | Render the message log directly after the source message, and the tool or community cards after it. Act locally, but keep chronology intact. |
| F3 | P2 | An email reply shows only "You · simulated action". It doesn't say it went by email, to whom, or what state it's in. The earlier email study modelled queued, unknown and accepted states, but V2.1 drops them. | Harbour Café → Email → send: the log shows "We will take it / You · simulated action". | Label it "Email to bookings@example.com · accepted by server in simulation · delivery unconfirmed". That reuses the EMAIL_EVOLUTION state model without new storage. |
| F4 | P3 | The unread badge stays after you open and reply to a chat. Maya still shows "1 unread". | The home row after replying to Maya. | Decide the rule. SIMPLEX_RESEARCH warns that expansion shouldn't fake a read acknowledgement. Either clear the badge on reply, or show "Seen here, not acknowledged". Owner decision. |
| F5 | P3 | An accepted invitation goes nowhere. The dialog says "Accepted in simulation", but no new relationship appears and there's no next step. The coherent return breaks at the end of the connection flow. | 7 entities before and after acceptance. | Ties to T06 and T08. Don't fake a contact; offer "Back to your connections" with the accepted state stated. Defer to T08. |

**Owner decision (5 October 2026):** fix F1 to F4. F5 is deferred to T08.

#### Fixes applied

- **F1:** the status bar is now white with a ruled top line. Oat appears only on email surfaces.
- **F2:** your messages now render directly after the source message, with tools and community cards below them. In Harbour Café email, replies sit under the email and above the picker.
- **F3:** an email reply now reads "Email to bookings@example.com · accepted by server in simulation · delivery unconfirmed". Chat replies keep "You · simulated action".
- **F4:** sending a reply clears that relationship's unread count. Opening alone does not, so viewing is not treated as acknowledgement.
- **Checks:** five new assertions in `scripts/check-email-recipient.cjs`, now 36 in total, all passing. The full suite gives the same results as before. A full rescan found no target, contrast, overflow or blue-text issues.

**Not covered:** gallery pages, `v21-options.html`, desktop recomposition, and participants (T05).

## 1. Whole candidate, V2.1.2.1 plus T11 — 5 October 2026

**Scope:** `v21.html?mobile=1&version=2.1.2.1` on branch `t11-email-recipient-choice`. It covers home, search empty state, the favourites and invitation dialogs, Maya, Family, Coast Journal and Harbour Café with every tab, and the open email picker. Viewports: 390 × 844, 320 × 640, 844 × 390 landscape and 200% page zoom.

**Passed:**

- Visible controls are at least 44 px in every scanned state.
- No horizontal overflow at 320 px, in landscape or at 200% zoom.
- No visible text falls below 4.5:1 contrast. No blue lettering was found.
- Every control has an accessible name. Tiles announce name and type, for example "Maya Individual".
- Tab order on home is logical: New connection, search, Edit favourites, then the favourites and recent activity.
- One h2 per screen.

| ID | Severity | Finding | Evidence | Proposed fix |
|---|---|---|---|---|
| M1 | Withdrawn | First reported as 10 px status text (badges, timestamps, type labels). That was wrong. A later refinement block in `style.css` already sets them to 12 px. The finding came from the raw declarations, not the computed sizes. In computed text, only the T11 tiles' type labels sat below 12 px, at 11 px. | Computed-style scan: only "Individual"/"Group" in the T11 tiles at 11 px. | **Fixed 5 October 2026:** the tile labels are now 12 px, matching the rest of the app. |
| M2 | P2 | Every font size is in px, so a person's browser text-size setting has no effect. Only page zoom scales text. That under-represents enlarged text, which T05 must test. | Setting the root font size to 200% changed nothing; 200% page zoom reflowed without overflow. Of 64 font-size declarations, 63 are px and one is em. | Move the type scale to rem in one pass, then re-check every layout. This is a separate, larger change, so it needs agreement first. |
| M3 | P2 | In landscape the composer and header leave 174 px for the conversation, about 45% of a 390 px height. The always-visible audience line in the dock costs a row. | 844 × 390: head 66 px, dock 105 px, scroll area 174 px on Maya, Family and Harbour Café. | In short viewports, fold the dock audience line into the composer placeholder, for example "Reply to Maya · private". The audience stays stated at the point of action. |
| M4 | P3 | T11 tiles say "Person", but home and every other surface say "Individual". The same entity has two names. | Accessibility snapshot: home "Maya Individual", T11 picker "Maya Person". | **Fixed 5 October 2026.** The tiles now say "Individual". The T11 check and a full rescan pass. |
| M5 | Context | Reloading clears an unsent draft. | Typed a Maya draft, reloaded, and the draft was empty. | Intended (RAM only). Keep it under T10; don't add storage without a retention decision. |

**Owner decision (5 October 2026):** fix M4 now. M2 and M3 stay open; each needs a separate agreement before changing shared styles. M1 was withdrawn after a re-check.

**Not covered:** native keyboard, safe areas on real hardware, VoiceOver and TalkBack, reduced-motion review beyond the CSS guard, and participants (T05).

**Sources:** [Apple HIG — Typography](https://developer.apple.com/design/human-interface-guidelines/typography) · [Material 3 type scale tokens](https://m3.material.io/styles/typography/type-scale-tokens).

## 2. T11 email handoff — 5 October 2026

Agent-measured in headless Chromium at 390 × 844, 320 × 640, 844 × 390 landscape and 200% root text. It covers the T11 picker and review only. No device, screen reader or participant was involved.

| ID | Severity | Finding | Evidence | Proposed fix |
|---|---|---|---|---|
| A1 | P1 | In landscape, Review moves focus to the Share button. The text and audience being shared scroll out of view above it. You could confirm without seeing what goes where. | 844 × 390: scroll area is 173 px tall; only the Share, Change and Cancel buttons are visible. | Scroll the review heading to the top first, then focus Share without scrolling. |
| A2 | P2 | On opening, the picker pushes Review sharing and its hint below the fold. The reason it's disabled ("Choose who receives it.") can't be seen. | 390 × 844: the button sits at 976 px, but the visible area ends at 690 px. The four-row list with legend and note is about 290 px tall. | Show the chats as a compact 2 × 2 set of identity tiles (marks, name and type). Show the full audience only for the chosen one and in review. That reuses the home's identity system, so "who" stays the organising cue. |
| A3 | P3 | Arrow keys in the radio group change the chosen chat immediately. | Arrow Down from Maya chose Family. | Keep it. This is standard radio behaviour, and the review step still guards the share. Note it for screen-reader testing in T05. |
| A4 | Context | The email card scrolls off-screen during review, so the source isn't visible. | The source sits above the visible area after picking. | Keep it. The review quotes the exact text. Revisit if T05 shows people lose the source. |

Passed:

- Every target is at least 44 px tall; recipient rows are 52 px.
- The 3 px focus ring is visible.
- Tab order is logical, and the radio group is one tab stop.
- There is no horizontal overflow or clipping at 320 px, in landscape or at 200% text.
- Contrast: muted text on the blue selection is 5.77:1, muted text on white is 6.7:1, and the panel border is 3.96:1.

#### Fixes applied (owner approved A1 and A2)

- **A1:** Review now scrolls only the panel so the review heading sits under the tabs, then focuses Share without scrolling. In landscape (844 × 390) the heading and quoted text show first. The audience line needs one short scroll because the composer takes most of the height. The app header no longer shifts: an earlier version of this fix scrolled the whole page and was corrected.
- **A2:** The chats are now a 2 × 2 set of identity tiles using the home's marks and type badges, labelled "Individual" or "Group" (see M4). The full audience appears in the hint once a chat is chosen, and again in review. Opening the tool scrolls it to the top so the active task gets the room. The source email stays one scroll above. At 390 × 844, Review sharing went from 976 px (off-screen) to 516 px (on-screen).
- The radios stay native but visually hidden. Each tile is the tap target, and the focus ring sits on the tile.
- After the fixes: 31 T11 checks pass. The full suite rerun gives the same results as before this change.

#### Framework notes

- **Evidence level:** browser simulation. Target sizes are CSS pixels, not iOS points or Android dp. Native sizing remains unverified.
- **State model:** this covers empty, preparing, chosen, reviewing, shared, duplicate (conflict) and cancelled. Offline, failure and permission states don't apply, because the share is a local simulation with no transport. A real build must add a queued or uncertain state before any retry (see [EMAIL_EVOLUTION](EMAIL_EVOLUTION.md)).
- **Interruption:** leaving and returning keeps the preparation, the chosen chat and the email reply. Reload clears them (RAM only, T10).
- **Concept test:**
  - *SimpleX foundations:* contextual identity and per-chat audiences, so review names the profile and the members.
  - *Octopus flow:* local action beside the source, plus a deliberate crossing.
  - *What changes for the person:* they choose where an email detail lands instead of it going to a fixed chat.
  - *What would make us abandon it:* T05 participants misreading the audience, or picking the wrong tile more often than with a plain list.
