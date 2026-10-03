# Sticky CTA móvil

Demo: [`sticky-cta.card.html`](sticky-cta.card.html) · CSS: incluido en `styles.css`.

**Qué es.** Barra inferior fija bajo 768 px con 2 acciones en la zona del pulgar: **WhatsApp + Agendar** (pedido del brief). En escritorio desaparece: el CTA vive en el header.

**Anatomía.** `div.bw-sticky-cta[data-bw-sticky]` con 2 `.bw-btn`. En el `<body>`: `.bw-has-sticky-cta` (reserva el alto para no tapar el footer). Respeta `env(safe-area-inset-bottom)`.

**Decisión a validar.** A1 (§4.5 y §8.3) recomienda que la barra lleve el **CTA principal (Postula)** y que WhatsApp y agenda sean apoyo, porque agendar antes de calificar compite con el formulario. Por eso la card trae la alternativa **Postula + WhatsApp**. Recomendación: probar ambas en los prototipos (A/B si hay tráfico).

**JS.** `sticky-cta.js` (opcional): oculta la barra mientras el hero está en pantalla (sus CTAs ya están visibles). Sin JS la barra está siempre visible.

**HubSpot.** Global module `cta_movil`: `cta_1`, `cta_2`, `ocultar_en_hero` (boolean).
