# From anatomy to interface — mobile agency audit

4 October 2026. Applies the `kings-of-mobile-design` framework to all nine current designs. This is a source and browser review, not participant research or native validation. Read the [design memory](DESIGN_MEMORY.md), [spatial audit](MOBILE_SURFACE_AUDIT.md) and [SimpleX project map](SIMPLEX_PROJECT_MAP.md) alongside it.

## Judgment

The set is a coherent exploration of privacy boundaries and local actions. Its future promise is only partly demonstrated. The list, composer and sequence of separate screens remain familiar. Curved surfaces and strong colour do not establish a new interaction model. The next advance should make the source, working object and return feel connected, while letting the person inspect disclosure before acting.

The octopus has a different evolutionary history from humans. SimpleX’s different network architecture gives us a reason to explore a different interface trajectory. This is a design analogy, not a claim that an animal is “most evolved,” that octopuses form human-like communities, or that SimpleX has biological properties. Distributed local action, adaptable form and selective visibility are useful prompts. They must earn their place through behaviour.

“Design has no ego” means the visual expression serves understanding and action. A sculptural interface that slows reading or obscures recipients fails that principle.

## Mobile brief

- Person: someone moving between private relationships, personal/work contexts and a small group; assumed, not researched.
- Job: find what needs attention, respond, develop a private thought and deliberately disclose a result without losing its source.
- Domain: sensitive communication, interrupted tasks and consequential identity choices.
- Platform: responsive mobile web study with a desktop exhibition. Native iOS and Android are future validation targets.
- Fidelity: interactive local simulation; no network, authentication or cryptographic operations.
- Primary journey: relationship → retained draft → local image/proposal → audience review → explicit action → return.
- Success to test: the person identifies the recipient and disclosed identity, distinguishes draft from shared material, and recovers the original task after an interruption.

## What the GitHub build actually is

The published repository and local source hashes were compared before this revision. `prototypes/src/experience.html` is a template; `experience.css` and `experience.js` supply its styles and behaviour. `scripts/build-demo.mjs` embeds both into the standalone root `experience.html`. GitHub Pages serves that generated static document. Editing the generated page alone would lose changes at the next build.

The JavaScript renders nine routes into one scene using an in-memory state object. Messages, captions, draft proposals, membership and acceptance are fictional browser state. Reload clears them. There is no SimpleX core, service worker, mailbox, backend or persistent draft store in this build. Earlier studies and their source remain available.

SimpleX itself is a separate codebase: SwiftUI and native integration on iOS, Compose Multiplatform for Android/desktop, with the chat core and protocol implementation beneath them. The design project is independent and does not inherit those implementations or guarantees. See the [primary-source project map](SIMPLEX_PROJECT_MAP.md).

The stylesheet retains rules from earlier studies followed by overrides. This helps preserve iterations but makes ownership and cascade harder to inspect. A future component/token extraction should follow stable interaction decisions, rather than introducing a framework to solve this audit.

## Findings and changes

| Priority | Finding | Resolution / remaining work |
|---|---|---|
| High | Every screen transition replaced the URL, defeating browser Back and Forward. | Routes now create history entries. Back/Forward restore profile, relationship, search/filter and list scroll. App Back follows the prior study route; a direct link has a safe fallback. Reset invalidates previous session context. History stores route context, never message or draft contents. |
| High | Sharing the same proposal repeatedly appended duplicate outgoing versions. | An identical title/day snapshot disables sharing; editing either enables a new version. A handler guard also prevents duplicate execution. This is local UI protection, not a network idempotency guarantee. |
| Medium | Textarea/select focus lacked the explicit editor treatment used by other controls; placeholder colour depended on browser defaults. | Editor focus is visible and placeholders use the muted text token in every palette. |
| High, open | Drafts disappear on reload or process loss. | Retained in-page drafts are demonstrated; durable local drafts, intentional clearing and restoration need a native storage/lifecycle contract. Do not describe the browser as resilient to app termination. |
| High, open | Delivery has only illustrative success/failure states. | Image retry is explicit. A real implementation must distinguish draft, queued, server acceptance, delivery and unknown outcome; retry must not invent success or duplicate a send. |
| High, open | Audience/context continuity depends on navigation between separate screens. | Identity and recipient labels are retained. Prototype inline object expansion and compare it with the current route model before selecting a future direction. |
| Medium, open | Sample lists and unread badges are static. | Two previews per relationship demonstrate density. Test many contacts, long names, large unread counts and acknowledgement rules; these fixtures do not prove scale. |

## All nine surfaces

