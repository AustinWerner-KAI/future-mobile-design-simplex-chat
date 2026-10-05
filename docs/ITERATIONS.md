# The design journey — every step

> **Latest edit — [V2.1.2.1: complete interface mockup](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2121.html). Start here.** [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.1). Published 4 October 2026: 14 interface states and the community-test refinements. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

> Current reference, 4 October 2026: [shared design brief](DESIGN_BRIEF.md) · [evolution rationale](EVOLUTION_FROM_ANATOMY.md) · [visual progression](../studies/concept-progression.html). Dated audits and earlier palette proposals below remain iteration evidence.

## Start here: From anatomy to interface

![From anatomy to interface](../visuals/anatomy-to-interface.png)

A coordinating centre. Flexible arms. Local touch points.

This is the opening explanation for the project: how octopus anatomy suggested a different way to organise interaction. The mappings are design analogies, not a biological simulation or a production architecture.

The board was developed after several earlier sketches. We feature it first because it explains the idea; the record below preserves the actual progression rather than pretending this was the first image made.

## The visual iterations

### 1. Focus / Spaces / Threadline

**Question:** could we reduce attention pressure and make conversations easier to enter?
**Response:** prioritised replies, grouped spaces and conversation previews.
**Critique:** familiar messaging patterns with a new appearance did not establish a future interaction model.
**Next:** remove visual ego and simplify the structure.

![Focus, Spaces and Threadline](../visuals/focus-spaces-threadline.png)

### 2. Quiet index / Open spaces / Conversation lens

**Question:** what does organised, clean and generous with space mean in practice?
**Response:** quieter typography, fewer containers and clearer grouping.
**Critique:** cleaner, but still conventional; the user asked what actually made it modern or innovative.
**Next:** look outside the standard model and learn from nature.

![Quiet index, Open spaces and Conversation lens](../visuals/quiet-index-open-spaces-lens.png)

### 3. Tide / Branch / Clearing

**Question:** could natural organisation change how people navigate?
**Response:** attention as a shoreline, conversation topics as branches, shared objects as gathering places.
**Critique:** useful organisation ideas, but no single anatomical model yet unified the experience.
**Next:** explore the octopus specifically: flexibility, local sensing and selective visibility.

![Tide, Branch and Clearing](../visuals/tide-branch-clearing.png)

### 4. Rest / Touch / Return

**Question:** could capability appear exactly where someone acts?
**Response:** touch a conversation to unfold a local workspace; let it return to an overview.
**Critique:** the behaviour began to change, but the anatomy was still hard to see.
**Next:** make the connection between anatomy and interaction explicit.

![Rest, Touch and Return](../visuals/rest-touch-return.png)

### 5. From anatomy to interface

**Question:** how could centre, arms and contact points become a coherent interface?
**Response:** a coordinating anchor, branching conversations and local tool points along an active arm.
**Critique:** the analogy was clearer, but eight visible branches were only a prototype constraint. Scaling and accessibility remained open.
**Next:** test a complete journey instead of only the menu.

The opening board above shows this iteration.

### 6. A quieter kind of messaging

**Question:** how does the idea cover invitations, messages, photos, image replies and agreements?
**Response:** an eight-screen end-to-end flow.
**Critique:** the journey was more complete, but remained a conventional series of screens. It did not yet deliver the flow, creativity or 2028 vision requested.
**Next:** explore a continuous sculptural surface.

![A quieter kind of messaging](../visuals/quiet-messaging-flow.png)

### 7. A surface that reaches back

**Question:** what if the selected surface could reach, unfold and settle?
**Response:** Rest, Connect, Unfold and Share through supple folds and branching regions.
**Critique:** the direction became more expressive. It still needed readable navigation, reachable controls and a convincing interaction behind the appearance.
**Next:** connect the surface to five concrete messaging predictions.

![A surface that reaches back](../visuals/surface-study.png)

### 8. One surface. Five ways to connect.

**Question:** how does each prediction become a usable design?
**Response:** living present, local tools, shared image, visible boundary and quiet return in one family.
**Critique:** curved outlines alone did not earn the form; participant and invitation details also required correction.
**Next:** follow the behaviour through a complete story and inspect the weak points.

![Five design behaviours](../visuals/five-designs.png)

### 9. A connection becomes a shared world

**Question:** can a relationship remain recognisable throughout the journey?
**Response:** invite, accept, write, choose, send, touch, gather and return, with a movement study.
**Critique:** the phone stayed rectangular and the UI still relied on pages and pills. The key unresolved question was continuity of behaviour.
**Next:** perfect one real opening/closing interaction, then extend it.

