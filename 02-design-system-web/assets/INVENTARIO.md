# Inventario de assets web (qué se copió y de dónde)

Origen: `Buffalo Waffles Design System/assets/` (DS original, no modificado). **No se copió nada de `uploads/`.** Total de esta carpeta: ~8,7 MB (el `assets/` original pesa 250 MB).

Criterio: solo lo que necesita un sitio de captación de franquiciados. Cada imagen web pesa menos de 400 KB. Los recortes llevan dos formatos: **WebP** (usar este, 34–115 KB, a 2× para retina) y **PNG** de respaldo, a menor tamaño. Optimización hecha en macOS con `sips` (redimensionar/JPG) y `cwebp` (WebP con alfa).

## Transparencia verificada (regla de `CLAUDE.md`)
Antes de elegir cada recorte se midió el canal alfa píxel a píxel en el navegador (% de píxeles transparentes en el borde de la imagen). Todos los archivos de `recortes/`, `mascota/` e `ilustraciones/` tienen **transparencia real** (borde 90–100 % transparente; en las fotos "mano/brazo" el brazo entra por el borde, por eso ~92 %).
Las fotos con fondo de estudio o de color (sin alfa) están separadas en `fotos/` y **no son recortes**. El aviso de `CLAUDE.md` sobre `photo-*-hand*` no se cumplió en esta selección: las que se usaron sí son recortes.

## fonts/
| Archivo | Origen | Nota |
|---|---|---|
| Mostin-Regular/Medium/Bold/Black/Outline `.woff2` + `.woff` | `assets/fonts/` | Solo los pesos que usa la web (Thin, ExtraLight y Light quedaron fuera). Licencia web: confirmar. |
| TeenageDreams-Bold/Regular `.otf` | `assets/fonts/` | **DEMO**: sin tildes ni ñ. Licencia pendiente. |
| Montserrat | Google Fonts (no se copia) | 400/500/600/700/800. |

## logos/ (arte maestro, sin cambios)
| Archivo | Origen | px | KB |
|---|---|---|---|
| logo-wordmark-positivo.png | assets/logo-wordmark-positivo.png | 2510×419 | 24 |
| logo-wordmark-negativo.png | assets/logo-wordmark-negativo.png | 2510×442 | 25 · **fondo negro sólido** (usar `.bw-logo--negativo`) |
| logo-badge-positivo.png | assets/logo-badge-positivo.png | 1312×1296 | 106 |
| logo-badge-negativo.png | assets/logo-badge-negativo.png | 1064×1064 | 74 |

## mascota/ (nunca redibujar)
| Web | Origen | WebP | PNG respaldo |
|---|---|---|---|
| mascota-streetwear | mascot-full.png | 799×1000 · 71 KB | 447×560 · 246 KB |
| mascota-angel | mascot-angel.png | 965×1000 · 111 KB | 540×560 · 370 KB |
| mascota-selfie | mascot-selfie.png | 965×1000 · 100 KB | 540×560 · 360 KB |
| mascota-shake | mascot-shake.png | 789×1000 · 85 KB | 442×560 · 303 KB |
| mascota-smoking | mascot-tux.png | 916×969 · 55 KB | 529×560 · 368 KB |

## ilustraciones/
| Web | Origen | WebP | PNG |
|---|---|---|---|
| cono-dulce | illustration-sweet-cone.png | 412×607 · 45 KB | 366×540 · 350 KB |
| cono-salado | illustration-savory-cone.png | 397×638 · 49 KB | 336×540 · 330 KB |

## recortes/ (producto con fondo transparente)
| Web | Origen | WebP | PNG |
|---|---|---|---|
| mano-frutella | photo-frutella-hand.png | 801×1200 · 58 KB | 427×640 · 222 KB |
| mano-cheddar | photo-cheddar-hand.png | 1000×1200 · 62 KB | 533×640 · 269 KB |
| mano-king-kong | photo-king-kong-hand.png | 1122×1200 · 62 KB | 598×640 · 272 KB |
| brazo-strawberry-fields | photo-strawberry-fields-hand-brazo.png | 1122×1200 · 60 KB | 598×640 · 277 KB |
| brazo-especial-palta | photo-especial-palta-hand-brazo.png | 948×1200 · 53 KB | 505×640 · 212 KB |
| waffle-strawberry-fields | product-strawberry-fields.png | 734×1100 · 54 KB | 427×640 · 271 KB |
| waffle-cheddar | product-cheddar.png | 787×1100 · 74 KB | 458×640 · 345 KB |
| waffle-king-kong-duo | product-king-kong-duo.png | 784×1100 · 62 KB | 456×640 · 285 KB |
| galletas-grupo | product-galletas-grupo.png (11 MB) | 800×1200 · 69 KB | 426×640 · 197 KB |
| bites-nutella | product-bites-nutella.png | 618×1100 · 34 KB | 359×640 · 153 KB |
| shake-limonada-carioca | product-limonada-carioca.png | 494×837 · 35 KB | 377×640 · 316 KB |

## fotos/ (con fondo: hero, video póster, blog)
| Web | Origen | px · KB | Uso sugerido |
|---|---|---|---|
| lifestyle-amigas-horizontal.jpg / .webp | photo-friends.jpg (8,9 MB) recortada 16:9 | 1600×900 · 284 / 113 | Hero foto en escritorio |
| lifestyle-amigas.jpg | photo-friends.jpg | 1066×1600 · 368 | Hero foto en móvil (`<source media>`) |
| lifestyle-frutilla-estudio.jpg | photo-strawberry-studio.jpg (4,4 MB) | 1066×1600 · 280 | Blog, banda de marca |
| lifestyle-oreo-mano.jpg | photo-oreo-hand.jpg (6,8 MB) | 1066×1600 · 301 | Póster de video, blog |
| producto-teriyaki-estudio.jpg | photo-chicken-teriyaki-studio.png | 1254×1254 · 300 | Blog |
| producto-bites-frambuesa.jpg | photo-bites-frambuesa-app.png | 1254×1254 · 231 | Blog |

## texturas/
| Archivo | Origen | Uso |
|---|---|---|
| torn-edge-top.png / torn-edge-bottom.png | assets/print-sources/ (piezas impresas) | Máscara CSS del divisor "papel rasgado" (`.bw-torn`). Solo importa su alfa. |

## iconos/ (NUEVOS, no son de marca)
25 íconos SVG de apoyo (trazo 2 px, `currentColor`), dibujados para este DS porque la marca no tiene set de íconos de UI (`readme.md` del DS original). Reemplazables por los doodles de marca si el cliente entrega SVG sueltos.

## No incluido (y por qué)
- **Fotos de locales, fachadas, equipo y franquiciados:** no están en `assets/`. Las del sitio actual (testimonios, "founders", "Operando un Buffalo Waffles") no se descargaron; ver `contenido-real.md` §4 y `PENDIENTES-CLIENTE.md`.
- **Doodles/iconografía del brandbook (p.21):** solo existen como lámina `uploads/doodle.pdf` sobre fondo negro, agrupada. Se necesitan SVG sueltos.
- Fotos de estudio sobre fondo (shakes, `product-*` sin alfa) y piezas de impresión: no aportan al sitio de franquicias.
