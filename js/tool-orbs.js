/**
 * Burbujas de herramientas sobre la foto: arrancan en los costados y rebotan entre sí.
 */

(function () {
  const box = document.getElementById('orbs');
  if (!box) return;
  const T = [
    ['React', '#61dafb'],
    ['JavaScript', '#f7df1e'],
    ['HTML5', '#e34f26'],
    ['CSS3', '#2965f1'],
    ['Node.js', '#5fa04e'],
    ['MongoDB', '#47a248'],
    ['SQL', '#f29111'],
    ['Firebase', '#ffca28'],
    ['Git', '#f05032'],
    ['Tailwind CSS', '#38bdf8'],
    ['Bootstrap', '#7952b3'],
    ['Docker', '#2496ed'],
    ['Express', '#b0b6d0'],
    ['Sass', '#cc6699'],
    ['GitHub', '#c9d1d9'],
    ['Vercel', '#e6e6e6'],
    ['Vite', '#646cff'],
  ];
  const rm = matchMedia('(prefers-reduced-motion:reduce)').matches;
  let W = 0,
    H = 0,
    O = [],
    vis = false,
    raf = 0,
    last = 0,
    cnt = 0;
  const rnd = (a, b) => a + Math.random() * (b - a);
  function measure() {
    W = box.clientWidth;
    H = box.clientHeight;
    O.forEach((o) => {
      o.w = o.el.offsetWidth;
      o.h = o.el.offsetHeight;
      o.x = Math.min(o.x, Math.max(0, W - o.w));
      o.y = Math.min(o.y, Math.max(0, H - o.h));
    });
  }
  function build() {
    const n = W < 240 ? 9 : W < 320 ? 12 : W < 350 ? 14 : T.length;
    if (n === cnt && O.length) return;
    cnt = n;
    box.innerHTML = '';
    O = T.slice(0, n).map(([nm, c]) => {
      const el = document.createElement('span');
      el.className = 'orb';
      el.style.setProperty('--dc', c);
      el.innerHTML = '<i></i>' + nm;
      box.appendChild(el);
      return { el, x: 0, y: 0, w: 0, h: 0, vx: 0, vy: 0 };
    });
    O.forEach((o) => {
      o.w = o.el.offsetWidth;
      o.h = o.el.offsetHeight;
    });
    const Ls = O.filter((_, i) => i % 2 === 0),
      Rs = O.filter((_, i) => i % 2 === 1);
    [
      [Ls, 0],
      [Rs, 1],
    ].forEach(([arr, sd]) =>
      arr.forEach((o, j) => {
        o.x = sd ? Math.max(0, W - o.w) : 0;
        o.y = arr.length > 1 ? (j * Math.max(0, H - o.h)) / (arr.length - 1) : 0;
      }),
    );
    O.forEach((o) => {
      const a = rnd(0, 6.283),
        sp = rnd(24, 52);
      o.vx = Math.cos(a) * sp;
      o.vy = Math.sin(a) * sp;
      if (Math.abs(o.vx) < 14) o.vx = o.vx < 0 ? -14 : 14;
    });
    draw();
  }
  function draw() {
    O.forEach((o) => {
      o.el.style.transform = `translate3d(${o.x.toFixed(1)}px,${o.y.toFixed(1)}px,0)`;
    });
  }
  function step(dt) {
    for (const o of O) {
      o.x += o.vx * dt;
      o.y += o.vy * dt;
      if (o.x < 0) {
        o.x = 0;
        o.vx = Math.abs(o.vx);
      } else if (o.x > W - o.w) {
        o.x = W - o.w;
        o.vx = -Math.abs(o.vx);
      }
      if (o.y < 0) {
        o.y = 0;
        o.vy = Math.abs(o.vy);
      } else if (o.y > H - o.h) {
        o.y = H - o.h;
        o.vy = -Math.abs(o.vy);
      }
    }
    for (let i = 0; i < O.length; i++)
      for (let j = i + 1; j < O.length; j++) {
        const a = O[i],
          b = O[j];
        const dx = a.x + a.w / 2 - (b.x + b.w / 2),
          dy = a.y + a.h / 2 - (b.y + b.h / 2),
          ox = (a.w + b.w) / 2 - Math.abs(dx),
          oy = (a.h + b.h) / 2 - Math.abs(dy);
        if (ox > 0 && oy > 0) {
          if (ox < oy) {
            const sg = dx > 0 ? 1 : -1;
            a.x += (sg * ox) / 2;
            b.x -= (sg * ox) / 2;
            if ((a.vx - b.vx) * sg < 0) {
              const t = a.vx;
              a.vx = b.vx;
              b.vx = t;
            }
          } else {
            const sg = dy > 0 ? 1 : -1;
            a.y += (sg * oy) / 2;
            b.y -= (sg * oy) / 2;
            if ((a.vy - b.vy) * sg < 0) {
              const t = a.vy;
              a.vy = b.vy;
              b.vy = t;
            }
          }
        }
      }
  }
  function loop(t) {
    if (!vis) {
      raf = 0;
      return;
    }
    const dt = Math.min(0.04, (t - last) / 1000 || 0.016);
    last = t;
    step(dt);
    draw();
    raf = requestAnimationFrame(loop);
  }
  new IntersectionObserver((e) => {
    vis = e[0].isIntersecting && !rm;
    if (vis && !raf) {
      last = performance.now();
      raf = requestAnimationFrame(loop);
    }
  }).observe(box);
  new ResizeObserver(() =>
    requestAnimationFrame(() => {
      measure();
      build();
      measure();
      draw();
    }),
  ).observe(box);
  ((document.fonts && document.fonts.ready) || Promise.resolve()).then(() => {
    measure();
    draw();
  });
})();
