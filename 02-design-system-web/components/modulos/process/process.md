# ProcessSteps

Demo: [`process.card.html`](process.card.html) · CSS: incluido en `styles.css`.

**Qué es.** Los 7 pasos reales (FAQ actual, respuesta 5) en una línea de tiempo, con el destacado **"2 a 4 meses desde la firma hasta la apertura"**, que hoy está escondido en la FAQ y es un argumento fuerte (A1 §4.6).

**Anatomía.** `ol.bw-steps` (`--marker` deja aire para la mascota) > `li.bw-step` (`--highlight` para el tramo firma → apertura) > `.bw-step__title` + `.bw-step__text` · `img.bw-step__marker` (mascota "estás aquí", opcional) · `.bw-steps__span` (banda del plazo).

**Reglas**
- `<ol>` real: el número lo genera CSS (`counter`), el orden lo lee el lector de pantalla.
- Vertical en móvil, grilla 4 + 3 en escritorio. Sin scroll horizontal ni scrolljacking.
- Duraciones por paso: **no publicadas** → no inventarlas; solo el tramo 2–4 meses.
- "Sin compromiso": usar solo si el cliente lo confirma; "Postular no tiene costo" es seguro.

**HubSpot.** Módulo `proceso`: repeater (`titulo`, `texto`, `destacado`), `texto_plazo`, `mostrar_mascota` (boolean).
