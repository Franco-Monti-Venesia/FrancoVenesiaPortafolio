/**
 * Guía <F.V> que baja por la línea de tiempo con el scroll (lee primero, escribe después).
 */

const tl = document.getElementById('tl'),
  rd = document.getElementById('rider'),
  stp = [...tl.children];
let rq = 0;
function ride() {
  if (rq) return;
  rq = requestAnimationFrame(() => {
    rq = 0;
    const r = tl.getBoundingClientRect(),
      y = Math.min(r.height, Math.max(0, innerHeight * 0.5 - r.top)),
      rs = stp.map((x) => x.getBoundingClientRect());
    let b = 0,
      bd = 1e9;
    rs.forEach((c, i) => {
      const d = Math.abs(c.top + c.height / 2 - (r.top + y));
      if (d < bd) {
        bd = d;
        b = i;
      }
    });
    rd.style.top = y + 'px';
    stp.forEach((x, i) => x.classList.toggle('on', i === b));
  });
}
addEventListener('scroll', ride, { passive: true });
addEventListener('resize', ride);
ride();
