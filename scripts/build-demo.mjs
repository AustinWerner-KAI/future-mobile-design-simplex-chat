import { readFileSync, writeFileSync } from 'node:fs';
const studies = [
  ['octopus-continuous.html', 'continuous-demo.html', 'Combined experience'],
  ['maya-opening.html', 'maya-opening.html', 'Your people — opening and closing'],
  ['maya-photo.html', 'maya-photo.html', 'Your people — photo workspace'],
  ['shared-plan.html', 'shared-plan.html', 'Shared messaging — early plan study'],
];
for (const [source, destination, title] of studies) {
  const fragment = readFileSync(new URL('../prototypes/src/' + source, import.meta.url), 'utf8');
  const document = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="referrer" content="no-referrer"><title>${title} — SimpleX design exploration</title><style>html{color-scheme:light dark}body{margin:0;background:light-dark(#f4f3ec,#15211e);color:light-dark(#193b33,#e8eee8);font-family:system-ui,sans-serif}.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}.cursor-interaction{cursor:pointer}.cursor-interaction:disabled{cursor:default}#demo-intro{max-width:390px;margin:18px auto 0;padding:0 24px;font-size:12px;box-sizing:border-box}a{color:inherit}#appearance{font:inherit;background:transparent;color:inherit;border:1px solid currentColor;padding:5px;margin:8px 0}</style></head><body><div id="demo-intro"><p>Independent interaction study · fictional people · no external delivery.<br><a href="../concepts.html">Back to all concepts</a></p><label for="appearance">Appearance </label><select id="appearance"><option value="light dark">System</option><option value="light">Light</option><option value="dark">Dark</option></select></div>${fragment}<script>document.getElementById('appearance').addEventListener('change',e=>{document.documentElement.style.colorScheme=e.target.value;document.querySelectorAll('.device,.phone').forEach(el=>el.style.colorScheme=e.target.value)})</script></body></html>`;
  writeFileSync(new URL('../prototypes/' + destination, import.meta.url), document);
  console.log('Built prototypes/' + destination);
}

// The menu study is a standalone document with its own presentation.
writeFileSync(new URL('../prototypes/menu-list.html', import.meta.url), readFileSync(new URL('../prototypes/src/menu-list.html', import.meta.url), 'utf8'));
console.log('Built prototypes/menu-list.html');

// Same interaction, website-aligned palette and present-app chat scope.
const menuSource = readFileSync(new URL('../prototypes/src/menu-list.html', import.meta.url), 'utf8');
const simplexPalette = readFileSync(new URL('../prototypes/src/menu-simplex.css', import.meta.url), 'utf8');
const simplexMenu = menuSource
  .replace('</style>', simplexPalette + '\n</style>')
  .replace('<title>One list, many conversations', '<title>SimpleX colours — One list, many conversations')
  .replace('MENU STUDY / 2028', 'APP MENU / STUDY')
  .replace('Menu study · fictional messages · local simulated sending.', 'SimpleX colour study · fictional messages · local simulated sending.')
  .replace("channel:'Email · external channel',email:true", "channel:'Private chat'")
  .replace("['Nora','09:08','Weekend at the coast']", "['Nora','09:08','A weekend at the coast?']")
  .replace("if(on){chat.unread=0;row.querySelector('.count')?.remove();}", "if(on){/* Opening a preview does not acknowledge all messages as read. */}")
  .replace('<div class="search">', '<button type="button" class="preview-toggle" aria-pressed="false">Hide message previews</button><div class="search">')
  .replace('</body>', `<script>const privacyButton=document.querySelector('.preview-toggle');privacyButton.addEventListener('click',()=>{const hidden=document.body.classList.toggle('private-previews');privacyButton.setAttribute('aria-pressed',String(hidden));privacyButton.textContent=hidden?'Show message previews':'Hide message previews';document.querySelector('#status').textContent=hidden?'Collapsed message previews hidden.':'Collapsed message previews shown.';});</script></body>`);
writeFileSync(new URL('../prototypes/menu-simplex.html', import.meta.url), simplexMenu);
console.log('Built prototypes/menu-simplex.html');

// Five V2 studies: one shared palette, native-app constraints, and explicit simulations.
const v2Nav = '<nav class="step-nav" aria-label="V2 designs"><a href="01-chats.html">01 Chats</a><a href="02-connect.html">02 Connect</a><a href="03-profiles.html">03 Profiles</a><a href="04-conversation.html">04 Conversation</a><a href="05-group.html">05 Group</a></nav>';
const v2List = simplexMenu
  .replaceAll('../index.html#prototype', '../../v2.html')
  .replace('APP MENU / STUDY', 'V2 / 01')
  .replace('<span class="brand">SimpleX</span>', '<span class="brand">SimpleX</span><a href="03-profiles.html" aria-label="Profile privacy">Profile</a><a href="02-connect.html" aria-label="Create a connection">＋</a>')
  .replace('<footer>', v2Nav + '<footer>');
writeFileSync(new URL('../prototypes/v2/01-chats.html', import.meta.url), v2List);
const v2Css = readFileSync(new URL('../prototypes/src/v2.css', import.meta.url), 'utf8');
const v2Js = readFileSync(new URL('../prototypes/src/v2.js', import.meta.url), 'utf8');
const v2Screens = JSON.parse(readFileSync(new URL('../prototypes/src/v2-screens.json', import.meta.url), 'utf8'));
for (const screen of v2Screens) {
  const nav = v2Nav.replace('href="' + screen.file + '"', 'href="' + screen.file + '" aria-current="page"');
  const document = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="referrer" content="no-referrer"><title>V2 / ${screen.title} — From anatomy to interface</title><style>${v2Css}</style></head><body><div class="outside"><a href="../../v2.html">← All five V2 designs</a><p>Independent design study · fictional data · local simulations.</p></div><main class="phone"><header><span class="brand">SimpleX</span><span class="sequence">V2 / ${screen.number}</span></header>${screen.body}${nav}<footer><span>No real connection or delivery</span><label for="appearance">Appearance <select id="appearance"><option value="light dark">System</option><option value="light">Light</option><option value="dark">Dark</option></select></label></footer></main><script>${v2Js}</script></body></html>`;
  writeFileSync(new URL('../prototypes/v2/' + screen.file, import.meta.url), document);
}
console.log('Built five prototypes/v2 studies');

writeFileSync(new URL('../future.html', import.meta.url), readFileSync(new URL('../prototypes/src/future-study.html', import.meta.url), 'utf8'));
console.log('Built future.html experience hypothesis');

const experienceTemplate = readFileSync(new URL('../prototypes/src/experience.html', import.meta.url), 'utf8');
writeFileSync(new URL('../experience.html', import.meta.url), experienceTemplate
  .replace('/* EXPERIENCE_CSS */', () => readFileSync(new URL('../prototypes/src/experience.css', import.meta.url), 'utf8'))
  .replace('/* EXPERIENCE_JS */', () => readFileSync(new URL('../prototypes/src/experience.js', import.meta.url), 'utf8')));
console.log('Built experience.html complete design study');

writeFileSync(new URL('../unfold.html', import.meta.url), readFileSync(new URL('../prototypes/src/unfold.html', import.meta.url), 'utf8'));
console.log('Built unfold.html local relationship experiment');
writeFileSync(new URL('../studies/materials.html', import.meta.url), readFileSync(new URL('../prototypes/src/materials.html', import.meta.url), 'utf8'));
console.log('Built studies/materials.html colour comparison');
writeFileSync(new URL('../studies/email-storyboard.html', import.meta.url), readFileSync(new URL('../prototypes/src/email-storyboard.html', import.meta.url), 'utf8'));
console.log('Built studies/email-storyboard.html email evolution');
