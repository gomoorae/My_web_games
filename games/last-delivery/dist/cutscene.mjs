import {SCENES,SCENE_TITLES} from './data.mjs';

const sceneBackdropIndex={opening:1,reveal:0,midpoint:2,proof:2,boss:3,ending:3};
const sceneChapterLabel={opening:'서막',reveal:'첫 번째 밤',midpoint:'폐역참',proof:'구휼 창고',boss:'성문 앞',ending:'종막'};
const scenePortraitNames=['연우','소연','만복','길목도적','적운당 창수','독침객'];
const sceneRoles={연우:'몰락한 표국의 표사',소연:'청하성의 의원',만복:'길 위의 상인',독침객:'적운당의 자객',진백:'적운당의 집행관',곽진:'적운당주'};
const sceneEscape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// Each speaker occupies one atlas cell in a box with that cell's native ratio.
// The box and dialogue are grid siblings, so neither can cover the other.
export function renderStory(run){
 const pages=SCENES[run.scene]||SCENES.opening;
 const index=Math.max(0,Math.min(pages.length-1,Number(run.sceneIndex)||0)),page=pages[index];
 const body=Number.isInteger(page.body),portraitIndex=body?page.body:page.portrait??0;
 const columns=body?4:3,col=portraitIndex%columns,row=Math.floor(portraitIndex/columns);
 const x=col*100/(columns-1),y=row*100;
 const speaker=body?page.who:scenePortraitNames[portraitIndex]||page.who;
 const background=sceneBackdropIndex[run.scene]??0,title=SCENE_TITLES[run.scene]||'마지막 표행';
 return `<section class="scene-screen" aria-label="${sceneEscape(title)}">
  <div class="scene-backdrop" style="--scene-bg-x:${background%2*100}%;--scene-bg-y:${Math.floor(background/2)*100}%" aria-hidden="true"></div>
  <header class="scene-heading"><div><span class="scene-kicker">${sceneChapterLabel[run.scene]||'표행'} · 마지막 표행</span><h1>${sceneEscape(title)}</h1></div><button class="scene-skip" data-action="skip-story">장면 건너뛰기 <span aria-hidden="true">↗</span></button></header>
  <main class="scene-stage">
   <figure class="scene-figure ${body?'is-body':''}">
    <div class="scene-portrait-shell"><div class="scene-speaker-art ${body?'scene-body-atlas':'scene-portrait-atlas'}" style="--scene-x:${x}%;--scene-y:${y}%" role="img" aria-label="${sceneEscape(speaker)}"></div></div>
    <figcaption><strong>${sceneEscape(speaker)}</strong><span>${sceneEscape(sceneRoles[speaker]||'길 위의 사람')}</span></figcaption>
   </figure>
   <article class="scene-dialogue" aria-live="polite" aria-atomic="true">
    <span class="scene-dialogue-mark" aria-hidden="true">言</span><div class="scene-speaker-name">${sceneEscape(page.who)}</div>
    <p class="scene-dialogue-text">${sceneEscape(page.text)}</p>
    <div class="scene-dialogue-footer"><div class="scene-progress" aria-label="${index+1} / ${pages.length}"><span>${String(index+1).padStart(2,'0')}</span><i aria-hidden="true"></i><span>${String(pages.length).padStart(2,'0')}</span></div><button class="button primary scene-next" data-action="next-story">${index===pages.length-1?'계속하기':'다음'} <span aria-hidden="true">→</span></button></div>
   </article>
  </main>
  <footer class="scene-footnote">한 번 맡은 표물은 끝까지.<span>Enter / Space · 다음 대사</span></footer>
 </section>`;
}
