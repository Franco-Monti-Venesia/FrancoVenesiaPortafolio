/**
 * Traducción de los nodos de texto del documento (ES ↔ EN) con un TreeWalker.
 */

const orig = new Map();
function tr(root) {
  const wk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) =>
      n.parentElement.closest('script,style,#typed,#gh,#svc,#skillsAbout,#track,#certs')
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT,
  });
  let n;
  while ((n = wk.nextNode())) {
    if (!orig.has(n)) orig.set(n, n.nodeValue);
    const o = orig.get(n),
      // se colapsan espacios y saltos de línea para que el HTML pueda estar formateado en varias líneas
      k = o.replace(/\s+/g, ' ').trim();
    if (!k) continue;
    n.nodeValue = lang === 'en' && EN[k] ? o.replace(o.trim(), EN[k]) : o;
  }
}
