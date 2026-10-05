# Mobile audit log

One running record of mobile audits on the latest candidate. Add new audits at the top and keep older entries unchanged. Dated audits elsewhere in `docs/` remain as they were.

Method: the Kings of Mobile Design framework. Evidence level: agent-operated headless Chromium. No physical device, screen reader or participant was used. Sizes are CSS pixels, not iOS points or Android dp.

## 7. T08 identity study — 5 October 2026

Target: `studies/identity.html` and `docs/IDENTITY_MODEL.md`, a static design study for profiles, hidden profiles and incognito. Measured in headless Chromium at 390 × 844, 320 × 700, 1440 × 900 and 200% root text; judged against the framework and the identity rule from E1. Self-audit before showing the owner.

**Passed:** every target 44 px or more; no text under 12 px; no blue words; no clipped phone body or sideways overflow at any size, including 200% text.

| # | Area | Finding | Outcome |
|---|---|---|---|
| G1 | Integrity | The "Switched to Work" line named Maya, a contact of the other profile. A profile switch must not leak another profile's contacts. | Reworded: "Austin's drafts and search are kept for when you switch back." |
| G2 | Clarity | The acceptance line carried three sentences, including the verification warning that frame 8 states in full. | Cut to two: who accepted and what they see. Verification stays on the connection page. |
| G3 | Consistency | The New connection close button sat at the top left; the runtime dialog puts it at the right. | Moved to the right. |
| G4 | Large text | Owner found "Conversati on", "Propos al" and "Securi ty" in frame 8 on a narrow phone. The shared study stylesheet had `overflow-wrap:anywhere` on the body, fixed-width strip tiles and tabs laid out as grids, so the check mark also dropped onto its own line. The same stylesheet broke "Comment", "Forward" and "reactions" in the T19 study, and its "All" tab was 39 px wide. | Body uses `break-word`; tabs and switch segments are flex with `white-space:nowrap`, 44 px minimum width, and wrap as a row; strip tiles have a minimum and maximum width with hyphenation. New `scripts/check-studies.cjs` runs 60 checks on both studies at 320 and 390 wide with 16, 24 and 32 px text: words whole, targets 44 px, text 12 px or more, no clipping, no overflow. It fails on the pre-fix files. |

### Shape pass (same day, owner asked for a critique of the shapes)

Method: computed `border-radius` inventory of every element in the study phones, plus the four frames at 390 wide. Owner approved all fixes.

| # | Area | Finding | Outcome |
|---|---|---|---|
| S1 | Shape | Nine radii with no scale: 50%, 999, 22, 18, 14, 12, 8, 6 and 4 px. Tabs 14, the Active chip 999, buttons 22, cards and inputs 14, composer 12, focus ring 8. | Three shapes plus the entity marks. Circle for people and round controls; pill for every tappable action and selected state (buttons, tabs, chips); 12 px for every container (cards, inputs, composer, pending, focus ring). The sheet is 16 px over 12 px cards. Inventory after: 50%, 999, 16 (sheet), 12, 6 (publication mark), 4 (checkbox). |
| S2 | Regression | The G4 selector `.strip span` also matched the avatar spans, so favourites rendered as 72 × 38 ovals. | `.strip > span`. Circles restored. |
| S3 | Cue | Group and provider marks were both 12 px rounded squares, told apart by tint alone (green-grey vs oat). Colour was the only cue. | The runtime's type badges (people cluster, page, storefront) drawn on the marks as CSS pseudo-elements, as in the runtime. Providers get their own class. |
| S4 | Cue | Your profile mark and a contact's mark were both letter circles; a 2 px vs 1 px ring was the only difference, beside a third 44 px circle (+). | The self mark and the profile-sheet marks are filled with the blue identity material. "You" is the only filled circle on the screen. |
| S5 | Crossing | 3 px clay rule, no radius, same on every frame. | Kept. |
| S6 | Nesting | Phone 28, sheet 18, cards 14 did not step evenly. | Sheet 16 over cards 12. |

