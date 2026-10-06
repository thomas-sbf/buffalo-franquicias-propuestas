/* A5-1 · "El negocio en vivo" — JS vanilla, sin dependencias (~10 KB).
   Todo lo que hace este archivo es mejora progresiva: sin JS, el tablero se lee completo
   (cifras en HTML, preguntas en <details>, formulario visible en el paso 1). */
(() => {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const clp = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 });
  const money = n => clp.format(Math.round(n)).replace(/\s/g, '');
  const vt = fn => {
    // View Transitions como mejora progresiva: sin soporte, con reduced-motion o con la pestaña oculta, cambio directo
    if (!document.startViewTransition || reduce.matches || document.hidden) { fn(); return null; }
    const t = document.startViewTransition(fn);
    [t.ready, t.finished, t.updateCallbackDone].forEach(p => p && p.catch(() => {}));
    return t;
  };

  /* ---------- Cifras oficiales (entregadas por Buffalo Waffles, octubre 2026) ----------
     El simulador solo compara el capital que ingresa el usuario con la inversión inicial total.
     No calcula montos mensuales ni fechas: royalty, fondo, contrato y apertura se muestran tal cual en el HTML. */
  const DATA = {
    inversion: 43000000      // inversión inicial total, "desde $43.000.000" (incluye derecho $10M y capital de trabajo $3M)
  };
  const REG = {
    XV: ['Arica y Parinacota', true], I: ['Tarapacá', true], II: ['Antofagasta', true], III: ['Atacama', false],
    IV: ['Coquimbo', false], V: ['Valparaíso', true], RM: ['Metropolitana', true], VI: ["O'Higgins", true],
    VII: ['Maule', true], XVI: ['Ñuble', false], VIII: ['Biobío', true], IX: ['La Araucanía', true],
    XIV: ['Los Ríos', true], X: ['Los Lagos', false], XI: ['Aysén', false], XII: ['Magallanes', true]
  };
  const FMT = { isla: 'Isla o módulo', local: 'Local', food: 'Food court' };

  /* ---------- Progreso de lectura (fallback si no hay scroll-timeline) ---------- */
  const prog = $('.progress');
  if (prog && !CSS.supports('animation-timeline: scroll()')) {
    let raf = 0;
    const upd = () => { raf = 0; const h = document.documentElement; const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight); prog.style.setProperty('--p', p.toFixed(4)); };
    addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(upd); }, { passive: true });
    upd();
  }

  /* ---------- Índice: sección activa (riel y hoja móvil) ---------- */
  const sections = $$('main > section[id]');
  const links = $$('[data-index] a');
  const setCurrent = id => links.forEach(a => a.setAttribute('aria-current', a.getAttribute('href') === '#' + id ? 'true' : 'false'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setCurrent(e.target.id); });
    }, { rootMargin: '-35% 0px -60% 0px' });
    sections.forEach(s => io.observe(s));
  }
  const sheet = $('#indice');
  $$('[data-open-index]').forEach(b => b.addEventListener('click', () => { sheet.showModal(); }));
  $$('[data-close-index]').forEach(b => b.addEventListener('click', () => sheet.close()));
  sheet.addEventListener('click', e => { if (e.target === sheet) sheet.close(); });
  $$('a', sheet).forEach(a => a.addEventListener('click', () => sheet.close()));

  /* ---------- Ticker: pausa/reanuda (WCAG 2.2.2) ---------- */
  const ticker = $('[data-ticker]');
  const tbtn = $('[data-ticker-btn]');
  if (ticker && tbtn) {
    const icon = paused => tbtn.innerHTML = paused
      ? '<svg class="ico" aria-hidden="true"><use href="#i-play"/></svg>'
      : '<svg class="ico" aria-hidden="true"><use href="#i-pause"/></svg>';
    tbtn.addEventListener('click', () => {
      const paused = ticker.dataset.paused !== 'true';
      ticker.dataset.paused = String(paused);
      tbtn.setAttribute('aria-pressed', String(paused));
      tbtn.setAttribute('aria-label', paused ? 'Reanudar la cinta de datos' : 'Pausar la cinta de datos');
      icon(paused);
    });
    if (reduce.matches) tbtn.hidden = true;
  }

  /* ---------- Simulador ---------- */
  const sim = $('[data-sim]');
  const state = { cap: DATA.inversion, reg: 'RM', fmt: 'isla' };
  const fillRange = r => r.style.setProperty('--fill', ((r.value - r.min) / (r.max - r.min) * 100) + '%');
  const inv = money(DATA.inversion);

  function renderSim() {
    if (!sim) return;
    $('#o-cap').textContent = money(state.cap);

    // Tu capital frente a la inversión inicial total (cifra oficial)
    const max = Math.max(state.cap, DATA.inversion) * 1.15;
    const g = $('#r-gauge');
    g.style.setProperty('--g', (state.cap / max * 100).toFixed(1) + '%');
    g.querySelector('.gauge__mark').style.setProperty('--m', (DATA.inversion / max * 100).toFixed(1) + '%');
    const ok = state.cap >= DATA.inversion;
    g.dataset.state = ok ? 'ok' : 'short';
    const v = $('#r-verdict');
    v.dataset.ok = String(ok);
    v.innerHTML = ok
      ? `<svg class="ico" aria-hidden="true"><use href="#i-check"/></svg><span>Tu capital (${money(state.cap)}) alcanza la inversión inicial total desde ${inv}.</span>`
      : `<svg class="ico" aria-hidden="true"><use href="#i-alert"/></svg><span>Te faltan ${money(DATA.inversion - state.cap)} para la inversión inicial total desde ${inv}. Igual puedes postular y conversarlo.</span>`;
    const mc = $('[data-mini-cap]'), mo = $('[data-mini-ok]');
    if (mc) { mc.textContent = money(state.cap); mo.textContent = ok ? '✓ alcanza' : '✕ falta capital'; mo.classList.toggle('no', !ok); }

    // Región y formato
    const [nom, on] = REG[state.reg];
    $('#r-reg-t').textContent = nom;
    $('#r-reg-p').textContent = on
      ? 'Ya hay Buffalo Waffles en esta región, según el mapa publicado.'
      : 'Aún no hay Buffalo Waffles en esta región según el mapa publicado. Cada zona nueva se evalúa por su potencial comercial (FAQ 7).';
    $('#r-fmt-t').textContent = FMT[state.fmt];
  }

  if (sim) {
    const rc = $('#s-cap');
    state.cap = +rc.value;
    fillRange(rc);
    rc.addEventListener('input', () => {
      fillRange(rc);
      state.cap = +rc.value;
      rc.setAttribute('aria-valuetext', money(+rc.value));
      renderSim();
    });
    rc.setAttribute('aria-valuetext', money(+rc.value));
    $('#s-reg').addEventListener('change', e => { state.reg = e.target.value; renderSim(); selectRegion(state.reg, false); });
    $$('input[name="s-fmt"]').forEach(i => i.addEventListener('change', () => { state.fmt = i.value; renderSim(); }));
    renderSim();

    $('[data-sim-copy]').addEventListener('click', async () => {
      const ok = state.cap >= DATA.inversion;
      const txt = [
        'Mi escenario Buffalo Waffles (simulación ilustrativa, no es una proyección)',
        `Capital: ${money(state.cap)} · Región: ${REG[state.reg][0]} · Formato: ${FMT[state.fmt]}`,
        `Inversión inicial total: desde ${inv}. Incluye el derecho de franquicia ($10.000.000) y el capital de trabajo ($3.000.000).`,
        ok ? 'Mi capital alcanza la inversión inicial total.' : `Me faltan ${money(DATA.inversion - state.cap)} para la inversión inicial total.`,
        'Royalty: 7 % de la venta neta · Fondo de marketing: 2 % de la venta neta (mensuales)',
        'Contrato: 5 años, renovable por 4 periodos · Apertura: 3 a 6 meses desde la firma'
      ].join('\n');
      const out = $('[data-sim-copied]');
      try { await navigator.clipboard.writeText(txt); out.textContent = 'Copiado. Pégalo donde quieras.'; }
      catch { out.textContent = 'No pudimos copiar automáticamente.'; }
      setTimeout(() => { out.textContent = ''; }, 3500);
    });

    $('[data-sim-apply]').addEventListener('click', () => {
      const tramo = state.cap < DATA.inversion ? 'Menos de $43M' : state.cap < 60000000 ? '$43M a $60M' : state.cap <= 100000000 ? '$60M a $100M' : 'Más de $100M';
      prefillForm({ capital: tramo, region: state.reg }, `Traemos lo que elegiste en el simulador: capital ${tramo} y región ${REG[state.reg][0]}. Puedes cambiarlo.`);
    });
  }

  /* ---------- Presencia: tira de regiones (flechas = roving focus) ---------- */
  const strip = $('[data-strip]');
  const regBtns = strip ? $$('.reg', strip) : [];
  function selectRegion(code, focus) {
    regBtns.forEach(b => { const sel = b.dataset.reg === code; b.setAttribute('aria-pressed', String(sel)); b.tabIndex = sel ? 0 : -1; if (sel && focus) b.focus(); });
    const [nom, on] = REG[code];
    $('#rc-code').textContent = code;
    $('#rc-t').textContent = nom;
    $('#rc-st').innerHTML = on ? '<span class="pill-st pill-st--on">Sí, según el mapa</span>' : '<span class="pill-st pill-st--off">Aún no publicada</span>';
    $('#rc-note').textContent = on
      ? 'Ya hay Buffalo Waffles en esta región. Cada nueva zona se evalúa según su potencial comercial y la cobertura actual (FAQ 7).'
      : 'Aún no hay presencia publicada aquí. Buffalo busca crecer en distintas regiones y evalúa cada caso según el potencial de la zona (FAQ 7).';
  }
  if (strip) {
    regBtns.forEach((b, i) => {
      b.tabIndex = b.getAttribute('aria-pressed') === 'true' ? 0 : -1;
      b.addEventListener('click', e => {
        selectRegion(b.dataset.reg, false); state.reg = b.dataset.reg;
        const s = $('#s-reg'); if (s) { s.value = b.dataset.reg; renderSim(); }
        // En móvil la ficha queda bajo la lista: la acercamos solo si el clic fue con puntero (no con flechas)
        if (e.detail > 0 && matchMedia('(max-width: 1023px)').matches) $('[data-regcard]').scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'center' });
      });
      b.addEventListener('keydown', e => {
        const k = e.key; let j = null;
        if (k === 'ArrowRight' || k === 'ArrowDown') j = (i + 1) % regBtns.length;
        if (k === 'ArrowLeft' || k === 'ArrowUp') j = (i - 1 + regBtns.length) % regBtns.length;
        if (k === 'Home') j = 0;
        if (k === 'End') j = regBtns.length - 1;
        if (j !== null) { e.preventDefault(); regBtns[j].click(); regBtns[j].focus(); }
      });
    });
    $('[data-reg-apply]').addEventListener('click', () => {
      const code = regBtns.find(b => b.getAttribute('aria-pressed') === 'true').dataset.reg;
      prefillForm({ region: code }, `Región elegida en el mapa: ${REG[code][0]}. Puedes cambiarla en el paso 3.`);
    });
  }

  /* ---------- Operar o delegar ---------- */
  const sw = $('.switch');
  if (sw) {
    $$('[data-mode-btn]', sw).forEach(b => b.addEventListener('click', () => {
      const m = b.dataset.modeBtn;
      sw.dataset.mode = m;
      $$('[data-mode-btn]', sw).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      $$('[data-mode-copy]').forEach(p => { p.hidden = p.dataset.modeCopy !== m; });
    }));
  }

  /* ---------- Formulario "deal room" (3 pasos + ficha en vivo) ---------- */
  const form = $('[data-lead]');
  let step = 1;
  const steps = form ? $$('.fstep', form) : [];
  const stepLis = form ? $$('.steps li', form) : [];
  const prev = form && $('[data-prev]', form), next = form && $('[data-next]', form), submit = form && $('[data-submit]', form);
  const hint = form && $('[data-hint]', form);

  function setInvalid(el, bad) { el.dataset.invalid = String(bad); const inp = $('input, select, textarea', el); if (inp && el.classList.contains('field') && !el.matches('fieldset')) inp.setAttribute('aria-invalid', String(bad)); }
  function validate(n) {
    let firstBad = null;
    const fs = steps[n - 1];
    const check = (el, ok) => { setInvalid(el, !ok); if (!ok && !firstBad) firstBad = el; };
    if (n === 1) {
      check($('#f-nom').closest('.field'), $('#f-nom').value.trim().length > 1);
      check($('#f-mail').closest('.field'), /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test($('#f-mail').value.trim()));
      check($('#f-tel').closest('.field'), $('#f-tel').value.replace(/\D/g, '').replace(/^56/, '').length >= 9);
    }
    if (n === 2) {
      $$('[data-req]', fs).forEach(f => check(f, !!$('input:checked', f)));
    }
    if (n === 3) {
      check($('#f-reg').closest('.field'), !!$('#f-reg').value);
      check($('#f-com').closest('.field'), $('#f-com').value.trim().length > 1);
      check($('[data-consent]'), $('#f-ok').checked);
    }
    if (firstBad) { const f = $('input, select, textarea', firstBad); if (f) f.focus(); }
    return !firstBad;
  }
  function go(n) {
    vt(() => {
      step = n;
      steps.forEach((s, i) => { s.hidden = i !== n - 1; s.style.viewTransitionName = i === n - 1 ? 'fstep' : ''; });
      stepLis.forEach((li, i) => { li.classList.toggle('done', i < n - 1); if (i === n - 1) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current'); });
      prev.hidden = n === 1; next.hidden = n === 3; submit.hidden = n !== 3;
      hint.textContent = n === 1 ? 'Toma 1 minuto.' : n === 2 ? 'Paso 2 de 3' : 'Último paso';
    });
    const h = $('h3', steps[n - 1]);
    setTimeout(() => h && h.focus({ preventScroll: true }), 30);
    const top = form.closest('.deal').getBoundingClientRect().top;
    if (top < 0) form.closest('.deal').scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'start' });
  }
  function prefillForm(vals, msg) {
    if (!form) return;
    if (vals.capital) { const r = $(`input[name="capital"][value="${vals.capital}"]`, form); if (r) r.checked = true; }
    if (vals.region) $('#f-reg').value = vals.region;
    const p = $('[data-prefill]'); p.querySelector('span').textContent = msg; p.classList.add('show');
    updateFicha();
  }

  // Ficha en vivo
  const ficha = $('[data-ficha]');
  function updateFicha() {
    if (!form || !ficha) return;
    const val = n => { const el = form.elements[n]; if (!el) return ''; if (el instanceof RadioNodeList) return el.value; return el.value.trim(); };
    const regV = $('#f-reg').value;
    const map = { nombre: [val('firstname'), val('lastname')].filter(Boolean).join(' '), email: val('email'), phone: val('phone'), capital: val('capital'), plazo: val('plazo'), modo: val('modo'), region: regV ? REG[regV][0] : '', city: val('city') };
    let filled = 0;
    Object.entries(map).forEach(([k, v]) => {
      const dd = $(`[data-f="${k}"]`, ficha);
      const prevTxt = dd.textContent;
      dd.textContent = v || '—';
      dd.classList.toggle('empty', !v);
      if (v) filled++;
      if (v && v !== prevTxt && !reduce.matches) { dd.classList.remove('flash'); void dd.offsetWidth; dd.classList.add('flash'); }
    });
    const pct = Math.round(filled / 8 * 100);
    $('[data-ficha-pct]').textContent = `${pct} % lista`;
    $('[data-ficha-meter]').style.setProperty('--m', pct + '%');
  }

  if (form) {
    form.addEventListener('input', updateFicha);
    form.addEventListener('change', e => {
      updateFicha();
      const f = e.target.closest('.field, [data-req], [data-consent]');
      if (f && f.dataset.invalid === 'true') setInvalid(f, false);
    });
    next.addEventListener('click', () => { if (validate(step)) go(step + 1); });
    prev.addEventListener('click', () => go(step - 1));
    form.addEventListener('keydown', e => {
      if (e.key === 'Enter' && e.target.matches('input:not([type=checkbox]):not([type=radio])') && step < 3) { e.preventDefault(); next.click(); }
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!validate(3)) return;
      submit.disabled = true; submit.textContent = 'Enviando…';
      setTimeout(() => {
        vt(() => { form.hidden = true; $('[data-thanks]').hidden = false; });
        setTimeout(() => $('[data-thanks] h3').focus(), 40);
      }, reduce.matches ? 200 : 900);
    });
    updateFicha();
  }

  /* ---------- Preguntas: buscador + filtro ---------- */
  const qInput = $('[data-q]');
  const qItems = $$('[data-qlist] .q');
  const qlist = $('[data-qlist]'), qmore = $('[data-qmore]');
  const mobileQ = matchMedia('(max-width: 767px)');
  let qExpanded = false;
  const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  qItems.forEach(q => { const t = $('.qt', q); t.dataset.raw = t.textContent; });
  function filterQ() {
    const term = norm(qInput.value.trim());
    const cat = ($('input[name="qcat"]:checked') || {}).value || 'todas';
    let n = 0;
    qItems.forEach(q => {
      const t = $('.qt', q);
      const hay = norm(q.textContent);
      const show = (cat === 'todas' || q.dataset.cat === cat) && (!term || hay.includes(term));
      q.hidden = !show;
      if (show) n++;
      // Resalta el término en la pregunta (sin tocar el resto del contenido)
      const raw = t.dataset.raw;
      if (term && norm(raw).includes(term)) {
        const i = norm(raw).indexOf(term);
        t.innerHTML = `${esc(raw.slice(0, i))}<mark class="hit">${esc(raw.slice(i, i + term.length))}</mark>${esc(raw.slice(i + term.length))}`;
      } else t.textContent = raw;
      if (term && show && !norm(raw).includes(term)) q.open = true;
    });
    // Móvil: sin búsqueda ni filtro se muestran 6 y un botón «Ver las 14»
    const collapse = mobileQ.matches && !qExpanded && !term && cat === 'todas';
    if (qlist) { if (collapse) qlist.dataset.collapsed = ''; else delete qlist.dataset.collapsed; }
    if (qmore) qmore.hidden = !collapse;
    $('[data-qcount]').textContent = collapse ? `Mostrando 6 de ${qItems.length} preguntas` : `${n} de ${qItems.length} preguntas`;
    $('[data-qempty]').classList.toggle('show', n === 0);
  }
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  if (qInput) {
    qInput.addEventListener('input', filterQ);
    $$('input[name="qcat"]').forEach(r => r.addEventListener('change', filterQ));
    if (qmore) qmore.addEventListener('click', () => { qExpanded = true; filterQ(); const s = $('summary', qItems[6]); if (s) s.focus(); });
    filterQ();
  }

  /* ---------- Versión móvil compacta (ronda 1) ---------- */
  // El trato: una columna a la vez en móvil (sin JS se ven las dos)
  const ledger = $('[data-ledger]');
  if (ledger) {
    ledger.dataset.show = 'tu';
    $$('[data-ledger-btn]', ledger).forEach(b => b.addEventListener('click', () => {
      ledger.dataset.show = b.dataset.ledgerBtn;
      $$('[data-ledger-btn]', ledger).forEach(x => x.setAttribute('aria-pressed', String(x === b)));
    }));
  }
  // Simulador y notas: abiertos en escritorio, plegados en móvil
  if (mobileQ.matches) {
    $$('[data-sim-more]').forEach(d => { d.open = false; });
    const notes = $('[data-notes]'); if (notes) notes.open = false;
  }
  // Tu ficha: plegada en móvil (se abre con «Ver»)
  const fichaEl = $('.ficha'), ft = $('[data-ficha-toggle]');
  if (fichaEl && ft && mobileQ.matches) {
    ft.hidden = false; fichaEl.dataset.collapsed = ''; ft.setAttribute('aria-expanded', 'false');
    ft.addEventListener('click', () => {
      const open = fichaEl.hasAttribute('data-collapsed');
      if (open) delete fichaEl.dataset.collapsed; else fichaEl.dataset.collapsed = '';
      ft.setAttribute('aria-expanded', String(open)); ft.textContent = open ? 'Ocultar' : 'Ver';
    });
  }
  // Citas largas: 4 líneas en móvil + «Leer la cita completa»
  if (mobileQ.matches) $$('[data-case-more]').forEach(b => {
    const c = b.closest('.case'); c.dataset.clamped = ''; b.hidden = false;
    b.addEventListener('click', () => {
      const clamped = c.hasAttribute('data-clamped');
      if (clamped) delete c.dataset.clamped; else c.dataset.clamped = '';
      b.setAttribute('aria-expanded', String(clamped)); b.textContent = clamped ? 'Ver menos' : 'Leer la cita completa';
    });
  });
  // Un superíndice ¹ siempre abre las notas antes de saltar a ellas
  $$('a[href^="#n"]').forEach(a => a.addEventListener('click', () => { const n = $('[data-notes]'); if (n) n.open = true; }));
})();
