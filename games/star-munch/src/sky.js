(() => {
  'use strict';
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const mixColor = (a, b, t) => {
    const rgb = [1, 3, 5].map(i => Math.round(parseInt(a.slice(i, i + 2), 16) * (1 - t) + parseInt(b.slice(i, i + 2), 16) * t));
    return `rgb(${rgb.join(',')})`;
  };
  function cloud(ctx, x, y, size) {
    ctx.beginPath();
    ctx.ellipse(x, y, size * 1.4, size * .3, 0, 0, Math.PI * 2);
    ctx.ellipse(x - size * .48, y - size * .17, size * .5, size * .32, 0, 0, Math.PI * 2);
    ctx.ellipse(x + size * .08, y - size * .28, size * .55, size * .4, 0, 0, Math.PI * 2);
    ctx.ellipse(x + size * .61, y - size * .1, size * .4, size * .27, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  function draw(ctx, width, height, scale, camera, time, env, altitude) {
    ctx.save();
    const colors = env.colors.map((c, i) => mixColor(c, env.next.colors[i], env.blend));
    const sky = ctx.createLinearGradient(0, 0, 0, height);
    sky.addColorStop(0, colors[0]); sky.addColorStop(.58, colors[1]); sky.addColorStop(1, colors[2]);
    ctx.fillStyle = sky; ctx.fillRect(0, 0, width, height);

    if (env.nebula > 0) {
      for (const [x, y, color] of [[.19, .28, '107,97,168'], [.81, .64, '41,117,136']]) {
        const glow = ctx.createRadialGradient(width * x, height * y, 0, width * x, height * y, height * .58);
        glow.addColorStop(0, `rgba(${color},${env.nebula * .18})`); glow.addColorStop(1, `rgba(${color},0)`);
        ctx.fillStyle = glow; ctx.fillRect(0, 0, width, height);
      }
    }
    // Background stars are tiny round points; collectible stars stay gold and large.
    if (env.stars > 0) for (let i = 0; i < 100; i++) {
      const x = ((i * 197.31 + 19) % 997) / 997 * width;
      const y = ((i * 137.13 + camera * (.007 + i % 3 * .006)) % (height + 40)) - 20;
      ctx.globalAlpha = env.stars * (.18 + i % 5 * .055 + Math.sin(time * .5 + i) * .045);
      ctx.fillStyle = i % 4 ? '#dbe6ff' : '#a6dbe8';
      ctx.beginPath(); ctx.arc(x, y, (.65 + (i % 3) * .25) * Math.min(scale, 1.3), 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalAlpha = 1;

    if (env.sun > 0) {
      const x = width * .77, y = height * .18, glow = ctx.createRadialGradient(x, y, 0, x, y, height * .35);
      glow.addColorStop(0, '#fff5cb8c'); glow.addColorStop(1, '#fff5cb00');
      ctx.globalAlpha = env.sun; ctx.fillStyle = glow; ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#fffbe4a6'; ctx.beginPath(); ctx.arc(x, y, 29 * scale, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
    }

    if (env.earth > 0) {
      const departure = clamp((altitude - 10000) / 12000, 0, 1);
      const x = width * .34, y = height * (1.2 + departure * .13), r = Math.min(Math.max(width * .44, height * .49), height * .55) * (1 - departure * .2);
      ctx.globalAlpha = env.earth;
      const halo = ctx.createRadialGradient(x, y, r * .97, x, y, r * 1.06);
      halo.addColorStop(0, '#c0e8f400'); halo.addColorStop(.43, '#85c9ed55'); halo.addColorStop(1, '#85c9ed00');
      ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(x, y, r * 1.06, 0, Math.PI * 2); ctx.fill();
      ctx.save(); ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.clip();
      const ocean = ctx.createLinearGradient(0, y - r, 0, y);
      ocean.addColorStop(0, '#387aab'); ocean.addColorStop(.4, '#235180'); ocean.addColorStop(1, '#122744');
      ctx.fillStyle = ocean; ctx.fillRect(x - r, y - r, r * 2, r * 2);
      ctx.fillStyle = '#85b6bd4d';
      for (let i = 0; i < 7; i++) {
        ctx.beginPath(); ctx.ellipse(x + (i - 3) * r * .26, y - r * (.65 + i % 3 * .09), r * .17, r * .035, -.2 + i % 2 * .3, 0, Math.PI * 2); ctx.fill();
      }
      ctx.strokeStyle = '#e5f6f85c'; ctx.lineWidth = 2 * scale;
      for (let i = 0; i < 4; i++) {
        ctx.beginPath(); ctx.ellipse(x - r * .2 + i * r * .22, y - r * (.76 - i * .09), r * .28, r * .025, -.12, Math.PI, Math.PI * 1.95); ctx.stroke();
      }
      ctx.restore();
      ctx.strokeStyle = '#b8e7f3a6'; ctx.lineWidth = 2 * scale;
      ctx.beginPath(); ctx.arc(x, y, r, Math.PI, Math.PI * 2); ctx.stroke();
      ctx.globalAlpha = 1;
    }

    if (env.nebula > 0) {
      const x = width * .81, y = height * .2, r = 31 * Math.min(scale, 1.2);
      ctx.globalAlpha = env.nebula * .7;
      const planet = ctx.createRadialGradient(x - r * .35, y - r * .45, r * .1, x + r * .4, y + r * .35, r * 1.6);
      planet.addColorStop(0, '#cbb7c9'); planet.addColorStop(.6, '#7d739d'); planet.addColorStop(1, '#353956');
      ctx.fillStyle = planet; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#b4b4d373'; ctx.lineWidth = 3 * scale;
      ctx.beginPath(); ctx.ellipse(x, y + r * .15, r * 1.65, r * .31, -.3, 0, Math.PI); ctx.stroke();
      ctx.globalAlpha = 1;
    }

    if (env.clouds > 0) {
      for (let i = 0; i < 17; i++) {
        const y = ((i * 139 + camera * (.055 + i % 3 * .035) * scale) % (height + 220)) - 100;
        const x = ((i * 197 + Math.sin(time * .06 + i) * 18) % (width + 160)) - 80;
        ctx.globalAlpha = env.clouds * (i % 2 ? .28 : .2); ctx.fillStyle = '#f8ffff';
        cloud(ctx, x, y, (30 + i % 4 * 16) * scale);
      }
      // A distant lower cloud bank makes the middle altitudes feel above the clouds.
      const sea = Math.min(1, altitude / 600) * env.clouds;
      ctx.globalAlpha = sea * .17; ctx.fillStyle = '#f4fbff';
      for (let i = 0; i < 4; i++) cloud(ctx, width * (i * .36 - .04), height * (.94 + i % 2 * .06), width * .25);
    }
    ctx.restore();
  }
  window.StarMunchSky = { draw };
})();
