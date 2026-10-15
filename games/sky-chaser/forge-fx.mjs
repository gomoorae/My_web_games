const TAU=Math.PI*2,clamp=v=>Math.max(0,Math.min(1,v));
function circle(c,x,y,r,color){c.fillStyle=color;c.beginPath();c.arc(x,y,r,0,TAU);c.fill();}
function glow(c,x,y,r,color,alpha){
  c.save();c.globalCompositeOperation='lighter';c.globalAlpha*=alpha;
  const g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,color);g.addColorStop(1,color+'00');
  c.fillStyle=g;c.fillRect(x-r,y-r,r*2,r*2);c.restore();
}
export function drawMortars(c,mortars){
  for(const m of mortars){
    if(m.dead)continue;
    const r=m.blastRadius,progress=clamp(m.age/(m.flight+m.fuse));
    c.save();c.translate(m.tx,m.ty);
    circle(c,0,0,r,m.exploded?'#ff9d5738':'#f2a35413');
    c.strokeStyle='#172b39dd';c.lineWidth=3.5;c.beginPath();c.arc(0,0,r,0,TAU);c.stroke();
    c.strokeStyle=m.exploded?'#ffe7a9':'#ffc17b';c.lineWidth=m.exploded?2:1;c.beginPath();c.arc(0,0,r,0,TAU);c.stroke();
    if(!m.exploded){
      c.lineWidth=2;c.beginPath();c.arc(0,0,r-4,-Math.PI/2,-Math.PI/2+TAU*progress);c.stroke();
      for(let i=0;i<4;i++){c.rotate(TAU/4);c.beginPath();c.moveTo(0,-r-6);c.lineTo(0,-r+1);c.stroke();}
    }else{
      const q=clamp((m.age-m.flight-m.fuse)/m.blastDuration);
      glow(c,0,0,r*1.4,'#ff9a4f',.7*(1-q*.5));
      for(let i=0;i<7;i++){
        const a=i*2.4+m.age*3,dist=r*(.1+q*.5),x=Math.cos(a)*dist,y=Math.sin(a)*dist;
        glow(c,x,y,r*(.4-q*.15),i%2?'#ffe6a2':'#ff9c48',.8*(1-q*.6));
      }
    }
    c.restore();
    if(m.exploded)continue;
    if(m.age<m.flight){
      for(let i=4;i>0;i--){
        const q=clamp((m.age-i*.035)/m.flight);
        const x=m.startX+(m.tx-m.startX)*q,y=m.startY+(m.ty-m.startY)*q-Math.sin(q*Math.PI)*48;
        glow(c,x,y,10-i,'#ffbf72',.13);
      }
    }
    c.save();c.translate(m.x,m.y);c.rotate(m.age*3.5);
    for(let i=0;i<4;i++){
      c.rotate(TAU/4);c.fillStyle='#e6cd9f';c.beginPath();c.moveTo(-3,-7);c.lineTo(0,-14);c.lineTo(3,-7);c.fill();
    }
    circle(c,0,0,11,'#132a39');
    const brass=c.createRadialGradient(-3,-4,1,0,0,10);brass.addColorStop(0,'#ffe5b1');brass.addColorStop(.4,'#bd8446');brass.addColorStop(1,'#63412e');
    circle(c,0,0,9.5,brass);circle(c,0,0,6.5,'#682c24');
    glow(c,0,0,10,'#ff8c3d',.75);circle(c,-1,-1,3.4,'#ffe7a4');
    c.strokeStyle='#402e2a';c.lineWidth=2;
    for(const x of [-5,5]){c.beginPath();c.moveTo(x,-7);c.lineTo(x,7);c.stroke();}
    c.restore();
    c.save();c.fillStyle='#183342dd';c.fillRect(m.x-10,m.y+16,20,2);
    c.fillStyle='#ffd395';c.fillRect(m.x-10,m.y+16,20*m.hp/m.maxHp,2);c.restore();
  }
}
