# Field (inputs)

Demo: [`field.card.html`](field.card.html) · CSS: incluido en `styles.css`.

**Qué es.** Inputs, select, textarea, opciones tipo tarjeta (radio/checkbox) y casilla de consentimiento. Adapta `Input.jsx`.

**Clases.** `.bw-field` > `.bw-field__label` (+ `__req` / `__opt`) · `.bw-input | .bw-select | .bw-textarea` · `.bw-field__hint` · `.bw-field__error`. Opciones: `fieldset.bw-choices` > `label.bw-choice` > `input` + `.bw-choice__box`. Consentimiento: `label.bw-check`.

**Cambios vs. DS original**
- Borde en reposo `--bw-control-line` (#7C7362): 4,68:1 sobre blanco. El original usaba ink al 28 % (≈ 1,7:1, no cumplía WCAG 1.4.11).
- Labels en Montserrat 600 (capa de datos), no en Mostin UC.
- Error = borde de 3 px + ícono "!" + texto (nunca solo color). Mensaje con voz humana y concreta.
- Inputs a 16 px (evita el zoom automático de iOS). Alto mínimo 48 px.

**Accesibilidad.** Cada input con `<label for>`; ayudas y errores enlazados con `aria-describedby`; `aria-invalid="true"` al fallar; `autocomplete` correcto (`given-name`, `email`, `tel`, `address-level2`). Ningún checkbox premarcado.

**HubSpot.** Estos estilos se aplican al formulario nativo de HubSpot (clases `.hsfc-*` del editor nuevo): mapear `.hsfc-TextInput` → `.bw-input`, `.hsfc-ErrorAlert` → `.bw-field__error`, etc., en el CSS del tema.
