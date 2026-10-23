/**
 * Fondo de partículas conectadas que reaccionan al mouse.
 */

const cv = document.getElementById('fx'),
  cx = cv.getContext('2d');
let W,
  H,
  P = [],
  M = { x: -999, y: -999 };
const rm = matchMedia('(prefers-reduced-motion:reduce)').matches;
function size() {
  W = cv.width = innerWidth;
  H = cv.height = innerHeight;
  P = Array.from({ length: Math.min(90, Math.floor((W * H) / 17000)) }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
  }));
}
addEventListener('resize', size);
addEventListener('pointermove', (e) => {
  M.x = e.clientX;
  M.y = e.clientY;
});
size();
(function loop() {
  cx.clearRect(0, 0, W, H);
  for (const p of P) {
    if (!rm) {
      p.x += p.vx;
      p.y += p.vy;
    }
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;
    const dx = p.x - M.x,
      dy = p.y - M.y,
      d = Math.hypot(dx, dy);
    if (d < 140 && !rm) {
      p.x += (dx / d) * 1.4;
      p.y += (dy / d) * 1.4;
    }
    cx.fillStyle = `rgba(${K.a},.7)`;
    cx.beginPath();
    cx.arc(p.x, p.y, 1.5, 0, 6.3);
    cx.fill();
  }
  for (let i = 0; i < P.length; i++) {
    for (let j = i + 1; j < P.length; j++) {
      const d = Math.hypot(P[i].x - P[j].x, P[i].y - P[j].y);
      if (d < 120) {
        cx.strokeStyle = `rgba(${K.b},${0.2 * (1 - d / 120)})`;
        cx.beginPath();
        cx.moveTo(P[i].x, P[i].y);
        cx.lineTo(P[j].x, P[j].y);
        cx.stroke();
      }
    }
    const d = Math.hypot(P[i].x - M.x, P[i].y - M.y);
    if (d < 170) {
      cx.strokeStyle = `rgba(${K.m},${0.5 * (1 - d / 170)})`;
      cx.beginPath();
      cx.moveTo(P[i].x, P[i].y);
      cx.lineTo(M.x, M.y);
      cx.stroke();
    }
  }
  requestAnimationFrame(loop);
})();
