# T11 — General email handoff

5 October 2026. Prototype milestone in the shared V2.1 runtime. Browser simulation only; no participant, device, mailbox or protocol evidence.

## What changed

The email detail no longer goes to a fixed chat. Before, baseline pages always sent it to Maya and the community scenario always sent it to Family. Now the person chooses who receives it.

1. Open a provider's **Email** tab, then **Bring a detail to a chat**.
2. Edit the private detail. It starts as the email body.
3. Choose a chat under **Bring to**: Maya, Family, Alex or Book club. Each tile shows the identity mark, name and type (Individual or Group). Once a chat is chosen, the hint states its audience; groups list their sample members.
4. **Review sharing** shows the exact text, the chat, its audience and the identity used (`as Austin`).
5. **Share with {chat} · simulation**, **Change text or chat**, or **Cancel · share nothing**.

## Decisions and why

| Decision | Reason | Trade-off |
|---|---|---|
| No recipient is preselected | Deliberate crossing. [EMAIL_EVOLUTION](EMAIL_EVOLUTION.md) already said a real picker "must require deliberate recipient/profile selection". | One extra tap. The disabled Review button explains itself ("Choose who receives it."), so it doesn't repeat F02. |
| Only people and groups are offered | Publications are read-only here. Providers are another external context, so a provider-to-provider crossing is a separate question. | Shown in one note so the person isn't left guessing. |
| Review names the identity | [SIMPLEX_RESEARCH](SIMPLEX_RESEARCH.md): identity is contextual, so audience includes *who you appear as*. | The fixture has one profile. Real profile switching stays under T08. |
| Duplicate guard is per chat | The same text can't go to the same chat twice. It can go to a different chat after a separate review. | Not backend idempotency. Changing the text makes a new snapshot. |
| Cancel discards the preparation | It gives a clear way out that shares nothing. **Change text or chat** keeps the edit. | Someone who wanted to keep the text must choose Change instead of Cancel. Worth watching in T05. |
| Preparation and choice are kept per provider | Retained context. Leaving and returning keeps the detail, the chosen chat and the separate email reply. | RAM only. Reload clears it (T10). |

Colour: oat marks only the external email itself. The detail you prepare is yours, not email, so the picker and review sit on the white canvas in their own panel below the oat card. The review keeps the clay accent line for a deliberate crossing. The first T11 build had the picker inside the oat card, which turned it into a large oat field. That was rejected on 5 October 2026.

Fixture correction: Book club's security pane used to show Family's members. Groups now carry their own sample members (Book club: you, Alex and Priya). All names are fictional.

## Octopus flow check

- **Coordinate:** the provider relationship stays the anchor. The picker sits inside its email.
- **Act locally:** preparation, choice and review unfold beside the source email.
- **Cross deliberately:** you choose the chat, see its audience and share only after an explicit step.
- **Return coherently:** focus moves to **Open {chat}**, and the source email and reply draft stay intact.

## Evidence

- `scripts/check-email-recipient.cjs` → [email-recipient-check.json](email-recipient-check.json): 36 checks at 390 × 844 (31 for T11, plus 5 from the flow audit), with overflow checks at 320 and 390. Captures are in `studies/t11-captures/`.
- Earlier V2.1 scripts that click the email review were updated to choose a chat first: `check-v21`, `check-v21-fixes`, `check-community-journey`, `check-community-ux-fixes` and `capture-v2121-interface`. On 5 October 2026 every `scripts/check-*.cjs` was rerun in a scratch copy. All passed except `check-companion-walkthrough` and `check-contributor-route`, which failed identically on the unmodified `main` before this change. Their historical JSON records and captures were not regenerated or overwritten.
- The [V2.1.2.1 gallery](../v2121.html) state 11 shows the pre-T11 fixed-Family review. It is kept as the published V2.1.2.1 record.

## Limits

- No human comprehension evidence. It's unknown whether people notice the audience line or confuse Cancel with Change. Add this to the T05 tasks.
- No screen reader, native keyboard or enlarged-text testing.
- No real delivery, mailbox, contacts or SimpleX identity.
- With many chats, four tiles won't scale. It will need search or recent-first ordering, tested against misselection.

## Mobile audit

The audit and its fixes are recorded in the running [mobile audit log](MOBILE_AUDIT_LOG.md#2-t11-email-handoff--5-october-2026).