| Surface | Effective use of space and agency | Challenge for the next iteration |
|---|---|---|
| Your people | Compact rows show two messages, local search and explicit active profile. Coordination remains readable without a literal arm diagram. | Static previews and counts cannot show evolving attention. Explore an explicitly controlled expanded relationship row; test whether it improves finding/responding rather than merely adding motion. |
| Read & reply | Latest context sits near the anchored composer; leaving retains words. Tools belong to the relationship. | The proposal tool still takes the person away from their words. Test source + object + composer in one adaptable surface, including a real keyboard. |
| Share an image | Whole-image aspect is retained, caption sits outside the image, audience precedes send. Failed send keeps selection for retry. | A sample SVG is not a photo pipeline. Native picker/camera permissions, denial, cancellation, compression and metadata choices need designed states. Point comments need discoverable labels and non-gesture access. |
| Shape a plan | Private editing and shared snapshots are separate. Source can be expanded. Duplicate unchanged versions are now blocked. | Clarify what counts as a revision and how recipients respond. A changed version is not an agreement. Compare inline expansion against this screen without inventing automatic acceptance. |
| Make a connection | Identity is shown before a demo invitation, pending is distinct from accepted, revocation is explicit. | Simulated acceptance is a study shortcut. Real QR scanning, camera refusal, invalid/expired links, contact requests and retries must remain distinct. Invitation QR and security comparison are different actions. |
| Choose who joins | Membership, offered role and plan agreement are separate. Observer cannot send. Study role selection sits outside the app. | Long member lists, ownership changes and rejoining need states. Leaving currently clears the local group draft: test whether this requires a warning or a recoverable discard. |
| Control visibility | Profiles scope contacts, search and drafts. Hiding previews reduces disclosed content without removing names. | Concealment is not locking. Native hidden-profile authentication, interruption and relocking require platform flows. Profile switching should restore each profile’s position consistently. |
| Inspect trust | Relationship-specific text retains “Not verified here”; reviewing never changes cryptographic status. | Real comparison, mismatch, changed connection and accessibility of security codes require native integration. Keep a meaningful outcome close to the action; colour is supplementary. |
| Email, in context | Sender, recipient and external transport are explicit; email is not silently shared into chat. | It remains speculative. Account choice, authentication failure, attachments, offline queue and disclosure into a conversation need separate decisions. No verified SimpleX email commitment is asserted. |

## Space and expression

The earlier surface revision removed repeated branding and moved study controls outside the phone. Short decisions place actions beside their content, while reading histories use remaining space and keep the composer anchored. Whole-image visibility takes precedence over decorative cropping. Empty space on a short list is honest; expanding five fixtures to fill the phone would not demonstrate efficient density.

Ink, Porcelain and Cobalt share hierarchy and semantic roles. Accent colour indicates an available action; text conveys state. The palette is more convincing than the early green study, but stronger saturation cannot supply missing interaction logic. Inspect text, control boundaries and focus contrast separately before an accessibility claim. Current web controls use CSS sizes; these are not proof of native 44-point iOS or 48-dp Android targets.

## Validation and limits

`node scripts/build-demo.mjs` rebuilds the publication. Browser checks cover navigation, contact/profile/draft recovery, scroll return, direct links, identical-version prevention and editor focus. Existing checks cover 81 viewport/palette/screen combinations, simulated decision paths, 90 mobile-surface combinations, enlarged-text stress and long conversation scrolling. These checks detect layout and implementation regressions; they cannot establish comprehension or desirability.

The 200% text stress is not Dynamic Type. Reduced viewport height is not a real mobile keyboard. Responsive browser screenshots are not native iOS/Android tests. VoiceOver, TalkBack, permission prompts, safe-area behaviour on devices, lifecycle restoration, network uncertainty and participant task completion remain unverified.

For native review use platform units and [Android accessibility guidance](https://developer.android.com/design/ui/mobile/guides/foundations/accessibility); for the web assess relevant [WCAG 2.2 criteria](https://www.w3.org/TR/WCAG22/) including focus, contrast, reflow and target size. Do not claim conformance from geometry checks alone.

## What contributors should build and test next

1. Fork the chat/proposal branch into an inline-expansion variant. Keep source, private draft, recipient and shared snapshot inspectable. Compare against the current separate-screen flow with interrupted tasks.
2. Write lifecycle and delivery state diagrams before adding visuals: draft → queue → uncertain/accepted outcome → explicit recovery. Include process death and profile switching.
3. Adapt one complete journey to SwiftUI and Compose using real keyboard, safe-area and accessibility behaviour. Preserve the protocol boundaries described in the research.
4. Ask participants to create an incognito invitation, draft a plan without sharing it, share one revision and return to an interrupted reply. Observe mistaken recipients, mistaken agreement, lost context and recovery; report evidence rather than a universal design score.

The future direction is promising if local actions become more understandable and recoverable as they expand. It still needs evidence that this different evolutionary path produces a better experience.
