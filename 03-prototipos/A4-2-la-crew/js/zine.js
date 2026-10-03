/* A4-2 · La Crew — fanzine (index.html). JS vanilla, sin dependencias.
   1. Índice (diálogo) · folio de página
   2. Cartas que se voltean (inert en la cara oculta)
   3. Álbum de láminas (sticker-board) → ficha de región → carnet.html?region=
   4. Fallback de animaciones scroll-driven (láminas que se pegan, timbres del carnet) */
(function () {
  'use strict';
  var d = document, root = d.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var sda = window.CSS && CSS.supports && CSS.supports('animation-timeline: view()');
  root.classList.add(sda ? 'sda' : 'no-sda');
  function $(s, c) { return (c || d).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); }
  var hasIO = 'IntersectionObserver' in window;

  /* ---------- 1. Índice ---------- */
  var ind = $('#indice'), abrir = $('#abrir-indice'), cerrar = $('#cerrar-indice');
  function cerrarIndice(volver) { ind.hidden = true; abrir.setAttribute('aria-expanded', 'false'); d.body.style.overflow = ''; if (volver) abrir.focus(); }
  if (ind && abrir) {
    abrir.addEventListener('click', function () { ind.hidden = false; abrir.setAttribute('aria-expanded', 'true'); d.body.style.overflow = 'hidden'; cerrar.focus(); });
    cerrar.addEventListener('click', function () { cerrarIndice(true); });
    ind.addEventListener('click', function (e) { if (e.target.closest('a')) cerrarIndice(false); });
    d.addEventListener('keydown', function (e) {
      if (ind.hidden) return;
      if (e.key === 'Escape') { cerrarIndice(true); return; }
      if (e.key === 'Tab') { // trampa de foco simple
        var f = $$('a,button', ind), first = f[0], last = f[f.length - 1];
        if (e.shiftKey && d.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && d.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }
  // Folio: número de página según la sección visible
  var folio = $('#folio-n');
  if (folio && hasIO) {
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) folio.textContent = e.target.getAttribute('data-folio'); });
    }, { rootMargin: '-50% 0px -49% 0px' });
    $$('[data-folio]').forEach(function (s) { io.observe(s); });
  }

  /* ---------- 2. Cartas ---------- */
  $$('.carta').forEach(function (c) {
    var btn = $('.carta__voltear', c), frente = $('.frente', c), dorso = $('.cara--dorso', c);
    if (!btn || !dorso) return;
    dorso.inert = true; dorso.setAttribute('aria-hidden', 'true');
    function voltear() {
      var v = !c.classList.contains('is-volteada');
      c.classList.toggle('is-volteada', v);
      btn.setAttribute('aria-pressed', v ? 'true' : 'false');
      $('span', btn).textContent = v ? 'Ver frente' : 'Dar vuelta';
      dorso.inert = !v; frente.inert = v;
      dorso.setAttribute('aria-hidden', v ? 'false' : 'true'); frente.setAttribute('aria-hidden', v ? 'true' : 'false');
    }
    btn.addEventListener('click', voltear);
    c.addEventListener('click', function (e) { if (e.target.closest('a, button')) return; voltear(); });
  });

  /* ---------- 3. Álbum de láminas ---------- */
  var REG = [ // norte → sur · presencia según el mapa publicado en el sitio actual
    ['XV', 'Arica y Parinacota', 1], ['I', 'Tarapacá', 1], ['II', 'Antofagasta', 1], ['III', 'Atacama', 0],
    ['IV', 'Coquimbo', 0], ['V', 'Valparaíso', 1], ['RM', 'Metropolitana', 1], ['VI', "O'Higgins", 1],
    ['VII', 'Maule', 1], ['XVI', 'Ñuble', 0], ['VIII', 'Biobío', 1], ['IX', 'La Araucanía', 1],
    ['XIV', 'Los Ríos', 1], ['X', 'Los Lagos', 0], ['XI', 'Aysén', 0], ['XII', 'Magallanes', 1]
  ];
  var DOODLES = ['waffle-amarillo', 'frutilla-roja', 'bw-amarillo', 'corazon-rojo', 'queso-amarillo', 'iwant-magenta', 'shake-rosado', 'labios-badge', 'waffles-ricos-circulo', 'rico-sexy-blanco', 'cuernos-amarillo'];
  var ROT = [-3, 2, -1.5, 3, -2.5, 1.5, -2, 2.5, -1, 3, -3.5];
  var lam = $('#laminas');
  if (lam) {
    var k = 0, html = '';
    REG.forEach(function (r, i) {
      var n = ('0' + (i + 1)).slice(-2);
      var lbl = r[2] ? (r[1] + ': lámina pegada, hay Buffalo') : (r[1] + ': lámina que falta, sin local en el mapa');
      html += '<li class="lamina"><button type="button" aria-pressed="false" data-i="' + i + '" aria-label="' + lbl + '">' +
        '<span class="lamina__hueco" aria-hidden="true"><small>N.º ' + n + ' · ' + r[0] + '</small><span>' + r[1] + '</span><em>' + (r[2] ? '' : 'Falta') + '</em></span>' +
        (r[2] ? '<span class="lamina__st" aria-hidden="true" style="--i:' + k + ';--r:' + ROT[k % ROT.length] + 'deg"><small>N.º ' + n + ' · ' + r[0] + '</small>' +
          '<img src="assets/stickers/' + DOODLES[k % DOODLES.length] + '.webp" alt="" width="440" height="440" loading="lazy"><span>' + r[1] + '</span><i>Hay Buffalo</i></span>' : '') +
        '</button></li>';
      if (r[2]) k++;
    });
    lam.innerHTML = html;
    var info = { t: $('#info-t'), p: $('#info-p'), cta: $('#info-cta') };
    lam.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      var r = REG[+b.getAttribute('data-i')];
      $$('button', lam).forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
      info.t.textContent = r[1] + (r[2] ? ': lámina pegada' : ': te falta esta');
      info.p.innerHTML = r[2]
        ? 'Hay al menos un local Buffalo en ' + r[1] + ' según el mapa publicado. ' + (r[0] === 'I' ? 'Ahí están Eduardo y Alex, en Mallplaza Iquique. ' : '') + 'Locales y zonas disponibles: <mark class="bw-pending">[a confirmar con Buffalo]</mark>.'
        : r[1] + ' todavía no aparece en el mapa publicado. Evaluamos cada zona según su potencial comercial y la cobertura de la marca. Disponibilidad: <mark class="bw-pending">[a confirmar]</mark>.';
      info.cta.textContent = r[2] ? 'Postula en ' + r[1] : 'Pega tú esta lámina';
      info.cta.href = 'carnet.html?region=' + encodeURIComponent(r[0]);
    });
  }

  /* ---------- Correo de lectores (móvil): ver las 10 o solo 4 ---------- */
  var mas = $('.correo__mas'), correo = $('#correo-lista');
  if (mas && correo) mas.addEventListener('click', function () {
    var abierto = !correo.classList.contains('is-abierto');
    correo.classList.toggle('is-abierto', abierto);
    mas.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    mas.textContent = abierto ? 'Ver menos preguntas' : 'Ver las 10 preguntas';
    if (abierto) { var q = $$('.carta-lector', correo)[4]; if (q) $('summary', q).focus(); }
  });

  /* ---------- Notas al pie (details): abiertas en escritorio; se abren al seguir un superíndice ---------- */
  var notas = $('#notas');
  if (notas) {
    if (window.matchMedia('(min-width: 760px)').matches) notas.open = true;
    d.addEventListener('click', function (e) { if (e.target.closest('a[href^="#nota"]')) notas.open = true; });
    if (/^#nota/.test(location.hash)) notas.open = true;
  }

  /* ---------- 4. Fallbacks scroll-driven ---------- */
  if (!sda && !reduce && hasIO) {
    var album = $('#album-libro');
    if (album) new IntersectionObserver(function (en, o) { if (en[0].isIntersecting) { album.classList.add('is-pegado'); o.disconnect(); } }, { threshold: .25 }).observe(album);
    var timbres = $$('#timbres .timbre');
    var ioT = new IntersectionObserver(function (en) {
      en.forEach(function (e) {
        if (!e.isIntersecting) return;
        var t = +e.target.getAttribute('data-t');
        timbres.forEach(function (s, i) { if (i < t) s.classList.add('is-timbrado'); });
      });
    }, { rootMargin: '-40% 0px -45% 0px' });
    $$('#pasos li[data-t]').forEach(function (li) { ioT.observe(li); });
  }
})();
