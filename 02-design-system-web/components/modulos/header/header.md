# Header / Nav

Demo: [`header.card.html`](header.card.html) · CSS: incluido en `styles.css`.

**Qué es.** Header sticky, opaco y bajo (64 px móvil / 76 px escritorio) con logo, anclas con las preguntas del inversionista y CTA principal siempre visible.

**Corrige** el hallazgo de A1 (benchmark §7.2): en móvil el logo actual mide 500 px fijos, estira la página a 1.220 px y deja la hamburguesa fuera de pantalla.

**Anatomía.** `header.bw-header.bw-theme-papel|noche` > `.bw-header__inner` > logo · `nav.bw-nav` (≥ 1024 px) · `.bw-header__actions` (Agendar `ghost` ≥ 1024 px · **Postula** `primary` ≥ 480 px · menú `<details class="bw-menu">` < 1024 px).

**Reglas**
- Anclas recomendadas (A1 §6): El negocio · Números · Proceso · Requisitos · Preguntas.
- Bajo 480 px el CTA sale del header para que el logo mantenga su mínimo de 189 px; la conversión la toma la barra inferior (`sticky-cta`).
- Fondo opaco, sin glassmorphism (NN/g). Sin animación al hacer scroll.
- `header.js` (opcional, 0,5 KB): cierra el menú al elegir un link, con Escape o clic afuera. Sin JS el `<details>` igual funciona.

**HubSpot.** Global module `header`: campos `logo` (image), `menu` (menu o repeater de links), `cta_principal` (link + texto), `cta_secundario` (link Pipedrive + texto), `tema` (choice papel/noche).
