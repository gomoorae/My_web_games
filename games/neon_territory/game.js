/* NEON TERRITORY — presentation, persistence and browser lifecycle. */
(() => {
  'use strict';
  const {Engine, STAGES, W, H, SEA, SAFE, TRAIL} = window.NeonEngine;
  const $ = id => document.getElementById(id);
  const canvas = $('game'), ctx = canvas.getContext('2d');
  const shell = document.querySelector('.shell');
  const S = 10, STEP = 1 / 120;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const colors = {drifter:'#ff719d',ricochet:'#ba9cff',hunter:'#ffb96b',charger:'#72cbff'};
  const names = {drifter:'유영형',ricochet:'반사형',hunter:'추적형',charger:'돌진형'};
  const medalNames = {gold:'금메달',silver:'은메달',bronze:'동메달'};
  const ground = document.createElement('canvas'); ground.width=960; ground.height=600;
  const g = ground.getContext('2d');
  const glow = document.createElement('canvas'); glow.width=960; glow.height=600;
  const glowCtx = glow.getContext('2d');
  let storage = null;
  try { storage=window.localStorage; } catch (_) { /* Private/blocked storage is optional. */ }
  const store = window.NeonProgress.createStore(storage);
  let progress=store.load(), engine=Engine.fromJSON(progress.snapshot) || new Engine();
  let restored=!!progress.snapshot && engine.state!=='ready';
  let controls, last=0, accumulator=0, lastHUD=0, lastSave=0, lastRevision=-1;
  let particles=[], captureGlow=0, toastTime=0, flash=0, uiState='', audioContext=null;
  let dialogReturn=null, confirmAction=null, saveAvailable=true, displayScale=1;
  let lastStatus='';

  function message(text) { if(text!==lastStatus){$('status').textContent=text;lastStatus=text;} }
  function timeText(time) {
    const seconds=Math.max(0,Math.floor(time));
    return `${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;
  }
  function focusGame() { canvas.focus({preventScroll:true}); }
  function resetClock() { last=0; accumulator=0; controls?.clear(); }
  function save() {
    progress.snapshot=engine.toJSON();
    saveAvailable=store.save(progress);
    $('save-status').textContent=saveAvailable?'진행 자동 저장':'이 브라우저에서는 저장할 수 없어';
    return saveAvailable;
  }
  function unlockAudio() {
    if(!progress.settings.sound)return;
    try {
      const Audio=window.AudioContext||window.webkitAudioContext;
      if(!Audio)return;
      if(!audioContext)audioContext=new Audio();
      if(audioContext.state==='suspended')audioContext.resume().catch(()=>{});
    } catch (_) { /* Audio must never prevent a game from starting. */ }
  }
  function sound(kind,large=false) {
    if(!progress.settings.sound||!audioContext||audioContext.state!=='running')return;
    const notes=kind==='win'?[440,554,659,880]:kind==='loss'?[190,120]:kind==='capture'?(large?[440,659,880]:[440,587]):[330];
    try {
      notes.forEach((freq,i)=>{
        const osc=audioContext.createOscillator(),gain=audioContext.createGain(),t=audioContext.currentTime+i*.065;
        osc.type=kind==='loss'?'triangle':'sine';osc.frequency.setValueAtTime(freq,t);
        gain.gain.setValueAtTime(0,t);gain.gain.linearRampToValueAtTime(.065,t+.012);gain.gain.exponentialRampToValueAtTime(.001,t+.19);
        osc.connect(gain);gain.connect(audioContext.destination);osc.start(t);osc.stop(t+.21);
      });
    } catch (_) { /* Device audio can be interrupted independently. */ }
  }
  function updateSound() {
    $('sound').textContent=progress.settings.sound?'소리 켜짐':'소리 꺼짐';
    $('sound').setAttribute('aria-pressed',String(progress.settings.sound));
  }
  function burst(x,y,color,count) {
    if(reduced.matches)return;
    for(let i=0;i<count;i++){
      const angle=Math.random()*Math.PI*2,speed=25+Math.random()*110;
      particles.push({x,y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,life:.6+Math.random()*.3,color});
    }
    if(particles.length>120)particles.splice(0,particles.length-120);
  }
  function showCapture(event) {
    captureGlow=reduced.matches?.2:.8;
    glowCtx.clearRect(0,0,960,600);glowCtx.fillStyle='#caffef';
    for(const cell of event.cells||[])glowCtx.fillRect(cell%W*S,Math.floor(cell/W)*S,S,S);
    $('capture-toast').textContent=event.lineOnly?'구역 분할 완료':`+${event.gain.toFixed(1)}%${event.gain>=10?' · 대규모 확보!':''}`;
    $('capture-toast').hidden=false;$('capture-toast').classList.add('show');toastTime=1.7;
    message(event.lineOnly?'양쪽에 적이 남아 선만 확보했어. 나뉜 구역을 발판으로 넓혀봐.':`${event.gain.toFixed(1)}% 확보! +${event.points}점 · 다음 빈틈을 찾아봐.`);
    burst((engine.player.x+.5)*S,(engine.player.y+.5)*S,'#8affdb',event.gain>=10?40:20);
    sound('capture',event.gain>=10);
  }
  function processEvents() {
    for(const event of engine.drainEvents()){
      if(event.type==='capture'){showCapture(event);save();}
      if(event.type==='lifeLost'){
        flash=reduced.matches?0:.35;captureGlow=0;controls.clear();
        message(event.reason||'기회가 하나 줄었어. 안전 영역에서 다시 출발해.');
        burst((engine.player.x+.5)*S,(engine.player.y+.5)*S,'#ff719d',28);sound('loss');save();
      }
      if(event.type==='trapped')message('내 선에 갇혔어. 긴급 귀환으로 기회 1개를 쓰고 출발점으로 돌아갈 수 있어.');
      if(event.type==='blocked')message(event.reason||'내 선은 건널 수 없어. 다른 방향으로 돌아가거나 긴급 귀환을 사용해.');
      if(event.type==='win'){
        window.NeonProgress.recordWin(progress,engine.stageIndex,event.result);
        sound('win');save();
      }
    }
  }
  function setOverlay(label,title,copy,action,stats='') {
    $('overlay').hidden=false;$('overlay-label').textContent=label;$('overlay-title').textContent=title;
    $('overlay-copy').textContent=copy;$('overlay-action').textContent=action;
    $('overlay-action').disabled=false;$('overlay-stats').textContent=stats;
    $('overlay-help').hidden=engine.state!=='ready';
    $('overlay-secondary').hidden=false;$('overlay-secondary').textContent='스테이지 선택';
  }
  function syncUI(force=false) {
    const playing=engine.state==='playing',drawing=engine.trail.length>0;
    $('stage-number').textContent=String(engine.stageIndex+1).padStart(2,'0');
    $('stage-badge').textContent=`${String(engine.stageIndex+1).padStart(2,'0')} / 10 · ${engine.stage.title}`;
    $('stage-description').textContent=`${engine.stage.title} · ${engine.stage.hint}`;
    $('goal-inline').textContent=`목표 ${engine.stage.goal}%`;
    $('percent').textContent=`${engine.percent.toFixed(1)}%`;
    $('time').textContent=timeText(engine.elapsed);$('score').textContent=Math.round(engine.score).toLocaleString('ko-KR');
    $('lives').textContent='♥'.repeat(engine.lives)+'♡'.repeat(3-engine.lives);
    $('lives').setAttribute('aria-label',`남은 기회 ${engine.lives}회`);
    $('meter').style.width=`${engine.percent}%`;$('progress').setAttribute('aria-valuenow',engine.percent.toFixed(1));
    $('progress').setAttribute('aria-valuetext',`${engine.percent.toFixed(1)}%, 목표 ${engine.stage.goal}%`);
    $('mode').textContent=drawing?'선 연결 중':engine.armed?'선 긋기 준비':'안전 영역';
    for(const id of ['draw','draw-touch']){
      $(id).disabled=!playing||drawing||engine.respawn>0;
      $(id).textContent=drawing?'선을 연결해':engine.armed?'선 긋기 끄기':'선 긋기 켜기';
      $(id).classList.toggle('active',engine.armed);$(id).setAttribute('aria-pressed',String(engine.armed));
    }
    for(const id of ['abort','abort-touch'])$(id).disabled=!playing||!drawing;
    for(const id of ['pause','pause-touch']){
      $(id).disabled=!['playing','paused'].includes(engine.state);
      $(id).textContent=engine.state==='paused'?'계속':'일시정지';
    }
    if(uiState===engine.state&&!force)return;
    uiState=engine.state;document.body.dataset.gameState=engine.state;
    if(playing){$('overlay').hidden=true;return;}
    if(engine.state==='ready')setOverlay(`STAGE ${engine.stageIndex+1} / 10`,engine.stage.title,
      `${engine.stageIndex===0?'선 긋기 버튼 / Space를 켜고, 빈 땅을 둘러싸 안전 영역에 연결해.':engine.stage.hint} 목표 ${engine.stage.goal}% · 적 ${engine.stage.count}마리.`,'게임 시작');
    else if(engine.state==='paused')setOverlay(restored?'SAVED GAME':'PAUSED',restored?'하던 곳부터 이어가자.':'잠깐 쉬어가기',
      engine.trail.length?'그리던 선까지 그대로야. 계속하기를 누르면 움직여.':'계속하기를 누르면 멈춘 자리에서 이어져.','계속하기',`${engine.percent.toFixed(1)}% · ${timeText(engine.elapsed)} · ${engine.lives}회 남음`);
    else if(engine.state==='lost')setOverlay('TRY AGAIN','다시 땅을 넓혀볼까?',
      '이 스테이지부터 다시 도전할 수 있어. 해금과 최고 기록은 유지돼.','이 스테이지 재도전',`${engine.percent.toFixed(1)}% 확보 · ${Math.round(engine.score).toLocaleString()}점`);
    else {
      const result=engine.result||{score:engine.score,time:engine.elapsed,lives:engine.lives,medal:'bronze'};
      const complete=engine.state==='complete';
      setOverlay(complete?'ALL CLEAR':'STAGE CLEAR',complete?'열 개의 경계를 모두 넘었어!':`${engine.stageIndex+1}스테이지 클리어!`,
        complete?'스테이지 선택에서 최고 기록과 메달에 다시 도전해봐.':`다음은 ${STAGES[engine.stageIndex+1]?.title}. 기회는 다시 3회야.`,
        complete?'1스테이지 다시 도전':'다음 스테이지',`${medalNames[result.medal]||result.medal} · ${Math.round(result.score).toLocaleString()}점 · ${timeText(result.time)} · 기회 ${result.lives}회`);
    }
  }
  function startStage(index,showIntro=false) {
    engine=new Engine({stageIndex:index});restored=false;particles=[];captureGlow=0;toastTime=0;
    $('capture-toast').hidden=true;lastRevision=-1;resetClock();if(!showIntro)engine.start();
    message(`${engine.stage.title} · 선 긋기를 켠 뒤 빈 땅을 둘러싸고 안전 영역으로 돌아와.`);
    save();syncUI(true);if(showIntro)$('overlay-action').focus({preventScroll:true});else focusGame();
  }
  function activate() {
    unlockAudio();
    if(engine.state==='ready')engine.start();
    else if(engine.state==='paused')engine.resume();
    else if(engine.state==='lost')return startStage(engine.stageIndex);
    else if(engine.state==='won')return startStage(engine.stageIndex+1,true);
    else if(engine.state==='complete')return startStage(0);
    restored=false;resetClock();message(engine.trail.length?'선을 안전 영역에 연결해.':engine.armed?'선 긋기가 켜져 있어. 빈 땅으로 출발해.':'선 긋기를 켜고 빈 땅으로 이동해봐.');
    save();syncUI(true);focusGame();
  }
  function pauseGame() {
    if(engine.state==='playing'){engine.pause();resetClock();save();syncUI(true);}
  }
  function togglePause() {
    if(!$('dialog').hidden)return;
    if(engine.state==='paused')activate();else pauseGame();
  }
  function draw() {
    unlockAudio();
    if(!engine.toggleDraw()){
      if(engine.trail.length)message('그리던 선을 안전 영역에 연결해야 해. 긴급 귀환은 기회 1개를 사용해.');
      return;
    }
    if(engine.state==='playing')message(engine.armed?'선 긋기 준비 완료. 어두운 땅으로 출발해.':'안전 영역에서는 더 빠르게 움직일 수 있어.');
    syncUI();focusGame();
  }
  function doAbort() {
    engine.abortTrail();processEvents();syncUI(true);save();resetClock();focusGame();
  }
  function abort() {
    if(engine.state!=='playing'||!engine.trail.length)return;
    if(engine.lives===1){
      openDialog('마지막 기회를 사용할까?','긴급 귀환하면 이 스테이지가 끝나고 재도전할 수 있어.');
      $('dialog-confirm').hidden=false;$('dialog-confirm').textContent='기회 1개 쓰고 귀환';
      confirmAction=()=>{engine.resume();doAbort();};
    } else doAbort();
  }
  function openDialog(title,copy) {
    dialogReturn=document.activeElement;pauseGame();controls.setEnabled(false);
    $('dialog-title').textContent=title;$('dialog-copy').textContent=copy;
    $('dialog-body').replaceChildren();$('dialog-confirm').hidden=true;confirmAction=null;
    $('dialog').hidden=false;
    if(!$('dialog').closest('.shell'))shell.inert=true;
    $('dialog-close').focus({preventScroll:true});
  }
  function closeDialog() {
    $('dialog').hidden=true;shell.inert=false;confirmAction=null;controls.setEnabled(true);resetClock();
    if(dialogReturn?.isConnected&&!dialogReturn.disabled)dialogReturn.focus({preventScroll:true});
    else $('overlay-action').focus({preventScroll:true});
  }
  function chooseStage(index) {
    if(index>=progress.unlocked)return;
    if(['playing','paused'].includes(engine.state)&&engine.elapsed>0){
      $('dialog-title').textContent=`${index+1}스테이지에서 새로 시작할까?`;
      $('dialog-copy').textContent='진행 중인 판은 새 판으로 바뀌어. 해금과 최고 기록은 유지돼.';
      $('dialog-confirm').hidden=false;$('dialog-confirm').textContent='새로 시작';
      confirmAction=()=>startStage(index,true);$('dialog-confirm').focus({preventScroll:true});
    } else {closeDialog();startStage(index,true);}
  }
  function stageMenu() {
    openDialog('스테이지 선택','클리어한 다음 스테이지가 열려. 각 판은 기회 3회로 시작해.');
    const actions=document.createElement('div');actions.className='menu-actions';
    for(const [label,action] of [['내 기록',records],['플레이 방법',help]]){
      const button=document.createElement('button');button.className='secondary';button.textContent=label;
      button.addEventListener('click',action);actions.append(button);
    }
    const grid=document.createElement('div');grid.className='stage-grid';
    STAGES.forEach((stage,index)=>{
      const button=document.createElement('button'),record=progress.records[index];
      button.className='stage-card';button.disabled=index>=progress.unlocked;
      button.textContent=`${String(index+1).padStart(2,'0')} · ${stage.title}${record?' · '+(medalNames[record.medal]||'클리어'):button.disabled?' · 잠김':''}`;
      button.addEventListener('click',()=>chooseStage(index));grid.append(button);
    });$('dialog-body').append(actions,grid);
  }
  function records() {
    openDialog('내 최고 기록','금메달: 기회 3회 · 은메달: 2회 · 동메달: 1회로 클리어. 점수와 시간은 각각의 최고 기록이야.');
    const list=document.createElement('div');list.className='record-list';
    STAGES.forEach((stage,index)=>{
      const p=document.createElement('p'),r=progress.records[index];p.className='record-row';
      p.textContent=`${index+1}. ${stage.title} — ${r?`${medalNames[r.medal]} · ${r.score.toLocaleString()}점 · 최단 ${timeText(r.time)} · 최대 한 번 ${r.largestCapture.toFixed(1)}%`:'아직 클리어 기록이 없어'}`;list.append(p);
    });
    const total=document.createElement('p');total.textContent=`스테이지 최고 점수 합계: ${Object.values(progress.records).reduce((sum,r)=>sum+r.score,0).toLocaleString()}점`;
    $('dialog-body').append(total,list);
  }
  function help() {
    openDialog('땅을 넓히는 방법','길게 그린 선도 양쪽에 적이 있으면 선만 확보돼. 적이 없는 쪽을 만들어야 땅이 채워져.');
    const items=[
      '① 이동: 방향키 / WASD. 휴대폰은 방향패드를 누른 채 손가락을 밀어 방향을 바꿔.',
      '② Space / 선 긋기 버튼으로 준비하고 빈 땅으로 출발해. ③ 민트색 안전 영역에 연결하면 확보 완료!',
      '적이 미완성 선에 닿으면 기회 1개를 잃어. 내 선은 건널 수 없고, X / 긴급 귀환은 기회 1개를 쓰고 출발점으로 돌아와.',
      '안전 영역에서는 이동이 1.6배 빨라. 처음부터 있던 안전 섬은 확보할 땅의 계산에서 제외돼.',
      '한 번에 크게 확보할수록 추가 점수를 받아. 클리어 때 남은 기회와 시간 보너스가 붙어. 시간제한은 없어.',
      '분홍 유영형은 예고 후 방향 전환, 보라 반사형은 직진하며 벽에서 반사해. 주황 추적형은 선 끝을 겨냥하고, 파랑 돌진형은 예고 방향으로 돌진해.',
      'P / Esc / 일시정지로 쉬어갈 수 있어. 화면 전환·회전 때도 자동으로 멈춰. 진행은 이 브라우저에 저장돼.'
    ];
    const list=document.createElement('ol');list.className='help-list';
    for(const text of items){const li=document.createElement('li');li.textContent=text;list.append(li);}
    $('dialog-body').append(list);
  }
  async function fullscreen() {
    pauseGame();
    try {
      if(document.fullscreenElement){await document.exitFullscreen();}
      else if(document.documentElement.requestFullscreen){await document.documentElement.requestFullscreen();}
      else document.body.classList.toggle('focus-mode');
    } catch (_) {document.body.classList.toggle('focus-mode');}
    resize();
  }
  function paintGround() {
    g.fillStyle='#0a1426';g.fillRect(0,0,960,600);
    g.strokeStyle='#172a40';g.lineWidth=1;g.beginPath();
    for(let x=0;x<=960;x+=40){g.moveTo(x+.5,0);g.lineTo(x+.5,600);}
    for(let y=0;y<=600;y+=40){g.moveTo(0,y+.5);g.lineTo(960,y+.5);}g.stroke();
    for(let y=0;y<H;y++)for(let x=0;x<W;x++)if(engine.grid[y*W+x]===SAFE){
      const border=!x||!y||x===W-1||y===H-1;
      g.fillStyle=border?'#397e78':engine.initialSafe?.[y*W+x]?'#285b60':`hsl(${164+x*.25} 48% ${20+(x+y)%9*.5}%)`;
      g.fillRect(x*S,y*S,S,S);
    }
    g.strokeStyle='#7df3d2a0';g.lineWidth=1;g.beginPath();
    for(let y=1;y<H-1;y++)for(let x=1;x<W-1;x++)if(engine.grid[y*W+x]===SAFE){
      if(engine.grid[y*W+x+1]!==SAFE){g.moveTo((x+1)*S,y*S);g.lineTo((x+1)*S,(y+1)*S);}
      if(engine.grid[y*W+x-1]!==SAFE){g.moveTo(x*S,y*S);g.lineTo(x*S,(y+1)*S);}
      if(engine.grid[(y+1)*W+x]!==SAFE){g.moveTo(x*S,(y+1)*S);g.lineTo((x+1)*S,(y+1)*S);}
      if(engine.grid[(y-1)*W+x]!==SAFE){g.moveTo(x*S,y*S);g.lineTo((x+1)*S,y*S);}
    }g.stroke();lastRevision=engine.revision;
  }
  function render(dt) {
    if(lastRevision!==engine.revision)paintGround();ctx.drawImage(ground,0,0);
    if(captureGlow>0){ctx.globalAlpha=Math.min(.7,captureGlow);ctx.drawImage(glow,0,0);ctx.globalAlpha=1;captureGlow=Math.max(0,captureGlow-dt);}
    if(engine.trail.length){
      const width=Math.min(10,Math.max(6,displayScale*2.5));ctx.fillStyle='#ffda8a';
      ctx.shadowColor='#ffc15e';ctx.shadowBlur=reduced.matches?0:8;
      for(const cell of engine.trail)ctx.fillRect(cell%W*S+(10-width)/2,Math.floor(cell/W)*S+(10-width)/2,width,width);
      ctx.shadowBlur=0;
    }
    for(const e of engine.enemies){
      const x=e.x*S,y=e.y*S,r=Math.max(9,displayScale*4);
      if(e.warning>0&&Number.isFinite(e.intentAngle)){
        ctx.save();ctx.strokeStyle=colors[e.kind];ctx.globalAlpha=.75;ctx.lineWidth=Math.max(2,displayScale);ctx.setLineDash([7,6]);
        ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+Math.cos(e.intentAngle)*65,y+Math.sin(e.intentAngle)*65);ctx.stroke();ctx.setLineDash([]);
        ctx.beginPath();ctx.arc(x,y,r+6+Math.sin(engine.elapsed*18)*2,0,Math.PI*2);ctx.stroke();ctx.restore();
      }
      ctx.save();ctx.translate(x,y);ctx.strokeStyle=colors[e.kind]||colors.drifter;ctx.fillStyle='#0a1426';
      ctx.lineWidth=Math.max(2,displayScale*.8);ctx.shadowColor=ctx.strokeStyle;ctx.shadowBlur=reduced.matches?0:10;
      ctx.beginPath();
      if(e.kind==='charger'){
        ctx.rotate(Math.atan2(e.vy,e.vx));ctx.moveTo(r,0);ctx.lineTo(-r*.7,-r*.7);ctx.lineTo(-r*.4,0);ctx.lineTo(-r*.7,r*.7);ctx.closePath();
      } else if(e.kind==='hunter'){
        ctx.moveTo(0,-r);ctx.lineTo(r,0);ctx.lineTo(0,r);ctx.lineTo(-r,0);ctx.closePath();
      } else if(e.kind==='ricochet'){ctx.rect(-r*.7,-r*.7,r*1.4,r*1.4);}
      else{ctx.arc(0,0,r*.8,0,Math.PI*2);}
      ctx.fill();ctx.stroke();ctx.shadowBlur=0;
      ctx.fillStyle=ctx.strokeStyle;ctx.fillRect(-2,-2,4,4);ctx.restore();
    }
    if(engine.respawn<=0||Math.floor(engine.respawn*10)%2===0){
      const r=Math.max(5,displayScale*3.2),margin=r+4;
      const x=Math.max(margin,Math.min(960-margin,(engine.player.x+.5)*S));
      const y=Math.max(margin,Math.min(600-margin,(engine.player.y+.5)*S));
      ctx.save();ctx.translate(x,y);ctx.fillStyle=engine.armed?'#ffe5a3':'#e7fff9';ctx.shadowColor=engine.armed?'#ffc76b':'#72fbd6';ctx.shadowBlur=reduced.matches?0:12;
      ctx.fillRect(-r,-r,r*2,r*2);ctx.shadowBlur=0;ctx.strokeStyle='#fff';ctx.lineWidth=Math.max(1,displayScale*.6);
      ctx.strokeRect(-r-3,-r-3,(r+3)*2,(r+3)*2);ctx.restore();
    }
    for(const p of particles){p.x+=p.vx*dt;p.y+=p.vy*dt;p.life-=dt;ctx.globalAlpha=Math.min(1,p.life*2);ctx.fillStyle=p.color;ctx.fillRect(p.x,p.y,3,3);}
    particles=particles.filter(p=>p.life>0);ctx.globalAlpha=1;
    if(flash>0){ctx.fillStyle=`rgba(255,70,110,${flash*.35})`;ctx.fillRect(0,0,960,600);flash=Math.max(0,flash-dt);}
    if(toastTime>0){toastTime-=dt;if(toastTime<=0)$('capture-toast').hidden=true;}
  }
  function resize() {
    displayScale=960/Math.max(1,canvas.getBoundingClientRect().width);
    lastRevision=-1;resetClock();render(0);
    $('fullscreen').textContent=document.fullscreenElement||document.body.classList.contains('focus-mode')?'화면 복원':'화면 확대';
  }
  controls=window.NeonControls.createControls({
    pad:$('dpad'),canvas,isPlaying:()=>engine.state==='playing',isPaused:()=>engine.state==='paused',
    onDraw:draw,onAbort:abort,onPause:togglePause,onMenu:stageMenu,onFullscreen:fullscreen
  });
  $('overlay-action').addEventListener('click',activate);
  $('overlay-secondary').addEventListener('click',stageMenu);
  for(const id of ['draw','draw-touch'])$(id).addEventListener('click',draw);
  for(const id of ['abort','abort-touch'])$(id).addEventListener('click',abort);
  for(const id of ['pause','pause-touch'])$(id).addEventListener('click',togglePause);
  $('menu').addEventListener('click',stageMenu);$('records').addEventListener('click',records);$('help').addEventListener('click',help);
  $('fullscreen').addEventListener('click',fullscreen);
  $('sound').addEventListener('click',()=>{progress.settings.sound=!progress.settings.sound;unlockAudio();updateSound();save();sound('draw');});
  document.addEventListener('pointerdown',unlockAudio,{passive:true});
  $('dialog-close').addEventListener('click',closeDialog);
  $('dialog-confirm').addEventListener('click',()=>{const action=confirmAction;closeDialog();if(action)action();});
  $('dialog').addEventListener('click',event=>{if(event.target===$('dialog'))closeDialog();});
  document.addEventListener('keydown',event=>{
    if(!$('dialog').hidden){
      if(event.key==='Escape'){event.preventDefault();closeDialog();}
      if(event.key==='Tab'){
        const nodes=Array.from($('dialog').querySelectorAll('button:not([disabled]),a[href],[tabindex="0"]')).filter(el=>!el.hidden&&el.getClientRects().length);
        const first=nodes[0],end=nodes[nodes.length-1];
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();end?.focus();}
        else if(!event.shiftKey&&document.activeElement===end){event.preventDefault();first?.focus();}
      }return;
    }
    if(event.code==='Enter'&&!event.repeat&&event.target.tagName!=='BUTTON'&&engine.state!=='playing'){event.preventDefault();activate();}
  });
  window.addEventListener('blur',pauseGame);
  document.addEventListener('visibilitychange',()=>{if(document.hidden){pauseGame();save();}});
  window.addEventListener('pagehide',()=>{pauseGame();save();});
  window.addEventListener('orientationchange',()=>{pauseGame();resize();});
  // Resizing a mobile browser address bar should not interrupt a run; actual orientation changes do.
  let orientation=innerWidth>innerHeight;
  window.addEventListener('resize',()=>{const next=innerWidth>innerHeight;if(next!==orientation){pauseGame();orientation=next;}resize();});
  document.addEventListener('fullscreenchange',resize);
  function frame(now) {
    const dt=last?Math.max(0,Math.min((now-last)/1000,.08)):0;last=now;
    if(engine.state==='playing'&&$('dialog').hidden){
      accumulator+=dt;
      while(accumulator>=STEP){engine.step(STEP,controls.getDirection());accumulator-=STEP;processEvents();if(engine.state!=='playing'){accumulator=0;break;}}
      if(now-lastSave>2000){save();lastSave=now;}
    }else accumulator=0;
    if(now-lastHUD>80||uiState!==engine.state){syncUI();lastHUD=now;}
    render(engine.state==='paused'?0:dt);requestAnimationFrame(frame);
  }
  updateSound();message(restored?'저장된 진행을 불러왔어. 준비되면 계속하기를 눌러.':'선을 긋고 안전 영역으로 돌아오면 적이 없는 땅이 네 것이 돼.');
  syncUI(true);resize();save();requestAnimationFrame(frame);
})();