`check-studies.cjs` now asserts that every radius in a study phone belongs to the scale (70 checks).

**Owner decision (5 October 2026):** the home shows the profile mark only, no name in the header. E1 holds without exception. The study and model are updated; the risk moves to T05: can people tell which profile they are in from the mark alone?

**Not covered:** screen readers, native text scaling, physical devices, participants. Whether an incognito name can change later, or be detected, is unverified and is a maintainer question.

## 6. Information architecture — 5 October 2026

Structural audit of the V2.1.2.1 runtime after T11 and T19: site map, navigation model, content hierarchy, flows, naming, reuse, growth and URLs. Full document: [INFORMATION_ARCHITECTURE](INFORMATION_ARCHITECTURE.md). Evidence level: code inspection and browser simulation.

| # | Area | Finding | Outcome |
|---|---|---|---|
| IA1 | Naming | "Channel" in the home door and search button; "Publication" on every row since D2. | Open. Proposed rule: channel is what you find, Publication is what it becomes. |
| IA2 | Naming | Three names for the home: "Back to your world", "Back to your connections", "Your connections". | Open. |
| IA3 | Naming | Two search placeholders across candidates. | Open. |
| IA4 | Naming | "Chat" and "conversation" both name a thread. | Open. |
| IA5 | Return | A publication opened from the directory returned to the home, not the directory. | **Fixed.** Return strip says "← Public directory"; Back goes there with the search kept. Four new assertions; the full suite still passes. |
| IA6 | URL | `#directory` is bookmarkable while the model calls the directory a task. | Open. Documented as a task with a URL for testing. |

Passed: no primary navigation (by thesis); three taps to the deepest action; one material for every crossing; the dock reserved for the composer.

## 5. T19 in the runtime — 5 October 2026

Self-audit of the T19 build in `v21.html?mobile=1&version=2.1.2.1` before opening the PR. Method: the T19 check script (54 assertions), the full suite in a scratch copy, and captures of the five journey screens at 390 × 844.

| # | Area | Finding | Outcome |
|---|---|---|---|
| R1 | Large text | Two corner buttons (★ and ⋯) on publications broke "Coast Journal" mid-word at 320 px with 24 px text. Caught by `check-large-text`. | Publications have one corner button. ⋯ opens a panel with favourite and Leave. |
| R2 | Return | After joining, the home restored its previous scroll and the new row sat off screen. | The home scrolls to the top after a join and focuses the new row. Checked by assertion. |
| R3 | Placement | The unfolded preview pushed Join below the fold at 390 × 844 (the A2 pattern). | The opened row is revealed so the name and Join are both on screen. Checked by assertion. |

**Passed:** every visible control at least 44 px at 320 and 390; no horizontal overflow; no page errors; no identity in the channel header; the comment crossing sits inside its post; pending requests cannot be sent twice; the offline state keeps the search.

**Not covered:** screen readers, native text scaling, physical devices, participants. Forwarding a post is not built.

## 4. T19 channel discovery study — 5 October 2026

Target: `studies/channel-discovery.html` and `docs/CHANNEL_DISCOVERY_MODEL.md`, a static design study, not the runtime. Measured in headless Chromium at 390 × 844 with a script in the scratchpad; design judgement against the framework and the thesis. Owner approved all ten fixes.

### Findings

