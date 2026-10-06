# A5-1 · «El negocio en vivo» — rationale

**Agente:** A5 (diseñador, línea «Disruptivo 2026») · **Fecha:** 2 oct 2026
**Abrir:** `index.html` (carpeta autocontenida: `ds/` trae la copia de los tokens, `base.css` y las fuentes; `img/` trae las imágenes; `css/` y `js/` son propios).

---

## 1. Concepto en dos líneas

El sitio deja de ser un folleto y pasa a ser **el tablero de control del inversionista**: todo lo que Buffalo Waffles ha publicado, ordenado como un deck en vivo, con **la fuente de cada número a la vista** y lo pendiente marcado como pendiente.
Su pieza central es un **simulador** que compara el capital del usuario con la inversión inicial total (desde $43.000.000) y muestra el resto de las condiciones tal como las entregó la marca, sin proyectar ventas ni utilidades.

**Por qué esta idea:** A1 (hallazgo 2 y §4.2) dice que mostrar los números genera credibilidad *solo si se explica de dónde salen*, y que el mayor riesgo de Buffalo son las cifras sin respaldo. En vez de esconder ese problema, el concepto lo convierte en estética: la transparencia («Publicado en el sitio», «Publicado en el blog», «Por confirmar») es el sistema visual.

---

## 2. Mapa del recorrido

Navegación tipo **deck**: riel fijo con el índice numerado 00–08 en escritorio (resalta el capítulo activo), hoja «Índice» en móvil, barra de progreso de lectura y barra móvil fija **Postula + WhatsApp**.

| # | Sección | Qué hace | ¿Nueva vs. sitio actual? |
|---|---|---|---|
| — | Barra superior «En vivo» | Logo, estado «Tablero del inversionista · corte de datos [a confirmar]», «Agenda una reunión» (Pipedrive), CTA «Postula» | **Nuevo** (hoy: menú + AGENDAR) |
| 00 | Portada | H1 cinético «Tu Buffalo, con los números sobre la mesa.» (la palabra «mesa» se arma como una mesa oro). Bento de KPI en islas claras: inversión inicial total (con su desglose debajo), apertura 3 a 6 meses, contrato 5 años renovable por 4 periodos, 11 regiones (con mini-tira de Chile), locales «+50 · 55» marcado como inconsistencia. Leyenda de fuentes. | **Nuevo** (hoy: video + «Sé dueño…» + WhatsApp) |
| — | Cinta «En vivo» | Datos publicados no financieros en movimiento, con botón de pausa | **Nuevo** |
| 01 | El trato | Libro contable «Tú pones (debe) / Buffalo pone (haber)», cada línea con su fuente, + cita del blog | **Nuevo** |
| 02 | Simulador «Arma tu escenario» | Capital, región y formato → inversión inicial total con su desglose fijo, cuánto falta o si alcanza, royalty 7 % y fondo 2 % (como porcentajes), plazos (contrato y apertura), región y formato; bloque «Resultado modelado» (12 % y 2,6 años con su supuesto); «Postula con este escenario» y «Copia el resumen» | **Nuevo** (flujo y sección) |
| 03 | Presencia «Chile, en una línea» | Chile abstraído como tira de 16 regiones (acostado en escritorio, vertical en móvil); 11 encendidas; ficha por región con lo que se sabe y lo que falta; «Postula en esta región» | **Nuevo** (hoy: imagen `Mapa.png` sin texto) |
| 04 | La ruta | Gantt de los 7 pasos (FAQ 5) con el plazo de apertura como eje: antes de firmar (duración por confirmar) / firma / 3 a 6 meses | **Nuevo** (hoy: escondido en FAQ 5) |
| 05 | Operación «Un local, en una pantalla» | Bento: semana tipo 2 + 2, canales presencial + delivery, KAM en órbita 1 : 10, interruptor «¿Operas o delegas?», experiencia no requerida, segundo local, carta de productos | **Nuevo** |
| 06 | La red | Los 2 testimonios reales como **fichas** con los campos que pide un inversionista (ciudad, años, dato de negocio, foto) a la vista como pendientes + 3 placeholders de video | Rediseño + **campos nuevos** |
| 07 | Postulación «Levanta la mano» | Formulario de 3 pasos con **ficha en vivo** al lado (se completa mientras escribes, % de avance), View Transitions entre pasos, precarga desde simulador o mapa, consentimiento Ley 21.719, gracias con Pipedrive + WhatsApp | **Nuevo** (hoy: 9 campos en 1 paso, sin consentimiento) |
| 08 | Preguntas «Pregúntale al tablero» | Buscador en vivo + filtro por tema, 14 respuestas cortas reescritas con su fuente; estado vacío que deriva a WhatsApp | **Nuevo** (hoy: acordeón de 17) |
| — | Cierre «¿Te cuadra?» | Bloque oro con mascota y CTAs | **Nuevo** |
| — | Footer «Notas y fuentes del tablero» | 6 notas numeradas enlazadas desde los superíndices (la 5 con el supuesto del resultado modelado), contacto | **Nuevo** |

