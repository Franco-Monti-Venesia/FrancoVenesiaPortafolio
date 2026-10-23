/**
 * Cambio de tema (claro/oscuro) y de idioma (ES/EN) con persistencia en localStorage.
 */

function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  sv('theme', t);
  K =
    t === 'dark'
      ? { a: '190,210,255', b: '120,160,255', m: '45,212,255' }
      : { a: '70,80,170', b: '100,90,220', m: '8,145,178' };
  TH.innerHTML =
    t === 'dark'
      ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6"/></svg>'
      : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  TH.dataset.tip =
    lang === 'es'
      ? t === 'dark'
        ? 'Modo claro'
        : 'Modo oscuro'
      : t === 'dark'
        ? 'Light mode'
        : 'Dark mode';
  TH.setAttribute(
    'aria-label',
    lang === 'es'
      ? t === 'dark'
        ? 'Cambiar a modo claro'
        : 'Cambiar a modo oscuro'
      : t === 'dark'
        ? 'Switch to light mode'
        : 'Switch to dark mode',
  );
}
function setLang(l) {
  lang = l;
  sv('lang', l);
  document.documentElement.lang = l;
  words = WD[l];
  w = 0;
  ch = 0;
  del = false;
  document.getElementById('gh').textContent =
    (l === 'es' ? 'Desarrollador Full Stack en Rosario. ' : 'Full Stack Developer in Rosario. ') +
    WD[l].reduce((a, b) => (a.length >= b.length ? a : b));
  tr(document.body);
  renderSkills();
  renderTabs();
  renderPnl();
  renderCerts();
  document.title =
    l === 'es'
      ? 'Franco Venesia | Desarrollo a Medida | Portafolio'
      : 'Franco Venesia | Custom Development | Portfolio';
  LG.dataset.tip = l === 'es' ? 'Traducir a inglés' : 'Translate to Spanish';
  LG.setAttribute('aria-label', l === 'es' ? 'Switch to English' : 'Cambiar a español');
  bg.setAttribute('aria-label', l === 'es' ? 'Abrir menú' : 'Open menu');
  setTheme(theme);
}
LG.onclick = () => setLang(lang === 'es' ? 'en' : 'es');
TH.onclick = () => setTheme(theme === 'dark' ? 'light' : 'dark');
