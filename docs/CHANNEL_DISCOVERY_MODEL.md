# Channels in the octopus flow — finding, joining and reading

5 October 2026. Design model for T19. It builds on the [T12 feasibility map](T12_FEASIBILITY.md) and the SimpleX facts below. This is a hypothesis to test in T05, not a validated pattern. [Mockup](../studies/channel-discovery.html).

## The facts we design around

- A channel is one-to-many publishing through several relays. Subscribers read, react and comment; they can't see each other, and owners can't see who subscribes. Relays can read the posts. Beta since v6.5.
- People find channels through links, the curated SimpleX Directory (website or bot), and soon public names such as `#example`. SimpleX says connecting by name is private: "no server can see both the name and the user's IP address".
- Forwarding a post hides its source from the recipient (Chatham House principle).
- **Money:** private chats and small groups stay free within fair use. Big groups and channels are paid for by their owners with Community Credits: prepaid, non-tradable, and unlinkable to the owner. Server operators receive up to 70%. Most of this is announced for 2026–27 rather than live.

## How people will want to find channels

Ranked by fit with our thesis that human relationships organise the interface. This is an ordering of hypotheses, not measured behaviour.

| # | Intent | What the person is doing | Where it should happen |
|---|---|---|---|
| 1 | **Someone I know shares it** | Maya posts a channel link in our chat, or Family shares one in the group | Inside that conversation, as a channel card beside the message |
| 2 | **I've been told a name** | "Follow #coastjournal" | The home search box: typing `#` offers "Look up #coastjournal". The lookup leaves the phone, so it happens on tap, not while typing |
| 3 | **I saw a post and want the source** | A post forwarded into a chat | Forwarding hides the source, so the sharer has to choose to attach the channel. Offer "Share channel" next to "Forward post" |
| 4 | **I'm looking for a topic** | "Something about tides and walks" | Home search, then an explicit step: "Search public channels and groups" |
| 4b | **I want to browse, from the home** | Opens the app with nothing in mind | The home screen at rest: after Recent activity, a section "Beyond your connections" with one button, "Find public channels and groups". Below people, never above, never a tab. Owner request, 5 October 2026 |
| 5 | **I found it on the web** | The SimpleX website directory or a link on a site | The link opens the app at the same preview as 1 to 4 |

**What this means:** discovery is mostly something that happens *inside relationships and search*, not a separate "Explore" destination. A browse feed earns its place only if T05 shows people want to browse.

## The whole journey, home to channel page

Scoped on the owner's request (5 October 2026). Frames 1 to 5 of the [study](../studies/channel-discovery.html) follow one path end to end:

| Step | Screen | What holds |
|---|---|---|
| 1 | Home at rest | Your connections fill the screen. One door, "Find public channels and groups", sits after Recent activity. Not a tab, not above people. Nothing is fetched until it's tapped. |
| 2 | Public directory | A temporary task, not a destination: the return route says "← Your connections". The listing loads once, then filters on the phone as the website does. Active, New, All. Rows name type and audience: "Publication · public · 1,240 subscribers". |
| 3 | Preview | The row unfolds in place; the other results stay below. Three facts, one identity control, then Join. The same panel opens from a shared link or a `#name`. |
| 4 | Channel page | Reading mode. Posts fill the screen. Reacting is local. The first comment is a second crossing that names who you'll appear as. Forward hides the source, as SimpleX does. No private reply to the publisher. Leave channel is one step from the header. |
| 5 | Return | Back to the home. The channel sits among your connections, marked "joined just now as Austin". The directory keeps your last search. |

Other doors (frames 6 to 9) all open the same preview as step 3: a link from a person, a `#name`, a forwarded post, a web link.

## The six flow rules applied to channels

