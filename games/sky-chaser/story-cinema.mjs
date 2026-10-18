// A finite cut-in sequence, driven by the browser compositor. No animation
// frame loop survives a pause, scene change or return to the game.
export class StoryCinema {
  constructor(){this.animations=[];this.textAnimations=[];}
  cancel(){for(const a of this.animations)a.cancel();this.animations=[];this.textAnimations=[];}
  pause(){for(const a of this.textAnimations)if(a.playState!=='finished')a.finish();for(const a of this.animations)if(a.playState!=='finished')a.pause();}
  resume(){for(const a of this.animations)if(a.playState==='paused')a.play();}
  start(root,{kind,duration,previous=false,reduced=false,paused=false}){
    this.cancel();
    const add=(selector,frames,options={})=>{
      const el=root.querySelector(selector);if(!el||el.hidden||!el.animate)return;
      const animation=el.animate(frames,{duration:650,fill:'both',easing:'cubic-bezier(.16,1,.3,1)',...options});this.animations.push(animation);
      if(['.story-caption','.story-chapter','#story-title','.story-rule','.story-text','.story-dialogue'].includes(selector))this.textAnimations.push(animation);
      return animation;
    };
    if(reduced){
      for(const selector of ['.story-art','.story-actor','.story-boss','.story-caption'])add(selector,[{opacity:0},{opacity:1}],{duration:180});
      if(previous)add('.story-previous',[{opacity:1},{opacity:0}],{duration:160});
    }else{
      add('.story-art',[{transform:'scale(1.1) translate3d(1%,0,0)'},{transform:'scale(1.03) translate3d(-1%,0,0)'}],{duration,easing:'linear'});
      add('.story-flash',[{opacity:0,offset:0},{opacity:.32,offset:.16},{opacity:0,offset:1}],{duration:480,easing:'ease-out'});
      add('.story-sweep',[{transform:'translate3d(-180%,0,0) skewX(-20deg)',opacity:0},{opacity:.7,offset:.28},{transform:'translate3d(280%,0,0) skewX(-20deg)',opacity:0}],{duration:850,easing:'cubic-bezier(.3,0,.2,1)'});
      add('.story-runes',[{transform:'translate(-50%,-50%) scale(.45) rotate(-45deg)',opacity:0},{transform:'translate(-50%,-50%) scale(1.03) rotate(5deg)',opacity:.65,offset:.28},{transform:'translate(-50%,-50%) scale(1.08) rotate(35deg)',opacity:.18}],{duration:Math.min(duration,3600),easing:'ease-out'});
      add('.story-rays',[{opacity:0,transform:'translateX(8%)'},{opacity:.36,offset:.25},{opacity:0,transform:'translateX(-8%)'}],{duration:1250,easing:'ease-out'});
      add('.story-ghost',[{transform:'translateX(15%)',opacity:0},{transform:'translateX(0)',opacity:.12}],{duration:1100,delay:180});
      if(kind==='lumi')add('.story-actor',[{transform:'translate3d(70%,0,0) scale(1.08)',opacity:0},{transform:'translate3d(-1.5%,0,0) scale(1)',opacity:1,offset:.8},{transform:'translate3d(0,0,0) scale(1)',opacity:1}],{duration:850});
      if(kind==='boss')add('.story-boss',[{transform:'translate3d(10%,-25%,0) scale(.58)',opacity:0},{transform:'translate3d(0,1%,0) scale(1.04)',opacity:1,offset:.73},{transform:'translate3d(0,0,0) scale(1)',opacity:1}],{duration:950});
      if(kind!=='illustration')add('.story-picture',[{transform:'translate(0,0)'},{transform:'translate(-3px,1px)',offset:.3},{transform:'translate(2px,-1px)',offset:.5},{transform:'translate(0,0)'}],{duration:550,delay:180});
      add('.story-chapter',[{transform:'translateX(-35px)',opacity:0},{transform:'translateX(0)',opacity:1}],{duration:550,delay:140});
      add('#story-title',[{transform:'translateX(-90px) skewX(-7deg)',opacity:0},{transform:'translateX(0) skewX(0)',opacity:1}],{duration:650,delay:220});
      add('.story-rule',[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{duration:650,delay:330});
      add('.story-text',[{transform:'translateY(14px)',opacity:0},{transform:'translateY(0)',opacity:1}],{duration:600,delay:470});
      add('.story-dialogue',[{transform:'translateX(30px)',opacity:0},{transform:'translateX(0)',opacity:1}],{duration:620,delay:650});
      if(previous)add('.story-previous',[{transform:'translateX(0) skewX(0)',opacity:1},{transform:'translateX(-110%) skewX(-10deg)',opacity:0}],{duration:550,easing:'cubic-bezier(.7,0,.2,1)'});
    }
    const progress=add('.story-progress-fill',[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{duration,easing:'linear'});
    if(paused){for(const a of this.animations)if(a!==progress)a.finish();this.pause();}
  }
  snapshot(){return {count:this.animations.length,running:this.animations.filter(a=>a.playState==='running').length,paused:this.animations.filter(a=>a.playState==='paused').length};}
}

export function storyPresentation(sequence,index,scene){
  const kind=scene.boss?'boss':(['canyon','foundry'].includes(sequence)||sequence==='opening'&&index!==1)?'lumi':'illustration';
  const word=({raven:'IRON RAVEN',tempest:'TEMPEST',ignis:'IGNIS',canyon:'THUNDER',foundry:'CRIMSON'})[sequence]||
    (sequence==='ending'?['RECOVERY','HOMECOMING','DELIVERED'][index]:index===1?'WIND HEART':'LUMI');
  return {kind,word,tag:kind==='boss'?'해적 함대 · 최종 보스':kind==='lumi'?'비행 배달부 · 룬 사수':'SKY CHASER · 빼앗긴 바람'};
}
