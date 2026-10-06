# Supporting inline experiment — walkthrough and audit

> **Latest edit — [V2.1.2.3: photos, email and a home at scale](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/blob/main/docs/V2_1_2_3.md). Start here.** [See the whole story](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/showcase.html) · [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.3). Published 6 October 2026: photo pins and photo tools, email threads and forwarding, a home for 100+ conversations with one opening motion, and the homepage audit. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

Reviewed 4 October 2026. This is an agent-operated walkthrough of the published Chrome browser prototypes with fictional content, not participant research, native app testing or a SimpleX security assessment.

[Open the illustrated current-design tour](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/studies/current-design-walkthrough.html). [Machine-readable checks and capture hashes](current-design-walkthrough-check.json).

## Verdict

The current inline design demonstrates its strongest proposition: a relationship unfolds inside a coordinating list, and local tools preserve an unsent reply. The sharing review makes the email-to-chat boundary visible. The project does not yet demonstrate one complete, continuous application. Connection creation, groups and profile controls live in a separate comparative study.

## What was exercised

Eight mixed-menu entries and all four type filters; Maya draft retention across tools, folding and browser history; proposal sharing and duplicate-version prevention; sample image sending; security disclosure; public channel reading without a private composer; email draft retention, review cancellation, selected-detail sharing into Maya, queued cancellation and uncertain-outcome checking; preview hiding; Chalk/Charcoal switching; reload reset; connection creation, revocation and simulated acceptance; group joining/leaving.

The companion study additionally exercised image failure/retry and point annotation; observer membership without a composer; work-profile entries and search excluding personal Maya; reviewing security guidance without changing verification status. Other companion contexts were opened and captured, which is not a claim that every possible branch was tested.

## Findings and next iteration

[Published next steps and contribution opportunities](NEXT_STEPS.md).

| Priority | Finding | Consequence | Next design decision |
|---|---|---|---|
| High | New connection navigates from `unfold.html` into `experience.html`. The pages have separate state models. | The person leaves the coordinating surface; the demonstration does not prove inline draft continuity through connection creation. | Integrate invitation preparation, disclosure, pending and revoke states into the inline model, then test return to the original draft. |
| High | Inline group membership and profile management are absent. | The nine-context study cannot be treated as a complete inline implementation. | Preserve audience and role boundaries while designing these tasks locally in the coordinating surface. |
| High | All retained work lives in page memory and resets on reload. | A future real implementation would need explicit retention, recovery and sensitive-data rules. | Define draft lifetime and interrupted-session recovery before promising reliability. |
| Medium | Expanded image/email/tool content uses the same scroll area as the coordinating list. | Reading may push neighbouring relationships and actions off screen. There is no demonstrated software-keyboard layout. | Test the largest expanded states with real keyboards, text scaling and short screens; decide whether a stable action area improves orientation. |
| Medium | The inline menu has eight fixed fixtures, no search, unread filter or pagination. | Successful fixture navigation gives no evidence for large inboxes or prioritisation. | Compare realistic 50/500-entry scenarios, search, unread and return-to-position behaviour. |
| Medium | Inline images use one illustration and a one-send flag; there is no picker, camera, replacement, permission or retry flow. | A single simulated image is not a complete attachment experience. | Bring the companion failure/retry thinking into the inline model; design cancellation and new selections. |
| Medium | The security pane describes comparison but cannot perform it. | A visually reassuring state cannot establish trust. | Integrate actual native connection state only in implementation; keep invitation and verification distinct. |
| Medium | Public channels and email are speculative product models in this study. | Readers could confuse concept behaviour with available or committed SimpleX functionality. | Retain explicit audience/transport labels and verify capabilities against upstream before implementation. |

## Octopus rationale

The analogy is behavioural: the list coordinates, an active relationship unfolds, local tools retain their origin, and disclosure is chosen. The octopus and humans followed different evolutionary branches; this is not a claim that one is more evolved. The useful question is whether SimpleX’s distinct foundations can support a different experience. A curve or eight arms alone would not demonstrate that proposition. Current evidence supports local continuity inside one page; the connection handoff is where that proposition breaks down.

## Space, colour and limits

The captured 390 × 844 views use white private reading surfaces, pale blue channel cues and oat external email with neutral text. Additional 360 and 768 CSS-pixel widths had no document-level horizontal overflow in the inspected inline state. This is a limited geometry check, not a complete accessibility, text-scaling or contrast audit. Browser screenshots were inspected for proposal and sharing-review layout. Chalk and Charcoal were exercised; the other materials remain comparison studies.

No physical device, software keyboard, VoiceOver/TalkBack, real network, mailbox, permission prompt, cryptographic verification or human comprehension was tested. Email outcome transitions are deterministic simulations. A simulated accepted state does not prove recipient delivery. Capture chronology includes local simulated outgoing messages; none was delivered externally.

## Sources and reproducibility

The UI and behaviour observations come from the project’s published `unfold.html` and `experience.html`, generated from `prototypes/src/unfold.html` and `prototypes/src/experience.html`, `experience.js` and `experience.css`. Every tour image is a Chrome screenshot of a recorded local fixture state captured on 4 October 2026. The JSON records URLs, viewport, capture hashes and check time; hashes identify files, not ownership or validation.

Run `scripts/check-current-walkthrough.cjs`, then `scripts/check-companion-walkthrough.cjs`, with `PLAYWRIGHT_MODULE` and `BROWSER_PATH` set. Scripts simulate sending only in this independent browser study. Task checks reflect project-specific assertions. [Source register](SOURCES.md) supplies the broader anatomy, SimpleX and accessibility references; the tour does not add new biological or protocol claims. Original tour writing and screenshots are project material under CC BY 4.0, subject to the [licensing policy](../LICENSING.md).
