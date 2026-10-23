/**
 * Arranque: aplica el tema y el idioma guardados.
 */

theme = ld('theme') === 'light' ? 'light' : 'dark';
setLang(ld('lang') === 'en' ? 'en' : 'es');
