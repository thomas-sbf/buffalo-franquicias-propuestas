/* A4-2 · La Crew — carnet.html: test ¿Eres Buffalo? → carnet → postulación (maqueta).
   Cada respuesta pega un sticker en el carnet y llena un campo. Al final el carnet
   se "emite": timbre EN REVISIÓN y vuelta al dorso con el timbre 1 de 7. */
(function () {
  'use strict';
  var d = document;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $(s, c) { return (c || d).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || d).querySelectorAll(s)); }
  var REG = {
    XV: ['Arica y Parinacota', 1], I: ['Tarapacá', 1], II: ['Antofagasta', 1], III: ['Atacama', 0], IV: ['Coquimbo', 0],
    V: ['Valparaíso', 1], RM: ['Metropolitana de Santiago', 1], VI: ["O'Higgins", 1], VII: ['Maule', 1], XVI: ['Ñuble', 0],
    VIII: ['Biobío', 1], IX: ['La Araucanía', 1], XIV: ['Los Ríos', 1], X: ['Los Lagos', 0], XI: ['Aysén', 0], XII: ['Magallanes', 1]
  };
  var form = $('#test'); if (!form) return;
  var TOTAL = 7, q = 1;
  var bSig = $('#q-sig'), bAtras = $('#q-atras'), bEmitir = $('#q-emitir');
  var zona = $('#zona');
  // posiciones de los stickers en el carnet (uno por pregunta con sticker)
  var POS = { rol: ['6%', '8%', -10], experiencia: ['24%', '14%', 8], estandar: ['42%', '6%', -6], plazo: ['60%', '12%', 10], region: ['78%', '6%', -8] };

  // Región prellenada desde el álbum del fanzine (?region=XV)
  try {
    var pr = new URLSearchParams(location.search).get('region');
    if (pr && REG[pr]) { $('#t-region').value = pr; pintaRegion(); }
  } catch (e) { /* sin URLSearchParams: no pasa nada */ }

  function fs(n) { return $('[data-q="' + n + '"]', form); }
  function respondida(n) {
    var f = fs(n);
    if (n === 6) return !!$('#t-region').value && !!$('#t-comuna').value.trim();
    if (n === 7) return true; // se valida al emitir
    return !!$('input:checked', f);
  }
  function actualizaNav() {
    bAtras.hidden = q === 1;
    bSig.hidden = q === TOTAL; bEmitir.hidden = q !== TOTAL;
    bSig.disabled = !respondida(q);
    $('#q-cont').textContent = q < TOTAL ? 'Pregunta ' + q + ' de ' + (TOTAL - 1) : 'Último paso';
    $$('.q-prog li').forEach(function (li, i) {
      li.className = i + 1 < q ? 'is-hecho' : (i + 1 === q ? 'is-actual' : '');
    });
  }
  function ir(n) {
    var hacer = function () {
      $$('.q-paso', form).forEach(function (f) { f.hidden = +f.getAttribute('data-q') !== n; });
      q = n; actualizaNav();
      var l = $('legend', fs(n)); if (l) l.focus({ preventScroll: true });
    };
    if (d.startViewTransition && !reduce && d.visibilityState === 'visible') {
      var t = d.startViewTransition(hacer);
      [t.ready, t.finished, t.updateCallbackDone].forEach(function (p) { if (p && p.catch) p.catch(function () {}); });
    } else hacer();
    // en móvil el carnet está arriba: volvemos a mostrarlo para ver el sticker nuevo
    if (window.innerWidth < 1000) {
      // deja a la vista la zona de stickers del carnet y la pregunta nueva
      var y = $('.q-panel').getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    }
  }

  function campo(c, txt) {
    var dd = $('[data-c="' + c + '"]');
    if (!dd) return;
    dd.textContent = txt || '—';
    dd.classList.toggle('vacio', !txt);
  }
  function pegar(clave, src) {
    var vieja = $('[data-k="' + clave + '"]', zona);
    if (vieja) vieja.remove();
    if (!src) return;
    var p = POS[clave] || ['50%', '10%', 0];
    var img = d.createElement('img');
    img.className = 'stk'; img.alt = ''; img.src = 'assets/stickers/' + src + '.webp';
    img.setAttribute('data-k', clave);
    img.style.cssText = '--w:clamp(48px,5vw,64px);--r:' + p[2] + 'deg;left:' + p[0] + ';top:' + p[1];
    zona.appendChild(img); zona.classList.add('tiene');
  }

  form.addEventListener('change', function (e) {
    var t = e.target;
    if (t.type === 'radio') {
      var f = t.closest('.q-paso');
      var esOjo = t.hasAttribute('data-ojo');
      var dato = $('[data-dato]', f), ojo = $('[data-dato-ojo]', f);
      if (dato) dato.hidden = esOjo && !!ojo;
      if (ojo) ojo.hidden = !esOjo;
      var txt = t.getAttribute('data-perfil') || t.value;
      campo(t.name, txt);
      pegar(t.name, t.getAttribute('data-stk'));
    }
    if (t.id === 't-region') pintaRegion();
    limpiaError(t);
    actualizaNav();
  });
  form.addEventListener('input', function (e) {
    if (e.target.id === 't-comuna') pintaRegion();
    if (e.target.id === 't-nombre') campo('nombre', e.target.value.trim());
    limpiaError(e.target); actualizaNav();
  });
  function pintaRegion() {
    var v = $('#t-region').value, com = $('#t-comuna').value.trim(), box = $('#t-region-dato');
    if (!v) { campo('region', ''); box.hidden = true; pegar('region', null); return; }
    campo('region', (com ? com + ', ' : '') + REG[v][0]);
    box.hidden = false;
    box.textContent = REG[v][1]
      ? 'Ya hay Buffalo en ' + REG[v][0] + ' según el mapa publicado. La disponibilidad por comuna se revisa en la evaluación.'
      : REG[v][0] + ' todavía no aparece en el mapa publicado. Evaluamos cada zona según su potencial comercial.';
    pegar('region', REG[v][1] ? 'rico-sexy-negro' : 'bici');
  }
  function limpiaError(t) { var w = t.closest && t.closest('.is-error'); if (w) w.classList.remove('is-error'); }

  bSig.addEventListener('click', function () {
    if (q === 6 && !validar(6)) return;
    if (respondida(q)) ir(q + 1);
  });
  bAtras.addEventListener('click', function () { ir(q - 1); });

  function validar(n) {
    var f = fs(n), ok = true, primero = null;
    $$('input[required], select[required]', f).forEach(function (c) {
      var bien;
      if (c.type === 'checkbox') bien = c.checked;
      else if (c.type === 'email') bien = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c.value.trim());
      else if (c.type === 'tel') bien = c.value.replace(/\D/g, '').replace(/^56/, '').length === 9;
      else bien = c.value.trim() !== '';
      var w = c.closest('.campo'); if (w) w.classList.toggle('is-error', !bien);
      c.setAttribute('aria-invalid', bien ? 'false' : 'true');
      if (!bien) { ok = false; if (!primero) primero = c; }
    });
    if (primero) primero.focus();
    return ok;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validar(7)) return;
    bEmitir.disabled = true; bEmitir.textContent = 'Emitiendo…';
    setTimeout(function () { // MAQUETA: no se envía nada
      var rol = $('input[name="rol"]:checked', form), est = $('input[name="estandar"]:checked', form), cap = $('input[name="capital"]:checked', form);
      var perfil = rol ? rol.getAttribute('data-perfil') : 'Explorador/a';
      var nombre = $('#t-nombre').value.trim();
      $('#g-perfil').textContent = 'Perfil: ' + perfil;
      $('#g-titulo').textContent = '¡Buena, ' + nombre + '! Tu carnet quedó en revisión.';
      var ul = $('#g-conversar'); ul.innerHTML = '';
      var temas = [];
      if (est && est.hasAttribute('data-ojo')) temas.push('Conversemos el estándar: seguirlo es parte del trato.');
      if (cap && cap.hasAttribute('data-ojo')) temas.push('Conversemos el capital: la inversión total parte en $40.000.000.');
      if (!temas.length) temas.push('Partimos la conversación desde tu carnet.');
      temas.forEach(function (t) { var li = d.createElement('li'); li.textContent = t; ul.appendChild(li); });
      // Timbre "en revisión" + vuelta del carnet al dorso
      var sello = d.createElement('p'); sello.className = 'carnet__revision'; sello.textContent = 'En revisión';
      $('#carnet-frente').appendChild(sello);
      form.hidden = true; $('.q-prog').hidden = true;
      var g = $('#gracias'); g.hidden = false; g.focus();
    }, 800);
  });

  var gv = $('#g-voltear');
  if (gv) gv.addEventListener('click', function () {
    var v = !$('#vivo').classList.contains('is-volteado');
    $('#vivo').classList.toggle('is-volteado', v);
    gv.setAttribute('aria-pressed', v ? 'true' : 'false');
    gv.textContent = v ? 'Ver el frente' : 'Dar vuelta tu carnet';
    var dorso = $('.carnet--dorso'); dorso.setAttribute('aria-hidden', v ? 'false' : 'true');
    if (window.innerWidth < 1000) $('#vivo').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  });
  actualizaNav();
})();
