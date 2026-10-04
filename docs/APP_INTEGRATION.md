# How a future experience could belong in SimpleX

> **Current project reference — [V2: five designs](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2.html). Start here.** Selected by the project owner on 4 October 2026. Inline/unfolding, email and nine-context pages are supporting experiments; dated audits below retain their original scope.

> Current reference, 4 October 2026: [shared design brief](DESIGN_BRIEF.md) · [evolution rationale](EVOLUTION_FROM_ANATOMY.md) · [visual progression](../studies/concept-progression.html). Dated audits and earlier palette proposals below remain iteration evidence.

Future-fit considerations, 3 October 2026. The initiator clarified that integration means belonging within SimpleX, rather than adding external services. The purpose remains exploring the future experience, not reinventing today’s app. No upstream app code has been changed, no native build has been made, and no maintainer acceptance is implied.

## A possible future feasibility study

If the community later investigates implementation, an optional native chat-list experiment is one possible feasibility study, not the current project objective. Preserve the app's profile access, new-connection entry, group actions, settings and current full-conversation route. A row can reveal additional context locally; opening the full conversation remains available. Use the active authorised profile's existing data and theme preferences.

The [V2 menu variant](../prototypes/menu-simplex.html) shows the visual and interaction direction. It is a partial browser study; its present-app scope excludes the speculative email channel.

## Mapping to the native app

| Concept | Native integration requirement | Check before implementation |
|---|---|---|
| Single conversation list | Existing chat-list state and identifiers | Active profile only; no duplicate identity matching by display name |
| Two message previews | Existing authorised chat-item data | Privacy settings, deleted/disappearing items, blocked/hidden content, cost of loading history |
| Local expansion | Native row/detail state, with a stable chat identifier | View recycling, rotation, accessibility, full-chat navigation |
| Retained drafts | Existing composer draft mechanism | Profile/chat isolation, switching, background/termination and safe restoration |
| Unread filters and badges | Existing unread state/read acknowledgements | Previewing must not invent a read acknowledgement |
| Local reply | Existing send handler and message lifecycle | Read-only group roles, connection state, pending/failed delivery, retries |
| New connection | Existing invitation/QR/contact-address flows | Request versus accepted contact; incognito and verification |
| Theme variant | Existing semantic theme tokens | Custom themes, system appearance, high contrast and large text |

The current browser study demonstrates only some of these interactions with fictional data. The table is a handoff checklist, not a completed implementation.

## Platform entry points to inspect

For iOS, start with the documented ChatList and Chat views, ChatModel/ItemsModel and AppTheme. For Android/desktop, inspect the documented chat-list views, ChatModel and theme layer. Bind to the existing core-facing handlers; do not call the transport directly from a new UI component. These are proposed starting points based on the official development documents, not a file-by-file code review. [iOS](https://github.com/simplex-chat/simplex-chat/blob/479548ee53ffb73db73841e77acbeee5a78dbbd5/apps/ios/README.md), [multiplatform](https://github.com/simplex-chat/simplex-chat/blob/479548ee53ffb73db73841e77acbeee5a78dbbd5/apps/multiplatform/README.md).

## Foundations future experiments should respect

No new global identity, server-side conversation index or automatic merging of profiles. No external analytics on message content. No new permission model disguised as a curved boundary. Keep speculative features labelled separately from demonstrated current capabilities; email and new shared-plan objects need further exploration. Security-code verification, invitation state and group roles should continue to follow existing app flows. [Connection guide](https://simplex.chat/docs/guide/making-connections.html), [profile guide](https://simplex.chat/docs/guide/chat-profiles.html), [group guide](https://simplex.chat/docs/guide/secret-groups.html).

## Acceptance tasks

Find a chat in a long list; preview without falsely marking all messages read; switch profiles without leaking previews or drafts; reply with the right role and recipient; resume a draft after opening another chat; reach the existing full conversation; handle failed sending; test lock/unlock, notifications and share-extension entry. Include TalkBack/VoiceOver, 200% text, right-to-left labels, virtual keyboard, reduced motion and Android Back/iOS back gestures.

First explore and compare future experiences. If a direction earns further investigation, discuss a small native feasibility experiment with maintainers. Until that happens, this project publishes a proposal rather than an app integration.

## Evidence and attribution

[Source, implementation-evidence and asset register](SOURCES.md). Project proposals and dated critiques are original interpretations; external facts, validation methods and visual provenance are distinguished in the register.
