# Guía para diseñadores — DS web v2 de Buffalo Franquicias

**Para quién:** los dos agentes que construyen los prototipos en `03-prototipos/`. **Lee esto, abre `index.html` y listo.** Detalle de cada pieza en `components/**/<nombre>.md`.

## 1. Cómo se usa (sin build)
```html
<link rel="stylesheet" href="../02-design-system-web/styles.css">   <!-- tokens + base + 20 componentes -->
<script src="../02-design-system-web/components/modulos/leadform/leadform.js" defer></script>  <!-- opcional -->
```
- Cada `<section>` lleva **un tema**: `bw-theme-crema` (default) · `bw-theme-papel` · `bw-theme-blanco` · `bw-theme-noche` · `bw-block-oro` · `bw-block-magenta` · `bw-block-teal`. Texto, links, CTAs, bordes y foco se ajustan solos. Dentro de una sección oscura, tablas y formularios van en `.bw-island`.
- Copia el HTML de las cards (`components/**/<nombre>.card.html`) y cambia el contenido. No inventes clases nuevas si existe una equivalente.
- Layout: `.bw-section` > `.bw-container` (+ `--wide`, `--narrow`, `--text`), `.bw-split`, `.bw-auto-grid`, `.bw-stack`, `.bw-cluster`.
- Contenido: **solo** el de `contenido-real.md`. Lo que falte: `<mark class="bw-pending">[dato]</mark>`. Voz: `voz-inversionista.md`.
- Paths de assets: `../02-design-system-web/assets/…` (ver `assets/INVENTARIO.md`). Usa WebP en `<picture>` con PNG de respaldo.

## 2. Anatomía recomendada de la landing (A1 §6)
| # | Sección | Componente(s) | Tema sugerido (A / B) |
|---|---|---|---|
| 0 | Header sticky + barra móvil | `header` + `sticky-cta` | papel / noche |
| 1 | Hero: H1 de propiedad · "desde $40M" · 3–4 KPI con nota · Postula + secundario | `hero` (+ `statbar --bar`) | foto-noche o split-crema / mascota-oro o XXL |
| 2 | Franja de confianza (malls, prensa, regiones) | `statbar --bar` o `badge` *(contenido pendiente)* | papel / ink |
| 3 | Por qué Buffalo (el negocio) | `features --bento` | papel / oro |
| 4 | Números del modelo (tabla + notas) | `statbar --bento` + tabla de `requisitos` | blanco / noche + `.bw-island` |
| 5 | Dónde estamos y dónde crecemos | `locations` | crema / crema |
| 6 | Proceso en 7 pasos (2–4 meses) | `process` | crema / magenta |
| 7 | Soporte y capacitación | `support` | teal / teal |
| 8 | Franquiciados reales | `testimonial` | papel / noche |
| 9 | Esto no es para todos (requisitos) | `requisitos` | blanco / blanco |
| 10 | Postulación (3 pasos) | `leadform` | noche + isla / oro + isla |
| 11 | FAQ (10–12 en landing) | `faq` | papel / papel |
| 12 | Cierre + blog + footer | `cta-band` + `blog-teaser` + `footer` | oro, crema, noche / noche, crema, noche |
Un solo `<h1>` (hero). Un `<h2>` por sección. Mismo CTA principal en 4–6 puntos del recorrido.

## 3. Temas de color (A2 §4.3)
- **Crema & Kraft** (Dirección A): crema 45 % · ink 20 % · blanco 15 % (tarjetas, tabla, formulario) · oro 10 % (CTA, highlights) · magenta 5 % · kraft 3 % · teal/strawberry 2 % (estados).
- **Noche streetwear** (Dirección B): ink 50 % · crema 20 % · oro 15 % (CTA, cifras gigantes) · magenta 8 % · blanco 4 % · teal/kraft 3 %. Riesgo: "vida nocturna". Inversión y requisitos SIEMPRE sobre claro o `.bw-island`.
- **Bloques de sabor** (color como navegación, Dirección B): oro / ink / crema / magenta / teal / blanco por capítulo.
- Pares verificados (58, todos AA): tabla en `index.html` y `CHANGELOG.md`.

## 4. Assets
Mascotas (5) · conos ilustrados (2) · recortes de producto y "en mano" (11) · fotos lifestyle/estudio (6) · logos (4) · texturas papel rasgado (2) · íconos de apoyo (25). Fotos de locales y franquiciados: **no hay** (pendiente). Lista y origen: `assets/INVENTARIO.md`.

