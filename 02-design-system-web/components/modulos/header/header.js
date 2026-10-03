/* Header — mejora opcional del menú móvil (<details>), sin dependencias.
   Sin JS el menú ya abre y cierra. Con JS: se cierra al elegir un link, con Escape y al
   hacer clic fuera, y devuelve el foco al botón. */
(function () {
  'use strict';
  function boot() {
    Array.prototype.forEach.call(document.querySelectorAll('.bw-menu'), function (menu) {
      var summary = menu.querySelector('summary');
      function close() { if (menu.open) { menu.open = false; if (summary) summary.focus(); } }
      menu.addEventListener('click', function (e) { if (e.target.closest('a')) menu.open = false; });
      menu.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
      document.addEventListener('click', function (e) { if (menu.open && !menu.contains(e.target)) menu.open = false; });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
