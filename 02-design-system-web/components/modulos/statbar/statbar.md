# StatBar / KPI

Demo: [`statbar.card.html`](statbar.card.html) · CSS: incluido en `styles.css`.

**Qué es.** Las cifras del modelo, con nota al pie **obligatoria** para toda cifra de desempeño.

**Anatomía.** `.bw-statbar.bw-statbar--bar|--bento` > `dl.bw-statbar__list` > `.bw-stat` (`dt.bw-stat__label` + `dd.bw-stat__value` con `a.bw-note-ref` + `dd.bw-stat__desc` opcional) · `.bw-statbar__notes.bw-footnotes > ol`.

**Reglas (A1 §4.2, §8.5, §8.15)**
- Cifras **en el HTML**: nada de contadores animados que valen 0 sin JS ni cifras dentro de imágenes.
- Cada cifra de desempeño (recupero, EBITDA, ventas) lleva superíndice que enlaza a su nota: **fuente · periodo · n.º de locales considerados · cuántos lo alcanzan · "resultados individuales pueden variar"**. Texto final: validar con legal.
- Una sola fuente de verdad con fecha de corte: hoy el sitio dice "+50 locales" y el blog "55 locales" (ver `contenido-real.md` §5).
- La mascota no aparece junto a cifras de rentabilidad.
- `--bento`: una tarjeta `--accent` (oro) como máximo.

**HubSpot.** Módulo `kpis`: repeater (`valor`, `sufijo`, `etiqueta`, `descripcion`, `nota` → genera el superíndice) + campo `fuente_y_fecha`. Columnas en escritorio: `--bw-stat-cols`.
