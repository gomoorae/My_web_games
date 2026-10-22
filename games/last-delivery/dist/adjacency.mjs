import {ITEMS} from './data.mjs';
import {inBag,canPlace,cells} from './grid.mjs';
import {buildStats} from './engine.mjs';

// Presentation-only geometry. The combat engine decides which links really work.
// Coordinates use bag cells, so a renderer can scale them to its own SVG.
export function sharedEdge(a,b){
 if(!a||!b||!inBag(a)||!inBag(b)||!ITEMS[a.type]||!ITEMS[b.type])return [];
 const other=new Set(cells(b).map(c=>c.join(','))),groups=new Map();
 const edge=(axis,line,start)=>{const key=`${axis}:${line}`;if(!groups.has(key))groups.set(key,{axis,line,starts:[]});groups.get(key).starts.push(start);};
 for(const [x,y] of cells(a)){
  if(other.has(`${x-1},${y}`))edge('v',x,y);
  if(other.has(`${x+1},${y}`))edge('v',x+1,y);
  if(other.has(`${x},${y-1}`))edge('h',y,x);
  if(other.has(`${x},${y+1}`))edge('h',y+1,x);
 }
 const segments=[];
 for(const {axis,line,starts} of groups.values()){
  const sorted=[...new Set(starts)].sort((a,b)=>a-b);let start=sorted[0],end=start+1;
  const append=()=>segments.push(axis==='v'?{x1:line,y1:start,x2:line,y2:end}:{x1:start,y1:line,x2:end,y2:line});
  for(const value of sorted.slice(1)){if(value===end)end++;else{append();start=value;end=value+1;}}append();
 }
 return segments.sort((a,b)=>a.y1-b.y1||a.x1-b.x1||a.y2-b.y2||a.x2-b.x2);
}

const connectionNumber=n=>String(Math.round(n*100)/100);
function connectionEffect(item){
 const d=ITEMS[item.type],artScoped=d.kind==='support'&&(d.target==='art'||d.scope==='art');
 if(d.kind==='art')return `초식 활성 · 내공 ${d.cost}`;
 const factor=1+(item.level||0)*.2,percent=n=>connectionNumber(n*100)+'%',amount=n=>connectionNumber(n);
 const descriptions={
  damage:n=>`직접 피해 +${percent(n)}`,
  speed:n=>`기본 공격 속도 +${percent(n)}`,
  crit:n=>`치명타 확률 +${percent(n)}p`,
  critDamage:n=>`치명타 배율 +${amount(n)}`,
  pierce:n=>`방어 관통 +${amount(n)}`,
  poison:n=>`기본 적중 중독 +${amount(n)}`,
  bleed:n=>`기본 적중 출혈 +${amount(n)}`,
  burn:n=>`기본 적중 화상 +${amount(n)}`,
  lifesteal:n=>`직접 피해 흡수 +${percent(n)}`,
  shield:n=>`시작 방어막 +${amount(n)}`,
  energyRegen:n=>`${artScoped?'이 연결로 공통 ':''}내공 회복 +${amount(n)}/초`,
  maxEnergy:n=>`최대 내공 +${amount(n)}`,
  artPower:n=>`${artScoped?'이 ':''}무공 피해 +${percent(n)}`,
  healPower:n=>`회복 효과 +${percent(n)}`,
  thorns:n=>`반격 피해 +${amount(n)}`,
  regen:n=>`기혈 재생 +${amount(n)}/초`,
  dodge:n=>`회피 확률 +${percent(n)}p`,
  cleanse:n=>`${amount(n)}초마다 중독 정화`,
  cooldown:n=>`${artScoped?'이 ':''}무공 재사용 −${percent(n)}`,
  poisonPower:n=>`중독 피해 +${percent(n)}`
 };
 const aliases={leech:'lifesteal',energy:'energyRegen',skillDamage:'artPower'};
 const effects=Object.entries(d.bonuses||{}).filter(([,v])=>Number.isFinite(v)&&v!==0).map(([k,v])=>descriptions[aliases[k]||k]?.(v*factor)).filter(Boolean);
 return effects.length?effects.join(' · '):d.short;
}

export function inventoryConnections(run,stats=buildStats(run)){
 const byUid=new Map(run.items.map(i=>[i.uid,i])),seen=new Set(),relations=[];
 for(const [sourceUid,targetUid] of stats.links){
  const source=byUid.get(sourceUid),target=byUid.get(targetUid);
  if(!source||!target)continue;
  const d=ITEMS[source.type];
  if(!['art','support'].includes(d.kind)||!stats.active.includes(sourceUid)||!stats.active.includes(targetUid))continue;
  // Global items remain active regardless of which neighbor happens to touch them.
  // Drawing a connection for that incidental contact would teach the wrong rule.
  if(d.global||d.scope==='bag')continue;
  const segments=sharedEdge(source,target);if(!segments.length)continue;
  const id=`${sourceUid}:${targetUid}`;if(seen.has(id))continue;seen.add(id);
  const edge=segments[0],sourceName=d.name,targetName=ITEMS[target.type].name;
  relations.push({id,sourceUid,targetUid,sourceName,targetName,kind:d.kind,label:`${sourceName} ↔ ${targetName}`,effect:connectionEffect(source),segments,midpoint:{x:(edge.x1+edge.x2)/2,y:(edge.y1+edge.y2)/2}});
 }
 return relations;
}

export function describePlacementConnections(run,uid,x,y,rot=false){
 const current=inventoryConnections(run),item=run.items.find(i=>i.uid===uid),touches=r=>r.sourceUid===uid||r.targetUid===uid;
 if(!item||!canPlace(run,uid,x,y,rot)){
  return {valid:false,connections:current.filter(touches),allConnections:current,total:current.length,gained:[],lost:[],inactiveReason:'',reason:item?'다른 물건과 겹치거나 보따리 밖으로 나가는 자리야.':'옮길 물건을 찾지 못했어.'};
 }
 const preview={...run,items:run.items.map(i=>i.uid===uid?{...i,x,y,rot}:i)};
 const stats=buildStats(preview),next=inventoryConnections(preview,stats),beforeIds=new Set(current.map(r=>r.id)),afterIds=new Set(next.map(r=>r.id));
 const inactive=stats.inactive.find(i=>i.uid===uid),d=ITEMS[item.type];
 let reason=inactive?.reason||'';
 if(!reason&&d.global)reason='인접 없이 보따리에 넣는 것만으로 효과가 발동해.';
 else if(!reason&&d.kind==='consumable')reason='보따리에 넣으면 조건에 따라 자동 사용해. 인접 조건은 없어.';
 return {valid:true,connections:next.filter(touches),allConnections:next,total:next.length,gained:next.filter(r=>!beforeIds.has(r.id)),lost:current.filter(r=>!afterIds.has(r.id)),inactiveReason:inactive?.reason||'',reason};
}
