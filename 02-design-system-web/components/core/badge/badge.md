# Badge

Demo: [`badge.card.html`](badge.card.html) · CSS: incluido en `styles.css`.

**Qué es.** Píldora UC para categorías, estados y stickers. Adapta `Badge.jsx`.

**Clases.** `.bw-badge` + tono `--oro | --tinta | --magenta | --teal | --kraft | --crema | --alerta | --outline`; tamaño `--sm | --lg`; `--sticker` (rotado, borde y sombra dura).
Estados de disponibilidad: `.bw-badge--estado` + `--presencia | --disponible | --pocas | --tomada` (punto + texto).

**Reglas**
- Todos los tonos pasan AA con su texto (ver ratios en `badge.css`).
- Los estados SIEMPRE con texto: el color nunca es la única señal (WCAG 1.4.1).
- `--sticker` es capa de marca: en titulares e imágenes, **nunca encima de cifras**.
- `--pocas` ("Pocas plazas") solo con datos reales del cliente.

**HubSpot.** Partial; campo `texto` + `tono` (choice).
