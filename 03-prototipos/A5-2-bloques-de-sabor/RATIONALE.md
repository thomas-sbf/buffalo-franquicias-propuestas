# A5-2 · «Bloques de sabor» — rationale

**Agente:** A5 (diseñador, línea «Disruptivo 2026») · **Fecha:** 2 oct 2026
**Abrir:** `index.html` (carpeta autocontenida: `ds/` = copia de tokens, `base.css` y fuentes; `img/` = imágenes optimizadas; `css/` y `js/` propios).

---

## 1. Concepto en dos líneas

**La franquicia se pide como un Buffalo.** El sitio es una *carta* de siete capítulos —cada uno un sabor, un color a sangre y una pregunta del inversionista— y el color es la navegación.
Al final no llenas un formulario: **haces tu pedido en el mesón**, una pregunta a la vez con respuestas en chips, revisas tu **comanda** y sales con tu reunión inicial agendada.

**Diferencia con A5-1:** A5-1 es un tablero oscuro, de datos y fuentes (deck + bento + simulador). A5-2 es maximalismo de color, narrativa de carta, pistas horizontales y una conversación. **Diferencia con A4** (raíz de marca, kraft, fanzine, crew): aquí no hay kraft ni estética de fanzine; el lenguaje es color plano a sangre, neobrutalismo (contorno + sombra dura) y comandas.

---

## 2. Mapa del recorrido

Navegación: **la carta de colores**. En escritorio, 9 pestañas de color en el header (número siempre visible, nombre al pasar o en la activa). En móvil, una **tira de progreso segmentada por color** (cada segmento es un link) + un chip con el capítulo actual que abre «La carta» a pantalla completa. Barra móvil fija **Postula + WhatsApp**. Entre capítulos, **cintas tipográficas** que se mueven solo con el scroll.

| # | Capítulo (color) | Qué hace | ¿Nuevo vs. sitio actual? |
|---|---|---|---|
| 00 | Portada (oro) | H1 «Chile ya lo probó. Ahora, ábrelo tú.» con palabras que caen como sticker; **selector de sabor** (King Kong, Strawberry Fields, Limonada Carioca, Especial Palta*, Bites Nutella*) que cambia el color de la portada y el producto con View Transition | **Nuevo** |
| 01 | La masa (crema) | «Lo que no se importa»: pista horizontal de 6 «ingredientes» (100 % chilena, 11 regiones, presencial + delivery, equipo 2 + 2, locales +50·55 pendiente, se come en la mano) | **Nuevo** |
| 02 | La cuenta (ink) | «La cuenta, clarita»: las cifras de inversión como **pizarra de precios** con puntos guía, encabezada por la inversión inicial total y su desglose; «Resultado modelado» (resultado operacional y payback con su supuesto); «Lo que no está en la carta (todavía)»; foto de marca | **Nuevo** (hoy los costos solo están en el blog) |
| 03 | Paso a paso (magenta) | «Del antojo a la apertura»: los 7 pasos como **comandas** en pista horizontal + destacado 3 a 6 meses | **Nuevo** (hoy en FAQ 5) |
| 04 | Respaldo (teal) | «No estás solo»: tarjetas Antes / Durante / Después que **se apilan con el scroll**; mascota con alas (respaldo) y KAM 1 : 10 | **Nuevo** |
| 05 | La red (Persian Plum, exploratorio) | «Ellos ya pidieron»: los 2 testimonios en gran formato + campos faltantes + 3 slots de video | Rediseño + campos nuevos |
| 06 | ¿Es para ti? (Laird Green, exploratorio) | «La receta del franquiciado»: «Sí va» como **autoevaluación** (casillas, puntaje x/5 y mensaje) y «No hace falta» (experiencia, estar todo el día, tener local) | **Nuevo** (hoy «Esto no es para todos» sin criterios) |
| 07 | Tu pedido (papel/oro) | **Flujo conversacional**: 8 preguntas, chips o texto, reacciones con datos publicados, «Cambiar» en cada respuesta, **comanda** editable con consentimiento, gracias con Pipedrive + WhatsApp. Alternativa: «¿Prefieres ver todas las preguntas juntas?» (formulario clásico) | **Nuevo** |
| 08 | Preguntas de la casa (kraft) | 10 preguntas con código de color por tema + ilustraciones de conos | Rediseño |
| — | Cierre y footer (ink) | «¿Te tinca?» + mascota con shakes + notas numeradas + contacto | **Nuevo** |

*Exploratorio, por confirmar con el cliente.

**Flujos nuevos:** portada → selector de sabor · «Antes quiero ver la cuenta» (el chat te lleva a La cuenta y te espera) · receta → «Haz tu pedido» · chat → comanda → cambiar línea → comanda → enviar → Pipedrive.

---

## 3. Interacciones y animaciones

