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
| 5 | **I found it on the web** | The SimpleX website directory or a link on a site | The link opens the app at the same preview as 1 to 4 |

**What this means:** discovery is mostly something that happens *inside relationships and search*, not a separate "Explore" destination. A browse feed earns its place only if T05 shows people want to browse.

## The six flow rules applied to channels

| Rule | Channel behaviour |
|---|---|
| **Coordinate** | Discovery starts where the person is: a conversation, or home search. Your own connections always come first in search. Looking up a `#name` and searching the public directory each happen only when tapped, because both leave the phone. |
| **Act locally** | A shared channel opens as a preview *beside the message that carried it*, not on a new screen. The person decides there and stays in the conversation. |
| **Adapt the space** | Subscribed channels stay compact in the home (one row, latest post), because people come first. A channel unfolds into reading mode when opened. Channels can be favourited, but they aren't promoted above people. |
| **Retain context** | After previewing or joining, the person returns to the chat or search they came from, with drafts and scroll position intact. Each channel keeps its own reading position. |
| **Cross deliberately** | Joining is a crossing into a public space. The preview says what's true before you join: public, relays can read posts, subscribers are hidden from each other, and you join as {profile}, with incognito available. Commenting is a second crossing: the first comment shows who you'll appear as. Sharing out of a channel into a private chat is a forward, and the recipient isn't told the source. |
| **Return coherently** | After joining, focus returns to where you started, with a line saying "Coast Journal added to your connections as a publication". Leaving a channel is one step from its header, and you return to home. |

## Where the money shows up

It doesn't show up for readers. Subscribers never see prices, credits or relay counts while reading. That would be ego, not design.

Two honest signals only:

- **In the preview:** "Hosted by the owner on independent relays". It explains why the content is public to relays without implying the channel is free infrastructure.
- **For owners, later and out of scope:** relay capacity and credit status belong in an owner-only channel settings view, separate from reading.

We won't simulate payments, credits or name purchases in the prototype. They're announced, not live, and the project keeps speculative capability separate from verified features.

## What would make us abandon parts of this

- If T05 participants look for an "Explore" tab and can't find search, we test a browse destination.
- If people join without noticing it's public, or which identity they used, the preview has failed. Make the identity choice explicit before the Join button.
- If `#name` search confuses people with contact search, we separate public names into their own result group with a "Public" label.

## Sources

[Channels overview](https://simplex.chat/docs/protocol/channels-overview.html) · [v6.5 channels, consortium and crowdfunding](https://simplex.chat/blog/20260430-simplex-channels-v6-5-consortium-crowdfunding-freedom-of-speech.html) · [Community Credits](https://simplex.chat/credits/) · [Public Names](https://simplex.chat/blog/20260722-simplex-public-names.html) · [Directory docs](https://simplex.chat/docs/directory.html) · [v5.7 forwarding](https://simplex.chat/blog/20240426-simplex-legally-binding-transparency-v5-7-better-user-experience.html)
