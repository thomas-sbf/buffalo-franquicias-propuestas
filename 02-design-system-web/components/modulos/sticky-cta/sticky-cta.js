/* Sticky CTA móvil — mejora opcional, sin dependencias.
   Sin JS la barra está siempre visible (bajo 768 px). Con JS se oculta mientras el hero
   (.bw-hero) está en pantalla, para no duplicar sus CTAs, y aparece al pasarlo. */
(function () {
  'use strict';
  function boot() {
    var bar = document.querySelector('[data-bw-sticky]');
    var hero = document.querySelector('.bw-hero');
    if (!bar || !hero || !('IntersectionObserver' in window)) return;
    new IntersectionObserver(function (entries) {
      bar.classList.toggle('is-hidden', entries[0].isIntersecting);
    }, { threshold: 0.15 }).observe(hero);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
