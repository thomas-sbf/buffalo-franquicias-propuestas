# Button

Demo: [`button.card.html`](button.card.html) · CSS: incluido en `styles.css`.

**Qué es.** El CTA de la marca: Mostin Bold en mayúsculas, píldora con borde de 2 px. Adapta `components/core/Button.jsx` del DS original a HTML/CSS: los colores ya no van en el componente, salen del tema de la sección.

**Clases**
- `.bw-btn` + variante: `--primary` (CTA del tema), `--secondary`, `--ghost`, `--magenta`, `--link`.
- Tamaño: `--sm` (40 px), por defecto (48 px), `--lg` (56 px). `--block` = ancho completo.
- `--sticker`: sombra dura que se hunde al presionar. **Uno por vista**, en el CTA principal.
- Ícono: `<svg class="bw-btn__icon">` antes o después del texto.
- Grupo: `.bw-btn-group` (`--stack-mobile` apila a ancho completo bajo 480 px).

**Reglas**
- `<a>` para navegar (ancla al formulario, Pipedrive, WhatsApp); `<button type="button|submit">` para acciones.
- El primario se invierte solo según el tema: oro + texto ink en crema/noche/teal; ink + texto crema en bloques oro y magenta (el oro sobre magenta da 2,04:1).
- Se eliminó la variante `strawberry` del DS original: texto blanco sobre #E23A2B da 4,31:1 (no AA a 16 px).
- `--magenta` lleva texto ink (4,95:1), nunca blanco.
- Deshabilitado: `disabled` en `<button>`, `aria-disabled="true"` en `<a>`.
- Microcopy: verbo + objeto, voz de marca (ver `voz-inversionista.md` §4). 1 CTA principal + 1 secundario por sección.

**HubSpot.** No es módulo propio: es un *macro/partial* (`button.html`) que reciben los módulos con campos `link` (URL + abrir en pestaña), `texto` y `variante` (choice).
