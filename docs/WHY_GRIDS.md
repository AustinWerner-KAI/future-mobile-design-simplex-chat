# Why explore grids?

> **Latest edit — [V2.1.2.3: photos, email and a home at scale](https://github.com/AustinWerner-KAI/future-mobile-design-simplex-chat/blob/main/docs/V2_1_2_3.md). Start here.** [See the whole story](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/showcase.html) · [Try the interactive version](https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/v21.html?mobile=1&version=2.1.2.3). Published 6 October 2026: photo pins and photo tools, email threads and forwarding, a home for 100+ conversations with one opening motion, and the homepage audit. V2 is the earlier reference baseline; older audits and screenshots retain their original version scope. This is a browser design study, not a production release.

4 October 2026 · original project rationale, not a validated usability finding.

**[V2 is the current reference](../v2.html). [Play the three V2.1 candidates](../v21-options.html). [Read this rationale in HTML](../studies/why-grids.html).**

## Relationships first

The question is who someone wants to reach: a person, family group, publication or provider. A small favourites grid gives chosen relationships an identifiable place before asking which tool or transport to use. It is a candidate home structure, not a grid of separate communication products.

Our hypothesis is that a stable arrangement of familiar names and identity marks can make frequently chosen relationships easier to recognise. We have not demonstrated this with participants. A grid is useful only if finding and returning becomes easier; familiarity alone does not prove it.

## What the grid is for

- A deliberately small set of favourites, separate from a chronological activity list.
- Stable relative order rather than reshuffling favourites whenever a message arrives.
- Individual identity marks, with type labels and shapes distinguishing people, groups, publications and providers.
- A spatial anchor from which the relationship opens into its relevant tools.

V2.1.1 initially shows three favourites, expands to six and offers a list alternative. Order currently follows the fictional directory, not drag-and-drop custom ordering. Unread counts and timestamps are fixed fixtures. No participant outcomes or global unique identities are implied.

## Where a grid loses

A grid consumes vertical space, offers less room for message previews and can become awkward with long names or enlarged text. A large inbox needs searchable, scannable activity. Positions can change as text or window size changes, so spatial memory cannot be the only way to find someone. Type badges must not crowd the recognisable identity.

For these reasons we are comparing three layouts, not declaring the grid the winner:

| Candidate | Hypothesis | Cost to test |
| --- | --- | --- |
| 2.1.1 — compact grid | A few stable relationship anchors help repeated access | Favourites occupy more height; expansion adds an action |
| 2.1.2 — horizontal strip | Familiar anchors and a larger activity list balance recognition and recency | Some favourites are initially offscreen; arrows and search provide alternatives |
| 2.1.3 — collections | People benefit from naming and overlapping their own contexts | Organisation takes work and can obscure activity; collections must not imply shared membership |

## The octopus architecture is independent of the grid

Human relationships organise the home. The octopus theory supplies the flow architecture: coordination, local action, adaptable space, retained context, deliberate crossing and coherent return. A grid is one coordinating surface; a strip or collection list can implement the same rules.

An arm is an analogy for local action attached to a coherent whole, not a literal UI shape. Opening a relationship should preserve its drafts and reading context. Moving a detail elsewhere should show the chosen content and destination. Returning should recover the place left behind. The grid earns its place through these tasks, not its resemblance to anatomy.

## Try it, then challenge it

Use the same fictional tasks for each candidate:

1. Find Maya, open the conversation and prepare an unsent reply.
2. Switch to a proposal, then return to the conversation and home. Check what survived.
3. Find Coast Journal and explain whether replying is possible and who the audience is.
4. Prepare an email excerpt from Harbour Café, inspect the recipient and content, then cancel or simulate sharing.
5. Find someone outside the initially visible favourites. In collections, put Maya in two personal collections and explain whether anything became shared.

A participant comparison should vary candidate order, record finding time, wrong selections, lost context and audience misunderstandings, and ask which layout people would choose for their own relationships. Include long names, enlarged text, many conversations and people who use assistive technology. Keep task content consistent; do not treat an agent-operated browser script as human evidence.

## Working prototype limits

The gallery supports in-page interactive previews and full-screen links. Each preview has independent RAM-only state; resetting or reloading clears it. Messages, invitations, proposals and email sharing are simulations. No real account, mailbox, contact QR, delivery or authentication is present. Physical-device keyboards, screen readers and participant comprehension remain unverified.

[Gallery verification record](v21-gallery-check.json): 18 browser checks cover embedded interaction, independent state, reset and responsive page fit.

## Provenance

This is original project reasoning grounded in the [design memory](DESIGN_MEMORY.md), [flow architecture](EVOLUTION_FROM_ANATOMY.md), [V2.1 brief](V2_1.md) and [refinement record](V21_REFINEMENT.md). The broader [source register](SOURCES.md) distinguishes external research and verified SimpleX facts from project proposals. Private correspondence is not reproduced. Original code MIT; original design material CC BY 4.0.
