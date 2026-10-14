import {ROAD_HALF_METERS} from './core.mjs?v=3.1.1';
const PAINT=[['#d47b73','#7d3d45','#ed9c85'],['#89b9d3','#395977','#b2d5df'],['#d9dbce','#747f87','#f1ead5'],['#79b9a9','#35605e','#b0d9bf'],['#d7b66b','#78623a','#f7d890'],['#ad96c7','#5b4879','#d1b5dc']];
export function drawVehicle(renderer,car,time){
  const c=renderer.ctx,center=renderer.project(car.z,car.x);
  const [paint,dark,light]=PAINT[car.color%PAINT.length];
  const w=car.width,l=car.length,rear=-l/2,front=l/2;
  const sy=Math.sin(car.yaw||0),cy=Math.cos(car.yaw||0);
  const vertical=Math.min(1,renderer.h/renderer.w*1.55);
  const q=(x,z,h=0)=>{
    const p=renderer.project(car.z+z*cy-x*sy,car.x+(x*cy+z*sy)/ROAD_HALF_METERS);
    return[p.x,p.y-h*(renderer.halfRoad/ROAD_HALF_METERS)*p.scale*vertical];
  };
  const poly=(color,points)=>renderer.poly(color,points.map(p=>q(...p)));
  const line=(color,points,width=1)=>{c.strokeStyle=color;c.lineWidth=Math.max(.5,width*center.scale);c.beginPath();points.forEach((p,i)=>{const a=q(...p);if(i)c.lineTo(...a);else c.moveTo(...a);});c.stroke();};
  const face=(z,x0,x1,h0,h1,color)=>poly(color,[[x0,z,h0],[x1,z,h0],[x1,z,h1],[x0,z,h1]]);
  const sideRect=(x,z0,z1,h0,h1,color)=>poly(color,[[x,z0,h0],[x,z1,h0],[x,z1,h1],[x,z0,h1]]);
  const roof=(z0,z1,width,height,color)=>poly(color,[[-width/2,z0,height],[width/2,z0,height],[width/2,z1,height],[-width/2,z1,height]]);
  const box=(z0,z1,width,h0,h1,colors)=>{
    const [top,side,back]=colors;
    sideRect(-width/2,z0,z1,h0,h1,side);sideRect(width/2,z0,z1,h0,h1,side);
    roof(z0,z1,width,h1,top);face(z0,-width/2,width/2,h0,h1,back);
  };
  const cameraAcross=(renderer.playerX*.25-car.x)*ROAD_HALF_METERS*cy+(car.z+34)*sy;
  const visibleSide=cameraAcross>=0?1:-1;
  poly('#00000055',[[-w*.62,rear-.25,0],[w*.62,rear-.25,0],[w*.62,front+.30,0],[-w*.62,front+.30,0]]);
  const axles=car.kind==='bus'?[rear+1.35,rear+2.7,front-1.65]:car.kind==='truck'?[rear+1.0,rear+2.25,front-1.0]:[rear+.7,front-.7];
  for(const side of [-1,1])for(const z of axles){
    const p=q(side*(w/2+.018),z,.34),scale=renderer.project(car.z+z,car.x).scale;
    const unit=renderer.halfRoad/ROAD_HALF_METERS*scale;
    c.fillStyle='#040a12';c.beginPath();c.ellipse(p[0],p[1],unit*.16,unit*.36*vertical,0,0,Math.PI*2);c.fill();
    c.fillStyle='#536575';c.beginPath();c.ellipse(p[0],p[1],unit*.085,unit*.17*vertical,0,0,Math.PI*2);c.fill();
  }
  if(car.kind==='compact'){
    box(rear,front,w,.26,.66,[paint,dark,paint]);
    box(rear+.13,front-.48,w*.87,.66,1.56,[light,dark,paint]);
    roof(rear+.25,front-.66,w*.78,1.59,paint);
    face(rear+.10,-w*.35,w*.35,.95,1.40,'#163447');
    line('#b7dadd66',[[-w*.32,rear+.09,1.35],[w*.30,rear+.09,1.35]],1.3);
    sideRect(visibleSide*w*.44,rear+.32,front-.66,1.01,1.38,'#1b3e50');
    face(rear-.012,-w*.49,-w*.36,.57,1.12,'#f98a78');face(rear-.012,w*.36,w*.49,.57,1.12,'#f98a78');
    face(rear-.02,-.16,.16,.75,.80,'#bad0d1');face(rear-.025,-.23,.23,.40,.51,'#e7e8d6');
    face(rear-.026,-w*.48,w*.48,.24,.35,'#1b2d3d');
    line(dark,[[-w*.36,rear-.015,.68],[w*.36,rear-.015,.68]],1.2);
  }else if(car.kind==='sedan'){
    box(rear,front,w,.24,.62,[paint,dark,paint]);
    box(rear+.12,rear+.78,w*.94,.61,.81,[light,paint,paint]);
    box(front-.98,front,w*.92,.60,.75,[light,paint,paint]);
    box(rear+1.42,front-1.05,w*.75,.62,1.45,[light,dark,paint]);
    poly('#19394b',[[-w*.43,rear+.72,.81],[w*.43,rear+.72,.81],[w*.34,rear+1.43,1.43],[-w*.34,rear+1.43,1.43]]);
    poly('#507b8b',[[-w*.34,front-1.04,1.43],[w*.34,front-1.04,1.43],[w*.42,front-.52,.76],[-w*.42,front-.52,.76]]);
    poly('#224253',[[visibleSide*w*.43,rear+.75,.85],[visibleSide*w*.35,rear+1.46,1.39],[visibleSide*w*.35,front-1.05,1.39],[visibleSide*w*.43,front-.6,.83]]);
    line('#9eb9c177',[[visibleSide*w*.38,rear+2.13,.79],[visibleSide*w*.35,rear+2.13,1.4]],1.4);
    face(rear-.012,-w*.45,-w*.17,.54,.68,'#fa8d79');face(rear-.012,w*.17,w*.45,.54,.68,'#fa8d79');
    face(rear-.02,-.25,.25,.35,.48,'#e6e9d8');face(rear-.025,-w*.47,w*.47,.22,.29,'#263b4c');
    line('#e8ead055',[[-w*.43,rear+.14,.82],[w*.43,rear+.14,.82]],1.2);
  }else if(car.kind==='bus'){
    const stripe=car.color%2?'#4396b5':'#bd8750';
    box(rear,front,w,.36,3.08,['#c2d4d3','#567c8b','#c6d8d6']);
    sideRect(visibleSide*(w/2+.003),rear+.04,front-.10,.60,1.23,stripe);
    for(let z=rear+1.1;z<front-1.0;z+=1.5)sideRect(visibleSide*(w/2+.008),z,z+1.27,1.58,2.65,'#102f43');
    face(rear-.01,-w*.42,w*.42,1.62,2.66,'#122f42');
    face(rear-.02,-w*.35,w*.35,2.79,2.99,'#152d39');
    face(rear-.023,-w*.36,w*.36,.60,1.12,'#304c5c');
    for(let h=.66;h<1.1;h+=.085)face(rear-.03,-w*.34,w*.34,h,h+.025,'#9bb4b5');
    for(const side of [-1,1]){
      const x=side*w*.43;
      face(rear-.025,x-.09,x+.09,.60,.76,'#ef6d65');face(rear-.025,x-.09,x+.09,.87,1.02,'#f0b766');
    }
    face(rear-.03,-.27,.27,.39,.51,'#f1d793');
    box(-1.5,.3,w*.54,3.08,3.30,['#e2e7d9','#728e98','#adbdc0']);
    box(front-2.8,front-1.3,w*.58,3.08,3.24,['#d7e1d7','#728e98','#adbdc0']);
    for(let z=-1.34;z<.20;z+=.20)line('#627c8966',[[-w*.22,z,3.305],[w*.22,z,3.305]],1);
    const a=q(0,rear-.04,2.84),b=q(-w*.33,rear-.04,2.84),font=Math.max(4,Math.abs(a[0]-b[0])*.28);
    if(center.scale>.15){c.fillStyle='#e7c967';c.font='700 '+font+'px monospace';c.textAlign='center';c.fillText('NIGHT BUS',a[0],a[1]);}
  }else{
    box(rear,front,w*.91,.28,.68,['#657e87','#273e4c','#3e515c']);
    box(front-2.12,front,w*.9,.66,2.50,[light,dark,paint]);
    sideRect(visibleSide*w*.453,front-1.65,front-.18,1.56,2.23,'#173a4e');
    roof(front-1.95,front-.12,w*.84,2.54,paint);
    box(rear,front-2.28,w,.69,3.26,['#c1cbd0','#7c909c','#b5c3c8']);
    const sideX=visibleSide*(w/2+.006);
    for(let z=rear+.35;z<front-2.4;z+=.48)line('#576f7a66',[[sideX,z,.85],[sideX,z,3.08]],1.1);
    face(rear-.008,-w*.45,w*.45,.86,3.10,'#cbd2d1');
    line('#4f6676',[[0,rear-.018,.89],[0,rear-.018,3.10]],2);
    for(const side of [-1,1]){
      const x=side*w*.22;
      line('#596e7b',[[x,rear-.025,1.02],[x,rear-.025,2.96]],2.4);
      for(const h of [1.22,2.04,2.8])face(rear-.03,x-.10,x+.10,h,h+.07,'#728896');
      face(rear-.031,side*w*.36-.13,side*w*.36+.13,.44,.59,'#ef756b');
    }
    for(let x=-w*.45;x<w*.44;x+=.29)face(rear-.036,x,Math.min(x+.29,w*.45),.74,.85,Math.round((x+w*.45)/.29)%2?'#e7e8d2':'#cb6c64');
    face(rear-.034,-.24,.24,.42,.54,'#e9d494');
    for(let z=rear+.25;z<front-2.45;z+=.66)line('#e9ebe34d',[[-w*.44,z,3.27],[w*.44,z,3.27]],1);
  }
  if(car.signal&&Math.sin(time*16)>-.2){
    const x=car.signal*w*.44;
    c.shadowColor='#ffc055';c.shadowBlur=Math.min(18,14*center.scale);
    face(rear-.045,x-.10,x+.10,.56,.76,'#ffcc59');c.shadowBlur=0;
  }
  if(renderer.crashCarId===car.id){
    line('#ff776d',[[-w*.52,rear-.035,.2],[-w*.52,rear-.035,car.height],[w*.52,rear-.035,car.height],[w*.52,rear-.035,.2],[-w*.52,rear-.035,.2]],2);
  }
}
