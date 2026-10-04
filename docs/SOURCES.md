# Sources, evidence and attribution

[Current-design walkthrough and audit](CURRENT_DESIGN_WALKTHROUGH.md) records 23 browser captures, exercised paths and unresolved integration gaps. [Capture/check evidence](current-design-walkthrough-check.json). Agent simulation; no participant or native-device validation.


Reviewed 4 October 2026. This register distinguishes external facts, original project thinking, implementation evidence and visual provenance. A citation supports the claim beside it; it does not endorse this concept or validate the whole product. [Documentation audit](DOCUMENTATION_AUDIT.md) · [asset register](ASSET_PROVENANCE.json) · [external-link check](source-link-check.json).

## Original project work

The project was initiated by [AustinWerner-KAI](https://github.com/AustinWerner-KAI) and developed through the originating conversation with AI assistance. “Design has no ego,” the octopus/network analogy, the five 2028 hypotheses, palette preferences, fictional scenarios and handoff design are project thinking—not scientific findings or quotations from Jony Ive. The conversation is the originating record; a complete public transcript is not included. [Thinking](THINKING.md), [decisions](DECISIONS.md), [iterations](ITERATIONS.md) and Git history preserve the public rationale and changes.

No external citation can prove a proposed interaction is better. Personas, design interpretations and recommendations are hypotheses unless actual participant evidence is supplied. No representative participant study is recorded.

## External facts and their limits

| Subject / supported claim | Source | Boundary |
|---|---|---|
| Octopus arm/nervous-system organisation; alternative sensing and movement structures | [University of Chicago research summary, 28 November 2022](https://biologicalsciences.uchicago.edu/news/unique-octopus-nervous-system) | Supports anatomy inspiration, not a messaging architecture or literal independent brains |
| Cephalopod skin colour and octopus texture changes | [Smithsonian Ocean, Fox Meyer, October 2013](https://ocean.si.edu/ocean-life/invertebrates/how-octopuses-and-squids-change-color) | Supports camouflage observation; deliberate UI disclosure is our interpretation |
| No required global user ID; recipient-created queues; protocol layers and limitations | [SimpleXMQ protocol overview](https://github.com/simplex-chat/simplexmq/blob/27a37387be98d9c7ec0e62373e125539675d0095/protocol/overview-tjr.md) | Project description, not an independent anonymity/security audit |
| Single-use invitations and reusable contact addresses | [SimpleX connection guide](https://simplex.chat/docs/guide/making-connections.html) | Native product semantics; our QR is only a study marker |
| Local profiles, hidden profiles and incognito | [SimpleX profile guide](https://simplex.chat/docs/guide/chat-profiles.html) | Prototype labels do not implement native authentication |
| Secret-group membership and roles | [SimpleX secret-group guide](https://simplex.chat/docs/guide/secret-groups.html) | Separate from public-channel delivery and speculative shared-plan objects |
| Security comparison and privacy controls | [SimpleX privacy/security guide](https://simplex.chat/docs/guide/privacy-security.html), [security policy](https://simplex.chat/security/) | No review of SimpleX can certify our independent browser study |
| Channels announced as v6.5 beta; relay content and participation differ | [30 April 2026 announcement](https://simplex.chat/blog/20260430-simplex-channels-v6-5-consortium-crowdfunding-freedom-of-speech.html), [channels overview](https://simplex.chat/docs/protocol/channels-overview.html), [pinned privacy policy](https://github.com/simplex-chat/simplex-chat/blob/479548ee53ffb73db73841e77acbeee5a78dbbd5/PRIVACY.md) | Rechecked 4 October 2026; do not imply private-message properties apply to public content |
| iOS SwiftUI/core integration; Android/desktop Compose structure | [iOS development](https://github.com/simplex-chat/simplex-chat/blob/479548ee53ffb73db73841e77acbeee5a78dbbd5/apps/ios/README.md), [multiplatform development](https://github.com/simplex-chat/simplex-chat/blob/479548ee53ffb73db73841e77acbeee5a78dbbd5/apps/multiplatform/README.md) | Architecture references; no native implementation or file-by-file upstream code audit |
| Semantic surface/foreground roles | [Android Developers M3 theming](https://developer.android.com/codelabs/m3-design-theming) | Supports token organisation, not the superiority of our hues |
| Colour-independent meaning; text/control contrast | [WCAG use of colour](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html), [text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) | 4.5:1 normal text; qualifying large text 3:1; applicable non-text information 3:1. Token checks alone are not conformance |
| Platform-specific accessibility baseline | [Android design accessibility](https://developer.android.com/design/ui/mobile/guides/foundations/accessibility), [WCAG 2.2](https://www.w3.org/TR/WCAG22/) | Native dp/pt and web CSS units are not interchangeable; physical-device validation remains open |
| Existing expressive/adaptive software design directions | [Apple Liquid Glass announcement, 9 June 2025](https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/), [Google expressive-design research](https://design.google/library/expressive-material-design-google-research) | Context for why appearance alone does not establish a 2028 innovation; their outcomes do not transfer to this study |
| Jony Ive’s historical Apple design contribution | [Apple, 27 June 2019](https://www.apple.com/newsroom/2019/06/jony-ive-to-form-independent-design-company-with-apple-as-client/) | Establishes historical context only. Our five principles are our interpretation; no Ive review, quote or endorsement is claimed |

Upstream repository citations were frozen to the two full commit IDs above on 4 October 2026. Website guides and policies remain mutable; an access date is not proof that their wording will remain unchanged. No reviewed source establishes a committed SimpleX email-integration release; email is a project hypothesis.

## Implementation and validation evidence

| Recorded work | Inspectable project evidence | Limit |
|---|---|---|
| Current inline state, tools and drafts | [inline source](../prototypes/src/unfold.html), [check-unfold](../scripts/check-unfold.cjs) | RAM-only local simulation, not networking or durable retention |
| Email boundary/outbox recovery | Same inline source, [email checks](../scripts/check-email-evolution.cjs), [state model](EMAIL_EVOLUTION.md) | Fixed fictional recipient/provider outcomes; no mailbox |
| Nine-context behaviour/navigation | [experience source](../prototypes/src/experience.js), [experience checks](../scripts/check-experience.cjs), [agency checks](../scripts/check-mobile-agency.cjs) | Browser routes and fixtures, not native state |
| Viewport geometry and spatial comparisons | [surface checks](../scripts/check-mobile-surface.cjs), [measurement script](../scripts/audit-mobile-space.cjs), [before](mobile-space-before.json), [after](mobile-space-after.json) | Historical scenario geometry, not participant performance; current content can change values |
| Sampled semantic contrast | [colour check](../scripts/check-colour.cjs), [results](colour-contrast.json) | 100 sampled token pairs, not every rendered state |
| V2/gallery refresh and contributor route | [iteration record](ITERATIONS.md), [contributor audit](CONTRIBUTOR_JOURNEY_AUDIT.md), Git commits `141daa0`, `61a36fa`, `8acdf02` | Some temporary capture/check scripts and terminal logs were not retained in the repository; historical pass counts are recorded session results, not freshly reproduced by this documentation audit |
| Build/export | [build script](../scripts/build-demo.mjs), [source map](CURRENT_UPLOADS.md) | Generated outputs must be rebuilt after source changes |

The documentation audit checks copy, citations and paths. It does not claim to rerun every historical interaction test. Retained scripts expose the method; dated reports record the runs and their limits.

## Visual and asset provenance

All nine concept boards are recorded as AI-generated explorations directed through the project conversation. [The catalogue](../visuals/catalogue.json) identifies them. Only the prompts for `five-designs.png` and `storyboard.png` survive in [image-prompts.txt](../visuals/image-prompts.txt); the earlier seven exact prompts are unavailable. Do not reconstruct missing prompts as originals or credit a named image model without a retained record.

PNG files under `visuals/previews` are recorded browser captures of project studies, including historical versions. They are not independent evidence of usability. [Current uploads](CURRENT_UPLOADS.md) identifies the active subset. The direction SVG and demo QR are project-authored assets; embedded coast illustrations live in prototype source. User-selected photos remain local and are not licensed as project assets by selection.

[ASSET_PROVENANCE.json](ASSET_PROVENANCE.json) inventories every file under `visuals`, its category and SHA-256 hash. Hashes identify files, not originality or legal ownership. Exact generation/capture dates and tools are not known for every earlier asset; those gaps remain explicit. Third-party names, trademarks, cited sources and any future contributed assets retain their own terms. [Licensing and suggested credit](../LICENSING.md).

## Citation rule for contributors

Cite a primary source beside factual claims; distinguish observation, inference and proposal. Pin upstream code references when practical. For original work, credit its creator and record the iteration; for images, give origin, licence and changes. For test results, retain the method, conditions and output when possible. Never convert an uncited claim, missing prompt or unavailable log into invented evidence.

## Contributor walkthrough method

[The walkthrough guide](CONTRIBUTOR_WALKTHROUGH.md) uses task-based observation and neutral prompts informed by [GOV.UK moderated usability-testing guidance](https://www.gov.uk/service-manual/user-research/using-moderated-usability-testing). Its short duration and three-person target are project decisions. [The pilot route record](contributor-pilot-check.json) describes an agent-operated browser check, not participant research. Human results remain uncollected.
