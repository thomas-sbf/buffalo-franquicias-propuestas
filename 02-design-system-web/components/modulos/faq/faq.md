# FAQ

Demo: [`faq.card.html`](faq.card.html) · CSS: incluido en `styles.css`.

**Qué es.** Las **17 preguntas y respuestas reales** del sitio actual, ahora en 4 categorías (A1 §8.13): Inversión (4) · Operación (5) · Proceso (6) · Contrato y marca (2).

**Anatomía.** `.bw-faq.bw-faq--cols` > `header.bw-section-header` (sticky en escritorio) + grupos `.bw-faq__group` > `details.bw-faq__item` > `summary.bw-faq__q` + `.bw-faq__a`.

**Reglas**
- `<details>/<summary>` nativo: sin JS, accesible, el contenido queda en el HTML (indexable).
- En la landing basta con 10–12; el resto puede ir a una página FAQ completa.
- Agregar JSON-LD `FAQPage` (hoy el sitio no tiene datos estructurados).
- Respuestas que se pueden enriquecer con datos ya publicados en el blog (equipo 2 + 2, fee, royalty): ver `contenido-real.md` §3.

**HubSpot.** Módulo `faq`: repeater de grupos (`categoria`) con repeater de preguntas (`pregunta`, `respuesta` rich text) + salida JSON-LD generada en HubL.
