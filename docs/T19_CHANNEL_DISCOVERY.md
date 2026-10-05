# T19 — Public channel and group discovery

5 October 2026. Prototype milestone in the shared V2.1 runtime, built from the [channel discovery model](CHANNEL_DISCOVERY_MODEL.md) and the [nine-frame study](../studies/channel-discovery.html). Browser simulation only; no directory, relay, public name or SimpleX identity is contacted.

## What was built

1. **Home door.** After Recent activity, a section "Beyond your connections" with one button, "Find public channels and groups". Not a tab, not above people. In search, the same button appears under your own results, and a query starting with `#` offers "Look up #name" instead of looking it up as you type.
2. **Public directory.** A temporary task, not a destination: the return route says "← Your connections". A fixture listing of four public entries filters on the phone by name and description, with Active, New and All views. Rows read "Publication · public · 1,240 subscribers · active today" or "Group · public · 85 members · admin reviews new members". Rows already in your connections say so and offer Open.
3. **Preview.** Tapping a row unfolds "Before you join" inside that row. A 500 ms simulated fetch shows "Fetching details from the relays" with Join unavailable, then three facts, one identity choice (Austin or Incognito) and Join. "Not now" closes it and keeps the search and results.
4. **Join and request.** Joining a publication adds it to your connections and returns you to the home with the new row on screen and in focus. The feedback line says what was added and that the directory keeps your search. A group whose admin reviews members gets "Request to join": the row shows "Request sent", nothing is faked into your connections, and the row cannot be requested twice.
5. **Offline.** A dock control simulates the directory being unavailable: the listing is replaced by a plain line, the search is kept, and "Try again" is the only action.
6. **Channel page.** A reading note states subscribers, that relays can read posts, and that you are not visible while reading. No identity is named in the header. Posts carry reactions (local, toggled) and Comment, which unfolds a crossing inside that post naming who you will appear as. Comments are logged as public. No composer, so there is no private reply to the publisher. ⋯ in the header opens favourite and "Leave": leaving removes the publication and returns home.

Forwarding a post is named but not built. It is a separate crossing that should reuse the T11 picker.

## Decisions and why

| Decision | Reason | Trade-off |
|---|---|---|
| One corner button on publications (⋯ holds favourite and Leave) | Two right-hand buttons broke "Coast Journal" mid-word at 320 px with 24 px text (large-text check). | Favouriting a publication is one tap further than for people and groups. |
| New connection scrolls into view after joining | The first build kept the old scroll and the new row sat off screen. The result of the action must be visible. | The home's scroll position is not restored after a join. It is after every other return. |
| Preview is revealed so name and Join are both on screen | A2 again: the unfolded row pushed Join below the fold. | None found. |
| Identity named only in the comment crossing | Audit E1. Readers are not visible to the owner or each other. | The chosen identity is held internally and shown only when it matters. |
| Group requests stay in the directory | A pending request is not a connection, so returning home with nothing new would be a false return. | The person stays in the task until they choose to leave it. |
| Listing is a fixture of four | Enough for already-joined, new, reviewed and inactive rows. | No scale test. The real directory had 524 entries on 5 October 2026 and will need paging or a result cap. |

## Octopus flow check

- **Coordinate:** your connections fill the home; the door comes after them. Your own results come first in search.
- **Act locally:** the preview unfolds inside the row; the comment crossing unfolds inside the post.
- **Adapt the space:** the listing stays compact until a row is opened.
- **Retain context:** the directory keeps its query, tab and scroll; reactions, comments and drafts per post are kept while the page runs.
- **Cross deliberately:** three facts and an identity choice before Join; the first comment names who you will appear as.
- **Return coherently:** joining returns to the home with the new row visible; leaving returns to the home; the directory's return route is always "← Your connections".

## Evidence

- `scripts/check-channel-discovery.cjs` → [channel-discovery-check.json](channel-discovery-check.json): 54 checks at 390 × 844 plus fit checks at 320 and 390. Runtime captures in `studies/t19-captures/` (the capture PNGs could not be pushed through the connector and are kept with the owner).
- Full suite rerun in a scratch copy on 5 October 2026: every script passes except `check-contributor-route`, which failed identically on `main` before this change. `check-large-text` (154 checks) caught the header regression and passes after the fix.

## Limits

- No human evidence. Whether people find the door, read the three facts, or notice the identity choice is for T05.
- No screen reader, native keyboard or physical device.
- The directory, fetch delay, offline state and public-name lookup are simulated. The lookup always reports not found because public names are announced, not live.
- Open from the audits: D3 (what a channel link carries), E6 (corner target size). The maintainer questions in the model still stand.
