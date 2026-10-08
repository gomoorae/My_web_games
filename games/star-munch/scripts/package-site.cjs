const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw new Error('Usage: node scripts/package-site.cjs <game-site-directory>');
const site = path.resolve(process.argv[2]);
if (!fs.existsSync(path.join(site, 'games.json'))) throw new Error('Expected an existing game site with games.json');
const game = path.join(site, 'games', 'star-munch');
const files = ['index.html', 'README.md', 'package.json', '.gitignore'];
for (const directory of ['src', 'assets', 'scripts', 'tests']) {
  for (const name of fs.readdirSync(path.join(root, directory)).sort()) {
    if (fs.statSync(path.join(root, directory, name)).isFile()) files.push(`${directory}/${name}`);
  }
}
for (const file of files) {
  const source = path.join(root, file), destination = path.join(game, file);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  if (source !== destination) fs.copyFileSync(source, destination);
}
const hero = fs.readFileSync(path.join(root, 'assets/hero.webp')).toString('base64');
const thumbnail = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <defs>
    <linearGradient id="sky" x2="0.8" y2="1"><stop stop-color="#b5ded9"/><stop offset="1" stop-color="#f8edcc"/></linearGradient>
    <path id="star" d="M0-18 5-6 18-5 9 4 11 17 0 10-11 17-9 4-18-5-5-6Z"/>
  </defs>
  <rect width="800" height="450" fill="url(#sky)"/>
  <circle cx="660" cy="80" r="120" fill="#fff7cc" opacity=".35"/>
  <g fill="#fffdf1" opacity=".55"><ellipse cx="58" cy="68" rx="136" ry="35"/><ellipse cx="700" cy="410" rx="235" ry="62"/><ellipse cx="437" cy="442" rx="173" ry="52"/></g>
  <g fill="#ffdc7b" stroke="#c3973e" stroke-width="2"><use href="#star" x="438" y="105"/><use href="#star" x="733" y="209"/><use href="#star" x="363" y="324"/></g>
  <g fill="#306c60" font-family="system-ui, sans-serif"><text x="54" y="113" font-size="15" letter-spacing="4">STAR MUNCH</text><text x="49" y="224" font-size="88" font-weight="800" letter-spacing="-5">별냠</text><text x="55" y="276" font-size="24" font-weight="600">별 하나, 큰 도약.</text><text x="55" y="349" font-size="13" letter-spacing="1" opacity=".7">← → MOVE · SPACE JUMP</text></g>
  <ellipse cx="579" cy="376" rx="89" ry="15" fill="#599e80" opacity=".12"/>
  <image href="data:image/webp;base64,${hero}" x="405" y="39" width="354" height="354"/>
</svg>\n`;
fs.mkdirSync(path.join(site, 'thumbs'), { recursive: true });
fs.writeFileSync(path.join(site, 'thumbs/star-munch.svg'), thumbnail);
const paths = [...files.map(file => `games/star-munch/${file}`), 'thumbs/star-munch.svg'];
const manifest = paths.map(file => {
  const bytes = fs.readFileSync(path.join(site, file));
  return { path: file, bytes: bytes.length, sha256: crypto.createHash('sha256').update(bytes).digest('hex') };
});
fs.mkdirSync(path.join(root, 'build'), { recursive: true });
fs.writeFileSync(path.join(root, 'build/site-package.json'), JSON.stringify({ version: JSON.parse(fs.readFileSync(path.join(root, 'package.json'))).version, files: manifest }, null, 2) + '\n');
console.log(`Prepared ${paths.length} files in ${game}`);
