import { readFileSync, writeFileSync } from 'node:fs';
const input = new URL('../prototypes/src/octopus-continuous.html', import.meta.url);
const output = new URL('../prototypes/continuous-demo.html', import.meta.url);
const fragment = readFileSync(input, 'utf8');
// This wrapper is original project code, with no copied visualization runtime.
const document = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="referrer" content="no-referrer"><title>Continuous messaging — SimpleX design exploration</title><style>html{color-scheme:light dark}body{margin:0;background:light-dark(#f4f3ec,#15211e);color:light-dark(#193b33,#e8eee8);font-family:system-ui,sans-serif}.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}.cursor-interaction{cursor:pointer}.cursor-interaction:disabled{cursor:default}#demo-intro{max-width:390px;margin:18px auto 0;padding:0 24px;font-size:12px;box-sizing:border-box}a{color:inherit}</style></head><body><p id="demo-intro">Independent interaction study · fictional people · no external delivery. <a href="../index.html#prototype">Back to the design story</a></p>${fragment}</body></html>`;
writeFileSync(output, document);
console.log('Built prototypes/continuous-demo.html');
