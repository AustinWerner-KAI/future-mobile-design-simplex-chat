# Information architecture: V2.1.2.1 runtime

5 October 2026. An audit of the structure as built in `v21.html?mobile=1&version=2.1.2.1` after T11 and T19, with the findings at the end. This describes what exists; it is not a redesign. The repo keeps its records in `docs/`, so this file lives here rather than in a `.design/` folder.

## Site map

One page, routed by hash. Query parameters pick the candidate and the scenario.

- Home `v21.html?mobile=1&version=2.1.2.1` (no hash)
  - Search results (same URL, typed query, not in the URL)
  - Public directory `#directory` (temporary task)
    - Preview, unfolded inside a row (no URL)
  - Person `#maya`, `#alex`
    - Conversation, Proposal, Security (tabs, no URL)
  - Group `#family`, `#bookclub`
    - Conversation, Proposal, Members (tabs)
  - Publication `#coast`, and `#tides` or `#notices` after joining
    - Comment crossing, unfolded inside a post (no URL)
    - More: favourite, Leave (panel, no URL)
  - Provider `#harbour`, `#studio`
    - Chat with staff, Email (tabs)
    - Bring a detail to a chat (disclosure inside Email)
- Dialogs, no URL: New connection, Edit favourites, Arrange collections (2.1.3 only)

Other candidates share the runtime: `version=2.1.1` (grid home), `version=2.1.2` (rail), `version=2.1.3` (collections). `journey=community` adds the community fixtures; `version=2.1.2.1` implies it.

## Navigation model

- **Primary:** none. There are no tabs or menu. The home is a list of connections with search above and one door below. This is the thesis: relationships organise the interface, not content types.
- **Secondary:** inside a connection, two or three tabs for local tools. Inside the directory, three views (Active, New, All).
- **Utility:** `+` New connection (header), favourite or More (header, right), Hide previews (footer). Edit favourites and Arrange sit as section-head buttons.
- **Return:** every non-home screen has a back button and a return-context strip naming where you came from and what is kept.
- **Mobile:** the dock at the bottom holds the composer (people, groups, providers), a reading note (publications), or the offline simulation (directory). Nothing else lives at the bottom edge.

Depth: home → connection → tool → crossing. Three taps to the deepest action. The directory is a sibling of a connection, not a level above it.

## Content hierarchy

### Home (rail)
1. Search. Finding a relationship is the primary task.
2. Keep close: six favourites as a strip.
3. Recent activity: every connection, newest first.
4. Beyond your connections: one door to the public directory. Below people by design.

### Connection
1. Header: name and type.
2. Return strip: where you came from, what is kept.
3. Tabs for local tools.
4. The latest message, then your replies, then unfolded tools and crossings.
5. Dock: audience line and composer.

### Public directory
1. Search field, then Active, New, All.
2. Listing rows: name, type and audience, count, activity.
3. The opened row's preview: three facts, identity, Join.
4. Dock: provenance of the listing and the offline simulation.

### Publication
1. Reading note: subscribers, relay visibility, your invisibility while reading.
2. Posts, newest first, each with reactions and Comment.
3. The comment crossing, inside the tapped post.
4. Dock: reading mode statement.

## User flows

### Find a relationship and reply
1. Home. Type or scan the strip.
2. Tap the connection.
3. Type in the composer, send. The reply appears under the source message.
4. Back returns to the home with scroll and search kept.

### Bring an email detail to a chat (T11)
1. Provider → Email tab → "Bring a detail to a chat".
2. Edit the detail, choose a chat tile.
3. Review: exact text, audience, identity.
4. Share, Change, or Cancel.
   - Share → focus moves to "Open {chat}". The email and reply draft stay.
   - Cancel → the preparation is discarded, nothing sent.

### Find and join a public channel (T19)
1. Home → "Find public channels and groups".
2. Filter; tap a row.
3. Fetch (Join unavailable), then three facts and the identity choice.
4. Join → home, new row on screen and focused, directory search kept.
   - Reviewed group → request sent, row shows pending, you stay in the directory.
   - Already joined → row offers Open.
   - Offline → listing replaced, search kept, Try again.

### Comment on a post
1. Publication → Comment on a post.
2. Crossing unfolds inside that post, names the identity.
3. Post or Not now. Draft per post is kept while the page runs.

## Naming conventions

| Concept | Label in UI | Notes |
|---|---|---|
| Any entry on the home | connection | The umbrella word. "Your connections" is the return route everywhere. |
| A person | Individual | M4 settled this; never "Person". |
| A group | Group · private | The audience word follows the type word. |
| A channel | Publication · public | D2 settled this. "Channel" survives only in the home door and the directory button; see IA1. |
| A business | Provider | |
| The identity you act as | as Austin, Incognito | Named only at the point of action: review, join, comment. Never while reading. |
| Sharing across contexts | review, share, crossing | "Crossing" is the design word and never appears in the UI. The UI says Review and Share. |
| The reply field | Reply to {name} · private | Carries the audience in short viewports. |

