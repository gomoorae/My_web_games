import {STORIES,STORY_IDS,STORY_STORAGE,SceneTimer,loadStoryProgress,saveStoryProgress,shouldPlayStory} from './story-core.mjs?v=0.8.0';

export class StoryPlayer {
  constructor({storage,sprites=()=>({}),onOpen=()=>{},onClose=()=>{},onScene=()=>{},onPause=()=>{}}={}){
    Object.assign(this,{storage,sprites,onOpen,onClose,onScene,onPause});
    this.progress=loadStoryProgress(storage);this.mode=null;this.timer=new SceneTimer();this.runCues=new Set();this.generation=0;this.paused=false;this.heldKeys=new Set();
    this.root=document.createElement('section');this.root.className='story-overlay';this.root.hidden=true;
    this.root.setAttribute('role','dialog');this.root.setAttribute('aria-modal','true');
    this.root.innerHTML=`<div class="story-shell">
      <header class="story-header"><span>SKY CHASER <i>/</i> 빼앗긴 바람</span><button type="button" data-story-skip>건너뛰기</button></header>
      <div class="story-reader">
        <div class="story-picture"><img class="story-art" alt=""><canvas class="story-boss" width="600" height="500" hidden></canvas><div class="story-vignette"></div><span class="story-chapter"></span></div>
        <div class="story-caption"><h2 id="story-title"></h2><p class="story-text"></p><p class="story-dialogue"><b></b><span></span></p></div>
        <footer class="story-footer"><span class="story-count"></span><button type="button" data-story-pause aria-pressed="false">자동 넘김 멈춤</button><button type="button" class="story-next" data-story-next>다음</button></footer>
      </div>
      <div class="story-library" hidden><p class="story-eyebrow">FLIGHT JOURNAL</p><h2 id="story-library-title">빼앗긴 바람</h2><p class="story-library-copy">루미와 함께 되찾은 하늘길. 만난 장면을 다시 볼 수 있어요.</p><label class="story-preference"><input type="checkbox" data-story-preference> 본 이야기 자동 건너뛰기</label><div class="story-list"></div><button type="button" class="story-library-close" data-story-close>출격 화면으로</button></div>
    </div>`;
    document.body.append(this.root);this.resize();
    window.addEventListener('resize',()=>{this.resize();this.interrupt();});
    window.visualViewport?.addEventListener('resize',()=>{this.resize();this.interrupt();});
    this.el=selector=>this.root.querySelector(selector);
    this.el('[data-story-skip]').onclick=e=>{e.stopPropagation();this.mode==='library'?this.close():this.finish();};
    this.el('[data-story-close]').onclick=()=>this.close();
    this.el('[data-story-next]').onclick=e=>{e.stopPropagation();this.next();};
    this.el('[data-story-pause]').onclick=()=>this.togglePause();
    this.el('[data-story-preference]').onchange=e=>{this.progress.skipSeen=e.target.checked;this.progress=saveStoryProgress(this.storage,this.progress,true);};
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
    if(!Object.hasOwn(STORIES,id)||(!replay&&route!=='campaign'))return false;
    if(!replay){if(once&&this.runCues.has(id))return false;this.runCues.add(id);this.unlock(id);}
    if(!shouldPlayStory(this.progress,id,route,replay))return false;
    if(this.mode==='sequence')return true;
    this.enter();this.mode='sequence';this.sequence=id;this.index=0;this.done=onDone;this.replay=replay;this.paused=false;
    this.el('.story-library').hidden=true;this.el('.story-reader').hidden=false;
    this.root.setAttribute('aria-labelledby','story-title');this.el('[data-story-skip]').textContent='건너뛰기';
    this.showScene();this.el('[data-story-next]').focus({preventScroll:true});return true;
  }
  enter(){
    if(this.active)return;
    this.returnFocus=document.activeElement;
    this.inertRoots=[...document.body.children].filter(el=>el!==this.root&&el.tagName!=='SCRIPT').map(el=>[el,el.inert]);
    for(const [el] of this.inertRoots)el.inert=true;
    this.root.hidden=false;this.onOpen();
  }
  showScene(){
    this.timer.stop();this.animation?.cancel();this.generation++;
    const sequence=STORIES[this.sequence],scene=sequence.scenes[this.index];this.current=scene;
    this.root.dataset.theme=scene.theme;this.root.classList.toggle('story-paused',this.paused);
    this.el('.story-chapter').textContent=sequence.chapter;
    this.el('#story-title').textContent=scene.title;this.el('.story-text').textContent=scene.text;
    this.el('.story-dialogue b').textContent=scene.speaker||'';this.el('.story-dialogue span').textContent=scene.line;
    this.el('.story-dialogue').classList.toggle('spoken',!!scene.speaker);
    this.el('.story-count').textContent=`${String(this.index+1).padStart(2,'0')} / ${String(sequence.scenes.length).padStart(2,'0')}`;
    this.el('[data-story-next]').textContent=this.index===sequence.scenes.length-1?(this.replay?'목록으로':this.sequence==='opening'?'출격하기':this.sequence==='ending'?'비행 기록':'계속'):'다음';
    const img=this.el('.story-art');img.style.objectPosition=scene.position;img.alt=scene.title;img.src=scene.art;
    img.onerror=()=>{img.classList.add('story-image-failed');};img.onload=()=>img.classList.remove('story-image-failed');
    const canvas=this.el('.story-boss'),sprite=this.sprites()[scene.boss];canvas.hidden=!sprite;
    if(sprite){const c=canvas.getContext('2d');c.clearRect(0,0,600,500);const w=Math.min(550,440/sprite.ratio),h=w*sprite.ratio;c.drawImage(sprite.image,(600-w)/2,(500-h)/2,w,h);}
    if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&img.animate)this.animation=img.animate([{transform:'scale(1.02)'},{transform:'scale(1.105) translateY(-1%)'}],{duration:scene.duration,fill:'both',easing:'ease-out'});
    this.timer.start(scene.duration,()=>this.next());
    if(this.paused){this.timer.pause();this.animation?.pause();}
    this.syncPause();this.onScene(scene,this.generation);
    const next=sequence.scenes[this.index+1];if(next){this.preload=new Image();this.preload.src=next.art;}
  }
  next(){if(this.mode!=='sequence')return;if(this.index+1<STORIES[this.sequence].scenes.length){this.index++;this.showScene();}else this.finish();}
  finish(){
    if(this.mode!=='sequence')return;
    this.progress.seen=[...new Set([...this.progress.seen,this.sequence])];this.save();
    const replay=this.replay,done=this.done;this.done=null;
    if(replay){this.openLibrary();return;}
    this.close();done?.();
  }
  interrupt(){if(this.mode==='sequence'&&!this.paused){this.paused=true;this.timer.pause();this.animation?.pause();this.syncPause();this.onPause(true);}}
  togglePause(){
    if(this.mode!=='sequence'||document.hidden)return;
    this.paused=!this.paused;
    if(this.paused){this.timer.pause();this.animation?.pause();}else{this.timer.resume();this.animation?.play();}
    this.syncPause();this.onPause(this.paused);
  }
  syncPause(){const b=this.el('[data-story-pause]');b.textContent=this.paused?'계속 보기':'자동 넘김 멈춤';b.setAttribute('aria-pressed',String(this.paused));this.root.classList.toggle('story-paused',this.paused);}
  openLibrary(){
    this.timer.stop();this.animation?.cancel();this.done=null;this.generation++;this.enter();this.mode='library';this.paused=false;
    this.el('.story-reader').hidden=true;this.el('.story-library').hidden=false;
    this.root.setAttribute('aria-labelledby','story-library-title');this.el('[data-story-skip]').textContent='닫기';
    this.renderLibrary();this.onPause(true);this.el('[data-story-close]').focus({preventScroll:true});
  }
  renderLibrary(){
    this.el('[data-story-preference]').checked=this.progress.skipSeen;
    const list=this.el('.story-list');list.replaceChildren();
    for(const id of STORY_IDS){
      const button=document.createElement('button');button.type='button';button.dataset.storyReplay=id;
      button.disabled=!this.progress.unlocked.includes(id);
      const label=document.createElement('span');label.textContent=STORIES[id].label;button.append(label);
      const hint=document.createElement('small');hint.textContent=button.disabled?(id==='ending'?'연속 출격 클리어 후':'연속 출격에서 만나기'):'다시 보기 →';button.append(hint);
      button.onclick=()=>this.play(id,{replay:true});list.append(button);
    }
  }
  close(){
    if(!this.active)return;
    this.timer.stop();this.animation?.cancel();this.generation++;this.mode=null;this.current=null;this.done=null;this.paused=false;this.root.hidden=true;
    for(const [el,value] of this.inertRoots||[])el.inert=value;
    this.onClose();if(this.returnFocus?.isConnected&&!this.returnFocus.closest('[hidden]'))this.returnFocus.focus({preventScroll:true});
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
  snapshot(){return {active:this.active,mode:this.mode,sequence:this.sequence||null,index:this.index,paused:this.paused,seen:[...this.progress.seen],unlocked:[...this.progress.unlocked],skipSeen:this.progress.skipSeen};}
}
