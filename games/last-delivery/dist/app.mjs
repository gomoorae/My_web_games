import {ITEMS,ENEMIES,SCENES,ROUTE,KIND_LABEL,KITS} from './data.mjs';
import {createGameAudio} from './audio.mjs';
import {MUSIC_TRACKS} from './music-catalog.mjs';
import {renderAssemblyGuide} from './assembly-ui.mjs';
import {dimensions,cells,inBag,canPlace,moveItem,autoPlace,createRun,buildStats,createBattle,tickBattle,settleBattle,rewardChoices,selectReward,shopChoices,buy,rerollShop,leaveShop,rest,restRefinementTargets,advanceStory,sellItem,upgradeItem,upgradeCost,validateRun,migrateRun,enemyLoadout,availableStoryScenes,deliverySummary} from './engine.mjs';
import {battleEffect,clearEffects,initBattleVisuals,updateInventoryActivity} from './vfx.mjs';
import {inventoryConnections,describePlacementConnections} from './adjacency.mjs';
import {relationTouches,renderInventoryConnections,renderConnectionReadout,renderPlacementGhost} from './inventory-ui.mjs';
import {renderStory,renderStoryRecord} from './cutscene.mjs';
import {findPlacement,findCellPlacement} from './placement.mjs';
import {localCells,rotationIndex,nextRotation} from './grid.mjs';
import {renderFootprint,footprintText,renderBagItem,renderReadOnlyBag} from './inventory-board.mjs';
import {expansionOptions,expandBag} from './expansion.mjs';
import {compareItemLevels} from './performance.mjs';
import {renderLoadoutPerformance,renderItemPerformance,renderRefinementPreview,renderRefinementReceipt,formatPerformanceValue} from './performance-ui.mjs';

