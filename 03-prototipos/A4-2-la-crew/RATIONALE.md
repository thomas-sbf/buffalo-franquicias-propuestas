# A4-2 · La Crew — RATIONALE

**Diseñador:** A4 (línea "Remake desde la raíz de la marca") · **Fecha:** 2 oct 2026
**Archivos:** `index.html` (el fanzine) · `carnet.html` (test ¿Eres Buffalo? → carnet → postulación) · `css/marca.css` (base de marca copiada del DS v2) · `css/zine.css` (sistema propio) · `js/zine.js` · `js/carnet.js` · `assets/` (todo local, carpeta autocontenida). La única dependencia externa es Montserrat desde Google Fonts, igual que en el DS v2.

## 1. Concepto
**«No buscamos compradores. Buscamos crew.»** La franquicia se presenta como una crew que elige a sus socios. El sitio es un **fanzine riso N.º 01**, con cartas coleccionables de franquiciados, un álbum de láminas por región y un **carnet de socio** que se timbra en cada etapa del proceso.
Postular no es llenar un formulario: es **sacar tu carnet** respondiendo «¿Eres Buffalo?».

## 2. Mapa del recorrido
Modelo de navegación: **multipágina tipo revista**. La portada funciona como índice (cover lines con número de página), el header abre un **índice en diálogo** y muestra el **folio** de la página que se está leyendo, y el CTA saca al visitante del fanzine hacia una **segunda pantalla enfocada** (`carnet.html`). En móvil hay barra fija **Postula + WhatsApp**. Es lo opuesto a A4-1 (una sola ruta continua con rail).

**`index.html` — el fanzine**

| Pág. | Sección | Qué hace | ¿Nueva respecto del sitio actual? |
|---|---|---|---|
| 00 | **Portada** | Cabecera «LA CREW» con desregistro riso, H1 «No buscamos compradores. Buscamos *crew*.», bajada con datos publicados, CTA «Postula: saca tu carnet» + «Hojea el fanzine» y 5 cover lines que navegan | **Nueva** |
| 02 | **Manifiesto: las 7 reglas** | Sistema, sin experiencia gastronómica, operar o delegar, KAM 1:10, contrato de 5 años renovable por 4 periodos, crecer de a uno y fondo de marketing 2 %, más el recuadro «Lo que la crew no es» | **Nueva.** Reemplaza «Esto no es para todos» con criterios concretos |
| 04 | **La crew** | Cartas coleccionables que se voltean (Jonathan; Eduardo y Alex; «Tú»; el mazo de +40) | **Nueva** (hoy los testimonios son texto plano) |
| 06 | **El álbum** | Álbum de 16 láminas, una por región, con 11 pegadas según el mapa publicado. Al tocar una lámina se abre una ficha y el CTA «Pega tú esta lámina» → `carnet.html?region=`. Debajo van 3 postales en riso con fotos reales de locales (isla, local a la calle, local en centro comercial) | **Nueva** (hoy el mapa es una imagen) |
| 08 | **La letra grande** | Recortes encabezados por la inversión inicial total (desde $43.000.000, recorte a dos columnas) con su desglose debajo y más chico; luego royalty, fondo de marketing, contrato y apertura. Bloque «Resultado modelado» con el resultado operacional, el payback y su supuesto | **Nueva** (los costos hoy solo están en el blog) |
| 10 | **El carnet** | El proceso en 7 timbres: el carnet queda fijo mientras los pasos lo timbran al hacer scroll | **Nueva** (hoy está en la FAQ 5) |
| 12 | **El staff** | Página de créditos: KAM, capacitación, apertura, local, marketing, operación, producto y seguimiento | **Nueva** (hoy solo en la FAQ 9) |
| 14 | **Correo de lectores** | 10 FAQ como cartas con estampilla de categoría | Rediseño |
| 16 | **Contraportada** | «¿Eres Buffalo? Saca tu carnet.» con la mascota selfie (la «foto de carnet») | **Nueva** |

