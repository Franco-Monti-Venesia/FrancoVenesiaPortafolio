/**
 * Contacto: copiar email al portapapeles y precarga del servicio elegido en el mensaje.
 */

const cpb = document.getElementById('cpmail'),
  cps = document.getElementById('cpsm');
cpb.onclick = async () => {
  const em = 'francovenesia05@gmail.com';
  try {
    await navigator.clipboard.writeText(em);
  } catch (e) {
    const x = document.createElement('textarea');
    x.value = em;
    document.body.appendChild(x);
    x.select();
    document.execCommand('copy');
    x.remove();
  }
  cpb.classList.add('ok');
  cps.textContent = lang === 'es' ? '¡Copiado al portapapeles!' : 'Copied to clipboard!';
  setTimeout(() => {
    cpb.classList.remove('ok');
    cps.textContent = em;
  }, 1800);
};
document.addEventListener('click', (e) => {
  const a = e.target.closest('[data-svc]');
  if (!a) return;
  const ta = document.getElementById('m');
  if (!ta.value || ta.dataset.pre === ta.value) {
    ta.value = a.dataset.svc;
    ta.dataset.pre = ta.value;
  }
});
