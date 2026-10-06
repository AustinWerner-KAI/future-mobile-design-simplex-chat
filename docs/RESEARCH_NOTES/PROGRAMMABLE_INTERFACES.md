# Research: programmable interfaces

Interfaces generated or delivered for one person in one situation, inside a conversation. Literature, protocols, design patterns, trust, accessibility, evaluation, and the history of chat as an operating system. Compiled 6 October 2026 for the SimpleX mobile design study. It explores programmable interfaces, including AI prompts, contexts and skills that reply in interfaces, as a design direction for SimpleX. It describes no SimpleX plan.

Confidence note: about 90 sources were read by research agents. A few arXiv identifiers and venue years did not cross-check cleanly and are cited as reported. Industry posts and personal blogs are marked as such.

---

## 1. The finding in one paragraph

The field has converged on a two-tier answer. **Tier one:** the author sends UI as data. It is a JSON description that references components the client already owns, and the client renders them natively. **Tier two:** for richer apps, the author sends a sandboxed bundle that the user explicitly accepts. Every serious system mediates what the UI can send back through a small, typed action set. What nobody has solved is **provenance**: telling the viewer who made this surface, what shaped it, what it can do, and that it is not the host's own chrome. That problem gets harder without a central reviewer. SimpleX has no central reviewer by design, so the frame around a programmable interface is the unclaimed design problem. The six flow rules of the octopus theory are already the right vocabulary for it.

---

## 2. The landscape: who ships what

### Three levels of generation

| Level | What crosses the wire | Examples | Trade-off |
|---|---|---|---|
| **Constrained** | A tool call, mapped to a hand-built component | Vercel AI SDK UI, Claude AskUserQuestion, Google AI Mode chips | Safe and consistent; little flexibility |
| **Declarative** | JSON or a DSL describing components from a client catalog | Google A2UI, Vercel json-render, Thesys OpenUI Lang, Slack Block Kit, Adaptive Cards, Discord Components v2, Telegram Rich Messages | Nothing executable crosses; limited to the catalog |
| **Open-ended** | HTML, CSS and JS | MCP Apps, OpenAI Apps SDK, Gemini Dynamic View, Claude Artifacts, Telegram Mini Apps, Discord Activities, webxdc | Unlimited; XSS, spoofing and leakage risk |

### The protocols, October 2026

| System | Shipper | UI model | Who authors | Safety model | Open? |
|---|---|---|---|---|---|
| **MCP Apps** (stable 26 Jan 2026) | MCP / Agentic AI Foundation; Anthropic and OpenAI co-authored | HTML in sandboxed iframe, JSON-RPC over postMessage | Developer, pre-declared template | Host builds CSP from declared domains, separate sandbox origin, per-server consent, every UI-initiated tool call mediated and logged | Open spec |
| **OpenAI Apps SDK** (Oct 2025) | OpenAI | MCP Apps plus `window.openai` | Developer | Central review, directory, no alert/confirm/clipboard inside widgets | Protocol open, store closed |
| **A2UI** (v0.9, v1.0 due Q4 2026) | Google | Declarative JSONL from a client-advertised catalog | **Model at runtime** | "Nothing executable crosses the boundary"; client validates and renders natively | Open, Apache 2.0 |
| **Gemini Dynamic View** (Nov 2025) | Google | Model-generated code | Model | Google's own runtime | Closed |
| **AG-UI 1.0** (30 Sep 2026) | CopilotKit | Event stream that carries A2UI, MCP Apps and others | Depends on payload | Delegates | Open |
| **json-render** (Jan 2026) | Vercel Labs | Model JSON within a catalog | Model | Catalog constraint | Open |
| **OpenUI** (2026) | Thesys | Compact model DSL within a catalog | Model | Catalog constraint | MIT framework |
| **Adaptive Cards / Block Kit / Components v2** | Microsoft / Slack / Discord | Declarative JSON, native render | Developer | No script; admin or marketplace review | Vendor |
| **Telegram Rich Messages** (Jun to Aug 2026) | Telegram | Declarative blocks, streaming | Developer or bot | Centralised | Vendor |
| **Telegram Mini Apps / Discord Activities** | Telegram / Discord | Hosted web view | Developer | Permission prompts, signed launch data | Vendor |
| **Matrix widgets** | Matrix Foundation | Hosted iframe | Developer | Capability requests approved by user, remembered per URL | Open, still outside the stable spec since 2018 |
| **webxdc** (Delta Chat, Cheogram; MSC4211 for Matrix) | Community | **Bundled HTML sent as a chat message**, no network at all | Developer, distributed peer to peer | Offline sandbox; state syncs as E2EE messages | Open |
| **Apple App Intents snippets** (iOS 26/27) | Apple | SwiftUI archived and system-rendered | Developer | Sandbox, App Store, Siri confirmation | Vendor |
| **Android AppFunctions** (alpha) | Google | No UI; the agent renders typed data | None | Privileged OS permission | AOSP API |

