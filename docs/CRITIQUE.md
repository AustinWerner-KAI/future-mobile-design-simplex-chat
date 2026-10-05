# Supporting inline experiment — critique

> **Latest edit — [V2.1.2.2: identity, discovery and the shape scale](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/blob/main/docs/V2_1_2_2.md). Start here.** [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.2) · [V2.1.2.1 mockup gallery](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2121.html) (14 states, 4 October 2026). Published 5 October 2026: profiles and incognito, public channel discovery, email handoff to a chosen chat, one shape scale and a running mobile audit. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

[Current-design walkthrough and audit](CURRENT_DESIGN_WALKTHROUGH.md) records 23 browser captures, exercised paths and unresolved integration gaps. [Capture/check evidence](current-design-walkthrough-check.json). Agent simulation; no participant or native-device validation.


Reviewed 4 October 2026. This applies to [the current inline study](../unfold.html?mobile=1), its email handoff and the refreshed V2 comparison set. [The earlier combined-experience critique](CRITIQUE_EARLY_COMBINED.md) remains history. This is a design assessment, not participant research.

## What has progressed

The relationship list now coordinates private messages, public channels and external email. One relationship unfolds locally; tool changes retain its reply draft. Explicit review precedes sharing a proposal or email detail. The current light direction uses white, subtle blue materials, neutral lettering and oat email. V2 previews and the progression gallery reflect this direction.

## Questions contributors should challenge

1. **Density and scale.** The fixture has eight relationships, not hundreds. Compare search, long names, unread signals and locating a distant conversation. The current inline menu has type filters but no implemented search; the older list study does.
2. **Orientation after unfolding.** Opening an item brings it into view. Test whether this loses useful list context, especially on short windows and after Back.
3. **Audience comprehension.** Labels and materials distinguish private, public and external transport. Test whether people can explain the actual recipient and content before sharing. Colour is supporting evidence, not access control.
4. **Email identity mapping.** The handoff has a fixed fictional Maya destination. Real recipient selection, multiple accounts, threads and attachments need explicit design and engineering review.
5. **Recovery and retention.** Drafts survive local navigation in the current page session; reload clears them. Email queue and unknown-outcome states are simulated. Provider reconciliation, durable retention and lifecycle restoration remain open.
6. **Native and accessible input.** Browser checks do not prove native keyboard handling, Dynamic Type, VoiceOver/TalkBack, permission refusal or background resumption. Screen-reader evaluation remains necessary.
7. **Media and shared objects.** Proposal and image tools are hypotheses; anchored-image replies in earlier studies do not establish a production coordinate/accessibility model. Test source retrieval and editing rather than only the attractive object.
8. **Feasibility and privacy.** No real connection, verification, authentication or delivery occurs. Maintainers must assess protocol and native-client fit. Email must not inherit chat security by appearance.
9. **Evidence for the future claim.** A different evolutionary starting point and a fluid surface do not prove improvement. Compare task effort, draft loss, audience mistakes and recovery against V2 and a conventional flow.

## Evidence and limits

The recorded checks cover browser interactions, explicit sharing guards, draft isolation, navigation, sampled colour contrast and viewport fit. The V2 refresh checked 30 screen/window/appearance combinations. Gallery checks verified images, links and responsive fit. These are implementation checks; no representative participant results or full accessibility conformance are claimed. See [current uploads](CURRENT_UPLOADS.md), [inline evolution](INLINE_EVOLUTION.md) and [email evolution](EMAIL_EVOLUTION.md) for sources and state models.

Contribute a reproducible observation or a competing flow, name which version you tested and show what changed for the person. The [shared brief](DESIGN_BRIEF.md) and [design memory](DESIGN_MEMORY.md) explain what should survive and what remains a hypothesis.

## Evidence and attribution

[Source, implementation-evidence and asset register](SOURCES.md). Project proposals and dated critiques are original interpretations; external facts, validation methods and visual provenance are distinguished in the register.
