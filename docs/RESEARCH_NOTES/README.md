# Research notes

The research behind the study's next direction: programmable interfaces, chat as an operating system, and what SimpleX's chat core can and cannot support. Compiled 6 October 2026.

These notes describe a design direction for this study. They are not a SimpleX roadmap and make no claim about SimpleX's plans.

## Read before any change

Every design or code change in this repository starts here.

1. **Before you change anything,** read the note that covers it (table below).
2. **Cite it.** Name the note and section in the pull request description and in the `docs/MOBILE_AUDIT_LOG.md` entry, for example `RESEARCH_NOTES/INTERFACES_THAT_ARRIVE.md §9.1 F5`.
3. **If a change goes against a note,** either update the note in the same pull request or say why the note does not apply.
4. **If new evidence contradicts a note,** update the note and record the change in the audit log. The notes are working research, not fixed rules.

## The notes

| Note | What it covers | Read it before you change |
| --- | --- | --- |
| [Interfaces That Arrive](INTERFACES_THAT_ARRIVE.md) | The whitepaper. Literature, protocols, history, the engineering constraint, trust and accessibility, and **the frame**: 14 principles for interfaces made by others | Anything at all. Start with §9 (the frame) and §10 (what changes) |
| [Programmable interfaces](PROGRAMMABLE_INTERFACES.md) | Working notes behind the paper: the protocol landscape, 20 design cues, the trust problem, accessibility, chat as an operating system | Any tool, card, mini app, AI reply, or anything rendered inside a conversation |
| [Chat scrolling](CHAT_SCROLLING.md) | Why scrolling through chats needs SimpleX's core rebuilt, with code evidence, and a cost table for each home behaviour | The home, the chat list, unfolding, drafts, search, or anything that shows more than one chat at once |
| [Figure 1](frame-diagram.svg) | The frame: one interface, five client-owned parts | |

## The short version

- **Two tiers.** Interfaces arrive as data from a catalog the client owns, or as a sealed bundle with no network. Both send only through a small set of typed actions.
- **The frame is ours to design.** Who sent it, what it can do, what leaves, and how the person returns. The six flow rules already describe it.
- **One open chat at a time.** SimpleX's apps hold one chat's messages in memory. Grids, groups, filters and favourites are cheap. A chat unfolding inside the list needs the core rebuilt.
- **Move the unfolding.** From a chat inside the list to an interface inside the chat.
- **Nothing here is tested on people yet.** T05 comes first.
