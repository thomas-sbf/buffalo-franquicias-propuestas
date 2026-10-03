# Hero

Demo: [`hero.card.html`](hero.card.html) · CSS: incluido en `styles.css`.

**Qué es.** Responde en 5 segundos: qué es, cuánto cuesta, por qué creer y qué hacer (A1 §6 y §8.2). Contiene el **único `<h1>`** de la página.

**4 elementos fijos:** H1 de propiedad con voz de marca · "Inversión total desde $40.000.000" · 3–4 KPI con superíndice de nota · CTA principal **Postula** + secundario de baja fricción (Ver los números / Agenda una reunión; a futuro, "Descarga el dossier"). WhatsApp sale del hero.

**Variantes**
- `--foto` + `.bw-theme-noche`: foto de marca con velo ink (88 → 78 → 50 %). Peor caso calculado: crema 7,40:1, oro 4,99:1. El texto atenuado se fuerza a crema. Usa `<picture>` con versión vertical para móvil.
- `--mascota` (bloque oro o noche): mascota a sangre por el borde. **Sin KPI de rentabilidad al lado de la mascota.**
- `--split` (crema): texto + producto en mano sobre tarjeta oro rotada + sticker.

**Rendimiento (obligatorio)**
- La imagen del hero es el LCP: `<img>` con `width`/`height`, `fetchpriority="high"`, **sin** `loading="lazy"`. WebP ≤ 200 KB; presupuesto del primer pantallazo < 2 MB (A1 §8.14).
- Sin video autoplay pesado (el `Banner home.mp4` actual se carga en el hero): si se usa, póster liviano + `preload="none"` + botón de pausa (WCAG 2.2.2).

**HubSpot.** Módulo `hero`: `variante` (choice), `kicker`, `titulo` (h1), `bajada`, `inversion_texto`, `imagen` (image, con alt), `imagen_movil`, `cta_1`, `cta_2`, `microcopy`, `mostrar_kpi` (boolean → incluye el módulo statbar).
