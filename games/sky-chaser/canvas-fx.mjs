// Soft lights use bounded, reusable textures. Their positions, sizes, colours,
// blending and animation remain driven by the original drawing code.
const textures=new Map(),SIZE=256,MAX_TEXTURES=64;
function texture(key,paint,width=SIZE,height=SIZE){
  if(textures.has(key))return textures.get(key);
  const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
  const c=canvas.getContext('2d');c.translate(width/2,height/2);c.scale(width/2,height/2);paint(c);
  if(textures.size>=MAX_TEXTURES)textures.delete(textures.keys().next().value);
  textures.set(key,canvas);return canvas;
}
export function normalShot(c,x,y){
  const image=texture('normal-shot',t=>{
    t.scale(1/4,1/22);
    const tail=t.createLinearGradient(0,-11,0,22);tail.addColorStop(0,'#fffbd8');tail.addColorStop(.3,'#bfffe2');tail.addColorStop(1,'#6de5df00');
    t.fillStyle=tail;t.beginPath();t.roundRect(-2,-11,4,33,2);t.fill();
    t.fillStyle='#fff7dd';t.beginPath();t.ellipse(0,-7,1.4,5,0,0,Math.PI*2);t.fill();
  },24,132);
  c.drawImage(image,x-4,y-22,8,44);
}
export function glow(c,x,y,r,color,alpha=1,ry=r,profile='soft'){
  if(r<=0||ry<=0||alpha<=0)return;
  const image=texture('glow:'+profile+':'+color,t=>{
    const g=t.createRadialGradient(0,0,0,0,0,1);g.addColorStop(0,color);
    if(profile==='laser')g.addColorStop(.25,color+'a8');
    g.addColorStop(1,profile==='soft'?'#00000000':color+'00');
    t.fillStyle=g;t.fillRect(-1,-1,2,2);
  });
  c.save();c.globalCompositeOperation='lighter';c.globalAlpha*=alpha;
  c.drawImage(image,x-r,y-ry,r*2,ry*2);c.restore();
}
export function flame(c,x,y,r,reactor,early,alpha){
  if(r<=0||alpha<=0)return;
  const image=texture('flame:'+reactor+':'+early,t=>{
    const g=t.createRadialGradient(-.2,-.2,0,0,0,1);
    g.addColorStop(0,reactor?(early?'#f2fff1':'#adfff0'):(early?'#fff4c8':'#ffd08b'));
    g.addColorStop(.45,reactor?'#55e6eacc':'#ff9f4ecc');g.addColorStop(1,reactor?'#207ea900':'#cf5a2400');
    t.fillStyle=g;t.beginPath();t.arc(0,0,1,0,Math.PI*2);t.fill();
  });
  c.save();c.globalAlpha*=alpha;c.drawImage(image,x-r,y-r,r*2,r*2);c.restore();
}