| Pieza | Cómo funciona | Accesibilidad / reduced-motion |
|---|---|---|
| Color como navegación | `IntersectionObserver` marca el capítulo activo en pestañas, tira y chip móvil (`aria-current`) | Todo son links reales con nombre |
| Entrada de capítulo | Cada bloque llega como «pastilla» redondeada y se abre a sangre (`clip-path` + `animation-timeline: view()`) | `@supports` + `no-preference` |
| Cintas entre capítulos | Tipografía Mostin/Mostin Outline que se desplaza **solo con el scroll** (sin movimiento autónomo) | Decorativas (`aria-hidden`); estáticas con `reduce` |
| Palabras «estampadas» | La palabra clave de cada H2 cae como sticker (scroll-driven) | Solo titulares; `no-preference` |
| Selector de sabor | Radios nativos; precarga de imágenes al primer hover/foco; `img.decode()` + View Transition con nombre `hero-prod` | Sin VT con `reduce`, sin soporte o con pestaña oculta |
| Pistas horizontales | `scroll-snap`, región enfocable con nombre, **flechas ← →, Inicio, Fin**, botones anterior/siguiente (se deshabilitan en los extremos) y medidor de avance | Scroll nativo sin JS |
| Pila de respaldo | `position: sticky` escalonado | Sin JS; sin animación |
| Receta | Casillas nativas, puntaje con `aria-live` | No guarda nada |
| Chat | Mensajes con indicador «escribiendo», `role="log"` + `aria-live`, foco al siguiente control, errores con `role="alert"`, historial *append-only*: «Cambiar» vuelve a preguntar y regresa a la comanda | Sin animación con `reduce` (los tiempos de espera pasan a 0) |
| Movimiento autónomo | Producto del hero: 1 ciclo de 4,8 s. Mascota: se mueve con el scroll | Nada se mueve solo más de 5 s (WCAG 2.2.2) |

Sin 3D, sin WebGL, sin librerías: ~20 KB de JS (≈7 KB gzip), ~55 KB de CSS (≈12 KB gzip).

---

## 4. Hallazgos de A1 y A2 aplicados

- **A2 §4.3 Propuesta 2 «Bloques de sabor»** y **C8 color como navegación** (Bucks, Partake, MindMarket; Webflow «Guided scrolling»): un color por capítulo y el índice/progreso toma ese color.
- **A2 §6 B** (usar 1–8): color blocking ✓, guided scrolling con progreso ✓, mascota con microanimación liviana ✓, collage de recortes ✓, tipografía cinética solo en titulares ✓, sección ink para la «historia/lifestyle» (La cuenta con foto) ✓, neobrutalismo dosificado ✓, View Transitions ✓. Evitar: scrolljacking (las pistas son scroll interno opcional), gradientes neón, glassmorphism y modo oscuro total ✓.
- **A2 §2.1 Crav** (palabras sueltas y stickers rotados) y **Partake** (pares tinte/tono, botones táctiles): palabras estampadas, `--x-plum-100`, `--x-laird-100`, botones que se hunden.
- **A2 §3.4** (scroll-driven nativo con `@supports`; NN/g: no animar texto obligatorio): solo se animan titulares, bloques y decoración.
- **A2 §3.7** (2.2.2 Pause, Stop, Hide): ningún movimiento autónomo de más de 5 s.
- **A1 §4.11 + hallazgo 4** (dos registros): voz de marca en titulares («Del antojo a la apertura», «¿Te tinca?»), registro sobrio en la pizarra, las comandas y las notas.
- **A1 §4.2** (transparencia de inversión + base de cifras): la pizarra publica la inversión inicial total (con el derecho de franquicia y el capital de trabajo incluidos), royalty, fondo, contrato y apertura; el resultado operacional y el payback van con su supuesto al lado.
- **A1 §4.4 + hallazgo 1** (embudo de calificación; preguntas de corte; tiempo de respuesta; gracias con agenda): el chat pregunta región, comuna, capital (tramos alineados con $43M), plazo, operar/delegar y experiencia, y termina en Pipedrive.
- **A1 §4.8** («Esto no es para todos» concreto, perfil «accesible» tipo Cinnaholic/Kung Fu Tea): receta con requisitos y lo que no hace falta.
- **A1 §4.6** (proceso visible con plazo): comandas + «3 a 6 meses».
- **A1 §4.7** (soporte por etapas: Sweet Paris «in business for yourself, not by yourself»): Antes / Durante / Después.

