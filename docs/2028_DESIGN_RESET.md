# 2028 design reset — audit, question, refine

> Current reference, 4 October 2026: [shared design brief](DESIGN_BRIEF.md) · [evolution rationale](EVOLUTION_FROM_ANATOMY.md) · [visual progression](../studies/concept-progression.html). Dated audits and earlier palette proposals below remain iteration evidence.

4 October 2026. A response to the initiator’s critique that V2 feels like today and the colour is weak. This is a design assessment and a set of hypotheses, not measured research or a technology forecast.

## Our actual goal

Help someone understand what matters, act with other people and return to their life with less effort—while knowing whose identity they are using, who can see what and what has actually happened.

The first audience is people moving between private chats, photographs and small-group decisions. Today our samples assume they move through lists, messages and separate action screens. We have not yet established how often that causes meaningful difficulty. That must be researched before claiming improvement.

## Why V2 missed the ambition

| Area | What V2 actually does | What needs to change |
|---|---|---|
| Organisation | Five separate feature screens | Follow one human purpose across those features; preserve the relationship and object throughout |
| Interaction | Buttons open forms, toggles and explanatory panels | Let the active object reveal the controls it needs and retain a stable place in the wider context |
| Octopus inspiration | Rounded cards and a biological story | Give independent local actions coordinated behaviour; make concealment, expansion and return functional |
| Privacy | Labels and a visibility toggle | Make audience, identity and sharing changes legible at the moment of action, with inspectable detail |
| Trust | A separate verification panel | Keep verified/unverified/pending distinctions connected to the relevant relationship and permission; never infer trust from a pleasing animation |
| Colour | Pale-blue cards, blue text and blue buttons | Establish strong luminance hierarchy; use blue/cyan at specific action and attention points, leaving content quiet |
| Space | Tall pages full of instructions | Use a bounded composition with purposeful empty space, concise language and disclosure on demand |
| Motion | Small transitions around conventional screens | Preserve the origin, identity and destination of an object during change; support the same task without motion |
| Evidence | Passing browser checks | Those prove operation, not a better or more futuristic experience. Compare comprehension and task effort with the existing design |

V2 remains useful as a readable baseline. It should not be presented as a resolved 2028 vision.

## What 2028 means here

We cannot know the dominant look of 2028. Adaptive materials, expressive colour and fluid transitions were already public design directions in 2025: see [Apple’s Liquid Glass introduction](https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/) and [Google’s expressive-design research](https://design.google/library/expressive-material-design-google-research). Adding those effects alone does not establish a future experience.

Our bet is that the next useful step is less interface reconstruction: less hunting through history, less copying between tools, fewer changes of place and clearer control over what becomes shared. That is a proposal to investigate, not a claim that the industry will converge on it.

Do not depend on a new phone shape, holograms or ambient surveillance. Explore improved behaviour on a normal touchscreen first. New hardware can be a separate branch of research.

## Seven directions before choosing

1. **A relationship field:** stable people and contexts, with one expanding locally. Risk: attractive arrangements can become slow to search.
2. **Shared objects as the centre:** a photograph, proposal or question gathers its own discussion, sources and audience. Risk: fragmenting the chronological record.
3. **An intent-first composer:** start with “plan Saturday” or “ask about this photo” and review a prepared action. Risk: bad interpretation and unwanted automation.
4. **A home that disappears:** resume the current activity directly, with a reliable route to all conversations. This removes a step. Risk: disorientation on return.
5. **Chronology with levels of detail:** zoom between relationships, active questions and exact source messages. Risk: hidden controls and inaccessible gestures.
6. **User-controlled quietness:** explicitly choose how much the surface reveals in a public setting. Risk: people mistake visual concealment for authentication or access control.
7. **The opposite bet—keep the list:** preserve a familiar index and concentrate innovation inside each relationship. Risk: the outcome remains a restyled chat app.

Prioritise shared objects plus local expansion. Keep a searchable list as an accessible anchor. Treat intent interpretation and ambient modes as separate hypotheses until their privacy and comprehension costs are understood.

## Five goals for the next experience

| Goal | A behaviour worth testing | Evidence we need |
|---|---|---|
| Understand the present | A pending question or proposal is visible with its exact source | Can someone explain what is unresolved without reading the full history? |
| Stay in one context | A conversation becomes a photo discussion or proposal in place | Can they act, reverse and return without losing a draft or their place? |
| See the sharing boundary | A chosen object can be offered to someone while unrelated private history stays outside the proposed share | Can sender and recipient independently explain the same audience and content? |
| Keep human agency | Any suggested action has a source, editable content and an explicit commit | Can someone reject, revise and undo without fighting the interface? |
| Leave and return calmly | The surface retains the person's working context and offers an inspectable return point | Does returning require less reconstruction than the baseline, with no missed important change? |

## A concrete future journey

Arrive at a stable relationship index. Maya’s question is visible. Unfold that relationship without navigating away. Pull the question into a private proposed plan with its source attached. Inspect exactly what could be offered to Alex. Create an invitation; Alex remains outside until acceptance. Return to the index with the same proposal and draft preserved.

A later extension could make a photograph a shared work surface with spatial replies. Another could prepare a proposal locally from selected messages. Neither needs to invent agreement, send automatically or silently merge identities.

The [visual hypothesis study](../future.html) compares stages of this journey and three colour treatments. Stage changes illustrate an intended experience; they are not implemented networking, AI inference, cryptographic permissions or an end-to-end product flow.

## A stronger colour language

**Ink** provides structure and depth. **Porcelain** is the quiet reading surface. **Signal blue** marks a selected action. **Cyan** helps locate an active point or edge. Secondary text remains readable; status always includes words and/or shape.

The website supplies a recognisable blue family, not a rule to tint every panel pale blue. Do not use glow as a substitute for verification, colour as the only audience cue or background gradients behind long text. Use light/dark treatments as a system; compare a more saturated cobalt environment as an alternative.

Nature informs responsiveness: a surface gathers or releases attention when the person asks it to. It does not justify hiding controls unexpectedly or implying the app knows who is looking over their shoulder.

## Questions that could kill the direction

- Do people actually want a structured object, or is scrolling through a short conversation easier?
- Does an in-place expansion preserve context at small sizes, or push too much offscreen?
- Can the audience be understood without an explanation from the designer?
- Does animation improve orientation when measured against reduced motion?
- Can this work with 100+ chats, long names, large text and a screen reader?
- Does it feel calmer after an interruption, rather than merely more attractive in a screenshot?

## Next evidence, not another decorative release

Compare V2 with the single future journey using the same tasks: find Maya’s question; form a private proposal; identify what Alex would receive; cancel the share; return after an interruption. Record misinterpretations, lost context and effort. Keep the variant that helps the task, including a conventional list wherever it wins.

No participant outcomes exist yet. A future claim earns credibility through a changed task and useful evidence, not a date in the title.

## Browser verification

Checked 45 combinations of five stages, three palettes and widths of 360, 390 and 1440 pixels for horizontal overflow. Verified proposal edits, pending invitations, declining, accepting and fixed invitation versions. No JavaScript page errors occurred. Rendered previews were captured and the ink sharing view was visually inspected. These checks establish browser behaviour only; participant usability, native accessibility, protocol feasibility and contrast across every component still require evaluation.
