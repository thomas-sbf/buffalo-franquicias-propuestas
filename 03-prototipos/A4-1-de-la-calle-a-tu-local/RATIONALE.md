# A4-1 · De la calle a tu local — RATIONALE

**Diseñador:** A4 (línea "Remake desde la raíz de la marca") · **Fecha:** 2 oct 2026
**Archivos:** `index.html` · `css/marca.css` (base de marca copiada del DS v2) · `css/ruta.css` (sistema propio) · `js/ruta.js` · `assets/` (todo local, carpeta autocontenida). La única dependencia externa es Montserrat desde Google Fonts, igual que en el DS v2.

## 1. Concepto
**La página es una ruta.** El inversionista recorre, parada por parada, el mismo camino que hizo Buffalo: de un waffle envuelto en kraft en la calle a una red de locales. La ruta termina en **su** inauguración.
La personalidad va en el envoltorio (kraft, stickers troquelados, señalética callejera) y la seriedad en el contenido (pre-cuenta, notas al pie y pendientes a la vista).

## 2. Mapa del recorrido
Modelo de navegación: **una sola página lineal con paradas**. En escritorio (≥1200 px) hay un **rail fijo con forma de carretera**: muestra las 11 paradas, la carretera se rellena según el avance y el isologo marca "estás aquí". En móvil hay una barra de progreso bajo el header, el menú "La ruta" y la barra fija **Postula + WhatsApp**.

| # | Parada | Qué hace | ¿Nueva respecto del sitio actual? |
|---|---|---|---|
| 00 | **Salida** (hero kraft) | H1 «Empezó en la calle. Sigue en tu local.», tira-ticket TL;DR (inversión inicial total desde $43.000.000 · 3 a 6 meses desde la firma · 5 años de contrato, renovable por 4 periodos), Postula + Arma tu Buffalo | **Nueva.** Hoy: «Sé dueño…», video y CTA a WhatsApp |
| 01 | **La calle** | Relato de origen con fotos reales del Brandbook (carro y local a la calle) y 3 claves del modelo (mesón + delivery, equipo 2+2, sin experiencia gastronómica) | **Nueva** (hoy no hay relato de origen) |
| 02 | **El paquete** | Qué incluye la franquicia (9 ítems) más «Pone Buffalo / Pones tú». Se revela al desenvolverse el kraft (en móvil, como dos puertas); junto al título va la bolsa delivery kraft del Brandbook | **Nueva** (hoy está repartido en las FAQ 2, 8, 9 y 12) |
| 03 | **La cuenta** | Pre-cuenta térmica encabezada por la inversión inicial total (desde $43.000.000) y, debajo y más chico, su desglose (incluye el derecho de franquicia y el capital de trabajo); luego royalty, fondo de marketing, contrato y apertura. Al lado: el resultado modelado (resultado operacional y payback) con su supuesto | **Nueva** (los costos hoy solo están en el blog) |
| 04 | **De norte a sur** | «La Ruta 5 llega hasta Chiloé. Buffalo, hasta Punta Arenas.» 16 letreros de carretera (11 con Buffalo según el mapa publicado). Cada uno abre una ficha de región, y el botón «Quiero abrir aquí» la envía al configurador | **Nueva** (hoy el mapa es una imagen sin texto) |
| 05 | **Arma tu Buffalo** | Configurador: formato (con fotos reales), región y comuna, rol, plazo y capital. Arma una **comanda** en vivo; «Enviar mi comanda» prellena la postulación | **Flujo nuevo** |
| 06 | **Los kilómetros** | 7 hitos kilométricos con el tramo «3 a 6 meses desde la firma» y la mascota como «estás aquí» en el km 0 | **Nueva** (hoy está escondido en la FAQ 5) |
| 07 | **Los que ya abrieron** | Afiches de paradero con los 2 testimonios reales y un «afiche libre» para el próximo franquiciado | Rediseño completo; los datos que faltan van marcados |
| 08 | **Postula** | Formulario propio de 3 pasos prellenado con la comanda, consentimiento (Ley 21.719) y pantalla de gracias con Pipedrive y WhatsApp | **Flujo nuevo** (hoy: 9 campos, 1 paso, sin consentimiento) |
| 09 | **Preguntas de mesón** | Pizarra de menú con 11 FAQ en 4 categorías | Rediseño (hoy son 17 preguntas sin categorías) |
| Meta | **Tu inauguración** | Cierre en oro a sangre con la mascota ángel y CTA | **Nueva** |
| — | Footer | Contacto, redes y **notas 1–6** de cada cifra | Rediseño |

