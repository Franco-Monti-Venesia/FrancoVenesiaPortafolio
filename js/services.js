/**
 * Servicios: pestañas + panel de detalle. Se usa para "Webs a medida" y para "Sistemas a medida".
 * Los botones de consulta abren WhatsApp con un mensaje según el servicio elegido (ver waLink en config.js).
 */

function createServiceGroup({ tabsId, pnlId, list }) {
  const tabsEl = document.getElementById(tabsId),
    pnlEl = document.getElementById(pnlId);
  let cur = 0;

  function renderTabs() {
    const i = lang === 'es' ? 0 : 1;
    tabsEl.innerHTML = list
      .map(
        (x, n) =>
          `<button class="tab" role="tab" type="button" aria-selected="${n === cur}" data-i="${n}"><span class="ico">${x.i}</span><span><b>${x.t[i]}</b><small>${x.s[i]}</small></span></button>`,
      )
      .join('');
  }

  function renderPnl() {
    const i = lang === 'es' ? 0 : 1,
      e = i === 0,
      x = list[cur],
      ul = (a) => `<ul>${a.map((y) => `<li>${y[i]}</li>`).join('')}</ul>`;
    const msg =
      (e ? 'Hola Franco, quiero consultar por: ' : "Hi Franco, I'd like to ask about: ") + x.t[i];
    const label = x.durLabel ? x.durLabel[i] : e ? 'Entrega:' : 'Delivery:';
    const cust = x.noCust
      ? ''
      : `<span class="cust">✨ ${e ? '100% personalizable: lo adapto a tu rubro y presupuesto' : '100% customizable: tailored to your industry and budget'}</span>`;
    pnlEl.innerHTML = `<h3>${x.t[i]}</h3><p class="lead">${x.s[i]}</p><p class="intro">${x.d[i]}</p>
 <div class="pills"><span class="dur">⏱ ${label} ${x.dur[i]}</span>${cust}</div>
 <div class="two"><div><h4>${e ? 'Qué incluye' : "What's included"}</h4>${ul(x.inc)}</div><div><h4>${e ? 'Qué te llevás' : 'What you get'}</h4>${ul(x.get)}</div></div>
 <div class="fit"><b>${e ? 'Te sirve si' : 'It fits if'}</b><span>${x.fit[i]}</span></div>
 <div class="idl"><b>${e ? 'Ideal para' : 'Ideal for'}</b>${x.ideal.map((y) => `<span>${y[i]}</span>`).join('')}</div>
 <div class="tl2"><b>${e ? 'Herramientas' : 'Tools'}</b><div class="stack">${x.tech.map((t) => `<span>${t}</span>`).join('')}</div></div>
 <a class="btn main" target="_blank" rel="noopener" href="${waLink(msg)}">${e ? 'Consultar por esto' : 'Ask about this'}</a>`;
  }

  tabsEl.onclick = (ev) => {
    const b = ev.target.closest('.tab');
    if (!b) return;
    cur = +b.dataset.i;
    [...tabsEl.children].forEach((x, n) => x.setAttribute('aria-selected', n === cur));
    renderPnl();
  };

  return {
    render() {
      renderTabs();
      renderPnl();
    },
  };
}

const webServices = createServiceGroup({ tabsId: 'tabs', pnlId: 'pnl', list: S });
const systemServices = createServiceGroup({ tabsId: 'sysTabs', pnlId: 'sysPnl', list: SYS });

function renderServices() {
  webServices.render();
  systemServices.render();
}
