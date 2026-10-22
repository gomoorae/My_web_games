import test from 'node:test';
import assert from 'node:assert/strict';
import {createRun,buildStats,addItem,autoPlace,moveItem,upgradeItem} from '../dist/engine.mjs';
import {compareItemLevels} from '../dist/performance.mjs';
import {renderLoadoutPerformance,renderItemPerformance,renderRefinementPreview,renderRefinementReceipt,formatPerformanceValue} from '../dist/performance-ui.mjs';

function performanceRun(){const run=createRun('sword',1);run.phase='prepare';return run;}
function renderedBuildValue(html,key){return html.match(new RegExp(`data-build-stat="${key}"[^>]*><span>[^<]*</span><strong>([^<]+)</strong>`))?.[1];}

test('loadout overview exposes effective attack and defense and updates when armor is stored',()=>{
 const run=performanceRun(),armor=addItem(run,'armor');assert.equal(autoPlace(run,armor.uid),true);
 let html=renderLoadoutPerformance(run);
 assert.equal(renderedBuildValue(html,'weaponCount'),'1개');assert.equal(renderedBuildValue(html,'dps'),String(buildStats(run).baseDps));
 assert.equal(renderedBuildValue(html,'armor'),'2');assert.equal(renderedBuildValue(html,'shield'),'26');
 assert.match(html,/내공 · 회복 · 공격 상세/);assert.match(html,/1.25\/초/);assert.match(html,/무공·지속 피해를 포함하지 않아/);
 moveItem(run,armor.uid,null,null);html=renderLoadoutPerformance(run);
 assert.equal(renderedBuildValue(html,'armor'),'0');assert.equal(renderedBuildValue(html,'shield'),'0');
 moveItem(run,buildStats(run).weapon.uid,null,null);html=renderLoadoutPerformance(run);
 assert.equal(renderedBuildValue(html,'weaponCount'),'0개');assert.match(html,/출전 불가/);
});

test('unaffordable refinement still previews exact before, after and delta without mutating the run',()=>{
 const run=performanceRun(),weapon=buildStats(run).weapon;run.gold=0;const before=JSON.stringify(run),html=renderRefinementPreview(run,weapon.uid);
 assert.match(html,/다음 연마 · \+0 → \+1/);assert.match(html,/20 은전 부족/);
 assert.match(html,/data-comparison-key="damage"[\s\S]*?<td>10<\/td><td class="performance-after">12.4<\/td><td class="performance-gain">\+2.4<\/td>/);
 assert.match(html,/data-comparison-key="dps"[\s\S]*?<td>4.8<\/td><td class="performance-after">5.9<\/td><td class="performance-gain">\+1.1<\/td>/);
 assert.equal(JSON.stringify(run),before);
});

test('selected item shows refined current values and cumulative gains, and stored items use standalone context',()=>{
 const run=performanceRun(),weapon=buildStats(run).weapon;assert.equal(upgradeItem(run,weapon.uid),true);
 let html=renderItemPerformance(run,weapon.uid);
 assert.match(html,/현재 성능 · 연마 \+1/);assert.match(html,/현재 보따리 보너스 반영/);assert.match(html,/연마로 오른 수치 · \+0 → \+1/);assert.match(html,/>12.4<\/dd>/);assert.match(html,/\+2.4<\/td>/);
 moveItem(run,weapon.uid,null,null);html=renderItemPerformance(run,weapon.uid);
 assert.match(html,/보관 중 · 연마만 반영한 단독 성능/);assert.match(html,/>10.4<\/dd>/);assert.match(html,/>미적용<\/span>/);
 assert.equal(renderItemPerformance(run,'missing'),'');
});

test('maximum refinement and non-upgradable items have unambiguous preview states',()=>{
 const run=performanceRun(),weapon=buildStats(run).weapon;weapon.level=3;
 const html=renderRefinementPreview(run,weapon.uid);assert.match(html,/최대 연마 \+3/);assert.doesNotMatch(html,/다음 연마/);
 assert.equal(renderRefinementPreview(run,run.items.find(i=>i.type==='medicine').uid),'');assert.equal(renderRefinementPreview(run,'missing'),'');
});