const app=document.querySelector('#app'),SAVE='last-delivery.run.v2',SETTINGS='last-delivery.settings.v1';
let run=null,screen='title',selected=null,rotation=false,modal=null,paused=false,musicPaused=false,speed=1,lastFrame=0,accumulator=0,lastSave=0,lastEvent=0,toastTimer,saveWarning=false,dragUid=null,catalogFilter='all',battleEndAt=0,placementKey=null;
let dragAnchor=null,selectedEnemy=null,catalogView='items',assemblyFamily='sword';
let mobilePanel='progress',mobilePhase=null,mobileScroll={};
let storyReplay=null;
let preferences={sound:true,musicVolume:.55,sfxVolume:.8};
try{preferences={...preferences,...JSON.parse(localStorage.getItem(SETTINGS)||'{}')};const raw=JSON.parse(localStorage.getItem(SAVE)||'null');const restored=raw?migrateRun(raw):null;if(restored&&validateRun(restored))run=restored;else if(raw)saveWarning=true;}catch{saveWarning=true;}
// Old mute preferences stay intact; new volume controls receive safe defaults.
preferences.sound=preferences.sound!==false;
for(const [key,fallback]of [['musicVolume',.55],['sfxVolume',.8]])preferences[key]=typeof preferences[key]==='number'&&Number.isFinite(preferences[key])?Math.max(0,Math.min(1,preferences[key])):fallback;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money=n=>`<span class="coin">${n} 은전</span>`;
const portrait=(n,cls='')=>`<div class="portrait ${cls}" style="--px:${n%3};--py:${Math.floor(n/3)}" role="img" aria-label="${['연우','소연','만복','도적','창수','독침객'][n]||'강호인'}"></div>`;
const art=(type,cls='')=>{const d=ITEMS[type];return `<span class="item-art page-${Math.floor(d.icon/16)} ${cls}" style="--ix:${d.icon%4};--iy:${Math.floor(d.icon%16/4)}" role="img" aria-label="${d.name}"></span>`;};
const rarity=d=>['','평범','진귀','비전'][d.rarity||1];
const editing=()=>screen==='game'&&run&&['prepare','reward','shop','rest'].includes(run.phase);
const mobileViewport=()=>Boolean(window.matchMedia?.('(max-width:780px), (max-width:1100px) and (max-height:520px) and (pointer:coarse)').matches);
const hasEnemyPanel=()=>Boolean(run&&['prepare','combat'].includes(run.phase));
function syncMobilePhase(){
 const phase=screen==='game'&&run?`${run.phase}:${run.stage}`:null,changed=phase!==mobilePhase;
 if(changed){mobilePhase=phase;mobilePanel='progress';mobileScroll={};}
 if(mobilePanel==='enemy'&&!hasEnemyPanel())mobilePanel='progress';
 return changed;
}
function setMobilePanel(panel){
 if(!['progress','bag','enemy'].includes(panel)||panel==='enemy'&&!hasEnemyPanel()||panel===mobilePanel)return;
 mobileScroll[mobilePanel]=window.scrollY||0;mobilePanel=panel;
 const layout=document.querySelector('.game-layout');if(layout)layout.dataset.mobilePanel=panel;
 document.querySelectorAll('.mobile-nav [data-panel]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.panel===panel)));
 if(mobileViewport())window.scrollTo?.({top:mobileScroll[panel]||0,behavior:'instant'});
}
function mobileNavigation(){
 const panels=[['progress','진행'],['bag','내 보따리'],...(hasEnemyPanel()?[['enemy','상대 보따리']]:[])];
 return `<nav class="mobile-nav" aria-label="플레이 화면">${panels.map(([key,label])=>`<button data-panel="${key}" aria-pressed="${mobilePanel===key}" aria-controls="${key==='progress'?'progress-panel':key==='bag'?'player-bag-panel':'enemy-bag-panel'}">${label}</button>`).join('')}</nav>`;
}
function bagTouchTools(){
 const i=run.items.find(item=>item.uid===selected);
 if(!i)return `<div class="bag-touch-tools"><p class="bag-touch-hint">${editing()?'물건을 고른 뒤 빈칸을 눌러 배치해. 아래 창고에서도 고를 수 있어.':'물건을 누르면 성능과 연결 효과를 볼 수 있어. 전투 중 배치는 고정돼.'}</p></div>`;
 return `<div class="bag-touch-tools"><div class="bag-touch-selection"><strong>${esc(ITEMS[i.type].name)}${i.level?' +'+i.level:''}</strong><small>${inBag(i)?'보따리':'창고'} · ${footprintText({...i,rot:rotation})}</small></div><div class="bag-touch-actions">${editing()?`<button class="button" data-action="rotate">↻ 회전</button><button class="button" data-action="${inBag(i)?'stow':'autoplace'}">${inBag(i)?'창고로':'자동 배치'}</button>`:''}<button class="button" data-action="item-detail">${['weapon','art'].includes(ITEMS[i.type].kind)&&['prepare','shop','rest'].includes(run.phase)?'효과 · 연마':'효과 보기'} ↓</button><button class="button" data-action="clear-selection">선택 해제</button></div>${editing()?'<p class="bag-touch-hint">빈칸을 누르면 선택한 물건이 그 자리로 이동해.</p>':''}</div>`;
}
function mobileCombatControls(){return run.phase==='combat'?`<div class="mobile-combat-controls"><span>교전 중 · 배치는 고정</span><div class="row"><button class="button" data-action="speed" id="mobile-speed-btn">${speed}배속</button><button class="button" data-action="pause" id="mobile-pause-btn">${paused?'계속하기':'일시정지'}</button></div></div>`:'';}
const enemyNow=()=>ENEMIES[Math.min(run.stage,ENEMIES.length-1)];
const equippedNames=items=>items.map(i=>ITEMS[i.type].name+(i.level?' +'+i.level:''));
const equippedSummary=items=>{const names=equippedNames(items);return names.slice(0,3).join(' · ')+(names.length>3?' 외 '+(names.length-3)+'개':'');};
function toast(text){const el=document.querySelector('#toast');el.textContent=text;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),3200);}
function save(){if(!run)return;try{localStorage.setItem(SAVE,JSON.stringify(run));}catch{if(!saveWarning){saveWarning=true;toast('저장이 차단되어 있어. 창을 열어 둔 동안에는 계속 플레이할 수 있어.');}}}
function saveSettings(){try{localStorage.setItem(SETTINGS,JSON.stringify(preferences));}catch{}}
const gameAudio=createGameAudio({tracks:MUSIC_TRACKS,baseURL:document.currentScript?.src||document.baseURI||window.location?.href,embedded:globalThis.LAST_DELIVERY_EMBEDDED_AUDIO,onState:refreshAudioStatus});
gameAudio.configure(preferences);
function initAudio(){if(preferences.sound)return gameAudio.unlock();return Promise.resolve(false);}
function sfx(event,tag){gameAudio.play(event,tag);}
function syncAudio(){
 // Dialogs pause the battle; only an explicit pause also pauses the playlist.
 gameAudio.setPaused(Boolean(screen==='game'&&run?.phase==='combat'&&musicPaused));
 gameAudio.setHidden(Boolean(document.hidden));
 refreshAudioStatus();
}
function audioStatusText(state=gameAudio.getState()){
 if(!preferences.sound)return '전체 소리가 꺼져 있어. 소리 켜기를 누르면 다시 들을 수 있어.';
 if(state.status==='unsupported')return '이 브라우저에서 소리를 재생할 수 없어.';
 if(state.status==='error')return '배경음악을 불러오지 못했어. 효과음은 계속 사용할 수 있어. 다시 재생을 눌러 줘.';
 if(state.status==='locked')return '소리를 재생하려면 다시 재생을 눌러 줘.';
 if(state.status==='loading')return '배경음악을 불러오는 중…';
 if(state.status==='hidden')return '다른 창을 보는 동안 소리가 멈춰 있어.';
 if(state.status==='paused')return '전투를 이어가면 음악도 다시 재생돼.';
 if(preferences.musicVolume===0&&preferences.sfxVolume===0)return '음악과 효과음 음량이 모두 0%야.';
 return state.trackTitle&&preferences.musicVolume>0?'재생 중 · '+state.trackTitle:'소리가 켜져 있어.';
}
function refreshAudioStatus(state){
 state=state||gameAudio.getState();
 const status=document.querySelector('#audio-status');if(status)status.textContent=audioStatusText(state);
 const track=document.querySelector('#audio-track');if(track)track.textContent=state.trackTitle||MUSIC_TRACKS.journey?.title||'잠시 쉬어 가는 중';
 const muted=!preferences.sound,retry=['error','locked'].includes(state.status)&&!muted;
 document.querySelectorAll('[data-action="sound"]').forEach(button=>{button.setAttribute('aria-label','소리 설정 · '+(muted?'전체 음소거':retry?'재생 확인 필요':'소리 켜짐'));button.dataset.audioState=muted?'muted':retry?'attention':'on';const label=button.querySelector('.sound-button-label');if(label)label.textContent=muted?'음소거':retry?'소리 !':'소리';const icon=button.querySelector('.sound-button-icon');if(icon)icon.textContent=muted?'♩':'♪';});
 const toggle=document.querySelector('[data-action="audio-toggle"]');if(toggle){toggle.textContent=muted?'소리 켜기':'전체 음소거';toggle.setAttribute('aria-pressed',String(!muted));}
 const restart=document.querySelector('[data-action="audio-retry"]');if(restart)restart.disabled=muted||state.status==='unsupported';
 const sample=document.querySelector('[data-action="audio-preview"]');if(sample)sample.disabled=muted||state.status==='unsupported';
}
function audioSettings(){return `<h2>소리 설정</h2><p class="audio-intro">네 곡의 배경음악을 매번 무작위 순서로 재생해. 음악과 효과음은 따로 조절할 수 있어.</p><div class="audio-now"><span>배경음악</span><strong id="audio-track">${esc(gameAudio.getState().trackTitle||MUSIC_TRACKS.journey?.title||'잠시 쉬어 가는 중')}</strong></div><div class="audio-sliders"><label class="audio-slider" for="music-volume"><span>배경음악 <output id="music-volume-value" for="music-volume">${Math.round(preferences.musicVolume*100)}%</output></span><input id="music-volume" data-audio-volume="musicVolume" type="range" min="0" max="100" step="1" value="${Math.round(preferences.musicVolume*100)}"></label><label class="audio-slider" for="sfx-volume"><span>효과음 <output id="sfx-volume-value" for="sfx-volume">${Math.round(preferences.sfxVolume*100)}%</output></span><input id="sfx-volume" data-audio-volume="sfxVolume" type="range" min="0" max="100" step="1" value="${Math.round(preferences.sfxVolume*100)}"></label></div><p class="audio-status" id="audio-status" role="status" aria-live="polite">${esc(audioStatusText())}</p><div class="audio-actions"><button class="button primary" data-action="audio-toggle" aria-pressed="${preferences.sound}">${preferences.sound?'전체 음소거':'소리 켜기'}</button><button class="button" data-action="audio-preview" ${preferences.sound?'':'disabled'}>효과음 들어보기</button><button class="text-btn" data-action="audio-retry" ${preferences.sound?'':'disabled'}>다시 재생</button></div><p class="audio-note">네 곡을 한 번씩 들으면 다시 섞어. 같은 곡이 연속으로 나오지 않고, 장면이 바뀌어도 한 곡을 끝까지 들어. 전투 배속과 관계없이 원래 속도로 흘러가. 소리 설정은 이 브라우저에 저장돼.</p>`;}
function soundButton(extra=''){return `<button class="icon-btn sound-button ${extra}" data-action="sound" aria-label="소리 설정 · ${preferences.sound?'소리 켜짐':'전체 음소거'}" data-audio-state="${preferences.sound?'on':'muted'}"><span class="sound-button-icon" aria-hidden="true">${preferences.sound?'♪':'♩'}</span><span class="sound-button-label">${preferences.sound?'소리':'음소거'}</span></button>`;}
function header(){return `<header class="app-header"><button class="brand" data-action="home"><span class="seal">行</span><span><h1>마지막 표행</h1><small>THE LAST DELIVERY</small></span></button><div class="header-actions"><span class="chapter-pill">새벽까지, 열 번의 고비</span><button class="button small-btn story-record-entry" data-action="story-record">이야기 기록</button><button class="button small-btn" data-action="catalog">무림 도감</button>${soundButton()}<button class="icon-btn" data-action="help" aria-label="플레이 방법">?</button></div></header>`;}
function gameListLink(){
 const location=window.location;
 if(!location||!/^https?:$/.test(location.protocol)||!location.pathname.includes('/games/last-delivery/'))return '';
 const path=location.pathname.split('/games/last-delivery/')[0]+'/';
 return `<a class="game-list-link" href="${esc(path)}">← 게임 목록</a>`;
}
function title(){return `<main class="title-screen"><div class="title-landscape"></div>${header()}<div class="title-content"><div class="eyebrow">보따리 배치 × 무협 로그라이크</div><h2>마지막<br>표행<span class="stamp">最後標行</span></h2><p class="title-subtitle">이 짐을 내려놓을 곳은, 길의 끝뿐이다.</p><p class="title-copy">약재 한 상자와 봉인된 장부.<br>새벽이 오기 전 청하성에 도착해야 한다.<br>보따리를 넓히고 무공을 엮어, 길을 열어라.</p><div class="title-buttons">${run?`<button class="button primary" data-action="continue">${run.cleared?'지난 표행 보기':'표행 이어가기'} →</button>`:''}<button class="button ${run?'ghost':'primary'}" data-action="new">새로운 표행 →</button></div><p class="title-note">5개 무기 계열 · ${Object.keys(ITEMS).length}종 아이템 · 10전과 결말 · 자동 저장</p></div><footer class="title-footer"><span>JS GAMES · 2026</span><span>${gameListLink()}한 번 맡은 표물은 끝까지.</span></footer></main>`;}
function route(){return `<nav class="route" aria-label="열 번의 표행 경로">${ENEMIES.map((e,i)=>`<span class="route-node ${i<run.stage||run.cleared?'passed':i===run.stage?'current':''}" title="${e.location}"><i>${i<run.stage||run.cleared?'✓':i+1}</i><span>${ROUTE[i]||e.location}</span></span>`).join('')}</nav>`;}
function itemButton(i,s,reserve=false,relations=[]){
 const d=ITEMS[i.type],dim=dimensions(i),inactive=s.inactive.some(a=>a.uid===i.uid),own=relations.filter(r=>relationTouches(r,i.uid)),focused=relations.filter(r=>relationTouches(r,selected)),peer=selected!==i.uid&&focused.some(r=>relationTouches(r,i.uid)),unrelated=selected!==i.uid&&focused.length&&!peer;
 const badge=own.length?'연결 '+own.length:inactive?'미연결':d.global||d.kind==='inner'?'상시':d.kind==='consumable'?'자동':'';
 if(reserve)return `<div class="reserve-entry"><button class="reserve-item ${selected===i.uid?'selected':''}" data-item="${i.uid}" data-rotated="${rotationIndex(i.rot)!==0}" draggable="${editing()}" title="${esc(d.desc)}">${renderFootprint(i)}<span><b>${d.name}${i.level?' +'+i.level:''}</b><small>${footprintText(i)}${rotationIndex(i.rot)?' · '+rotationIndex(i.rot)*90+'°':''}</small></span></button><button class="reserve-rotate" data-rotate-item="${i.uid}" ${!editing()?'disabled':''} aria-label="${d.name} 회전, 현재 ${dim.w}×${dim.h}칸" title="창고에서 회전">↻</button></div>`;
 return renderBagItem(i,{owner:'hero',selected:selected===i.uid,peer,dimmed:Boolean(unrelated),badge,inactive,disabled:false,draggable:editing()});
}
function bag(){
 const s=buildStats(run),sel=run.items.find(i=>i.uid===selected),relations=inventoryConnections(run,s),total=run.cols*run.rows;
 return `<section class="bag-panel panel" id="player-bag-panel"><div class="section-heading"><div><h2>연우의 보따리</h2><div class="eyebrow">${run.cols} × ${run.rows} · 배치가 만드는 무공</div></div><span class="capacity">${run.items.filter(inBag).flatMap(cells).length} / ${total}칸</span></div><div class="bag-cloth"><div class="bag-grid" id="bag-grid" style="--cols:${run.cols};--rows:${run.rows}" aria-label="${run.cols}열 ${run.rows}행 보따리">${Array.from({length:total},(_,i)=>`<button class="bag-cell" data-cell="${i%run.cols},${Math.floor(i/run.cols)}" aria-label="${Math.floor(i/run.cols)+1}행 ${i%run.cols+1}열에 놓기" ${!editing()?'disabled':''}></button>`).join('')}${run.items.filter(inBag).map(i=>itemButton(i,s,false,relations)).join('')}<svg class="inventory-connections" id="inventory-links" viewBox="0 0 ${run.cols*100} ${run.rows*100}" aria-hidden="true">${renderInventoryConnections(relations,selected)}</svg><svg class="inventory-connections placement-layer" id="placement-preview" viewBox="0 0 ${run.cols*100} ${run.rows*100}" aria-hidden="true"></svg></div></div>${bagTouchTools()}<div class="item-details">${sel?itemDetails(sel,s):'<div class="empty-detail">물건을 선택하면 효과와 연결 조건을 확인할 수 있어.</div>'}</div><div class="bag-assembly-link"><button class="button small-btn" data-action="assembly-guide">조립 길잡이 ↗</button></div><div class="connection-legend"><span class="art-key">● 무공 연결</span><span class="support-key">◆ 보조 효과</span><span>빈 홈에도 다른 물건 배치 가능</span></div><div class="placement-feedback" id="placement-feedback" aria-live="polite">${editing()?'가까운 빈칸에 자동 맞춤 · 창고 ↻ / R 90° 회전':'금색 공격 · 푸른색 방어 · 초록색 회복 · 사용한 아이템이 빛나.'}</div><div class="connection-readout" id="connection-readout">${renderConnectionReadout(run,s,relations,selected)}</div>${renderLoadoutPerformance(run)}<div class="loadout-line">${s.arts.length?s.arts.map(a=>`<span>${ITEMS[a.type].name}</span>`).join(''):'같은 계열 비급을 무기의 옆면에 붙여 초식을 연결해.'}</div>${s.errors.length?`<div class="inventory-error">${s.errors.map(esc).join('<br>')}</div>`:''}<div class="reserve-head"><span>창고 <b>${run.items.filter(i=>!inBag(i)).length}</b></span><span class="small muted">보따리 안의 물건만 발동</span></div><div class="reserve" id="reserve">${run.items.filter(i=>!inBag(i)).map(i=>itemButton(i,s,true,relations)).join('')||'<span class="reserve-empty">선택한 물건을 창고로 옮길 수 있어.</span>'}</div></section>`;
}
function rivalBag(){return run.phase==='combat'?run.battle.enemyLoadout:enemyLoadout(run);}
function enemyBagPanel(){const loadout=rivalBag();return renderReadOnlyBag(loadout,buildStats(loadout),{selectedUid:selectedEnemy,title:enemyNow().name+'의 보따리',subtitle:loadout.style||'무기와 비급의 연결을 살펴봐.'});}
function renderEnemyBag(){const panel=document.querySelector('#enemy-bag-panel');if(panel){panel.innerHTML=enemyBagPanel();if(run.phase==='combat')updateInventoryActivity(run.battle,paused);}}
function expansionPanel(method='shop'){
 const options=expansionOptions(run,method);
 return `<section class="expansion-panel"><div><h3>보따리 확장</h3><p>${run.cols}×${run.rows} → 최대 8×8 · ${method==='rest'?'치료·수련 대신 보따리를 넓힌다.':'은전으로 이 장소에서 한 번 확장할 수 있어.'}</p></div><div class="expansion-options">${options.map(o=>`<button class="button" ${method==='rest'?'data-rest="expand-'+o.axis+'"':'data-expand="'+o.axis+'"'} ${o.enabled?'':'disabled'}><strong>${o.label}</strong><span>${o.cols}×${o.rows} · +${o.gain}칸${method==='shop'?' · ◈ '+o.cost:''}</span>${o.reason?'<small>'+esc(o.reason)+'</small>':''}</button>`).join('')}</div></section>`;
}
function itemDetails(i,s){
 const d=ITEMS[i.type],inactive=s.inactive.find(a=>a.uid===i.uid),canRefine=['weapon','art'].includes(d.kind)&&['prepare','shop','rest'].includes(run.phase),cost=upgradeCost(i);
 return `<div class="detail-top"><h3>${d.name}${i.level?` +${i.level}`:''}</h3><span class="tag">${KIND_LABEL[d.kind]} · ${footprintText({...i,rot:rotation})}</span></div><section class="item-base-description" aria-label="기본 효과"><h4>기본 효과 · 연마 전</h4><p>${esc(d.desc)}</p></section>${renderItemPerformance(run,i.uid)}${inactive?`<p class="red">${esc(inactive.reason)}</p>`:''}${canRefine?renderRefinementPreview(run,i.uid):''}<div class="tools"><button class="button small-btn" data-action="rotate" ${!editing()?'disabled':''}>회전 R</button><button class="button small-btn" data-action="${inBag(i)?'stow':'autoplace'}" ${!editing()?'disabled':''}>${inBag(i)?'창고로':'빈칸에 넣기'}</button>${canRefine&&i.level<3?`<button class="button small-btn" data-action="upgrade" ${run.gold<cost?'disabled':''}>+${i.level+1} 연마 ◈${cost}</button>`:''}${editing()?`<button class="text-btn" data-action="sell">판매 +${Math.max(1,Math.floor(d.price/2)+i.level*8)}</button>`:''}</div>`;
}
function backgroundIndex(){return enemyNow().backIndex??([0,1,0,0,1,2,1,2,3,3][Math.min(run.stage,9)]);}
function arena(){const e=enemyNow(),n=e.body??0,bg=backgroundIndex(),extra=e.minions?.[0];return `<div class="arena battlefield" id="arena" style="--bx:${bg%2};--by:${Math.floor(bg/2)}"><span class="arena-caption">${e.location}</span><span class="battle-clock" id="battle-clock">第 ${run.stage+1} 戰</span><div class="arena-vignette"></div><div class="fighter hero" id="hero-fighter"><div class="body-sprite" style="--sx:0;--sy:0" role="img" aria-label="표사 연우"></div></div>${extra!=null?`<div class="fighter foe secondary"><div class="body-sprite" style="--sx:${extra%4};--sy:${Math.floor(extra/4)}" role="img" aria-label="적의 지원 병력"></div></div>`:''}<div class="fighter foe" id="enemy-fighter"><div class="body-sprite" style="--sx:${n%4};--sy:${Math.floor(n/4)}" role="img" aria-label="${e.name}"></div></div><div class="ground-shadow hero-shadow"></div><div class="ground-shadow foe-shadow"></div><div class="fighter-name hero">연우 <small>${buildStats(run).weapons.length>1?'무기 '+buildStats(run).weapons.length+'개 운용':ITEMS[buildStats(run).weapon?.type]?.name||''}</small></div><div class="fighter-name foe">${e.name}</div><div class="arena-mist"></div></div>`;}
function health(){const e=enemyNow(),b=run.phase==='combat'?run.battle:null,rival=rivalBag(),es=buildStats(rival);return `<div class="status-row"><div><div class="health-label"><span>연우</span><span id="hero-hp">${Math.ceil(b?.hp??run.hp)} / ${run.maxHp}</span></div><div class="bar"><i id="hero-bar" style="width:${(b?.hp??run.hp)/run.maxHp*100}%"></i></div><div class="energy-row"><span id="shield-label">방어막 ${Math.round(b?.shield??buildStats(run).shield)}</span><span id="energy-label">내공 ${Math.floor(b?.energy||0)}</span></div></div><div><div class="health-label"><span>${e.name}</span><span id="enemy-hp">${Math.ceil(b?.enemyHp??rival.maxHp)} / ${b?.enemyMaxHp??rival.maxHp}</span></div><div class="bar enemy"><i id="enemy-bar" style="width:${(b?.enemyHp??rival.maxHp)/(b?.enemyMaxHp??rival.maxHp)*100}%"></i></div><div class="energy-row"><span id="enemy-intent">무기 ${es.weapons.length}개 · 연결 무공 ${es.arts.length}개</span><span id="poison-label"></span></div></div></div>`;}
function encounterHeader(sub,title){return `<div class="encounter-head"><div><div class="eyebrow">${sub}</div><h2>${title}</h2></div>${run.phase==='complete'?`<span class="ending-balance"><small>표행 종료 시</small>${money(run.gold)}</span>`:money(run.gold)}</div>`;}
function uiPrepare(){const e=enemyNow(),s=buildStats(run);return `${encounterHeader(`제${run.stage+1}전 / 10 · ${e.title}`,e.location)}${arena()}${health()}<p class="preview-quote">“${e.quote}”</p><div class="combat-tip"><span class="tip-icon">◇</span><span>${e.description}<br><strong>상대 보따리의 연결과 초식을 살펴보고 배치를 준비해.</strong></span></div><div class="prepare-actions"><div class="skill-preview">${s.errors.length?`<span class="red">${s.errors[0]}</span>`:s.arts.length?`${s.arts.map(a=>ITEMS[a.type].name).join(' · ')}<br><span class="muted small">배치를 마쳤다면 길을 열어 보자.</span>`:'연결된 무공이 없어. 기본 공격으로 출전하게 돼.'}</div><button class="button primary" data-action="fight" ${s.errors.length?'disabled':''}>전투 시작 →</button></div>`;}
function uiCombat(){return `${encounterHeader(`제${run.stage+1}전 / 10 · 교전 중`,enemyNow().location)}${arena()}${health()}<div class="battle-controls"><span class="small muted">보따리의 배치가 초식을 결정한다</span><div class="row"><button class="button" data-action="speed" id="speed-btn">${speed}배속</button><button class="button" data-action="pause" id="pause-btn">${paused?'계속하기':'일시정지'}</button></div></div><div class="battle-log" id="battle-log" aria-label="전투 기록"></div>`;}
function reportStats(b){return b?`<div class="result-stats"><span>전투 시간<b>${b.time}초</b></span><span>초식 피해<b>${b.skillDamage}</b></span><span>지속 피해<b>${b.poisonDamage}</b></span><span>회복<b>${b.healed}</b></span></div>`:'';}
function rewardCard(t){const d=ITEMS[t];return `<button class="reward-card" data-reward="${t}"><span class="tag rarity-${d.rarity}">${rarity(d)} · ${KIND_LABEL[d.kind]}</span>${art(t)}<strong>${d.name}</strong><span>${d.desc}</span><small>${footprintText({type:t,rot:0})}</small>${renderFootprint({type:t,rot:0})}</button>`;}
function uiReward(){return `${encounterHeader(`제${run.stage+1}전 · 길을 열었다`,enemyNow().location)}${arena()}<div class="result-banner"><div class="row between"><h3>승리</h3>${money(enemyNow().gold)}</div><p>남은 기혈 ${run.hp} / ${run.maxHp} · 승리 후 기혈을 최대 20 회복했어.</p></div>${reportStats(run.battles.at(-1))}<p class="reward-title">전리품 하나를 골라 줘. 창고에 보관되며 직접 배치할 수 있어.</p><div class="reward-grid">${rewardChoices(run).map(rewardCard).join('')}</div>`;}
function uiShop(){return `${encounterHeader('길 위의 거래 · 다음 고비를 위한 준비','만복의 좌판')}<div class="npc-card">${portrait(2)}<div><h3>“물건에도 서로 맞는 짝이 있지.”</h3><p>비급을 더할지, 심법을 바꿀지, 지금 쓰는 무기를 연마할지.<br>고르는 건 자네 몫일세. 약도 잊지 말고.</p></div></div>${expansionPanel('shop')}<div class="shop-grid">${shopChoices(run).map(t=>{const d=ITEMS[t],sold=(run.shopBought||[]).filter(x=>x===t).length>=(d.kind==='consumable'?3:1);return `<div class="shop-item"><div class="shop-item-head">${art(t)}<div><strong>${d.name}</strong><small>${rarity(d)} · ${footprintText({type:d.id,rot:0})} · ${KIND_LABEL[d.kind]}</small></div></div><p>${d.desc}</p><button class="buy" data-buy="${t}" ${sold||run.gold<d.price?'disabled':''}>${sold?'품절':`구매 ◈ ${d.price}`}</button></div>`;}).join('')}</div><div class="prepare-actions"><button class="button" data-action="reroll" ${run.gold<8?'disabled':''}>다른 물건 보기 ◈ 8</button><button class="button primary" data-action="leave-shop">다시 길을 나서다 →</button></div><p class="small muted shop-note">물건 선택 후 판매·연마 가능. 구매한 물건은 창고에서 보따리로 옮겨 줘.</p>`;}
function uiRest(){const bg=backgroundIndex(),refinements=restRefinementTargets(run);return `${encounterHeader('밤이 깊어질수록, 새벽은 가까워진다','잠시 숨을 고르다')}<div class="rest-art battlefield" style="--bx:${bg%2};--by:${Math.floor(bg/2)}">${portrait(1)}</div><div class="npc-card"><div><h3>“아직 걸을 수 있죠, 연우 님?”</h3><p>소연이 따뜻한 물을 건넨다. 젖은 짐을 풀고 다음 길을 준비한다.<br>현재 기혈 ${run.hp} / ${run.maxHp} · 보따리 ${run.cols}×${run.rows} · 확장 시 치료와 수련을 대신해.</p></div></div>${expansionPanel('rest')}<div class="rest-options"><button class="rest-option" data-rest="heal"><span>藥</span><div><h3>상처를 치료한다</h3><p>최대 기혈의 65% 회복.</p></div></button><button class="rest-option" data-rest="train"><span>氣</span><div><h3>호흡을 가다듬는다</h3><p>최대 기혈 +18, 현재 기혈 +18.</p></div></button><button class="rest-option" data-rest="meditate"><span>武</span><div><h3>무공을 되짚는다</h3><p>장착 무기 1개와 무공 1개를 무료로 1단계 연마, 기혈 20 회복.<br><strong>${refinements.length?refinements.map(i=>ITEMS[i.type].name+' +'+i.level+' → +'+(i.level+1)).join(' · '):'모든 장비의 연마를 마쳤어.'}</strong><br>연마 단계가 낮은 장비부터 수련해.</p></div></button></div>`;}
function uiComplete(){
 const totals=run.battles.reduce((a,b)=>({casts:a.casts+b.casts,time:a.time+b.time}),{casts:0,time:0}),receipt=deliverySummary(run),settled=receipt.status==='settled';
 const settlement=settled?`<section class="delivery-receipt" aria-label="표행 대금 정산"><h3>계약대로, 200 은전</h3><p>${esc(receipt.payer)} 지급 · ${esc(receipt.receiver)} 인수 확인</p><dl><dt>출발할 때 받은 선금</dt><dd>${receipt.advance} 은전</dd><dt>인도 후 받은 잔금</dt><dd>+${receipt.balance} 은전 · 지급 완료</dd><dt class="receipt-total">총 표행 대금</dt><dd class="receipt-total">${receipt.total} 은전</dd></dl><div class="receipt-results"><p><strong>구호</strong> · 약재를 넘겨 환자들의 치료를 시작했다.</p><p><strong>진상 규명</strong> · 장부와 증언을 관아에 넘겨 적운당의 횡령을 밝혀냈다.</p><p><strong>새로운 표행</strong> · 정당한 대금과 다음 운송 계약이 표국을 다시 세울 밑천이 됐다.</p></div></section>`:`<section class="delivery-receipt" aria-label="이전 판 표행 기록"><h3>이전 판에서 마친 표행</h3><p>이 저장에는 대금 정산 기록이 남아 있지 않아. 표행 종료 시 은전은 그대로 유지돼.</p><p>새로운 표행에서는 선금 30 은전과 인도 후 잔금 170 은전을 실제로 받고, 정산 내역도 기록돼.</p></section>`;
 return `${encounterHeader('열 번째 고비를 넘어 · 표행 완료','돌아갈 이름이 생겼다')}<div class="complete-story-art story-art-renewal" role="img" aria-label="새 표국의 문을 열고 다음 표행을 준비하는 연우"></div><div class="result-banner"><h3>표물 인도${settled?' · 대금 정산 완료':''}</h3><p>청하성 구휼소 · 약재 인수와 장부 접수 확인</p></div><p class="complete-copy">${settled?'사람을 살린 약재, 죄를 밝힌 장부.<br>연우는 맡은 일을 끝냈고, 그 대가를 받았다.<br>이제 빈 보따리에는 다음 표행을 꾸릴 자리가 남아 있다.':'이전 판에서 마친 표행의 기록이야.<br>보따리와 전투 결과는 보존되어 있어.'}</p><p class="complete-save-note">은전과 장비는 표행을 마친 날의 기록이야. 보름 뒤의 빚 청산과 표국 재건은 그 이후의 이야기야.</p>${settlement}<div class="result-stats"><span>돌파한 고비<b>${run.battles.length} / 10</b></span><span>초식 발동<b>${totals.casts}회</b></span><span>총 전투<b>${Math.round(totals.time)}초</b></span></div><div class="row wrap"><button class="button primary" data-action="new">다른 무공으로 새 표행 →</button><button class="button" data-action="story-record">이야기 기록</button><button class="button" data-action="catalog">무림 도감</button></div>`;
}
function uiDefeat(){return `${encounterHeader(`제${run.stage+1}전 · 발걸음이 멎다`,'표행 중단')}${arena()}<div class="result-banner lost"><h3>이번 길은 넘지 못했다</h3><p>짐을 맡긴 사람의 이름을 잊기 전에, 다시 길을 준비하자.</p></div>${reportStats(run.battles.at(-1))}<div class="combat-tip"><span class="tip-icon">◇</span><span>비급은 맞는 무기와 옆면을 붙여야 발동해. 방어막·회복·내공 회복도 함께 챙기고, 은전으로 무기와 비급을 연마해 봐. 약은 창고에 두면 사용할 수 없어.</span></div><button class="button primary" data-action="new">새 표행을 준비하기 →</button>`;}
function characterStatus(){
 const s=buildStats(run),b=run.phase==='combat'?run.battle:null,hp=b?.hp??run.hp,maxHp=b?.maxHp??run.maxHp,weapons=equippedSummary(s.weapons),inners=equippedSummary(s.inners),shield=b?.shield??s.shield;
 return `<aside class="character-status" aria-label="${run.phase==='complete'?'표행 종료 시 연우의 상태':'연우의 현재 상태'}"><div class="character-vitals">${portrait(0,'status-portrait')}<div class="status-vital-content"><div class="status-vital-heading"><strong>연우</strong><span id="status-hp" class="${hp/maxHp<=.35?'low-hp':''}">기혈 ${Math.ceil(hp)} / ${maxHp}</span></div><div class="status-health-track"><i id="status-hp-fill" style="width:${Math.max(0,hp/maxHp*100)}%"></i></div></div></div><div class="character-resources"><div><small>${run.phase==='complete'?'표행 종료 시 은전':'은전'}</small><strong>${run.gold}</strong></div><div><small id="status-shield-title">${b?'방어막':'시작 방어막'}</small><strong id="status-shield">${Math.round(shield||0)}</strong></div><div><small>일반 공격 DPS</small><strong>${s.baseDps}<span> /초</span></strong></div></div><div class="character-loadout"><div><small>무기 ${s.weapons.length}개</small><strong title="${esc(equippedNames(s.weapons).join(' · '))}">${esc(weapons)||'미장착'}</strong><small>심법 ${s.inners.length}개</small><strong title="${esc(equippedNames(s.inners).join(' · '))}">${esc(inners)||'미장착'}</strong></div><p><span>방어력 ${formatPerformanceValue(s.bonuses.armor,{digits:1,unit:''})} · 활성 무공 ${s.arts.length}개</span> ${s.arts.length?esc(equippedSummary(s.arts)):'연결된 무공 없음'}</p></div></aside>`;
}