| # | Area | Finding | Fix applied |
|---|---|---|---|
| C1 | Integrity | Frame 1 showed "1,240 subscribers" before anything left the phone. A link carries name and description; a count needs a relay. Contradicted the study's own lookup rule. | Card shows "from Maya's link" plus description. A note says Preview fetches details from the relays. Counts appear in frame 2. |
| C2 | Integrity | Frame 4's toast said "Back to Maya", but that journey started in search. | Return goes to the search with its query kept. The toast now says "you're back in your search". |
| C3 | Integrity | Frame 4 mixed results and the joined toast with no preview between, so the crossing differed by path. | Frame 4 is results only, with a note that a row opens the frame 2 preview. New frame 5 holds the return. |
| C4 | State | No offline, loading, empty, already-subscribed, admin-review or name-not-found states. | Frame 5 shows request sent, name not found and directory unavailable. The model gains a "States that must exist" table including loading, already subscribed and duplicate. |
| C5 | Touch | All buttons 40 px tall; identity switch 23 px; tabs 26 px; back button 40 px. | Buttons, switch halves, tabs and back button are 44 px minimum. Rows 48 px minimum. |
| C6 | Reading | 17 text runs at 11.5 px or 11.2 px, under the 12 px floor set in M1. | Smallest size is now 12 px (25 runs); most body text 13 px. |
| C7 | Input | Selected tab and identity choice were shown by blue fill only. | Check mark and bold on the selected tab and identity. |
| C8 | Clarity | "Join as Austin" plus a toggle also reading Austin. | One control: "Join as" with Austin or Incognito, the chosen one checked. |
| C9 | Copy | "Public name · looks like a name". | "Public name · not yet looked up". |
| C10 | Copy | Four preview bullets, two about relays. | Three bullets. "The owner's relays carry the posts and can read them" carries the hosting signal. |

### After the fixes

- Smallest tap target 44 px; smallest text 12 px; no blue text; no horizontal overflow at 390 or 1440; no clipped phone body at either width. Phone frames grew from 610 to 690 px to fit frame 5.
- Kept: the preview beside the message, explicit taps for name lookup and directory search, no Explore tab.

### Framework notes

- **Evidence level:** code inspection and browser rendering of a static study. No runtime, device, screen reader or participant. Sizes are CSS pixels.
- **State model:** the study now shows not-yet-fetched, loading (described), already subscribed (described), pending review, not found, offline and the return. Duplicate prevention is stated, not built.
- **Open question for maintainers:** does opening a channel link contact relays before the person taps anything? The design assumes not. If native prefetches, C1's note is wrong and the honest line changes.
- **Concept test:** *SimpleX foundations:* relays can read channel content, subscribers are hidden, identity is per connection. *Octopus flow:* preview as local action, join as a deliberate crossing, return to the originating search or chat. *What changes:* discovery stays inside relationships and search rather than a browse tab. *Abandon if:* T05 participants look for Explore, join without noticing the identity, or confuse a public group with a private one.

### Second pass on the revised study (same day)

Re-audited after C1 to C10. Method as above, plus computed contrast, 320 × 700 and 200% root text. Owner approved D1, D2, D4 and D5; D3 and D6 stay open.

**Passed:** muted text 6.1:1 or better; primary button 6.9:1 on clay; no blue words; 320 px with no overflow or clipping; check marks render; 12 px floor holds; all targets 44 px or more.

| # | Area | Finding | Outcome |
|---|---|---|---|
| D1 | Integrity | Frame 5 combined contradictory states: "Directory unavailable" beside a channel just joined from the directory, and a lookup for "#coastjournal" after frame 3 looked up "#coast". | Split. Frame 5 is the return alone. Frame 6 shows the three failure outcomes, each captioned with the search that caused it and a line saying they would not appear at once. |
| D2 | Integrity | Directory rows said "Public channel"; the home row said "Publication". Same fault as M4. | One vocabulary: "Publication · public · 1,240 subscribers", "Group · public · 85 members". The directory header says "Public publications and groups". |
| D3 | Unverified | Frame 1 shows a description "from Maya's link". Not confirmed that SimpleX channel links carry a description. | Open. If links carry only an address, the card is name only, or "Channel link", until preview. Maintainer question added to the model. |
| D4 | Large text | At 200% root text every phone body clipped (315 to 721 px hidden) and the page overflowed sideways. Fixed phone heights with overflow hidden. | Phones use min-height and grow with content; grid columns and long links can wrap. At 200% there is now no clipping and no overflow. |
| D5 | Labels | Screen-reader labels on frames 3 and 4 described the pre-fix frames ("a public name match", "the return after joining"). | Rewritten to match the frames. |
| D6 | State | The loading state (Join unavailable while details fetch) is described in the model but not drawn. | Open. Draw it when T19 is built in the runtime, where it can be tested. |

