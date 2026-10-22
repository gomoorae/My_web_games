import {ITEMS} from './data.mjs';

// Rotation is clockwise, in quarter turns. Older saves stored false/true.
export const rotationIndex=rot=>rot===true?1:Number.isInteger(rot)?((rot%4)+4)%4:0;
export const nextRotation=rot=>(rotationIndex(rot)+1)%4;
export const inBag=i=>Boolean(i&&Number.isInteger(i.x)&&Number.isInteger(i.y));

function footprint(i){
 const d=ITEMS[i?.type];if(!d)return [];
 return d.shape?d.shape.flatMap((row,y)=>[...row].flatMap((c,x)=>c==='1'?[[x,y]]:[])):Array.from({length:d.w*d.h},(_,n)=>[n%d.w,Math.floor(n/d.w)]);
}
export function localCells(i){
 let points=footprint(i);if(!points.length)return [];
 for(let n=0;n<rotationIndex(i.rot);n++){
  const height=Math.max(...points.map(p=>p[1]))+1;
  points=points.map(([x,y])=>[height-1-y,x]);
 }
 const minX=Math.min(...points.map(p=>p[0])),minY=Math.min(...points.map(p=>p[1]));
 return points.map(([x,y])=>[x-minX,y-minY]).sort((a,b)=>a[1]-b[1]||a[0]-b[0]);
}
export function dimensions(i){
 const points=localCells(i);
 return points.length?{w:Math.max(...points.map(p=>p[0]))+1,h:Math.max(...points.map(p=>p[1]))+1}:{w:0,h:0};
}
export function cells(i){return inBag(i)?localCells(i).map(([x,y])=>[x+i.x,y+i.y]):[];}
export function orientations(i){
 const seen=new Set(),rotations=[];
 for(let offset=0;offset<4;offset++){
  const rot=(rotationIndex(i.rot)+offset)%4,key=JSON.stringify(localCells({...i,rot}));
  if(!seen.has(key)){seen.add(key);rotations.push(rot);}
 }
 return rotations;
}
export function adjacent(a,b){
 if(!inBag(a)||!inBag(b))return false;
 const other=new Set(cells(b).map(c=>c.join(',')));
 return cells(a).some(([x,y])=>[[x-1,y],[x+1,y],[x,y-1],[x,y+1]].some(c=>other.has(c.join(','))));
}
export function canPlace(run,uid,x,y,rot=0){
 const item=run?.items.find(i=>i.uid===uid);if(!item||!Number.isInteger(x)||!Number.isInteger(y))return false;
 const points=cells({...item,x,y,rot});
 if(!points.length||points.some(([cx,cy])=>cx<0||cy<0||cx>=run.cols||cy>=run.rows))return false;
 const occupied=new Set(run.items.filter(i=>i.uid!==uid).flatMap(cells).map(c=>c.join(',')));
 return points.every(c=>!occupied.has(c.join(',')));
}