![Integrated storyboard](../visuals/storyboard.png)

## The working iterations

### Shared messaging — early plan study

[Try the early shared-plan study](../prototypes/shared-plan.html).

Source messages become a proposal; the demo explores inviting Alex and a return reminder. Historical shortcuts automatically simulate recipient acceptance. This is useful process evidence, not the reference permission model.

### Your people — opening and closing

[Try the opening study](../prototypes/maya-opening.html).

The screenshot shown in the originating conversation belongs to this study. Touch Maya, write a draft, close and reopen. The same region expands and preserves the draft. Family and Studio are illustrative inactive entries.

### Your people — photo workspace

[Try the photo study](../prototypes/maya-photo.html).

Tools open locally, a selected image is reviewed before a simulated send, and a reply attaches to a point. The draft remains in place. Exact image-bound coordinate mapping still needs improvement when the preview is letterboxed.

### Combined experience

[Try the combined study](../prototypes/continuous-demo.html).

Invitations, plan membership, separate date decisions, source return and a labelled email scenario join the same environment. Real expansion origins, full reload restoration, large contact sets and production permissions remain unresolved.

### Combined experience — revision 02 / alignment and anatomy

The initiator’s browser screenshot exposed a clipped composer, a repeated message preview and an oversized expanding form. The [audit](PROTOTYPE_AUDIT.md) records the mismatch with the anatomy model. The revision adds a coordinating centre and distinct paths, contains the workspace inside one phone viewport, and scrolls tools within the active arm. Compare the [previous version](../prototypes/continuous-v1.html) with the [revised study](../prototypes/continuous-demo.html). Actual rendered previews replace the old combined preview; the conceptual boards remain historical references.

### One list, many conversations — menu study

The initiator asked for multiple messages in one list. The [working menu](../prototypes/menu-list.html) shows seven conversations, two message previews per conversation, search and All / Unread / Groups filters. A conversation opens locally and keeps an in-memory draft. It tests whether a familiar organising structure can support a different interaction journey. The evolutionary analogy informs behaviour; it does not require a radial menu. Next: compare this list with the coordinated-path home using the same tasks.

### List menu — continuity revision

One conversation now unfolds at a time while the surrounding list stays in place. Switching to another relationship closes the previous workspace without clearing its draft. Collapsed rows show a draft marker; recent-message previews update after a simulated send. The message history scrolls within the open region. Search and filters close a workspace that falls outside the results, preserving its draft. Keyboard and reduced-motion routes remain available. [See the actual open-menu screenshot](../visuals/previews/menu-list-open.png). Checks passed for one active workspace, switching/filter draft retention, draft markers, updated previews, keyboard controls, reduced motion and horizontal fit at 360, 390 and 1440 pixels. Compare the [first list study](../prototypes/menu-list-v1.html) with the [current menu](../prototypes/menu-list.html).

### V2 — five studies shaped by SimpleX

The initiator asked for the website palette, integration into the existing app, deeper research and application of privacy/QR concepts. [The five studies](../v2.html) now cover the list, deliberate invitation, profile privacy, trust review and group membership. Colour and behaviour changes are explained in [the research](SIMPLEX_RESEARCH.md) and [integration proposal](APP_INTEGRATION.md). The sample QR encodes a design-study marker; no real invitation, keys, delivery or authentication are implemented. Browser checks passed for all five studies at 360, 390 and 1440 pixels, light/dark appearance and the main simulated decision paths. Native feasibility, large-contact performance and participant testing remain open.

### 2028 reset — behaviour and colour

4 October 2026. The initiator challenged V2 as too contemporary and its colouring as weak. [The reset audit](2028_DESIGN_RESET.md) questions the premise, considers seven directions and defines five testable goals. [The new experience study](../future.html) follows one intention through five moments, comparing Ink + signal, Porcelain + blue and Cobalt + ice. The octopus informs local action, coordination and continuity. Colour separates structure, content and action. This is a directed hypothesis with simulated membership, not evidence of usability or protocol feasibility. Earlier designs remain available for comparison.

## What the record means

The critique above summarises the originating conversation; it is not user-study evidence. The opening analogy, visual generation order and working-prototype order are distinguished deliberately. All generated boards, all available working studies and the structural wireframes are linked from the [concept library](../concepts.html).

Next contributions should add the question, response, evidence, critique and resulting decision to this record. Preserve earlier directions rather than silently replacing them.