**Still untested:** screen readers, native text scaling, physical devices, participants. The study is static: its buttons are not controls, so focus order and keyboard use are not meaningful here and will be checked in the runtime build.

### Third pass on the full journey (same day)

After the owner scoped the journey end to end (home door, directory, preview, channel page, return), re-audited against the framework's placement, physical sizing, legibility and "one defining moment" rules. Owner approved E1 to E5 and logged E6.

**Passed:** blue materials behind text are solid (12.5:1 ink, 6.1:1 muted); stacked buttons 8 px apart; the home door sits after the connections, mid to low screen; the preview unfolds beside its row; visual expression stays on the crossings.

| # | Area | Finding | Outcome |
|---|---|---|---|
| E1 | Integrity | "Reading as Austin" in the channel header and "joined just now as Austin" on the home row named an identity while reading. Owners can't see subscribers and readers can't see each other, so this implied a visibility that doesn't exist. | Identity is named only in the comment crossing. The channel page says "you are not visible while reading". |
| E2 | Placement | The comment crossing sat at the bottom of the page, apart from the post it concerned, and both posts still offered Comment. | The crossing unfolds under the tapped post, whose Comment is marked. |
| E3 | Clarity | The dock said Leave was in ⋯, but no ⋯ was drawn. | ⋯ drawn in the header beside the favourite star: a rare action at the top edge. |
| E4 | Vocabulary | "1,240 readers" on the channel page; "subscribers" everywhere else. | Subscribers throughout. |
| E5 | Touch | Tabs 4 px apart; identity switch halves touching. | Tabs 8 px apart. The switch keeps its segmented shape with a 2 px divider. |
| E6 | Physical size | Back and + are 44 px in the top corners. The framework's physical rule asks 11 to 12 mm for corners; 44 px is about 7 to 8 mm on a modern phone. | Logged, not changed. This is the runtime's shared header. Decide after T05, when participants show whether corner reach is a problem. |

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

#### M2 and M3 fixed (5 October 2026, on the owner's go-ahead to continue)

- **M2:** all 61 px font sizes are now rem. At the default 16 px setting the layout is pixel-identical to `main`: 15 screen and width combinations (390, 320 and 1440 wide), compared with the composer placeholder masked. An earlier comparison against a stale build missed that a large-text rule also hid the header subtitle at normal size. It was caught before pushing and the breakpoint corrected. Raising the browser text size exposed real breakage that px had been hiding: names split mid-word ("Ma ya", "Harbo ur"), round buttons grew past touch size, and on a 320 × 640 screen the conversation shrank to 16 px. Fixes:
  - Words break only when they must.
  - Round buttons are clamped to 44 to 56 px.
  - The header title is capped by screen width.
  - Email addresses can wrap.
  - The short-screen rules now use em, so they also apply when text is large.
- **M3:** in short viewports the dock audience line is hidden, and the audience moves into the composer placeholder: "Reply to Maya · private", "Email reply to bookings@example.com". The screen-reader label still names the recipient, and every sharing review restates the full audience. The landscape conversation area grew from 174 px to 196 px.
- **Evidence:** `scripts/check-large-text.cjs` → [large-text-check.json](large-text-check.json). It runs 154 checks using Chromium's real default-font-size setting at 16, 24 and 32 px, at 320 and 390 wide, across five screens, plus landscape. The same script fails on the pre-fix build (body text did not scale). The full suite gives the same results as before, and the rescan is clean.
- **Limits:** browser text settings are not iOS Dynamic Type or Android font scale. Placeholder text truncates at 200%; the screen-reader label still names the recipient. No physical device or screen reader was used.

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
