import {SCENES,SCENE_TITLES,SCENE_SUMMARIES} from './data.mjs';

const storyOrder=['opening','reveal','midpoint','proof','boss','ending'];
const storyArtKeys=['clinic','contract','departure','ambush','ledger','bribe','resolve','warehouse','dispatch','gate','duel','arrest','relief','payment','renewal'];
const sceneRoles={연우:'운학표국의 표사',소연:'청하성의 의원',만복:'청하상회의 총관',독침객:'적운당의 자객',진백:'적운당의 집행관',곽진:'적운당주',조현:'청하상회 주인',포두:'청하성의 관군'};
const sceneEscape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeStoryArt=key=>storyArtKeys.includes(key)?key:'clinic';

// Playback owns only a view cursor. The controller keeps replay outside the run.
export function renderStory(view,{replay=false,soundControl=''}={}){
 const scene=SCENES[view.scene]?view.scene:'opening',pages=SCENES[scene];
 const index=Math.max(0,Math.min(pages.length-1,Number(view.sceneIndex)||0)),page=pages[index];
 const chapter=storyOrder.indexOf(scene),narration=['서술','나레이션','이야기'].includes(page.who),title=SCENE_TITLES[scene]||'마지막 표행';
 const nextAction=replay?'next-replay':'next-story',previousAction=replay?'previous-replay':'previous-story';
 return `<section class="scene-screen ${replay?'is-replay':''}" aria-label="${sceneEscape(title)}${replay?' 다시보기':''}" data-scene="${scene}" data-story-page="${sceneEscape(page.id||index)}">
  <header class="scene-heading"><div class="scene-heading-copy"><span class="scene-kicker">${replay?'이야기 다시보기':'마지막 표행'} · 제${chapter+1}장 / ${storyOrder.length}</span><h1>${sceneEscape(title)}</h1></div><div class="scene-heading-actions">${replay?'':`<button class="scene-record-button" data-action="story-record">이야기 기록</button>`}<button class="scene-skip" data-action="${replay?'close-replay':'skip-story'}">${replay?'기록으로 돌아가기':'장면 건너뛰기'} <span aria-hidden="true">${replay?'×':'↗'}</span></button></div></header>
  <main class="scene-stage">
   <figure class="scene-illustration"><div class="scene-art story-art-${safeStoryArt(page.art)}" role="img" aria-label="${sceneEscape(page.beat||title)}"></div><figcaption class="scene-location"><span>${sceneEscape(page.location||'청하로')}</span><span>${sceneEscape(page.time||'그날 밤')}</span></figcaption></figure>
   <article class="scene-dialogue ${narration?'is-narration':''}" aria-live="polite" aria-atomic="true">
    <div class="scene-dialogue-heading"><div class="scene-speaker"><span class="scene-dialogue-mark" aria-hidden="true">${narration?'景':'言'}</span><strong class="scene-speaker-name">${narration?'이야기':sceneEscape(page.who)}</strong>${!narration&&sceneRoles[page.who]?`<span class="scene-speaker-role">${sceneEscape(sceneRoles[page.who])}</span>`:''}</div><span class="scene-beat">${sceneEscape(page.beat||'')}</span></div>
    <p class="scene-dialogue-text">${sceneEscape(page.text)}</p>
    <div class="scene-dialogue-footer"><div class="scene-progress" aria-label="이 장의 대사 ${index+1} / ${pages.length}"><span>${String(index+1).padStart(2,'0')}</span><i aria-hidden="true"><b style="width:${(index+1)/pages.length*100}%"></b></i><span>${String(pages.length).padStart(2,'0')}</span></div><div class="scene-navigation"><button class="scene-previous" data-action="${previousAction}" ${index===0?'disabled':''}>← 이전</button><button class="button primary scene-next" data-action="${nextAction}">${index===pages.length-1?(replay?'기록으로':'계속하기'):'다음'} <span aria-hidden="true">→</span></button></div></div>
   </article>
  </main>
  <footer class="scene-footnote">${soundControl}<div class="scene-chapters" aria-label="전체 ${storyOrder.length}장 중 제${chapter+1}장">${storyOrder.map((key,i)=>`<span class="${i<chapter?'passed':i===chapter?'current':''}" ${i===chapter?'aria-current="step"':''}><i></i><b>${String(i+1).padStart(2,'0')}</b></span>`).join('')}</div><span>${replay?'다시보기는 표행 진행에 영향을 주지 않아.':'한 번 맡은 표물은 끝까지.'}<small>← 이전 · → / Enter / Space 다음${replay?' · Esc 기록으로':''}</small></span></footer>
 </section>`;
}

export function renderStoryRecord(entries){
 const ids=entries.map(entry=>typeof entry==='string'?entry:entry.id||entry.scene).filter(id=>SCENES[id]);
 return `<h2>이야기 기록</h2><p class="story-record-intro">지금까지 지나온 길을 되짚어 봐. 다시보기 중에는 표행 진행과 보따리가 바뀌지 않아.</p>${ids.length?`<div class="story-record-list">${ids.map(id=>`<article class="story-record-card"><div class="story-record-art story-art-${safeStoryArt(SCENES[id][0].art)}" aria-hidden="true"></div><div><span class="story-record-number">제${storyOrder.indexOf(id)+1}장</span><h3>${sceneEscape(SCENE_TITLES[id])}</h3><p>${sceneEscape(SCENE_SUMMARIES[id]?.summary||'')}</p><p class="story-record-objective">${sceneEscape(SCENE_SUMMARIES[id]?.objective||'')}</p><button class="button small-btn" data-replay-scene="${id}">이 장 다시보기 →</button></div></article>`).join('')}</div><p class="story-record-note">이후 이야기는 해당 장에 도착하면 기록돼.</p>`:'<p class="story-record-empty">새 표행을 시작하면 첫 번째 이야기가 기록돼.</p>'}`;
}