function migrationNotice(){return run.migrationNotice?`<aside class="migration-notice" role="status" aria-label="보따리 형태 변경 안내"><div><strong>보따리 형태가 새로 정리됐어</strong><p>${esc(run.migrationNotice)}</p></div><button class="button small-btn" data-action="dismiss-migration">확인했어</button></aside>`:'';}
function game(){const views={prepare:uiPrepare,combat:uiCombat,reward:uiReward,shop:uiShop,rest:uiRest,complete:uiComplete,defeat:uiDefeat},showEnemy=['prepare','combat'].includes(run.phase);return `${header()}<main class="shell">${route()}${characterStatus()}${migrationNotice()}${renderRefinementReceipt(run.refinementReport)}${mobileCombatControls()}<div class="game-layout ${showEnemy?'has-rival':''}" data-mobile-panel="${mobilePanel}">${bag()}<section class="right-column" id="progress-panel" aria-label="표행 진행">${(views[run.phase]||uiPrepare)()}</section>${showEnemy?'<aside class="enemy-column" id="enemy-bag-panel">'+enemyBagPanel()+'</aside>':''}</div><footer class="footer"><span>마지막 표행 · 자동 저장${saveWarning?' 불가':''} · v1.10.0</span><span><b class="key">R</b> 90° 회전 · <b class="key">Esc</b> 선택 해제 / 전투 정지</span></footer></main>${mobileNavigation()}`;}
function story(){return renderStory(storyReplay||run,{replay:Boolean(storyReplay),soundControl:soundButton('scene-sound-button')});}
function closeStoryReplay(){storyReplay=null;modal='story-record';render();}
function catalog(){
 const tabs=`<nav class="catalog-tabs" aria-label="도감 보기"><button class="button ${catalogView==='items'?'dark':''}" data-catalog-view="items" aria-pressed="${catalogView==='items'}">아이템 도감</button><button class="button ${catalogView==='assemblies'?'dark':''}" data-catalog-view="assemblies" aria-pressed="${catalogView==='assemblies'}">조립 길잡이</button></nav>`;
 return `<h2>무림 도감</h2>${tabs}${catalogView==='assemblies'?renderAssemblyGuide(assemblyFamily):`<div class="catalog-filters">${[['all','전체'],...Object.entries(KIND_LABEL)].map(([k,n])=>`<button class="button small-btn ${catalogFilter===k?'dark':''}" data-filter="${k}">${n}</button>`).join('')}</div><div class="catalog-grid">${Object.values(ITEMS).filter(d=>catalogFilter==='all'||d.kind===catalogFilter).map(d=>`<article class="catalog-card">${renderFootprint({type:d.id,rot:0})}<div><h3>${d.name}</h3><small>${rarity(d)} · ${KIND_LABEL[d.kind]} · ${footprintText({type:d.id,rot:0})}</small><p>${d.desc}</p>${d.fitHint?`<p class="catalog-fit-hint">${esc(d.fitHint)}</p>`:''}</div></article>`).join('')}</div>`}`;
}
function modalHTML(){if(!modal)return'';let content='';if(modal==='kit')content=`<h2>어떤 길을 택할까</h2><p>다섯 무기, 다섯 시작. 길 위에서 얻는 물건으로 다른 계열에 도전해도 좋아.<br>시작 장비는 연결된 상태로 준비돼.</p><div class="kit-grid">${Object.entries(KITS).map(([k,d])=>`<button class="kit-card" data-kit="${k}">${art(d.weapon)}<h3>${d.name}</h3><p>${d.desc}</p><span class="tag">${ITEMS[d.art].name}</span></button>`).join('')}</div>`;
 if(modal==='help')content=`<h2>보따리 안에서 시작되는 무공</h2><ol class="help-list"><li>보따리는 <strong>6×6에서 시작</strong>해. 상점의 은전이나 휴식 한 번을 써서 가로·세로를 늘리고, 최대 8×8까지 넓힐 수 있어. 물건을 끌거나 선택 후 빈칸을 눌러 옮겨. 가까운 빈 공간에 자동으로 맞춰지고, 초록색 미리보기가 실제 놓일 자리야. 보따리 아래의 회전 버튼, 창고의 ↻ 버튼이나 R키로 90°씩 회전해. 휴대폰은 아래 진행·내 보따리·상대 보따리 버튼으로 화면을 바꿔. ㄴ·ㄷ·계단형의 빈 홈에는 다른 물건도 넣을 수 있어.</li><li><strong>무기·심법·무공은 개수 제한 없이</strong> 넣을 수 있어. 보따리 공간을 어떻게 나눌지가 중요해. 무기는 각자 공격하고, 심법은 함께 적용돼.</li><li>비급은 <strong>같은 계열 무기의 옆면에 붙이면</strong> 활성화돼. 맞닿은 면의 금색 ●은 무공, 청록색 ◆는 보조품 연결이야. 물건을 선택하면 연결 상대와 효과가 표시돼. 대각선은 연결되지 않아. 조건에 맞는 비급은 모두 활성화돼. 비급 하나가 여러 무기에 닿아도 재사용 시간과 발동은 하나야. 모든 무공이 내공을 공유하고, 준비된 무공은 차례로 사용할 기회를 얻어.</li><li>보조품은 맞닿은 모든 대상에 적용돼. <strong>같은 종류도 여러 개 놓으면 각각 합산</strong>해. 독낭 2개는 기본 공격 적중마다 중독 +2, 3개는 +3이야. 숫돌 등의 효과는 연결된 무공에도 이어져. 보조품 한 개에서 여러 경로로 이어진 효과는 대상마다 한 번 계산해. 심법과 전역 보조품도 보따리에 넣은 개수만큼 합산돼. 상점·보상에서 보유한 보조품을 다시 얻을 수 있어.</li><li>상대도 실제 보따리의 장비와 인접 연결로 싸워. 상대 물건을 누르면 구성과 효과를 볼 수 있어. 사용한 아이템은 금색(공격)·푸른색(방어)·초록색(회복)으로 빛나. 전투는 자동. 내공이 모이면 초식을 쓰고, 약품은 각자의 조건에서 자동 소비돼. <strong>창고의 물건은 발동하지 않아.</strong></li><li>승리하면 전리품 하나. 2·5·8전 뒤 상점, 3·6·9전 뒤 휴식. 10전의 적운당주를 쓰러뜨리면 결말에 도달해.</li><li>장비를 선택하면 은전으로 <strong>무기·비급을 최대 3단계 연마</strong>할 수 있어. 상점 외에서도 준비할 때 가능해.</li></ol><p>자동 저장은 이 브라우저에 남아. 전투 중 다시 열면 일시정지 상태로 이어져. 이전 3전 플레이판의 저장은 별도로 유지돼.</p><div class="row wrap"><button class="button" data-action="assembly-guide">조립 길잡이 보기</button><button class="button primary" data-action="close-modal">길을 나서자</button></div>`;
 if(modal==='restart')content=`<h2>새 표행을 시작할까?</h2><p>현재 표행의 진행과 보따리가 새로 시작돼.</p><div class="row" style="margin-top:24px"><button class="button primary" data-action="confirm-new">새로 시작</button><button class="button" data-action="close-modal">계속 플레이</button></div>`;
 if(modal==='audio')content=audioSettings();
 if(modal==='story-record')content=renderStoryRecord(availableStoryScenes(run));
 if(modal==='catalog')content=catalog();return `<div class="modal-backdrop"><section class="modal ${modal==='story-record'?'story-record-modal':modal==='catalog'?'catalog-modal':modal==='kit'?'kit-picker':modal==='audio'?'audio-modal':''}" role="dialog" aria-modal="true" aria-label="${modal==='story-record'?'이야기 기록':modal==='catalog'?'무림 도감':modal==='help'?'플레이 방법':modal==='audio'?'소리 설정':'새 표행 준비'}"><button class="modal-close" data-action="close-modal" aria-label="닫기">×</button>${content}</section></div>`;}
