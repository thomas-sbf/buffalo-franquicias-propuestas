# SectionHeader

Demo: [`section-header.card.html`](section-header.card.html) · CSS: incluido en `styles.css`.

**Qué es.** La firma tipográfica: kicker en script rotado + titular Mostin Black UC + bajada en Montserrat. Adapta `SectionHeader.jsx` (ahora con tamaño fluido y bajada).

**Clases.** `.bw-section-header` (`--center`, `--lg`) > `.bw-kicker` · `.bw-section-header__title` (h2) · `.bw-section-header__lead`.

**Reglas**
- Un `<h2>` por sección; el único `<h1>` es el del hero.
- Kicker: 1–3 palabras. **Teenage Dreams DEMO no tiene tildes ni ñ**: si el kicker las necesita, usa `.bw-kicker.bw-kicker--mostin` (ver `PENDIENTES-CLIENTE.md`).
- El titular lleva la voz de marca; la bajada es sobria y concreta (dos registros, `voz-inversionista.md`).
- Alternativa sobria al kicker: `<span class="bw-label">` (eyebrow UC pequeño) para secciones de datos.

**HubSpot.** Partial dentro de cada módulo: campos `kicker` (texto), `titulo` (texto), `bajada` (texto enriquecido limitado).
