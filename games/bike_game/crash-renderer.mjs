// An intact rider silhouette and a visibly broken bike; all motion is presentation-only.
export function drawCrash(r,scene){
  const c=r.ctx,t=Math.max(0,scene.age-.09),d=scene.direction,unit=r.bikeUnit();
  const at=pose=>{const p=r.project(pose.z,pose.x);return{...p,y:p.y-pose.height*(r.halfRoad/7)*p.scale};};
  const shadow=(pose,width)=>{const p=r.project(pose.z,pose.x);c.fillStyle='#0007';c.beginPath();c.ellipse(p.x,p.y,unit*width*p.scale,unit*.25*p.scale,0,0,Math.PI*2);c.fill();};
  const origin=r.project(0,scene.originX),bp=at(scene.bike),rp=at(scene.rider),wp=at(scene.wheel);
  // Scraped asphalt remains under the wreck after the sparks die away.
  if(t>.08){
    const ground=r.project(scene.bike.z,scene.bike.x);c.strokeStyle='#05090dcc';c.lineWidth=unit*.28;c.lineCap='round';
    c.beginPath();c.moveTo(origin.x,origin.y-unit*.25);c.quadraticCurveTo(origin.x+d*unit*1.7,origin.y-unit*.9,ground.x,ground.y);c.stroke();
    c.strokeStyle='#cbd2ca55';c.lineWidth=Math.max(1,unit*.045);c.stroke();
  }
  for(let i=0;i<12;i++){
    const spread=((i*37)%17-8)/8,p=scene.debrisProgress;
    const part={x:Math.max(-.9,Math.min(.9,scene.originX+(d*.22+spread*.29)*p)),z:(2+(i*7)%12)*p,height:Math.max(0,Math.sin(Math.min(1,t/(.45+i*.025))*Math.PI))*(.3+i%3*.23)};
    const q=at(part),s=unit*q.scale;
    c.save();c.translate(q.x,q.y);c.rotate(spread*p*5);
    r.poly(i%3===0?'#d5ddd7':i%3===1?'#387582':'#202f3d',[[-s*.20,-s*.12],[s*.17,-s*.08],[s*.08,s*.14],[-s*.14,s*.04]]);c.restore();
  }
  shadow(scene.bike,.95);
  c.save();c.translate(bp.x,bp.y);c.rotate(scene.bike.angle);c.scale(bp.scale,bp.scale);
  // Rear wheel, exposed frame, dented tank and snapped fork. The front wheel is separate.
  c.fillStyle='#02070c';c.beginPath();c.ellipse(0,-unit*.12,unit*.23,unit*.46,0,0,Math.PI*2);c.fill();
  c.strokeStyle='#7a9299';c.lineWidth=unit*.10;c.beginPath();c.moveTo(-unit*.26,-unit*.37);c.lineTo(unit*.19,-unit*1.25);c.lineTo(-unit*.30,-unit*1.37);c.lineTo(unit*.19,-unit*.38);c.stroke();
  r.poly('#b6c7c5',[[-unit*.31,-unit*.43],[unit*.24,-unit*.36],[unit*.32,-unit*.87],[unit*.10,-unit*1.29],[-unit*.28,-unit*1.12]]);
  r.poly('#234c58',[[-unit*.24,-unit*.54],[unit*.19,-unit*.48],[unit*.22,-unit*.89],[-unit*.05,-unit*1.13],[-unit*.25,-unit*.91]]);
  c.strokeStyle='#09131c';c.lineWidth=unit*.10;c.beginPath();c.moveTo(-unit*.25,-unit*.77);c.lineTo(unit*.05,-unit*.68);c.lineTo(-unit*.09,-unit*.98);c.lineTo(unit*.23,-unit*1.04);c.stroke();
  c.strokeStyle='#a0aaa8';c.lineWidth=unit*.075;c.beginPath();c.moveTo(-unit*.16,-unit*1.18);c.lineTo(-unit*.39,-unit*1.53);c.lineTo(-unit*.10,-unit*1.69);c.moveTo(unit*.14,-unit*1.14);c.lineTo(unit*.41,-unit*1.40);c.stroke();
  c.fillStyle='#b54e4a';c.fillRect(-unit*.18,-unit*.38,unit*.30,unit*.09);c.restore();
  shadow(scene.wheel,.46);
  c.save();c.translate(wp.x,wp.y-unit*.28*wp.scale);c.rotate(scene.wheel.angle);c.scale(wp.scale,wp.scale);
  c.strokeStyle='#040a10';c.lineWidth=unit*.13;c.beginPath();c.ellipse(0,0,unit*.31,unit*.35,0,0,Math.PI*2);c.stroke();
  c.strokeStyle='#96a9ad';c.lineWidth=unit*.045;for(let i=0;i<5;i++){const a=i*Math.PI*2/5;c.beginPath();c.moveTo(0,0);c.lineTo(Math.cos(a)*unit*.26,Math.sin(a)*unit*.30);c.stroke();}c.restore();
  if(!scene.reduced&&t<.85){
    for(let i=0;i<38;i++){
      const life=.25+(i%7)*.08,p=t/life;if(p>=1)continue;
      const angle=i*2.39996,reach=unit*(1.4+(i%5)*.7)*p;
      const x=origin.x+Math.cos(angle)*reach+d*unit*p,y=origin.y-unit*.55+Math.sin(angle)*reach*.55-unit*Math.sin(p*Math.PI)*.8;
      c.globalAlpha=(1-p)*.9;c.strokeStyle=i%3?'#ffba67':'#fff3bf';c.lineWidth=Math.max(1,unit*.07*(1-p));c.beginPath();c.moveTo(x,y);c.lineTo(x-Math.cos(angle)*unit*.32,y-Math.sin(angle)*unit*.16);c.stroke();
    }c.globalAlpha=1;
  }
  // The helmet stays on the rider; limbs bend and tumble as one whole figure.
  shadow(scene.rider,.8);
  const u=unit*rp.scale;
  c.save();c.translate(rp.x,rp.y-u*.50);c.rotate(scene.rider.angle);c.lineCap='round';c.lineJoin='round';
  const fold=scene.rider.fold;
  const limb=(points,color,width)=>{c.strokeStyle=color;c.lineWidth=width*u;c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x*u,y*u):c.moveTo(x*u,y*u));c.stroke();};
  limb([[-.18,.15],[-.47,.58+fold*.13],[-.22,.99]],'#111f30',.24);
  limb([[.18,.15],[.50,.51-fold*.12],[.65,.93]],'#182b3b',.24);
  limb([[-.25,-.62],[-.62,-.33-fold*.18],[-.86,-.61]],'#d37969',.20);
  limb([[.25,-.62],[.61,-.79+fold*.18],[.84,-.42]],'#d37969',.20);
  r.poly('#d27666',[[-u*.29,-u*.76],[u*.29,-u*.76],[u*.33,-u*.15],[u*.19,u*.23],[-u*.18,u*.23],[-u*.34,-u*.19]]);
  r.poly('#963e43',[[-u*.17,-u*.62],[u*.17,-u*.62],[u*.16,u*.09],[-u*.15,u*.09]]);
  c.fillStyle='#0e2130';c.beginPath();c.ellipse(0,-u*1.03,u*.29,u*.32,0,0,Math.PI*2);c.fill();
  c.strokeStyle='#d4e9e1';c.lineWidth=u*.06;c.stroke();c.strokeStyle='#92dddc';c.lineWidth=u*.07;c.beginPath();c.moveTo(-u*.20,-u*1.05);c.lineTo(u*.20,-u*1.05);c.stroke();c.restore();
  // A few slow wisps keep the final wreck readable without an explosion or flashing.
  if(t>.45){for(let i=0;i<5;i++){
    const p=Math.min(1,(t-.45)/1.5),radius=unit*(.22+i*.09)*p;
    c.fillStyle=`rgba(145,161,164,${.11*p})`;c.beginPath();c.ellipse(bp.x+(i-2)*unit*.15,bp.y-unit*(.8+p*(1+i*.33)),radius,radius*1.3,0,0,Math.PI*2);c.fill();
  }}
}
