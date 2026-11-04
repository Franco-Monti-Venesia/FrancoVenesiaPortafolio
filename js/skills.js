/**
 * Render de las habilidades agrupadas en "Sobre mí" (depende de lang).
 */

/** Color de marca de una habilidad (si es una herramienta de TOOLS); si no, el celeste del tema */
function brandColor(name) {
  const t = TOOLS.find(([n]) => n === name) || TOOLS.find(([n]) => name.startsWith(n));
  return t ? (t[2] === 'ink' ? 'var(--ink)' : t[2]) : 'var(--c)';
}
function renderSkills() {
  const i = lang === 'es' ? 0 : 1,
    L = (x) => (Array.isArray(x) ? x[i] : x);
  let k = 0;
  document.getElementById('skillsAbout').innerHTML = G.map(
    ([g, a]) =>
      `<p class="gl">${g[i]}</p><div class="tags">${a
        .map((x) => `<span style="--bc:${brandColor(L(x))};--i:${k++}">${L(x)}</span>`)
        .join('')}</div>`,
  ).join('');
}