**`carnet.html` — test y postulación (flujo nuevo)**
1. ¿Cómo te ves en tu Buffalo? (mesón / detrás de los números / aún no sé)
2. ¿Has tenido un negocio antes?
3. Si la marca te pide seguir el estándar al pie de la letra… (la pregunta de encaje)
4. ¿Con cuánto capital cuentas? (tramos pendientes; **sin sticker**: los datos no se decoran)
5. ¿Cuándo te gustaría partir?
6. ¿Dónde? (región y comuna; llega prellenada desde el álbum)
7. Datos del carnet + consentimiento (Ley 21.719)

Al emitir, el carnet recibe el timbre **«EN REVISIÓN»**, se muestra el perfil («Operador/a de mesón», «Socio/a inversionista» o «Explorador/a») y los temas a conversar si alguna respuesta no calza (estándar o capital). Nunca dice «aprobado» ni «rechazado». Después: «Elige tu reunión inicial» (Pipedrive), WhatsApp y «Dar vuelta tu carnet» (dorso con 7 timbres, el 1 ya timbrado).

## 3. Interacciones y animaciones
- **Firma 1. Cartas que se voltean:** flip 3D en CSS (`rotateY`, `backface-visibility`) con botón «Dar vuelta» (`aria-pressed`) o clic en la carta. La cara oculta queda `inert` y `aria-hidden`. Con reduced-motion el cambio es instantáneo. Sin JS, frente y dorso se muestran apilados.
- **Firma 2. Sticker-board que se arma:** las láminas del álbum entran grandes, rotadas y con sombra larga, y se pegan escalonadas (`animation-timeline: view()` con `animation-range` desplazado por `--i`; fallback IO con `transition-delay`). En el test, cada respuesta pega un doodle en el carnet vivo.
- **Timbres ligados al scroll:** `timeline-scope` + 7 `view-timeline` nombradas (una por paso): cada paso que cruza el viewport timbra su círculo en el carnet fijo. Fallback IO. Con reduced-motion o sin JS, todos los timbres se ven.
- **Emisión del carnet:** el timbre «EN REVISIÓN» cae como un golpe de timbre (420 ms) y el carnet se puede dar vuelta.
- View Transitions same-document entre preguntas (mejora progresiva); foco a la leyenda de cada paso; región prellenada por `?region=`.
- Elementos gráficos: desregistro riso en la cabecera (sombra de tinta magenta en multiply), semitono en CSS (`radial-gradient`), etiquetas Dymo, cinta adhesiva y botones con sombra dura.
- **Nada anima cifras ni texto obligatorio.** Sin scrolljacking, loader, WebGL ni librerías (JS vanilla sin minificar: 7 KB en el fanzine y 8 KB en el test).

## 4. Hallazgos de A1 y A2 aplicados
**A1 (benchmark)**
- §1.3 y §4.8, «esto no es para todos» concreto: manifiesto de 7 reglas, «lo que la crew no es» (al estilo de Chick-fil-A) y la pregunta de encaje sobre el estándar. La frase «We don't sell franchises. We choose partners.» de Sweet Paris se reescribió con voz propia.
- §1.1 y §4.4, formulario como embudo de calificación, multipaso con progreso, preguntas de operar o invertir, experiencia y capital (Fast Not Junk, Tropical) y pantalla de gracias con voz de marca más Pipedrive (§4.4, interpretación).
- §4.11, la metáfora de marca convertida en sistema (Kung Fu Tea, Crumbl Crew): crew, cartas, álbum, carnet, staff y correo de lectores.
- §1.2 y §4.2, cifras con base: notas al pie y bloque «Resultado modelado» con el supuesto junto a las cifras.
- §1.5, disponibilidad territorial sin urgencia inventada: el álbum muestra solo lo que dice el mapa publicado (anti-patrón 8).
- §1.6 y §4.3, prueba social de inversionistas: cartas con nombre, local y ciudad, y espacios marcados para años en la red y un dato de negocio.
- §4.5 y §7.2, un verbo principal («Postula») repetido en header, portada, cartas, álbum y contraportada, más la barra fija en móvil.
- §4.10: un `<h1>` por página, cifras en HTML y textos 100 % en español.

