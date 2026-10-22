import {ITEMS} from './data.mjs';
import {upgradeCost} from './engine.mjs';
import {buildLoadoutSummary,getItemPerformance,compareItemLevels} from './performance.mjs';

const performanceEscape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function performanceNumber(value,digits=1){
 if(!Number.isFinite(value))return '—';
 const precision=Math.max(0,Math.min(4,Number.isInteger(digits)?digits:1));
 return Number(value.toFixed(precision)).toLocaleString('ko-KR',{maximumFractionDigits:precision});
}
export function formatPerformanceValue(value,metric={}){
 const number=performanceNumber(value,metric.digits),unit=metric.unit||'';
 if(number==='—')return number;
 return unit==='×'?`×${number}`:`${number}${unit}`;
}
function performanceMetricList(metrics,className=''){
 return `<dl class="performance-metrics ${performanceEscape(className)}">${metrics.map(metric=>`<div data-performance-key="${performanceEscape(metric.key)}"><dt title="${performanceEscape(metric.description||'')}">${performanceEscape(metric.label)}</dt><dd>${performanceEscape(formatPerformanceValue(metric.value,metric))}</dd></div>`).join('')}</dl>`;
}
function performanceSupportBreakdown(model){
 if(!model.supportContributions?.length)return '';
 const shared=model.supportContributions.some(group=>group.effects.some(effect=>['energyRegen','maxEnergy'].includes(effect.key)));
 return `<section class="performance-supports" aria-label="적용 보조품 합산"><h4>적용 보조품 · 같은 종류도 합산</h4><ul>${model.supportContributions.map(group=>`<li data-support-type="${performanceEscape(group.type)}"><strong>${performanceEscape(group.name)} ×${group.count}</strong><span>${group.effects.map(effect=>`${performanceEscape(effect.label)} +${performanceEscape(formatPerformanceValue(effect.value,effect))}`).join(' · ')}</span></li>`).join('')}</ul><p class="performance-note">이 장비에 적용되는 보조품 개수와 합계야. 보조품 한 개가 여러 경로로 연결돼도 그 물건은 한 번만 세어.${shared?' 공통 내공 수치는 모든 무공이 함께 사용해.':''}</p>${model.supportCapNotes.map(note=>`<p class="performance-note performance-support-cap">${performanceEscape(note)}</p>`).join('')}</section>`;
}
function performanceWeaponBreakdown(weapons){
 if(!weapons.length)return '<section class="performance-weapons"><h4>무기별 공격</h4><p class="performance-note">공격할 무기가 없어. 보따리에 무기를 넣어 줘.</p></section>';
 return `<section class="performance-weapons"><h4>무기별 공격 · 각각 독립 발동</h4><table class="performance-weapon-table"><caption>무기마다 다른 피해·공격 간격·초당 피해</caption><thead><tr><th scope="col">무기</th><th scope="col">1타 피해</th><th scope="col">간격</th><th scope="col">DPS</th></tr></thead><tbody>${weapons.map(weapon=>{
  const find=key=>weapon.metrics.find(metric=>metric.key===key),damage=find('damage'),interval=find('interval'),dps=find('dps'),hits=find('hits');
  return `<tr data-performance-weapon="${performanceEscape(weapon.uid)}"><th scope="row"><button class="performance-item-link" data-item="${performanceEscape(weapon.uid)}">${performanceEscape(weapon.name)}${weapon.level?` +${weapon.level}`:''}</button>${hits?`<small>공격당 ${performanceEscape(formatPerformanceValue(hits.value,hits))} 타격</small>`:''}</th><td data-weapon-metric="damage">${performanceEscape(formatPerformanceValue(damage.value,damage))}</td><td data-weapon-metric="interval">${performanceEscape(formatPerformanceValue(interval.value,interval))}</td><td data-weapon-metric="dps">${performanceEscape(formatPerformanceValue(dps.value,dps))}</td></tr>`;
 }).join('')}</tbody></table><p class="performance-note">각 무기의 치명타·관통·흡수 효과는 무기를 눌러 확인해. 합산 DPS는 반올림 전 수치로 계산해.</p></section>`;
}
function performanceArtBreakdown(arts){
 if(!arts.length)return '<section class="performance-arts"><h4>활성 무공별 성능</h4><p class="performance-note">활성 무공이 없어. 비급을 같은 계열 무기에 맞대어 줘.</p></section>';
 return `<section class="performance-arts"><h4>활성 무공별 성능</h4><table class="performance-art-table"><caption>인접 효과를 반영한 각 무공의 피해와 재사용 시간</caption><thead><tr><th scope="col">무공</th><th scope="col">1회 피해</th><th scope="col">재사용</th></tr></thead><tbody>${arts.map(art=>{
  const find=key=>art.metrics.find(metric=>metric.key===key),damage=find('actionDamage')||find('damage'),cooldown=find('cooldown'),cost=find('cost'),hits=find('hits'),shield=find('shield'),heal=find('heal');
  const connected=art.connectedWeapons||[],effects=[cost?`내공 ${formatPerformanceValue(cost.value,cost)}`:'',hits?`${formatPerformanceValue(hits.value,hits)} 타격`:'',shield?`방어막 ${formatPerformanceValue(shield.value,shield)}`:'',heal?`회복 ${formatPerformanceValue(heal.value,heal)}`:''].filter(Boolean).join(' · ');
  return `<tr data-performance-art="${performanceEscape(art.uid)}"><th scope="row">${performanceEscape(art.name)}${art.level?` +${art.level}`:''}<small>${performanceEscape(effects)}</small>${connected.length?`<small class="performance-art-weapons">연결: ${connected.map(w=>performanceEscape(w.name)+(w.level?` +${w.level}`:'')).join(' · ')}</small>`:''}</th><td data-art-metric="damage">${performanceEscape(damage?formatPerformanceValue(damage.value,damage):'—')}</td><td data-art-metric="cooldown">${performanceEscape(cooldown?formatPerformanceValue(cooldown.value,cooldown):'—')}</td></tr>`;
 }).join('')}</tbody></table><p class="performance-note">피해는 모든 타격이 명중한 합계야. 인접한 피해·재사용 보조 효과는 맞닿은 무공에만 반영돼. 무공 하나가 여러 무기에 닿아도 한 번씩만 발동해. 모든 무공이 내공을 함께 써서, 부족하면 발동이 늦어질 수 있어.</p></section>`;
}
function performanceComparison(rows,{caption='연마 전후 비교',fromLabel='이전',toLabel='이후'}={}){
 if(!rows?.length)return '<p class="performance-note">달라지는 수치가 없어.</p>';
 return `<table class="performance-comparison"><caption>${performanceEscape(caption)}</caption><thead><tr><th scope="col">능력</th><th scope="col">${performanceEscape(fromLabel)}</th><th scope="col">${performanceEscape(toLabel)}</th><th scope="col">증가량</th></tr></thead><tbody>${rows.map(row=>{
  const delta=Number.isFinite(row.delta)?row.delta:row.after-row.before,improved=['interval','cooldown'].includes(row.key)?delta<0:delta>0;
  return `<tr data-comparison-key="${performanceEscape(row.key)}"><th scope="row">${performanceEscape(row.label)}${row.unit?`<small>${performanceEscape(row.unit)}</small>`:''}</th><td>${performanceNumber(row.before,row.digits)}</td><td class="performance-after">${performanceNumber(row.after,row.digits)}</td><td class="${improved?'performance-gain':'performance-change'}">${delta>0?'+':''}${performanceNumber(delta,row.digits)}${row.unit==='%'?'<small>%p</small>':''}</td></tr>`;
 }).join('')}</tbody></table>`;
}

