/* LeadForm multipaso — mejora progresiva, sin dependencias (~2 KB).
   Sin JS: los 3 pasos se ven apilados y el formulario funciona igual.
   Con JS: un paso a la vez, validación nativa por paso, progreso anunciado (aria-live) y foco
   en el título del paso. En HubSpot se usa el formulario multipágina nativo; este script es la
   referencia de comportamiento para los prototipos.
   data-bw-demo en .bw-leadform: el envío NO sale a ningún servidor (solo muestra la pantalla de gracias). */
(function () {
  'use strict';
  function init(root) {
    var form = root.querySelector('form');
    var steps = Array.prototype.slice.call(root.querySelectorAll('[data-bw-step]'));
    if (!form || steps.length < 2) return;
    var prog = Array.prototype.slice.call(root.querySelectorAll('.bw-progress__step'));
    var count = root.querySelector('[data-bw-count]');
    var prev = root.querySelector('[data-bw-prev]');
    var next = root.querySelector('[data-bw-next]');
    var submit = root.querySelector('[data-bw-submit]');
    var done = root.querySelector('[data-bw-done]');
    var i = 0;
    root.classList.add('is-enhanced');

    function show(n, focus) {
      i = n;
      steps.forEach(function (s, k) { s.classList.toggle('is-active', k === n); });
      prog.forEach(function (p, k) {
        p.classList.toggle('is-done', k < n);
        if (k === n) p.setAttribute('aria-current', 'step'); else p.removeAttribute('aria-current');
      });
      if (count) count.textContent = 'Paso ' + (n + 1) + ' de ' + steps.length;
      if (prev) prev.hidden = n === 0;
      if (next) next.hidden = n === steps.length - 1;
      if (submit) submit.hidden = n !== steps.length - 1;
      if (focus) { var lg = steps[n].querySelector('legend'); if (lg) lg.focus(); }
    }

    function validate(step) {
      var ok = true, first = null;
      var fields = step.querySelectorAll('input, select, textarea');
      var seenRadio = {};
      Array.prototype.forEach.call(fields, function (f) {
        if (f.type === 'radio') {
          if (seenRadio[f.name]) return; seenRadio[f.name] = true;
        }
        var valid = f.checkValidity();
        var wrap = f.closest('.bw-field, .bw-choices');
        if (wrap) wrap.classList.toggle('is-invalid', !valid);
        if (f.type !== 'radio') f.setAttribute('aria-invalid', valid ? 'false' : 'true');
        if (!valid) { ok = false; if (!first) first = f; }
      });
      if (first) first.focus();
      return ok;
    }

    // limpiar el error apenas el usuario corrige
    function clearErr(e) {
      var f = e.target, wrap = f.closest && f.closest('.bw-field, .bw-choices');
      if (wrap && wrap.classList.contains('is-invalid') && f.checkValidity()) {
        wrap.classList.remove('is-invalid'); if (f.type !== 'radio') f.setAttribute('aria-invalid', 'false');
      }
    }
    form.addEventListener('input', clearErr);
    form.addEventListener('change', clearErr);
    if (next) next.addEventListener('click', function () { if (validate(steps[i])) show(i + 1, true); });
    if (prev) prev.addEventListener('click', function () { show(i - 1, true); });
    form.addEventListener('submit', function (e) {
      if (!validate(steps[i])) { e.preventDefault(); return; }
      if (root.hasAttribute('data-bw-demo')) {
        e.preventDefault();
        root.classList.add('is-done');
        if (done) done.focus();
      }
    });
    show(0, false);
  }
  function boot() { Array.prototype.forEach.call(document.querySelectorAll('[data-bw-leadform]'), init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
