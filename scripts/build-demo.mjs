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
