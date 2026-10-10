# Receive, read, connect — pause, return, resume

10 October 2026. Independent design exploration for [SimpleX Chat](https://simplex.chat/), not an announced native feature or roadmap. The current full-app candidate remains V2.1.2.3.

[Interactive purpose and pause](../studies/intent.html?mobile=1) · [QR reader](../studies/connect.html?mobile=1) · [Rendered storyboard](../studies/connect-return-board.html) · [28 browser checks](connect-return-check.json).

## The experience

A QR invitation received on the phone should become something the person can act on there. They choose an image; it is decoded locally; the connection sheet asks them to continue and choose an identity. No second camera is needed. Recognition is automatic after a deliberate selection; connection is deliberate.

1. Open Saturday, then Maya. Edit the separate draft.
2. Tap Pause. Home shows a restrained return marker, without showing the draft text. Nothing is sent.
3. Open Connect. Choose a saved fixture QR image, or try the demo image.
4. Read the locally decoded invitation. Continue explicitly; choose Austin or Incognito (River Finch). Neither is preselected.
5. Simulate a connection and finish the demo. Sam is labelled unverified. Return adds Sam to the fictional recent contacts without attaching Sam to Saturday.
6. Resume Saturday. Maya's draft, selection, composer focus and saved reading position return. A paused message review returns to editing and must be reviewed again.

The standalone reader's link opens a fresh purpose page. Only the embedded Connect sheet carries the fictional Sam result to its already-open parent. One paused task is supported; a later pause replaces its marker. Closing or reloading loses all page-memory state. Durable recovery, multiple tasks and a native Share → SimpleX entry remain proposals.

## What exists, and what is proposed

**Implemented here:** local PNG/JPEG/WebP QR decoding using jsQR; explicit image selection; bounded file acceptance; fixture-only connection simulation; identity review; cancellation; own/unavailable fixture errors; a task-preserving modal sheet; Pause/Return/Resume; rendered images.

**Not implemented:** real SimpleX invite retrieval, connection transport, cryptographic identity verification, automatic acceptance, OS share extension, camera permissions, background clipboard/gallery reading or durable storage. Own-link and used-link detection are fixture rules, not protocol checks. This is client-owned demonstration code, not a security sandbox. Selecting a file gives this page access to that selected image; it does not grant a gallery-wide permission. Decoded external payloads are not displayed or retained in application state. Supported image size is under 4 MB and at most 16 megapixels; decoding itself is not a production resource-isolation boundary.

All three QR fixtures contain `sx-design-demo:invite:…` tokens and no working credentials. Other QR payloads, including real SimpleX invitations, stop at an error without opening their URLs. No identity is shared, messages sent or real contacts created. Local fixture image loading is the only fetch performed by the demo action.

## Upstream evidence and limits

[SimpleX's connection guide](https://simplex.chat/docs/guide/making-connections.html) documents links, QR invitations and optional contact addresses. Owner-side acceptance settings already exist; removing a same-phone scanning obstacle is a separate interaction problem.

[SimpleX's July 2025 protocol explanation](https://simplex.chat/blog/20250703-simplex-network-protocol-extension-for-securely-connecting-people.html) describes short links, profile choice and one-time invitation retrieval that locks the queue on first access. Consequently, the proposed native flow must not fetch an invitation merely because a QR is visible. Local image decoding and network retrieval are different steps. A profile preview is not proof of identity.

A partial source inspection at upstream commit `479548ee53ffb73db73841e77acbeee5a78dbbd5` covered the [Android scanner](https://github.com/simplex-chat/simplex-chat/blob/479548ee53ffb73db73841e77acbeee5a78dbbd5/apps/multiplatform/common/src/androidMain/kotlin/chat/simplex/common/views/newchat/QRCodeScanner.android.kt) and new-chat views. It does not establish whether every installed app already supports image import. Maintainers must confirm platform routes and protocol requirements. QR-from-image is an established technique; the contribution proposed here is its combination with contextual review and a coherent return to an unfinished task.

## Design and the octopus check

**Cross deliberately; Return coherently.** Humans and their relationships organise the experience. The octopus analogy supplies an extension that acts locally, then withdraws while preserving its source. The subtle rail, return marker and sheet express continuity without depicting tentacles or imposing animal anatomy on navigation. SimpleX supplies invitation and identity constraints; this browser model does not implement its protocol.

The pre-change purpose page has no Pause marker or QR sheet and fails these new journey checks. Research applied: `RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md` §9.1 F5/F6/F8/F11 and §10.1–10.4; `RESEARCH_NOTES/CHAT_SCROLLING.md` §6. T05 participant research, T21 privacy/storage decisions and native lifecycle work remain open. T33 completes only this exploratory slice.

Reverse or simplify if people confuse decoding with connection, think the marker is durable, cannot understand the active identity, or an ordinary invitation link/gallery import performs better. Compare against that simpler condition; no novelty or usability advantage has been established.

## Verification and visuals

28 automated browser checks cover real fixture-image decoding, cancellation, own/unavailable/unsupported inputs, explicit identity, a single simulated request, unverified outcome, embedded return, retained draft and selection, focus, independent purpose membership, renewed review, modal Escape, 320/390 CSS-pixel fit, reload clearing and JavaScript errors. The existing 35 intent checks cover other purpose/audience and layout behaviour. These are separate suites, not participant results. Screenshots were inspected for layout; the paused home was corrected to begin at its top rather than clipping the Connect control.

Physical phones, native keyboard/permission behaviour, assistive technology, large text, ordinary browser history inside the reader, multiple QRs, external QR rejection cases and protocol interoperability require further testing. There is no screen recording.

## Asset provenance and licensing

Original interface code is MIT; original design material and renders are CC BY 4.0. The vendored decoder `studies/vendor/jsQR-1.4.0.js` is unmodified npm jsqr 1.4.0 from [cozmo/jsQR](https://github.com/cozmo/jsQR), **Apache License 2.0**, with its own [license](../studies/vendor/jsQR-LICENSE.txt). It is an explicit third-party exception to the original-code licence. Fixture images were generated locally using qrcode 1.5.4 (MIT, [upstream](https://github.com/soldair/node-qrcode)); that generator is not shipped. The QR tokens, personas and interface captures are fictional original material.
