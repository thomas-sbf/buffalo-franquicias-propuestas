# LeadForm multipaso

Demo: [`leadform.card.html`](leadform.card.html) · CSS: incluido en `styles.css`.

**Qué es.** Formulario de postulación en **3 pasos con progreso** (A1 §4.4 y §8.6; NN/g wizards): 1 Contacto · 2 Perfil de inversión · 3 Zona + consentimiento → pantalla de gracias con **agendador Pipedrive + WhatsApp** (agendar pasa a ser el paso siguiente a calificar).

**Anatomía.** `.bw-leadform.bw-island[data-bw-leadform]` > `form` > `.bw-progress` · `[data-bw-count]` (aria-live) · 3 × `fieldset.bw-leadform__step[data-bw-step]` · `.bw-leadform__nav` (Atrás / Siguiente / Enviar) · `.bw-leadform__done` (gracias).

**Decisiones**
- Paso 1 corto: nombre, correo, WhatsApp. Apellido **opcional** (hoy es obligatorio).
- Tramos de capital coherentes con la inversión mínima de $40M: Menos de $40M · $40–60M · $60–100M · Más de $100M · Prefiero conversarlo. Los tramos actuales ("Menos de 25 MM"… "Más de 50 MM") quedan casi todos bajo el mínimo. **Cortes sobre $40M: validar con el cliente** (¿hay financiamiento? ¿rango por formato?).
- Se agregan "¿Cómo te imaginas el negocio?" (operar / con administrador) y experiencia previa.
- Consentimiento: casilla **obligatoria y no premarcada** para tratar datos con fin específico + casilla **opcional** para novedades + responsable y derechos. **A validar por legal: Ley 21.719** (protección de datos, vigencia informada por A2: 1-dic-2026; verificar en BCN).
- Compromiso de respuesta "[X] horas hábiles": solo si el cliente puede cumplirlo.

**JS.** `leadform.js` (≈ 2 KB, sin dependencias) es mejora progresiva: sin JS se ven los 3 pasos apilados y el formulario funciona. `data-bw-demo` evita el envío (solo muestra la pantalla de gracias). Validación nativa por paso, foco al título del paso, errores con texto.

**HubSpot.** Usar el **formulario multipágina nativo** de HubSpot (editor nuevo) y estilizarlo con `field.css`/`leadform.css`; pantalla de gracias como mensaje en línea con el link de Pipedrive. Propiedades nuevas a crear: `rol_en_el_negocio`, `experiencia_previa`, `local_en_vista`, `region_interes`; actualizar opciones de `con_cuanto_capital_cuentas_para_invertir_`.