## 3. Interacciones y animaciones
- **Firma 1. El kraft se desenvuelve (parada 02):** dos solapas de kraft con tinta impresa, selladas con el isologo, tapan el contenido del paquete. Al hacer scroll (`view-timeline` nativo), el sello se despega y las solapas se pliegan en 3D CSS (`rotateX` con `perspective`). Fallback sin scroll-timeline (Firefox): IntersectionObserver más transiciones. Con reduced-motion o sin JS no hay envoltorio y el contenido se ve directo. El envoltorio es `aria-hidden`, así que el lector de pantalla lee la lista siempre.
- **Firma 2. Stickers que se pegan:** son los doodles reales del Brandbook, troquelados. Entran grandes, rotados y con sombra larga, y «se pegan» (escala 1 y sombra corta) al entrar al viewport con `animation-timeline: view()`; el fallback usa IO. En el hero se pegan al cargar, escalonados (620 ms, `--ease-sticker`).
- **Progreso de la ruta:** la carretera del rail y la barra móvil se llenan con `animation-timeline: scroll(root)`. El fallback es JS con `requestAnimationFrame` y la variable `--p`. El isologo viaja a la parada activa.
- **Comanda viva:** usa `aria-live`, y el renglón recién cambiado destella en oro. Al completar los 4 pasos obligatorios, el talón se «imprime» (`clip-path` con `steps()`).
- **Ruta 5:** la línea central del asfalto avanza solo mientras se ve (nunca con reduced-motion).
- **Formulario:** View Transitions same-document entre pasos como mejora progresiva, validación con los mensajes de `voz-inversionista.md` y foco gestionado.
- Botones «sticker» que se hunden al presionar.
- **Nunca se animan cifras, requisitos ni texto obligatorio.** Sin scrolljacking, sin loader, sin WebGL, sin librerías (todo es CSS y ~16 KB de JS vanilla sin minificar).

## 4. Hallazgos de A1 y A2 aplicados
**A1 (benchmark)**
- §1.1 y §4.4, embudo de calificación: el configurador más el formulario de 3 pasos. Se agenda **después** de calificar (§4.4, interpretación): Pipedrive va en la pantalla de gracias.
- §1.2 y §4.2, cifras con base: cada cifra tiene superíndice y nota. El resultado operacional y el payback se muestran con su supuesto al lado («Resultado modelado en base a un escenario promedio de un local tipo Módulo.»).
- §1.4 y §4.11, dos registros: el envoltorio es de marca (kraft, stickers, paraderos) y los datos van en una capa limpia (pre-cuenta blanca, Montserrat tabular).
- §1.5 y §6 (fila 5), disponibilidad territorial: la Ruta 5 muestra las 16 regiones con su estado real según el mapa publicado, **sin urgencia inventada** (anti-patrón 8).
- §1.7, §4.5 y §7.2: un CTA principal («Postula») con secundario («Arma tu Buffalo»), barra fija en móvil y WhatsApp fuera del hero (anti-patrón 11).
- §4.6: el proceso es visible y destaca «3 a 6 meses desde la firma».
- §4.3 y §8.11: testimonios con nombre, local y ciudad, y los huecos de datos marcados.
- §4.9: FAQ por categorías (Inversión, Operación, Proceso, Contrato).
- §4.10 y §8.14: un solo `<h1>`, cifras en HTML y sin contadores animados.
- §4.11: la mascota es el «estás aquí» del proceso y aparece en el cierre y en la pantalla de gracias, **nunca junto a cifras**.

**A2 (tendencias)**
- §1.1–1.2 (C1, C2): crema cálido como base e ink con matiz en lugar de #000.
- §1.6 y §3.5, lo hecho a mano como señal de confianza: doodles reales troquelados, kraft con grano SVG, papel rasgado y collage foto + doodle (matriz §5).
- §3.3, guided scrolling y TL;DR: la ruta con paradas y progreso, más la tira-ticket del hero.
- §3.4 y §5: scroll-driven animations nativas con `@supports` y fallback; View Transitions same-document.
- §4.2, reglas de contraste: el oro siempre es fondo (ink sobre oro, 10,08). Sobre kraft solo va ink (7,17) o ink-soft (5,10). Los nuevos pares se calcularon con la fórmula WCAG.
- §4.3, Propuesta 1 «Crema & Kraft» como base, con dos rupturas deliberadas: el asfalto (ink) en la parada 04 y el oro a sangre en el cierre.
- §3.7: reduced-motion como requisito; sin 3D ni loader (§2.2, §3.4).

