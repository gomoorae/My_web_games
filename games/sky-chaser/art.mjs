// Original generated paintings remain untouched. These canvases are runtime
// sprite views, alpha silhouettes and lighting passes, not replacement artwork.
export const ART_FILES = Object.freeze({
  lumi: './assets/lumi-flight-v2.png',
  fleet: './assets/pirate-fleet-v2.png',
  airship: './assets/iron-raven-airship-v2.png',
  raven: './assets/iron-raven-awakened-v2.png',
  harbor: './assets/harbor-painted-v2.png'
});
const makeCanvas=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c;};
function loadImage(url) {
  return new Promise((resolve,reject)=>{
    const img=new Image();
    img.onload=()=>resolve(img);
    img.onerror=()=>reject(new Error('그림을 불러오지 못했습니다: '+url));
    img.src=url;
  });
}
function silhouette(image,color) {
  const canvas=makeCanvas(image.width,image.height),c=canvas.getContext('2d');
  c.drawImage(image,0,0);c.globalCompositeOperation='source-in';c.fillStyle=color;
  c.fillRect(0,0,canvas.width,canvas.height);
  return canvas;
}
function sprite(image,column,row,columns,rows,limit=384) {
  const cw=Math.floor(image.width/columns),ch=Math.floor(image.height/rows);
  const scan=makeCanvas(cw,ch),sc=scan.getContext('2d',{willReadFrequently:true});
  sc.drawImage(image,column*cw,row*ch,cw,ch,0,0,cw,ch);
  const pixels=sc.getImageData(0,0,cw,ch).data;
  let x0=cw,y0=ch,x1=0,y1=0;
  for(let y=0;y<ch;y++)for(let x=0;x<cw;x++)if(pixels[(y*cw+x)*4+3]>24){
    x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y);
  }
  if(x1<x0||y1<y0)throw new Error('빈 스프라이트입니다.');
  x0=Math.max(0,x0-2);y0=Math.max(0,y0-2);x1=Math.min(cw-1,x1+2);y1=Math.min(ch-1,y1+2);
  const sw=x1-x0+1,sh=y1-y0+1,scale=Math.min(1,limit/Math.max(sw,sh));
  const result=makeCanvas(Math.ceil(sw*scale),Math.ceil(sh*scale));
  const c=result.getContext('2d');c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
  c.drawImage(scan,x0,y0,sw,sh,0,0,result.width,result.height);
  return {image:result,shadow:silhouette(result,'#132d42'),flash:silhouette(result,'#fff7d1'),
    ratio:result.height/result.width};
}
export class ArtBank {
  constructor(){this.sprites={};this.images={};this.loaded=false;}
  async load(onProgress=()=>{}) {
    let complete=0;
    await Promise.all(Object.entries(ART_FILES).map(async([key,url])=>{
      this.images[key]=await loadImage(url);onProgress(++complete,Object.keys(ART_FILES).length);
    }));
    this.sprites.lumi=[0,1,2].map(i=>sprite(this.images.lumi,i,0,3,1));
    ['scout','interceptor','turret','bomber','mine','midboss'].forEach((name,i)=>{
      this.sprites[name]=sprite(this.images.fleet,i%3,Math.floor(i/3),3,2,name==='midboss'?512:256);
    });
    this.sprites.airship=sprite(this.images.airship,0,0,1,1,768);
    this.sprites.raven=sprite(this.images.raven,0,0,1,1,768);
    this.loaded=true;
  }
}
