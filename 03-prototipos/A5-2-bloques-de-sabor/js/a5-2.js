/* A5-2 · "Bloques de sabor" — JS vanilla, sin dependencias.
   Mejora progresiva: sin JS se lee toda la carta, las pistas se desplazan con scroll nativo
   y el formulario clásico (<details>) queda disponible como alternativa al chat. */
(() => {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  const smooth = () => (reduce.matches ? 'auto' : 'smooth');
  const vt = fn => {
    // View Transitions como mejora progresiva: sin soporte, con reduced-motion o con la pestaña oculta, cambio directo
    if (!document.startViewTransition || reduce.matches || document.hidden) { fn(); return null; }
    const t = document.startViewTransition(fn);
    [t.ready, t.finished, t.updateCallbackDone].forEach(p => p && p.catch(() => {}));
    return t;
  };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const WA = 'https://patg.ai/api/v1/r/agt_01K7JJSCPT8K81DBA2J18KE126?text=Hola+quiero+mas+informaci%C3%B3n+sobre+sus+franquicias+Buffalo+Waffles&landing_url=https%3A%2F%2Fbuffalofranquicias.com%2Fes-cl%2F';
  const PIPEDRIVE = 'https://buffalowaffles.pipedrive.com/scheduler/57xeMet7/reunion-inicial-buffalo-waffles';

  /* ---------- Capítulo activo: la carta de colores (header, tira, chip móvil, menú) ---------- */
  const chapters = $$('[data-ch]');
  const navLinks = $$('[data-nav] a');
  const nowBtn = $('[data-open-menu]');
  function setChapter(el) {
    const [n, name, c, t] = el.dataset.ch.split('|');
    const id = '#' + el.id;
    navLinks.forEach(a => a.setAttribute('aria-current', a.getAttribute('href') === id ? 'true' : 'false'));
    if (nowBtn) {
      $('[data-now-n]').textContent = n;
      $('[data-now-t]').textContent = name;
      nowBtn.style.setProperty('--now-c', c);
      nowBtn.style.setProperty('--now-t', t);
    }
  }
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setChapter(e.target); }), { rootMargin: '-40% 0px -55% 0px' });
    chapters.forEach(c => io.observe(c));
  }
  const menu = $('#menu');
  if (menu) {
    nowBtn && nowBtn.addEventListener('click', () => menu.showModal());
    $('[data-close-menu]').addEventListener('click', () => menu.close());
    $$('a', menu).forEach(a => a.addEventListener('click', () => menu.close()));
  }

  /* ---------- Portada: selector de sabor (View Transition en la imagen) ---------- */
  const hero = $('#portada');
  const heroImg = $('[data-hero-img]');
  const heroName = $('[data-hero-name]');
  let preloaded = false;
  const preload = () => {
    if (preloaded) return; preloaded = true;
    $$('input[name="flavor"]').forEach(i => { const im = new Image(); im.src = i.dataset.img; });
  };
  const fl = $('[data-flavors]');
  if (fl && hero) {
    fl.addEventListener('pointerenter', preload, { once: true });
    fl.addEventListener('focusin', preload, { once: true });
    $$('input[name="flavor"]', fl).forEach(i => i.addEventListener('change', async () => {
      const next = new Image(); next.src = i.dataset.img;
      // Esperamos la imagen nueva (máx. 400 ms) para que la transición no muestre un hueco
      try { await Promise.race([next.decode(), new Promise(r => setTimeout(r, 400))]); } catch (e) { /* si falla, igual cambiamos */ }
      vt(() => {
        hero.dataset.flavor = i.value;
        heroImg.src = i.dataset.img;
        heroImg.alt = `${i.dataset.name}, producto Buffalo Waffles`;
        heroName.textContent = i.dataset.name;
      });
    }));
  }

  /* ---------- Pistas horizontales: botones, flechas del teclado y medidor ---------- */
  $$('[data-track]').forEach(tr => {
    const id = tr.dataset.track;
    const prev = $(`[data-prev="${id}"]`), next = $(`[data-next="${id}"]`), meter = $(`[data-meter="${id}"]`);
    const step = () => { const li = $('li', tr); const gap = parseFloat(getComputedStyle(tr).columnGap) || 16; return li ? li.getBoundingClientRect().width + gap : 300; };
    const max = () => tr.scrollWidth - tr.clientWidth;
    const update = () => {
      const p = max() > 0 ? tr.scrollLeft / max() : 1;
      if (meter) meter.style.setProperty('--p', p.toFixed(3));
      if (prev) prev.disabled = tr.scrollLeft <= 4;
      if (next) next.disabled = tr.scrollLeft >= max() - 4;
    };
    prev && prev.addEventListener('click', () => tr.scrollBy({ left: -step(), behavior: smooth() }));
    next && next.addEventListener('click', () => tr.scrollBy({ left: step(), behavior: smooth() }));
    tr.addEventListener('keydown', e => {
      const map = { ArrowRight: step(), ArrowLeft: -step() };
      if (e.key in map) { e.preventDefault(); tr.scrollBy({ left: map[e.key], behavior: smooth() }); }
      if (e.key === 'Home') { e.preventDefault(); tr.scrollTo({ left: 0, behavior: smooth() }); }
      if (e.key === 'End') { e.preventDefault(); tr.scrollTo({ left: max(), behavior: smooth() }); }
    });
    tr.addEventListener('scroll', update, { passive: true });
    addEventListener('resize', update);
    update();
  });

  /* ---------- La receta: autoevaluación (no se guarda nada) ---------- */
  const receta = $('[data-receta]');
  if (receta) {
    const boxes = $$('input[type="checkbox"]', receta);
    const out = $('[data-score]'), msg = $('[data-score-msg]');
    const upd = () => {
      const n = boxes.filter(b => b.checked).length;
      out.textContent = `${n}/5`;
      msg.textContent = n === 0 ? 'Marca lo que te representa.'
        : n < 3 ? 'Conversemos igual: la reunión inicial sirve justamente para eso.'
        : n < 5 ? 'Vas bien. Haz tu pedido y lo revisamos juntos.'
        : '¡Tienes la receta! Haz tu pedido.';
    };
    boxes.forEach(b => b.addEventListener('change', upd));
  }

  /* =====================================================================
     TU PEDIDO — flujo conversacional (una pregunta a la vez, respuestas en chips)
     Historial "append-only" como un chat real: cambiar una respuesta la vuelve a preguntar
     al final y luego vuelve a la comanda.
     ===================================================================== */
  const chat = $('[data-chat]');
  if (!chat) return;
  const log = $('[data-log]', chat), reply = $('[data-reply]', chat);
  const countEl = $('[data-count]', chat), bar = $('[data-bar]', chat);
  const REG = [
    ['Arica y Parinacota', true], ['Tarapacá', true], ['Antofagasta', true], ['Atacama', false], ['Coquimbo', false],
    ['Valparaíso', true], ['Metropolitana', true], ["O'Higgins", true], ['Maule', true], ['Ñuble', false],
    ['Biobío', true], ['La Araucanía', true], ['Los Ríos', true], ['Los Lagos', false], ['Aysén', false], ['Magallanes', true]
  ];
  const STEPS = [
    { id: 'hola', count: false, kind: 'chips', opts: ['Partamos', 'Antes quiero ver la cuenta'],
      bot: () => ['¡Hola! Somos el equipo de franquicias de Buffalo Waffles.', 'Te hacemos 8 preguntas cortas y al final revisas tu comanda antes de enviarla. ¿Partimos?'] },
    { id: 'nombre', label: 'Nombre', kind: 'text', field: 'Tu nombre', ac: 'given-name',
      bot: () => ['¿Cómo te llamas?'], check: v => v.length > 1 ? '' : 'Escribe tu nombre.' },
    { id: 'region', label: 'Región', kind: 'chips', small: true, opts: REG.map(r => r[0]),
      bot: a => [`Un gusto, ${a.nombre}. ¿En qué región te gustaría abrir?`],
      react: v => (REG.find(r => r[0] === v) || [])[1]
        ? `Ya hay Buffalo Waffles en ${v}, según el mapa publicado. La disponibilidad de tu zona la revisamos en la reunión.`
        : `Aún no hay Buffalo Waffles publicado en ${v}. La marca evalúa cada zona según su potencial, así que vale la pena conversarlo.` },
    { id: 'comuna', label: 'Comuna', kind: 'text', field: 'Comuna o ciudad', ac: 'address-level2',
      bot: () => ['¿Y en qué comuna o ciudad?'], check: v => v.length > 1 ? '' : 'Escribe tu comuna o ciudad.' },
    { id: 'capital', label: 'Capital', kind: 'chips', opts: ['Menos de $40M', '$40M a $60M', '$60M a $100M', 'Más de $100M', 'Prefiero conversarlo'],
      note: 'Tramos propuestos, a confirmar con Buffalo.',
      bot: () => ['¿Con cuánto capital cuentas para invertir?'],
      react: v => v === 'Menos de $40M' ? 'Te lo decimos claro: la inversión total parte en $40.000.000, según formato y ubicación. Igual podemos conversarlo.'
        : v === 'Prefiero conversarlo' ? 'Perfecto, lo vemos en la reunión.' : 'Anotado. La inversión total parte en $40.000.000, según formato y ubicación.' },
    { id: 'plazo', label: 'Cuándo', kind: 'chips', opts: ['Menos de 6 meses', '6 meses a un año', 'Más de un año', 'Aún no lo sé'],
      bot: () => ['¿Cuándo te gustaría partir?'] },
    { id: 'modo', label: 'Modalidad', kind: 'chips', opts: ['Opero yo', 'Con administrador', 'Aún no lo sé'],
      bot: () => ['¿Te imaginas operando tú o con un administrador?'],
      react: v => v === 'Con administrador' ? 'Se puede. La marca recomienda igual seguir de cerca los indicadores del local.' : null },
    { id: 'exp', label: 'Experiencia', kind: 'chips', opts: ['Sí', 'No, sería el primero'],
      bot: () => ['¿Has tenido un negocio antes?'],
      react: v => v.startsWith('No') ? 'No es requisito: muchos franquiciados vienen de otros rubros.' : null },
    { id: 'contacto', label: 'Contacto', kind: 'contact',
      bot: () => ['Última: ¿a qué correo y WhatsApp te escribimos?'] }
  ];
  const TOTAL = STEPS.filter(s => s.count !== false).length;
  let A = {};            // respuestas
  let started = false, busy = false, sent = false;

  const wait = ms => new Promise(r => setTimeout(r, reduce.matches ? 0 : ms));
  // Auto-scroll SOLO dentro del log (nunca la página). Si el área de respuesta cambia de alto,
  // el log se achica: lo mantenemos pegado al último mensaje.
  const scrollLog = () => { log.scrollTo({ top: log.scrollHeight, behavior: 'instant' }); };
  if ('ResizeObserver' in window) new ResizeObserver(scrollLog).observe(log);
  function add(html, cls) {
    const d = document.createElement('div');
    d.className = 'msg ' + cls;
    d.innerHTML = html;
    log.appendChild(d); scrollLog();
    return d;
  }
  async function botSay(lines, cls = 'msg--bot') {
    for (const l of lines) {
      const t = document.createElement('div');
      t.className = 'typing'; t.setAttribute('aria-hidden', 'true'); t.innerHTML = '<i></i><i></i><i></i>';
      log.appendChild(t); scrollLog();
      await wait(Math.min(900, 380 + l.length * 8));
      t.remove();
      add(esc(l), cls);
    }
  }
  function progress() {
    const n = STEPS.filter(s => s.count !== false && A[s.id] !== undefined).length;
    countEl.textContent = sent ? '¡Listo!' : `Pregunta ${Math.min(n + 1, TOTAL)} de ${TOTAL}`;
    bar.style.setProperty('--p', (sent ? 100 : n / TOTAL * 100) + '%');
  }

  function renderReply(step, focus) {
    reply.innerHTML = '';
    const q = step.bot(A).slice(-1)[0];
    if (step.kind === 'chips') {
      const fs = document.createElement('fieldset');
      fs.className = 'chips';
      fs.innerHTML = `<legend>${esc(step.note ? step.note : 'Elige una respuesta')}<span class="bw-sr-only">: ${esc(q)}</span></legend>` +
        step.opts.map(o => `<button type="button" class="chip${step.small ? ' chip--sm' : ''}">${esc(o)}</button>`).join('');
      $$('button', fs).forEach(b => b.addEventListener('click', () => answer(step, b.textContent)));
      reply.appendChild(fs);
      if (focus) $('button', fs).focus({ preventScroll: true });
    } else if (step.kind === 'text') {
      const f = document.createElement('form');
      f.className = 'say'; f.noValidate = true;
      f.innerHTML = `<label>${esc(step.field)}<input class="inp" name="v" autocomplete="${step.ac}" required></label>
        <button class="send" type="submit" aria-label="Enviar respuesta"><svg class="ico" aria-hidden="true"><use href="#i-send"/></svg></button>
        <p class="err" role="alert" hidden></p>`;
      f.addEventListener('submit', e => {
        e.preventDefault();
        const inp = $('input', f), v = inp.value.trim(), msg = step.check(v);
        const err = $('.err', f);
        if (msg) { err.textContent = msg; err.hidden = false; inp.setAttribute('aria-invalid', 'true'); inp.focus({ preventScroll: true }); return; }
        answer(step, v);
      });
      reply.appendChild(f);
      if (focus) $('input', f).focus({ preventScroll: true });
    } else if (step.kind === 'contact') {
      const f = document.createElement('form');
      f.className = 'say say--2'; f.noValidate = true;
      f.innerHTML = `<label>Correo<input class="inp" name="email" type="email" inputmode="email" autocomplete="email" placeholder="nombre@gmail.com" required></label>
        <label>WhatsApp o teléfono<input class="inp" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="+56 9 1234 5678" required></label>
        <button class="send" type="submit" aria-label="Enviar correo y teléfono"><svg class="ico" aria-hidden="true"><use href="#i-send"/></svg></button>
        <p class="err" role="alert" hidden style="grid-column:1/-1"></p>`;
      f.addEventListener('submit', e => {
        e.preventDefault();
        const em = f.elements.email, ph = f.elements.phone, err = $('.err', f);
        const okE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em.value.trim());
        const okP = ph.value.replace(/\D/g, '').replace(/^56/, '').length >= 9;
        em.setAttribute('aria-invalid', String(!okE)); ph.setAttribute('aria-invalid', String(!okP));
        if (!okE || !okP) {
          err.textContent = !okE ? 'Revisa el correo (ejemplo: nombre@gmail.com).' : 'Revisa el número: incluye el 9 y los 8 dígitos.';
          err.hidden = false; (!okE ? em : ph).focus({ preventScroll: true }); return;
        }
        answer(step, { email: em.value.trim(), phone: ph.value.trim() });
      });
      reply.appendChild(f);
      if (focus) f.elements.email.focus({ preventScroll: true });
    }
  }

  async function ask(step, { edit = false, focus = true } = {}) {
    busy = true;
    reply.innerHTML = '';
    if (edit) await botSay([`Cambiemos tu respuesta de «${step.label.toLowerCase()}».`]);
    await botSay(edit ? step.bot(A).slice(-1) : step.bot(A));
    progress();
    renderReply(step, focus);
    scrollLog();
    busy = false;
  }

  async function answer(step, val) {
    if (busy) return;
    busy = true;
    reply.innerHTML = '';
    const shown = typeof val === 'object' ? `${val.email} · ${val.phone}` : val;
    const me = add(`<span>${esc(shown)}</span>${step.count === false ? '' : `<button type="button" aria-label="Cambiar la respuesta de ${esc(step.label)}">Cambiar</button>`}`, 'msg--me');
    const ch = $('button', me); if (ch) ch.addEventListener('click', () => edit(step.id));
    if (step.id === 'hola') {
      A.hola = val;
      if (val.startsWith('Antes')) {
        await botSay(['Dale. Te llevamos a «La cuenta»; cuando vuelvas, seguimos aquí mismo.']);
        $('#cuenta').scrollIntoView({ behavior: smooth(), block: 'start' });
        busy = false;
        return next(false);
      }
    } else {
      A[step.id] = val;
    }
    if (step.react) { const r = step.react(val); if (r) await botSay([r], 'msg--bot msg--react'); }
    busy = false;
    next(true);
  }

  function edit(id) {
    if (busy || sent) return;
    const step = STEPS.find(s => s.id === id);
    delete A[id];
    $$('.comanda', log).forEach(c => c.remove());
    ask(step, { edit: true });
  }

  function next(focus = true) {
    const step = STEPS.find(s => A[s.id] === undefined);
    if (step) return ask(step, { focus });
    comanda();
  }

  async function comanda() {
    busy = true;
    progress();
    $$('.comanda', log).forEach(c => c.remove());
    await botSay(['Esta es tu comanda. Revísala: puedes cambiar cualquier línea antes de enviar.']);
    const rows = STEPS.filter(s => s.count !== false && s.id !== 'contacto').map(s => [s.label, A[s.id], s.id]);
    rows.splice(1, 0, ['Correo', A.contacto.email, 'contacto'], ['WhatsApp', A.contacto.phone, 'contacto']);
    const d = document.createElement('div');
    d.className = 'comanda';
    d.innerHTML = `<h3>Comanda n.º <mark class="bw-pending">[folio]</mark></h3><p>Postulación a franquicia Buffalo Waffles</p>
      <dl>${rows.map(([l, v, id]) => `<div><dt>${esc(l)}</dt><dd>${esc(v)}<button type="button" data-edit="${id}" aria-label="Cambiar ${esc(l)}">Cambiar</button></dd></div>`).join('')}</dl>
      <div class="consent">
        <label class="check"><input type="checkbox" data-ok required><span>Acepto que Buffalo Waffles trate mis datos para evaluar mi postulación y contactarme, según la Política de Privacidad.</span></label>
        <label class="check"><input type="checkbox"><span>Quiero recibir novedades de la red de franquicias (opcional).</span></label>
        <p class="legal">Responsable de los datos: <mark class="bw-pending">[razón social y RUT]</mark>. Ejercer derechos: <mark class="bw-pending">[canal]</mark>. <mark class="bw-pending">Texto a validar por legal · Ley 21.719</mark></p>
        <p class="err" role="alert" data-ok-err hidden>Necesitamos tu autorización para revisar tu postulación.</p>
      </div>
      <button class="btn" type="button" data-send>Enviar postulación</button>`;
    log.appendChild(d); scrollLog();
    $$('[data-edit]', d).forEach(b => b.addEventListener('click', () => edit(b.dataset.edit)));
    $('[data-send]', d).addEventListener('click', () => send(d));
    $('[data-ok]', d).addEventListener('change', () => { $('[data-ok-err]', d).hidden = true; });
    reply.innerHTML = '';
    busy = false;
    $('[data-ok]', d).focus({ preventScroll: true });
  }

  async function send(d) {
    if (!$('[data-ok]', d).checked) { $('[data-ok-err]', d).hidden = false; $('[data-ok]', d).focus({ preventScroll: true }); scrollLog(); return; }
    const b = $('[data-send]', d);
    b.disabled = true; b.textContent = 'Enviando…';
    $$('button[data-edit]', d).forEach(x => { x.disabled = true; });
    await wait(900);
    sent = true;
    b.textContent = 'Enviada';
    progress();
    await botSay([`¡Buena, ${A.nombre}! Ya tenemos tu postulación.`]);
    const done = document.createElement('div');
    done.className = 'done';
    done.innerHTML = `<img src="img/mascota-shake.webp" width="789" height="1000" alt="La mascota de Buffalo Waffles celebra con dos shakes">
      <h3 tabindex="-1">Tu pedido va a la cocina.</h3>
      <p>Un ejecutivo de franquicias revisará tu comanda y te contactará en <mark class="bw-pending">[X] horas hábiles</mark>. ¿Quieres adelantar? Elige tu reunión inicial.</p>
      <div class="btns">
        <a class="btn" href="${PIPEDRIVE}" target="_blank" rel="noopener"><svg class="ico" aria-hidden="true"><use href="#i-calendar"/></svg>Elige tu reunión inicial</a>
        <a class="btn btn--ghost" href="${WA}" target="_blank" rel="noopener"><svg class="ico" aria-hidden="true"><use href="#i-chat"/></svg>Escríbenos por WhatsApp</a>
      </div>
      <p class="mock"><svg class="ico" aria-hidden="true"><use href="#i-alert"/></svg>Maqueta: no se envió ningún dato.</p>`;
    log.appendChild(done); scrollLog();
    setTimeout(() => { scrollLog(); $('h3', done).focus({ preventScroll: true }); }, 60);
  }

  function start() {
    if (started) return; started = true;
    ask(STEPS[0], { focus: false });
  }
  $('[data-restart]', chat).addEventListener('click', () => {
    A = {}; sent = false; busy = false; log.innerHTML = ''; reply.innerHTML = ''; started = false; start();
  });
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { start(); io.disconnect(); } }, { threshold: .25 });
    io.observe(chat);
  } else start();
  // Si alguien llega directo a #pedido (CTA), arrancamos al tiro
  addEventListener('hashchange', () => { if (location.hash === '#pedido') start(); });

  /* ---------- Formulario clásico (alternativa) ---------- */
  const cf = $('[data-classic-form]');
  if (cf) cf.addEventListener('submit', e => {
    e.preventDefault();
    const ok = [...cf.elements].filter(x => x.required).every(x => x.type === 'checkbox' ? x.checked : x.value.trim())
      && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cf.elements.email.value.trim());
    $('[data-classic-err]').hidden = ok;
    $('[data-classic-ok]').hidden = !ok;
    [...cf.elements].filter(x => x.required).forEach(x => x.setAttribute('aria-invalid', String(x.type === 'checkbox' ? !x.checked : !x.value.trim())));
  });
})();
