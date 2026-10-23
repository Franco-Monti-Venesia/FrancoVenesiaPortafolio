/**
 * Formulario: envío con FormSubmit y respaldo por mailto si falla la red.
 */

document.getElementById('form').onsubmit = async (e) => {
  e.preventDefault();
  const f = e.target,
    btn = f.querySelector('button[type=submit]'),
    st = document.getElementById('fstat'),
    es = lang === 'es',
    ta = document.getElementById('m');
  const d = {
    name: document.getElementById('n').value.trim(),
    email: document.getElementById('e').value.trim(),
    message: ta.value.trim(),
  };
  if (document.getElementById('hp').value) {
    st.className = 'fstat ok';
    st.textContent = es ? '¡Mensaje enviado!' : 'Message sent!';
    return;
  }
  btn.disabled = true;
  st.className = 'fstat';
  st.textContent = es ? 'Enviando…' : 'Sending…';
  try {
    const r = await fetch('https://formsubmit.co/ajax/francovenesia05@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...d,
        _subject: 'Nuevo mensaje desde tu portfolio',
        _template: 'table',
        _captcha: 'false',
      }),
    });
    const j = await r.json();
    if (!r.ok || String(j.success) !== 'true') throw 0;
    f.reset();
    delete ta.dataset.pre;
    st.className = 'fstat ok';
    st.textContent = es
      ? '¡Mensaje enviado! Te respondo en menos de 24 horas.'
      : "Message sent! I'll reply within 24 hours.";
  } catch (_) {
    st.className = 'fstat err';
    st.textContent = es
      ? 'No pudimos enviarlo desde acá. Abrimos tu correo para que lo mandes desde ahí.'
      : "We couldn't send it from here. We opened your email app so you can send it from there.";
    location.href =
      'mailto:francovenesia05@gmail.com?subject=' +
      encodeURIComponent('Consulta desde el portfolio') +
      '&body=' +
      encodeURIComponent(d.message + '\n\n' + d.name + ' (' + d.email + ')');
  } finally {
    btn.disabled = false;
  }
};