### Where it is converging

1. **One iframe standard for hosted apps.** MCP-UI and the OpenAI Apps SDK now build on MCP Apps. Microsoft hosts the same widgets in M365 Copilot.
2. **UI as data for most of what a model writes.** A2UI, json-render, OpenUI, Open-JSON-UI and Telegram Rich Messages all have the author pick from a catalog the client owns.
3. **Chat platforms add native agent blocks** (Slack cards, carousels and streaming blocks; Telegram Rich Messages; Discord Components v2) rather than handing bots a web view.
4. **Operating systems expose apps as functions, not surfaces.** Android AppFunctions and Apple App Schemas let the assistant own the rendering.

### Where it is splitting

1. **Who writes the UI:** developer ahead of time, model within a catalog, or model writing free code.
2. **Format wars inside the catalog camp:** A2UI JSONL, json-render JSON, OpenUI Lang. Several v1.0s land in Q4 2026; none dominates.
3. **Open protocol, closed distribution:** every major host keeps a gatekeeper. Only Matrix widgets and webxdc run without a reviewer.
4. **Hosted versus bundled:** almost everything assumes a developer server. webxdc is the one offline, bundled model.
5. **E2EE is unsolved in the mainstream protocols.** MCP Apps, Apps SDK, Block Kit, Telegram and Discord all assume a server that sees content.

---

## 3. What the research literature says

### The flagship result

**Leviathan, Valevski et al., "Generative UI: LLMs are Effective UI Generators", Google Research, arXiv 2604.09577, submitted 24 Feb 2026.** The figures below are from the paper body; the abstract states only "overwhelmingly preferred" over markdown and comparable to experts in 50% of cases. A modern model with the right system prompt, tools and post-processors produces a working interface for almost any prompt. Broken outputs fell from 60% on Gemini 2.0 Flash-Lite to 0% on Gemini 3. Raters preferred it 82.8% over markdown and 90% over top search results. Against expert-built sites it was comparable in about half of cases. Failure modes it names:
- generation takes a minute or two
- hallucinated content inside a plausible interface is "a critical failure"
- no accessibility evaluation was reported

### Academic systems, and the patterns they reveal

| Work | Contribution | Finding that matters |
|---|---|---|
| **DynaVis** (Vaithilingam et al., CHI 2024) | Do the edit, then leave a widget behind | 23 of 24 preferred it. Synthesising a widget was more reliable than letting the model edit the artefact |
| **BISCUIT** (Cheng et al., Apple, 2024) | Ephemeral UIs between prompt and code | Experts found them in the way when goals were clear. Generation should be optional |
| **Generative and malleable UIs** (Cao, Jiang, Xia, CHI 2025) | Generate a task data model; map UIs from it | The model, not the code, is the durable artefact |
| **TaskArtisan** (Chen, Pavel, CHI; year not confirmed, arXiv 2607.17394) | Composable generated widgets | Repeat tasks faster; generated widgets felt "final" and hard to edit |
| **Elicitive UIs** (Kim, Xia, Min, Kim, CHI 2026) | Preference marks inside the generated UI | 63% of preferences surfaced only after users saw an option. Individual variation exceeded task variation |
| **Maru** (Kim et al., UIST 2026) | Persistent information architecture across generations | Approval held at 61 to 74% over sessions; the baseline collapsed to 33% |
| **Semantic guidance** (Park et al., CHI 2026) | Norman's two gulfs for UI generation | Named **semantic drift**: successive edits pull a design away from intent |
| **Spatula** (Li et al., UIST 2026) | In-place controls synthesised from code | Predicting user scope "proved difficult" |
| **Interface of Theseus** (Bernstein, UIST 2026 adjunct) | Just-in-time interfaces | Designers become meta-architects. Inconsistency and learnability are the central objection |
| **Malleable Software** (Litt et al., Ink & Switch, 2025) | Gentle slope from user to creator | "AI code generation alone does not address all the barriers to malleability" |

