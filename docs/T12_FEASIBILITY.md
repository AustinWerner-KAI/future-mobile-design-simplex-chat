# T12 — Engineering feasibility against SimpleX today

5 October 2026. Desk review of public SimpleX sources against the V2.1.2.1 candidate (with T11 and the mobile audit fixes). It maps each part of our flow to what the SimpleX apps already do, what they partly do, and what is our own speculation. It is not a code audit of the native apps and has not been reviewed by SimpleX maintainers. Upstream `stable` was at commit `479548ee53ff` when checked, the same commit SOURCES already pins.

## Headline

Our entity model fits SimpleX more closely than the docs have assumed:

- **Providers** correspond to SimpleX **business chats** (v6.2).
- **Publications** correspond to **channels** (v6.5 beta).
- **Collections** correspond to **chat lists** (v6.3).
- **Favourites** already exist as a favourite flag and filter (v5.2).

That makes most of V2.1 a presentation and flow change on top of existing features, not new protocol.

The two clear exceptions are **email**, which SimpleX does not do, and **proposals as shared objects**, which have no protocol equivalent.

## Map: our flow → SimpleX today

| Our concept | SimpleX today | Status | Design consequence |
|---|---|---|---|
| One home of people, groups, publications and providers | One chat list already mixes contacts, groups, business chats and (v6.5) channels | Supported | The relationship-first home is a re-presentation, not a new data model |
| Favourites grid or strip | Favourite chats and a favourites filter (v5.2) | Supported | The grid and strip are layouts over the existing flag |
| V2.1.3 collections | Chat lists with presets (contacts, groups, private notes, business, favourites) and custom lists (v6.3) | Supported | Collections can map one-to-one onto custom lists. Like ours, lists are personal and change no audience |
| Provider with staff | Business address: each customer gets their own conversation, and the business can add staff, whom the customer can see (v6.2) | Supported | "Chat with staff" fits. The business docs describe no staff role model, so our "staff" labels stay simple |
| Publication, read only | Channels (v6.5 beta): owners publish through relays; subscribers read, react and comment, can be given posting rights, and cannot see each other | Supported (beta) | "Comments off" in our study is a choice, not a limit. Relays can read channel content, so the audience line must say so |
| Group roles | Observer, member, moderator (v6.4), admin, owner. Admission review and "chat with admins" (v6.4) | Supported | T07 can use real roles, not invented ones |
| Retained draft per relationship | Message draft kept when you leave a chat, while the app runs (v4.5), with a "save draft" privacy setting (v5.3) | Partly supported | One draft per chat. Our separate proposal draft and per-transport drafts are extra state that native would have to add |
| Deliberate crossing (T11) | Forwarding (v5.7): forward to contacts and groups; the recipient sees "forwarded" but **not the source** | Partly supported | See finding 1 below |
| Identity at the point of action | Multiple chat profiles with transport isolation (v4.5), incognito per connection, hidden profiles | Supported | Our review line "as Austin" matches. The picker should only offer chats in the active profile (finding 2) |
| Delivery state | Delivery receipts with per-contact opt-out (v5.2); in groups up to 20 members (v5.3) | Supported for chat | Chat messages can show sent and delivered. Our email states are not SimpleX states |
| Unread on reply (audit F4) | Chats open at the first unread message (v6.2) | Unverified | We have not confirmed when native marks messages read. F4 may differ from native and needs a maintainer answer |
| Search | Local chat-list search; jump to found and forwarded messages (v6.3); public directory via a bot or the website | Supported | See the channel search scope below |
| Email inside a provider | Not part of SimpleX | Speculative | Keep it labelled as a hypothesis. It would need an external mail client, account permissions and a separate trust model ([EMAIL_EVOLUTION](EMAIL_EVOLUTION.md) lists them) |
| Proposal title as a shared object | No equivalent; the nearest is a quoted message | Speculative | Native would send it as an ordinary message. "Shared object" stays a design hypothesis |
| Places | Not in SimpleX | Speculative | Unchanged; still a future question |

## Findings that change the design

1. **Our crossing reveals the source, but SimpleX deliberately hides it.** T11 posts "Detail from Harbour Café shared by you: …". SimpleX forwarding shows only that a message was forwarded, not where from, following the Chatham House principle. Should the recipient see the source? It's a real design choice.
   - **Proposal:** match SimpleX. Show "Forwarded detail" to the recipient. Keep the source visible only to the sender, as SimpleX does.
   - Our edit-before-sharing step has no upstream equivalent. Native forwarding sends the whole message, so editing an excerpt would be an extension.