## Component reuse map

| Component | Used on | Behaviour differences |
|---|---|---|
| `.head` with `.round` buttons | every screen | Home: `+`. Connection: back and favourite. Publication: back and ⋯. Directory: back only. |
| `.return-context` | connection, directory | Names the origin; "Place & drafts retained" or "Reading place kept" or "Place retained". |
| `.entry` row with `avatar()` | home list, search results, directory listing, T11 tiles (compact) | Directory rows carry `data-listing`, home rows `data-open`. |
| `.tabs` | connection tools, directory views | Sticky at the top of the scroll area in both. |
| `.boundary` (clay rule) | T11 review, group proposal review, T19 preview, comment crossing, More panel | The one defining moment; always the same material. |
| `.dock` | every screen except home | Composer, reading note, or offline control. |
| `.feedback` status bar | every screen | White with a ruled top since F1. |

## Content growth plan

- **Recent activity** is flat and newest-first. With many publications it will push people down (noted in the channel model). Not solved. Options: a quiet rule (a publication's row moves only when opened) or a publication filter, which SimpleX chat lists already offer.
- **Favourites** cap at six, enforced.
- **Directory** has four fixtures. The real listing had 524 entries. Local filtering holds; the view needs a result cap or paging before it is real.
- **Posts** on a publication: two fixtures, newest first. Reading position is kept per publication. No archive pattern yet.
- **T11 tiles**: four chats in a 2 × 2 grid. The record already says this won't scale and needs recent-first ordering.

## URL strategy

- Pattern: `v21.html?mobile=1&version=<candidate>#<connection-id>` and `#directory`.
- Dynamic segment: the hash is the connection id or the directory. Tabs, previews, crossings and dialogs are not in the URL; they are local state and clear on reload (T10).
- Query parameters: `version`, `mobile`, `journey`. Search text is not in the URL.
- History: each open pushes a state with a depth counter; Back returns to the home in one step whatever the depth, and `popstate` re-routes from the hash.

## Audit findings

| # | Finding | Evidence | Proposed change |
|---|---|---|---|
| IA1 | Two words for one type. The rows say "Publication · public" since D2, but the home door says "Find public channels and groups", the directory search button repeats it, and the fixture note says "Curated SimpleX Directory". | `beyond()`, `publicSearch()` | Decide one. Either "Find public publications and groups", which is awkward, or keep "channels" as the public-facing word people search for and treat "Publication" as the type label. Recommend the latter and write the rule down: *channel* is what you find, *Publication* is what it becomes in your connections. |
| IA2 | Three names for the same screen. The back button's label is "Back to your world" on connections and "Back to your connections" on the directory; the return strip says "Your connections"; the 2.1.1 title is "Your world." and 2.1.2.1 is "Close at hand." | `workspace()`, `directoryView()` | "Your connections" everywhere the home is referred to. Titles stay as candidate names. |
| IA3 | Two placeholders for one search. 2.1.1 says "Find someone or somewhere"; 2.1.2.1 and 2.1.3 say "Find a connection". | `home()`, `searchField()` | One placeholder. "Find a connection" matches the umbrella word. |
| IA4 | "Chat" and "conversation" both name a thread. Tab: "Conversation". T11: "Bring a detail to a chat". Provider: "Chat with staff", "staff conversation". | `workspace()`, `providerPane()` | Use "conversation" for the thread and "chat" only where it is a verb ("Chat with staff"). "Bring a detail to a conversation". |
| IA5 | Return from a publication opened out of the directory skipped the directory. "Open Coast Journal" from a directory row routed to the publication; Back went to the home, and the return strip said "Your connections". | `route()`, `goHome()` | **Fixed 5 October 2026 (owner approved).** When a connection is opened from the directory, the return strip says "← Public directory", the back button is labelled for it, and Back returns to the directory with its search kept. Opened any other way, the route is unchanged. Four assertions added to the T19 check (58 total). |
| IA6 | The directory is a destination in the URL but a task in the model. `#directory` is bookmarkable and survives reload, while the T19 record calls it a temporary task. | `route()` | Harmless, but decide. If it is a task, Back from `#directory` after reload should still land on the home, which it does. Document it as a task with a URL for testing. |

Owner decision (5 October 2026): fix IA5 now. IA1 to IA4 and IA6 stay open as wording and documentation points.

Not findings: no primary navigation (by thesis), depth of three (acceptable), the dock reserved for the composer (consistent).
