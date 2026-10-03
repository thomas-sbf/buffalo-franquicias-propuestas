# CHANGELOG — Buffalo Waffles DS web v2 (sitio de franquicias)

**v2.0.0 · 2 de octubre de 2026 · agente A3.** Base: `Buffalo Waffles Design System/` (DS de consumidor, sin modificar). Justificación: `01-research/benchmark-franquicias.md` (A1) y `01-research/tendencias-web.md` (A2).

## Resumen
El DS original servía para la app de pedidos, flyers y cupones: escala tipográfica fija en px, sin breakpoints ni grilla, componentes React con colores fijos, voz de consumidor. La v2 agrega la **capa web/marketing** para inversionistas, sin cambiar la identidad: los mismos colores, tipos, mascota y logo.

## Agregado
| Cambio | Archivo(s) | Por qué (fuente) |
|---|---|---|
| **Tokens semánticos y temas de sección** (crema, papel, blanco, noche, bloques oro/magenta/teal, isla clara). Los componentes ya no usan colores crudos. | `tokens/semantic.css` | A2 §4.3 (3 propuestas de paleta) y §5 ("color como navegación"). A1 §8.1 (capa de marca + capa de datos). |
| **Variantes de color "para texto"** `-700` (magenta, oro, kraft, strawberry, teal), `--bw-muted`, `--bw-cream-muted`, `--bw-magenta-300`, `--bw-strawberry-300`, tintes `-100` y `--bw-control-line`. | `tokens/colors.css` | A2 §4.2 (tokens derivados). Se recalcularon para pasar AA también sobre crema-deep (#EFD9A9): p. ej. A2 proponía magenta-700 #C71A6A, que da 4,01:1 sobre crema-deep; se usa **#B71862** (4,57). |
| **Escala tipográfica fluida** con `clamp(rem, rem + vw, rem)` de display-XL a micro, alturas de línea, tracking y medidas de línea. | `tokens/typography.css` | Diagnóstico (escala fija 72/52/38 px). A2 §3.2 y §5 (display gigante UC: hero 120–200 px escritorio / 56–72 móvil). |
| **Breakpoints, contenedores, gutter fluido (mín. 16 px), grilla 4/8/12 y espaciado de secciones.** | `tokens/spacing.css`, `base/layout.css` | Diagnóstico (no había breakpoints ni grilla). A1 §7.2 (el sitio se estira a 1.220 px en móvil). |
| **Motion tokens** (duraciones, easings) + **regla obligatoria `prefers-reduced-motion`**. | `tokens/motion.css` | A2 §1.10 y §3.7 (7 de 13 premiados no la tienen); NN/g sobre animación al hacer scroll (A2 §3.4). |
| **Foco visible por tema** (anillo de 3 px, offset 3 px; ink/oro/crema según fondo). | `tokens/effects.css`, `base/base.css` | A2 §4.2 ("el anillo de foco no puede ser solo amarillo sobre claro"). |
| **Capa de datos**: tabla de costos que se apila en móvil, lista clave–valor, notas al pie con superíndice. | `base/layout.css` | A1 §4.2, §8.4, §8.5 (cifras con base y advertencia). |
| **15 módulos de sección** en HTML/CSS puro, 1 carpeta = 1 módulo HubSpot: header, hero (foto/mascota/split), statbar, features, process, requisitos, support, testimonial (+video), locations, leadform (3 pasos), faq, blog-teaser, cta-band, footer, sticky-cta. | `components/modulos/*` | A1 §6 (anatomía recomendada) y §8 (15 recomendaciones). |
| **JS de mejora progresiva** (sin dependencias, < 3 KB total): pasos del formulario, menú móvil, barra sticky. | `*.js` | A1 §8.6; NN/g wizards (A2 §3.6). Todo funciona sin JS. |
| **Voz para inversionistas** (dos registros, reglas de cifras, microcopy). | `voz-inversionista.md` | A1 hallazgo 4 y §4.11. |
| **Inventario de contenido real** (cifras, textos, 17 FAQ, testimonios, links, inconsistencias). | `contenido-real.md` | Extraído del sitio el 2-oct-2026. A1 §7.2 y §8.15. |
| **Assets web curados** (8,7 MB vs. 250 MB del original; WebP + PNG; transparencia verificada). | `assets/`, `assets/INVENTARIO.md` | A1 §7.2 (34 MB transferidos, PNG de 31,5 MB). Regla de `CLAUDE.md` sobre recortes. |
| **25 íconos de apoyo SVG** (no son de marca). | `assets/iconos/` | El DS original no tiene set de íconos de UI (`readme.md`, Iconography). |
| **Kicker en Mostin** (`.bw-kicker--mostin`). | `base/type.css` | Hallazgo propio en la QA: Teenage Dreams DEMO no dibuja tildes ni ñ. |
| **Marcador de pendientes** `.bw-pending` y `.bw-legal-flag` (solo prototipos). | `base/base.css`, `leadform.css` | Regla "prohibido inventar cifras". |
| `index.html` (todos los tokens con ratios calculados + todos los componentes) y una card por componente. | raíz, `components/**` | Brief. `index.html` es una compilación estática de las cards (2-oct-2026). |

## Cambiado (respecto del DS original)
| Antes | Ahora | Por qué |
|---|---|---|
| Componentes React (`.jsx` + bundle + Babel en el navegador) | HTML/CSS puro, clases `bw-*` | Mapeo 1:1 a módulos HubSpot; sin dependencias ni build. |
| Button: colores fijos; variante `strawberry` (blanco/rojo 4,31:1) | Colores del tema; se quita `strawberry`; se agrega `--magenta` (texto ink 4,95) y `--link` | AA (A2 §4.2). |
| Badge: tono `strawberry` blanco | `--alerta` (strawberry-700 + blanco 6,26) + estados de disponibilidad con texto | AA; A1 §8.8 (mapa con estados). |
| Input: borde ink al 28 % (≈ 1,7:1) y foco teal | Borde `--bw-control-line` (4,68:1), foco del tema, error con ícono + texto; labels en Montserrat | WCAG 1.4.11 y 1.4.1. |
| `--text-muted` #8A7A63 (3,40:1 sobre crema) | `--bw-muted` #665540 (5,84:1) | AA. |
| SectionHeader: kicker 26 px fijo en strawberry | Kicker fluido 24–36 px en magenta-700 (claro) / oro (oscuro); bajada opcional | Kicker ≥ 24 px = texto grande; strawberry sobre crema daba 3,52. |
| Escala `--fs-*` en px | Fluida (`clamp`) con alias de compatibilidad (`--fs-lg`) | Diagnóstico. |
| `--lh-tight` 1,02 | `--lh-display` 1,0 y `--lh-heading` 1,05 | La QA mostró tildes (Í, Ú) chocando con la línea superior en Mostin UC. |
| Sombras con color fijo | `--shadow-rgb` y `--pop` del tema (crema en noche) | La sombra dura ink desaparece sobre ink. |
| Mostin: 8 pesos + Teenage Dreams 2 pesos | Mostin 400/500/700/900 + Outline; Teenage Dreams solo Bold recomendado | Peso de carga (A1 §8.14). |
| Logo en header: sin regla web | Logotipo horizontal ≥ 189 px; bajo 480 px el CTA baja a la barra sticky | Brandbook p.11–12; A1 §7.2 (logo de 500 px que rompe el móvil). |

## Sin cambios (se hereda tal cual)
Paleta oficial (Fire Yellow #F5B60E, Magenta #E74691, blanco, negro) y neutros cálidos; Mostin + Montserrat + Teenage Dreams; radios, bordes sticker y sombras cálidas; logo maestro; mascotas e ilustraciones; reglas de no recolorear/redibujar.

## No incluido a propósito
- Los 2 colores incompletos del Brandbook (Persian Plum, Laird Green): comentados en `tokens/colors.css`, sin uso (ver `PENDIENTES-CLIENTE.md` §10).
- Calculadora de ROI (A1 §4.2: "crea expectativas difíciles de defender").
- Carruseles automáticos, pop-ups de entrada, chatbot-formulario, 3D/WebGL, loaders (A2 §5).
- Modo oscuro con toggle (A2 C4: mejor 1–2 secciones oscuras como dirección de arte).

## Verificación de contraste (WCAG 2.x, luminancia relativa; calculado con script)
58 pares declarados como AA, **0 fallas**. Umbral: 4,5:1 texto normal · 3,0:1 texto grande (≥ 24 px o ≥ 18,66 px bold) y componentes de UI.

| Tema / uso | Par (texto o elemento / fondo) | Hex | Ratio | Mínimo | Estado |
|---|---|---|---|---|---|
| Crema | Texto ink / crema | `#191410` / `#f6e7c6` | **14,94:1** | 4,5 | OK |
| Crema | Texto ink-soft / crema | `#3a2f27` / `#f6e7c6` | **10,62:1** | 4,5 | OK |
| Crema | Texto apagado muted / crema | `#665540` / `#f6e7c6` | **5,84:1** | 4,5 | OK |
| Crema | Link y kicker magenta-700 / crema | `#b71862` / `#f6e7c6` | **5,17:1** | 4,5 | OK |
| Crema | CTA texto ink / oro | `#191410` / `#f5b60e` | **10,08:1** | 4,5 | OK |
| Crema | CTA hover ink / gold-soft | `#191410` / `#f9c85e` | **11,71:1** | 4,5 | OK |
| Crema | Borde CTA ink vs crema (UI) | `#191410` / `#f6e7c6` | **14,94:1** | 3,0 | OK |
| Crema | CTA2 crema / ink | `#f6e7c6` / `#191410` | **14,94:1** | 4,5 | OK |
| Crema | Foco ink vs crema (UI) | `#191410` / `#f6e7c6` | **14,94:1** | 3,0 | OK |
| Crema | Borde de input control-line vs blanco (UI) | `#7c7362` / `#ffffff` | **4,68:1** | 3,0 | OK |
| Crema | Borde de input control-line vs crema (UI) | `#7c7362` / `#f6e7c6` | **3,83:1** | 3,0 | OK |
| Crema | Error strawberry-700 / blanco | `#b92619` / `#ffffff` | **6,26:1** | 4,5 | OK |
| Crema | Éxito teal-700 / crema | `#1e6a66` / `#f6e7c6` | **5,19:1** | 4,5 | OK |
| Crema | Placeholder muted / blanco | `#665540` / `#ffffff` | **7,15:1** | 4,5 | OK |
| Crema | Texto ink / crema-deep (tarjetas) | `#191410` / `#efd9a9` | **13,20:1** | 4,5 | OK |
| Crema | Muted / crema-deep | `#665540` / `#efd9a9` | **5,16:1** | 4,5 | OK |
| Crema | Magenta-700 / crema-deep | `#b71862` / `#efd9a9` | **4,57:1** | 4,5 | OK |
| Papel | Texto ink / papel | `#191410` / `#fbf4e6` | **16,70:1** | 4,5 | OK |
| Papel | Muted / papel | `#665540` / `#fbf4e6` | **6,53:1** | 4,5 | OK |
| Papel | Link magenta-700 / papel | `#b71862` / `#fbf4e6` | **5,78:1** | 4,5 | OK |
| Blanco | Texto ink / blanco | `#191410` / `#ffffff` | **18,28:1** | 4,5 | OK |
| Blanco | Muted / blanco | `#665540` / `#ffffff` | **7,15:1** | 4,5 | OK |
| Blanco | Link magenta-700 / blanco | `#b71862` / `#ffffff` | **6,32:1** | 4,5 | OK |
| Noche | Texto crema / ink | `#f6e7c6` / `#191410` | **14,94:1** | 4,5 | OK |
| Noche | Texto crema / charcoal | `#f6e7c6` / `#241d18` | **13,58:1** | 4,5 | OK |
| Noche | Apagado cream-muted / ink | `#b4a88f` / `#191410` | **7,78:1** | 4,5 | OK |
| Noche | Apagado cream-muted / charcoal | `#b4a88f` / `#241d18` | **7,07:1** | 4,5 | OK |
| Noche | Oro (link, kicker, cifras) / ink | `#f5b60e` / `#191410` | **10,08:1** | 4,5 | OK |
| Noche | Oro / charcoal | `#f5b60e` / `#241d18` | **9,16:1** | 4,5 | OK |
| Noche | Magenta-300 / ink | `#ee7bae` / `#191410` | **7,03:1** | 4,5 | OK |
| Noche | Magenta-300 / charcoal | `#ee7bae` / `#241d18` | **6,39:1** | 4,5 | OK |
| Noche | Éxito teal-soft / ink | `#3a9791` / `#191410` | **5,24:1** | 4,5 | OK |
| Noche | Error strawberry-300 / ink | `#ff8f83` / `#191410` | **8,28:1** | 4,5 | OK |
| Noche | CTA2 ink / crema | `#191410` / `#f6e7c6` | **14,94:1** | 4,5 | OK |
| Noche | Foco oro vs ink (UI) | `#f5b60e` / `#191410` | **10,08:1** | 3,0 | OK |
| Hero foto | Crema / velo 78 % sobre blanco (peor caso) | `#f6e7c6` / `#4c4845` | **7,40:1** | 4,5 | OK |
| Hero foto | Oro / velo 78 % (peor caso, cifras grandes) | `#f5b60e` / `#4c4845` | **4,99:1** | 3,0 | OK |
| Bloque oro | Texto ink / oro | `#191410` / `#f5b60e` | **10,08:1** | 4,5 | OK |
| Bloque oro | Apagado ink-soft / oro | `#3a2f27` / `#f5b60e` | **7,17:1** | 4,5 | OK |
| Bloque oro | CTA crema / ink | `#f6e7c6` / `#191410` | **14,94:1** | 4,5 | OK |
| Bloque oro | CTA ink vs oro (UI) | `#191410` / `#f5b60e` | **10,08:1** | 3,0 | OK |
| Bloque magenta | Texto ink / magenta | `#191410` / `#e74691` | **4,95:1** | 4,5 | OK |
| Bloque magenta | Titular blanco ≥ 24 px / magenta | `#ffffff` / `#e74691` | **3,70:1** | 3,0 | OK |
| Bloque magenta | Foco ink vs magenta (UI) | `#191410` / `#e74691` | **4,95:1** | 3,0 | OK |
| Bloque teal | Texto crema / teal | `#f6e7c6` / `#1f6e6a` | **4,91:1** | 4,5 | OK |
| Bloque teal | Titular blanco / teal | `#ffffff` / `#1f6e6a` | **6,01:1** | 4,5 | OK |
| Bloque teal | CTA oro vs teal (UI) | `#f5b60e` / `#1f6e6a` | **3,31:1** | 3,0 | OK |
| Bloque teal | Foco crema vs teal (UI) | `#f6e7c6` / `#1f6e6a` | **4,91:1** | 3,0 | OK |
| Badges | Ink / oro | `#191410` / `#f5b60e` | **10,08:1** | 4,5 | OK |
| Badges | Crema / ink | `#f6e7c6` / `#191410` | **14,94:1** | 4,5 | OK |
| Badges | Ink / magenta | `#191410` / `#e74691` | **4,95:1** | 4,5 | OK |
| Badges | Blanco / teal | `#ffffff` / `#1f6e6a` | **6,01:1** | 4,5 | OK |
| Badges | Ink / kraft | `#191410` / `#c89a5e` | **7,17:1** | 4,5 | OK |
| Badges | Blanco / strawberry-700 | `#ffffff` / `#b92619` | **6,26:1** | 4,5 | OK |
| Badges | Ink-soft / crema-deep (tomada) | `#3a2f27` / `#efd9a9` | **9,39:1** | 4,5 | OK |
| Tintes | Ink / gold-100 | `#191410` / `#fde9b3` | **15,22:1** | 4,5 | OK |
| Tintes | Ink / magenta-100 | `#191410` / `#f9d9e8` | **14,03:1** | 4,5 | OK |
| Tintes | Ink / teal-100 | `#191410` / `#d5e8e6` | **14,37:1** | 4,5 | OK |

También se verificó el peor caso del hero con foto (velo ink 78 % sobre un píxel blanco). Combinaciones prohibidas (calculadas): oro/blanco 1,81 · oro/crema 1,48 · oro/magenta 2,04 · blanco/magenta 3,70 (solo ≥ 24 px) · blanco/strawberry 4,31 · teal/ink 3,04 · muted original/crema 3,40 · magenta-700 de A2 (#C71A6A)/crema-deep 4,01.
