# Nine connected designs — space follows attention

> Current reference, 4 October 2026: [shared design brief](DESIGN_BRIEF.md) · [evolution rationale](EVOLUTION_FROM_ANATOMY.md) · [visual progression](../studies/concept-progression.html). Dated audits and earlier palette proposals below remain iteration evidence.

4 October 2026. Independent exploratory design for the future of simplex.chat. **Read the [design memory](DESIGN_MEMORY.md) first.** The octopus’s different evolutionary path is the central analogy for an interface growing from SimpleX’s distinct network and chat foundations.

[Interactive experience and storyboard](../experience.html) · [Structural wireframes](../studies/experience-wireframes.html) · [Prior reset study](../future.html)

## The person and the job

We are designing for someone moving between private conversations, an image, a small-group decision and separate personal/work contexts. Their job is to understand what needs a response, act without losing the source, and know who can see the result. This persona is an exploration assumption, not a validated research finding. The work is a high-fidelity browser concept, not a native implementation or development handoff.

## The connected journey

Create an invitation → inspect the disclosed identity → wait for acceptance → find the relationship → read multiple messages → retain a draft → review an image and its audience → send or retry → shape a private proposal → explicitly share a version → inspect a separate group invitation → accept or decline → return to the relationship.

The email branch is a separate future hypothesis. It retains external transport and explicit email recipients. It does not imply SimpleX currently provides this integration or that email inherits SimpleX security properties.

## What each design explores

| Design | Structural layout | Evolutionary interpretation | Decision or edge state |
|---|---|---|---|
| Your space | Profile → local search/filter → compact rows with two messages → context tools | Coordination without a public social graph | No results; hidden previews; drafts retained |
| Read & reply | Relationship → source messages → local proposal tool → anchored composer | Local action around a relationship | Empty send disabled; draft retained when leaving |
| Share an image | Audience → whole image → caption → explicit send | Local touch and whole-context understanding | Failed send retains selection; explicit retry; annotation point |
| Shape a plan | Source → private draft → included content → share version | Adaptable form growing from a question | Editing a draft never changes a shared snapshot |
| Make a connection | Disclosed profile → invitation QR → pending state | Deliberate disclosure | Incognito sample; revoke; acceptance simulation |
| Choose who joins | Separate group → members/role → join decision | Understandable boundaries | Decline; observer cannot send; leave clears local group draft |
| Control visibility | Active profile → preview control → return | Selective visibility | Profile-scoped contacts/search/drafts; no hidden-profile data |
| Inspect trust | Relationship → comparison status → explanation | Inspectable trust rather than decorative reassurance | Reviewing the process never marks a connection verified |
| Email, in context | Transport → exact sender/recipient → message → email composer | Adaptation without erasing meaningful differences | Empty send disabled; no automatic sharing to chat |

## Visual system and space

Charcoal, Chalk and Moss use the same component hierarchy. Content appears on a distinct surface; ember/clay/sand concentrate attention on an available action. The earlier blue direction remains recorded in the iteration history. State is always also expressed in text. The phone has a bounded height, with an internal scrolling content region. Conversation composers remain anchored; short decisions place actions beside their content. Study controls and repeated branding now sit outside the app surface. This still needs testing with native keyboards, safe areas, large text and screen readers.

The same source message, draft and audience survive moving to relevant tools. Earlier prototypes explored literal arms. This set explores their functional implication. The potential failure is becoming an ordinary screen-by-screen messenger again: test whether local actions actually feel continuous, and consider inline expansion if transitions cause loss of context. Do not call a pale card or curved corner “octopus-inspired” without explaining its behavioural purpose.

## What is real in this artifact

Nine designed contexts; three palette treatments; working local navigation; profile-scoped drafts; simulated explicit sends; image failure/retry; fixed proposal snapshots; invitation acceptance/revocation; group role restrictions; preview controls; local search; and inspectable source material.

All people, messages and membership are fictional. State stays in browser memory and resets on reload. The coast is an original SVG illustration. The QR is the existing demo marker, not a valid invitation. The image point shows one illustrative local annotation; arbitrary image selection and a full annotation editor are not implemented. No camera, native share sheet, keys, authentication, real persistence, networking, automatic interpretation, transport or delivery is implemented. The local profile split is not a security boundary. The offered group-role selector lives outside the phone as a scenario control, not permission for a recipient to change a real offered role.

## Questions for contributors

- **Continuity:** can someone leave a draft, inspect an image and return without losing their place? Compare with the earlier compact menu.
- **Audience:** can someone predict who sees the proposal and what remains private before sharing? Record misunderstandings, not just completion time.
- **Density:** do two previews per relationship help scanning or add noise? Test short, long, multilingual and large-text content.
- **Identity:** can people explain the difference between a local profile, an incognito identity and a group membership?
- **An alternative evolutionary path:** which behaviour follows from SimpleX’s actual architecture, and which is just an inherited convention? Propose a divergent version with the same task and evaluate both.

Bring a question, a change, a recording or prototype, and evidence. Preserve the earlier iteration and report what did not work. No participant testing or native engineering review has occurred; these are open design questions.

## Verification

Browser checks cover 81 combinations: nine screens × three palettes × widths 360, 390 and 1440. Checks cover horizontal fit and bounded containers, draft/send paths, image failure and retry, proposal snapshots, invitations, observer/member roles, profile separation, hidden previews, unchanged verification status and email simulation. Rendered screenshots form the storyboard. These checks do not establish accessibility conformance, native keyboard behaviour, security or usability outcomes.

Reproduce the browser checks with `node scripts/check-experience.cjs` in an environment with Playwright and its Chromium browser installed. `PLAYWRIGHT_MODULE` and `BROWSER_PATH` may point to an existing runtime and browser. The check refreshes the nine storyboard screenshots. Rebuild source changes first with `node scripts/build-demo.mjs`.

## Surface audit refinement

[The audit of all nine mobile surfaces](MOBILE_SURFACE_AUDIT.md) records per-screen critiques, measured comparisons, corrections and limits. [The expanded project review](SIMPLEX_PROJECT_MAP.md) grounds the refinements in SimpleX’s network, identity, invitation, group and native-client models. The [previous experience](../prototypes/experience-v1.html) is preserved.