### Mobile space refinement

The initiator questioned the presentation-like use of mobile space. The future study now uses a bounded viewport with internal content scrolling, smaller headings, tighter spacing and five visible conversations at 390 × 844. Touch controls retain at least 44-pixel height. The expanded source card still trades list density for context and should be compared with the compact menu. The new list rows beyond Maya remain illustrative, not implemented conversation routes. [Mobile preview](../visuals/previews/future-mobile.png). Responsive stage and decision-path checks passed again.

### Nine connected contexts — a different evolutionary path

The initiator approved the denser direction and asked to design the full set, then reaffirmed the octopus evolutionary analogy as the project’s central idea. [The complete experience](../experience.html) applies the hierarchy across nine contexts and three palettes, with working local decision states and a rendered storyboard. [Design memory](DESIGN_MEMORY.md) makes the premise durable for contributors; [the specification](COMPLETE_EXPERIENCE.md) records limitations and questions. Earlier work remains intact.

### Mobile surface audit — task-specific space

The initiator requested an audit of all nine screens and a deeper review of the SimpleX GitHub organisation. [The surface audit](MOBILE_SURFACE_AUDIT.md) records repeated chrome, disconnected actions, explanation-heavy layouts, reduced-height fit and image cropping. The revision keeps conversation composers anchored, brings decision controls beside their content, preserves whole images and moves scenario apparatus outside the app. [The project map](SIMPLEX_PROJECT_MAP.md) records the architecture and semantic implications. [The previous design set](../prototypes/experience-v1.html) remains available; [full-screen mode](../experience.html?mobile=1#home) allows direct surface evaluation. Native-device and participant evidence remain open.

## V2 visual alignment and shared brief — 4 October 2026

All five baseline studies and their gallery now follow the approved white canvas, subtle blue materials, neutral lettering and clay actions. Their original screen responsibilities remain available for comparison with the inline evolution. Refreshed all five previews. Expanded the [shared brief](DESIGN_BRIEF.md) to cover project purpose, audience hypotheses, design rules, technical scope and contribution paths, with an [editable SVG direction board](../visuals/design-direction.svg). Previous colour treatments remain in Git history. Browser checks covered 30 screen/window/appearance combinations at widths 360, 390 and 844 CSS px; no horizontal overflow or saturated blue lettering was detected. Six sampled light/dark text pairs exceeded 4.5:1. These are limited implementation checks, not native or participant validation.

## Concept imagery and narrative reconciliation — 4 October 2026

The concept gallery and [progression page](../studies/concept-progression.html) now place every original board beside five refreshed V2 previews and current inline/email imagery. Original bitmaps remain labelled history rather than being repainted. Every design document points to the current shared brief, rationale and progression; current language replaces stale website-blue descriptions. The [evolution rationale](EVOLUTION_FROM_ANATOMY.md) distinguishes biological evidence from the network analogy and maps each inspiration to behaviour, a concrete expression and a limit. The next contribution should test a task consequence rather than defend a visual style.

## Contributor journey audit — 4 October 2026

The README now leads to the current inline experience and a numbered reading route. Added [current uploads](CURRENT_UPLOADS.md) with status, previews and sources, corrected contribution instructions and welcome text, and separated [the current critique](CRITIQUE.md) from [the historical combined critique](CRITIQUE_EARLY_COMBINED.md). [The audit](CONTRIBUTOR_JOURNEY_AUDIT.md) records discoverability gaps, fixes and verification limits.

## Documentation accuracy and provenance audit — 4 October 2026

Corrected stale current-palette language, labelled superseded decisions, pinned upstream repository citations and added [the source register](SOURCES.md), [visual provenance](ASSET_PROVENANCE.json) and [documentation audit](DOCUMENTATION_AUDIT.md). Kept original ideas separate from external facts and historical browser-run records. Missing original prompts/logs remain explicit; the documentation audit does not claim to reproduce every earlier test.

## First contributor walkthrough — 4 October 2026

Ran an agent-operated check of the published README → progression → current inline experience → uploads → contribution guide. Added direct proposal/challenge routes at the end of the progression and direct issue-form links in the contribution guide. Published [six neutral tasks and an observation sheet](CONTRIBUTOR_WALKTHROUGH.md). Human sessions have not started; the route check is recorded separately and is not participant evidence.

## Evidence and attribution

[Source, implementation-evidence and asset register](SOURCES.md). Project proposals and dated critiques are original interpretations; external facts, validation methods and visual provenance are distinguished in the register.

## Complete current-design walkthrough — 4 October 2026

Published the [illustrated tour](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/studies/current-design-walkthrough.html) and [audit](CURRENT_DESIGN_WALKTHROUGH.md), with 23 recorded browser states and reusable checks. The review confirms local draft continuity and explicit email handoff in the simulated paths, while exposing the separate connection/group/profile models and incomplete attachment lifecycle. No new design direction or participant evidence is implied.

## Published next steps — 4 October 2026

[Three open priorities](NEXT_STEPS.md): inline connections/groups/profiles, draft recovery and complete image handling, and physical-phone sessions with real designers. Published as contribution opportunities, not completed capabilities or a release schedule.

## Current-reference decision — 4 October 2026

Historical decision, superseded for navigation by the later V2.1.2.1 latest-edit decision: the project owner selected [the V2 gallery](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v2.html) as the project reference at that stage. It was then the primary review, navigation and contribution destination. Keep inline/unfolding, email and nine-context experiments accessible as supporting work. Earlier audits describe the scope reviewed on their dates; they retain their original scope. This is a reference/status change, not new functionality or validation.

## V2.1 begins — 4 October 2026

Added a relationship-led home with grid/list favourites and recent activity, local entity workspaces, provider chat/email boundaries and same-page invitations. [V2.1 brief](V2_1.md) records scope and limits; V2 is the earlier reference baseline. No participant research is claimed.

## V2.1 continuity and identity fixes — 4 October 2026

Corrected cleared proposals restoring default text, the extra history entry from on-screen Back, and Studio displaying Harbour Café’s email. [Targeted check record](v21-fix-check.json); [updated V2.1 brief](V2_1.md). Existing avatar initials contain no scannable connection data.

## Three V2.1 options — 4 October 2026

Added V2.1.1 grid, V2.1.2 compact favourites strip and V2.1.3 user-arranged collections. Distinct icon structures and text labels separate individuals, groups, publications and providers in each option. [Compare the directions](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21-options.html). These are candidate layouts; V2 is the earlier reference baseline.

## Playable comparison and grid rationale — 4 October 2026

Made the refined V2.1 candidates playable inside the comparison gallery and linked them from the project landing page, concept index, progression and walkthroughs. Added [why grids](WHY_GRIDS.md): a design hypothesis with explicit trade-offs and a participant comparison plan, not a claim that grids are universally better. Existing historical work remains available.

## Small-community flow and task tracker — 4 October 2026

Added a [complete fictional journey](../studies/community-journey.html): Maya → reviewed title to Family → provider email → reviewed excerpt to Family → retained Maya draft. The [todo record](NEXT_STEPS.md) now uses stable IDs and evidence-linked completion. Session test ticks are manual and temporary; human testing remains open. [Flow and limits](COMMUNITY_JOURNEY.md).

## V2.1.2.1 — response to manual test

Preserved the restarted live-browser run and 23 captures in the [detailed manual report](COMMUNITY_MANUAL_TEST.md). Refined the compact community journey with one destination, valid default review, coherent dates, shorter local panels and focused testing. [Mockup](../v2121.html) · [fix evidence](community-ux-fixes-check.json). T13–T18 are tracked; real-phone/human testing remains open.

## V2.1.2.1 complete interface publication — 4 October 2026

Expanded the candidate mockup from two detail screens to fourteen actual interface states, with context links and instructions. Shared fixes remain in the common V2.1 runtime. Corrected Family’s proposal default to Saturday in the community scenario. Earlier variants and V2 reference remain available. [Gallery](../v2121.html) · [Capture and viewport evidence](v2121-interface-check.json). Agent browser checks are not participant or native-device validation.

## V2.1.2.1 documentation corrections — 4 October 2026

Resolved remaining V2 priority statements in the upload index, design memory, evolution rationale and decision history. Registered the latest captures and test evidence in SOURCES, and clarified that the complete mockup covers the implemented candidate only. Checked 542 relative file links with no missing targets; external destinations and section anchors were not revalidated. No interaction tests were rerun for these copy-only changes.

## T11 general email handoff — 5 October 2026

The email detail no longer goes to a fixed chat. The person chooses Maya, Family, Alex or Book club, reviews the exact text, audience and identity, then shares or cancels. Same text to the same chat is blocked. Book club now shows its own sample members. [Record and limits](T11_EMAIL_HANDOFF.md). The V2.1.2.1 gallery captures are kept as the pre-T11 record. Mobile audits and their fixes: [running audit log](MOBILE_AUDIT_LOG.md).
