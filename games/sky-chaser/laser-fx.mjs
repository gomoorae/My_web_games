// Procedural light layers follow the locked collision ray and simulation age.
// No text labels or screen flash; pause also freezes every filament and spark.
import {glow} from './canvas-fx.mjs?v=0.9.2';
const TAU=Math.PI*2;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const smooth=v=>{v=clamp(v,0,1);return v*v*(3-2*v);};
function line(c,points,color,width){
  c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));
  c.strokeStyle=color;c.lineWidth=width;c.stroke();
}
function bloom(c,x,y,rx,ry,color,alpha=1){
  glow(c,x,y,rx,color,alpha,ry,'laser');
}
function emitter(c,age,charge,active,fade){
  const spin=age*(active?-.8:1.4),r=17+charge*4;
  bloom(c,0,0,active?51:35,active?40:27,active?'#46dfff':'#ffc36d',fade*(active?.65:.28+charge*.22));
  c.save();c.rotate(spin);c.globalAlpha*=fade;
  c.strokeStyle='#122b43';c.lineWidth=4;c.beginPath();c.ellipse(0,0,r,r*.65,0,0,TAU);c.stroke();
  c.strokeStyle=active?'#9ef7ee':'#eac58d';c.lineWidth=1.4;
  for(let i=0;i<6;i++){
    const a=i*TAU/6;c.beginPath();c.ellipse(0,0,r,r*.65,0,a+.1,a+.74);c.stroke();
    const x=Math.cos(a)*r,y=Math.sin(a)*r*.65;
    line(c,[[x-2,y],[x,y-3],[x+2,y],[x,y+3],[x-2,y]],'#fff1bd',.8);
  }
  c.rotate(-spin*2);c.strokeStyle=active?'#9efeffb5':'#f4d394b5';c.lineWidth=.8;
  c.beginPath();c.ellipse(0,0,r*.63,r*.9,0,0,TAU);c.stroke();c.restore();
  for(let i=0;i<13;i++){
    const q=(i/13+age*(active?1.8:.65))%1,a=i*2.4+age;
    const radius=active?5+q*35:(1-q)*(31+charge*10);
    const x=Math.cos(a)*radius,y=Math.sin(a)*radius*.7;
    c.save();c.globalAlpha*=fade*(active?1-q:q)*.8;
    line(c,[[x*1.15,y*1.15],[x,y]],active?'#afffff':'#ffe0a5',i%3?1:1.7);c.restore();
  }
  bloom(c,0,0,active?18:5+charge*10,active?24:5+charge*8,'#e7fff1',fade*(active?.9:charge*.65));
}

