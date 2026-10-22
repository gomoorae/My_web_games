import {ITEMS} from './data.mjs';
import {inBag,dimensions,localCells} from './grid.mjs';

const invEscape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function relationTouches(r,uid){return r.sourceUid===uid||r.targetUid===uid;}
export function renderInventoryConnections(relations,focusUid=null){
 return relations.map(r=>{
  const focus=focusUid&&relationTouches(r,focusUid),dim=focusUid&&!focus;
  const edges=r.segments.map(e=>{const vertical=e.x1===e.x2;return {x1:e.x1*100+(vertical?0:12),y1:e.y1*100+(vertical?12:0),x2:e.x2*100-(vertical?0:12),y2:e.y2*100-(vertical?12:0)};});
  const p=r.midpoint,x=p.x*100,y=p.y*100;
  return `<g class="inventory-link link-${r.kind} ${focus?'focused':''} ${dim?'subdued':''}" data-relation="${r.id}"><title>${invEscape(r.label+' · '+r.effect)}</title>${edges.map(e=>`<line class="link-shadow" x1="${e.x1}" y1="${e.y1}" x2="${e.x2}" y2="${e.y2}"/><line class="link-edge" x1="${e.x1}" y1="${e.y1}" x2="${e.x2}" y2="${e.y2}"/>`).join('')}${r.kind==='art'?`<circle class="link-knot" cx="${x}" cy="${y}" r="11"/><circle class="link-core" cx="${x}" cy="${y}" r="3.5"/>`:`<path class="link-knot" d="M ${x} ${y-12} L ${x+10} ${y} L ${x} ${y+12} L ${x-10} ${y} Z"/><path class="link-core" d="M ${x-3} ${y} L ${x+3} ${y} M ${x} ${y-3} L ${x} ${y+3}"/>`}</g>`;
 }).join('');
}
export function renderConnectionReadout(run,stats,relations,focusUid){
 const chosen=run.items.find(i=>i.uid===focusUid),own=relations.filter(r=>relationTouches(r,focusUid));
 if(!chosen)return `<div class="connection-overview"><strong>발동 중인 인접 연결 ${relations.length}개</strong><span>빛나는 접촉면이 실제 연결이야. 물건을 선택하면 상대와 효과를 볼 수 있어.</span></div>`;
 const d=ITEMS[chosen.type],inactive=stats.inactive.find(i=>i.uid===focusUid);
 if(!inBag(chosen))return `<div class="connection-overview"><strong>${d.name} · 창고 보관 중</strong><span>보따리에 배치하면 연결과 효과를 확인할 수 있어.</span></div>`;
 if(!own.length){const reason=inactive?.reason||(d.global||d.kind==='inner'?'보따리에 놓으면 효과가 발동해. 인접 조건은 없어.':d.kind==='consumable'?'조건을 만족하면 자동으로 사용해. 인접 조건은 없어.':'활성 비급이나 보조품을 옆면에 붙여 연결해.');return `<div class="connection-overview ${inactive?'not-connected':''}"><strong>${d.name} · ${inactive?'연결되지 않음':d.global||d.kind==='inner'?'인접 없이 발동':d.kind==='consumable'?'자동 사용':'인접 연결 없음'}</strong><span>${invEscape(reason)}${d.kind==='support'?' 같은 종류의 보조품을 여러 개 놓으면 각각 합산해.':''}</span></div>`;}
 const artScoped=d.kind==='support'&&(d.target==='art'||d.scope==='art'),weaponScoped=d.kind==='support'&&!d.global&&d.scope!=='bag'&&!artScoped&&d.target!=='any',targetCount=new Set(own.filter(r=>r.sourceUid===focusUid).map(r=>r.targetUid)).size,sharedEnergy=stats.globalContributions?.[focusUid]?.energyRegen||0;
 const scopeNote=artScoped?`<div class="connection-overview"><span>${sharedEnergy?`공통 내공 회복 합계 +${Math.round(sharedEnergy*100)/100}/초. `:''}맞닿은 모든 활성 무공에 적용해. 같은 종류의 보조품을 여러 개 놓으면 각각 합산해. 보조품 한 개가 한 무공과 여러 면으로 닿은 경우에는 한 번 계산해.</span></div>`:weaponScoped?'<div class="connection-overview"><span>맞닿은 모든 무기에 적용해. 무공에 이어지는 효과는 연결된 해당 무공에도 적용돼. 같은 종류의 보조품을 여러 개 놓으면 각각 합산해. 보조품 한 개에서 여러 경로로 이어진 효과는 대상마다 한 번 계산해.</span></div>':d.kind==='art'?'<div class="connection-overview"><span>맞는 계열의 연결 무기를 모두 표시해. 비급 하나는 재사용 시간과 내공 소모를 공유해 한 번씩 발동하고, 여러 무기에 닿아도 중복 발동하지 않아.</span></div>':'';
 return `<div class="connection-heading"><strong>${d.name}</strong><span>${artScoped?`무공 ${targetCount}개에 적용`:weaponScoped?`무기 ${targetCount}개에 적용`:d.kind==='art'?`무기 ${targetCount}개에 연결`:`연결 ${own.length}개`}</span></div>${scopeNote}<div class="relation-list">${own.map(r=>{const peer=r.sourceUid===focusUid?r.targetUid:r.sourceUid;return `<button class="relation-detail link-${r.kind}" data-item="${peer}" aria-label="${invEscape(r.label+' · '+r.effect)}"><span class="relation-mark" aria-hidden="true">${r.kind==='art'?'●':'◆'}</span><span><b>${invEscape(r.label)}</b><small>${invEscape(r.effect)}</small></span><span class="relation-jump">↗</span></button>`;}).join('')}</div>`;
}
export function renderPlacementGhost(item,x,y,rot,valid){
 const rotated={...item,rot},{w,h}=dimensions(rotated),occupied=localCells(rotated),xx=x*100,yy=y*100,rectangle=occupied.length===w*h;
 const shapes=rectangle?`<rect x="${xx+3}" y="${yy+3}" width="${w*100-9}" height="${h*100-9}" rx="5"/>`:occupied.map(([cx,cy])=>`<rect x="${xx+cx*100+3}" y="${yy+cy*100+3}" width="91" height="91" rx="5"/>`).join('');
 const anchor=rectangle?[w/2,h/2]:[(occupied[0]?.[0]||0)+.5,(occupied[0]?.[1]||0)+.5];
 return `<g class="placement-ghost ${valid?'valid':'invalid'}">${shapes}<text x="${xx+anchor[0]*100}" y="${yy+anchor[1]*100}" text-anchor="middle" dominant-baseline="middle">${valid?'배치 예정':'배치 불가'}</text></g>`;
}
