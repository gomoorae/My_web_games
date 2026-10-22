import {canPlace,dimensions,localCells,rotationIndex} from './grid.mjs';

// Pointer coordinates are a desired top-left corner in grid units. Keep the
// chosen orientation and help only near the pointer, never across the bag.
export function findPlacement(run,uid,x,y,rot,options={}){
 const item=run?.items.find(i=>i.uid===uid);
 if(!item||!Number.isFinite(x)||!Number.isFinite(y))return {valid:false,x:0,y:0,rot:rotationIndex(rot),snapped:false,reason:'놓을 물건과 위치를 다시 선택해 줘.',hasSpace:false};
 const {w,h}=dimensions({...item,rot}),limit=Number.isFinite(options.maxDistance)&&options.maxDistance>=0?options.maxDistance:1.5;
 const roundedX=Math.round(x),roundedY=Math.round(y);
 const ghostX=Math.max(0,Math.min(run.cols-w,roundedX)),ghostY=Math.max(0,Math.min(run.rows-h,roundedY));
 let nearest=null;
 for(let py=0;py<=run.rows-h;py++)for(let px=0;px<=run.cols-w;px++){
  if(!canPlace(run,uid,px,py,rot))continue;
  const distance=(px-x)**2+(py-y)**2;
  // A stable row-major tie makes preview and release choose the same cell.
  if(!nearest||distance<nearest.distance-1e-9)nearest={x:px,y:py,distance};
 }
 if(nearest&&nearest.distance<=limit**2+1e-9)return {valid:true,x:nearest.x,y:nearest.y,rot:rotationIndex(rot),snapped:nearest.x!==roundedX||nearest.y!==roundedY,reason:'',hasSpace:true};
 return {valid:false,x:ghostX,y:ghostY,rot:rotationIndex(rot),snapped:false,hasSpace:!!nearest,reason:nearest?'이 근처에는 맞는 자리가 없어. 다른 빈 공간 쪽으로 옮겨 줘.':`현재 방향의 ${w}×${h} 형태가 들어갈 빈자리가 없어. 회전하거나 주변 물건을 옮겨 줘.`};
}

// A tap can identify any cell of a long item, including its bottom/right end.
// Prefer normal nearby placement; only expand to footprints containing the tap.
export function findCellPlacement(run,uid,x,y,rot){
 const fit=findPlacement(run,uid,x,y,rot);
 if(fit.valid||!Number.isInteger(x)||!Number.isInteger(y))return fit;
 const item=run?.items.find(i=>i.uid===uid);if(!item)return fit;
 const {w,h}=dimensions({...item,rot}),footprint=new Set(localCells({...item,rot}).map(c=>c.join(',')));let nearest=null;
 for(let py=Math.max(0,y-h+1);py<=Math.min(y,run.rows-h);py++)for(let px=Math.max(0,x-w+1);px<=Math.min(x,run.cols-w);px++){
  if(!footprint.has(`${x-px},${y-py}`)||!canPlace(run,uid,px,py,rot))continue;
  const distance=(px-x)**2+(py-y)**2;
  if(!nearest||distance<nearest.distance-1e-9)nearest={x:px,y:py,distance};
 }
 return nearest?{valid:true,x:nearest.x,y:nearest.y,rot:rotationIndex(rot),snapped:true,reason:'',hasSpace:true}:fit;
}
