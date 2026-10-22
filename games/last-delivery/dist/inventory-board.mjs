import {ITEMS,KIND_LABEL} from './data.mjs';
import {dimensions,localCells,inBag} from './grid.mjs';
import {inventoryConnections} from './adjacency.mjs';
import {renderInventoryConnections,relationTouches} from './inventory-ui.mjs';

const boardEscape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const boardNumber=n=>Math.round(n*1000)/1000;

export function footprintText(i){
 const d=ITEMS[i.type],{w,h}=dimensions(i),count=localCells(i).length;
 return `${w}×${h} · ${count}칸 · ${d.shapeName||'직사각형'}`;
}

export function renderFootprint(i,{className='',label}={}){
 const {w,h}=dimensions(i),name=label||`${ITEMS[i.type].name}, ${footprintText(i)}`;
 return `<svg class="footprint-mini ${boardEscape(className)}" viewBox="0 0 ${w*12} ${h*12}" role="img" aria-label="${boardEscape(name)}">${localCells(i).map(([x,y])=>`<rect x="${x*12+1}" y="${y*12+1}" width="10" height="10" rx="1.5"/>`).join('')}</svg>`;
}

// Keep illustration and name inside the footprint, including ring-shaped items.
// This is intentionally independent of the item's bounding-box centre.
function boardContentRect(i){
 const {w,h}=dimensions(i),occupied=new Set(localCells(i).map(([x,y])=>`${x},${y}`));
 let best=null;
 for(let y=0;y<h;y++)for(let x=0;x<w;x++)for(let rh=1;rh<=h-y;rh++)for(let rw=1;rw<=w-x;rw++){
  let valid=true;for(let yy=y;yy<y+rh&&valid;yy++)for(let xx=x;xx<x+rw;xx++)if(!occupied.has(`${xx},${yy}`)){valid=false;break;}
  if(!valid)continue;
  const area=rw*rh,distance=Math.abs(x+rw/2-w/2)+Math.abs(y+rh/2-h/2);
  if(!best||area>best.area||area===best.area&&distance<best.distance)best={x,y,w:rw,h:rh,area,distance};
 }
 return best||{x:0,y:0,w:1,h:1};
}

function boardIcon(i){
 const d=ITEMS[i.type];
 return `<span class="item-art page-${Math.floor(d.icon/16)}" style="--ix:${d.icon%4};--iy:${Math.floor(d.icon%16/4)}" aria-hidden="true"></span>`;
}

export function renderBagItem(i,{owner='hero',selected=false,peer=false,dimmed=false,badge='',disabled=false,draggable=false,inactive=false}={}){
 const d=ITEMS[i.type],{w,h}=dimensions(i),occupied=localCells(i),occupiedSet=new Set(occupied.map(([x,y])=>`${x},${y}`)),content=boardContentRect(i),enemy=owner==='enemy';
 const attr=enemy?'data-enemy-item':'data-item',name=`${d.name}${i.level?` +${i.level}`:''}`;
 const label=`${name}, ${i.y+1}행 ${i.x+1}열, ${footprintText(i)}${badge?', '+badge:''}`;
 const classes=['bag-piece','bag-item',enemy?'enemy-piece':'hero-piece',selected?'selected':'',peer?'relation-peer':'',dimmed?'relation-unrelated':'',badge.startsWith('연결')?'linked':'',inactive?'inactive':''].filter(Boolean).join(' ');
 const buttons=occupied.map(([x,y],n)=>{
  const edges={t:!occupiedSet.has(`${x},${y-1}`),r:!occupiedSet.has(`${x+1},${y}`),b:!occupiedSet.has(`${x},${y+1}`),l:!occupiedSet.has(`${x-1},${y}`)};
  return `<button type="button" class="bag-piece-cell" ${attr}="${boardEscape(i.uid)}" data-piece-cell="${x},${y}" draggable="${Boolean(draggable&&!enemy&&!disabled)}" ${disabled?'disabled':''} tabindex="${n?'-1':'0'}" ${n?'aria-hidden="true"':`aria-label="${boardEscape(label)}"`} title="${boardEscape(name+' · '+d.short)}" style="left:calc(${boardNumber(x/w*100)}% + ${edges.l?1.5:0}px);top:calc(${boardNumber(y/h*100)}% + ${edges.t?1.5:0}px);width:calc(${boardNumber(100/w)}% - ${(edges.l+edges.r)*1.5}px);height:calc(${boardNumber(100/h)}% - ${(edges.t+edges.b)*1.5}px);border-width:${Number(edges.t)}px ${Number(edges.r)}px ${Number(edges.b)}px ${Number(edges.l)}px"></button>`;
 }).join('');
 const cs=`left:${boardNumber(content.x/w*100)}%;top:${boardNumber(content.y/h*100)}%;width:${boardNumber(content.w/w*100)}%;height:${boardNumber(content.h/h*100)}%`;
 return `<div class="${classes}" ${attr}="${boardEscape(i.uid)}" data-live-item="${enemy?'enemy':'hero'}:${boardEscape(i.uid)}" data-kind="${d.kind}" data-color="${d.color}" style="--x:${i.x};--y:${i.y};--w:${w};--h:${h};--label-x:${boardNumber((content.x+content.w/2)/w*100)}%;--label-y:${boardNumber(content.y/h*100)}%">${buttons}<span class="bag-piece-content ${content.w>content.h?'wide-content':''} ${content.w===1&&content.h===1?'single-content':''}" style="${cs}">${boardIcon(i)}<span class="name">${boardEscape(name)}</span>${badge?`<span class="piece-badge ${inactive?'disconnected':badge.startsWith('연결')?'connected':'passive'}">${boardEscape(badge)}</span>`:''}</span></div>`;
}