### The foundations it all re-discovers

| Work | Why it still matters |
|---|---|
| **CAMELEON** (Calvary, Coutaz et al., 2003) | Four levels: task, abstract UI, concrete UI, final UI. Every current intermediate-representation approach is this ladder with a model doing the mappings |
| **Puerta & Eisenstein** (1999) | "The mapping problem": the hard part is the mappings between models. Models are now the mapping engine; the problem has changed form, not gone |
| **Myers, Hudson, Pausch** (TOCHI 2000) | Why 1990s generation failed: high threshold, low ceiling, unpredictable results, designers losing control. The checklist for GenUI claims |
| **SUPPLE** (Gajos, Weld, Wobbrock, 2010) | Per-person generation beat hand design for users with motor impairments. **The strongest evidence that per-person UI can win, and it came from accessibility** |
| **Gajos et al.** (CHI 2008) | Accuracy mattered more than predictability for adaptive UI |
| **Findlater & McGrenere** (CHI 2004) | Adaptable (user-controlled) beat adaptive; adaptive was no faster than static |
| **Horvitz, mixed-initiative principles** (CHI 1999) | Weigh the cost of being wrong; let the user invoke, dismiss and repair |

---

## 4. The design cues: patterns that recur across all of it

Twenty patterns. Each cue names where it comes from and how it lands on SimpleX.

### What gets generated

| # | Cue | Evidence | For SimpleX |
|---|---|---|---|
| 1 | **Catalog, not code.** Authors compose from components the client owns | A2UI, json-render, OpenUI, Block Kit; Google Cloud trade-off note | The client's shape scale, palette and type become the catalog. Every programmable interface inherits the design language and accessibility for free |
| 2 | **Template declared up front, data at runtime** | MCP Apps pre-declared `ui://` templates | A bundle is reviewed once on acceptance, then fed data |
| 3 | **Small widgets in the flow, not whole screens** | NN/g 2026 field examples; Cloudscape in-flow input | Fits "act locally": the interface unfolds inside the reply, beside the content |
| 4 | **Generate controls, not just answers.** Leave a widget behind | DynaVis, TaskArtisan, Spatula | A booking reply leaves a control the person can adjust without asking again |
| 5 | **Persistent intermediate representation, ephemeral pixels** | CAMELEON, Cao et al., Maru | The interface can be disposable; the state it produces is a message, kept like any other |
| 6 | **Stream with an explicit state** | Cloudscape loading states; Google GenUI | Honest states again: generating, ready, failed |

### Control and recovery

| # | Cue | Evidence | For SimpleX |
|---|---|---|---|
| 7 | **Adaptable over adaptive.** The person controls the adaptation | Findlater & McGrenere; Horvitz | Never re-arrange someone's home silently. Already a project rule |
| 8 | **Scope every change; pin what must not change** | Semantic drift (Park); scope ambiguity (Kim) | An interface may only change itself, never the conversation around it |
| 9 | **Plan before acting, receipt after** | Nielsen 2026; HAX G16; Cloudscape authorised actions | This is the deliberate crossing. Review what leaves, to whom, by which transport; then a receipt |
| 10 | **Design the wrong answer** | EL Passion; PAIR | Every interface needs a failed state and a way back, like the bounce states in issue #6 |
| 11 | **Point and regenerate** | HAX G9; EL Passion | Select one part and ask again; do not regenerate everything |
| 12 | **Show alternatives; people recognise rather than describe** | Nielsen "intent by discovery"; Elicitive UIs (63%) | Offer two shapes of an interface, not a blank prompt |

### Marking and trust

