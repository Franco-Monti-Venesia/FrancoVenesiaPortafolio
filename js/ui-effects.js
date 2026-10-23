/**
 * Efectos de interfaz: botón volver arriba, aparición al hacer scroll y luz que sigue al mouse.
 */

const tt = document.getElementById('totop');
addEventListener('scroll', () => tt.classList.toggle('show', scrollY > 700), { passive: true });
tt.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
/* reveal */
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
const obs = () => document.querySelectorAll('.rv:not(.in)').forEach((el) => io.observe(el));
obs();
/* spotlight en vidrio */
let pe = null,
  pq = 0;
document.addEventListener('pointermove', (e) => {
  pe = e;
  if (pq) return;
  pq = requestAnimationFrame(() => {
    pq = 0;
    const g = pe.target.closest && pe.target.closest('.glass');
    if (g) {
      const r = g.getBoundingClientRect();
      g.style.setProperty('--mx', pe.clientX - r.left + 'px');
      g.style.setProperty('--my', pe.clientY - r.top + 'px');
    }
  });
});