function boardItemDetail(loadout,stats,relations,selectedUid){
 const chosen=loadout.items.find(i=>i.uid===selectedUid),inactive=stats.inactive||[];
 if(!chosen)return `<div class="enemy-item-detail"><strong>상대의 배치를 살펴봐.</strong><p>물건을 누르면 연결 조건과 효과를 확인할 수 있어. 금색 ●은 무공, 청록색 ◆는 보조 효과야.</p></div>`;
 const d=ITEMS[chosen.type],own=relations.filter(r=>relationTouches(r,chosen.uid)),reason=inactive.find(i=>i.uid===chosen.uid)?.reason;
 const active=stats.active.includes(chosen.uid),state=reason||(!active?'현재 비활성':d.kind==='consumable'?'조건을 만족하면 한 번 사용':d.kind==='inner'?'배치한 모든 심법의 효과를 함께 적용':d.global?'배치만으로 발동하는 상시 효과':d.kind==='weapon'?'다른 무기와 별개의 공격 간격으로 발동':own.length?'인접 조건 충족 · 발동 중':'인접 연결 없음');
 const weaponCount=d.kind==='art'?new Set(own.filter(r=>r.kind==='art'&&r.sourceUid===chosen.uid).map(r=>r.targetUid)).size:0,connectionNote=weaponCount?`<p class="enemy-item-state">연결 무기 ${weaponCount}개 · 비급 하나당 재사용 시간과 내공 소모를 한 번씩 적용. 여러 무기에 닿아도 중복 발동하지 않아.</p>`:'';
 return `<div class="enemy-item-detail"><div class="enemy-detail-title">${renderFootprint(chosen)}<div><strong>${boardEscape(d.name)}${chosen.level?` +${chosen.level}`:''}</strong><small>${KIND_LABEL[d.kind]} · ${boardEscape(footprintText(chosen))}</small></div><span class="enemy-active-tag ${active?'active':''}">${active?'활성':'비활성'}</span></div><p>${boardEscape(d.desc)}</p><p class="enemy-item-state">${boardEscape(state)}</p>${connectionNote}${own.length?`<div class="enemy-detail-links">${own.map(r=>{const uid=r.sourceUid===chosen.uid?r.targetUid:r.sourceUid;return `<button class="enemy-relation link-${r.kind}" data-enemy-item="${boardEscape(uid)}"><b>${r.kind==='art'?'●':'◆'} ${boardEscape(r.label)}</b><span>${boardEscape(r.effect)}</span></button>`;}).join('')}</div>`:''}</div>`;
}

export function renderReadOnlyBag(loadout,stats,{selectedUid=null,title='상대의 보따리',subtitle='같은 배치 규칙으로 싸우는 상대'}={}){
 if(!loadout||!stats)return '';
 const items=loadout.items.filter(inBag),weapons=stats.weapons||[stats.weapon].filter(Boolean),inners=stats.inners||[stats.inner].filter(Boolean),relations=inventoryConnections(loadout,stats),focus=items.some(i=>i.uid===selectedUid)?selectedUid:weapons[0]?.uid;
 const equipmentNames=list=>list.map(i=>boardEscape(ITEMS[i.type].name)+(i.level?` +${i.level}`:'')).join(' · ')||'없음';
 const focused=relations.filter(r=>relationTouches(r,focus)),occupied=items.reduce((n,i)=>n+localCells(i).length,0);
 const pieces=items.map(i=>{
  const own=relations.filter(r=>relationTouches(r,i.uid)),inactive=(stats.inactive||[]).some(a=>a.uid===i.uid),d=ITEMS[i.type],peer=i.uid!==focus&&focused.some(r=>relationTouches(r,i.uid));
  const badge=own.length?`연결 ${own.length}`:inactive?'미연결':d.global||d.kind==='inner'?'상시':d.kind==='consumable'?'자동':'';
  return renderBagItem(i,{owner:'enemy',selected:i.uid===focus,peer,badge,inactive});
 }).join('');
 return `<section class="enemy-inventory panel" aria-label="상대의 장비와 배치"><div class="enemy-inventory-heading"><div><div class="eyebrow">OPPONENT LOADOUT</div><h3>${boardEscape(title)}</h3><p>${boardEscape(subtitle)}</p></div><span class="capacity">${loadout.cols}×${loadout.rows}<br>${occupied}/${loadout.cols*loadout.rows}칸</span></div><div class="enemy-inventory-layout"><div><div class="enemy-bag-cloth"><div class="bag-grid enemy-bag-grid" style="--cols:${loadout.cols};--rows:${loadout.rows}" aria-label="${loadout.cols}열 ${loadout.rows}행 상대 보따리">${Array.from({length:loadout.cols*loadout.rows},()=>'<span class="bag-cell" aria-hidden="true"></span>').join('')}${pieces}<svg class="inventory-connections" viewBox="0 0 ${loadout.cols*100} ${loadout.rows*100}" aria-hidden="true">${renderInventoryConnections(relations,focus)}</svg></div></div><div class="enemy-bag-stats"><span>기본 공격 합계 <b>${stats.baseDps}/초</b></span><span>시작 방어막 <b>${Math.round(stats.shield||0)}</b></span><span>무기 <b>${weapons.length}개</b></span><span>심법 <b>${inners.length}개</b></span><span>활성 무공 <b>${stats.arts.length}개</b></span></div></div><div class="enemy-inventory-inspect">${boardItemDetail(loadout,stats,relations,focus)}</div></div><div class="enemy-loadout-line"><span>무기 ${weapons.length}개 <b>${equipmentNames(weapons)}</b></span><span>심법 ${inners.length}개 <b>${equipmentNames(inners)}</b></span><span>무공 ${stats.arts.length}개 <b>${equipmentNames(stats.arts)}</b></span></div></section>`;
}
