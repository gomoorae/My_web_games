#!/usr/bin/env node
// Uses the installed Music project's public interface and resource coordinator.
// Run in an ordinary local Terminal; this does not bypass sandbox restrictions.
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { homedir } from 'node:os';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.resolve(process.env.LAST_DELIVERY_MUSIC_DIR || path.join(root, 'source_assets/audio/yue2-playlist'));
const cli = process.env.MUSIC_CLI || path.join(homedir(), 'AI/projects/music/bin/music');
const knownTracks = ['journey', 'battle', 'boss', 'ending'];
const requestedTracks = process.argv.slice(2);
const tracks = requestedTracks.length ? requestedTracks : knownTracks;
if (new Set(tracks).size !== tracks.length || tracks.some(key => !knownTracks.includes(key))) {
  throw new Error('곡 이름은 journey battle boss ending 중 중복 없이 지정해야 해.');
}
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');

async function generate(key, requestText) {
  const log = [];
  let result;
  await new Promise((resolve, reject) => {
    const child = spawn(cli, ['generate'], { stdio: ['pipe', 'pipe', 'inherit'] });
    let pending = '';
    const line = (text) => {
      if (!text.trim()) return;
      log.push(text);
      process.stdout.write(`[${key}] ${text}\n`);
      try {
        const event = JSON.parse(text);
        if (event.event === 'done') result = event;
      } catch { /* Preserve non-JSON diagnostics in the log. */ }
    };
    child.stdout.on('data', (chunk) => {
      pending += chunk.toString();
      const lines = pending.split(/\r?\n/);
      pending = lines.pop();
      lines.forEach(line);
    });
    const interrupt = () => child.kill('SIGINT');
    process.once('SIGINT', interrupt);
    child.once('error', (error) => {
      process.removeListener('SIGINT', interrupt);
      reject(error);
    });
    child.once('close', (code) => {
      process.removeListener('SIGINT', interrupt);
      if (pending) line(pending);
      if (code !== 0 || !result?.outputs?.length) {
        reject(new Error(`${key}: 음악 생성이 완료되지 않았어. 로그의 오류를 확인해줘.`));
      } else resolve();
    });
    child.stdin.on('error', () => {});
    child.stdin.end(requestText);
  }).finally(() => fs.writeFile(path.join(output, `${key}.log`), log.join('\n') + '\n'));
  return result;
}

async function main() {
  await fs.mkdir(output, { recursive: true });
  for (const key of tracks) {
    const requestText = await fs.readFile(path.join(output, 'requests', `${key}.json`), 'utf8');
    const request = JSON.parse(requestText);
    if (request.model !== 'yue2' || request.instrumental !== true) throw new Error('YuE2 연주곡 요청만 실행할 수 있어.');
    const requestHash = sha256(requestText);
    const wav = path.join(output, `${key}-original.wav`);
    const metadataPath = path.join(output, `${key}.result.json`);
    try {
      const previous = JSON.parse(await fs.readFile(metadataPath, 'utf8'));
      const bytes = await fs.readFile(wav);
      if (previous.requestHash === requestHash && previous.sha256 === sha256(bytes)) {
        console.log(`[${key}] 이미 완성한 원본을 보존하고 다음 곡으로 넘어가.`);
        continue;
      }
      throw new Error(`${key}: 기존 원본과 요청이 달라. 원본을 덮어쓰지 않도록 별도 보관 후 다시 실행해줘.`);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    // Recover an interrupted copy without regenerating or overwriting its master.
    const completedPath = path.join(output, `${key}.generation.json`);
    let result;
    try {
      const completed = JSON.parse(await fs.readFile(completedPath, 'utf8'));
      if (completed.requestHash === requestHash) result = completed.result;
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    if (!result) {
      try {
        await fs.stat(wav);
        throw new Error(`${key}: 생성 기록이 없는 원본이 있어. 기존 원본을 별도 보관한 후 다시 실행해줘.`);
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
      result = await generate(key, requestText);
      await fs.writeFile(completedPath, JSON.stringify({ requestHash, request, result }, null, 2) + '\n');
    }
    const bytes = await fs.readFile(result.outputs[0]);
    if (bytes.length <= 44 || bytes.toString('ascii', 0, 4) !== 'RIFF' || bytes.toString('ascii', 8, 12) !== 'WAVE') {
      throw new Error(`${key}: 정상적인 WAV 원본을 확인하지 못했어.`);
    }
    try {
      await fs.writeFile(wav, bytes, { flag: 'wx' });
    } catch (error) {
      if (error.code !== 'EEXIST' || sha256(await fs.readFile(wav)) !== sha256(bytes)) throw error;
    }
    await fs.writeFile(metadataPath, JSON.stringify({
      requestHash, request, ...result, localMaster: wav, sha256: sha256(bytes), bytes: bytes.length
    }, null, 2) + '\n');
    console.log(`[${key}] YuE2 원본 저장 완료: ${wav}`);
  }
  console.log(`YuE2 후보 ${tracks.length}곡의 원본 생성 완료. 전체 내용 검토를 통과한 곡만 재생목록에 반영해.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
