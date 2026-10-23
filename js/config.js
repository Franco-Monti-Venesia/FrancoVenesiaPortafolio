/**
 * Estado global (idioma, tema, colores de partículas), helpers de localStorage y frases del texto que se escribe.
 */

let lang = 'es',
  theme = 'dark',
  w = 0,
  ch = 0,
  del = false,
  words = [],
  cur = 0;
let K = { a: '190,210,255', b: '120,160,255', m: '45,212,255' };
const ld = (k) => {
    try {
      return localStorage.getItem(k);
    } catch (e) {
      return null;
    }
  },
  sv = (k, v) => {
    try {
      localStorage.setItem(k, v);
    } catch (e) {}
  };
const LG = document.getElementById('lg'),
  TH = document.getElementById('th');
const WD = {
  es: [
    'Sitios web para negocios locales.',
    'E-commerce con React y Firebase.',
    'Landings rápidas y a medida.',
  ],
  en: [
    'Websites for local businesses.',
    'E-commerce with React and Firebase.',
    'Fast, custom landing pages.',
  ],
};
