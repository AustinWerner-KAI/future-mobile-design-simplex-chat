# Questions for SimpleX maintainers

5 October 2026. Five design decisions in this study rest on facts about the SimpleX apps and protocol that public docs don't settle. Each question says what we assumed, why it matters to the design, and what changes with each answer. Answers go into [SOURCES](SOURCES.md) with the reply linked, and the affected docs are updated the same day.

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

## Smaller points, if time allows

- Can a subscriber react to a channel post without the owner learning who reacted? The channel page shows reactions as local and private; if reactions are visible to the owner, the comment-style crossing applies to them too.
- Is there a "request to join" state for groups with admission review that the app surfaces to the requester? Our directory shows "Request sent · an admin reviews new members".
