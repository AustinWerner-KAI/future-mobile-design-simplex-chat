# SimpleX project map — what the design grows from

Research expanded 4 October 2026, starting at the [SimpleX GitHub organisation](https://github.com/simplex-chat). Primary project documentation only. References use mutable branches: they are observations from this review, not a frozen specification or an independent security audit.

## Two connected projects

| Project | Role | Implication for this exploration |
|---|---|---|
| [simplex-chat](https://github.com/simplex-chat/simplex-chat) | Chat application, clients, core and developer interfaces | Use real application state and permission semantics as foundations |
| [simplexmq](https://github.com/simplex-chat/simplexmq) | Messaging infrastructure, protocols, agents and routers | Understand the network before assuming a familiar global-account model |

The organisation explicitly welcomes tutorials, bots, integrations and feature contributions. The design community can contribute an evidence-backed interaction proposal; this repository remains independent. [Chat repository introduction](https://github.com/simplex-chat/simplex-chat#contribute).

## The network and the app are different layers

SimpleX describes a platform with resource-based addressing. Recipients create unidirectional queues; communication does not require globally unique participant addresses. SMP handles queued messages; XFTP provides separately addressed data packets for larger payloads. Chat contacts, groups, formats and end-to-end communication logic run at endpoints. Agents provide higher-level operations above clients. Routers still exist; router trust and traffic-correlation limits are discussed explicitly. [Protocol overview, revision 4](https://github.com/simplex-chat/simplexmq/blob/stable/protocol/overview-tjr.md).

**Our interpretation:** the octopus analogy now has a specific technical anchor. A different foundation can support a different experience. Organise local relationships and deliberate actions without introducing a universal account or social graph. Keep the network invisible during ordinary tasks, but preserve accurate states when something is pending or fails. A shared-plan object remains an application/protocol hypothesis, not an automatic consequence of queues.

## Connection routes are not interchangeable

The guide distinguishes single-use invitation links from reusable contact addresses. A reusable address receives requests, can be removed while existing connections remain, and is not the route used to deliver ongoing messages. An invitation needs confirmation that the intended connection succeeded. [Making connections](https://simplex.chat/docs/guide/making-connections.html).

**Design consequence:** show the identity before the QR, label invitation type, and keep pending separate from accepted. Avoid global username search. Place the single-use/reusable explanation behind an inspectable detail rather than consuming the whole invitation surface.

## Local profiles and incognito are different

Additional profiles are local contexts. Incognito is independent: new connections can receive independently generated profile names instead of the selected name/image. Hidden profiles have a password flow. [Profile guide](https://simplex.chat/docs/guide/chat-profiles.html).

**Design consequence:** use one compact active-profile label, scope search and drafts, and avoid treating hidden previews as a lock. Keep incognito disclosure visible during invitation creation. The browser’s illustrative identity is not generated or authenticated by SimpleX.

## Group roles belong to the real permission model

The secret-group guide distinguishes observer, member, admin and owner. It describes invitations and per-member sending for smaller secret groups. [Secret-group guide](https://simplex.chat/docs/guide/secret-groups.html).

**Design consequence:** the invitation must state the offered role; the recipient should not appear able to choose their own privilege. Our role selector has therefore moved outside the phone into the study controls. Membership and agreement to a proposal remain separate states.

## Security review is specific to the relationship

The documented flow opens the contact’s security code and compares it with the contact’s code through a trusted channel. QR scanning or an explicit trusted comparison can record verification. [Privacy and security guide](https://simplex.chat/docs/guide/privacy-security.html).

**Design consequence:** keep the contact and comparison status together. The demo invitation QR must never double as a verification QR. “I reviewed the process” records local understanding only and leaves verification unchanged.

## Native implementation is a presentation-layer investigation

The iOS client uses SwiftUI with a Haskell-core bridge and shared notification/share-extension infrastructure. Its state includes ChatModel and ItemsModel. A future prototype would need the native state, share flow and authentication rather than a second browser message store. [iOS architecture](https://github.com/simplex-chat/simplex-chat/blob/stable/apps/ios/README.md).

Android and desktop share Compose Multiplatform components with model, API, platform and theme layers. A native design experiment must account for their shared UI and platform-specific behaviour, including keyboard insets and adaptive layouts. [Multiplatform architecture](https://github.com/simplex-chat/simplex-chat/blob/stable/apps/multiplatform/README.md).

## Plans are evidence of questions, not guarantees

Updated research, 4 October 2026: SimpleX announced channels in v6.5 as a beta. Current published privacy documentation still describes public channels as experimental. Channel content is visible to chat relays; protecting participation is distinct from keeping content private. Our small private group must not be presented as equivalent to a public channel. The earlier launch plan is historical context, not a current feature checklist. [SimpleX channels announcement](https://simplex.chat/blog/20260430-simplex-channels-v6-5-consortium-crowdfunding-freedom-of-speech.html), [current privacy documentation](https://github.com/simplex-chat/simplex-chat/blob/stable/PRIVACY.md), [channels overview](https://simplex.chat/docs/protocol/channels-overview.html).

The earlier statement about future email integration came from the initiator. The sources reviewed here do not establish a committed release date or an implemented mailbox. Keep email as a clearly labelled speculative branch.

## What to investigate next with maintainers

Validate the representation of shared objects and version history; map source/recipient/role state to native models; examine share-extension entry and return; test real keyboard and safe-area behaviour; distinguish private-group and public-channel contexts; and compare the proposal against the current native interaction with participants.

This research refines the foundations. It does not settle what the interface should look like in 2028.
