import {ITEMS,KIND_LABEL} from './data.mjs';
import {ASSEMBLIES,ASSEMBLY_STYLES} from './assemblies.mjs';
import {cells} from './grid.mjs';
import {buildStats} from './engine.mjs';
import {inventoryConnections} from './adjacency.mjs';
import {renderInventoryConnections} from './inventory-ui.mjs';

const assemblyEscape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// Examples use the same footprints and activation rules as a real bag.
// Their pictures never grant a hidden set effect or alter the player's layout.
export function renderAssemblyCard(example){
 const stats=buildStats(example),relations=inventoryConnections(example,stats),occupied=example.items.flatMap(cells).length,total=example.cols*example.rows;
 const titleId=`assembly-${example.id}-title`,descriptionId=`assembly-${example.id}-description`;
 const pieces=example.items.map((item,index)=>{
  const points=cells(item),name=ITEMS[item.type].name;
  return `<g class="assembly-piece assembly-tone-${index%10}"><title>${index+1}. ${assemblyEscape(name)}</title>${points.map(([x,y])=>`<rect x="${x*100+3}" y="${y*100+3}" width="94" height="94" rx="5"/>`).join('')}${points.length?`<text x="${points[0][0]*100+50}" y="${points[0][1]*100+53}" text-anchor="middle" dominant-baseline="middle">${index+1}</text>`:''}</g>`;
 }).join('');
 const grid=Array.from({length:total},(_,n)=>`<rect class="assembly-empty" x="${n%example.cols*100+3}" y="${Math.floor(n/example.cols)*100+3}" width="94" height="94" rx="5"/>`).join('');
 return `<article class="assembly-card" data-assembly="${assemblyEscape(example.id)}"><div class="assembly-card-heading"><h3 id="${titleId}">${assemblyEscape(example.title)}</h3><span>${example.cols}×${example.rows}</span></div><p id="${descriptionId}" class="assembly-description">${assemblyEscape(example.description)}</p><div class="assembly-visual"><svg class="assembly-board" viewBox="0 0 ${example.cols*100} ${example.rows*100}" role="img" aria-labelledby="${titleId} ${descriptionId}"><title>${assemblyEscape(example.title)} · 번호는 아래 물건 목록과 대응</title>${grid}${pieces}<g aria-hidden="true">${renderInventoryConnections(relations)}</g></svg><ol class="assembly-items">${example.items.map((item,index)=>`<li><span class="assembly-number assembly-tone-${index%10}">${index+1}</span><span><strong>${assemblyEscape(ITEMS[item.type].name)}</strong><small>${KIND_LABEL[ITEMS[item.type].kind]} · ${cells(item).length}칸${stats.inactive.some(i=>i.uid===item.uid)?' · 미연결':''}</small></span></li>`).join('')}</ol></div><div class="assembly-metrics"><span>점유 <b>${occupied}/${total}칸</b> · ${Math.round(occupied/total*100)}%</span><span>활성 무공 <b>${stats.arts.length}개</b></span><span>유효 연결 <b>${relations.length}개</b></span></div><p class="assembly-tradeoff"><strong>다르게 짜려면</strong> ${assemblyEscape(example.tradeoff)}</p><details class="assembly-links"><summary>실제 연결 ${relations.length}개 살펴보기</summary><ul>${relations.map(r=>`<li><strong>${assemblyEscape(r.label)}</strong><span>${assemblyEscape(r.effect)}</span></li>`).join('')}</ul></details></article>`;
}

export function renderAssemblyGuide(family='sword'){
 const style=ASSEMBLY_STYLES.find(s=>s.id===family)||ASSEMBLY_STYLES[0];
 if(!style)return '';
 return `<section class="assembly-guide" aria-label="조립 길잡이"><p class="assembly-intro">무기와 비급의 홈을 맞물리고, 보조품 하나가 여러 대상을 돕게 짜 봐. 아래는 출발점이야. 같은 물건도 회전·교체하면 다른 배치가 돼.</p><nav class="assembly-filters" aria-label="조립 계열">${ASSEMBLY_STYLES.map(s=>`<button class="button small-btn ${s.id===style.id?'dark':''}" data-assembly-family="${s.id}" aria-pressed="${s.id===style.id}">${assemblyEscape(s.name)}</button>`).join('')}</nav><div class="assembly-principle"><strong>${assemblyEscape(style.principle)}</strong><p>${assemblyEscape(style.tradeoff)}</p></div><div class="assembly-key"><span class="art-key">● 무공 연결</span><span class="support-key">◆ 보조 효과</span><span>번호 = 물건 · 빈칸도 사용 가능</span></div><div class="assembly-examples">${ASSEMBLIES.filter(a=>a.family===style.id).map(renderAssemblyCard).join('')}</div><p class="assembly-note">배치 자체의 세트 보너스는 없어. 표시한 연결은 실제 전투 규칙으로 계산해. 점유율이 높아도 내공 소모·재사용 시간·방어와 회복의 균형을 함께 봐야 해. 심법과 전역 보조품은 닿지 않아도 발동해.</p></section>`;
}
