# The Future of Mobile Design for SimpleX Chat

**An independent community design exploration of messaging in 2028.**

I started with a question: could the mobile chat interface become a continuous workspace that opens around what we are doing, then quietly settles when we leave?

My starting principle was **“design has no ego.”** The person, the relationship and the conversation should have the greatest presence.

The octopus became an inspiration for flexible form, local action and selective visibility. This repository takes you through that thinking, shows the concepts and working interactions, and invites passionate designers, researchers and builders to challenge and extend them.

**[Read the illustrated journey](https://austinwerner-kai.github.io/future-mobile-design-simplex/)** · **[Try the interaction](https://austinwerner-kai.github.io/future-mobile-design-simplex/prototypes/continuous-demo.html)** · **[Join the welcome discussion](https://github.com/AustinWerner-KAI/future-mobile-design-simplex/discussions/1)**

The project presentation and working study are hosted on GitHub Pages. You can also open `index.html` locally. No application install is required.

![Five predictions, one visual language](visuals/five-designs.png)

## Follow the thinking

- [The full narrative](docs/THINKING.md): questions, principles, predictions, nature-inspired mappings, concept evolution and invitation.
- [The design brief](docs/DESIGN_BRIEF.md): the job, boundaries and first milestone.
- [Core screen layouts and wireframes](studies/core-wireframes.html): the structural flow behind the visual boards.
- [The design language](docs/DESIGN_LANGUAGE.md): form, movement, typography and interaction rules.
- [The honest critique](docs/CRITIQUE.md): what remains unresolved.
- [The five challenges](docs/CHALLENGES.md): concrete starting points for contributors.

## The five design hypotheses

1. A living present with proposals and source messages.
2. Tools that unfold beside the relevant object.
3. Photographs as places for anchored replies.
4. Readable audiences and deliberate invitations.
5. Quiet return points that preserve context.

Chat and email can share organisation around a relationship while their channel and privacy properties remain explicit. Email integration is a scenario from the originating conversation, not a verified SimpleX product commitment.

## Build with us

You can contribute a sketch, motion study, usability observation, accessibility finding or small prototype. Start with one problem and show what improves for the person using it.

Read [CONTRIBUTING.md](CONTRIBUTING.md), use a [design proposal or finding](https://github.com/AustinWerner-KAI/future-mobile-design-simplex/issues/new/choose), or join an open challenge. Discussions are for exploration; issues scope work; pull requests change the reference experience.

Maintainers curate a coherent direction and record decisions with their evidence. Popularity alone does not establish usability or privacy.

## Try and edit the prototype

Open `prototypes/continuous-demo.html` directly in a modern browser. It covers private messaging, preserved drafts, photo preview and point replies, a proposed plan, invitations, separate joining and date confirmation, new connections and an email reply scenario.

All participants and incoming messages are fictional. Sending and acceptance are simulated locally. No real SimpleX connection, email delivery or cryptographic access control is implemented. Photos are selected locally and remain memory-only. This is a design study.

Edit `prototypes/src/octopus-continuous.html`, then rebuild the standalone preview with Node:

```sh
node scripts/build-demo.mjs
```

No packages or framework are needed. To browse the whole project locally:

```sh
python3 -m http.server 8000
```

## What still needs work

The home still resembles a vertical stack. Several flows use a generic expansion origin. Large contact sets, screen readers, full reload restoration and protocol feasibility need further work. The boards and prototype differ in detail. See the critique before treating either as a specification.

![Storyboard from invitation to shared activity](visuals/storyboard.png)

## Independence, provenance and rights

Initiated by [AustinWerner-KAI](https://github.com/AustinWerner-KAI), shaped from a design conversation with AI assistance. The concept boards are AI-generated; their prompts and editable prototype source are included.

SimpleX is our first design case. This project is unaffiliated with SimpleX or Jony Ive and does not represent their roadmap or endorsement.

See [LICENSING.md](LICENSING.md) for current reuse terms. Contributors retain attribution. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community expectations.
