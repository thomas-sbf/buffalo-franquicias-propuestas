# LocationsMap

Demo: [`locations.card.html`](locations.card.html) · CSS: incluido en `styles.css`.

**Qué es.** Presencia y crecimiento: mapa estático + lista de texto equivalente. La disponibilidad territorial es la urgencia más creíble (A1 §1.5).

**Anatomía.** `figure.bw-map` (SVG inline, `role="img"` + `<title>`) · `.bw-locations__legend` · `ul.bw-regions` > `li.bw-region` (código, nombre, badge de estado) · CTA "¿Hay cupo en mi comuna?".

**Contenido real.** El mapa actual del sitio (imagen "BUFFALO IN DA HOUSE · Desde Arica hasta Punta Arenas") marca 11 regiones: XV, I, II, V, RM, VI, VII, VIII, IX, XIV y XII.

**Reglas**
- El SVG de la demo es un **placeholder esquemático** (no es cartografía): reemplazar por mapa definitivo, idealmente SVG liviano. Nada de iframes de Google Maps (peso y cookies).
- La lista de texto es obligatoria (accesibilidad y SEO, patrón Cinnaholic).
- Estados `disponible / pocas plazas / tomada`: **solo con datos reales** del cliente (pendiente).

**HubSpot.** Módulo `presencia`: `mapa` (image/SVG), repeater `region` (`codigo`, `nombre`, `ciudad`, `estado` choice), `cta`.
