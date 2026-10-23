import {cp,mkdir,readdir,readFile,writeFile,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

// Preserve source modules and tests beside the static browser build.
const root=path.dirname(fileURLToPath(import.meta.url));
const destination=path.resolve(process.argv[2]||path.join(root,'release/web'));
if(destination===root||destination===path.join(root,'dist'))throw Error('Choose a separate output folder.');
const sharp=(await import(process.env.LAST_DELIVERY_SHARP||'sharp')).default;
await mkdir(destination,{recursive:true});
await cp(path.join(root,'dist'),path.join(destination,'dist'),{recursive:true,filter:source=>!source.endsWith('.png')&&!source.endsWith('/local-audio.js')});
for(const name of ['build.mjs','export.mjs','restore-assets.mjs','publish-web.mjs','package.json','README.md','tests','scripts']){
  await cp(path.join(root,name),path.join(destination,name),{recursive:true});
}
const assets=path.join(root,'dist/assets');
let sourceBytes=0,webBytes=0;
for(const name of await readdir(assets)){
  if(!name.endsWith('.png'))continue;
  const source=path.join(assets,name),output=path.join(destination,'dist/assets',name.replace(/\.png$/,'.webp'));
  await sharp(source).webp({quality:88,alphaQuality:100,effort:5}).toFile(output);
  sourceBytes+=(await stat(source)).size;webBytes+=(await stat(output)).size;
}
for(const name of await readdir(path.join(destination,'dist'))){
  if(!name.endsWith('.css'))continue;
  const target=path.join(destination,'dist',name);
  await writeFile(target,(await readFile(target,'utf8')).replace(/assets\/([a-zA-Z0-9_-]+)\.png/g,'assets/$1.webp'));
}
const html=await readFile(path.join(destination,'dist/index.html'),'utf8');
await writeFile(path.join(destination,'index.html'),html.replace(/href="([^"/]+\.css)(\?[^"<>]*)?"/g,'href="dist/$1$2"').replace(/src="game\.js(\?[^"<>]*)?"/,'src="dist/game.js$1"'));
console.log(JSON.stringify({destination,sourceImageBytes:sourceBytes,webImageBytes:webBytes}));
