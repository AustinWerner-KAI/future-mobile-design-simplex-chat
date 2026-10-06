# Mobile surface audit — all nine designs

> **Latest edit — [V2.1.2.3: photos, email and a home at scale](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/blob/main/docs/V2_1_2_3.md). Start here.** [See the whole story](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/showcase.html) · [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.3). Published 6 October 2026: photo pins and photo tools, email threads and forwarding, a home for 100+ conversations with one opening motion, and the homepage audit. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

> Current reference, 4 October 2026: [shared design brief](DESIGN_BRIEF.md) · [evolution rationale](EVOLUTION_FROM_ANATOMY.md) · [visual progression](../studies/concept-progression.html). Dated audits and earlier palette proposals below remain iteration evidence.

4 October 2026. Audit and refinement of the complete experience. [Current study](../experience.html) · [Full-screen mobile study](../experience.html?mobile=1#home) · [Previous version](../prototypes/experience-v1.html).

## Finding

The first set was visually consistent but applied one fixed footer layout to every task. Short decisions had unnecessary distance between information and action, while the brand/profile/footer chrome consumed space that a mobile application should give to its task. Detailed explanations and test controls were also competing with real user content.

The solution is task-specific space allocation: a stable conversation composer; a complete image with local controls; a compact decision whose actions follow its content; and a list that can use recovered space for more real relationships. This applies **space follows attention**, and the octopus principle of coordinated local action, without filling short tasks with fabricated content.

## Method

Measured the same initial scenarios before and after, with the connection screen in its pending QR state. Baseline sizes: 390 × 844, 360 × 640 and a reduced 390 × 500 viewport. Values describe CSS geometry in Chromium, not physical millimetres or participant performance.

The measurement called “action separation” is the vertical distance between the final visible content block and its action region. “Body capacity” is the available scrolling region. It does not mean all of that area contains useful content. Card bounding boxes include their internal padding; we do not claim a percentage of semantic usefulness from those rectangles.

[Before measurements](mobile-space-before.json) · [After measurements](mobile-space-after.json) · `scripts/audit-mobile-space.cjs` reproduces them.

## Screen-by-screen findings and fixes

| Screen | Finding | Refinement | Remaining design question |
|---|---|---|---|
| Menu | Repeated brand/profile/footer reduced list capacity. Search and rows were otherwise compact. | One title/profile toolbar; study footer outside the app; retained two previews and readable rows. | The sample has only five conversations. Test much larger lists rather than stretching rows to fill space. |
| Chat | Source messages were separated from the composer; tool card was relatively large. | More history capacity, a smaller composer, latest context beside the reply field, explicit return with draft retained. | Compare the structured proposal tool with a plain message action. Test live keyboard and history position. |
| Image | Failure-test checkbox and explanation occupied app space. Fixed media limits could crop the image in landscape. | Scenario control moved outside; full image aspect preserved; caption sits outside the image canvas; details unfold on request. | Test real attachment selection, EXIF policy, very tall media and arbitrary annotation placement. |
| Proposal | A poetic title and repeated privacy descriptions inflated the form. The source disclosure target was too short. | Short task title, compact source/audience information, inspectable detail, 44px disclosure target. | Is the source and exact shared version understood without opening details? |
| Connection | Pending QR state sat far from acceptance/revocation controls; long payload text consumed the card. | Larger readable demo QR, concise pending state and actions immediately after the relevant content. | The simulated acceptance is a study action. Native invitation sharing and identity confirmation remain unimplemented. |
| Group | Recipient-facing role selector suggested choosing one's own privilege; fixed footer detached the decision. | Offered role shown as information; role scenario outside app; compact membership rows; adjacent join/decline. | Test role comprehension and larger member lists. Joining never implies plan agreement. |
| Privacy | Multiple explanatory blocks repeated profile context. | Single active-context summary, real preview control, optional explanations and nearby return. | Hidden previews are visual disclosure control; hidden-profile authentication must use native state. |
| Trust | Long explanation dominated the screen; an unnecessary gap separated it from the review action. | Contact and unverified state remain visible; comparison instructions unfold; review stays adjacent. | No real code is shown. Reviewing instructions must never imply verified cryptographic status. |
| Email | Subject and transport appeared twice, and the reply was separated from a short email. | One subject, explicit From/To, optional audience detail and reply directly after the email. | Email is speculative. Test long headers/threads and preserve the external-transport boundary. |

## Measured comparison at 390 × 844

| Screen | Measurement | Before | After |
|---|---|---:|---:|
| Menu | List body capacity | 566px | 673px |
| Chat | Content-to-action separation | 101px | 20px |
| Image | Content overflow beyond available region | 16px | 0px |
| Proposal | Content-to-action separation | 38px | 22px |
| Connection | Content-to-action separation | 119px | 22px |
| Group | Content-to-action separation | 52px | 22px |
| Privacy | Content-to-action separation | 45px | 20px |
| Trust | Content-to-action separation | 140px | 20px |
| Email | Content-to-action separation | 210px | 20px |

The menu's empty tail grows because it has more capacity and still only five fictional rows. That is a deliberate limit of the sample, not proof that the area is now occupied efficiently. The revised conversation layout also retains calm space before a short history, while keeping the latest relevant content beside its composer. Short decision screens retain space after completion controls rather than forcing the controls away from their content.

## Cross-screen corrections

- Removed repeated branding and the reset/simulation footer from the phone; study controls remain outside.
- Put the active profile beneath the task title so identity remains inspectable.
- Replaced the 580px minimum phone height with a dynamic viewport bound. At a 390 × 500 viewport the frame is now 472px, instead of exceeding the viewport at 580px.
- Added a full-screen mode with no decorative bezel or presentation panels, using the dynamic viewport and safe-area insets.
- Kept touch targets at least 44px tall, including disclosures; kept text inputs at 16px minimum in the normal treatment.
- Retained explicit send, acceptance and role restrictions. Sending retains composer focus; long conversation history remains scrollable.
- Preserved the first set and screenshots for comparison rather than replacing the iteration record.

## Verification and limits

Browser verification covers 81 palette/screen/width combinations and the decision paths, plus 90 normal/full-screen layouts across 360 × 640, 390 × 844, 430 × 932, 390 × 500 and 844 × 390. Nine independent 200% text stress cases scale text while keeping icon sizes stable. Long-message scrolling and retained composer focus are checked. Screenshots are regenerated from the refined study.

A reduced viewport models available height; it does not emulate a real iOS or Android keyboard. CSS text enlargement is a stress test, not a complete Dynamic Type implementation. Browser safe-area variables are supported, but real device insets, keyboard behaviour, screen readers and participant comprehension still need native testing. No accessibility-conformance or user-performance claim is made.

The [expanded SimpleX project review](SIMPLEX_PROJECT_MAP.md) records the architecture and source material behind these decisions. Its implications are design interpretation, not an upstream roadmap.

## Evidence and attribution

[Source, implementation-evidence and asset register](SOURCES.md). Project proposals and dated critiques are original interpretations; external facts, validation methods and visual provenance are distinguished in the register.
