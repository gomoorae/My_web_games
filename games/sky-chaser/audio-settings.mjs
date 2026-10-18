export const AUDIO_DEFAULTS=Object.freeze({musicVolume:.7,effectsVolume:1});
export function cleanVolume(value,fallback=.7){return typeof value==='number'&&Number.isFinite(value)?Math.max(0,Math.min(1,value)):fallback;}
export function audioSettings(raw={}){return {musicVolume:cleanVolume(raw.musicVolume,AUDIO_DEFAULTS.musicVolume),effectsVolume:cleanVolume(raw.effectsVolume,AUDIO_DEFAULTS.effectsVolume)};}
