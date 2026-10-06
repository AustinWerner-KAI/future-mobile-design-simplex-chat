# Website audit log

One running record of every audit of the project website, newest first. Each entry keeps its scope, findings, evidence and what was not tested. Older dated audits elsewhere in `docs/` keep their original scope.

---

## Homepage, 5 October 2026

**Target.** The live homepage, https://austinwerner-kai.github.io/future-mobile-design-simplex-chat/ (`index.html` on `main` at `3254c3e`).

**Method.** Rendered in Chromium at 1440 × 900 and 390 × 844. Collected headings, links, section positions, link heights and image loading; checked scroll-reveal sections with reduced motion and with JavaScript off. Judged against `AGENTS.md`, `docs/CLAUDE_HANDOFF.md`, `docs/DESIGN_MEMORY.md` and `docs/NEXT_STEPS.md`. Findings only; nothing on the site was changed.

### Verdict

The page is careful, well sourced and honest about its limits, but it still tells the V2 story. The latest edit, V2.1.2.1, is only in a thin banner at the top, while the one primary button sends visitors to V2 and calls it "current". The current thesis (human relationships organise the interface; the octopus theory is the architecture of the flow) is not explained on the page.

### Findings

| # | Priority | Finding | Evidence | Suggested fix |
|---|---|---|---|---|
| 1 | P1 | The primary action contradicts the version status. The hero's one button reads "Explore the current V2 designs" and links to `v2.html`. `AGENTS.md` says V2.1.2.1 leads every review route and V2 is the earlier baseline. | Hero button at y ≈ 654 (desktop), href `v2.html` | Make the hero primary "See the latest design, V2.1.2.1" → `v2121.html`, with "Try it" → `v21.html?mobile=1&version=2.1.2.1` beside it. Label V2 as "Earlier baseline" wherever it appears |
| 2 | P1 | Competing "start here" routes and an ambiguous version name. Three routes compete above the fold: the banner (V2.1.2.1), the nav item "Latest V2.1 candidates · interactive" (`v21-options.html`, which is not the latest edit) and the hero button (V2). | Nav and banner links at y 18 to 155 | One start route (finding 1). Rename the nav item "V2.1 home candidates" and drop "Latest" from it |
| 3 | P1 | The latest design never appears in the page body. There is no V2.1.2.1 section or image; the body covers the anatomy story, V2, the concept boards and the earlier prototypes. History fills most of a 15,984 px page (18,476 px on a phone) with 41 headings; the concept gallery alone is about 4,500 px. | Section map; headings list | Add one V2.1.2.1 section straight after the opening: two or three of the 14 captured states, what changed and why, its limits, and the two links. Move the concept boards and V2 under a clearly labelled "How we got here" |
| 4 | P1 | The current thesis is missing. The page explains the octopus as a different evolutionary path and as "One surface. Four movements". The six flow principles from `DESIGN_MEMORY.md` are absent: "deliberate crossing" and "coherent return" appear 0 times. "Relationship" appears 6 times, never as the organising idea. | Page text counts | Add a short section: "Relationships organise. The octopus shapes the flow." Six principles, each with one concrete interaction from the Maya → Family → Harbour Café journey. Keep the "not protocol architecture" qualification beside it |
| 5 | P2 | The nav mixes current work and history with no grouping, and wraps to two rows on desktop and four on a phone. The brand link "OCTOPUS / 2028" goes to `#`. Internal pages (`future.html`, `experience.html`) carry the external ↗ arrow. | Nav links and positions | Group as Latest · The idea · History · Contribute · GitHub. Brand link to `./`. Keep ↗ for external sites only |
| 6 | P2 | The contribution section is concrete but points at older problems. The five issue cards (#2 to #6) are V2-era themes (vertical stack, photo replies). The priority open task, T05 (real-phone comparison of the three homes), and T06 to T12 are not mentioned. The voice switches between "I want" and "our exploration". | `#join` links | Lead with T05 and link `docs/NEXT_STEPS.md`; keep the issues as "Earlier open questions". Pick one voice |
| 7 | P2 | The site is not on the approved visual system. It uses a warm paper canvas with dark green type and a green primary button. `DESIGN_MEMORY.md` moved the light direction to a white canvas, subtle blue materials, neutral lettering and clay actions, and says new material follows it. | Screenshots | Decide whether the site follows the app palette. If yes: white canvas, neutral ink, clay primary action. Historical boards keep their original colours with a "history" label |
| 8 | P2 | Small link targets. All nav links are 21 px tall; standalone links such as the issue cards, "Earlier shared-plan study" and the two source links are 14 to 16 px. WCAG 2.2 asks for 24 px for targets that are not inline in a sentence. | Link bounding boxes at 390 px | Give nav and standalone links at least 24 px (ideally 44 px on touch) through padding |
| 9 | P3 | The heading order skips a level: H1 is followed by three H3s ("Keep the whole coherent." and the next two). | Headings list | Make them H2, or group them under an H2 |
| 10 | P3 | "2028" is unexplained to a first-time visitor ("OCTOPUS / 2028", "Exploring 2028", "2028 reset"). | Hero and nav | One phrase on first use, e.g. "designing for 2028" |
| 11 | P3 | Two `simplex.chat` links sit a few lines apart in the hero. | Hero | Keep one |

### Status

Findings 1 to 4 fixed on this branch (`index.html`), not yet published:

- Hero primary: "See the latest design, V2.1.2.1" to `v2121.html`, with "Try it" and "Read the idea". V2 is labelled "earlier baseline" in the nav and the prototype section.
- One start route: "Latest V2.1 candidates" renamed "V2.1 home candidates"; the anatomy caption no longer says "Start here".
- New section `#idea`, "Relationships organise. The octopus shapes the flow.": six principles, each with one interaction from the Maya, Family and Harbour Café journey, and the not-protocol qualification beside them.
- New section `#latest`: three of the 14 captured states (01, 04, 05), what changed and why, and the limits. The third capture is hidden below 600 px.
- A "How we got here" divider (`#history`) before the preserved history. History content is unchanged.
- Also: brand link goes to `./`; the external arrow is removed from internal pages.

Checked at 1440 and 390 in Chromium: no horizontal overflow, every local link and in-page anchor resolves, the captures load, no JavaScript errors. `scripts/check-v21-audit.cjs` passes (23 checks). Findings 5 (nav grouping) and 6 to 11 remain open.

### Passed

- No horizontal overflow at 1440 or 390.
- No broken images; every image has an `alt` attribute.
- Scroll-reveal sections are fully visible with reduced motion and with JavaScript off.
- The independence statement and the source links for the biology claims are present.

### Not tested

Keyboard focus visibility, screen-reader output, measured colour contrast, enlarged text, the linked pages, real phones and any participant comprehension. These are browser checks and design judgment, not usability evidence.