export function renderLoadoutPerformance(run){
 const summary=buildLoadoutSummary(run),keys=['weaponCount','dps','armor','shield'];
 const labels={weaponCount:'공격하는 무기',dps:'초당 기본 피해 · 합산',armor:'방어력',shield:'시작 방어막'};
 const primary=keys.map(key=>summary.metrics.find(metric=>metric.key===key)).filter(Boolean),extra=summary.metrics.filter(metric=>!keys.includes(metric.key));
 return `<section class="loadout-performance" aria-label="현재 보따리 능력치"><div class="performance-heading"><h3>보따리 능력치</h3><span>활성 효과 반영</span></div><div class="performance-overview">${primary.map(metric=>`<div class="performance-card metric-${performanceEscape(metric.key)}" data-build-stat="${performanceEscape(metric.key)}" title="${performanceEscape(metric.description||'')}"><span>${labels[metric.key]}</span><strong>${performanceEscape(formatPerformanceValue(metric.value,metric))}</strong></div>`).join('')}</div>${summary.valid?'':`<p class="performance-warning">출전 불가 · ${summary.errors.map(performanceEscape).join(' ')}</p>`}<p class="performance-note">피해는 치명타·상대 방어 적용 전 수치야. 초당 기본 피해에는 무공·지속 피해를 포함하지 않아.</p>${performanceWeaponBreakdown(summary.weapons)}<details class="performance-more"><summary>내공 · 회복 · 공격 상세</summary>${performanceMetricList(extra)}${summary.inners.length?`<div class="performance-inner-list"><span>적용 심법</span>${summary.inners.map(i=>`<button class="performance-item-link" data-item="${performanceEscape(i.uid)}">${performanceEscape(i.name)}${i.level?` +${i.level}`:''}</button>`).join('')}</div>`:''}${performanceArtBreakdown(summary.arts)}<p class="performance-note">방어력은 직접 적중 피해를 줄여. 방어막은 소모되며, 실제 전투의 남은 양은 상태창에 표시돼.</p></details></section>`;
}