**Flujos nuevos:** simulador → formulario precargado · mapa → formulario con región · postulación → gracias → Pipedrive · búsqueda en FAQ → WhatsApp si no hay respuesta.

---

## 3. Interacciones y animaciones

| Pieza | Cómo funciona | Accesibilidad / reduced-motion |
|---|---|---|
| H1 cinético | Palabras que suben (CSS, 70 ms de desfase) y «mesa» que se arma con `clip-path` | Solo titulares. Con `reduce`, texto estático |
| Palabra cinética de cada H2 | `animation-timeline: view()` (mejora progresiva con `@supports`) | Envuelto en `prefers-reduced-motion: no-preference` |
| Barra de progreso | `animation-timeline: scroll()`; fallback JS con `requestAnimationFrame` | Es indicador de posición, no movimiento autónomo |
| KPI «animados» | Se animan los **gráficos** (mini-tira de regiones, barras del Gantt, celdas de la semana, órbita del KAM con el scroll), **nunca las cifras** (DS: «las cifras se escriben, no se animan») | Todo con `no-preference`; las cifras están en el HTML |
| Cinta «En vivo» | Marquee CSS de 46 s | Botón de pausa (WCAG 2.2.2); con `reduce` queda estática y desplazable |
| Simulador | `input type=range` nativos (flechas de a $5M o $0,5M), `aria-valuetext` en pesos, `<output>`, veredicto `aria-live`; barras apiladas y medidor con transición; **resumen pegado en móvil** para ver el efecto sin bajar | Teclado completo, foco visible oro |
| Tira de Chile | Botones con `aria-pressed` y foco itinerante (flechas, Inicio/Fin); en móvil, al tocar, acerca la ficha | Lista de texto real (no imagen) |
| Formulario | 3 pasos con validación por paso (mensajes de `voz-inversionista.md`), foco al primer error, View Transitions entre pasos, ficha en vivo con destello | Sin View Transitions con `reduce` o sin soporte |
| FAQ | Búsqueda sin tildes (normaliza), filtro por tema, conteo `role=status`, resaltado del término | `<details>` nativo |

Sin 3D, sin WebGL, sin librerías: ~19 KB de JS vanilla (≈7 KB gzip), ~65 KB de CSS (≈14 KB gzip).

---

## 4. Hallazgos de A1 y A2 aplicados