function render(){const phaseChanged=syncMobilePhase();placementKey=null;clearEffects();app.innerHTML=(storyReplay?story():screen==='title'?title():run.phase==='story'?story():game())+modalHTML();syncAudio();if(!storyReplay&&screen==='game'&&run?.phase==='combat'){initBattleVisuals(run);updateCombat();syncPause();}if(modal)queueMicrotask(()=>app.querySelector('.modal button')?.focus());else if(phaseChanged&&screen==='game'&&run.phase!=='story'&&mobileViewport())window.scrollTo?.({top:0,behavior:'instant'});}
function rotateInventoryItem(uid){
 if(!editing())return;const i=run.items.find(item=>item.uid===uid);if(!i)return;
 const next=nextRotation(selected===uid?rotation:i.rot);selected=uid;rotation=next;
 let moved=true;if(inBag(i)){if(!moveItem(run,i.uid,i.x,i.y,next)){moved=false;toast('이 자리에서는 회전할 공간이 부족해. 다른 빈칸을 눌러 줘.');}}
 else i.rot=next;
 save();sfx(moved?'rotate':'error');render();
}
function syncInventorySelection(){
 const stats=buildStats(run),relations=inventoryConnections(run,stats),focused=relations.filter(r=>relationTouches(r,selected));
 document.querySelectorAll('.bag-item').forEach(node=>{const uid=node.dataset.item,peer=uid!==selected&&focused.some(r=>relationTouches(r,uid));node.classList.toggle('selected',uid===selected);node.classList.toggle('relation-peer',peer);node.classList.toggle('relation-unrelated',Boolean(uid!==selected&&focused.length&&!peer));});
 document.querySelectorAll('.reserve-item').forEach(node=>node.classList.toggle('selected',node.dataset.item===selected));
 const lines=document.querySelector('#inventory-links');if(lines)lines.innerHTML=renderInventoryConnections(relations,selected);
 const readout=document.querySelector('#connection-readout');if(readout)readout.innerHTML=renderConnectionReadout(run,stats,relations,selected);
 const details=document.querySelector('.item-details'),i=run.items.find(item=>item.uid===selected);if(details&&i)details.innerHTML=itemDetails(i,stats);
}