| # | Cue | Evidence | For SimpleX |
|---|---|---|---|
| 13 | **Mark every generated or third-party surface** | IBM Carbon AI label; Atlassian Rovo; EU AI Act Art. 50 (in force 2 Aug 2026) | A sender mark on every interface, distinct from the host's own chrome |
| 14 | **Explain in layers** | Carbon explainability popover; PAIR | Tap the mark to see who sent it, what it can do, and what it touched |
| 15 | **Never imitate the host** | MCP Apps "clearly indicate sandboxed UI boundaries"; WeChat rejects mini programs that mimic WeChat UI; OpenAI blocks alert/confirm | Programmable interfaces may not use the clay rule. That material stays reserved for the client's own crossings |
| 16 | **Mediated, typed actions only** | MCP Apps tools/call, ui/message; webxdc sendUpdate | An interface can propose a message; only the person sends it |
| 17 | **Capabilities on request, remembered per sender and bundle** | Matrix widget capabilities; Telegram per-app geolocation | Ask at the moment of use, scoped to one sender and one bundle hash |
| 18 | **Social trust instead of a reviewer** | Nostr NIP-89 "recommended by people you follow" | "Accepted by 3 of your contacts" is the only honest quality signal on a network without a store |

### Accessibility and evaluation

| # | Cue | Evidence | For SimpleX |
|---|---|---|---|
| 19 | **Render through native components; announce status, not the stream** | A2UI native rendering; WCAG 2.2 SC 4.1.3; TIMESTUMP (ICSE 2025) | Use a separate `role="status"` for "Generating" and "Ready"; never make the stream the live region |
| 20 | **Evaluate per person, report counts** | DesignPref (alpha 0.25 among designers; personal models beat pooled judges); ESPP persona panels | Matches the T05 rule: counts, never percentages |

---

## 5. The trust problem, stated precisely

Someone else's code or model renders a surface inside your private conversation. Six things the viewer needs to know, and what the industry does about each:

| Question | Current practice | Status |
|---|---|---|
| **Who authored this surface?** | MCP Apps hosts show server consent. The spec admits it gives no guidance on showing identity to users | **Unsolved** |
| **Was it generated, and from what?** | AI labels (Carbon, Rovo). The EU AI Act requires disclosure and machine-readable marking from 2 Aug 2026; generative systems already on the market before then have until 2 Dec 2026 for the marking | Partial |
| **Was the content that shaped it trusted?** | A compromised agent renders a calm, coherent UI that is itself the attack (CSA 2026; Unit 42; Brave) | **Unsolved.** OpenAI said on 23 Dec 2025 that prompt injection is "unlikely to ever be fully solved" (Fortune) |
| **Where do my clicks go, and under whose authority?** | Mediated tool calls, consent per call. Willison's lethal trifecta: private data plus untrusted content plus external communication | Partial |
| **Is this really the host or an imitation?** | Sandbox boundaries; blocked system dialogs. The spec admits a sandboxed UI "can still display misleading content" | **Unsolved.** A sandbox stops escape, not deception |
| **Does rendering alone leak anything?** | Markdown-image exfiltration hit Mistral, Microsoft 365 Copilot (CVE-2025-32711), GitLab Duo, Salesforce and Superhuman | Solved only by **no network from rendered content** |

Two pieces of hard evidence on what unsupervised generation does:

- **55.8%** of 1,296 model-generated e-commerce components contained at least one deceptive pattern. Business framing made it worse (Chen et al., 2026).
- In the UIPersonaBench analysis, transparency was the lowest-scoring dimension for **every one of 14 models**.

So the client must enforce honesty. The generator will not supply it.

---

## 6. Accessibility of generated UI

