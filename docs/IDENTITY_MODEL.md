# Identity model: profiles, hidden profiles and incognito

5 October 2026. Design hypothesis for T08, written before any runtime change. It sets out what SimpleX does today, how that fits the octopus flow, and the screens a person needs. Static study: [studies/identity.html](../studies/identity.html).

## Facts this rests on

From the [SimpleX chat profiles guide](https://simplex.chat/docs/guide/chat-profiles.html) and [app settings](https://simplex.chat/docs/guide/app-settings.html), read 5 October 2026.

1. **Profiles are local and plural.** "You can create as many chat profiles as you like." Each has its own contacts, groups and conversations. Switching is by tapping the profile image at the top of the chat list.
2. **Profiles are not accounts.** There is no server-side identity. A profile is a display name, an optional full name and an image, sent to the people you connect with.
3. **Hidden profiles.** A profile can be hidden behind a password. It leaves the profile list. "To unhide, enter the full password in the search bar." Nothing in the interface says a hidden profile exists.
4. **Incognito is independent of profiles.** When it is on, "your current profile name and image are NOT shared with your new contacts." A new random name is generated for each new contact or group. It applies at the moment of connecting, not afterwards.
5. **Profile edits go to your contacts, but not incognito ones.** Saving a profile change sends the update "to all your contacts (excluding the contacts with whom your incognito profiles were shared)."
6. **All profiles move together.** One database holds every profile; it is exported or moved as a whole.

What the guide does not settle, and therefore goes to the [maintainer questions](MAINTAINER_QUESTIONS.md): whether an incognito name can be changed for an existing contact; whether a contact can tell they received an incognito name; how unread counts are shown per profile.

## Three things that look alike and are not

| | What it is | Who it affects | When it is chosen |
|---|---|---|---|
| **Profile** | Whose connections fill the home. A whole world: contacts, groups, drafts, search. | You. It decides what you see. | Rarely. Switched from the top of the home. |
| **Hidden profile** | A profile removed from the list behind a password. | You. It decides what someone holding your phone can see. | Rarely. Set in the profile's own settings. |
| **Incognito** | A random name given to one new contact or group instead of your profile name. | Them. It decides what they see of you. | Once, at the point of connecting. Fixed afterwards. |

The design keeps these three apart. A profile switch changes the whole home. Incognito changes one connection and is named only where that connection is acted on.

## Where identity appears, and where it must not

The channel audit set the rule: identity is named only at the point of action, never while reading (E1). Profiles do not get an exception. The home shows a profile mark, not a name; the name appears in the profile sheet when you open it. (Owner decision, 5 October 2026: mark only.)

| Place | Shows | Why |
|---|---|---|
| Home header | A profile mark (monogram) at the top left that opens the profile list. No profile name in the header. | The home is the coordinate; the mark says which world without writing a name on screen. Rare action, top edge. |
| Home rows and favourites | Nothing about identity. | Rows are for recognising the other party. |
| Search | Only the active profile's connections. A hidden profile's connections never appear. | Fact 3. The search field is also where the unhide password is typed. |
| Composer dock | "Reply to Sam · private · as River Finch" when the connection is incognito. Nothing extra when it is the profile name. | Point of action. The incognito name is what Sam sees, so it is stated where you write to Sam. |
| New connection dialog | The identity choice: profile name, or incognito with the generated name shown. Frozen once the invitation is created. | Fact 4. The choice is made at connecting and cannot be changed later. |
| Invitation accepted | The new row on the home, focused, with "connected just now · as River Finch" in the feedback line. | The crossing has completed; its result must be visible (T19 R2). Closes F5. |
| Joining a channel or group (T19) | "Join as Austin / Incognito" in the preview. | Already built. Same rule. |
| Profile edit | A note: "Sent to your contacts. Incognito contacts keep the name they were given." | Fact 5. |

## The profile list

Opened from the mark at the top left of the home. It is a sheet, not a screen: the home stays underneath and the return is dismissal.

- Each profile: mark, name, unread count across that profile's connections, "Active" on the current one.
- "Add profile" at the end.
- No "Hidden profiles" heading, no count, no lock icon. Showing that something is hidden defeats hiding it. The line under the list says only "Profiles can be hidden behind a password in their settings."
- Switching re-renders the home for the chosen profile with its own search, scroll, favourites and drafts. The previous profile's draft and search text are kept and come back when you switch back. Nothing crosses between profiles.

## Unhiding

Typed into the home search field. If the text matches a hidden profile's full password, one result appears above the connections: "Unhide Personal profile", a button. Tapping it adds the profile to the list and switches to it. Any other text searches connections as usual. A wrong or partial password shows the ordinary "No connections found", not "wrong password": the interface never confirms that a hidden profile exists.

## Incognito at connection

The New connection dialog already offers an incognito checkbox with a sample name. The study keeps that and adds what was missing:

- The generated name is shown before the invitation is created, so the person knows what the other side will see.
- Once the invitation exists, the choice is frozen and the dialog says so.
- After acceptance, the new contact's row is on the home and focused, and the feedback line names the identity. Opening the contact shows the composer line "as River Finch".
- Incognito contacts never receive profile updates. The profile edit screen states it.

## States that must exist

| State | Where | What the person sees |
|---|---|---|
| One profile only | Profile list | The one profile, Active, and Add profile. No switching copy. |
| Switching with a draft open | Home | The draft stays with its profile. Switching back restores it and the row's "Draft" marker. |
| Hidden profile, wrong password | Search | "No connections found. Try another name." Nothing else. |
| Hidden profile, right password | Search | One button: "Unhide {name} profile". |
| Incognito after the invitation exists | New connection | Checkbox disabled; "Set when the invitation was created." |
| Incognito contact, composer | Connection | "Reply to Sam · private · as River Finch". |
| Profile edit with incognito contacts | Profile settings | "Sent to your contacts. Incognito contacts keep the name they were given." |
| Invitation accepted | Home | New row at the top, focused; feedback names the identity. |

## Octopus flow check

- **Coordinate:** the profile decides whose connections fill the home. One mark, top left, rare, no name.
- **Act locally:** the profile list is a sheet over the home; unhiding happens in the search field that is already there.
- **Retain context:** each profile keeps its own search, scroll and drafts; switching away and back loses nothing.
- **Cross deliberately:** incognito is chosen once, at connection, with the generated name shown, then frozen.
- **Return coherently:** dismissing the sheet returns to the same home; accepting an invitation returns to the home with the new row visible.

## What would make us abandon it

- T05 participants cannot tell which profile they are in from the mark alone and switch into the wrong one.
- People expect to change a contact's incognito name later and are confused that they cannot (this is a SimpleX constraint; the design can only state it).
- The unhide-by-search pattern is found by nobody. It mirrors the native app, so this would be a finding about the native app too.

## Not built, by decision

- Profile deletion and database export. Out of scope for a browser study.
- Per-profile notification settings.
- Any claim about what the other side can detect about incognito. Unverified; maintainer question.