**Sobre el chat (contradice A2 §3.6, A2 §5 y la regla 9 de la guía «sin chatbot como formulario»).** El brief de A5 lo pide explícitamente, y lo diseñé para esquivar el problema que señala NN/g (los usuarios no conversan con bots y el lead necesita estructura): **no es un bot**. Es un formulario por pasos con forma de conversación: guion fijo, una pregunta por vez, respuestas en chips que mapean 1 a 1 a propiedades del CRM, progreso visible («Pregunta n de 8»), cada respuesta editable, comanda final revisable y **formulario clásico como alternativa** (y como respaldo sin JS). No hay campo libre de «pregúntame lo que quieras».

---

## 5. Qué rompe deliberadamente del DS v2 (y por qué)

| Rompe | Por qué |
|---|---|
| No usa cards ni la anatomía recomendada | Remake pedido por el cliente. Se usan tokens, temas (`bw-block-magenta`, `bw-block-teal`, `bw-theme-noche`), `base.css` y `motion.css`. |
| **Persian Plum y Laird Green** (comentados como «NO USAR» en `tokens/colors.css`) | El brief de A5-2 pide explorarlos. Están aislados en variables `--x-*`, marcados en pantalla «Color exploratorio · por confirmar con el cliente» y con contraste calculado (§7). |
| Kraft como color de capítulo (Preguntas) | La guía lo reserva a texturas; aquí es un bloque de fondo con texto ink (7,17:1). |
| Neobrutalismo más marcado que «dosificado» | Contorno 3 px + sombra dura en tarjetas, comandas y botones como sistema único; la capa de datos (pizarra, comanda) queda en fondo claro y tipografía sobria. |
| Chat como formulario | Ver §4. |
| Teenage Dreams en 9 kickers | Uno por capítulo, **solo palabras sin tildes ni ñ** (la carta, la masa, la cuenta, paso a paso, respaldo, la red, la receta, tu pedido, de la casa, para compartir). |
| `fonts.css` recortado | Solo Mostin 500/700/900/Outline y Teenage Dreams Bold (lo que copia la carpeta). |

---

## 6. Datos pendientes (todos visibles con `<mark class="bw-pending">`)