- **Streaming breaks live regions.** With `aria-atomic` on, the response is re-announced per token. With it off, screen readers skip changes. Fix: transcript as `role="log"` with `aria-live="off"`, plus a separate status element (WCAG 2.2 SC 4.1.3).
- **Dynamic change disorients.** TIMESTUMP (ICSE 2025) names five patterns: latent appearing, disappearing, short-lived, moving and modified content. Blind testers confirmed 25 of 30 sampled issues. Every generated or regenerated component is one of these.
- **Generated code fails on ARIA and complex semantics.** Contrast and alt text are fine. A feedback loop with a checker fixes it; prompting alone does not (Suh et al., 2025).
- **None of the generative UI systems reviewed reports a screen-reader evaluation.** The one study with screen-reader users (Yu et al., 2025) used a model to restructure existing pages rather than generate new interfaces. Users preferred it, but some regenerated pages lost links and buttons. Native rendering from a catalog is the only pattern with a structural accessibility story.
- **The debate:** Nielsen argued individualised UI is how disabled users are really helped. Roselli's rebuttal: that requires detecting disability, risks separate-but-equal experiences, and consulted no assistive-technology users.

---

## 7. Chat as an operating system: what history says

### Timeline of note

| Year | Event |
|---|---|
| 1995 to 1996 | MSN launches closed, then pivots to the web within 15 months. AOL goes flat-rate |
| 2013 to 2015 | Google and Facebook drop XMPP federation |
| 2016 | Messenger bots (F8); iMessage App Store |
| 2017 | WeChat Mini Programs. iMessage app growth stalls |
| 2019 | Slack Block Kit |
| 2020 | Messenger removes the Discover tab |
| 2022 | Telegram Web Apps (Mini Apps). Discord's "new era of apps" post (24 May 2022, slash commands and components) |
| 2024 | Telegram Mini App Store, 500M monthly users. Discord Activities opened to all |
| 2025 | Telegram mandates TON for crypto mini apps. Matrix funding crisis. Microsoft Agent Store |
| 2026 | Slackbot becomes an agent. MCP Apps standard. A2UI and AG-UI near 1.0 |

### Successes share

1. A reason to transact already inside the chat **before** apps arrived (WeChat Pay, Stars, enterprise workflow, voice channels full of players).
2. A UI model that fits the host: cards for work chat, web views for consumer apps and games.
3. **Discovery inside conversations:** QR codes, t.me links, in-channel launchers.
4. Narrow focus where the host is strong (Discord and games).

### Failures share