**A2 (tendencias)**
- §1.6 y §3.5, lo hecho a mano y el collage como señal de confianza: estética fanzine riso, doodles reales troquelados, cinta y Dymo.
- §3.1 (C8, C9), amarillo y magenta juntos sin texto uno sobre otro, separados por ink y papel. El magenta es la tinta protagonista (como el único acento de Cerebrium o Klarna) con texto ink (4,95).
- §3.2: display gigante condensado (Mostin Black), Mostin Outline como numeral editorial y script solo como acento de 1–3 palabras.
- §3.3: layout editorial asimétrico en las páginas de marca y grilla ordenada en los datos («Con matices» de la matriz §5).
- §3.4 y §5: scroll-driven nativo (incluido `timeline-scope`) con `@supports` y fallback; View Transitions.
- §3.6: CTA persistente; sin pop-ups ni chatbot como formulario.
- §4.2: pares de contraste verificados (ink/oro 10,08; ink/magenta 4,95; crema/ink 14,94; magenta-700/blanco 6,32).

## 5. Qué rompe del DS v2 y por qué
- **No usa ninguna card ni la anatomía del DS.** Todos los componentes son nuevos: cabecera de fanzine, cover lines, índice-diálogo, folio, reglas, cartas, álbum y láminas, recortes, carnet y timbres, staff, cartas de lectores y test.
- **Multipágina** (fanzine + test) en vez de one-page con anclas: el test necesita una pantalla enfocada sin distracciones.
- **Paleta riso:** la base es papel (#FBF4E6) en vez de crema, y el magenta pasa a ser tinta protagonista (bloques, sobreimpresión multiply, contraportada a sangre con texto ink). El DS lo dejaba en el 5 % de la superficie.
- **Botones rectangulares** con sombra dura (lenguaje de imprenta) en vez de píldoras.
- **Mostin Outline** para folios y numerales grandes, y etiquetas Dymo en lugar de kickers.
- **FAQ como «correo de lectores»** y soporte como «créditos del número».
- **Formulario convertido en test de calificación** que arma un carnet, con tramos de capital propuestos (pendiente #4).
- **Doodles del Brandbook p.21 como stickers troquelados**, extraídos de `uploads/doodle.pdf` sin redibujar (28 WebP con alfa, de 3 a 30 KB cada uno). Las fotos reales de locales del Brandbook p.44 aparecen como «postales» impresas en riso (duotono oro o magenta) en la pág. 06, y el producto va a todo color con desregistro de tinta (pág. 02 y 14): la foto no se recolorea.
- **Se mantiene del DS:** paleta oficial y derivados AA, tipografías, tokens de motion, la regla de reduced-motion, la voz para inversionistas, `.bw-pending` y los textos de error y consentimiento.

## 6. Datos pendientes (todos marcados en pantalla con `.bw-pending`)
1. **Locales: +50 vs. 55**, con fecha de corte (PENDIENTES #2, nota 1).
2. **«+40 socios»**: base y fecha de corte (nota 7).
3. **Desglose de la inversión por formato**, capital propio mínimo y financiamiento.
4. **Tramos de capital** del test (#4).
5. **Fotos de franquiciados** con su local y permiso de uso (#6).
6. **Testimonios:** ciudad de Boulevard Marina, años en la red, formato y dato de negocio (#7).
7. **Lista de locales con dirección y zonas disponibles por comuna** para las fichas del álbum (#13). Ojo: en `uploads/` hay un flyer de La Serena (Coquimbo), una región que el mapa publicado no marca. Hay que confirmar si el mapa está desactualizado.
8. **Capacitación** (días u horas), qué incluye la apertura y nombres o roles del staff (#14).
9. **Plazo típico de los timbres 1 a 5** (antes de la firma).
10. **Tiempo de respuesta al lead**, «[X horas hábiles]» (#15).
11. **Consentimiento (Ley 21.719):** texto, razón social, RUT, política de privacidad, canal de derechos y terceros (#3).
12. **WhatsApp:** ¿bot (patg.ai) o número directo? (#17). Se usó el link real del bot.
13. **Licencias web** de Teenage Dreams (#8; aquí solo en «crew», «sin letra chica» y «si igual te tinca, sigue leyendo», sin tildes) y de Mostin (#9).
14. **Doodles en SVG** sueltos (#12).

## 7. Mapeo a HubSpot (breve)
- **Tema:** `marca.css` y `zine.css` globales. `zine.js` va en la plantilla del fanzine y `carnet.js` en la del test (2 plantillas de página).
- **Módulos del fanzine:** `zine-header` (folio e índice: repeater de páginas con número, título, bajada y ancla), `portada` (H1, bajada, CTA, arte, repeater de cover lines), `pagina-reglas` (repeater de reglas y de «lo que no es»), `cartas-crew` (repeater de testimonios con dos caras: foto, nombre, local, ciudad, cita, año, formato y dato), `album-regiones` (lee la HubDB «regiones»), `letra-grande` (repeater de recortes: cifra, título, detalle y nota; más el bloque de desempeño), `carnet-proceso` (repeater de 7 pasos y tramo), `staff` (repeater rol/descripción), `correo-lectores` (repeater pregunta/respuesta/categoría con schema FAQPage) y `contraportada`.
- **HubDB «regiones»:** la misma tabla de A4-1 alimenta el álbum, la ficha y el select del test.
- **Test y carnet:** módulo propio que envía a la Forms API de HubSpot. Mantiene las propiedades actuales y suma `rol_operacion`, `experiencia_previa`, `encaje_estandar`, `region` y `consentimiento`. El perfil resultante se guarda como propiedad para que ventas parta la conversación desde ahí. La pantalla de gracias enlaza al agendador de Pipedrive.

## 8. QA (2 oct 2026, Chromium en http://127.0.0.1:8765)
- **`index.html` y `carnet.html` a 1440×900 y 375×812:** `scrollWidth == innerWidth`, 0 imágenes rotas, 1 `<h1>` por página, 0 elementos fuera del viewport, `alt` en todas las imágenes y `loading="lazy"` bajo el pliegue. Peso de la carpeta: 1,7 MB; imagen más pesada: 160 KB.
- **Flujos probados de punta a punta:** índice (abrir, Esc, trampa y vuelta del foco); folio que cambia por página; volteo de cartas (con `inert` en la cara oculta y carrusel con scroll-snap en móvil); lámina del álbum → ficha → `carnet.html?region=` prellenado; timbres del carnet ligados al scroll; test completo (Siguiente deshabilitado hasta responder, datos de encaje y capital que muestran el aviso, errores de datos, consentimiento obligatorio), emisión con timbre «EN REVISIÓN», perfil y temas a conversar, y volteo del carnet al dorso. 0 errores de consola durante los flujos.
- Los CSS y JS llevan `?v=` para evitar caché al revisar.
- **Ronda 1 (3 oct 2026):** en móvil la mascota streetwear con el sticker «Buffalo Army» va sobre la línea de la cabecera «LA CREW», sin bajar el CTA (Postula termina en 612 px de 812). El álbum pasa a una grilla de 3 columnas, las postales a carrusel y el correo de lectores muestra 4 cartas más el botón «Ver las 10 preguntas». También se compactaron las páginas, y las notas al pie quedan plegables. Altura a 375 px: `index.html` 17.741 → 13.017 px; `carnet.html` ~1.800 px. El escritorio queda igual.
- **Ronda 2 (5 oct 2026): cifras oficiales de inversión aplicadas.** La letra grande ahora la encabeza la inversión inicial total desde $43.000.000 (recorte oro a dos columnas) con «Incluye el derecho de franquicia ($10.000.000) y el capital de trabajo ($3.000.000).» debajo y más chico; se eliminaron el recorte propio del derecho de franquicia (con IVA), el sello de pendiente sobre los costos, el bloque de desempeño sin respaldo y la plantilla legal de la nota 3. Royalty 7 % y fondo de marketing 2 % de la venta neta; contrato «5 años, renovable por 4 periodos» (regla 5, carnet, timbre 5); apertura «3 a 6 meses desde la firma». Bloque «Resultado modelado»: 12 % de resultado operacional y 2,6 años de payback con el supuesto «Resultado modelado en base a un escenario promedio de un local tipo Módulo.». Test: tramos «Menos de $43M» y «$43M a $60M» (siguen pendientes) y avisos con $43.000.000 en `carnet.html` y `carnet.js`. Notas 2, 3 y 5 con la fuente «Cifras entregadas por Buffalo Waffles, octubre 2026». `zine.css?v=14`, `carnet.js?v=13`.