## 5. Qué rompe del DS v2 y por qué
- **No usa ninguna card del DS.** Hero, statbar, features, process, leadform, faq y footer se reemplazan por componentes nuevos: paradero, tira-ticket, collage polaroid, paquete con envoltorio, pre-cuenta, letreros de carretera, comanda, hitos kilométricos, afiches de paradero y pizarra.
- **Navegación por rail lateral** en vez de header con anclas: el header del DS no expresa recorrido.
- **Kraft como superficie** (el DS lo limita a texturas y separadores): aquí es el fondo del hero y del envoltorio, siempre con texto ink (7,17:1). Nunca se usa kraft como color de texto.
- **Teal como señalética vial** (el DS lo reserva para «soporte»): recuerda los letreros verdes de carretera y lleva texto blanco (6,01:1).
- **Display más contenido** (~84 px en 1440, no 106–140): el H1 de 2 líneas, la tira TL;DR y los CTA entran sobre el pliegue a 1440×900.
- **Doodles del Brandbook (p.21) como stickers troquelados.** El DS v2 no los tenía (PENDIENTES #12). Se recortaron de `uploads/doodle.pdf` sin redibujar: el margen del troquel es el mismo negro de la lámina original. En esta carpeta van los 14 que se usan: WebP con alfa, de 3 a 30 KB cada uno.
- **Fotos reales de locales** extraídas del Brandbook 2026 (p.22: carro; p.44: local a la calle, isla y local en centro comercial). El DS v2 decía que no había fotos de locales.
- **Se mantiene del DS:** paleta y derivados AA, tipografías y archivos, tokens de motion, la regla de reduced-motion, la voz para inversionistas, `.bw-pending` y los textos de error y consentimiento.

## 6. Datos pendientes (todos marcados en pantalla con `.bw-pending`)
1. **Locales: +50 vs. 55**, con fecha de corte (PENDIENTES #2, nota 1).
2. **Desglose de la inversión por formato**, capital propio mínimo y si hay financiamiento.
3. **Formatos que se franquician** (isla, local a la calle, food court), con m² e inversión de cada uno. El configurador los usa como referencia.
4. **Tramos de capital** del configurador y del formulario (#4).
5. **Fotos del Brandbook:** qué locales son y permiso de uso web. Fotos de franquiciados con su local (#6).
6. **Testimonios:** ciudad de Boulevard Marina, años en la red, un dato de negocio y video de 30–60 s (#7).
7. **Lista de locales con dirección y zonas disponibles por comuna** para la ficha de región (#13).
8. **Capacitación** (días u horas) y qué incluye el acompañamiento en la apertura (#14).
9. **Plazo típico del km 1 al km 5** (antes de la firma).
10. **Tiempo de respuesta al lead**, «[X horas hábiles]» (#15).
11. **Consentimiento (Ley 21.719):** texto, razón social, RUT, política de privacidad, canal de derechos y con quién se comparten los datos (#3).
12. **WhatsApp:** ¿bot (patg.ai) o número directo? (#17). Se usó el link real del bot.
13. **Licencias web** de Teenage Dreams (#8; aquí solo en «de la calle a tu local» y «fin de la ruta», sin tildes) y de Mostin (#9).
14. **Doodles en SVG** sueltos para reemplazar los recortes (#12).

## 7. Mapeo a HubSpot (breve)
- **Tema:** `marca.css` y `ruta.css` van al CSS global del tema; `ruta.js` al JS del tema. Montserrat se carga desde Google Fonts y Mostin y Teenage Dreams se suben a File Manager.
- **Módulos** (1 por parada): `header-ruta` (repeater de paradas: número, nombre, ancla), `hero-kraft` (H1, bajada, repeater de datos de la tira, 2 CTA, imagen y stickers), `parada-collage`, `paquete` (repeater de ítems, más el toggle del envoltorio), `precuenta` (repeater de bloques y renglones, cifras de resultado modelado con su supuesto), `ruta5`, `configurador` (repeater de opciones por paso; el formato lleva imagen), `kilometros` (repeater de hitos más el tramo), `afiches` (repeater de testimonios: nombre, local, ciudad, cita, foto, año y dato), `postula`, `pizarra-faq` (repeater pregunta/respuesta/categoría con schema FAQPage) y `cierre`. El footer lleva un repeater de notas.
- **HubDB «regiones»** (código, nombre, presencia, locales, zonas disponibles): alimenta los letreros, la ficha, el configurador y el select del formulario desde una sola fuente.
- **Formulario:** es un módulo propio que envía a la Forms API de HubSpot (el embed nativo no tiene pasos). Mantiene las propiedades actuales (`firstname`, `lastname`, `email`, `phone`, `comuna`, plazo y capital) y suma `formato_interes`, `region`, `rol_operacion`, `experiencia_previa`, `local_en_vista` y `consentimiento`. La pantalla de gracias enlaza al agendador de Pipedrive.

## 8. QA (2 oct 2026, Chromium en http://127.0.0.1:8765)
- **1440×900 y 375×812:** `scrollWidth == innerWidth`, 0 imágenes rotas, 1 `<h1>`, 0 elementos fuera del viewport (salvo la cinta decorativa del cierre, recortada por su contenedor), todas las imágenes con `alt` y `loading="lazy"` bajo el pliegue. Peso total de la carpeta: 1,6 MB; imagen más pesada: 160 KB.
- **Flujos probados de punta a punta:** menú móvil (abrir, navegar, Esc y vuelta del foco); letrero de región → ficha → «Quiero abrir aquí» → configurador prellenado; configurador → comanda completa → talón → «Enviar mi comanda» → formulario prellenado (formato, región, comuna, rol, plazo, capital); formulario con errores por paso, consentimiento obligatorio y pantalla de gracias con foco. 0 errores de consola durante los flujos.
- **Animaciones:** envoltorio de kraft (solapas en escritorio, puertas en móvil), stickers, progreso del rail y timbre de la comanda, verificados con scroll-driven nativo. El fallback por IO y la ruta de reduced-motion están en CSS y JS (`.no-sda`, `@media (prefers-reduced-motion)`).
- Los CSS y JS llevan `?v=` para evitar caché al revisar.
- **Ronda 1 (3 oct 2026):** en móvil la primera pantalla muestra una versión reducida de la mano con el waffle y el sticker B★W junto al H1, sin bajar el CTA (el CTA termina en 756 px de 812). Para compactar sin quitar secciones, las claves, los letreros de región (sobre una carretera horizontal) y los afiches pasan a carruseles con scroll-snap. La comanda queda en un resumen fijo y colapsable, que muestra el talón «Enviar mi comanda» cuando está lista. También se compactaron los hitos y el resto de los bloques, y las notas al pie quedan plegables (abiertas en escritorio; se abren al seguir un superíndice). Altura a 375 px: 20.799 → 14.623 px. El escritorio queda igual.
- **Ronda 2 (5 oct 2026): cifras oficiales de inversión aplicadas.** Inversión inicial total desde $43.000.000 (encabeza la pre-cuenta, la tira del hero, el configurador, el formulario y la FAQ); debajo y más chico: «Incluye el derecho de franquicia ($10.000.000) y el capital de trabajo ($3.000.000).». Se eliminaron el renglón «Al firmar» (el derecho de franquicia como línea propia, con IVA), el total derivado «al sistema», el timbre de pendiente sobre los costos y la plantilla legal de la nota 3. Royalty 9 % y fondo de marketing 2 % de la venta neta; contrato «5 años, renovable por 4 periodos» (paquete, comanda, km 5, FAQ); apertura «3 a 6 meses desde la firma». El bloque «Desempeño de la red» pasa a «Resultado modelado»: 12 % de resultado operacional y 2,6 años de payback, con el supuesto «Resultado modelado en base a un escenario promedio de un local tipo Módulo.» al lado. Tramos de capital: «Menos de $43M» y «$43M a $60M» (siguen marcados como pendientes). Notas 2, 3 y 5 reescritas con la fuente «Cifras entregadas por Buffalo Waffles, octubre 2026». `ruta.css?v=19`.
