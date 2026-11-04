/**
 * Scroll con inercia (delay) para la rueda del mouse.
 * Se ajusta con SCROLL_EASE: más chico = más lento y con más "delay" (0.05 – 0.15).
 * No se activa con movimiento reducido ni en pantallas táctiles (usan su scroll nativo).
 */

const SCROLL_EASE = 0.07;
const SCROLL_SPEED = 1; // multiplica la distancia de cada movimiento de la rueda

(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let target = scrollY,
    current = scrollY,
    raf = 0;
  const maxScroll = () => document.documentElement.scrollHeight - innerHeight;

  function frame() {
    const diff = target - current;
    if (Math.abs(diff) < 0.4) {
      current = target;
      scrollTo({ top: current, behavior: 'instant' });
      raf = 0;
      return;
    }
    current += diff * SCROLL_EASE;
    scrollTo({ top: current, behavior: 'instant' });
    raf = requestAnimationFrame(frame);
  }

  addEventListener(
    'wheel',
    (e) => {
      if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // zoom y scroll horizontal: nativo
      if (e.target.closest('textarea, .tabs, .lb')) return; // zonas con scroll propio
      e.preventDefault();
      if (!raf) current = target = scrollY;
      const dy =
        e.deltaMode === 1 ? e.deltaY * 33 : e.deltaMode === 2 ? e.deltaY * innerHeight : e.deltaY;
      target = Math.min(Math.max(target + dy * SCROLL_SPEED, 0), maxScroll());
      if (!raf) raf = requestAnimationFrame(frame);
    },
    { passive: false },
  );

  // Si el scroll lo mueve otra cosa (links del menú, teclado, barra), se sincroniza
  addEventListener(
    'scroll',
    () => {
      if (!raf) current = target = scrollY;
    },
    { passive: true },
  );
})();