function select(uid){sfx('select');const item=run.items.find(i=>i.uid===uid);selected=uid;rotation=item?.rot??false;render();if(mobileViewport()&&mobilePanel==='bag'&&item&&!inBag(item))document.querySelector('.bag-cloth')?.scrollIntoView?.({block:'start',behavior:'instant'});}
function place(uid,x,y,dragging=false){if(!editing())return;const p=(dragging?findPlacement:findCellPlacement)(run,uid,x,y,rotation);if(p.valid&&moveItem(run,uid,p.x,p.y,p.rot)){save();sfx('place');render();}else{sfx('error');toast(p.reason);}}
function recordRefinement(before,source,hpGain=0){
 const entries=run.items.flatMap(i=>{const previous=before.find(j=>j.uid===i.uid);return previous&&i.level>previous.level?[{name:ITEMS[i.type].name,...compareItemLevels(run,i.uid,previous.level,i.level)}]:[];});
 run.refinementReport={source,entries,hpGain};
}
function refinementToast(report){
 const changes=report.entries.map(entry=>{const row=entry.rows.find(r=>['damage','shield','heal'].includes(r.key))||entry.rows[0];return `${entry.name} +${entry.fromLevel} → +${entry.toLevel}${row?` · ${row.label} ${formatPerformanceValue(row.before,row)} → ${formatPerformanceValue(row.after,row)}`:''}`;});
 return (changes.join(' / ')||'이미 최대 연마 단계야.')+(report.source==='rest'?` · 기혈 +${report.hpGain}`:'');
}

