import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {MUSIC_TRACKS} from './dist/music-catalog.mjs';
const root=new URL('./',import.meta.url),out=new URL('./release/',root);mkdirSync(out,{recursive:true});
let css=['style.css','vfx.css','inventory.css','inventory-board.css','cutscene.css','performance.css','mobile.css','assembly.css','audio.css'].map(f=>readFileSync(new URL(`dist/${f}`,root),'utf8')).join('\n');
const declarations=[],assets=[...new Set([...css.matchAll(/url\(['"]?(assets\/[^)'"\s]+)['"]?\)/g)].map(m=>m[1]))];
for(let i=0;i<assets.length;i++){
 const file=assets[i],ext=file.split('.').at(-1),mime=ext==='otf'?'font/otf':ext==='png'?'image/png':ext==='webp'?'image/webp':'application/octet-stream';
 const data=readFileSync(new URL(`dist/${file}`,root)).toString('base64');
 if(ext==='otf')css=css.replaceAll(`url('${file}')`,`url("data:${mime};base64,${data}")`);
 else{declarations.push(`--embedded-${i}:url("data:${mime};base64,${data}")`);css=css.replaceAll(`url('${file}')`,`var(--embedded-${i})`);}
}
css=`:root{${declarations.join(';')}}\n`+css;
const embeddedAudio=Object.fromEntries(Object.values(MUSIC_TRACKS).map(track=>[track.src,`data:audio/mp4;base64,${readFileSync(new URL(`dist/${track.src}`,root)).toString('base64')}`]));
const script=(`globalThis.LAST_DELIVERY_EMBEDDED_AUDIO=${JSON.stringify(embeddedAudio)};\n`+readFileSync(new URL('dist/game.js',root),'utf8')).replaceAll('</script','<\\/script');
let html=readFileSync(new URL('dist/index.html',root),'utf8').replace('<link rel="stylesheet" href="style.css">',`<style>${css}</style>`).replace(/<link rel="stylesheet" href="vfx\.css(?:\?[^"<>]*)?">/,'').replace('<link rel="stylesheet" href="inventory.css">','').replace('<link rel="stylesheet" href="cutscene.css">','').replace(/<script defer src="game\.js(?:\?[^"<>]*)?"><\/script>/,'');
html=html.replace('<link rel="stylesheet" href="inventory-board.css">','').replace(/<link rel="stylesheet" href="(?:performance|mobile|assembly|audio)\.css(?:\?[^"<>]*)?">/g,'').replace('</body>',`<script>${script}</script>\n</body>`);
const license=readFileSync(new URL('dist/assets/NotoSerif-LICENSE.txt',root),'utf8').replaceAll('--','—');
html+=`\n<!-- Bundled font license\n${license}\n-->`;
const musicCredits=readFileSync(new URL('dist/assets/music/CREDITS.txt',root),'utf8').replaceAll('--','—');
html+=`\n<!-- Music credits\n${musicCredits}\n-->`;
writeFileSync(new URL('asset-map.json',out),JSON.stringify(assets,null,2));
writeFileSync(new URL('Last-Delivery.html',out),html);console.log(`Standalone HTML: ${Buffer.byteLength(html)} bytes`);