export function drawLaser(c,l){
  const angle=Math.atan2(l.y2-l.y,l.x2-l.x),length=Math.hypot(l.x2-l.x,l.y2-l.y);
  const active=l.age>=l.warning,charge=smooth(l.age/l.warning),age=l.age;
  const lockDistance=clamp(Math.hypot((l.lockX??l.x)-l.x,(l.lockY??l.y+360)-l.y),90,length);
  c.save();c.translate(l.x,l.y);c.rotate(angle-Math.PI/2);c.lineCap='round';
  if(!active){
    // The lane brightens gradually; a contracting, segmented reticle marks
    // the position chosen at lock time without chasing the moving player.
    const guide=c.createLinearGradient(0,0,0,length);
    guide.addColorStop(0,'#ffe0a9');guide.addColorStop(.65,'#ffd17b99');guide.addColorStop(1,'#ffd17b00');
    c.globalAlpha=.4+charge*.35;line(c,[[0,12],[0,length]],'#183044',3.4);
    c.globalAlpha=.55+charge*.4;line(c,[[0,12],[0,length]],guide,1+charge*.65);
    c.globalAlpha=.1+charge*.12;
    line(c,[[-l.width/2,18],[-l.width/2,length]],'#f7cc82',1);
    line(c,[[l.width/2,18],[l.width/2,length]],'#f7cc82',1);
    for(let i=0;i<9;i++){
      const y=((i/9+age*.7)%1)*Math.min(length,740);
      c.globalAlpha=(.2+charge*.4)*Math.sin(Math.PI*y/Math.min(length,740));
      line(c,[[0,y],[0,y+8]],'#fff1cd',1.8);
    }
    c.globalAlpha=1;
    c.save();c.translate(0,lockDistance);c.rotate((1-charge)*.45);
    const r=36-charge*10;c.lineWidth=1.5;c.strokeStyle='#102e42';
    for(let i=0;i<4;i++){
      c.rotate(TAU/4);line(c,[[-5,-r-2],[-r*.55,-r-2],[-r,-r*.55],[-r,-5]],'#173443',3.8);
      line(c,[[-5,-r-2],[-r*.55,-r-2],[-r,-r*.55],[-r,-5]],'#ffdf9f',1.3);
    }
    c.globalAlpha=.5+charge*.35;line(c,[[-3,0],[3,0]],'#fff4cf',1);line(c,[[0,-3],[0,3]],'#fff4cf',1);
    c.restore();emitter(c,age,charge,false,1);
  }else{
    const elapsed=age-l.warning,remaining=l.warning+l.duration-age;
    const fade=.7+.3*smooth(remaining/.09),ignition=Math.exp(-elapsed*22);
    const radius=l.width/2;
    const halo=c.createLinearGradient(-radius*3.6,0,radius*3.6,0);
    halo.addColorStop(0,'#267aff00');halo.addColorStop(.27,'#3baffe15');halo.addColorStop(.42,'#52e8ff90');
    halo.addColorStop(.5,'#b6fff3b0');halo.addColorStop(.58,'#52e8ff90');halo.addColorStop(.73,'#3baffe15');halo.addColorStop(1,'#267aff00');
    c.save();c.globalCompositeOperation='lighter';c.globalAlpha=fade*(.65+ignition*.3);
    c.fillStyle=halo;c.fillRect(-radius*3.6,0,radius*7.2,length);c.restore();
    // The solid beam occupies the actual dangerous width; its soft halo is
    // only light, so the visible edge remains useful for precise dodging.
    const body=c.createLinearGradient(-radius,0,radius,0);
    body.addColorStop(0,'#147dba');body.addColorStop(.18,'#5bdff6');body.addColorStop(.37,'#b8fff1');
    body.addColorStop(.5,'#f8ffe6');body.addColorStop(.63,'#c9ffff');body.addColorStop(.82,'#5ee9f3');body.addColorStop(1,'#258ebc');
    c.globalAlpha=fade;c.fillStyle=body;c.fillRect(-radius,0,l.width,length);
    c.save();c.beginPath();c.rect(-radius,0,l.width,length);c.clip();c.globalCompositeOperation='lighter';
    for(const side of [-1,1]){
      const points=[];
      for(let y=0;y<=length;y+=13)points.push([side*radius*.38+Math.sin(y*.045-age*38+side)*radius*.26,y]);
      line(c,points,side<0?'#dffffeb0':'#98dfff80',1.1);
    }
    for(let i=0;i<12;i++){
      const y=((age*2.5+i/12)%1)*length,x=Math.sin(i*7)*radius*.44;
      const streak=c.createLinearGradient(x,y-36,x,y+6);streak.addColorStop(0,'#eafff000');streak.addColorStop(1,'#ffffffb0');
      line(c,[[x,y-36],[x,y+6]],streak,1.8);
    }c.restore();
    // Ejected energy travels alongside the column, with a concentrated muzzle flash.
    for(let i=0;i<8;i++){
      const q=(i/8+elapsed*1.9)%1,y=q*Math.min(length,750),side=i%2?1:-1;
      const x=side*(radius+3+Math.sin(i*3+age*9)*2);
      c.save();c.globalAlpha=.5*Math.sin(q*Math.PI)*fade;
      line(c,[[x,y],[x+side*2,y+8]],'#a0f5ff',.8);c.restore();
    }
    emitter(c,age,1,true,fade);
    bloom(c,0,6,46+ignition*30,24+ignition*18,'#bdfff3',.3+ignition*.6);
    c.save();c.globalAlpha=ignition*.8;line(c,[[-33,0],[33,0]],'#e7fff0',1.3);c.restore();
  }
  c.restore();
}