function finishStory(){while(run.phase==='story')advanceStory(run);save();render();}
function startFight(){const s=buildStats(run);if(s.errors.length){toast(s.errors[0]);return;}delete run.refinementReport;run.battle=createBattle(run);run.phase='combat';paused=false;musicPaused=false;speed=1;lastEvent=0;accumulator=0;lastFrame=performance.now();lastSave=0;selected=null;battleEndAt=0;save();render();}
function syncPause(){syncAudio();const el=document.querySelector('#arena');if(!el)return;el.querySelector('.pause-overlay')?.remove();if(paused){clearEffects();const overlay=document.createElement('button');overlay.className='pause-overlay';overlay.dataset.action='pause';overlay.textContent='잠시 숨을 고르다 · 계속하기';el.append(overlay);}const btn=document.querySelector('#pause-btn');if(btn)btn.textContent=paused?'계속하기':'일시정지';const mobileBtn=document.querySelector('#mobile-pause-btn');if(mobileBtn)mobileBtn.textContent=paused?'계속하기':'일시정지';if(run?.battle)updateInventoryActivity(run.battle,paused);}
function updateCombat(){const b=run.battle;if(!b)return;const set=(id,value)=>{const el=document.getElementById(id);if(el)el.textContent=value;};set('hero-hp',`${Math.ceil(b.hp)} / ${b.maxHp}`);set('status-hp',`기혈 ${Math.ceil(b.hp)} / ${b.maxHp}`);set('status-shield',String(Math.round(b.shield)));document.querySelector('#status-hp-fill')?.style.setProperty('width',`${Math.max(0,b.hp/b.maxHp*100)}%`);document.querySelector('#status-hp')?.classList.toggle('low-hp',b.hp/b.maxHp<=.35);set('enemy-hp',`${Math.max(0,Math.ceil(b.enemyHp))} / ${b.enemyMaxHp}`);set('shield-label',`방어막 ${Math.round(b.shield)}`);set('battle-clock',`${b.t.toFixed(1)}초`);const arenaEl=document.querySelector('#arena');if(arenaEl)arenaEl.dataset.phase=String(b.enemyPhase);set('energy-label',`내공 ${Math.floor(b.energy)} / ${b.maxEnergy??8}`);set('poison-label',[b.enemyShield?`방어막 ${Math.ceil(b.enemyShield)}`:'',b.enemyPoison?`독 ${b.enemyPoison}`:'',b.enemyBleed?`출혈 ${b.enemyBleed}`:''].filter(Boolean).join(' · '));document.querySelector('#hero-bar')?.style.setProperty('width',`${Math.max(0,b.hp/b.maxHp*100)}%`);document.querySelector('#enemy-bar')?.style.setProperty('width',`${Math.max(0,b.enemyHp/b.enemyMaxHp*100)}%`);const enemyReady=(b.rival.weaponReady||[b.nextEnemy]).map((t,i)=>i===0?b.rival.nextAttack:t);set('enemy-intent',`상대 내공 ${Math.floor(b.enemyEnergy||0)}/${b.enemyMaxEnergy||8} · 다음 무기 공격 ${Math.max(0,Math.min(...enemyReady)-b.t).toFixed(1)}초`);const log=document.querySelector('#battle-log');if(log)log.innerHTML=b.events.filter(x=>!x.silent).slice(-6).map(x=>`<div class="log-entry ${x.type}"><time>${x.t.toFixed(1)}</time><span>${x.actor==='enemy'?'상대 · ':x.actor==='hero'?'연우 · ':''}${esc(x.text)}</span><span class="amount">${x.value>0?Math.round(x.value):''}</span></div>`).join('');for(const ev of b.events.filter(x=>x.id>lastEvent)){if(!paused){battleEffect(ev,run);if(!ev.silent&&!['won','lost'].includes(ev.type))sfx(ev);}lastEvent=ev.id;}updateInventoryActivity(b,paused);}
app.addEventListener('click',e=>{
 const target=e.target.closest('button');
 if(!target&&selected&&editing()&&e.target.closest('.bag-cloth')){const p=dropPosition(e);if(p)place(selected,...p);return;}
 if(!target||target.disabled)return;initAudio();
 if(target.dataset.panel){setMobilePanel(target.dataset.panel);return;}
 if(target.dataset.enemyItem){sfx('select');selectedEnemy=target.dataset.enemyItem;renderEnemyBag();return;}
 if(target.dataset.expand){if(expandBag(run,target.dataset.expand,'shop')){save();render();sfx('upgrade');toast(`보따리를 ${run.cols}×${run.rows}칸으로 넓혔어.`);}return;}
 if(target.dataset.rotateItem){rotateInventoryItem(target.dataset.rotateItem);return;}
 if(target.dataset.item){select(target.dataset.item);return;}
 if(target.dataset.cell){if(!selected){sfx('error');toast('먼저 옮길 물건을 선택해 줘.');return;}const [x,y]=target.dataset.cell.split(',').map(Number);place(selected,x,y);return;}
 if(target.dataset.replayScene){const scene=target.dataset.replayScene;if(availableStoryScenes(run).includes(scene)){storyReplay={scene,sceneIndex:0};modal=null;render();}return;}
 if(target.dataset.kit){storyReplay=null;run=createRun(target.dataset.kit);screen='game';modal=null;selected=null;save();render();return;}
 if(target.dataset.filter){catalogFilter=target.dataset.filter;render();return;}
 if(target.dataset.catalogView){catalogView=target.dataset.catalogView;render();return;}
 if(target.dataset.assemblyFamily){assemblyFamily=target.dataset.assemblyFamily;render();return;}
 if(target.dataset.reward){if(selectReward(run,target.dataset.reward)){selected=run.items.at(-1)?.uid;rotation=false;save();render();sfx('reward');toast('전리품은 창고에 넣었어. 다음 전투 전에 배치해 줘.');}return;}
 if(target.dataset.buy){if(buy(run,target.dataset.buy)){selected=run.items.at(-1)?.uid;rotation=false;save();render();sfx('buy');toast(`${ITEMS[target.dataset.buy].name}을 창고에 넣었어.`);}return;}
 if(target.dataset.rest){const before=run.items.map(i=>({...i})),hpBefore=run.hp;if(rest(run,target.dataset.rest)){if(target.dataset.rest==='meditate')recordRefinement(before,'rest',run.hp-hpBefore);save();render();sfx(target.dataset.rest==='meditate'||target.dataset.rest.startsWith('expand-')?'upgrade':'heal');if(target.dataset.rest==='meditate')toast(refinementToast(run.refinementReport));}return;}
 const action=target.dataset.action;
 if(action==='new'){modal=run&&!run.cleared&&run.phase!=='defeat'?'restart':'kit';render();}
 if(action==='confirm-new'){modal='kit';render();}
 if(action==='continue'){screen='game';if(run.phase==='combat'){paused=true;lastEvent=run.battle.eventId;lastFrame=performance.now();}save();render();}
 if(action==='home'){if(run?.phase==='combat'){paused=true;save();}musicPaused=false;screen='title';modal=null;render();}
 if(action==='story-record'){if(screen==='game'&&run?.phase==='combat')paused=true;modal='story-record';render();}
 if(action==='close-replay'&&storyReplay)closeStoryReplay();
 if(action==='previous-replay'&&storyReplay){storyReplay.sceneIndex=Math.max(0,storyReplay.sceneIndex-1);render();}
 if(action==='next-replay'&&storyReplay){if(storyReplay.sceneIndex>=SCENES[storyReplay.scene].length-1)closeStoryReplay();else{storyReplay.sceneIndex++;render();}}
 if(action==='help'||action==='catalog'){if(run?.phase==='combat')paused=true;if(action==='catalog')catalogView='items';modal=action;render();}
 if(action==='assembly-guide'){if(run?.phase==='combat')paused=true;catalogView='assemblies';assemblyFamily=run?.kit||'sword';modal='catalog';render();}
 if(action==='close-modal'){modal=null;render();}
 if(action==='dismiss-migration'){delete run.migrationNotice;save();render();}
 if(action==='sound'){if(screen==='game'&&run?.phase==='combat')paused=true;modal='audio';render();}
 if(action==='audio-toggle'){preferences.sound=!preferences.sound;saveSettings();gameAudio.configure(preferences);if(preferences.sound)initAudio();refreshAudioStatus();}
 if(action==='audio-retry')initAudio();
 if(action==='audio-preview')initAudio().then(ready=>{if(ready&&modal==='audio')sfx('preview',run?.kit||'sword');});
 if(action==='clear-selection'){selected=null;rotation=false;render();}
 if(action==='item-detail'&&selected)document.querySelector('.item-details')?.scrollIntoView?.({block:'start',behavior:'instant'});
 if(action==='rotate'&&selected)rotateInventoryItem(selected);
 if(action==='stow'&&selected&&editing()){const i=run.items.find(i=>i.uid===selected);if(moveItem(run,selected,null,null)){i.rot=rotation;sfx('place');}save();render();}
 if(action==='autoplace'&&selected&&editing()){if(!autoPlace(run,selected)){sfx('error');toast('맞는 빈자리가 없어. 물건을 옮겨 공간을 만들어 줘.');}else sfx('place');rotation=run.items.find(i=>i.uid===selected).rot;save();render();}
 if(action==='sell'&&selected&&editing()){if(sellItem(run,selected)){selected=null;save();render();sfx('sell');}else{sfx('error');toast('마지막 무기는 팔 수 없어.');}}
 if(action==='upgrade'&&selected&&editing()){const before=run.items.map(i=>({...i}));if(upgradeItem(run,selected)){recordRefinement(before,'paid');save();render();sfx('upgrade');toast(refinementToast(run.refinementReport));}}
 if(action==='dismiss-refinement'){delete run.refinementReport;save();render();}
 if(action==='fight'&&run.phase==='prepare')startFight();
 if(action==='pause'&&run.phase==='combat'){paused=!paused;musicPaused=paused;lastFrame=performance.now();syncPause();}
 if(action==='speed'&&run.phase==='combat'){speed=speed===1?2:1;for(const id of ['#speed-btn','#mobile-speed-btn']){const button=document.querySelector(id);if(button)button.textContent=`${speed}배속`;}}
 if(action==='leave-shop'&&leaveShop(run)){save();render();}
 if(action==='reroll'&&rerollShop(run)){save();render();sfx('buy');}
 if(action==='previous-story'&&!storyReplay&&run?.phase==='story'){run.sceneIndex=Math.max(0,run.sceneIndex-1);save();render();}
 if(action==='next-story'&&!storyReplay&&run?.phase==='story'){advanceStory(run);save();render();}
 if(action==='skip-story'&&!storyReplay&&run?.phase==='story')finishStory();
});
app.addEventListener('input',e=>{
 const key=e.target.dataset?.audioVolume;if(!['musicVolume','sfxVolume'].includes(key))return;
 const value=Number(e.target.value);if(!Number.isFinite(value))return;
 preferences[key]=Math.max(0,Math.min(1,value/100));gameAudio.configure(preferences);saveSettings();
 const output=document.querySelector(key==='musicVolume'?'#music-volume-value':'#sfx-volume-value');if(output)output.textContent=Math.round(preferences[key]*100)+'%';
 initAudio();refreshAudioStatus();
});
app.addEventListener('pointerdown',()=>{initAudio();});
app.addEventListener('dragstart',e=>{
 const el=e.target.closest('[data-item]');if(!el||!editing()||modal){e.preventDefault();return;}
 clearPlacementPreview();dragUid=el.dataset.item;const item=run.items.find(i=>i.uid===dragUid);
 if(selected!==dragUid)rotation=item.rot;selected=dragUid;
 const dim=dimensions({...item,rot:rotation}),original=dimensions(item),r=document.querySelector('#bag-grid')?.getBoundingClientRect();
 // Bag items keep the point the player grabbed. Storage cards use the centre
 // of the real footprint, rather than treating the small card as its top-left.
 dragAnchor=inBag(item)&&r&&r.width&&r.height?{
  x:Math.max(0,Math.min(1,((e.clientX-r.left)/r.width*run.cols-item.x)/original.w))*dim.w,
  y:Math.max(0,Math.min(1,((e.clientY-r.top)/r.height*run.rows-item.y)/original.h))*dim.h
 }:{x:dim.w/2,y:dim.h/2};
 syncInventorySelection();e.dataTransfer.setData('text/plain',dragUid);e.dataTransfer.effectAllowed='move';
});
function dropPosition(e){
 const r=document.querySelector('#bag-grid')?.getBoundingClientRect();if(!r||!r.width||!r.height||!Number.isFinite(e.clientX)||!Number.isFinite(e.clientY))return null;
 const cw=r.width/run.cols,ch=r.height/run.rows,pad=Math.min(24,Math.min(cw,ch)*.35);
 if(e.clientX<r.left-pad||e.clientX>r.right+pad||e.clientY<r.top-pad||e.clientY>r.bottom+pad)return null;
 const cell=!dragUid&&e.target.closest('[data-cell]')?.dataset.cell;if(cell)return cell.split(',').map(Number);
 const x=(e.clientX-r.left)/cw,y=(e.clientY-r.top)/ch;
 return dragUid&&dragAnchor?[x-dragAnchor.x,y-dragAnchor.y]:[Math.max(0,Math.min(run.cols-1,Math.floor(x))),Math.max(0,Math.min(run.rows-1,Math.floor(y)))];
}
function clearPlacementPreview(){
 if(placementKey===null)return;placementKey=null;
 const grid=document.querySelector('#bag-grid');grid?.classList.remove('previewing','drop-valid','drop-invalid');
 const layer=document.querySelector('#placement-preview');if(layer)layer.innerHTML='';
 const feedback=document.querySelector('#placement-feedback');if(feedback){feedback.className='placement-feedback';feedback.textContent=editing()?'가까운 빈칸에 자동 맞춤 · 창고 ↻ / R 회전':'전투 중에는 배치가 고정돼.';}
}
function showPlacementPreview(uid,x,y){
 const fit=(dragUid?findPlacement:findCellPlacement)(run,uid,x,y,rotation);
 const key=`${uid}:${fit.x}:${fit.y}:${rotation}:${fit.valid}:${fit.snapped}`;if(placementKey===key)return;placementKey=key;
 const item=run.items.find(i=>i.uid===uid);if(!item)return;
 const p=fit.valid?describePlacementConnections(run,uid,fit.x,fit.y,rotation):{valid:false,reason:fit.reason},grid=document.querySelector('#bag-grid'),layer=document.querySelector('#placement-preview'),feedback=document.querySelector('#placement-feedback');
 grid?.classList.add('previewing');grid?.classList.remove('drop-valid','drop-invalid');grid?.classList.add(p.valid?'drop-valid':'drop-invalid');
 if(layer)layer.innerHTML=renderPlacementGhost(item,fit.x,fit.y,rotation,p.valid)+(p.valid?renderInventoryConnections(p.allConnections,uid):'');
 if(feedback){feedback.className=`placement-feedback ${p.valid?'preview-valid':'preview-invalid'}`;feedback.innerHTML=!p.valid?`<strong>배치 불가</strong> ${esc(p.reason)}`:`<strong>${fit.y+1}행 ${fit.x+1}열에 배치 · 연결 ${p.connections.length}개</strong>${p.gained.length?` <span class="connection-gain">+${p.gained.length} 활성</span>`:''}${p.lost.length?` <span class="connection-loss">−${p.lost.length} 해제</span>`:''}<small>${fit.snapped?'가까운 빈칸에 맞춤. ':''}${esc(p.reason||p.connections.map(r=>r.label+' · '+r.effect).join(' / ')||'이 자리에서는 인접 효과가 연결되지 않아.')}</small>`;}
}
app.addEventListener('pointermove',e=>{if(dragUid||!editing()||!selected||modal)return;const p=e.target.closest('[data-item]')||!e.target.closest('.bag-cloth')?null:dropPosition(e);if(p)showPlacementPreview(selected,...p);else clearPlacementPreview();});
app.addEventListener('pointerleave',()=>{if(!dragUid)clearPlacementPreview();});
app.addEventListener('dragover',e=>{if(!dragUid||!editing())return;const p=dropPosition(e);if(p||e.target.closest('#reserve')){e.preventDefault();e.dataTransfer.dropEffect='move';if(p)showPlacementPreview(dragUid,...p);else clearPlacementPreview();}else clearPlacementPreview();});
app.addEventListener('drop',e=>{if(!dragUid||!editing())return;e.preventDefault();const uid=dragUid,p=dropPosition(e);dragUid=null;dragAnchor=null;clearPlacementPreview();if(p)place(uid,...p,true);else if(e.target.closest('#reserve')){const i=run.items.find(i=>i.uid===uid);if(moveItem(run,uid,null,null)){i.rot=rotation;sfx('place');}save();render();}});
app.addEventListener('dragend',()=>{dragUid=null;dragAnchor=null;clearPlacementPreview();});

