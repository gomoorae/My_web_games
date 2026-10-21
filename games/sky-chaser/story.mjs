import {STORIES,STORY_IDS,STORY_STORAGE,SceneTimer,loadStoryProgress,saveStoryProgress,shouldPlayStory} from './story-core.mjs?v=0.9.3';
import {StoryCinema,storyPresentation} from './story-cinema.mjs?v=0.9.3';

export class StoryPlayer {
  constructor({storage,sprites=()=>({}),artReady=Promise.resolve(),motion=()=>true,onOpen=()=>{},onClose=()=>{},onScene=()=>{},onPause=()=>{}}={}){
    Object.assign(this,{storage,sprites,artReady,motion,onOpen,onClose,onScene,onPause});this.cinema=new StoryCinema();
    this.progress=loadStoryProgress(storage);this.mode=null;this.timer=new SceneTimer();this.runCues=new Set();this.generation=0;this.paused=false;this.heldKeys=new Set();
    this.root=document.createElement('section');this.root.className='story-overlay';this.root.hidden=true;
    this.root.setAttribute('role','dialog');this.root.setAttribute('aria-modal','true');
    const runes=Array.from({length:16},(_,i)=>`<path transform="rotate(${i*22.5} 240 240)" d="M240 40l5 9-5 9-5-9z M240 66v16"/>`).join('');
    this.root.innerHTML=`<div class="story-shell">
      <header class="story-header"><span>SKY CHASER <i>/</i> 빼앗긴 바람</span><button type="button" data-story-skip>건너뛰기</button></header>
      <div class="story-reader">
        <div class="story-backdrop" aria-hidden="true"></div>
        <div class="story-picture"><img class="story-art" alt=""><div class="story-vignette"></div>
          <span class="story-ghost" aria-hidden="true"></span>
          <div class="story-runes" aria-hidden="true"><svg viewBox="0 0 480 480" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="240" cy="240" r="200"/><circle cx="240" cy="240" r="174" stroke-dasharray="3 9"/><circle cx="240" cy="240" r="147"/><path d="M240 76L382 322H98Z M240 404L98 158H382Z"/>${runes}</svg></div>
          <div class="story-actor" aria-hidden="true"><img src="./assets/lumi-key-art.png" alt=""><span>LUMI</span></div>
          <canvas class="story-boss" width="1200" height="1000" hidden></canvas>
          <div class="story-rays" aria-hidden="true"></div>
        </div>
        <div class="story-previous" aria-hidden="true" hidden></div>
        <div class="story-sweep" aria-hidden="true"></div><div class="story-flash" aria-hidden="true"></div>
        <div class="story-caption"><p class="story-chapter"></p><h2 id="story-title"></h2><span class="story-rule" aria-hidden="true"></span><p class="story-text"></p><p class="story-dialogue"><b></b><span></span></p></div>
        <footer class="story-footer"><div class="story-progress" aria-hidden="true"><span class="story-progress-fill"></span></div><span class="story-count"></span><button type="button" data-story-pause aria-pressed="false">자동 넘김 멈춤</button><button type="button" class="story-next" data-story-next>다음</button></footer>
      </div>
      <div class="story-library" hidden><p class="story-eyebrow">FLIGHT JOURNAL</p><h2 id="story-library-title">빼앗긴 바람</h2><p class="story-library-copy">이야기는 출격할 때마다 나와요. 언제든 건너뛰거나, 만난 장면을 여기서 다시 볼 수 있어요.</p><div class="story-list"></div><button type="button" class="story-library-close" data-story-close>출격 화면으로</button></div>
    </div>`;
    document.body.append(this.root);this.resize();
    window.addEventListener('resize',()=>{this.resize();this.interrupt();});
    window.visualViewport?.addEventListener('resize',()=>{this.resize();this.interrupt();});
    this.el=selector=>this.root.querySelector(selector);
    this.el('[data-story-skip]').onclick=e=>{e.stopPropagation();this.mode==='library'?this.close():this.finish();};
    this.el('[data-story-close]').onclick=()=>this.close();
    this.el('[data-story-next]').onclick=e=>{e.stopPropagation();this.next();};
    this.el('[data-story-pause]').onclick=()=>this.togglePause();
    window.addEventListener('keydown',e=>this.key(e),true);
    window.addEventListener('keyup',e=>{if(this.heldKeys.delete(e.code)){e.preventDefault();e.stopImmediatePropagation();}else if(this.active&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&this.gameKey(e.code))e.stopImmediatePropagation();},true);
    window.addEventListener('blur',()=>{this.heldKeys.clear();this.interrupt();});
    document.addEventListener('visibilitychange',()=>{if(document.hidden){this.heldKeys.clear();this.interrupt();}});
    window.addEventListener('pagehide',()=>this.cancel());
    window.addEventListener('storage',e=>{if(e.key===STORY_STORAGE){this.progress=loadStoryProgress(this.storage);if(this.mode==='library')this.renderLibrary();}});
  }
  resize(){this.root.style.height=Math.floor(window.visualViewport?.height||window.innerHeight)+'px';this.root.style.bottom='auto';}
  get active(){return this.mode!==null;}
  resetRun(){this.runCues.clear();}
  save(){this.progress=saveStoryProgress(this.storage,this.progress);}
  unlock(id){if(!this.progress.unlocked.includes(id)){this.progress.unlocked.push(id);this.save();}}
  play(id,{route='campaign',replay=false,onDone=null,once=false}={}){
    if(!shouldPlayStory(this.progress,id,route,replay))return false;
    if(!replay){if(once&&this.runCues.has(id))return false;this.runCues.add(id);this.unlock(id);}
    if(this.mode==='sequence')return true;
    this.enter({sequence:id,replay});this.mode='sequence';this.root.dataset.mode='sequence';this.sequence=id;this.current=null;this.index=0;this.done=onDone;this.replay=replay;this.paused=false;
    this.el('.story-library').hidden=true;this.el('.story-reader').hidden=false;
    this.root.setAttribute('aria-labelledby','story-title');this.el('[data-story-skip]').textContent='건너뛰기';
    this.showScene();this.el('[data-story-next]').focus({preventScroll:true});return true;
  }
  enter(context={}){
    if(this.active)return;
    this.returnFocus=document.activeElement;
    this.inertRoots=[...document.body.children].filter(el=>el!==this.root&&el.tagName!=='SCRIPT').map(el=>[el,el.inert]);
    for(const [el] of this.inertRoots)el.inert=true;
    this.root.hidden=false;this.onOpen(context);
  }
  showScene(){
    this.timer.stop();this.cinema.cancel();this.generation++;
    const previous=this.current,sequence=STORIES[this.sequence],scene=sequence.scenes[this.index];this.current=scene;
    const presentation=storyPresentation(this.sequence,this.index,scene);this.root.dataset.kind=presentation.kind;
    this.el('.story-ghost').textContent=presentation.word;this.el('.story-actor').hidden=presentation.kind!=='lumi';
    this.el('.story-backdrop').style.backgroundImage=`url("${scene.art}")`;
    const prior=this.el('.story-previous');prior.hidden=!previous;prior.style.backgroundImage=previous?`url("${previous.art}")`:'';prior.style.backgroundPosition=previous?.position||'center';
    this.root.dataset.theme=scene.theme;this.root.classList.toggle('story-paused',this.paused);
    this.el('.story-chapter').textContent=sequence.chapter;
    this.el('#story-title').textContent=scene.title;this.el('.story-text').textContent=scene.text;
    this.el('.story-dialogue b').textContent=scene.speaker||'';this.el('.story-dialogue span').textContent=scene.line;
    this.el('.story-dialogue').classList.toggle('spoken',!!scene.speaker);
    this.el('.story-count').textContent=`${String(this.index+1).padStart(2,'0')} / ${String(sequence.scenes.length).padStart(2,'0')}`;
    this.el('[data-story-next]').textContent=this.index===sequence.scenes.length-1?(this.replay?'목록으로':this.sequence==='opening'?'출격하기':this.sequence==='ending'?'비행 기록':'계속'):'다음';
    const img=this.el('.story-art');img.style.objectPosition=scene.position;img.alt=scene.title;img.src=scene.art;
    img.onerror=()=>{img.classList.add('story-image-failed');};img.onload=()=>img.classList.remove('story-image-failed');
    this.drawBoss(scene);
    const generation=this.generation;
    if(scene.boss)Promise.resolve(this.artReady).then(()=>{if(generation===this.generation&&this.mode==='sequence')this.drawBoss(scene);}).catch(()=>{});
    this.cinema.start(this.root,{kind:presentation.kind,duration:scene.duration,previous:!!previous,reduced:matchMedia('(prefers-reduced-motion: reduce)').matches||!this.motion(),paused:this.paused});
    this.timer.start(scene.duration,()=>this.next());
    if(this.paused)this.timer.pause();
    this.syncPause();this.onScene(scene,this.generation);
    const next=sequence.scenes[this.index+1];if(next){this.preload=new Image();this.preload.src=next.art;}
  }
  drawBoss(scene){
    const canvas=this.el('.story-boss'),sprite=this.sprites()[scene.boss];canvas.hidden=!sprite;
    if(sprite){const c=canvas.getContext('2d');c.clearRect(0,0,1200,1000);const w=Math.min(1100,880/sprite.ratio),h=w*sprite.ratio;c.drawImage(sprite.image,(1200-w)/2,(1000-h)/2,w,h);}
  }
  next(){if(this.mode!=='sequence')return;if(this.index+1<STORIES[this.sequence].scenes.length){this.index++;this.showScene();}else this.finish();}
  finish(){
    if(this.mode!=='sequence')return;
    this.progress.seen=[...new Set([...this.progress.seen,this.sequence])];this.save();
    const replay=this.replay,done=this.done;this.done=null;
    if(replay){this.openLibrary();return;}
    this.close({continues:!!done});done?.();
  }
  interrupt(){if(this.mode==='sequence'&&!this.paused){this.paused=true;this.timer.pause();this.cinema.pause();this.syncPause();this.onPause(true);}}
  togglePause(){
    if(this.mode!=='sequence'||document.hidden)return;
    this.paused=!this.paused;
    if(this.paused){this.timer.pause();this.cinema.pause();}else{this.timer.resume();this.cinema.resume();}
    this.syncPause();this.onPause(this.paused);
  }
  syncPause(){const b=this.el('[data-story-pause]');b.textContent=this.paused?'계속 보기':'자동 넘김 멈춤';b.setAttribute('aria-pressed',String(this.paused));this.root.classList.toggle('story-paused',this.paused);}
  openLibrary(){
    this.timer.stop();this.cinema.cancel();this.done=null;this.generation++;this.enter({library:true});this.mode='library';this.root.dataset.mode='library';this.paused=false;
    this.el('.story-reader').hidden=true;this.el('.story-library').hidden=false;
    this.root.setAttribute('aria-labelledby','story-library-title');this.el('[data-story-skip]').textContent='닫기';
    this.renderLibrary();this.onPause(true);this.el('[data-story-close]').focus({preventScroll:true});
  }
  renderLibrary(){
    const list=this.el('.story-list');list.replaceChildren();
    for(const id of STORY_IDS){
      const button=document.createElement('button');button.type='button';button.dataset.storyReplay=id;
      button.disabled=!this.progress.unlocked.includes(id);
      const label=document.createElement('span');label.textContent=STORIES[id].label;button.append(label);
      const hint=document.createElement('small');hint.textContent=button.disabled?(id==='ending'?'연속 출격 클리어 후':'연속 출격에서 만나기'):'다시 보기 →';button.append(hint);
      button.onclick=()=>this.play(id,{replay:true});list.append(button);
    }
  }
  close(context={}){
    if(!this.active)return;
    this.timer.stop();this.cinema.cancel();this.generation++;this.mode=null;this.current=null;this.done=null;this.paused=false;this.root.hidden=true;
    for(const [el,value] of this.inertRoots||[])el.inert=value;
    this.onClose(context);if(this.returnFocus?.isConnected&&!this.returnFocus.closest('[hidden]'))this.returnFocus.focus({preventScroll:true});
  }
  cancel(){this.done=null;this.close();}
  gameKey(code){return ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyW','KeyA','KeyS','KeyD','ShiftLeft','ShiftRight','KeyZ','KeyX','KeyF','Enter','Space','Escape'].includes(code);}
  key(e){
    if(!this.active){if(this.heldKeys.has(e.code)){e.preventDefault();e.stopImmediatePropagation();}return;}
    if(e.ctrlKey||e.metaKey||e.altKey)return;
    if(e.code==='Tab'){
      const items=[...this.root.querySelectorAll('button,input')].filter(el=>!el.disabled&&el.getClientRects().length),first=items[0],last=items.at(-1);
      if(!this.root.contains(document.activeElement)||e.shiftKey&&document.activeElement===first||!e.shiftKey&&document.activeElement===last){e.preventDefault();(e.shiftKey?last:first)?.focus();}
      e.stopImmediatePropagation();return;
    }
    if(!this.gameKey(e.code))return;this.heldKeys.add(e.code);e.stopImmediatePropagation();
    if(e.code==='Escape'){e.preventDefault();if(!e.repeat)this.mode==='library'?this.close():this.finish();return;}
    if(['Enter','Space'].includes(e.code)&&['BUTTON','INPUT'].includes(e.target.tagName)){e.preventDefault();if(!e.repeat)e.target.click();return;}
    e.preventDefault();if(!e.repeat&&['Enter','Space'].includes(e.code))this.next();
  }
  snapshot(){return {active:this.active,mode:this.mode,sequence:this.sequence||null,index:this.index,paused:this.paused,seen:[...this.progress.seen],unlocked:[...this.progress.unlocked],cinema:this.cinema.snapshot(),presentation:this.root.dataset.kind||null};}
}
