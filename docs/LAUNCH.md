# Launch checklist

Suggested repository name: `future-mobile-design-simplex`.

## Before publishing

- Owner confirmed: AustinWerner-KAI. Visibility confirmed: public.
- GitHub authentication works outside the restricted sandbox; the initial sandbox check could not access the keyring.
- Licences confirmed and applied: original code MIT; original design material CC BY 4.0. Standalone wrapper is original project code.
- Name maintainers and add a private moderation contact.
- Review fictional names, generated boards and the independent-project wording.

## GitHub setup

Create the repository, push this project and enable Discussions. Suggested categories: Welcome, Design critiques, Sketchbook, Research findings, Engineering feasibility and Decisions. Pin the welcome post from `WELCOME.md`.

Create five issues from `CHALLENGES.md`. Suggested labels: `design`, `research`, `accessibility`, `privacy`, `prototype`, `good first contribution`, `needs evidence`.

Optionally enable GitHub Pages from the main branch root. It will serve `index.html` and the demo. Hosting has not been enabled by this scaffold. Verify file inputs, image previews and responsive layout on the hosted version.

## Commands after authentication and the launch decisions

```sh
gh auth login -h github.com
# Choose --public or --private after the visibility decision.
gh repo create future-mobile-design-simplex --source=. --public --push --description 'Community design exploration of continuous private messaging for 2028'
```

Public publication is authorised by the project initiator. Reuse licensing is confirmed.

## First community invitation

Ask for one concrete critique or small variation. Start with the home and opening/closing interaction. Avoid inviting a full app redesign before a shared evaluation method exists.

## Reference

[GitHub Discussions](https://docs.github.com/en/discussions) supports open exploration; [issue forms](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository) structure actionable contributions.