document.addEventListener('keydown',e=>{
 if(e.key==='Tab'&&modal){const controls=[...app.querySelectorAll('.modal button:not(:disabled), .modal input:not(:disabled), .modal a[href]')];if(controls.length){if(e.shiftKey&&document.activeElement===controls[0]){e.preventDefault();controls.at(-1)?.focus();}else if(!e.shiftKey&&document.activeElement===controls.at(-1)){e.preventDefault();controls[0]?.focus();}}return;}
 if(e.key==='Escape'){if(modal){modal=null;render();}else if(storyReplay){closeStoryReplay();}else if(run?.phase==='combat'&&screen==='game'){paused=!paused;musicPaused=paused;syncPause();}else{selected=null;render();}return;}
 if(['INPUT','TEXTAREA'].includes(e.target.tagName))return;
 if(['Enter',' ','r','R'].includes(e.key))initAudio();
 if((e.key==='r'||e.key==='R')&&selected&&editing()&&!modal){e.preventDefault();app.querySelector('[data-action="rotate"]')?.click();}
 if(!modal&&(storyReplay||run?.phase==='story'&&screen==='game')){
  if(e.key==='ArrowLeft'){e.preventDefault();app.querySelector(`[data-action="${storyReplay?'previous-replay':'previous-story'}"]`)?.click();}
  if(e.key==='ArrowRight'||(e.key==='Enter'||e.key===' ')&&e.target.tagName!=='BUTTON'){e.preventDefault();app.querySelector(`[data-action="${storyReplay?'next-replay':'next-story'}"]`)?.click();}
 }
});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&screen==='game'&&run?.phase==='combat'){paused=true;save();syncPause();}lastFrame=performance.now();gameAudio.setHidden(Boolean(document.hidden));});
window.addEventListener('pagehide',()=>{save();gameAudio.setHidden(true);});
window.addEventListener('pageshow',()=>{lastFrame=performance.now();syncAudio();});
function frame(t){const elapsed=lastFrame?Math.min((t-lastFrame)/1000,.15):0;lastFrame=t;if(screen==='game'&&run?.phase==='combat'&&!paused&&!modal&&!storyReplay){accumulator+=elapsed*speed;let stepped=false;while(accumulator>=.05&&run.battle.status==='fighting'){tickBattle(run.battle,.05);accumulator-=.05;stepped=true;}if(stepped)updateCombat();if(t-lastSave>2000){save();lastSave=t;}if(run.battle.status!=='fighting'){if(!battleEndAt){battleEndAt=t;syncAudio();sfx(run.battle.status);}if(t-battleEndAt>=1100){settleBattle(run);battleEndAt=0;accumulator=0;save();render();}}}requestAnimationFrame(frame);}
render();requestAnimationFrame(frame);if(saveWarning)setTimeout(()=>toast('저장 데이터를 읽지 못했어. 새 표행으로 시작할 수 있어.'),500);
