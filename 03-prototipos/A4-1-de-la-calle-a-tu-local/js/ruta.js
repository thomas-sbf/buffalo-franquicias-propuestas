/* A4-1 · De la calle a tu local — JS vanilla (~ sin dependencias)
   1. Progreso de la ruta (rail + barra móvil) y parada activa
   2. Fallback de animaciones scroll-driven (stickers que se pegan, kraft que se abre)
   3. Menú móvil · barra CTA móvil
   4. Ruta 5: letreros de región → ficha
   5. Arma tu Buffalo → comanda → prellenado del formulario
   6. Formulario de 3 pasos (maqueta: no envía nada) */
(function () {
  'use strict';
  var d = document, root = d.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var sda = window.CSS && CSS.supports && CSS.supports('animation-timeline: view()');
  var sdaScroll = window.CSS && CSS.supports && CSS.supports('animation-timeline: scroll()');
  if (!sda) root.classList.add('no-sda');
  function $(s, c) { return (c || d).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); }

  /* ---------- Datos de regiones (fuente: mapa publicado en el sitio actual) ---------- */
  var REGIONES = {
    XV: ['Arica y Parinacota', true], I: ['Tarapacá', true], II: ['Antofagasta', true], III: ['Atacama', false],
    IV: ['Coquimbo', false], V: ['Valparaíso', true], RM: ['Metropolitana de Santiago', true], VI: ["O'Higgins", true],
    VII: ['Maule', true], XVI: ['Ñuble', false], VIII: ['Biobío', true], IX: ['La Araucanía', true],
    XIV: ['Los Ríos', true], X: ['Los Lagos', false], XI: ['Aysén', false], XII: ['Magallanes', true]
  };
  var DATO_RED = { I: 'Eduardo y Alex son franquiciados en Mallplaza Iquique.' };

  /* ---------- 1. Progreso de la ruta ---------- */
  var fills = $$('.r-rail__fill, .r-progreso i');
  if (!sdaScroll || reduce) {
    var ticking = false;
    var setP = function () {
      var max = root.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      fills.forEach(function (el) { el.style.setProperty('--p', p.toFixed(4)); });
      ticking = false;
    };
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(setP); } }, { passive: true });
    setP();
  } else {
    // Mejora progresiva: scroll-driven nativo (sin JS por frame)
    var css = d.createElement('style');
    css.textContent = '@keyframes bw-fill-y{from{transform:scaleY(0)}to{transform:scaleY(1)}}@keyframes bw-fill-x{from{transform:scaleX(0)}to{transform:scaleX(1)}}' +
      '.r-rail__fill{animation:bw-fill-y linear both;animation-timeline:scroll(root block)}' +
      '.r-progreso i{animation:bw-fill-x linear both;animation-timeline:scroll(root block)}';
    d.head.appendChild(css);
  }

  // Parada activa: rail (aria-current) + marcador "estás aquí"
  var railLinks = $$('.r-rail a');
  var marker = $('.r-rail__yo');
  function marcar(id) {
    railLinks.forEach(function (a) {
      var on = a.getAttribute('data-ir') === id;
      if (on) {
        a.setAttribute('aria-current', 'step');
        if (marker) {
          var top = a.offsetTop + a.offsetHeight / 2 - 25;
          marker.style.setProperty('--y', top + 'px');
        }
      } else a.removeAttribute('aria-current');
    });
  }
  var paradas = $$('[data-parada]');
  if ('IntersectionObserver' in window) {
    var visibles = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visibles[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0; });
      // la parada activa es la primera (en orden del documento) que cruza la franja central
      for (var i = 0; i < paradas.length; i++) { if (visibles[paradas[i].id] > 0) { marcar(paradas[i].id); break; } }
    }, { rootMargin: '-45% 0px -50% 0px', threshold: [0, .01] });
    paradas.forEach(function (s) { io.observe(s); });
  }
  marcar('top');
  window.addEventListener('resize', function () { var a = $('.r-rail a[aria-current]'); if (a) marcar(a.getAttribute('data-ir')); });

  /* ---------- 2. Fallback de stickers y del envoltorio ---------- */
  if (!sda && !reduce && 'IntersectionObserver' in window) {
    var ioStk = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-pegado'); ioStk.unobserve(e.target); } });
    }, { threshold: .35 });
    $$('.stk:not(.stk--carga)').forEach(function (el) { ioStk.observe(el); });
    var ioPaq = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-abierto'); ioPaq.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -35% 0px', threshold: .05 });
    $$('.paquete').forEach(function (el) { ioPaq.observe(el); });
  }
  // La línea central de la Ruta 5 avanza solo mientras se ve (y nunca con reduced-motion)
  var via = $('.ruta5__via');
  if (via && !reduce && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (en) { via.classList.toggle('is-viva', en[0].isIntersecting); }).observe(via);
  }

  /* ---------- 3. Menú móvil y barra CTA ---------- */
  var mBtn = $('.r-menu-btn'), drawer = $('#drawer');
  function cerrarMenu(volver) {
    drawer.hidden = true; mBtn.setAttribute('aria-expanded', 'false');
    d.body.style.overflow = ''; if (volver) mBtn.focus();
  }
  if (mBtn && drawer) {
    mBtn.addEventListener('click', function () {
      var abrir = drawer.hidden;
      if (abrir) { drawer.hidden = false; mBtn.setAttribute('aria-expanded', 'true'); d.body.style.overflow = 'hidden'; var f = $('a', drawer); if (f) f.focus(); }
      else cerrarMenu(true);
    });
    drawer.addEventListener('click', function (e) { if (e.target.closest('a')) cerrarMenu(false); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !drawer.hidden) cerrarMenu(true); });
    window.addEventListener('resize', function () { if (window.innerWidth >= 1200 && !drawer.hidden) cerrarMenu(false); });
  }
  var barra = $('#barra'), hero = $('#top'), post = $('#postula');
  if (barra && 'IntersectionObserver' in window) {
    var estado = { hero: true, post: false };
    var pinta = function () { barra.classList.toggle('is-oculta', estado.hero || estado.post); };
    new IntersectionObserver(function (en) { estado.hero = en[0].isIntersecting; pinta(); }, { threshold: .35 }).observe(hero);
    new IntersectionObserver(function (en) { estado.post = en[0].isIntersecting; pinta(); }, { rootMargin: '0px 0px -30% 0px' }).observe($('#form-wrap'));
  }

  /* ---------- 4. Ruta 5: letreros → ficha ---------- */
  var salidas = $$('#salidas button');
  var fVacia = $('#ficha-vacia'), fReg = $('#ficha-region');
  var regionElegida = null;
  salidas.forEach(function (b) {
    b.addEventListener('click', function () {
      var cod = b.getAttribute('data-region'), r = REGIONES[cod];
      salidas.forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
      regionElegida = cod;
      fVacia.hidden = true; fReg.hidden = false;
      $('#ficha-nombre').textContent = r[0] + ' (' + cod + ')';
      var est = $('#ficha-estado');
      est.className = 'estado ' + (r[1] ? 'estado--si' : 'estado--no');
      est.textContent = r[1] ? 'Hay Buffalo en esta región' : 'Sin local en el mapa publicado';
      $('#ficha-dato').textContent = DATO_RED[cod] || (r[1] ? 'Hay al menos un local en la región según el mapa publicado.' : 'Todavía no aparece un local en esta región. Puedes postular igual: evaluamos cada zona.');
      $('#ficha-cta').textContent = 'Quiero abrir en ' + r[0];
      if (window.innerWidth < 980) fReg.closest('.ficha').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' });
    });
  });
  var fCta = $('#ficha-cta');
  if (fCta) fCta.addEventListener('click', function () {
    if (!regionElegida) return;
    var sel = $('#a-region'); sel.value = regionElegida; sel.dispatchEvent(new Event('change', { bubbles: true }));
    $('#arma').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    setTimeout(function () { sel.focus({ preventScroll: true }); }, reduce ? 0 : 600);
  });

  /* ---------- 5. Arma tu Buffalo → comanda ---------- */
  var armaForm = $('#arma-form');
  var REQ = ['formato', 'region', 'rol', 'plazo'];
  var elec = {};
  function etiqueta(k, v) {
    if (k === 'region') return REGIONES[v] ? REGIONES[v][0] : v;
    return v;
  }
  function pintaComanda(changed) {
    var items = $$('#comanda-items li');
    items.forEach(function (li) {
      var k = li.getAttribute('data-k'), v = elec[k], b = $('b', li);
      if (v) {
        var txt = etiqueta(k, v);
        if (k === 'formato') txt = '1 × Buffalo · ' + v;
        if (k === 'region') {
          var com = ($('#a-comuna').value || '').trim();
          txt = (com ? com + ', ' : '') + etiqueta(k, v) + (REGIONES[v] ? (REGIONES[v][1] ? ' · ya hay Buffalo en la región' : ' · región sin local hoy') : '');
        }
        if (k === 'rol') txt = v === 'Lo opero yo' ? 'Lo operas tú' : v;
        b.textContent = txt; li.classList.remove('vacio');
        if (changed === k) { li.classList.remove('is-nuevo'); void li.offsetWidth; li.classList.add('is-nuevo'); }
      } else {
        li.classList.add('vacio');
      }
    });
    var hechos = REQ.filter(function (k) { return !!elec[k]; }).length;
    var ticket = $('#ticket');
    ticket.style.setProperty('--listo', (hechos / REQ.length).toFixed(2));
    var faltan = REQ.length - hechos;
    $('#comanda-estado').textContent = faltan ? ('Faltan ' + faltan + (faltan === 1 ? ' elección.' : ' elecciones.')) : 'Comanda completa. Lista para enviar.';
    var res = $('#ticket-res');
    if (res) res.textContent = faltan ? ('Faltan ' + faltan + (faltan === 1 ? ' elección' : ' elecciones') + (hechos ? ' · ' + hechos + ' de ' + REQ.length + ' listas' : '')) : 'Lista: ábrela y envíala';
    var lista = faltan === 0;
    if (lista && !ticket.classList.contains('is-lista')) { $('#talon').hidden = false; ticket.classList.add('is-lista'); }
    if (!lista) { ticket.classList.remove('is-lista'); $('#talon').hidden = true; }
    $$('.paso', armaForm).forEach(function (fs) {
      var k = fs.getAttribute('data-paso');
      fs.classList.toggle('is-hecho', k === 'donde' ? !!elec.region : !!elec[k]);
    });
  }
  function avisoRegion() {
    var v = elec.region, box = $('#a-aviso');
    if (!v) { box.hidden = true; return; }
    box.hidden = false;
    $('span', box).textContent = REGIONES[v][1]
      ? 'Ya hay Buffalo en ' + REGIONES[v][0] + ' (según el mapa publicado). La disponibilidad por comuna se revisa en la evaluación.'
      : REGIONES[v][0] + ' todavía no aparece en el mapa publicado. Evaluamos cada zona según su potencial comercial.';
  }
  if (armaForm) {
    armaForm.addEventListener('submit', function (e) { e.preventDefault(); });
    armaForm.addEventListener('change', function (e) {
      var t = e.target; if (!t.name) return;
      if (t.name === 'comuna') { pintaComanda('region'); return; }
      elec[t.name] = t.value || undefined;
      if (t.name === 'region') avisoRegion();
      pintaComanda(t.name);
    });
    $('#a-comuna').addEventListener('input', function () { if (elec.region) pintaComanda(); });
    // Si el navegador restauró el formulario (volver atrás / recargar), sincronizamos la comanda
    $$('input:checked', armaForm).forEach(function (i) { elec[i.name] = i.value; });
    if ($('#a-region').value) { elec.region = $('#a-region').value; avisoRegion(); }
    if (Object.keys(elec).length) pintaComanda();
  }
  var tToggle = $('.ticket__toggle');
  function abrirTicket(on) {
    var t = $('#ticket'); t.classList.toggle('is-abierto', on);
    tToggle.setAttribute('aria-expanded', on ? 'true' : 'false');
    $('.ticket__ver', tToggle).textContent = on ? 'Cerrar' : 'Ver';
    // si la comanda ya está lista, se abre mostrando el talón con «Enviar mi comanda»
    var cuerpo = $('#ticket-cuerpo');
    if (on && t.classList.contains('is-lista') && cuerpo) cuerpo.scrollTop = cuerpo.scrollHeight;
  }
  if (tToggle) tToggle.addEventListener('click', function () { abrirTicket(!$('#ticket').classList.contains('is-abierto')); });
  var enviar = $('#enviar-comanda');
  if (enviar) enviar.addEventListener('click', function () {
    // Prellenar el formulario con la comanda
    var f = $('#postulacion');
    if (elec.capital) f.capital.value = elec.capital;
    $$('input[name="plazo"]', f).forEach(function (r) { r.checked = r.value === elec.plazo; });
    $$('input[name="rol"]', f).forEach(function (r) { r.checked = r.value === elec.rol; });
    if (elec.region) f.region.value = elec.region;
    var com = ($('#a-comuna').value || '').trim(); if (com) f.comuna.value = com;
    $('#f-formato').value = elec.formato || '';
    var ul = $('#adjunto-lista'); ul.innerHTML = '';
    [['Formato', elec.formato], ['Dónde', (com ? com + ', ' : '') + (REGIONES[elec.region] || [''])[0]], ['Lo llevas', elec.rol], ['Partida', elec.plazo], ['Capital', elec.capital || 'Sin indicar']].forEach(function (p) {
      var li = d.createElement('li'); li.innerHTML = '<strong></strong> '; li.firstChild.textContent = p[0] + ':'; li.appendChild(d.createTextNode(p[1])); ul.appendChild(li);
    });
    $('#adjunto').classList.add('is-on');
    if (tToggle) abrirTicket(false);
    $('#postula').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    setTimeout(function () { var l = $('[data-f="1"] legend'); if (l) l.focus({ preventScroll: true }); }, reduce ? 0 : 650);
  });

  /* ---------- Notas al pie (details): abiertas en escritorio; se abren al seguir un superíndice ---------- */
  var notas = $('#notas');
  if (notas) {
    if (window.matchMedia('(min-width: 760px)').matches) notas.open = true;
    d.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#nota"]');
      if (a) notas.open = true;
    });
    if (/^#nota/.test(location.hash)) notas.open = true;
  }

  /* ---------- 6. Formulario de 3 pasos (maqueta) ---------- */
  var form = $('#postulacion');
  if (!form) return;
  var paso = 1, TOTAL = 3;
  var bSig = $('#f-sig'), bAtras = $('#f-atras'), bEnviar = $('#f-enviar');
  function setError(campo, on) {
    var wrap = campo.closest('.campo') || campo.closest('.grupo');
    if (!wrap) return;
    wrap.classList.toggle('is-error', on);
    if (campo.setAttribute) campo.setAttribute('aria-invalid', on ? 'true' : 'false');
  }
  function valida(n) {
    var fs = $('[data-f="' + n + '"]', form), ok = true, primero = null;
    $$('input[required], select[required], textarea[required]', fs).forEach(function (c) {
      var bien;
      if (c.type === 'radio') {
        bien = !!$('input[name="' + c.name + '"]:checked', form);
        var g = c.closest('.grupo'); if (g) g.classList.toggle('is-error', !bien);
      } else if (c.type === 'checkbox') { bien = c.checked; setError(c, !bien); }
      else if (c.type === 'email') { bien = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c.value.trim()); setError(c, !bien); }
      else if (c.type === 'tel') { bien = c.value.replace(/\D/g, '').replace(/^56/, '').length === 9; setError(c, !bien); }
      else { bien = c.value.trim() !== ''; setError(c, !bien); }
      if (!bien) { ok = false; if (!primero) primero = c; }
    });
    if (primero) primero.focus();
    return ok;
  }
  function ir(n) {
    paso = n;
    $$('.form__paso', form).forEach(function (fs) { fs.hidden = +fs.getAttribute('data-f') !== n; });
    $('#f-prog').textContent = 'Paso ' + n + ' de ' + TOTAL;
    $('.form__prog i', form).style.setProperty('--f', (n / TOTAL).toFixed(4));
    bAtras.hidden = n === 1; bSig.hidden = n === TOTAL; bEnviar.hidden = n !== TOTAL;
    var l = $('[data-f="' + n + '"] legend', form); if (l) l.focus();
  }
  function conTransicion(fn) {
    // View Transitions como mejora progresiva; si se aborta (pestaña oculta, otra en curso) no ensucia la consola
    if (d.startViewTransition && !reduce && d.visibilityState === 'visible') {
      var t = d.startViewTransition(fn);
      [t.ready, t.finished, t.updateCallbackDone].forEach(function (p) { if (p && p.catch) p.catch(function () {}); });
    } else fn();
  }
  bSig.addEventListener('click', function () { if (valida(paso)) conTransicion(function () { ir(paso + 1); }); });
  bAtras.addEventListener('click', function () { conTransicion(function () { ir(paso - 1); }); });
  form.addEventListener('input', function (e) { var w = e.target.closest('.is-error'); if (w) w.classList.remove('is-error'); });
  form.addEventListener('change', function (e) { var w = e.target.closest('.is-error'); if (w) w.classList.remove('is-error'); });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!valida(TOTAL)) return;
    bEnviar.disabled = true; bEnviar.textContent = 'Enviando…';
    setTimeout(function () {   // MAQUETA: no se envía nada
      conTransicion(function () {
        form.hidden = true;
        var g = $('#gracias'); g.hidden = false; g.focus();
      });
    }, 900);
  });
})();
