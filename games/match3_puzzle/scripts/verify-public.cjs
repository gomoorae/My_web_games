// Hash verification complements the native-browser play checks; it is not a handset test.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const base = process.argv[2] || 'https://gomoorae.github.io/My_web_games/games/match3_puzzle/';
const output = process.argv[3];
const files = ['index.html', 'engine.js', 'game.js', 'style.css'];
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
(async () => {
  const results = await Promise.all(files.map(async file => {
    const url = new URL(file, base); url.searchParams.set('v', '2.0.1');
    const response = await fetch(url, { cache: 'no-store', signal: AbortSignal.timeout(30000) });
    const bytes = Buffer.from(await response.arrayBuffer());
    const local = sha(fs.readFileSync(path.join(root, file))), published = sha(bytes);
    return { file, status: response.status, bytes: bytes.length, localSha256: local, publicSha256: published, matches: response.ok && local === published };
  }));
  const report = { version: '2.0.1', checkedAt: new Date().toISOString(), base, commit: process.env.MATCH3_RELEASE_COMMIT || null, allMatch: results.every(r => r.matches), files: results };
  if (output) fs.writeFileSync(output, JSON.stringify(report, null, 2) + '\n');
  console.log(report.allMatch ? 'PUBLIC_OK: 4 runtime hashes match.' : 'PUBLIC_MISMATCH: ' + results.filter(r => !r.matches).map(r => r.file).join(', '));
  if (!report.allMatch) process.exitCode = 1;
})().catch(error => { console.error(error.message); process.exitCode = 1; });