2. **Crossings stay inside one profile.** We found no source showing forwarding between chat profiles, and profiles are isolated by design. The T11 picker should list only chats in the active profile, and the review should keep "as {profile}". Treat cross-profile sharing as unsupported until a maintainer confirms otherwise.
3. **Providers aren't speculative any more.** Business chats exist. What's still speculative is mixing email into them.
4. **Small communities fit secret groups.** Every group message is sent to each member separately, so secret groups suit small groups, and group delivery receipts stop at 20 members. That supports the founder's small-community direction, and means our Family and Book club examples are the right scale.

## Channel search: scope (owner request, 5 October 2026)

**Today.** Public groups and channels are found through the SimpleX Directory, in two ways that behave very differently:

| | Website ([simplex.chat/directory](https://simplex.chat/directory/)) | In the app |
|---|---|---|
| How you search | A search box filters a published listing (`directory.simplex.chat/data/listing.json`) **inside your browser**, by name, short description, welcome message and SimpleX name | You connect to the directory bot and send it keywords |
| Results | All matches, with Active, New and All views, member or subscriber counts, description, last-active date, and a note when an admin reviews new members | Up to 10 groups with the most members, plus join links |
| Privacy | The query stays on the device. Fetching the listing reveals your network address to the listing host | The bot may keep your queries as conversation history; SimpleX suggests connecting incognito |
| Channels | Labelled as channels, with subscriber counts; joining needs app v6.5 | Unclear; the bot docs talk about groups |

On 5 October 2026 the listing held **524 entries: 490 groups and 34 channels**.

**Gap.** On the phone, finding a channel means chatting with a bot. The website already has the better pattern: browse and filter locally.

**Proposed mobile design (to build as T19):**

1. **Coordinate:** search stays in the home. Your own connections come first, as now.
2. **Act locally, cross deliberately:** below your results, a clearly separate "Public channels and groups" action. It is never mixed silently into your private results, because searching outside your world is a crossing.
3. **Results** reuse the publication identity mark. Each says "Public channel · 1,240 subscribers" or "Public group · 85 members" and shows a short description and when it was last active. Active, New and All work as on the website.
4. **Before joining**, a preview states:
   - It's public, and relays can read channel content.
   - Subscribers can't see each other.
   - You'll join as {profile}, with an incognito option.
   - Whether an admin reviews new members.
5. **After joining** you return to your search, and the channel appears in your connections as a publication.

**Decisions needed before building:**

- **Data source.** Filtering a downloaded listing locally keeps queries private but reveals your network address to the host unless the fetch goes through the app's proxy settings. The bot keeps queries but reuses SimpleX transport. We recommend local filtering through the app's network settings, which needs maintainer input.
- **Directory admission rules.** At least 10 members, an approval step and a content policy, all decided by SimpleX. Our design must show that this is a curated directory, not "all channels".

**What would make us abandon it:** in T05, participants confusing a public channel with a private group, or joining without noticing which identity they used.

## Limits

- Desk review of public docs, blog posts, release notes, the changelog and the directory page's own script. No native code was read and nothing was tested on a device.
- Several items are marked unverified. Native read-marking and cross-profile forwarding need a maintainer answer.
- Channels are beta (v6.5), so their behaviour may change.

## Sources

- [SimpleX changelog (v4.5 to v6.5)](https://github.com/simplex-chat/simplex-chat/blob/stable/CHANGELOG.md)
- [Business chats](https://simplex.chat/docs/business.html) · [v6.2 release](https://github.com/simplex-chat/simplex-chat/releases/tag/v6.2.0)
- [v6.3: chat lists, mentions, reports](https://simplex.chat/blog/20250308-simplex-chat-v6-3-new-user-experience-safety-in-public-groups.html)
- [v5.7: forwarding without revealing the source](https://simplex.chat/blog/20240426-simplex-legally-binding-transparency-v5-7-better-user-experience.html)
- [Secret groups and roles](https://simplex.chat/docs/guide/secret-groups.html)
- [Channels overview](https://simplex.chat/docs/protocol/channels-overview.html) · [v6.5 channels announcement](https://simplex.chat/blog/20260430-simplex-channels-v6-5-consortium-crowdfunding-freedom-of-speech.html)
- [Directory service docs](https://simplex.chat/docs/directory.html) · [Web directory](https://simplex.chat/directory/) · [docs issue #6774](https://github.com/simplex-chat/simplex-chat/issues/6774)
- [v5.2: delivery receipts](https://simplex.chat/blog/20230722-simplex-chat-v5-2-message-delivery-receipts.html)
