# T08 — Profiles, hidden profiles and incognito

5 October 2026. Prototype milestone in the shared V2.1 runtime, built from the [identity model](IDENTITY_MODEL.md) and the [nine-frame study](../studies/identity.html). Browser simulation only; no profile, password or connection is real.

## What was built

1. **Profile mark.** On the rail home (2.1.2.1 and 2.1.2) a filled circle at the top left carries the active profile's monogram and opens the profile sheet. No profile name in the header (owner decision). The mark is the only filled circle on the home; contacts' marks are outlined.
2. **Profile sheet.** A bottom sheet listing the visible profiles with connection and unread counts and an Active chip. Hidden profiles are not listed, counted or named. Three fixtures: Austin (the existing connections), Work (Priya, Studio team, Studio) and Personal (hidden; Jo).
3. **Switching.** Each profile keeps its own connections, favourites, search text, scroll, drafts, messages, tabs, proposals, directory state and reactions. Switching saves the current set and restores the target's; nothing crosses. The feedback line names no contact of the other profile.
4. **Unhiding.** Typing a hidden profile's full password into the home search shows one button, "Unhide Personal profile". A partial or wrong password shows only "No connections found". Unhiding lists the profile and switches to it.
5. **Incognito at connection.** The New connection dialog shows the generated name ("River Finch") before anything is created. Once the invitation exists the checkbox is disabled and the line says "Set when the invitation was created."
6. **Acceptance (closes F5).** Simulated acceptance adds Sam to the top of the connections, closes the dialog, scrolls the home to the top, focuses the row and says once who Sam sees you as. The row carries no identity.
7. **Composer line.** For an incognito contact the dock reads "Sam · private conversation · as River Finch" and the placeholder "Reply to Sam · private · as River Finch". The empty conversation shows a "Not verified" note stating what Sam sees and that profile edits are not sent to them.

Not built: the profile edit screen (study frame 9), per-profile notifications, deletion and export.

## Decisions and why

| Decision | Reason | Trade-off |
|---|---|---|
| Mark only, no name in the header | E1 holds without exception: identity is named only at the point of action. | T05 must show people can tell which profile they are in from a letter. |
| Sheet, not a screen | The profile list is a local tool over the home, not a destination; dismissal is the return. | A native sheet gesture is not simulated. |
| State swapped wholesale on switch | Guarantees nothing leaks between profiles without auditing every reference. | Switching re-renders the home; reading positions inside a connection are kept per profile but the open connection closes. |
| Unhide by search, no "wrong password" | Mirrors the native app and never confirms a hidden profile exists. | Discoverability rests on the sheet's note. |
| Acceptance fabricates one contact, Sam, unverified | F5 said a crossing must end somewhere visible. The contact is labelled "no messages yet" and "Not verified". | Still a simulation; nothing was exchanged. |

## Octopus flow check

- **Coordinate:** the profile decides whose connections fill the home. One mark, top left, rare.
- **Act locally:** the sheet opens over the home; unhiding uses the search field that is already there.
- **Retain context:** every profile keeps its search, scroll, drafts and tool state across switches.
- **Cross deliberately:** the incognito name is shown before the invitation is created, then frozen.
- **Return coherently:** closing the sheet returns to the same home; acceptance returns to the home with the new row on screen and focused.

## Evidence

- `scripts/check-identity.cjs`: 35 checks at 390 × 844, plus the sheet at 320 wide with 32 px text, covering the mark and its spoken label, the sheet, isolation in both directions including the invitation, the directory's Join-as in a second profile, partial and full password, unhiding, the frozen choice, acceptance focus and feedback, and the composer line. The second-pass audit (J1–J6) is in the [audit log](MOBILE_AUDIT_LOG.md).
- Full suite in a scratch copy unchanged: large-text 154, v21 audit 23, T19 58, T11 36, community 18, UX fixes 13, v21 fixes 14, refinement 39, shapes 26, studies 70, options 22, gallery 18. The T19 check's 50 ms wait after Join was a race under load and now waits for the feedback line.
- Captures of the eight journey screens at 390 × 844 are kept with the owner (the connector cannot push PNGs).

## Limits

- Maintainer questions stand: whether an incognito name can change later and whether the contact can tell.
- No screen reader, native text scaling, physical device or participant. T05 decides whether a monogram alone is enough.
- 2.1.1 and 2.1.3 homes have no profile mark; the rail is the candidate.