1. Locales +50 vs. 55 con fecha de corte (#2).
2. Desglose por formato; capital propio mínimo y financiamiento (#4); tramos de capital propuestos.
3. Duración de las etapas antes de firmar; días/horas de capacitación (#14).
4. Estado de zonas por comuna (#13).
5. Testimonios: ciudad, años en la red, dato de negocio, fotos y videos (#6, #7).
6. Criterios de exclusión («lo que no buscamos»).
7. Tiempo de respuesta al lead (#15) · «sin costo ni compromiso» (#18) · folio de la comanda.
8. Consentimiento, responsable, RUT y canal de derechos (Ley 21.719, #3).
9. Persian Plum y Laird Green: valores, rol y si son primarios o secundarios (#10).
10. Licencia web de Teenage Dreams y Mostin (#8, #9).
11. Fotos de locales y franquiciados reales (la foto usada es de marca, #6).

---

## 7. Contraste de los colores exploratorios (WCAG 2.x, calculado)

| Par usado | Ratio | Uso en el prototipo | Veredicto |
|---|---|---|---|
| Crema #F6E7C6 / Persian Plum #661A2B | **9,82** | Texto, citas y lede en «La red»; texto del hero en sabor plum | AA texto normal |
| Oro #F5B60E / Plum | **6,63** | H2, nombres, kicker y H1 del hero plum; CTA oro sobre plum (UI) y anillo de foco | AA texto normal y UI |
| Plum / Oro (texto plum en resaltado oro) | **6,63** | «Ábrelo tú» en el hero plum | AA |
| Crema / mezcla plum + 10 % crema (#742F3B) | **7,76** | Chips de datos en las citas | AA |
| Magenta-300 #EE7BAE / Plum | 4,62 | No se usa para texto (solo referencia) | AA al límite: evitar |
| Magenta #E74691 / Plum | 3,25 | No se usa | Solo ≥ 24 px o UI |
| Ink #191410 / Plum | **1,52** | **Prohibido** como texto; los bloques ink y plum se separan con borde crema/oro | Falla |
| Negro #000 / Laird Green #7E823D | **5,15** | Texto, H2, kicker y xchip en «¿Es para ti?»; H1 y lede del hero laird; pestaña 06 | AA texto normal |
| Ink / Laird | 4,48 | Solo borde de botones (UI ≥ 3) | Falla texto normal: no usar en texto < 24 px |
| Crema / Laird | 3,33 | No se usa | Solo ≥ 24 px |
| Blanco / Laird | 4,08 | No se usa | Solo ≥ 24 px |
| Oro / Laird | **2,25** | **Prohibido** | Falla |
| Laird / Plum | **2,95** | **Prohibido** (nunca se tocan como texto/fondo) | Falla |
| Ink / Laird-100 #EEEFDC (nuevo tinte) | **15,68** | Tarjeta «No hace falta»; resaltado del hero laird | AA |
| Laird-700 #5E612E (nuevo) / Laird-100 | 5,59 | Íconos ✕ de «No hace falta» | AA |
| Laird-700 / crema · papel · blanco | 5,32 · 5,95 · 6,51 | Reservado para texto «verde» sobre claro | AA |
| Ink / Plum-100 #F7DEE4 (nuevo tinte) | 14,38 | Reservado para tarjetas | AA |

Los derivados (`-700`, `-100`) se calcularon como en el DS v2: mismo tono y saturación HSL, solo cambia la luminosidad. **Ojo:** el RGB del Laird Green en el PDF (R126 G103 B130 = #7E6782, un malva) no coincide con su hex; se usó el hex #7E823D. Si el correcto fuera el malva, la tabla cambia (negro/malva 4,15: fallaría para texto normal).

Pares del DS ya verificados que también se usan: ink/oro 10,08 · ink/magenta 4,95 · crema/teal 4,91 · blanco/teal 6,01 · crema/ink 14,94 · ink/kraft 7,17 · magenta-700/papel 5,78 · ink/gold-100 15,22.

---

## 8. Mapeo a HubSpot (breve)

- **Tema:** `ds/tokens/*` + `base.css` en el CSS del tema; los `--x-*` se agregan al tema solo si el cliente confirma los colores.
- **Módulo «capítulo»** con campo de color (selector limitado a la paleta), número, kicker, H2 y bajada; la carta del header se genera desde un **menú HubSpot** con un campo de color por ítem.
- **Módulos:** `hero-sabores` (repeater: sabor, color, imagen, nombre) · `pista-horizontal` (repeater de tarjetas, reutilizable para ingredientes y comandas) · `pizarra-precios` (repeater de líneas: concepto, detalle, valor, fuente, pendiente sí/no — o **HubDB** de datos de franquicia) · `pila-respaldo` (3 grupos) · `citas-red` · `receta` (2 repeaters) · `faq-colores` (repeater + schema FAQPage) · `footer-notas`.
- **Chat:** módulo con JS propio que **envía a HubSpot Forms API** las mismas propiedades del formulario actual (`firstname`, `email`, `phone`, `city`, `con_cuanto_capital_cuentas_para_invertir_`, `en_cuanto_tiempo_te_gustaria_invertir_`) más región, modalidad, experiencia y consentimiento; después redirige o embebe el **agendador de Pipedrive**. El formulario clásico es un formulario HubSpot nativo (respaldo sin JS).

---

## 9. Ronda 1 de revisión (orquestador, 3 oct 2026)
- **Chat:**
  - La caja ahora tiene alto fijo, con `overflow-anchor: none`, y el auto-scroll ocurre solo dentro del log (`scrollTo` del log, con un `ResizeObserver` para seguir pegado al último mensaje). La página ya no se mueve al tocar un chip: se verificó con toques reales a 375 y 1440 px.
  - Todos los `focus()` usan `preventScroll`.
  - Si hay muchos chips (las 16 regiones), el área de chips se desplaza por dentro.
- **Hero móvil:** el producto (118 × 170 px) queda junto al H1, y el selector de sabor sube a una sola fila desplazable antes del texto. Los dos quedan en la primera pantalla de 375 × 812, sobre la barra fija.
- **Formulario clásico:** queda oculto de forma explícita (`.classic:not([open])`) mientras el `<details>` esté cerrado.

## 10. Ronda 2 (5 oct 2026): cifras oficiales de inversión aplicadas
- **La cuenta:** la pizarra la encabeza la inversión inicial total desde $43.000.000 y, en una fila propia debajo y más chica, «Incluye el derecho de franquicia ($10.000.000) y el capital de trabajo ($3.000.000).». Se eliminaron la línea propia del derecho de franquicia (con IVA), la tarjeta «¿Cuánto es el 9 %?» (un monto calculado sobre una venta hipotética) y las tarjetas de desempeño pendientes. La columna lateral queda con dos tarjetas: «Resultado modelado» (12 % de resultado operacional y 2,6 años de payback, con el supuesto «Resultado modelado en base a un escenario promedio de un local tipo Módulo.») y «Lo que no está en la carta (todavía)» (desglose por formato y capital propio mínimo, pendientes).
- **Resto:** royalty 9 % y fondo 2 % de la venta neta; contrato «5 años, renovable por 4 periodos» (pizarra, comanda de la firma, FAQ); apertura «3 a 6 meses desde la firma» (lede, comandas, destacado, FAQ); receta «Puedo invertir desde $43.000.000»; chat y formulario clásico con «Menos de $43M» / «$43M a $60M» y reacciones con $43.000.000; notas 1, 2 y 5 con la fuente «Cifras entregadas por Buffalo Waffles, octubre 2026».
- `a5-2.css?v=4` y `a5-2.js?v=2`.