1. Discovery buried in the UI: iMessage needed four taps; Messenger's Discover tab came and went.
2. No payments or commerce case.
3. An interaction model mismatched to the task (2016 NLP bots).
4. Owner incentives pointing elsewhere.
5. Speculative demand (Farcaster: airdrop spikes, then a 95.7% collapse in new daily registrations by September 2024).
6. For open protocols: dependence on one large participant (Matrix on Element's funding). Whether XMPP fell because Google left is disputed: Gruber argues it was doomed by mobile regardless.

### The AOL thesis, tested

**The evidence does not support "all walled messengers die".** AOL fell to a specific mechanism:
- it shipped its own substitute (a web browser)
- flat pricing killed its content economics
- broadband made its access business worthless

None of the three applies to WeChat, iMessage or WhatsApp. Their lock-in is the social graph, not an access account. Strongest counter-cases:
- WeChat: 1.41B MAU, and RMB 2 trillion through mini programs in Q3 2024 alone
- iMessage: lock-in survived a decade of its app platform failing

What the evidence **does** support:
- **App layers inside closed messengers churn.** Messenger 2016 to 2020, iMessage apps, Discord's repeated reframings.
- **Regulators now act on chat lock-in.** China ordered WeChat to unblock rival links (2021). The US DOJ cited iMessage in its 2024 complaint.
- **A platform owner with a financial stake eventually walls off distribution.** Telegram's TON mandate is the example.

**The wildcard:** first-party AI agents becoming the shell (Microsoft Copilot, Slackbot, Discord). That is the closest thing to AOL's browser moment, because an agent can make third-party apps redundant. It is a hypothesis, not yet evidence. It is also the bet an open, programmable messenger would make.

---

## 8. What this means for SimpleX

### The model that fits

| Fit | Model | Why |
|---|---|---|
| **Best** | **Bundled interface as a message** (webxdc shape) | Signed, content-addressed, sent over the existing E2EE channel, **no network**. It cannot phone home or leak an IP, which removes the main reason a reviewer exists. State syncs as more E2EE messages. Provenance is the sender |
| **Best** for model output | **Declarative catalog** (A2UI shape) | Nothing executable crosses. The client decides what a button can do. The only way a peer's or a local model's UI is acceptable without a reviewer |
| **Reusable mechanics** | MCP Apps with network turned off | Typed action vocabulary, pre-declared templates, host-validated messages, display modes |
| **Poor** | Hosted web views (Telegram, Discord Activities, Matrix widgets as deployed) | Loading a URL leaks the viewer's IP and lets the author change code after acceptance. Both break SimpleX's threat model |
| **Poor** | Model-generated free code | No one to sandbox and vouch for it |
| **Poor** | Store-reviewed models | Their safety rests on a reviewer SimpleX does not have |

### Rules that fall out

1. **An interface is a message from a sender.** Sign it, hash it, show the sender, let the recipient accept it like a file. Blocking a contact blocks their interfaces.
2. **No network from interface content. Ever.** All outbound effects go through a small typed set the client mediates: propose a message, update shared state, call a local tool.
3. **Catalog for anything generated; bundle for richer apps the person explicitly accepts.**
4. **The boundary is visible and owned by the client.** Interfaces may never wear the client's own materials.
5. **Capabilities are requested at the moment of use** and remembered per sender and bundle hash.
6. **Discovery lives in conversations,** not a store. Any directory is one of many, signed by its curator.
7. **The interface contract belongs in the core spec from day one.** Matrix widgets have stayed outside the stable spec for eight years and have worked mainly in one client, Element.
8. **Decide the payments rail early.** History says apps follow money rails, and whoever controls the rail ends up controlling the apps.

### How the six flow rules map onto it

| Flow rule | Programmable-interface pattern |
|---|---|
| **Coordinate** | The home of connections is the app grid: "an app is a conversation with a custom interface" |
| **Act locally** | The interface unfolds inside the reply that delivered it, beside its content (cues 3, 4) |
| **Adapt the space** | Inline by default, full screen on request (MCP display modes), always folding back |
| **Retain useful state** | Disposable pixels, durable state: the interface's output is a message (cue 5) |
| **Cross deliberately** | Plan, confirm, receipt. The client's clay rule frames anything that leaves (cues 9, 16) |
| **Return coherently** | Dismissing an interface restores the conversation, the draft intact |

This direction does not replace the thesis. It gives the thesis a job. The project's two "speculative" items, email inside a provider and proposals as shared objects, both become programmable interfaces delivered by the other side. The tool is not the designer's to draw. **The frame around it is.**

---

## 9. Open research questions this leaves

1. Which interface model, if any, would SimpleX adopt: declarative, bundled, generated, or a mix? This is the one question to put to the SimpleX maintainers. A clue: the Discord post cited is from 24 May 2022 and covers slash commands, buttons, select menus and ephemeral messages. That is the declarative tier, not model-written code. A clue, not an answer.
2. How does a person tell a peer's interface from one their own local model generated?
3. What is the honest quality signal on a network with no store? Contact acceptance counts? Curator-signed directories?
4. How do AI "contexts and skills that reply in interfaces" disclose what they read, on a network that cannot audit them?
5. Accessibility: can a catalog guarantee screen-reader behaviour for interfaces nobody reviewed?
6. Evaluation: how does T05 test an interface that is different for every participant? Per-person preference models (DesignPref) and counts, not pooled scores.

---

## Sources

Sources that the whitepaper cites are linked in the References section of [Interfaces That Arrive](INTERFACES_THAT_ARRIVE.md#references). The rest are listed here by name and were not individually re-checked.

**Research and theses:** Leviathan et al., Generative UI, arXiv 2604.09577 and research.google blog, Nov 2025 · Chen, Zhang, Shao, Yang, Generative Interfaces for Language Models, arXiv 2508.19227 · Vaithilingam et al., DynaVis, arXiv 2401.10880 · Cheng et al., BISCUIT, arXiv 2404.07387 · Cao, Jiang, Xia, arXiv 2503.04084 · Chen, Pavel, TaskArtisan · Kim et al., Elicitive User Interfaces · Kim et al., Maru · Park et al., arXiv 2601.19171 · Li et al., Spatula · Wu et al., UICoder, arXiv 2406.07739 · Bernstein, The Interface of Theseus · Litt et al., Malleable Software, inkandswitch.com 2025 · Vaithilingam, Arawjo, Glassman, arXiv 2402.07342 · Lee, arXiv 2505.15049 · Chen et al., Deception at Scale, arXiv 2502.13499 · Suh et al., arXiv 2503.15885 · Sawicki et al., arXiv 2601.22759 · Jiang, Aalto doctoral thesis 2025 · Horvitz CHI 1999 · Calvary, Coutaz et al. 2003 · Limbourg et al., UsiXML 2004 · Puerta, Eisenstein 1999 · Myers, Hudson, Pausch TOCHI 2000 · Gajos, Weld, Wobbrock, SUPPLE 2010 · Gajos et al. CHI 2008 · Findlater, McGrenere CHI 2004 · Akiki, Bandara, Yu, ACM CSUR 2014 · Chen, Knearem, Li, CHI 2025 GenUI study, arXiv 2501.13145 · Peng, Bigham, Wu, DesignPref, arXiv 2511.20513 · ESPP / UIPersonaBench, arXiv 2607.28439 · Mehralian, He, Malek, TIMESTUMP, ICSE 2025 · Chen et al., fine-print injection, arXiv 2504.11281 · Yu et al., arXiv 2502.18701

**Protocols and docs:** MCP Apps spec 2026-01-26 (github.com/modelcontextprotocol/ext-apps) · MCP 2026-07-28 release · mcpui.dev · OpenAI Apps SDK and plugins changelog · a2ui.org and A2UI roadmap · docs.ag-ui.com and AG-UI 1.0 (30 Sep 2026) · ai-sdk.dev · json-render (The New Stack, 23 Jan 2026) · OpenUI (github.com/thesysdev) · Microsoft Adaptive Cards and MCP Apps in M365 Copilot (7 Apr 2026) · Slack Block Kit changelog 2026 · core.telegram.org/bots/webapps and Bot API changelog · Discord components and Activities docs · matrix-widget-api, MSC2762, MSC4211 · webxdc.org · Apple WWDC26 session 343 · Android AppFunctions (Jul 2026)

**Patterns and critique:** NN/g Generative UI (2024) and GenUI in Real Life (2026) · Nielsen, AI is the first new UI paradigm (2023), Intent by Discovery (2026), Generative UI from Gemini 3 Pro (Nov 2025) · Shape of AI · Microsoft HAX Toolkit · Google PAIR Guidebook · IBM Carbon for AI · AWS Cloudscape gen-AI patterns · Atlassian Rovo UI · Google Cloud, Generative UI · EL Passion, Generative UI patterns · OWASP LLM05:2025 · Willison, the lethal trifecta (Jun 2025) and markdown exfiltration tag · Brave, unseeable prompt injections (2025) · Unit 42 (2026) · CSA Agentic Blabbering (2026) · Doppel (2026) · EU AI Act Art. 50 · W3C Understanding SC 4.1.3 · Roselli, Jakob has jumped the shark (2024) · CSS-Tricks, Generative UI notes (2026) · Foolproof (2024) · Appleton, Home-cooked software (2024) · Litt, LLM end-user programming (2023) · personal blogs: Tian Pan (2026), azukiazusa (2026)

**History:** TechCrunch on WeChat Mini Programs (9 Jan 2017) · Tencent Q2 2025 results · 36Kr (Jan 2025) · Telegram blog (Nov 2024) · Cointelegraph on TON mandate (Feb 2025) · Discord blog (May 2022, Mar 2024, Sep 2024, Mar 2026) · Slack engineering and Block Kit (2019) · Microsoft 365 blog (Apr 2025) · TechCrunch on iMessage apps (Mar 2017) and DOJ (Mar 2024) · Computerworld (Feb 2020) · Meta Newsroom (Apr 2016) · Matrix.org blog (Feb and Dec 2025) · xmpp.org history · EFF (May 2013) · Daring Fireball (Jun 2023) · BlockEden on Farcaster (Oct 2025) · NIP-89 · xmtp.org · Wikipedia on AOL and MSN · Zócalo Public Square (Martinez) · Euronews (Sep 2021)