export function renderItemPerformance(run,uid){
 const item=run.items.find(i=>i.uid===uid);if(!item)return '';
 const model=getItemPerformance(run,uid);if(!model)return '';
 const comparison=item.level>0?compareItemLevels(run,uid,0,item.level):null;
 return `<section class="item-performance" aria-label="선택한 물건의 현재 성능"><div class="performance-heading"><h4>현재 성능${item.level?` · 연마 +${item.level}`:''}</h4><span class="${model.active?'performance-active':'performance-idle'}">${model.active?'활성':'미적용'}</span></div><p class="performance-context">${performanceEscape(model.context)}</p>${performanceMetricList(model.metrics)}${performanceSupportBreakdown(model)}${comparison?.rows.length?`<div class="refinement-total"><h4>연마로 오른 수치 · +0 → +${item.level}</h4>${performanceComparison(comparison.rows,{caption:'현재 배치를 기준으로 연마하지 않았을 때와 비교',fromLabel:'+0',toLabel:'+'+item.level})}</div>`:''}</section>`;
}

export function renderRefinementPreview(run,uid){
 const item=run.items.find(i=>i.uid===uid);if(!item||!['weapon','art'].includes(ITEMS[item.type]?.kind))return '';
 if(item.level>=3)return '<div class="refinement-preview refinement-max"><strong>최대 연마 +3</strong><p class="performance-note">연마를 모두 마쳤어.</p></div>';
 const next=compareItemLevels(run,uid,item.level,item.level+1),cost=upgradeCost(item),shortage=Math.max(0,cost-run.gold);
 return `<section class="refinement-preview" aria-label="다음 연마 미리보기"><div class="performance-heading"><h4>다음 연마 · +${item.level} → +${item.level+1}</h4><span>◈ ${cost}</span></div>${performanceComparison(next.rows,{caption:'지금 연마하면 달라지는 수치',fromLabel:'현재',toLabel:'연마 후'})}<p class="performance-note">${performanceEscape(next.context||'현재 배치 기준')}${shortage?` · <span class="performance-warning">${shortage} 은전 부족</span>`:''}</p></section>`;
}

export function renderRefinementReceipt(report){
 if(!report||!Array.isArray(report.entries))return '';
 const entries=report.entries.filter(entry=>entry&&Array.isArray(entry.rows)&&Number.isFinite(entry.fromLevel)&&Number.isFinite(entry.toLevel));
 if(!entries.length&&!(report.hpGain>0)&&report.source!=='rest')return '';
 return `<section class="refinement-receipt" role="status" aria-label="최근 연마 결과"><div class="performance-heading"><h3>${report.source==='rest'?'수련 결과':'연마 완료'}</h3><button type="button" class="refinement-dismiss" data-action="dismiss-refinement" aria-label="연마 결과 닫기">×</button></div><div class="refinement-results">${entries.map(entry=>`<div class="refinement-result"><h4>${performanceEscape(entry.name)} <span>+${entry.fromLevel} → +${entry.toLevel}</span></h4>${performanceComparison(entry.rows,{caption:entry.name+'의 연마 결과',fromLabel:'연마 전',toLabel:'연마 후'})}</div>`).join('')}</div>${!entries.length&&report.source==='rest'?'<p class="performance-note">연마 가능한 장비가 없어.</p>':''}${report.hpGain>0?`<p class="refinement-recovery">기혈 회복 +${performanceNumber(report.hpGain,1)}</p>`:''}<p class="performance-note">연마 당시 배치 기준 · 현재 성능은 물건을 선택해서 확인해.</p></section>`;
}
