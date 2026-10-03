# BlogTeaser

Demo: [`blog-teaser.card.html`](blog-teaser.card.html) · CSS: incluido en `styles.css`.

**Qué es.** Un solo bloque de 3 artículos reales, cerca del final (hoy hay dos bloques de blog seguidos y un H1 "Our Recent Blogs").

**Anatomía.** `.bw-posts` > `article.bw-post` (`__media` · `__meta` con categoría y fecha · `__title` con link que cubre toda la tarjeta · `__excerpt` · `__more`).

**Reglas**
- Imágenes a tamaño real (≤ 800 px de ancho, WebP/JPG, `loading="lazy"`). El `blog1.png` actual pesa **31,5 MB** para mostrarse a 368 px.
- Títulos en `<h3>`; nada de textos en inglés ni restos de plantilla.
- Fechas: usar la de publicación del artículo (la home muestra "29 may ’26" y el artículo "5 jun 2026").

**HubSpot.** Módulo de blog nativo (`blog_content` / listado de posts recientes) con esta plantilla de tarjeta.