test('refinement receipts preserve numeric snapshots, escape text, and report actual recovery with no upgrades',()=>{
 const run=performanceRun(),weapon=buildStats(run).weapon,entry={name:'<검 & 비급>',...compareItemLevels(run,weapon.uid,0,1)};
 entry.rows[0].label='<1타>';
 const report={source:'rest',entries:[entry],hpGain:7},html=renderRefinementReceipt(report);
 assert.match(html,/수련 결과/);assert.match(html,/&lt;검 &amp; 비급&gt;/);assert.match(html,/&lt;1타&gt;/);assert.doesNotMatch(html,/<검|<1타>/);
 assert.match(html,/연마 전/);assert.match(html,/연마 후/);assert.match(html,/기혈 회복 \+7/);assert.match(html,/연마 당시 배치 기준/);assert.match(html,/data-action="dismiss-refinement"/);
 assert.match(renderRefinementReceipt({source:'rest',entries:[],hpGain:0}),/연마 가능한 장비가 없어/);
 assert.equal(renderRefinementReceipt(null),'');assert.equal(renderRefinementReceipt({source:'paid',entries:[]}),'');
});

test('metric formatting keeps small fractional gains and returns plain readable text',()=>{
 assert.equal(formatPerformanceValue(2.4000000000000004,{digits:2,unit:''}),'2.4');
 assert.equal(formatPerformanceValue(1.25,{digits:2,unit:'/초'}),'1.25/초');
 assert.equal(formatPerformanceValue(0.04,{digits:2,unit:'%p'}),'0.04%p');
 assert.equal(formatPerformanceValue(1.8,{digits:2,unit:'배'}),'1.8배');
 assert.equal(formatPerformanceValue(NaN,{digits:2,unit:'초'}),'—');
});

test('active art breakdown shows every linked art and only its own adjacent cooldown bonus',()=>{
 const run=performanceRun();run.cols=run.rows=8;run.items=[];
 const weapon=addItem(run,'sword');assert.equal(moveItem(run,weapon.uid,3,2,0),true);
 const arts=[[4,2,1],[4,4,1],[1,4,0]].map(([x,y,rot])=>{const item=addItem(run,'swordbook');assert.equal(moveItem(run,item.uid,x,y,rot),true);return item;});
 const bell=addItem(run,'jinglingbell');assert.equal(moveItem(run,bell.uid,5,2,3),true);
 let html=renderLoadoutPerformance(run);
 const artRow=(source,uid)=>source.match(new RegExp(`<tr data-performance-art="${uid}">([\\s\\S]*?)<\\/tr>`))?.[1];
 assert.equal((html.match(/data-performance-art=/g)||[]).length,3);
 assert.match(html,/활성 무공별 성능/);assert.match(html,/1회 피해/);assert.match(html,/인접한 피해·재사용 보조 효과는 맞닿은 무공에만 반영돼/);
 for(const item of arts.slice(0,2)){const row=artRow(html,item.uid);assert.match(row,/data-art-metric="damage">18<\/td>/);assert.match(row,/data-art-metric="cooldown">4.25초<\/td>/);}
 assert.match(artRow(html,arts[2].uid),/data-art-metric="cooldown">5초<\/td>/);
 moveItem(run,bell.uid,null,null);html=renderLoadoutPerformance(run);for(const item of arts)assert.match(artRow(html,item.uid),/data-art-metric="cooldown">5초<\/td>/);
 moveItem(run,arts[1].uid,null,null);html=renderLoadoutPerformance(run);assert.equal((html.match(/data-performance-art=/g)||[]).length,2);assert.equal(artRow(html,arts[1].uid),undefined);
});

