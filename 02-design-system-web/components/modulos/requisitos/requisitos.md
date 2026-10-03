# Requisitos — «Esto no es para todos»

Demo: [`requisitos.card.html`](requisitos.card.html) · CSS: incluido en `styles.css`.

**Qué es.** Autoselección. Conserva el manifiesto real (A1: "ya tiene el tono justo") y suma lo que faltaba: requisitos **medibles**, "lo que buscamos / lo que no" y la tabla de costos que hoy solo está en el blog.

**Anatomía.** `.bw-reqs` > `.bw-reqs__top` (manifiesto + `.bw-req-cards` con cifra grande) · `.bw-fit` (`__col--yes` tinte teal / `__col--no` tinte magenta) · `table.bw-data-table.bw-data-table--stack` (se apila en móvil, sin scroll horizontal) · fuente en `.bw-legal`.

**Reglas**
- Capa de datos: `.bw-theme-blanco` (o `.bw-island`), Montserrat, sin stickers ni mascota.
- Datos publicados que se pueden usar: inversión desde $40.000.000 · derecho de franquicia $10.000.000 + IVA · royalty 7 % · fondo de marketing 2 % · contrato 20 años · equipo 2 + 2 · sin experiencia en gastronomía · operar o con administrador.
- **Pendientes** (marcados con `.bw-pending`): capital propio mínimo, financiamiento, formatos de local (m²/rango), y si los $40M incluyen el derecho de franquicia.
- La columna "Lo que no" es **copy propuesto**: validar con el cliente.

**HubSpot.** Módulo `requisitos`: `manifiesto` (rich text), repeater `requisito` (`valor`, `etiqueta`, `nota`), repeaters `buscamos` / `no_buscamos`, `tabla` (repeater concepto/monto/frecuencia), `fuente`.
