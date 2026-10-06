# Questions for SimpleX maintainers

5 October 2026, extended 6 October 2026 with questions 6 and 7. Seven design decisions in this study rest on facts about the SimpleX apps and protocol that public docs don't settle. Each question says what we assumed, why it matters to the design, and what changes with each answer. Answers go into [SOURCES](SOURCES.md) with the reply linked, and the affected docs are updated the same day.

This is an independent design study, not a feature request. We're asking so the prototype doesn't claim behaviour the apps don't have.

## 1. Does opening a channel link contact relays before the person taps anything?

- **We assumed:** no. A received channel link shows only what the link carries until the person taps "Preview". The prototype says "Nothing has left your phone yet" on the card.
- **Why it matters:** the T19 preview is a deliberate crossing. If the app prefetches channel details on receipt, that sentence is false and the first network contact happens without consent.
- **If yes, it prefetches:** the card drops the sentence and states that details were fetched on receipt. The crossing moves to Join only.
- **If no:** the design stands.
- Refs: [T19 record](T19_CHANNEL_DISCOVERY.md), [audit C1](MOBILE_AUDIT_LOG.md#4-t19-channel-discovery-study--5-october-2026).

## 2. What does a channel link carry: a name and description, or only an address?

- **We assumed:** name and a short description, shown on the card before any fetch.
- **Why it matters:** the card is the first thing a person sees. Showing a description that the link can't carry would be invented data.
- **If address only:** the card shows "Channel link" and the sender's name until Preview fetches the rest.
- **If name and description:** the design stands.
- Refs: audit D3.

## 3. When does the native app mark messages as read?

- **We assumed:** opening a chat does not acknowledge reading; sending a reply clears the unread count locally (audit F4).
- **Why it matters:** the research notes warn against expansion faking a read acknowledgement. If native marks read on open, our rule diverges from the app and T05 participants will be tested on behaviour the app doesn't have.
- **If native marks read on open:** we match it and note the privacy trade-off in the record.
- **If native marks read only on an explicit action, or never sends receipts without opt-in:** the design stands, and we state which.
- Refs: [T12 map](T12_FEASIBILITY.md), audit F4.

## 4. Can a message be forwarded from a chat in one profile to a chat in another profile?

- **We assumed:** no. Profiles are isolated, so the T11 picker lists only chats in the active profile and the review says "as Austin".
- **Why it matters:** cross-profile forwarding would be a crossing between identities, which needs a different review.
- **If yes:** the picker groups chats by profile and the review names the profile the detail leaves from and the one it arrives in.
- **If no:** the design stands.
- Refs: T12 finding 2.

## 5. For an in-app directory, which data source would you accept?

- **Context:** the website filters `directory.simplex.chat/data/listing.json` in the browser. The app offers a bot that returns up to 10 results and may keep queries. Our T19 design filters a downloaded listing on the phone, as the website does.
- **Why it matters:** fetching the listing reveals the device's network address to the listing host unless the fetch goes through the app's proxy settings. The bot keeps queries but uses SimpleX transport.
- **Options we see:** (a) fetch the listing through the app's existing proxy or Tor settings and filter locally; (b) extend the bot to return a full listing once; (c) keep the bot as is and cap the design at 10 results.
- **What changes:** (a) or (b) keep the design; (c) removes local filtering and the Active/New/All views.
- Refs: [T12 channel search scope](T12_FEASIBILITY.md#channel-search-scope-owner-request-5-october-2026).

## 6. Which interface model, if any, would SimpleX consider for interfaces sent inside a conversation?

- **Context:** the field has settled on two tiers. A declarative catalog (components described as data, rendered by the client, nothing executable crosses the wire) and a sealed bundle sent as a message with no network access (the webxdc shape). A third, model-written code, has no one to vouch for it. See [the whitepaper, section 5](RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md#5-the-protocol-landscape).
- **Why it matters:** the study's next design study (T22) draws the client frame around such an interface: sender mark, typed actions, review before anything leaves, receipt, fold back. The frame is the same for both tiers, but what sits inside it is not, and a catalog needs the client to own the component set.
- **If catalog:** the study designs the component set and the frame. Model-written interfaces become acceptable, because nothing executable crosses.
- **If bundle:** the study designs the frame and the acceptance moment (first seen, accepted by contacts). The catalog work is dropped.
- **If a mix, or neither yet:** the study keeps the frame and marks the inside as open.
- Refs: [whitepaper section 9](RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md#9-a-framework-the-frame), [T22 in NEXT_STEPS](NEXT_STEPS.md).

## 7. Which core work, if any, would you consider so that more than one chat can be live at once?

- **Context:** at commit `479548ee` the apps hold one open chat's messages in memory, keep one draft, and index messages per chat. Grids, filters, favourites and a long list of previews are cheap on today's core. A conversation unfolding inside the list, a merged timeline across chats, or drafts kept for many chats each need core work. The cost table is in [Chat scrolling](RESEARCH_NOTES/CHAT_SCROLLING.md) and [whitepaper section 7.4](RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md#74-what-each-behaviour-costs).
- **Why it matters:** the study has already retired the unfolding-in-the-list gesture as its default because of this. Before writing a specification for the maintainers (T24), we want to know which direction, if any, is worth specifying.
- **Options we see:** (a) several live chat buffers with event routing, so a conversation can unfold where it sits; (b) a merged, paged timeline across chats with one clock and per-item read state; (c) neither; the single open chat stays the design constraint.
- **What changes:** (a) reopens the unfolding gesture as a design option; (b) opens a continuous feed as an option; (c) the study keeps interfaces inside the open chat as the only direction and T24 is dropped.
- Refs: [whitepaper section 10.3](RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md#103-what-to-stop-claiming).

## Smaller points, if time allows

- Can a subscriber react to a channel post without the owner learning who reacted? The channel page shows reactions as local and private; if reactions are visible to the owner, the comment-style crossing applies to them too.
- When a detail is shared from one chat into another, should the receiving side see where it came from? The study's crossing shows the source; SimpleX forwarding hides it by design. This is the first of three gates before T22 and we would rather decide it with you than guess.
- Is there a "request to join" state for groups with admission review that the app surfaces to the requester? Our directory shows "Request sent · an admin reviews new members".
