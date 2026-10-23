/**
 * Efecto de escritura de la frase del inicio.
 */

const t = document.getElementById('typed');
(function tick() {
  const s = words[w] || '';
  ch = Math.min(ch, s.length);
  t.textContent = s.slice(0, ch);
  if (!del && ch === s.length && s) {
    del = true;
    return setTimeout(tick, 1700);
  }
  if (del && ch === 0) {
    del = false;
    w = (w + 1) % words.length;
  }
  ch += del ? -1 : 1;
  setTimeout(tick, del ? 28 : 55);
})();