| Rule | Channel behaviour |
|---|---|
| **Coordinate** | Discovery starts where the person is: a conversation, home search, or the home at rest (one door after Recent activity). Your own connections always come first in search. Looking up a `#name` and searching the public directory each happen only when tapped, because both leave the phone. |
| **Act locally** | A shared channel opens as a preview *beside the message that carried it*, not on a new screen. The person decides there and stays in the conversation. The card shows only what the link carries (name, description). Subscriber counts and activity need a relay, so they appear after "Preview channel", and the card says so. |
| **Adapt the space** | Subscribed channels stay compact in the home (one row, latest post), because people come first. A channel unfolds into reading mode when opened. Channels can be favourited, but they aren't promoted above people. |
| **Retain context** | After previewing or joining, the person returns to the chat or search they came from, with drafts and scroll position intact. Each channel keeps its own reading position. |
| **Cross deliberately** | Joining is a crossing into a public space. The same preview opens whichever way you arrived (link, name, directory). It says three things before you join: public, the owner's relays carry and can read the posts, subscribers are hidden from each other. Then one identity control: join as {profile} or incognito, with the choice marked by more than colour. Commenting is a second crossing: the first comment shows who you'll appear as. Sharing out of a channel into a private chat is a forward, and the recipient isn't told the source. |
| **Return coherently** | After joining, you return to where you started: the chat if a person shared it, the search with its query kept if you searched. A line says "Coast Journal added to your connections as a publication". Leaving a channel is one step from its header, and you return to home. |

## States that must exist

Discovery crosses the network, so it has more states than a local tool. Each gets a plain line in the place the person is, with their query kept:

| State | What the person sees |
|---|---|
| Not yet fetched | Card from a link: name and description only, "Preview fetches details from its relays" |
| Loading | "Fetching from Coast Journal's relays" on the preview, with Join unavailable until it arrives |
| Already subscribed | The row or card says "Already in your connections", and offers Open instead of Join |
| Admin review (groups) | "Request sent · an admin reviews new members · you'll be told here", nothing to retry |
| Name not found | "No public name matches. Check the spelling, or ask who told you for the link" |
| Directory unavailable | "Couldn't reach the directory. Your search is kept; try again when you're online" |
| Duplicate | Join is one consequential action. A second tap while pending does nothing; the preview shows the pending state |

## Where the money shows up

It doesn't show up for readers. Subscribers never see prices, credits or relay counts while reading. That would be ego, not design.

Two honest signals only:

- **In the preview:** "The owner's relays carry the posts and can read them". One line does both jobs: it says who hosts and what relays can see. An earlier draft used two bullets and was merged on audit.
- **For owners, later and out of scope:** relay capacity and credit status belong in an owner-only channel settings view, separate from reading.

We won't simulate payments, credits or name purchases in the prototype. They're announced, not live, and the project keeps speculative capability separate from verified features.

## What would make us abandon parts of this

- If T05 participants look for an "Explore" tab and can't find search, we test a browse destination.
- If people join without noticing it's public, or which identity they used, the preview has failed. Make the identity choice explicit before the Join button.
- If `#name` search confuses people with contact search, we separate public names into their own result group with a "Public" label.

## Audit

Critiqued against the Kings of Mobile Design framework on 5 October 2026, findings C1 to C10 and a second pass D1 to D6, in the [mobile audit log](MOBILE_AUDIT_LOG.md#4-t19-channel-discovery-study--5-october-2026). Applied: C1 to C10, D1, D2, D4, D5. Open: D3 (what a channel link carries) and D6 (loading state, to draw in the runtime).

**Vocabulary:** the type word is always Publication or Group, as in the home. "Public" is the audience word, never part of the type name.

**Maintainer questions:** does opening a channel link contact relays before any tap? Does the link itself carry a name and description, or only an address?

## Sources

[Channels overview](https://simplex.chat/docs/protocol/channels-overview.html) · [v6.5 channels, consortium and crowdfunding](https://simplex.chat/blog/20260430-simplex-channels-v6-5-consortium-crowdfunding-freedom-of-speech.html) · [Community Credits](https://simplex.chat/credits/) · [Public Names](https://simplex.chat/blog/20260722-simplex-public-names.html) · [Directory docs](https://simplex.chat/docs/directory.html) · [v5.7 forwarding](https://simplex.chat/blog/20240426-simplex-legally-binding-transparency-v5-7-better-user-experience.html)
