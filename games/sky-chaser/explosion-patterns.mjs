// Cosmetic-only shuffle bag. Never consumes the gameplay random generator.
export const EXPLOSION_PATTERNS=Object.freeze(['blast-bloom','blast-split','blast-shards','blast-chain']);
export const EXPLOSION_TEMPO=Object.freeze({'blast-bloom':1,'blast-split':.96,'blast-shards':.86,'blast-chain':1.08});
export class ExplosionPatterns {
 constructor(seed=0x51ca7e){this.seed=seed>>>0;this.bag=[];this.last=null;}
 random(){this.seed=(Math.imul(this.seed,1664525)+1013904223)>>>0;return this.seed/4294967296;}
 next(){
  if(!this.bag.length){
   this.bag=[...EXPLOSION_PATTERNS];
   for(let i=this.bag.length-1;i>0;i--){const j=Math.floor(this.random()*(i+1));[this.bag[i],this.bag[j]]=[this.bag[j],this.bag[i]];}
   const last=this.bag.length-1;
   if(this.bag[last]===this.last)[this.bag[0],this.bag[last]]=[this.bag[last],this.bag[0]];
  }
  this.last=this.bag.pop();return this.last;
 }
}
