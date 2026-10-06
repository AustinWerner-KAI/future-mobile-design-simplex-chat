# Research: why scrolling through chats is a core problem

The proposition: scrolling through the chats needs the chat app core re-engineered, not redesigned, while grids are just lists organised differently. A related video is "The Ridiculous Engineering Of Chat" by Enrico Tartarotti. The video's content was not reviewed for this doc. This doc tests that claim against SimpleX's own code and against how every major messenger is built. Compiled 6 October 2026.

SimpleX code read at commit `479548ee` (3 Oct 2026), `github.com/simplex-chat/simplex-chat`.

---

## 1. The answer in one picture

```
CHEAP: the chat list                       EXPENSIVE: chat contents across chats
────────────────────                       ─────────────────────────────────────
one row per chat                           message windows from many chats at once
one preview message each                   each paged, anchored, live, read-marked
sorted by one timestamp on the chat row    no index or API for this in the apps
up to 5000 loaded in one call              the app holds ONE open chat's messages
filtered and grouped in app memory
```

**Grids, groups, filters, favourites and collections only rearrange the left column.** Its data is already in memory. Anything that shows the *contents* of more than one chat at once breaks the app's core assumption: **one open chat at a time.**

The proposition holds, and the code shows exactly where.

---

## 2. What "scrolling through the chats" means

| Reading | What it is | Fits the proposition? |
|---|---|---|
| **A** | Several chats' messages open and live inside one scroll. This is what the prototype does when a conversation unfolds in the list | **Yes.** It is the opposite of rearranging previews |
| **B** | One continuous feed of messages from many chats, ordered by time | **Yes.** The extreme form of A |
| **C** | Scrolling the chat list itself | No. Already exists and is cheap |

The evidence favours A, with B as its extreme. Both break the same assumption.

---

## 3. How SimpleX is built today

### The core (Haskell)

| API | What it does | Source |
|---|---|---|
| `APIGetChats` | Loads the chat list: one preview item per chat, sorted by `chat_ts`. Filters: favourite, unread, search | `Controller.hs` L378 |
| `APIGetChat` | Loads **one** chat, paged | `Controller.hs` |
| `ChatPagination` | `CPLast`, `CPAfter`, `CPBefore`, `CPAround`, and `CPInitial`, which opens at the first unread or the last item viewed | `Controller.hs` L1076 |
| `APIGetChatItems` | A query across **all** chats, newest first, with text search. Added Apr 2023. **No app calls it.** It loads each item separately (N+1) | `Store/Messages.hs` L2428 |

Both apps request the chat list with no pagination, so they load up to **5000 previews** in one call.

### The database

- One SQLCipher-encrypted SQLite file for all profiles, rows keyed by user.
- Messages are stored as plaintext JSON inside the encrypted file. Reading costs page decryption plus JSON decoding, not per-message E2E decryption.
- **Every time-ordered index on `chat_items` is per chat.** There is no index across chats and no full-text search table. A cross-chat scroll or global search scans everything.
- Direct chats sort by `created_at` and groups by `item_ts`. A merged feed would have to reconcile two time axes.

### The iOS app

- `ChatModel.chats` holds the list, one preview item per chat.
- **`ItemsModel.shared` is a singleton.** It holds one chat's messages, plus one optional secondary model used for group support and reports.
- Incoming messages go into a message buffer **only if they belong to the open chat.** Every other chat only gets its preview updated (`getCIItemsModel`, L695).
- **One draft** for the whole app (`draft`, `draftChatId`), behind a privacy toggle. The core stores no drafts.
- The message list is a custom virtualised `EndlessScrollView`, added Feb 2025 in a 2,177-line change that replaced the earlier `ReverseList`.
- Page sizes: 75 items to open, 100 per preload.

### Android and desktop

Same shape: one `chatsContext` plus one secondary, one draft, `LazyColumn` lists.

### The history says it was already hard for one chat

