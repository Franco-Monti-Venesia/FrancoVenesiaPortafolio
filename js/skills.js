/**
 * Render de habilidades en "Sobre mí" y en el carrusel (depende de lang).
 */

function renderSkills() {
  const i = lang === 'es' ? 0 : 1,
    L = (x) => (Array.isArray(x) ? x[i] : x);
  document.getElementById('skillsAbout').innerHTML = G.map(
    ([g, a]) =>
      `<p class="gl">${g[i]}</p><div class="tags">${a.map((x) => `<span>${L(x)}</span>`).join('')}</div>`,
  ).join('');
  const sk = G.flatMap((g) => g[1].map(L));
  document.getElementById('track').innerHTML = [...sk, ...sk]
    .map((x) => `<span>${x}</span>`)
    .join('');
}