## 5. Reglas duras
1. **Contraste AA siempre.** El oro #F5B60E es **fondo** (texto ink 10,08:1), nunca texto ni borde fino sobre claro (1,81:1 sobre blanco). Texto magenta en claro = `--bw-magenta-700`. Blanco sobre magenta solo en titulares ≥ 24 px. Oro y magenta nunca llevan texto uno sobre otro (2,04:1).
2. **Foco visible** en todo lo interactivo (ya viene en `base.css`; no lo quites).
3. **Motion:** corto y con propósito; `prefers-reduced-motion` ya apaga todo. Nada de scrolljacking, loaders de marca, texto o cifras animadas al hacer scroll, ni carruseles automáticos.
4. **Peso:** cada imagen < 400 KB (WebP recomendado), primer pantallazo < 2 MB, LCP ≤ 2,5 s en móvil. Imagen del hero sin lazy y con `fetchpriority="high"`; el resto `loading="lazy"` con `width`/`height`.
5. **Nada de 3D/WebGL pesado** ni librerías de animación grandes. Si hay "mascota animada", que sea CSS o Lottie/Rive liviano y diferido.
6. **Mascota sí, pero nunca redibujada ni recoloreada**, y nunca junto a cifras de rentabilidad. El logo tampoco se toca (mínimo 189 px el logotipo).
7. **Cifras en HTML** con superíndice y nota al pie (fuente, periodo, muestra, advertencia). Prohibido inventar cifras.
8. **Teenage Dreams (DEMO) no tiene tildes ni ñ:** en script solo palabras sin tildes/ñ; si no, `.bw-kicker--mostin`.
9. Sin texto en inglés, sin restos de plantilla, sin pop-ups al entrar, sin chatbot como formulario.
10. Probar a **360, 375, 768, 1024 y 1440 px**: cero scroll horizontal.

## 6. Brief A — "Evolución de marca"
**Idea:** el Buffalo de siempre, ahora hablándole a un socio. Street-food, sticker y calidez, con una capa de datos impecable.
- **Color:** Crema & Kraft. Bloques de color solo en 2–3 momentos (oro en el cierre, teal en soporte).
- **Tipo:** Mostin grande (display ~106 px en escritorio) + Montserrat; Teenage Dreams en 1–2 kickers por pantalla.
- **Imagen:** producto real en mano (recortes) sobre tarjetas oro rotadas, stickers (`badge --sticker`), papel rasgado (`.bw-torn`) entre secciones. Mascota en hero-split o cierre, en la pantalla de gracias y como "estás aquí" en el proceso.
- **Interacción:** botón sticker que se hunde, tarjetas que se levantan; nada más.
- **Tono:** voz de marca en titulares ("Tú pones la energía. Nosotros, la marca."), sobrio en cifras.
- **Evitar:** 3D, loaders, amarillo como texto, mascota junto a cifras.

## 7. Brief B — "Disruptivo 2026"
**Idea:** las tendencias de A2 al límite, sin salirse de la marca: color como navegación, noche streetwear y collage.
- **Color:** Bloques de sabor a sangre por capítulo + 1–2 secciones Noche ("after hours" para la historia de marca). Datos siempre en `.bw-island`.
- **Tipo:** display XXL (`.bw-display-xl`, hasta 140 px), titulares cortos con tipografía cinética **solo** en palabras sueltas del H1/H2 (nunca en cifras), outline (`.bw-outline-text`) como textura tipográfica.
- **Navegación guiada:** "Tu camino a franquiciado" con barra de progreso que toma el color del capítulo (CSS `animation-timeline: scroll()` como mejora progresiva con `@supports` y fallback estático).
- **Imagen:** collage de recortes + doodles + stickers rotados; neobrutalismo dosificado (bordes y sombras duras en ink en bento y botones); mascota con microanimación liviana (CSS/Lottie ≤ 150 KB, diferida, se apaga con reduced-motion).
- **Transiciones:** View Transitions (same-document) entre pasos del formulario como mejora progresiva.
- **Evitar:** scrolljacking, gradientes neón, glassmorphism, modo oscuro total, WebGL.

**Entrega de cada dirección:** landing completa en móvil (375) y escritorio (1440) con contenido real y pendientes marcados.
