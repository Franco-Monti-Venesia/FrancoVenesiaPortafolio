/**
 * Menú móvil (hamburguesa): abre/cierra con clic, Esc y al cambiar de tamaño.
 */

const links = document.getElementById('links'),
  bg = document.getElementById('burger');
const setMenu = (o) => {
  links.classList.toggle('open', o);
  bg.textContent = o ? '✕' : '☰';
  bg.setAttribute('aria-expanded', o);
};
bg.onclick = (e) => {
  e.stopPropagation();
  setMenu(!links.classList.contains('open'));
};
links.onclick = (e) => {
  if (e.target.closest('a')) setMenu(false);
};
document.addEventListener('click', (e) => {
  if (!e.target.closest('nav')) setMenu(false);
});
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});
addEventListener('resize', () => {
  if (innerWidth > 960) setMenu(false);
});