| Date | Change |
|---|---|
| Dec 2022 | Chat list sorted and sped up |
| Jul 2024 | iOS UIKit reverse list |
| Nov 2024 | Pagination API to load around the first unread (#5100) |
| Feb 2025 | iOS opens at first unread: +2,177 / −711 lines, 24 files (#5392) |
| Mar 2025 | Scrolling improvements (#5746, #5753) |
| Apr 2025 | Chat state refactor (#5858) |
| Mar 2026 | Jump-to-search fixes (#6714, #6724) |

The v6.2 release notes (Dec 2024) call opening on the last message instead of the first unread "a long-standing complaint". Getting **one** chat to open in the right place took about six months of core and app work, from November 2024 to April 2025, including one 2,177-line iOS change. Doing that for several chats at once, live, is the re-engineering the proposition describes.

---

## 4. How everyone else does it

| App | Chat list | Message list | Contents across chats? |
|---|---|---|---|
| **Telegram** | `loadChats`, light rows | `getChatHistory`, 100 at a time, with holes | **No.** Only cross-chat *search*. "Pull up for next unread channel" hands off one chat at a time |
| **Signal** | Paged data source | Paged by index | No |
| **WhatsApp** | (no engineering post found) | (none found) | No. The Updates tab is kept apart from chats |
| **Discord** | Virtualised; only visible servers in memory | Recycled list; rebuilt its own after FlashList blanking (Mar 2025) | No |
| **Slack** | Fetch only the active channel; counts light the sidebar | Lazy model (desktop rewrite, 2019) | **Yes: the Unreads view.** Grouped by conversation, collapsible, read-mostly, **server-backed** |
| **iMessage** | Pins since iOS 14 | (not checked) | No. Pins only reorganise the list |
| **Matrix / Element X** | Sync v2 "scales badly" with room count; rebuilt around sliding sync | Lazy timelines with gaps | No |
| **Beeper** | Unified list across networks | (not checked) | No. Unifies chats, not messages |

**Every client checked keeps the list light and loads content for one chat at a time.** WhatsApp's engineering and Signal iOS's chat list were not checked. The only shipped "contents across conversations" view is Slack Unreads, and Slack has a server doing the work. Matrix had to rebuild its room list entirely when room counts grew. That is the closest public analogue to this proposition.

---

## 5. The engineering patterns, and what each costs SimpleX

| Pattern | What it gives | Cost on SimpleX |
|---|---|---|
| Virtualisation and recycling | Only visible rows render | **Done** for both lists. Nesting reverse-scrolling lists inside a forward list is the hard part |
| Anchored pagination (`CPAround`, `CPInitial`) | Jump to an item or first unread | **Exists for one chat.** Each extra live chat needs its own gaps and preload state |
| Scroll anchoring | Holds position as content loads above | Done for one list. Several growing sublists in one parent need anchoring at each level |
| **Multiple live windows** | Several chats' buffers kept live | **Large app change:** N item models, event routing to each, memory caps. The core needs nothing new |
| **Merged timeline** (k-way merge on time and id) | One feed across chats | **Large core and app change:** new index, one time axis, batched loads, new pagination type, read state per item |
| **Digest view** (Slack Unreads model) | Unread items grouped by chat, collapsible | **Medium:** one `CPInitial` load per chat; replying opens the chat |
| **Sequential handoff** (Telegram next unread) | End of a chat opens the next | **Small:** reuses the single item model |
| Server-windowed lists (sliding sync) | Server sends only the visible range | **Not applicable.** SimpleX has no server-side list |
| Full-text index (SQLite FTS5) | Fast global search | New table and migration; interacts with privacy and message retention |

---

## 6. What this means for the prototype

| Prototype behaviour | Cost | Why |
|---|---|---|
| Grid, rail or collections home | **Cheap** | Rearranges previews already in memory |
| Today / This week / Earlier groups | **Cheap** | Buckets chats by preview time |
| Unread filter, favourites, collections | **Cheap** | All exist in the core |
| Home of 100+ connections (issue #2) | **Cheap** | The apps already load up to 5,000 previews |
| Search by name | **Cheap** | Exists |
| Two or three messages per row | **Moderate** | One extra small load per row, more than one preview item per chat |
| Tap a message in the list to open the chat there | **Moderate** | `CPAround` exists |
| Unread digest grouped by chat | **Moderate** | Per-chat loads; reply opens the chat |
| "Next unread" at the end of a chat | **Moderate** | Reuses the single open chat |
| Global message search | **Moderate** | API exists, unused, unindexed |
| **A conversation unfolding in place inside the list** | **Re-engineering** | Several live item models, event routing, nested reverse lists, read marking across chats |
| **Continuous scroll across chats** | **Re-engineering** | Everything in the merged-timeline row |
| **Drafts and scroll positions kept for many chats** | **Re-engineering** | One in-memory draft today, behind a privacy toggle; no per-chat position stored |

### The uncomfortable part

The most expensive item is the project's founding gesture. Board 4, Rest / Touch / Return, the behavioural seed of the whole study, is a conversation unfolding in place. So is the inline `unfold.html` experiment. Issue #2 avoided it: the home at scale opens a conversation with a slide rather than unfolding it in the list, which is why issue #2 is cheap.

### The useful part

The six flow rules do not need conversations to unfold inside the list. They need the person to **act locally, keep their place, and return coherently.** There are cheaper ways to deliver each:

| Flow rule | Expensive way | Cheap way the core already supports |
|---|---|---|
| Act locally | Unfold the chat inside the list | **A programmable interface unfolds inside one open chat**, which is exactly what the core is built for |
| Retain useful state | Keep many chats live | One live chat plus `CPInitial`, which reopens where you were |
| Return coherently | Collapse back into the list | The 200 ms slide back, scroll and search kept (already built) |
| Coordinate | A continuous scroll across chats | An unread digest, or "next unread" handoff |

The two propositions fit together. Programmable interfaces move "unfolding" from **chat inside the list** to **interface inside the chat**. That puts the octopus's local action where the core is already strong.

---

## 7. What to ask, and what to stop claiming

**Ask the SimpleX maintainers** which, if either, they would consider: multiple live chats (reading A) or a merged timeline (reading B). The answer decides whether the unfold-in-list gesture has a future.

**Stop claiming:** that the home at scale or the unfold behaviour is "just design". Record in the docs which behaviours are cheap on today's core and which depend on core work.

---

## Sources

- SimpleX source at [commit 479548ee](https://github.com/simplex-chat/simplex-chat/tree/479548ee53ffb73db73841e77acbeee5a78dbbd5) (3 Oct 2026): [Controller.hs](https://github.com/simplex-chat/simplex-chat/blob/479548ee53ffb73db73841e77acbeee5a78dbbd5/src/Simplex/Chat/Controller.hs), [Store/Messages.hs](https://github.com/simplex-chat/simplex-chat/blob/479548ee53ffb73db73841e77acbeee5a78dbbd5/src/Simplex/Chat/Store/Messages.hs), [chat_schema.sql](https://github.com/simplex-chat/simplex-chat/blob/479548ee53ffb73db73841e77acbeee5a78dbbd5/src/Simplex/Chat/Store/SQLite/Migrations/chat_schema.sql), [ChatModel.swift](https://github.com/simplex-chat/simplex-chat/blob/479548ee53ffb73db73841e77acbeee5a78dbbd5/apps/ios/Shared/Model/ChatModel.swift), [AppAPITypes.swift](https://github.com/simplex-chat/simplex-chat/blob/479548ee53ffb73db73841e77acbeee5a78dbbd5/apps/ios/Shared/Model/AppAPITypes.swift)
- SimpleX pull requests [#5100](https://github.com/simplex-chat/simplex-chat/pull/5100), [#5140](https://github.com/simplex-chat/simplex-chat/pull/5140), [#5392](https://github.com/simplex-chat/simplex-chat/pull/5392), [#5746](https://github.com/simplex-chat/simplex-chat/pull/5746), [#5858](https://github.com/simplex-chat/simplex-chat/pull/5858)
- [SimpleX network: preset servers operated by Flux, business chats and more with v6.2 of the apps](https://simplex.chat/blog/20241210-simplex-network-v6-2-servers-by-flux-business-chats.html), 10 Dec 2024
- [TDLib getChatHistory](https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1get_chat_history.html)
- [Supercharging Discord mobile: our journey to a faster app](https://discord.com/blog/supercharging-discord-mobile-our-journey-to-a-faster-app), 5 Mar 2025
- [Making Slack faster by being lazy](https://slack.engineering/making-slack-faster-by-being-lazy/), 2017; [Rebuilding Slack on the desktop](https://slack.engineering/rebuilding-slack-on-the-desktop/), 22 Jul 2019; [View all your unread messages](https://slack.com/help/articles/226410907-View-all-your-unread-messages)
- [Apple reimagines the iPhone experience with iOS 14](https://www.apple.com/newsroom/2020/06/apple-reimagines-the-iphone-experience-with-ios-14/), 22 Jun 2020
- Matrix [MSC3575: sliding sync](https://github.com/matrix-org/matrix-spec-proposals/pull/3575) and [Matrix 2.0](https://matrix.org/blog/2023/09/matrix-2-0/), 21 Sep 2023
- [The Ridiculous Engineering Of Chat](https://www.youtube.com/watch?v=6DSW1rN-ZV4), Enrico Tartarotti (not reviewed)
- Signal, WhatsApp, Beeper and Gmail observations come from their public repositories and help pages and were not individually re-checked

Not found: any public SimpleX statement explaining why scrolling is hard, or on programmable interfaces. This note describes a design direction for the study, not a SimpleX plan.