- **A1 hallazgo 2 + §4.2 + recomendación 5** (cifras con base): cada número lleva superíndice y nota; leyenda de fuentes; el resultado operacional y el payback aparecen con su supuesto al lado. **A1 §4.2 [I]** advierte que una calculadora de ROI es arriesgada → el simulador **no calcula ROI ni montos mensuales**: solo compara el capital del usuario con la inversión inicial total y dice explícitamente qué no simula.
- **A1 §4.1** (menú con las preguntas del inversionista): el índice del deck es «El trato, Simulador, Presencia, La ruta…».
- **A1 hallazgo 5 + §6 fila 5 + recomendación 8** (urgencia creíble por territorio, alternativa en texto como Cinnaholic): la tira de regiones *es* la lista de texto; estados por comuna quedan como pendiente.
- **A1 §4.6** (el plazo de apertura está escondido y es un argumento): sección propia con Gantt (3 a 6 meses desde la firma).
- **A1 hallazgo 1 + §4.4 + recomendaciones 6–7** (embudo de calificación de 3 pasos; gracias con Pipedrive + WhatsApp): formulario de 3 pasos, tramos de capital alineados con $43M (marcados «a confirmar»), operar/delegar, experiencia; agenda **después** de calificar.
- **A1 hallazgo 7 + §4.5** (un CTA principal repetido + secundario): «Postula» en barra superior, riel, hero, simulador, mapa, cierre y barra móvil; WhatsApp y agenda con rol secundario.
- **A1 §4.3 + recomendación 11** (prueba social de la audiencia correcta): fichas con años en la red y dato de negocio como campos visibles.
- **A1 §4.9 + recomendación 13** (FAQ por categorías): 4 temas + buscador.
- **A2 §3.3 TL;DR / pitch deck y bento** («la tendencia más directamente aplicable a un sitio para inversionistas»): estructura de deck + bento.
- **A2 §4.3 Propuesta 3 «Noche streetwear»** y su riesgo («vida nocturna»): base ink, pero **todas las cifras viven en islas claras** (papel/blanco), como pide la mitigación.
- **A2 §3.4 motion** (scroll-driven nativo con `@supports`, View Transitions same-document, NN/g contra texto animado en B2B): animación en gráficos y titulares, nunca en cifras ni requisitos.
- **A2 §3.2** (display gigante + mono como etiqueta): Mostin a 140 px en el H1 (1440 px); en vez de una mono ajena al brandbook, Montserrat UC tabular para etiquetas (A2 §5, fila «Mono»).
- **A2 §3.6** (CTA persistente tipo MindMarket/Terminal; transparencia tipo «Pricing en el nav»): «Postula» siempre visible y el simulador accesible desde el hero.
- **A2 §3.7** (la mayoría de los premiados no respeta reduced-motion): todo el motion está condicionado.

---

## 5. Qué rompe deliberadamente del DS v2 (y por qué)

| Rompe | Por qué |
|---|---|
| No usa ninguna card ni la anatomía recomendada de la guía | Instrucción del cliente: remake, no mejora incremental. Se usan solo tokens, temas (`bw-theme-noche`, `bw-island`, `bw-block-oro`), `base.css` (foco, `.bw-pending`, skip-link) y la regla de reduced-motion de `motion.css`. |
| Tema noche en **casi todo el sitio** (la guía lo limita a 1–2 secciones) | Es la dirección «Noche streetwear» llevada al límite; se mitiga con islas claras para cada número (A2 §4.3). |
| H1 fluido hasta 168 px (140 px a 1440; el máximo de `--fs-display-xl` es 140) | Display gigante como firma (A2 §3.2: comida 100–430 px). |
| «KPI animados» pese a la regla «nada de cifras animadas» | Se resuelve animando **los gráficos** y nunca el número: las cifras están escritas en el HTML desde el primer render. |
| Marquee | La guía no los prohíbe, pero sí carruseles automáticos: este lleva pausa y se detiene con `reduce`. |
| Mostrar el resultado operacional y el payback | Van dentro del simulador, en «Resultado modelado», siempre con el supuesto al lado; no se aplican al escenario del usuario. |
| `fonts.css` recortado | Solo declara los archivos que la carpeta copia (Mostin 500/700/900/Outline). Teenage Dreams no se usa: el tablero no lleva script. |
| Interlineado de display 0,92–1,1 | Mostin con tildes (Ú, Ó, Í) chocaba con la línea superior a 0,88; en móvil sube a 1,1. |

---

## 6. Datos pendientes (todos visibles con `<mark class="bw-pending">`)

