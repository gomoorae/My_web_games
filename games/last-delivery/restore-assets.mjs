import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
const root=new URL('./',import.meta.url);
const htmlPath=existsSync(new URL('Last-Delivery.html',root))?new URL('Last-Delivery.html',root):new URL('release/Last-Delivery.html',root);
const mapPath=existsSync(new URL('asset-map.json',root))?new URL('asset-map.json',root):new URL('release/asset-map.json',root);
const html=readFileSync(htmlPath,'utf8'),assets=JSON.parse(readFileSync(mapPath,'utf8'));
mkdirSync(new URL('dist/assets/',root),{recursive:true});
for(let i=0;i<assets.length;i++){
 const name=assets[i];if(!/^assets\/[a-zA-Z0-9_.-]+$/.test(name))throw Error('Unexpected asset name');
 const pattern=name.endsWith('.otf')?/url\("data:font\/otf;base64,([A-Za-z0-9+/=]+)"\)/:new RegExp(`--embedded-${i}:url\\("data:image/(?:png|webp);base64,([A-Za-z0-9+/=]+)"\\)`);
 const match=html.match(pattern);if(!match)throw Error(`Missing ${name}`);
 writeFileSync(new URL(`dist/${name}`,root),Buffer.from(match[1],'base64'));
}
console.log(`Restored ${assets.length} original assets. Run node build.mjs, then node export.mjs after editing.`);
