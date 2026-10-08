const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const root = path.resolve(__dirname, '..'), out = path.join(root, 'build');
const url = process.env.STAR_MUNCH_URL || 'http://127.0.0.1:8868/';
const checks = [], errors = [], badRequests = [];
const pilotSource = fs.readFileSync(path.join(root, 'tests/pilot.cjs'), 'utf8')
  .replace("const { World, C } = require('../src/engine.js');", 'const { World, C } = window.StarMunch;')
  .replace('module.exports = { Pilot, steering };', 'window.QAPilot = Pilot;');
function check(name, actual, expected = true) { assert.deepEqual(actual, expected, name); checks.push(name); }
async function snapshot(page) { return page.evaluate(() => window.__starMunchTest.snapshot); }
async function settle(page, ms = 70) { await page.waitForTimeout(ms); }
async function isolate(page) {
  await page.evaluate(() => {
    const w = window.__starMunchTest.world;
    w.objects = []; w.generatedY = 1e9;
    w.player.y = w.cameraBottom + 245; w.player.vy = 300; w.player.impulseAge = .3;
    w.player.charge = 8; w.player.boost = 0; w.player.hitTime = 0;
  });
}
function watch(page) {
  page.on('pageerror', e => errors.push(e.message));
  page.on('requestfailed', r => badRequests.push(`${r.url()}: ${r.failure()?.errorText}`));
}

