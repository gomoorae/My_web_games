import test from 'node:test';
import assert from 'node:assert/strict';
import {RideAudio} from '../audio.mjs';
function harness(){
 const seen={oscillators:[],bufferSources:0};
 const param=()=>({value:0,setValueAtTime(){},linearRampToValueAtTime(){},exponentialRampToValueAtTime(){},setTargetAtTime(){}});
 class AudioContext{
  constructor(){this.currentTime=1;this.state='running';this.destination={};}
  createGain(){return{gain:param(),connect(){},disconnect(){}};}
  createOscillator(){const o={frequency:param(),stops:[],connect(){},disconnect(){},start(t){this.startTime=t;},stop(t){this.stops.push(t);}};seen.oscillators.push(o);return o;}
  createBufferSource(){seen.bufferSources++;throw new Error('No continuous noise source is allowed');}
 }
 globalThis.window={AudioContext};return seen;
}
test('unlocking and ordinary running produce no engine, wind or pass noise',async()=>{const s=harness(),a=new RideAudio();await a.unlock();for(let i=0;i<180;i++){a.update({status:'running'});a.event({type:'pass'});}assert.equal(s.oscillators.length,0);assert.equal(s.bufferSources,0);});
test('near-miss feedback consists only of short sine notes',async()=>{const s=harness(),a=new RideAudio();await a.unlock();a.event({type:'near'});assert.equal(s.oscillators.length,2);for(const o of s.oscillators){assert.equal(o.type,'sine');assert.ok(o.stops[0]-o.startTime<=.12);}assert.equal(s.bufferSources,0);});
test('simultaneous rewards do not pile up sound sources',async()=>{const s=harness(),a=new RideAudio();await a.unlock();a.event({type:'near'});a.event({type:'double'});a.event({type:'near'});assert.equal(s.oscillators.length,2);});
test('pause and mute stop outstanding notes',async()=>{const s=harness(),a=new RideAudio();await a.unlock();a.event({type:'near'});a.update({status:'paused'});assert.equal(a.nodes.size,0);assert.ok(s.oscillators.every(o=>o.stops.length===2));a.setEnabled(false);a.event({type:'hit'});assert.equal(s.oscillators.length,2);});
test('collision feedback ends on its own without a noise buffer',async()=>{const s=harness(),a=new RideAudio();await a.unlock();a.event({type:'hit'});assert.equal(s.oscillators.length,1);assert.ok(s.oscillators[0].stops[0]-s.oscillators[0].startTime<.2);assert.equal(s.bufferSources,0);});
