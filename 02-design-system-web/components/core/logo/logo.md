# Logo

Demo: [`logo.card.html`](logo.card.html) · CSS: incluido en `styles.css`.

**Qué es.** El arte maestro en PNG (positivo/negativo). Adapta `Logo.jsx`.

**Clases.** `.bw-logo--wordmark` (logotipo horizontal) · `.bw-logo--badge` (isologotipo; tamaño con `--bw-logo-size`) · `--rotate` (−12°) · `--negativo`.

**Reglas (Brandbook 2026 p.11–12)**
- En web (header y footer) se usa el **logotipo horizontal**. El isologotipo es para redes, offline y acentos grandes.
- Mínimos: isologotipo 3 cm / logotipo 5 cm ≈ **113 px / 189 px**. El header respeta 189 px incluso a 360 px (el CTA baja a la barra sticky).
- Nunca recolorear, voltear, estirar ni reconstruir en otra fuente. Rotación permitida: hasta 45° antihorario.
- `logo-wordmark-negativo.png` trae **fondo negro sólido**: sobre ink/charcoal usa `--negativo` (aplica `mix-blend-mode:screen`, que vuelve invisible el negro sin tocar el blanco). Solo sobre fondos oscuros.
- Siempre con `width`/`height` en el `<img>` (evita CLS) y `alt="Buffalo Waffles"`.

**HubSpot.** Usar el logo del tema (Brand Kit) o un campo `image` en el módulo de header/footer. **Pendiente:** SVG del logo (solo hay PNG; ver `PENDIENTES-CLIENTE.md`).
