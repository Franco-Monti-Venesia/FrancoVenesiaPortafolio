/**
 * Sección Herramientas: carrusel infinito con el ícono de cada herramienta y su nombre debajo.
 * La lista se duplica para que el loop de la animación sea continuo.
 * Nota: la ruta del ícono es relativa a css/sections/tools.css (donde se usa en `mask`), por eso lleva ../../
 */

function renderTools() {
  const tool = ([name, icon, color], dup) =>
    `<div class="tool${dup ? ' dup' : ''}" style="--tc:${color === 'ink' ? 'var(--ink)' : color};--icon:url(../../assets/icons/${icon}.svg)"${dup ? ' aria-hidden="true"' : ''}>` +
    `<span class="ti" aria-hidden="true"></span><span class="tn">${name}</span></div>`;
  document.getElementById('toolsTrack').innerHTML =
    TOOLS.map((t) => tool(t, false)).join('') + TOOLS.map((t) => tool(t, true)).join('');
}

renderTools();
