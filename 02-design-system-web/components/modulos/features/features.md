# Por qué Buffalo (features)

Demo: [`features.card.html`](features.card.html) · CSS: incluido en `styles.css`.

**Qué es.** 3–4 diferenciales **del negocio** (no del producto), en bento. Convierte "la gente ama la marca" en argumento de inversión (A1 §6, sección 3).

**Anatomía.** `.bw-features.bw-features--bento` > `article.bw-feature` (`__icon` en sticker oro · `__title` · `__text` · `__data` con dato verificable). `--wide`: tarjeta ink destacada con mascota o producto (`__media`).

**Contenido real disponible:** modelo probado (+50 locales, de Arica a Punta Arenas) · equipo chico (2 full time + 2 part time) · venta en local + delivery · marketing de red (fondo 2 %) · marca 100 % chilena. Ver `contenido-real.md`.

**Reglas.** Íconos: los de `assets/iconos` son de apoyo (no hay set de marca); si el cliente entrega los doodles en SVG, reemplazarlos. Hover: lift + sombra pop (se apaga con reduced-motion).

**HubSpot.** Módulo `features`: `section_header` + repeater (`icono` choice/imagen, `titulo`, `texto`, `dato`, `destacada` boolean, `imagen`).
