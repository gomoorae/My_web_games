// GitHub Pages serves the release pack in same-origin parts. Godot receives the
// original byte-for-byte PCK under its normal virtual filename.
async function startPagesDuel(config, { onProgress }) {
  const base = config.executable;
  const packName = base + ".pck";
  const engineSize = config.fileSizes[base + ".wasm"];
  const packSize = config.fileSizes[packName];
  const response = await fetch(base + ".pack.json");
  if (!response.ok) throw new Error("게임 파일 목록을 불러오지 못했습니다. 새로고침해 주세요.");
  const manifest = await response.json();
  if (manifest.file !== packName || manifest.bytes !== packSize || !manifest.parts.length) {
    throw new Error("게임 파일 목록이 올바르지 않습니다. 새로고침해 주세요.");
  }
  let end = 0;
  for (const part of manifest.parts) {
    if (part.offset !== end || !Number.isSafeInteger(part.bytes) || part.bytes < 1) {
      throw new Error("게임 파일의 순서를 확인하지 못했습니다.");
    }
    end += part.bytes;
  }
  if (end !== packSize) throw new Error("게임 파일의 크기가 일치하지 않습니다.");

  let engineBytes = 0;
  let packBytes = 0;
  const report = () => onProgress(engineBytes + packBytes, engineSize + packSize);
  const engine = new Engine({
    ...config,
    onProgress(current) { engineBytes = Math.min(current, engineSize); report(); },
  });
  const controller = new AbortController();
  async function fetchPart(part) {
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const result = await fetch(part.path, { signal: controller.signal, cache: attempt ? "reload" : "default" });
        if (!result.ok) throw new Error("게임 파일 다운로드 오류 (" + result.status + ")");
        const data = await result.arrayBuffer();
        if (data.byteLength !== part.bytes) throw new Error("게임 파일이 끝까지 도착하지 않았습니다.");
        const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", data));
        const hex = Array.from(digest, byte => byte.toString(16).padStart(2, "0")).join("");
        if (hex !== part.sha256) throw new Error("게임 파일을 확인하지 못했습니다.");
        return new Uint8Array(data);
      } catch (error) {
        if (controller.signal.aborted || attempt === 2) throw error;
        await new Promise(resolve => setTimeout(resolve, 250 * (attempt + 1)));
      }
    }
  }
  async function preparePack() {
    const pack = new Uint8Array(packSize);
    let next = 0;
    async function worker() {
      while (!controller.signal.aborted && next < manifest.parts.length) {
        const part = manifest.parts[next++];
        pack.set(await fetchPart(part), part.offset);
        packBytes += part.bytes;
        report();
      }
    }
    await Promise.all(Array.from({ length: Math.min(4, manifest.parts.length) }, worker));
    // Pass an ArrayBuffer, not an indexed view, to the standard engine loader.
    await engine.preloadFile(pack.buffer, packName);
  }
  try {
    await Promise.all([engine.init(base), preparePack()]);
    engineBytes = engineSize;
    report();
    await engine.start({ args: ["--main-pack", packName, ...(config.args || [])] });
  } finally {
    controller.abort();
  }
}
