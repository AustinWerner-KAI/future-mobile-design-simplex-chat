# Understanding SimpleX before redesigning it

Research checked 3 October 2026. Primary sources only: official website, user guides, protocol overview and app-development documentation. Facts below describe those sources; recommendations are our design interpretation. This is a product and architecture study, not an independent cryptographic audit.

## What the project is

SimpleX Chat Ltd develops the SimpleX network and software. Its stated mission concerns decentralisation and people's control over identity, contacts and communities. The network is a foundation for applications; SimpleX Chat is its messaging application. That makes this project about an interface for a particular communication model, rather than another messenger skin. [About SimpleX](https://simplex.chat/about/), [protocol overview](https://github.com/simplex-chat/simplexmq/blob/stable/protocol/overview-tjr.md).

## What is different

SimpleX does not require a globally unique user identifier for communication. Its messaging layer uses recipient-created, one-way queues on routers; client software builds conversations on that transport. Routers are still part of the system. “No user IDs” does not mean no queues, addresses, local records or infrastructure. The protocol overview also discusses transport trust and traffic-correlation limitations; avoid translating its architecture into absolute anonymity claims. [Protocol overview](https://github.com/simplex-chat/simplexmq/blob/stable/protocol/overview-tjr.md).

**Design implication:** make the relationship and its local context understandable without introducing a global account or public friend graph.

## Connections are deliberate

People connect through invitation links, QR codes or optional reusable contact addresses. A reusable address receives requests and can be removed without destroying existing connections. Link sharing and verification are meaningful steps, not decorative onboarding. [Making connections](https://simplex.chat/docs/guide/making-connections.html).

**Design implication:** keep New connection discoverable. Distinguish a one-time invitation, a reusable address, an incoming request and an established conversation. Do not invent a global username search. Our demo search is limited to its fictional local conversations and messages.

## Identity is contextual

The app supports multiple locally stored profiles, hidden profiles and incognito connections with independently generated profile names. These are not interchangeable with a single universal account. [Chat profiles](https://simplex.chat/docs/guide/chat-profiles.html).

**Design implication:** “one list” must mean the appropriate authorised profile's list. Hidden profiles must not leak into search, catch-up, unread totals, draft badges or previews. Avoid merging relationships just because display names match. These protections are integration requirements; the browser study does not implement authentication or real profiles.

## Groups need real semantics

The secret-group guide describes accepting invitations, leaving groups and roles such as observer, member, admin and owner. It explains that messages/files are sent separately to members, with practical size constraints for secret groups. [Secret groups](https://simplex.chat/docs/guide/secret-groups.html).

**Design implication:** a plan is not automatically a new SimpleX group, a new permission mechanism or a shared database. First explore an object presented inside an existing conversation. New membership must use the actual supported invitation and role model. Any separate shared-plan feature needs protocol and maintainer review.

## Privacy includes the interface

The guide exposes security-code verification, database-passphrase controls, incognito and hidden-profile settings, plus network privacy options. The security policy describes review history and limitations. These sources do not certify our prototype. [Privacy and security](https://simplex.chat/docs/guide/privacy-security.html), [security policy](https://simplex.chat/security/).

**Design implication:** more visible messages create an on-screen disclosure tradeoff. Provide preview controls, respect lock states and notification preferences, and keep verification reachable. Expansion alone should not pretend to acknowledge every message as read. The website-colour variant demonstrates preview hiding and preserves unread counts during a preview; real acknowledgement must follow native app logic.

## Existing app structure matters

The iOS documentation describes SwiftUI views and state, a shared framework, notification/share extensions and a Haskell-core bridge. The Android/desktop documentation describes Compose Multiplatform UI, app state, theme components and native-core bindings. A browser prototype is a design reference, not code that can be dropped into those clients. [iOS development](https://github.com/simplex-chat/simplex-chat/blob/stable/apps/ios/README.md), [multiplatform development](https://github.com/simplex-chat/simplex-chat/blob/stable/apps/multiplatform/README.md).

**Future feasibility consideration:** if implementation is later explored, investigate the native presentation layer with existing state and navigation. Do not create a second message store or bypass existing send, read, authentication and permission handlers. See [the proposed integration plan](APP_INTEGRATION.md).

## Visual identity

The current website uses blues, cyan, white and pale-blue gradients, with some warm highlights. The [aligned menu](../prototypes/menu-simplex.html) adapts those observed colours to a legible conversation interface. The original petrol/sage study remains an alternative. Its proposed dark values are our adaptation, not sampled official app tokens. [Current website](https://simplex.chat/).

## What this changes in our thesis

The octopus analogy should help us ask how another set of foundations leads to another way of coordinating action. For SimpleX, that means local identity, deliberate connection and visible boundaries. It does not justify an eight-arm menu, global social graph, invented permissions or decorative biological shapes.

Our future-experience study explores a conversation list with contextual expansion as one hypothesis, not a proposal to rebuild the present app. Email, anchored shared-image discussion and new shared-plan objects remain future experiments until their fit is established. The next contribution should explain both the human benefit and compatibility with the real app.

## Expanded repository review

4 October 2026: [the project map](SIMPLEX_PROJECT_MAP.md) now connects the network/agent/application layers to our nine designs. It records the implications for invitations, local identity, groups, verification and native implementation, and distinguishes published plans from implemented features. [The mobile-surface audit](MOBILE_SURFACE_AUDIT.md) applies this learning to the layouts.
