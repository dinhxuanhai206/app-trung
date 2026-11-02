const fs = require('fs');
const path = require('path');

const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]/u;

function getAllFiles(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) res.push(...getAllFiles(full));
    else if (full.endsWith('.jsx')) res.push(full);
  }
  return res;
}
const components = getAllFiles('src');


components.forEach(comp => {
  if (fs.existsSync(comp)) {
    const lines = fs.readFileSync(comp, 'utf8').split('\n');
    const matched = [];
    lines.forEach((l, idx) => {
      if (emojiRegex.test(l)) {
        matched.push(`  L${idx + 1}: ${l.trim()}`);
      }
    });
    if (matched.length > 0) {
      console.log(`=== ${comp} (${matched.length}) ===`);
      console.log(matched.join('\n'));
    }
  }
});
