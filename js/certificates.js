/**
 * Galería de certificaciones: grilla, ampliado con animación FLIP y texto debajo, y lightbox en móvil.
 */

const cz = document.getElementById('certs');
let big = -1;
const IC_EXP =
  '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';
const IC_CLS =
  '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7"/></svg>';
/* Columnas visibles y alto de fila según el ancho real de una tarjeta (no depende de cuántas columnas declare el CSS) */
const czCard = () => cz.querySelector('.cert:not(.big)');
const czCols = () => {
  const c = czCard();
  return c ? Math.max(1, Math.round((cz.clientWidth + 16) / (c.offsetWidth + 16))) : 1;
};
function czLayout() {
  const c = czCard();
  if (!c) return;
  // el certificado es apaisado (≈ 1.414:1) y la tarjeta tiene 10px de relleno por lado
  cz.style.setProperty('--rh', (c.offsetWidth - 20) / 1.414 + 20 + 'px');
}
const IC_LUPA =
  '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/></svg>';
/** "2026-09" → "Septiembre 2026" (vacío si no hay fecha) */
function fmtDate(ym) {
  if (!ym) return '';
  const [y, m] = ym.split('-');
  return `${MONTHS[lang][+m - 1]} ${y}`;
}
/** Texto de un certificado: fecha de finalización, nombre y empresa */
function certInfo(x) {
  const i = lang === 'es' ? 0 : 1,
    d = fmtDate(x.ym);
  const feat = x.featured
    ? `<span class="cfeat">★ ${i ? 'Featured certificate' : 'Certificado destacado'}</span>`
    : '';
  return `<span class="cmeta">${d ? `<span class="cdate">${d}</span>` : ''}${feat}</span><strong class="ctitle">${x.title[i]}</strong><span class="corg">Coderhouse</span>`;
}
function renderCerts() {
  const i = lang === 'es' ? 0 : 1;
  cz.innerHTML = CE.map(
    (x, n) =>
      `<div class="glass cert${n === big ? ' big' : ''}" data-i="${n}"><div class="cimg"><img loading="lazy" onerror="this.closest('.cert').remove()" src="assets/img/${x.file}" alt="${x.title[i]}"><span class="view">${IC_LUPA}${i ? 'View certificate' : 'Ver certificado'}</span></div><span class="cap">${x.short[i]}</span>${x.featured ? `<span class="star">★ ${i ? 'Featured' : 'Destacado'}</span>` : ''}<div class="cinfo">${certInfo(x)}</div><button class="cz" type="button" aria-label="${n === big ? (i ? 'Shrink certificate' : 'Reducir certificado') : i ? 'Enlarge certificate' : 'Ampliar certificado'}">${n === big ? IC_CLS : IC_EXP}</button></div>`,
  ).join('');
  czLayout();
}
function lightbox(n) {
  const i = lang === 'es' ? 0 : 1,
    d = document.createElement('div');
  d.className = 'lb';
  d.innerHTML = `<img src="assets/img/${CE[n].file}" alt="${CE[n].title[i]}"><div class="lbinfo">${certInfo(CE[n])}</div><button type="button" aria-label="${i ? 'Close' : 'Cerrar'}">✕</button>`;
  d.onclick = () => d.remove();
  document.body.appendChild(d);
}
function czToggle(n) {
  if (czCols() < 2) {
    lightbox(n);
    return;
  }
  const cards = [...cz.children],
    first = cards.map((c) => c.getBoundingClientRect());
  big = big === n ? -1 : n;
  const i = lang === 'es' ? 0 : 1;
  cards.forEach((c) => {
    const on = +c.dataset.i === big,
      b = c.querySelector('.cz');
    c.classList.toggle('big', on);
    b.innerHTML = on ? IC_CLS : IC_EXP;
    b.setAttribute(
      'aria-label',
      on
        ? i
          ? 'Shrink certificate'
          : 'Reducir certificado'
        : i
          ? 'Enlarge certificate'
          : 'Ampliar certificado',
    );
  });
  cards.forEach((c, k) => {
    const a = first[k],
      b = c.getBoundingClientRect(),
      dx = a.left - b.left,
      dy = a.top - b.top,
      sx = a.width / b.width,
      sy = a.height / b.height;
    if (dx || dy || sx !== 1 || sy !== 1)
      c.animate(
        [
          {
            transformOrigin: 'top left',
            transform: `translate(${dx}px,${dy}px) scale(${sx},${sy})`,
          },
          { transformOrigin: 'top left', transform: 'none' },
        ],
        { duration: 560, easing: 'cubic-bezier(.2,.8,.2,1)' },
      );
  });
  if (big > -1)
    setTimeout(() => {
      const c = cz.querySelector('.big');
      if (!c) return;
      const r = c.getBoundingClientRect(),
        vh = innerHeight;
      if (r.top < 104 || r.bottom > vh - 24) {
        scrollBy({ top: r.top - Math.max(104, (vh - r.height) / 2), behavior: 'smooth' });
      }
    }, 620);
}
cz.addEventListener('click', (e) => {
  const c = e.target.closest('.cert');
  if (c) czToggle(+c.dataset.i);
});
addEventListener('resize', () => requestAnimationFrame(czLayout));
addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  const l = document.querySelector('.lb');
  if (l) l.remove();
  else if (big > -1) czToggle(big);
});
let czw = 0;
new ResizeObserver(() => {
  const w = cz.clientWidth;
  if (w === czw) return;
  czw = w;
  requestAnimationFrame(czLayout);
}).observe(cz);