1. Fecha de corte de los datos del tablero.
2. Locales: «+50» vs. «55» → cifra única con fecha (#2).
3. Formatos (isla, local, food court), m² y rango de inversión por formato.
4. Capital propio mínimo y financiamiento (#4); tramos de capital propuestos.
5. Locales y zonas disponibles por región/comuna (#13).
6. Duración de las etapas antes de la firma; días/horas de capacitación (#14).
7. Tiempo de respuesta al lead (#15) · «sin costo / sin compromiso» (#18).
8. Testimonios: ciudad de Boulevard Marina, años en la red, dato de negocio, fotos; 3 videos (#6, #7).
9. Cuántos franquiciados tienen más de un local.
10. Consentimiento, razón social, RUT, canal de derechos (Ley 21.719, #3).
11. WhatsApp: bot (patg.ai) o número directo (#17). Se usa el link real actual.

---

## 7. Mapeo a HubSpot (breve)

- **Tema:** `ds/tokens/*` + `base.css` al CSS del tema; `css/a5-1.css` se parte por módulo.
- **Módulos:** `topbar-deck` (menú HubSpot + CTA) · `deck-rail` (menú) · `hero-kpi-bento` (repeater de KPI: etiqueta, valor, nota, fuente, estado) · `ticker` (repeater de texto) · `ledger` (2 repeaters) · `simulador` (campo numérico editable de la inversión inicial total; textos fijos de desglose, royalty, fondo, contrato, apertura y resultado modelado; JS del módulo) · `regiones-strip` (repeater de 16 regiones: nombre, código, presencia, locales, zonas) · `gantt-pasos` (repeater de pasos con tipo de barra) · `bento-operacion` · `fichas-franquiciado` (repeater + campo video) · `leadform-deal-room` (**HubSpot Forms API** con propiedades existentes `firstname`, `email`, `phone`, `city`, `con_cuanto_capital_cuentas_para_invertir_`, `en_cuanto_tiempo_te_gustaria_invertir_` + nuevas para región, modalidad, experiencia y consentimiento; redirección a Pipedrive) · `faq-buscador` (repeater con categoría + schema FAQPage) · `cta-oro` · `footer-notas` (repeater de notas).
- **Una sola fuente de verdad:** las cifras del simulador, KPI y notas deberían leerse de un **HubDB** «datos-franquicia» con fecha de corte, para que el +50/55 no vuelva a divergir.

---

## 8. Ronda 1 de revisión (orquestador, 3 oct 2026)
- **Móvil compacto: de 22.933 a 14.275 px a 375 px, sin quitar secciones.**
  - El Gantt pasa a un stepper vertical (< 900 px).
  - «El trato» muestra una columna a la vez, con un selector Tú pones / Buffalo pone.
  - El simulador pliega el detalle en dos `<details>` (capital y calendario/región/«lo que no simulamos»).
  - El bento de operación, las fichas y los videos se compactan: citas de 4 líneas con «Leer la cita completa» y videos en pista horizontal.
  - Chile se muestra en dos columnas (norte | sur).
  - «Tu ficha» queda plegada; la FAQ muestra 6 de 14 con «Ver las 14».
  - Las notas del footer quedan plegadas y se abren solas al tocar un superíndice.
  - En escritorio todo queda abierto y se ve igual que antes.
- **Hero móvil:** se agregó el recorte de producto en mano, en una versión liviana (`img/mano-king-kong-sm.webp`, 10 KB), junto al H1. La versión de escritorio pasa a `loading="lazy"` y no se descarga en móvil.
- **H1:** sin `overflow:hidden`, sin `clip-path` y sin opacidad 0. Es legible desde el primer frame; el movimiento dura 420 ms y solo desplaza 0,1 em.

## 9. Ronda 2 (5 oct 2026): cifras oficiales de inversión aplicadas
- **Simulador rehecho solo con datos declarados:** se eliminaron el selector de lectura FAQ vs. blog sobre si la inversión incluía el derecho, el slider de venta neta hipotética, los montos mensuales calculados, la barra con el porcentaje restante «para la operación», la barra apilada con el derecho destacado en oro y el calendario con fechas proyectadas. Queda: capital (pasos de un millón, parte en $43.000.000) frente a la inversión inicial total desde $43.000.000 (cuánto falta o si alcanza), región, formato, el desglose fijo debajo y más chico, royalty 7 % y fondo de marketing 2 % como porcentajes, plazos (contrato «5 años, renovable por 4 periodos» y apertura «3 a 6 meses desde la firma») y «Resultado modelado» (12 % de resultado operacional y 2,6 años de payback) con el supuesto «Resultado modelado en base a un escenario promedio de un local tipo Módulo.». «Postula con este escenario» prellena «Menos de $43M» / «$43M a $60M»…, y «Copia el resumen» solo copia cifras oficiales.
- **Resto del tablero:** KPI (inversión inicial total, apertura 3 a 6 meses, contrato 5 años renovable por 4 periodos), cinta en vivo, «El trato» (se quitó la línea propia del derecho de franquicia con IVA y el total mensual derivado), Gantt a 6 meses (columna previa a la firma con el mismo ancho), formulario, FAQ y notas 1, 2 y 5. Nueva fuente en la leyenda: «Entregado por Buffalo».
- `a5-1.css?v=2` y `a5-1.js?v=2`.