(async () => {
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  try {
    const desktop = await browser.newContext({ viewport: { width: 1440, height: 1040 }, deviceScaleFactor: 1 });
    const page = await desktop.newPage(); watch(page);
    await page.goto(`${url}?test=1`); await page.locator('#start-button:not([disabled])').waitFor();
    check('desktop starts in ready state', (await snapshot(page)).phase, 'ready');
    check('desktop has no horizontal overflow', await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: path.join(out, 'qa-desktop-start.png') });
    await page.keyboard.down('KeyD'); await page.click('#start-button'); await settle(page, 70);
    let s = await snapshot(page);
    check('held direction survives starting', s.phase === 'playing' && s.player.vx > 0 && s.player.x > 240);
    await page.keyboard.up('KeyD');
    await page.keyboard.press('KeyR'); await settle(page, 400);
    check('real-time flight automatically collects its first stars', (await snapshot(page)).stars > 0);
    await isolate(page); await page.keyboard.down('KeyD'); await page.keyboard.press('Space'); await settle(page);
    s = await snapshot(page);
    check('keyboard jump spends a charge', s.player.charge, 0);
    check('right input keeps jump pose', s.animation.state, 'jump');
    check('right input moves during jump', s.player.vx > 0);
    await page.keyboard.up('KeyD'); await settle(page, 25);
    check('releasing direction keeps jump pose', (await snapshot(page)).animation.state, 'jump');
    await isolate(page);
    await page.evaluate(() => { const p = window.__starMunchTest.world.player; p.vy = -100; p.impulseKind = 'coin'; });
    await page.keyboard.down('ArrowLeft'); await settle(page);
    check('left input keeps fall pose', (await snapshot(page)).animation.state, 'fall');
    await page.keyboard.up('ArrowLeft');
    await page.evaluate(() => { window.__starMunchTest.world.activateBoost(); window.__starMunchTest.emit(); });
    await page.keyboard.down('KeyA'); await settle(page);
    s = await snapshot(page); check('left steering keeps boost pose', s.animation.state, 'boost');
    check('boost can steer left', s.player.vx < 0);
    const chargeBefore = s.player.charge;
    await page.keyboard.press('Space'); await page.keyboard.up('KeyA'); await settle(page);
    s = await snapshot(page);
    check('space and direction release do not cancel boost', s.animation.state === 'boost' && s.player.charge === chargeBefore);
    await page.keyboard.down('KeyD'); await settle(page);
    check('boost can change direction', (await snapshot(page)).player.vx > 0);
    await page.keyboard.press('Escape'); s = await snapshot(page);
    check('escape pauses', s.phase, 'paused');
    const paused = JSON.stringify(s.player), pausedTime = s.time; await settle(page, 150);
    s = await snapshot(page); check('pause freezes timers and position', JSON.stringify(s.player) === paused && s.time === pausedTime);
    check('pause clears held input', await page.evaluate(() => window.__starMunchTest.controls.axis), 0);
    await page.keyboard.up('KeyD'); await page.keyboard.press('Escape');
    check('escape resumes', (await snapshot(page)).phase, 'playing');
    await isolate(page); await page.click('#sound-button'); await page.keyboard.press('Space'); await settle(page);
    check('space still jumps after clicking sound toggle', (await snapshot(page)).player.charge, 0);
    check('mute preference is saved', await page.evaluate(() => localStorage.getItem('star-munch-muted')), 'true');
    await isolate(page);
    await page.keyboard.down('KeyA'); await page.keyboard.down('ArrowLeft'); await page.keyboard.up('KeyA'); await settle(page);
    check('releasing A while left arrow is held retains direction', await page.evaluate(() => window.__starMunchTest.controls.axis), -1);
    await page.keyboard.down('ArrowRight');
    check('opposite directions cancel', await page.evaluate(() => window.__starMunchTest.controls.axis), 0);
    await page.keyboard.up('ArrowLeft'); await page.keyboard.up('ArrowRight');
    await page.keyboard.down('KeyD'); await page.evaluate(() => window.dispatchEvent(new Event('blur')));
    check('losing focus pauses and clears input', (await snapshot(page)).phase === 'paused' && await page.evaluate(() => window.__starMunchTest.controls.axis === 0));
    await page.keyboard.up('KeyD'); await page.click('#resume-button');
    await page.evaluate(() => { const w = window.__starMunchTest.world; w.maxY = 3000; w.player.y = w.cameraBottom - 80; });
    await page.locator('#over-screen:not([hidden])').waitFor();
    s = await snapshot(page);
    check('falling opens the result screen', s.phase, 'over');
    check('a completed flight persists its best height', await page.evaluate(() => JSON.parse(localStorage.getItem('star-munch-record-v1')).height >= 296));
    await page.screenshot({ path: path.join(out, 'qa-desktop-result.png') });
    await page.keyboard.press('Space'); await settle(page, 50);
    check('space on results starts a fresh flight', (await snapshot(page)).phase === 'playing' && (await snapshot(page)).height < 10);
    await page.evaluate(() => {
      const w = window.__starMunchTest.world;
      w.reset(4); w.start(); w.player.y = 2200; w.maxY = 2200; w.cameraBottom = 1900;
      w.activateBoost();
      window.QARibbon = w.objects.filter(o => o.kind === 'boost');
      window.__starMunchTest.emit(); window.__starMunchTest.sync();
    });
    await settle(page, 580);
    check('flying beside a ribbon does not automatically collect it', await page.evaluate(() => window.QARibbon.every(o => !o.collected)));
    await page.screenshot({ path: path.join(out, 'qa-desktop-boost-offset.png') });
    await page.keyboard.down('ArrowLeft');
    await page.waitForFunction(() => window.QARibbon.some(o => o.collected));
    await page.keyboard.up('ArrowLeft');
    check('real keyboard steering enters the ribbon while keeping the boost pose', await page.evaluate(() => {
      const s = window.__starMunchTest.snapshot;
      return s.player.x < 160 && s.animation.state === 'boost' && window.QARibbon.some(o => o.collected);
    }));
    await page.screenshot({ path: path.join(out, 'qa-desktop-boost-steering.png') });
    await page.evaluate(() => { const w = window.__starMunchTest.world; w.reset(4); w.start(); window.__starMunchTest.sync(); });
    await page.waitForFunction(() => window.__starMunchTest.world.bounces === 1);
    const targetX = await page.evaluate(() => window.__starMunchTest.world.objects.find(o => o.primary && o.layer === 1).x);
    const direction = targetX < 240 ? -1 : 1, steerKey = direction < 0 ? 'ArrowLeft' : 'ArrowRight';
    await page.keyboard.down(steerKey);
    await page.waitForFunction(({ x, direction }) => (window.__starMunchTest.world.player.x - x) * direction >= -27, { x: targetX, direction });
    await page.keyboard.up(steerKey);
    check('a real key hold crosses to a separated star', Math.abs((await snapshot(page)).player.x - 240) > 100);
    await page.waitForFunction(() => Math.abs(window.__starMunchTest.world.player.vy) < 100 && window.__starMunchTest.world.bounces === 1);
    check('a normal jump visibly reaches its apex', (await snapshot(page)).animation.state, 'float');
    await page.screenshot({ path: path.join(out, 'qa-jump-apex.png') });
    await page.waitForFunction(() => window.__starMunchTest.world.player.vy < -115 && window.__starMunchTest.world.bounces === 1);
    check('normal jump has a falling phase before its next pickup', (await snapshot(page)).animation.state, 'fall');
    await page.waitForFunction(() => window.__starMunchTest.world.bounces === 2);
    check('the next isolated star causes a strong new takeoff', (await snapshot(page)).player.vy > 650);
    await page.screenshot({ path: path.join(out, 'qa-jump-takeoff.png') });
    await page.addScriptTag({ content: `(function(){${pilotSource}\n})();` });
    await page.evaluate(() => {
      const w = window.__starMunchTest.world;
      w.reset(4); w.start();
      const pilot = new window.QAPilot(); let frames = 0;
      while (w.height < 180 && w.phase === 'playing' && frames++ < 10000) { w.update(1/120, { axis: pilot.axis(w) }); w.takeEvents(); }
      window.__starMunchTest.sync();
    });
    check('ordinary gameplay contains sparse stepping stones only', await page.evaluate(() => window.__starMunchTest.world.phase === 'playing' && !window.__starMunchTest.world.objects.some(o => o.kind === 'boost')));
    await page.screenshot({ path: path.join(out, 'qa-desktop-play.png') });
    await page.evaluate(() => {
      const w = window.__starMunchTest.world, pilot = new window.QAPilot(); let frames = 0;
      while (!(w.player.boost > 0 && w.player.boost < 1.7) && w.phase === 'playing' && frames++ < 10000) { w.update(1/120, { axis: pilot.axis(w) }); w.takeEvents(); }
      window.__starMunchTest.sync();
    });
    check('naturally collecting a comet creates a dense boost ribbon', await page.evaluate(() => window.__starMunchTest.world.player.boost > 0 && window.__starMunchTest.world.objects.filter(o => o.kind === 'boost').length > 20));
    check('boost shares the visible course with ordinary stepping stones', await page.evaluate(() => {
      const w = window.__starMunchTest.world;
      return w.objects.some(o => o.step && o.y > w.player.y && o.y < w.player.y + 350)
        && w.objects.some(o => o.type === 'enemy');
    }));
    await page.screenshot({ path: path.join(out, 'qa-desktop-boost.png') });
    await page.evaluate(() => {
      const w = window.__starMunchTest.world, pilot = new window.QAPilot(); let frames = 0;
      while ((w.height < 1100 || w.player.boost > 0) && w.phase === 'playing' && frames++ < 25000) { w.update(1/120, { axis: pilot.axis(w) }); w.takeEvents(); }
      window.__starMunchTest.sync();
    });
    check('higher-altitude flight returns to dispersed stars and moving clouds', await page.evaluate(() => {
      const w = window.__starMunchTest.world;
      return w.phase === 'playing' && w.height >= 1100 && !w.player.boost && w.objects.some(o => o.step && o.y > w.player.y) && w.objects.some(o => o.type === 'enemy' && o.amplitude > 0);
    }));
    await page.screenshot({ path: path.join(out, 'qa-desktop-high.png') });
    await page.keyboard.press('Escape'); await page.setViewportSize({ width: 1366, height: 768 });
    check('laptop controls stay within viewport', await page.locator('#resume-button').evaluate(el => { const r = el.getBoundingClientRect(); return r.top >= 0 && r.bottom <= innerHeight; }));
    await page.reload(); await page.locator('#start-button:not([disabled])').waitFor();
    check('saved record survives reload', (await snapshot(page)).best.height >= 296);
    check('sound preference survives reload', await page.locator('#sound-button').getAttribute('aria-label'), '소리 켜기');
    await desktop.close();

    const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    const phone = await mobile.newPage(); watch(phone);
    await phone.goto(`${url}?test=1`); await phone.locator('#start-button:not([disabled])').waitFor();
    check('phone has no horizontal overflow', await phone.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await phone.screenshot({ path: path.join(out, 'qa-mobile-start.png') });
    await phone.locator('#start-button').tap(); await isolate(phone);
    check('phone exposes full-screen touch controls', await phone.locator('#touch-controls').isVisible());
    const cdp = await mobile.newCDPSession(phone);
    const box = await phone.locator('#touch-controls').boundingBox(), jumpBox = await phone.locator('#touch-jump').boundingBox();
    const left = { x: box.x + box.width * .2, y: box.y + box.height * .6, id: 1 };
    const right = { x: box.x + box.width * .8, y: box.y + box.height * .6, id: 2 };
    const jump = { x: jumpBox.x + jumpBox.width / 2, y: jumpBox.y + jumpBox.height / 2, id: 3 };
    const touch = async (type, touchPoints) => {
      await cdp.send('Input.dispatchTouchEvent', { type, touchPoints });
      await phone.evaluate(() => new Promise(requestAnimationFrame));
    };
    const axis = () => phone.evaluate(() => window.__starMunchTest.controls.axis);
    const primeTouch = async () => {
      await isolate(phone);
      await phone.evaluate(() => { const p = window.__starMunchTest.world.player; p.x = 240; p.vx = 0; p.vy = 760; });
    };
    check('both halves cover the full height of the play area', await phone.evaluate(() => {
      const area = document.querySelector('#touch-controls').getBoundingClientRect();
      return ['touch-left', 'touch-right'].every(id => {
        const r = document.getElementById(id).getBoundingClientRect();
        return Math.abs(r.height - area.height) < 1 && Math.abs(r.width * 2 - area.width) < 1 && r.top === area.top;
      });
    }));
    for (const [name, finger, direction] of [['left', left, -1], ['right', right, 1]]) {
      const samples = [];
      for (const fraction of [.04, .5, .94]) {
        await primeTouch(); await touch('touchStart', [{ ...finger, y: box.y + box.height * fraction }]);
        samples.push(await axis()); await touch('touchEnd', []);
      }
      check(`top, middle and bottom of the ${name} half all steer`, samples, [direction, direction, direction]);
    }
    await primeTouch(); await touch('touchStart', [left]); await settle(phone, 180);
    check('pressing a half gives full movement speed without dragging', await phone.evaluate(() => window.__starMunchTest.world.player.vx === -window.StarMunch.C.moveSpeed));
    await touch('touchMove', [{ ...left, y: left.y - 140 }]);
    check('vertical movement does not change direction', await axis(), -1);
    await touch('touchMove', [{ ...right, id: left.id }]);
    check('one finger can slide across the screen to reverse direction', await axis(), 1);
    await touch('touchMove', [{ ...left, x: box.x - 7 }]);
    check('pointer capture keeps steering outside the play area', await axis(), -1);
    await phone.setViewportSize({ width: 390, height: 824 }); await settle(phone, 25);
    check('browser toolbar height changes do not interrupt held movement', await axis(), -1);
    await phone.setViewportSize({ width: 390, height: 844 }); await settle(phone, 25);
    await touch('touchEnd', []);
    check('lifting all fingers clears direction and the pressed feedback', await phone.evaluate(() => window.__starMunchTest.controls.axis === 0 && !document.querySelector('.touch-half.pressed')));

    await primeTouch(); await touch('touchStart', [left]);
    const left2 = { ...left, y: left.y - 70, id: 4 };
    await touch('touchStart', [left, left2]); await settle(phone, 130);
    check('two fingers on the same half do not spend a leap', (await snapshot(phone)).player.charge, 8);
    await touch('touchEnd', [left]);
    check('releasing one same-side finger retains the other', await axis(), -1);
    await touch('touchEnd', []);

    await primeTouch(); await touch('touchStart', [left]);
    await touch('touchStart', [left, right]); await touch('touchEnd', [left]); await settle(phone, 140);
    check('brief thumb overlap reverses direction without an accidental leap', await axis() === 1 && (await snapshot(phone)).player.charge === 8);
    await touch('touchEnd', []);
    await primeTouch(); await touch('touchStart', [left]);
    await touch('touchStart', [left, right]); await settle(phone, 130);
    s = await snapshot(phone);
    check('holding opposite halves leaps while preserving the first direction', await axis() === -1 && s.player.vx < 0 && s.player.charge === 0 && s.animation.state === 'jump');
    await primeTouch(); await settle(phone, 140);
    check('holding both halves does not spend a newly filled charge again', (await snapshot(phone)).player.charge, 8);
    await touch('touchEnd', [right]);
    check('releasing the second thumb keeps the original direction', await axis(), -1);
    await touch('touchStart', [left, right]); await settle(phone, 130);
    check('releasing and pressing the second thumb rearms the leap', (await snapshot(phone)).player.charge, 0);
    await touch('touchEnd', [left]);
    check('releasing the first thumb hands movement to the remaining side', await axis(), 1);
    await touch('touchEnd', []);
    await primeTouch(); await touch('touchStart', [right]);
    await touch('touchStart', [right, left]); await settle(phone, 130);
    check('the right side can also lead a moving leap', await axis() === 1 && (await snapshot(phone)).player.charge === 0);
    await touch('touchEnd', []);

    await primeTouch(); await phone.evaluate(() => { window.__starMunchTest.world.player.charge = 3; });
    await touch('touchStart', [left, right]); await settle(phone, 130);
    check('an uncharged chord keeps moving without spending charge', await axis() !== 0 && (await snapshot(phone)).player.charge === 3);
    await primeTouch(); await settle(phone, 140);
    check('an uncharged chord is not queued for a later refill', (await snapshot(phone)).player.charge, 8);
    await touch('touchEnd', []);
    await primeTouch(); await phone.evaluate(() => { window.__starMunchTest.world.activateBoost(); window.__starMunchTest.emit(); });
    await touch('touchStart', [left, right]); await settle(phone, 130);
    s = await snapshot(phone);
    check('a chord during boost preserves boost pose and leap charge', s.animation.state === 'boost' && s.player.charge === 8);
    await primeTouch(); await settle(phone, 140);
    check('a held boost chord does not fire after boost ends', (await snapshot(phone)).player.charge, 8);
    await touch('touchEnd', []);

    await primeTouch(); await touch('touchStart', [left]);
    await touch('touchStart', [left, jump]); await settle(phone, 35);
    s = await snapshot(phone);
    check('tapping the charge indicator also leaps while steering', await axis() === -1 && s.player.charge === 0 && s.animation.state === 'jump');
    await touch('touchEnd', [jump]);
    check('releasing the charge button retains screen-half movement', await axis(), -1);
    await touch('touchEnd', []);
    await primeTouch(); await phone.locator('#touch-jump').press('Enter'); await settle(phone, 35);
    check('the charge button supports keyboard and accessibility activation', (await snapshot(phone)).player.charge, 0);

    await primeTouch(); await touch('touchStart', [left, right]); await touch('touchCancel', []); await settle(phone, 140);
    check('touch cancellation clears movement and a pending chord', await axis() === 0 && (await snapshot(phone)).player.charge === 8);
    await touch('touchStart', [right]); await touch('touchMove', [{ ...right, x: right.x + 3 }]);
    await phone.evaluate(() => { const id = window.__starMunchTest.controls.touches[0][0]; document.querySelector('#touch-controls').releasePointerCapture(id); });
    await touch('touchMove', [{ ...right, x: right.x + 6 }]);
    check('lost pointer capture releases movement', await axis(), 0);
    await touch('touchEnd', []);
    await primeTouch(); await touch('touchStart', [left]);
    await phone.locator('#pause-button').click();
    check('pausing through the header clears held movement', (await snapshot(phone)).phase === 'paused' && await axis() === 0);
    await phone.locator('#resume-button').click();
    await touch('touchMove', [{ ...left, x: left.x + 2 }]);
    check('resuming does not reactivate a stale finger', await axis(), 0);
    await touch('touchEnd', []);
    await primeTouch(); await touch('touchStart', [left, right]);
    await phone.evaluate(() => window.dispatchEvent(new Event('blur'))); await settle(phone, 140);
    check('losing focus pauses and clears a pending chord', (await snapshot(phone)).phase === 'paused' && await axis() === 0);
    await touch('touchEnd', []); await phone.locator('#resume-button').click(); await settle(phone, 35);
    check('a cancelled chord does not leap on resume', (await snapshot(phone)).player.charge, 8);
    await touch('touchStart', [left, right]); await phone.keyboard.press('KeyR'); await settle(phone, 130);
    check('restarting clears movement and pending touch actions', await axis() === 0 && (await snapshot(phone)).player.charge === 8);
    await touch('touchEnd', []);
    await phone.keyboard.press('KeyR'); await settle(phone, 400);
    await phone.screenshot({ path: path.join(out, 'qa-mobile-play.png') });
    check('the charge button is visible and comfortably sized on portrait phones', await phone.locator('#touch-jump').evaluate(el => { const r = el.getBoundingClientRect(); return r.top >= 0 && r.bottom <= innerHeight && r.right <= innerWidth && r.width >= 44 && r.height >= 44; }));
    await touch('touchStart', [left, right]);
    await phone.setViewportSize({ width: 844, height: 390 }); await settle(phone, 130);
    check('rotation releases movement and pending chords', await axis() === 0 && (await snapshot(phone)).player.charge === 8);
    await touch('touchEnd', []);
    check('phone landscape has no horizontal overflow', await phone.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    check('phone landscape keeps its charge button onscreen', await phone.locator('#touch-jump').evaluate(el => { const r = el.getBoundingClientRect(); return r.top >= 0 && r.bottom <= innerHeight; }));
    await primeTouch();
    const wide = await phone.locator('#touch-controls').boundingBox();
    await touch('touchStart', [{ x: wide.x + wide.width * .8, y: wide.y + 15, id: 1 }]);
    check('landscape also accepts movement from the top of a screen half', await axis(), 1);
    await touch('touchEnd', []);
    await phone.screenshot({ path: path.join(out, 'qa-mobile-landscape.png') });
    await phone.locator('#pause-button').tap();
    check('phone landscape keeps the resume button onscreen', await phone.locator('#resume-button').evaluate(el => { const r = el.getBoundingClientRect(); return r.top >= 0 && r.bottom <= innerHeight; }));
    await phone.setViewportSize({ width: 320, height: 568 }); await phone.locator('#resume-button').tap();
    check('small phones keep both movement hints and the charge button onscreen', await phone.evaluate(() => ['#touch-left>span', '#touch-right>span', '#touch-jump'].every(selector => { const r = document.querySelector(selector).getBoundingClientRect(); return r.left >= 0 && r.right <= innerWidth && r.top >= 0 && r.bottom <= innerHeight; })));
    await mobile.close();

    const offline = await browser.newContext({ viewport: { width: 1280, height: 900 }, offline: true });
    const filePage = await offline.newPage(); watch(filePage);
    await filePage.goto(pathToFileURL(path.join(out, '별냠.html')).href + '?test=1');
    await filePage.locator('#start-button:not([disabled])').waitFor(); await filePage.click('#start-button'); await settle(filePage, 400);
    check('standalone HTML plays offline directly from disk', (await snapshot(filePage)).phase === 'playing' && (await snapshot(filePage)).stars > 0);
    check('no browser script errors across desktop, phone and offline file', errors, []);
    check('no failed requests across desktop, phone and offline file', badRequests, []);
    await offline.close();
    fs.writeFileSync(path.join(out, 'browser-verification.json'), JSON.stringify({ checkedAt: new Date().toISOString(), browser: 'Chromium (Playwright)', checks: checks.length, passed: checks, errors, badRequests, actualHandsetTested: false }, null, 2) + '\n');
    console.log(`BROWSER_OK: ${checks.length} checks passed`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
