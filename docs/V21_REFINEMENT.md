# V2.1 options — critique and refinement

4 October 2026. Original project design assessment and implementation record.

**[V2 remains the current project reference](../v2.html).** These are candidate refinements: [compare the three live mockups](../v21-options.html).

## Mobile brief

A privacy-sensitive mobile-web study for frequent, interrupted communication with people, groups, publications and providers. The immediate task is finding a relationship, acting within it and returning without reconstructing context. This is fictional browser interaction, not a native SimpleX implementation or an official roadmap. White surfaces, subtle blue materials and neutral words remain the approved palette.

## What changed

| Critique | Implemented response | Trade-off |
| --- | --- | --- |
| Grid consumes the message surface | V2.1.1 starts with three favourites, with an explicit expansion to six and grid/list choice | More favourites take another action |
| Hidden horizontal favourites | V2.1.2 uses wider, text-relative slots, a partial next item and explicit previous/next buttons | Horizontal browsing remains, with search and recent activity as alternatives |
| Preset, exclusive collections | V2.1.3 supports creation, renaming and overlapping memberships; uncollected entities remain visible | Arrangement needs deliberate user effort; collection permissions do not exist |
| Type recognised before identity | Each entity has a monogram plus a distinct container shape; group, publication and provider symbols are smaller badges | These fictional monograms are not globally unique identifiers or verification; user-selected images need a later study |
| Metadata too small | Essential metadata increased to at least 12 CSS px; previews to 14px and row names to 16px | Longer content uses more vertical space |
| Lost place on tool change | Per-relationship/tool scroll positions and email disclosure state are retained; home search, selected collection and favourite-strip position survive return | Memory only, cleared by reload |
| Unclear sharing and error feedback | Empty email details remain disabled after returning; favourite-limit feedback is visible as well as announced | Email handoff still demonstrates only Maya as the destination |
| Inappropriate favourite control in collections | The collection variant offers arrangement from the relationship header | This opens the collection editor, not a separate profile |

## The octopus architecture is the flow

Human relationships organise the interface. The octopus is the architectural analogy, not the audience or a literal silhouette.

- **Coordination:** mixed entities share a searchable home.
- **Local action:** conversation, proposal and trust tools remain inside the selected relationship; email remains attached to its provider.
- **Adaptable space:** favourites can contract; tools unfold only when selected. A narrow relationship rail and return context visually connect the work to its origin.
- **Retained context:** independent reply/proposal drafts, reading positions and home organisation survive movement within the page.
- **Deliberate crossing:** email excerpts are editable and reviewed with their exact recipient and content before simulated sharing. Email does not inherit chat security.
- **Coherent return:** return traverses the relationship journey to the previous home state rather than inserting another home entry.

The relationship currently occupies the main workspace. This is not a claim that the complete home remains visible behind an inline expansion. A true inline-versus-workspace comparison remains a useful research question. See the [architecture rationale](EVOLUTION_FROM_ANATOMY.md) for biology boundaries and evidence.

## Validation and limits

See [refinement checks](v21-refinement-check.json), [variant checks and capture hashes](v21-options-check.json), [interaction checks](v21-browser-check.json) and [targeted regressions](v21-fix-check.json). Editable test scripts are in `scripts/check-v21*.cjs`.

Chrome mobile viewport simulation covers 320/390/768 CSS-pixel page fit, collection creation/renaming/overlap, visible favourite-limit feedback, empty-sharing recovery, disclosure and draft retention, and per-tool reading-position recovery. The stress check injects long names and 45 repeated DOM rows, then doubles computed font sizes. This checks layout stress only; it does not establish real inbox performance, native text scaling, zoom conformance or accessibility compliance. A shortened viewport approximates reduced room; it is not a physical keyboard test.

Comparison images are browser captures of the revised implementation, not generated product promises. Fictional unread counts, timestamps and activity order remain static. No network delivery, persistence, real QR invitation, account authentication or transport integration is implemented. Public publications are read-only; private groups have explicit audience labels. The design needs real-device keyboard and screen-reader work, contrast review across states, and participant comparison before selecting a winner.

Original code: MIT. Original design material: CC BY 4.0. This refinement draws on the [design memory](DESIGN_MEMORY.md), [V2.1 brief](V2_1.md) and [source register](SOURCES.md); it introduces no new biological or protocol claims.