test('multiple weapons show separate visible attack rows and all inner names remain inspectable',()=>{
 const run=performanceRun();run.cols=run.rows=8;run.items=[];
 const sword=addItem(run,'sword'),spear=addItem(run,'spear');assert.ok(moveItem(run,sword.uid,1,1));assert.ok(moveItem(run,spear.uid,5,1));
 const inners=['innerbalanced','inneriron','innerwind','inneryang'].map(type=>{const item=addItem(run,type);assert.ok(autoPlace(run,item.uid),type);return item;});
 let html=renderLoadoutPerformance(run);
 assert.equal(renderedBuildValue(html,'weaponCount'),'2개');assert.equal(renderedBuildValue(html,'dps'),String(buildStats(run).baseDps));assert.equal(renderedBuildValue(html,'damage'),undefined);
 assert.equal((html.match(/data-performance-weapon=/g)||[]).length,2);assert.match(html,/무기별 공격 · 각각 독립 발동/);
 const disclosure=html.indexOf('<details class="performance-more">');assert.ok(html.indexOf(`data-performance-weapon="${spear.uid}"`)<disclosure,'every weapon must be visible before the collapsed details');
 assert.match(html,/data-weapon-metric="interval"/);assert.match(html,/data-weapon-metric="dps"/);
 assert.match(html,/data-performance-key="innerCount"[^]*?<dd>4개<\/dd>/);
 for(const item of inners)assert.match(html,new RegExp(`class="performance-item-link" data-item="${item.uid}"`));
 moveItem(run,sword.uid,null,null);html=renderLoadoutPerformance(run);assert.equal(renderedBuildValue(html,'weaponCount'),'1개');assert.equal((html.match(/data-performance-weapon=/g)||[]).length,1);assert.doesNotMatch(html,new RegExp(`data-performance-weapon="${sword.uid}"`));
});
test('four active arts remain listed and a book touching two weapons names both without duplicate rows',()=>{
 const run=performanceRun();run.cols=run.rows=8;run.items=[];
 const first=addItem(run,'sword');assert.ok(moveItem(run,first.uid,3,2));
 const arts=[[2,1],[1,2],[1,3],[4,2]].map(([x,y])=>{const item=addItem(run,'swordbook');assert.ok(moveItem(run,item.uid,x,y));return item;});
 const second=addItem(run,'sword');second.level=1;assert.ok(moveItem(run,second.uid,6,2));
 const html=renderLoadoutPerformance(run);assert.equal((html.match(/data-performance-art=/g)||[]).length,4);
 const shared=html.match(new RegExp(`<tr data-performance-art="${arts[3].uid}">([\\s\\S]*?)<\\/tr>`))?.[1];assert.ok(shared);assert.match(shared,/연결: 청강검 · 청강검 \+1/);
 assert.match(html,/무공 하나가 여러 무기에 닿아도 한 번씩만 발동해/);assert.match(html,/모든 무공이 내공을 함께 써서/);
 assert.doesNotMatch(html,/최대 3|1\/3|주무기/);
});

test('selected weapon visibly explains duplicate support count and summed effect',()=>{
 const run=performanceRun();run.items=[];run.cols=run.rows=8;
 const weapon=addItem(run,'sword'),art=addItem(run,'swordbook');assert.ok(moveItem(run,weapon.uid,3,1));assert.ok(moveItem(run,art.uid,4,1));
 const pouches=[1,2,3].map(y=>{const pouch=addItem(run,'poison');assert.ok(moveItem(run,pouch.uid,2,y));return pouch;});
 let html=renderItemPerformance(run,weapon.uid);assert.match(html,/적용 보조품 · 같은 종류도 합산/);assert.match(html,/data-support-type="poison"><strong>독낭 ×3<\/strong><span>기본 공격 중독 \+3중첩\/적중/);assert.match(html,/보조품 한 개가 여러 경로로 연결돼도 그 물건은 한 번만 세어/);
 assert.doesNotMatch(renderItemPerformance(run,art.uid),/data-support-type="poison"/);
 moveItem(run,pouches[0].uid,null,null);html=renderItemPerformance(run,weapon.uid);assert.match(html,/독낭 ×2/);assert.match(html,/기본 공격 중독 \+2중첩\/적중/);assert.doesNotMatch(html,/독낭 ×3/);
 moveItem(run,weapon.uid,null,null);assert.doesNotMatch(renderItemPerformance(run,weapon.uid),/적용 보조품 합산/);
});
