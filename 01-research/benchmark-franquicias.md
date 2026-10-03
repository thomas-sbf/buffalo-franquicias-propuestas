# Benchmark de sitios de captación de franquiciados (gastronomía)

**Proyecto:** rediseño de buffalofranquicias.com/es-cl/
**Autor:** Agente A1 (investigación)
**Fecha de revisión:** 2 de octubre de 2026
**Muestra:** 20 sitios en 3 capas (Chile/LatAm, QSR global, nicho postres/snacks/bebidas) más el sitio actual de Buffalo.

---

## 0. Método y convenciones

**Cómo se revisó cada sitio**
- Descargué el HTML de cada página de franquicias y extraje títulos H1 a H4, `<title>`, meta description, formularios (campos y opciones), textos de CTA, datos estructurados (JSON-LD) y el texto visible.
- Los sitios que se arman con JavaScript los abrí en un navegador. Ahí revisé qué es visible, los elementos sticky, los campos de los formularios embebidos y, para Buffalo, lo que pesa la carga de la página.
- Saqué capturas *above the fold* en escritorio (1440×900) y en móvil (390×844 @2x, emulando un iPhone). Están en `01-research/benchmark-capturas/` (ver §9).
- No rellené ni envié ningún formulario, no inicié sesión en ningún sitio y no acepté cookies. En algunas capturas se ve el banner de cookies sin aceptar.

**Convenciones del documento**
- **[O] = Observado.** Lo vi en el sitio en la fecha indicada. Las cifras de cada marca son las que la marca publica; no las verifiqué de forma independiente.
- **[I] = Interpretación.** Es mi lectura o recomendación, no un hecho.
- En las matrices: ✓ = presente y bien resuelto · ◐ = parcial o débil · ✗ = ausente · n/v = no lo pude verificar (por ejemplo, un formulario cargado en un iframe externo).

**Limitaciones**
- La revisión se hizo desde Chile y algunos sitios cambian según la geografía.
- La vista móvil es emulada, no un dispositivo real.
- Las métricas de velocidad de Buffalo se midieron una sola vez en un navegador de escritorio. Son indicativas, no un Lighthouse formal: la API de PageSpeed no tenía cuota disponible.
- Revisé principalmente la página principal de franquicias de cada marca y algunas subpáginas clave (proceso, costos, candidato ideal) en los sitios multipágina.

---

## 1. Resumen ejecutivo: 10 hallazgos clave

1. **Los mejores sitios funcionan como un embudo de calificación, no como un folleto.**
   - [O] Tropical Smoothie Cafe pone en el hero un formulario de 3 pasos: *Contact → Financials → Operator Profile*.
   - [O] Sweet Paris ofrece un "prospecto privado" detrás de un formulario de 3 pasos ("It takes about 60 seconds").
   - [O] Fast Not Junk (Chile) usa un *survey* con preguntas de experiencia, de "¿operar o solo invertir?" y de capital en tramos.
   - [O] Buffalo tiene un formulario de 9 campos en un solo paso, más otras 4 vías de contacto sin jerarquía.

2. **Mostrar los números genera credibilidad, siempre que se explique de dónde salen.**
   - [O] 11 de los 20 sitios publican en la página el monto o rango total de inversión y otros 6 lo muestran de forma parcial.
   - [O] Los más sofisticados publican ventas promedio con una nota al pie que explica la base: periodo, tamaño de la muestra y qué porcentaje de locales supera el promedio (el "Item 19" en EE.UU.). Lo hacen Tropical Smoothie, Smoothie King, Sweet Paris, Teriyaki Madness y Slim Chickens.
   - [O] Buffalo publica "15% de EBITDA" y "recuperar inversión en un plazo de 2 años" sin base ni advertencia alguna.

3. **"Esto no es para todos" convence cuando es concreto.**
   - [O] Chick-fil-A dice explícitamente que su modelo no es para quien busca una inversión pasiva y lista 8 requisitos mínimos.
   - [O] Dave's Hot Chicken exige US$2,5M líquidos y operar 5 o más restaurantes.
   - [O] Sweet Paris titula *"We don't sell franchises. We choose partners."* y pone cifras de capital.
   - [O] Grido lista 3 requisitos simples: dedicación full-time, vivir en la zona y capital mínimo.
   - [O] La sección de Buffalo tiene buen tono, pero ningún criterio medible.

4. **Las marcas con más personalidad escriben en dos registros.**
   - [O] Titulares y microcopy van con la voz de la marca: "Own your roll today" (Cinnaholic), "Join the Madness" (Teriyaki Madness), "What You'll Need to Join Our Flock" (Duck Donuts).
   - [O] Inmediatamente después vienen cifras, requisitos y avisos legales en un registro sobrio.
   - [I] Esta es la fórmula que le sirve a Buffalo para equilibrar su personalidad con la credibilidad que pide un inversionista.

5. **La disponibilidad territorial es la forma de urgencia más creíble.**
   - [O] Lo resuelven con mapa o lista con estados del tipo *Open / Limited / Sold out*: Slim Chickens, Sweet Paris, Cinnaholic, Crumbl, Tropical, Smoothie King, G&N Brands y Fast Not Junk ("El que llega primero elige su zona").
   - [O] Buffalo no muestra dónde está ni dónde quiere crecer.

6. **La prueba social que le sirve a un inversionista no es la misma que le sirve a un consumidor.**
   - [O] Lo que funciona: franquiciados con nombre, local y años en la red, idealmente en video y hablando del negocio. Ejemplos: Nothing Bundt Cakes cita "cash-on-cash" y "EBITDA"; Café Martínez muestra a franquiciados con 9 y 20 años en la red; Chick-fil-A admite que el local puede no ser rentable los primeros años.
   - [O] Lo que no funciona: Crumbl usa testimonios de empleados y clientes en su página de franquicias.
   - [O] Buffalo tiene 2 testimonios reales con foto, pero genéricos. En el DOM además quedan 3 testimonios de plantilla ocultos ("FreshLearn… LMS Product", "Manisha, Founder").

7. **El patrón dominante es un CTA principal más uno secundario de baja fricción, siempre a la vista.**
   - [O] El CTA secundario suele ser un brochure, prospecto o ficha.
   - [O] Sweet Paris fija en móvil una barra inferior con "Request your prospectus". Tropical mantiene "Get Started" en el header móvil.
   - [O] Buffalo reparte la conversión en WhatsApp (CTA del hero, que lleva fuera del sitio), "AGENDAR" en Pipedrive (header), formulario principal, chat proactivo y un segundo formulario.
   - [O] En móvil emulado (375 px) el logo de Buffalo mide 500 px fijos y empuja el menú hamburguesa fuera de la pantalla.

8. **El lead magnet es un estándar que Buffalo no tiene.**
   - [O] 8 de los 20 sitios ofrecen un material descargable: ficha, brochure, reporte o prospecto (G&N, Grido, Café Martínez, Tropical, Teriyaki Madness, Smoothie King, Duck Donuts, Sweet Paris).
   - [O] La FAQ de Buffalo dice que "el detalle específico se entrega durante el proceso de evaluación", pero no hay ningún material para captar a quien todavía no quiere hablar con un vendedor.

9. **La higiene técnica de Buffalo es hoy el mayor riesgo.**
   - [O] En la landing carga `blog1.png`, de 4480×6720 px y **31,5 MB**, que se muestra a 368×503 px. En total se midieron unos **34 MB** transferidos y ~4,6 s de LCP en escritorio.
   - [O] Tiene 4 etiquetas H1, una de ellas en inglés ("Our Recent Blogs"), y módulos de blog duplicados ocultos.
   - [O] No tiene datos estructurados.
   - [O] Las cifras no son consistentes: "+50 locales" en el hero y "55 locales" en el blog.

10. **En Chile y LatAm el nivel es bajo: es una oportunidad.**
    - [O] La mayoría de los sitios LatAm meten las franquicias dentro del sitio de consumidor o del e-commerce, con carrito, envío gratis o pop-up de descuento a la vista: Café Martínez, Grido, Juan Valdez España, Sushi Itto, Niu Sushi.
    - [O] Casi ninguno publica proceso, mapa o desempeño.
    - [O] La excepción chilena es Fast Not Junk: sitio dedicado, tabla en UF, 5 pasos y formulario multipaso.
    - [I] Buffalo ya tiene dominio propio. Si aplica las prácticas de EE.UU. en español y con su propia voz, puede ser el referente local.

---

## 2. Muestra analizada

| # | Marca | Capa | País | URL revisada | Por qué se eligió |
|---|---|---|---|---|---|
| 1 | Fast Not Junk | 1 · Chile | CL | https://franquiciasfastnotjunk.com/ | Competidor directo: marca chilena joven, street/healthy, sitio de franquicias dedicado y reciente, cifras en UF. |
| 2 | G&N Brands (Doggis, Juan Maestro, Tommy Beans…) | 1 · Chile | CL | https://gnbrands.com/es/marcas-y-franquicias/franquicia-con-nosotros/chile-es/ | El mayor holding de franquicias gastronómicas de Chile: referente local de "respaldo". |
| 3 | Niu Sushi | 1 · Chile | CL | https://www.niusushi.cl/franquicias | Cadena chilena relevante. Sirve como línea base (página mínima). |
| 4 | Juan Valdez | 1 · LatAm | CO | https://juanvaldez.com/franquiciados/ · https://es.juanvaldez.com/franquicias/ | Marca LatAm icónica con programa internacional; dos enfoques (B2B global y España). |
| 5 | Grido | 1 · LatAm | AR | https://argentina.gridohelado.com/abrir-grido/ | Helados (postre), franquicia masiva de bajo ticket en LatAm, con presencia en Chile. |
| 6 | Café Martínez | 1 · LatAm | AR | https://www.cafemartinez.com/franquicias/ | Cafetería LatAm con ficha de inversión explícita y testimonios en video. |
| 7 | Sushi Itto | 1 · LatAm | MX | https://www.sushi-itto.com.mx/franquicias | Franquicia mexicana consolidada; ejemplo de formulario largo de calificación. |
| 8 | Dave's Hot Chicken | 2 · QSR global | US | https://franchise.daveshotchicken.com/dhcfranchising/ | Marca joven, street, de mucho crecimiento; voz de marca fuerte y requisitos duros. |
| 9 | Tropical Smoothie Cafe | 2 · QSR global | US | https://www.tropicalsmoothiefranchise.com/ | De los sitios más optimizados: formulario multipaso en el hero, Item 19, rankings, mapa. |
| 10 | Dunkin' (Inspire Brands) | 2 · QSR global | US | https://www.franchising.inspirebrands.com/dunkin | Gran franquiciador: formatos de local, fees y proceso de 5 pasos. |
| 11 | Chick-fil-A | 2 · QSR global | US | https://www.chick-fil-a.com/franchise | Mejor ejemplo de "esto no es para todos" (selección altamente competitiva). |
| 12 | Slim Chickens | 2 · QSR global | US | https://slimchickensfranchise.com/ | Mapa de mercados con estados (disponible / objetivo / agotado); voz de marca. |
| 13 | Teriyaki Madness | 2 · QSR global | US | https://franchise.teriyakimadness.com/ | Voz de marca irreverente con números duros; lead magnet en el hero; SEO y FAQ con schema. |
| 14 | Crumbl | 3 · Postres | US | https://crumblcookies.com/franchising | Referente de postres de crecimiento explosivo; mapa de disponibilidad; usa Pipedrive como Buffalo. |
| 15 | Nothing Bundt Cakes | 3 · Postres | US | https://www.nothingbundtcakes.com/franchise-opportunities/ | Postres; FAQ por categorías, testimonios con lenguaje financiero. |
| 16 | Cinnaholic | 3 · Postres | US | https://cinnaholicfranchise.com/ | Marca juguetona (juegos de palabras) con requisitos claros y formulario con pregunta de corte. |
| 17 | Kung Fu Tea | 3 · Bebidas | US | https://www.kungfutea.com/franchise/ | Bubble tea; metáfora de marca en el copy, costos detallados, formulario parecido al de Buffalo. |
| 18 | Smoothie King | 3 · Bebidas | US | https://www.smoothiekingfranchise.com/ | Microsite multipágina completo: costos, 7 pasos, video testimonios, descargas. |
| 19 | Duck Donuts | 3 · Postres | US | https://www.duckdonuts.com/franchising | Donas; juegos de palabras + requisitos + e-brochure abierto. |
| 20 | Sweet Paris Crêperie & Café | 3 · Crepes/waffles | US | https://sweetparisfranchise.com/ | Lo más parecido en producto (crepes y waffles). Probablemente la landing mejor resuelta de la muestra. |
| — | **Buffalo Waffles (actual)** | Cliente | CL | https://buffalofranquicias.com/es-cl/ | Línea base para el gap analysis. |

**Sitios evaluados y descartados o reemplazados [O]**

| Marca | URL probada | Motivo |
|---|---|---|
| Wingstop | wingstop.com/franchise | Redirige (301) a ir.wingstop.com (relación con inversionistas). Hoy no hay landing de captación. |
| Taco Bell | tacobell.com/franchise | Redirige a la ficha corporativa de la marca en yum.com, no a una landing de franquicias. |
| Popeyes / Tim Hortons | popeyes.com/franchise · timhortons.com/franchising | Aplicación JS sin contenido legible con las herramientas disponibles. No se pudo evaluar. |
| Wings Army (MX) | thewingsarmy.com/mx/franquicias2/ | "Redirecting…" que termina en google.com. Reemplazado por Sushi Itto. |
| Nothing Bundt Cakes (subdominio) | franchising.nothingbundtcakes.com | El dominio no resuelve (DNS). Se usó la página del dominio principal. |
| Jersey Mike's | jerseymikes.com/franchise | Página mínima, cuyo `<title>` dice "Real Estate". Aporta poco. |
| Subway / Insomnia Cookies / Rita's / Auntie Anne's | varias | Sin conexión o 403 (bloqueo de bots). |
| Crepes & Waffles | — | No encontré una página oficial de captación de franquiciados. Según la prensa crece sobre todo con inversión directa (no verificado en una fuente oficial). |
| Wendy's | wendys.com/franchising | Revisada solo como contraste: página-hub con tono corporativo. No entra en la muestra. |

---

## 3. Matriz comparativa

### 3A. Contenido para el inversionista

| Sitio | Tipo de sitio¹ | Inversión publicada | Desempeño (ventas/ROI) + base o disclaimer | Requisitos / perfil | Proceso paso a paso | Soporte y capacitación | Testimonios de franquiciados | Rankings / prensa |
|---|---|---|---|---|---|---|---|---|
| Fast Not Junk | D | ✓ 1.500–2.000 UF; fee 600 UF; royalty 7% | ◐ 15–18% neto; break-even mes 5; payback 18–24 m ("est.", sin base) | ✓ capital mín. 1.500 UF | ✓ 5 pasos | ◐ lista de 6 ítems | ✗ | ✗ (solo métricas de Instagram) |
| G&N Brands | D (sección del holding) | ◐ "ficha de inversión" descargable | ✗ | ✗ | ✗ | ◐ 4 bullets | ◐ vía notas de blog | ◐ respaldo de The Carlyle Group |
| Niu Sushi | C | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Juan Valdez | C | ◐ liquidez ≥US$250.000/tienda (global); tramos en el formulario (España) | ✗ | ✓ 5 años operando franquicias + plan de negocio a 5 años (global) | ✗ | ◐ bullets | ✗ | ◐ +650 tiendas, 21 países |
| Grido | C | ◐ brochure PDF | ✗ | ✓ 3 requisitos (full-time, vivir en la zona, capital mínimo) | ✗ | ✗ | ✗ | ✗ |
| Café Martínez | C (e-commerce) | ✓ US$175.000; regalía 4%; publicidad 1% | ✗ | ◐ "perfil activo", población ≥40.000 hab., local ≥100 m² | ✗ | ◐ 3 bloques | ✓ video + texto (nombre, ciudad, años) | ◐ cifras de la red |
| Sushi Itto | C | ✗ | ✗ | ◐ "socio ideal" cualitativo | ✗ | ✓ 6 beneficios | ✗ | ◐ +130 locales, 38 años, 6 países |
| Dave's Hot Chicken | C (subdominio con navegación de consumidor) | ✓ US$619.800–1.963.000 | ✗ | ✓ duros: 5+ unidades, US$2,5M líquidos, US$5M patrimonio | ✗ | ✗ | ✗ (video del fundador) | ✓ collage de prensa (QSR, Fast Casual) |
| Tropical Smoothie | D multipágina | ✓ US$275.500–770.500 + tabla de desglose | ✓ AUV con nota Item 19 (muestra y % que lo supera) | ✓ multi-unidad, US$1M patrimonio / US$500k líquidos, mín. 3 cafés | ✓ 7 pasos | ✓ | n/v en home | ✓ Franchise 500 #14, Franchise Times, FBR |
| Dunkin' | D (portal multimarca) | ✓ fee US$40.000; royalty 5,9%; publicidad 5%; total US$443.000–1.832.500 (con fecha del FDD) | ✗ | ✓ US$250k líquidos / US$500k patrimonio | ✓ 5 pasos | ✓ 3 pilares | ✗ | ✓ Entrepreneur (#3 Franchise 500) |
| Chick-fil-A | C | ◐ fee US$10.000 (no prestado) | ✗ | ✓ 8 requisitos + "cumplirlos no garantiza ser seleccionado" | ◐ "comunidad de candidatos" | ◐ | ✓ honestos, incluyen riesgos | ✗ |
| Slim Chickens | D | ✗ en home | ◐ AUV (FDD 2025), pero los contadores no se ven sin JS | ✗ en home | ◐ enlace a "Steps to Ownership" | ◐ | ✓ video | ✗ |
| Teriyaki Madness | D multipágina | ✓ US$392.967–1.122.005 | ✓ AUV US$1.113.760 con referencia al Item 19 | n/v | ✓ 7 pasos (página propia) | ✓ | ✓ página de testimonios | ✓ premios |
| Crumbl | C | ✗ | ✗ | ◐ liquidez mínima US$200.000 | ✓ 6 pasos | ◐ | ✗ (empleados y clientes) | ✗ |
| Nothing Bundt Cakes | C (e-commerce) | ✓ fee US$45.000, royalty 6%, MPF 5%; total US$667.100–1.032.500 (en la FAQ) | ✗ (aunque los testimonios citan EBITDA) | ✓ US$750k patrimonio / US$250k líquidos | ✓ 5 pasos | ✓ | ✓ texto con nombre | ◐ "#1 America's Favorite Food Chain" |
| Cinnaholic | D | ✓ US$241.082–526.582 | ✗ | ✓ US$400k / US$100k; "no previous experience is necessary" | ✗ en home | ◐ | ✗ | ✗ |
| Kung Fu Tea | C | ✓ estructura de costos detallada (fee, training fee, equipos) | ✗ | ◐ capital en el formulario; "shared DNA" | ✓ 5 pasos | ✓ KFT Academy (2 personas, 2 semanas) | ✗ | ✓ lista de premios |
| Smoothie King | D multipágina | ✓ tabla de costos (página de proceso) | ✓ AUV del top 50% con nota Item 19 | ◐ cualitativo | ✓ 7 pasos + Discovery Day | ✓ detalle de capacitación de 4 semanas | ✓ video | ✓ Franchise 500 Hall of Fame |
| Duck Donuts | C | ✓ US$536.150–774.500 (Item 7) | ✗ | ✓ US$200k líquidos / US$400k patrimonio | ✗ | ✓ 3 equipos | ✓ video | ✗ |
| Sweet Paris | D one-page | ◐ inversión "reservada a candidatos calificados" | ✓ promedio y mejor local + disclaimer con muestra (5 de 11 superan el promedio) | ✓ US$300k+ / US$800k+, mín. 2 unidades | ◐ implícito | ✓ 4 pilares | ◐ 1 cita | ✓ 6 rankings |
| **Buffalo (actual)** | **D one-page** | ◐ "desde $40.000.000", sin desglose | ◐ "15% de EBITDA" y "recupero en 2 años", sin base ni nota | ◐ cualitativo ("Esto no es para todos") | ◐ 7 pasos escondidos en la FAQ | ◐ solo en la FAQ | ◐ 2 citas de texto con foto | ✗ |

¹ D = sitio o landing dedicada al franquiciado · C = sección dentro del sitio de consumidor o e-commerce.

### 3B. Captación, CTA y experiencia

| Sitio | Territorios / mapa | Formulario (calificación) | Multipaso | Lead magnet | Canal directo | FAQ | CTA sticky | Voz de marca en el copy |
|---|---|---|---|---|---|---|---|---|
| Fast Not Junk | ◐ lista de locales + zonas disponibles | ✓ contacto + experiencia + "¿operar o invertir?" + capital ($80M–$120M+) | ✓ | ✗ | ◐ email/IG; "te contactamos en menos de 5 minutos" | ◐ 5 | ✓ nav sticky "Quiero postular →" | ◐ directo, con urgencia |
| G&N Brands | ✓ mapa de locales con filtros (marca/zona/región) | ◐ HubSpot "¿Quieres que un ejecutivo te llame?" (campos n/v) | n/v | ✓ ficha de inversión | ✓ WhatsApp flotante | ✗ | ✗ | ✗ corporativo |
| Niu Sushi | ✗ | ✗ 5 campos sin calificación | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Juan Valdez (ES) | ✗ | ✓ capacidad de inversión en tramos, experiencia, nº de locales | ✗ | ✗ | ◐ email; respuesta en menos de 48 h | ✗ | ✗ | ◐ propósito y origen |
| Grido | ✗ | ◐ formulario externo | ✓ (externo, por pasos) | ✓ brochure abierto | ✓ chat | ✗ | ✗ | ◐ cercano ("¡Abrir tu Grido es posible!") |
| Café Martínez | ✗ | n/v ("Contactanos") | n/v | ✓ ficha técnica | ✓ WhatsApp flotante | ✗ | ✗ | ◐ |
| Sushi Itto | ◐ "Lleva [marca] a tu ciudad" | ◐ 14 campos en un paso (incluye fecha de nacimiento y profesión) | ✗ | ✗ | ◐ WhatsApp (de pedidos) | ◐ 4 | ✗ | ◐ |
| Dave's Hot Chicken | ✗ | ✓ largo: patrimonio, liquidez, nº de tiendas, experiencia | ✗ | ✗ | ◐ "te contactamos en 24 h" | ✗ | ✗ | ✓ "Join our hot team!!" |
| Tropical Smoothie | ✓ mapa | ✓ liquidez, patrimonio, marcas que opera, nº de locales | ✓ 3 pasos en el hero | ✓ brochure a cambio del email | ✓ teléfono en el header | ✓ página propia | ✓ header (también en móvil) | ✓ "Drink it in…" |
| Dunkin' | ◐ formatos de local | n/v | n/v | ✗ | ✗ | ✗ | n/v | ◐ |
| Chick-fil-A | ✗ | ◐ comunidad de candidatos (externa) | n/v | ✗ | ✗ | ✗ | ✗ | ◐ propósito |
| Slim Chickens | ✓ mapa global con estados | n/v (/get-started/) | n/v | ✗ | ✗ | ✗ | n/v | ✓ "Breakthrough Brand. Breathtaking Numbers." |
| Teriyaki Madness | ✓ páginas de territorios | ✓ con descarga: tipo de propietario (operador, multi-unidad, inversor…) | ✗ | ✓ "Franchise Report" | ✓ teléfono/email; "Refer a Franchisee" | ✓ + schema FAQPage | ✓ barra superior | ✓ "Join the Madness" |
| Crumbl | ✓ mapa disponible / no disponible | ◐ formularios de Pipedrive externos | n/v | ✗ | ✗ | ✗ | ✗ (el header dice "Order Now") | ◐ "Crumbl Crew" |
| Nothing Bundt Cakes | ✗ | n/v | n/v | ✗ | ✗ | ✓ ~12, por categorías | n/v | ✓ "Own a Piece of the Joy" |
| Cinnaholic | ✓ mapa + tabla de texto (accesible) | ✓ liquidez/patrimonio + pregunta de corte | ✗ | ✗ | ◐ teléfono | ✗ | n/v | ✓ "Own your roll today" |
| Kung Fu Tea | ✗ | ✓ capital, plazo, disposición a mudarse, mejor hora de contacto | ✗ | ✗ | ◐ email/teléfono | ✗ | ✗ | ✓ "Kung Fu Masters", "black belts" |
| Smoothie King | ✓ mapa | n/v | n/v | ✓ sección de descargas | ◐ teléfono | ✓ página propia | n/v | ◐ "Blending up benefits" |
| Duck Donuts | ◐ estados disponibles (en texto) | n/v | n/v | ✓ e-brochure PDF | ✗ | ✗ | ✗ | ✓ "Join Our Flock", "Where We're Nesting" |
| Sweet Paris | ✓ disponibilidad por estado + "Check My Market →" | ✓ capital, plazo, mercado, perfil | ✓ 3 pasos ("60 segundos") | ✓ prospecto privado | ✗ | ✓ 6 | ✓ header + barra inferior en móvil | ✓ "Let them eat crêpes", "À bientôt" |
| **Buffalo (actual)** | ✗ | ◐ 9 campos (plazo, capital); los tramos de capital no calzan con la inversión mínima | ✗ | ✗ | ✓ WhatsApp (bot), Pipedrive y chat | ✓ 17 | ◐ header "AGENDAR" en escritorio; en móvil el header se desborda | ◐ la identidad visual sí, el copy es genérico |

---

## 4. Patrones y mejores prácticas por dimensión

### 4.1 Arquitectura de información y orden de secciones

**Observado**
- [O] **Hay dos arquitecturas.**
  - *One-page con anclas:* Sweet Paris (Opportunity · Numbers · Brand · Support · FAQ), Fast Not Junk, Cinnaholic.
  - *Microsite multipágina:* Tropical Smoothie (Available Territories · Why Us · Perfect Candidate · Process · FAQs · About Us); Smoothie King, con un mega-menú Brand / Process / Resources que incluye "What Does It Cost", "Downloads" y "Meet the CEO"; Teriyaki Madness, con páginas por intención de búsqueda ("Franchise Profitability", "Startup Costs", "Multi-Unit Franchising").
- [O] **El menú se nombra con las preguntas del inversionista, no con categorías de marca:** "What It Takes" (Cinnaholic), "Perfect Candidate" (Tropical), "The Numbers" (Sweet Paris), "What Does It Cost" (Smoothie King).
- [O] **Orden más frecuente en las mejores landings:**
  1. Hero con promesa + KPI + CTA (y a veces el formulario).
  2. Por qué la marca o el concepto.
  3. Números.
  4. Requisitos y perfil.
  5. Soporte.
  6. Territorios.
  7. Prueba social y premios.
  8. Formulario o lead magnet.
  9. FAQ.
  10. CTA final + disclaimer legal.

  Sweet Paris sigue casi exactamente este orden. Nothing Bundt Cakes hace: hero → 4 pilares → inversión y requisitos → crecimiento → 5 pasos → perfil → testimonios → CTA → FAQ.
- [O] **El hero casi siempre tiene un H1 de aspiración y propiedad, no de producto:** "Own a piece of the Parisian life." · "Own a Piece of the Joy" · "Scale smarter with this award-winning franchise" · "Invierte en un modelo aprobado, rentable y listo para escalar."
- [O] **Separar audiencias importa.** Cuando la página de franquicias vive dentro del sitio de consumidor, aparecen CTAs que compiten:
  - "Order Now" en el header de Crumbl;
  - carrito y "Envío GRATIS" en Café Martínez;
  - el bloque "¿Quieres un 10% de descuento?" en Juan Valdez España.

**Interpretación**
- [I] Para Buffalo, el formato *one-page con anclas* sigue siendo el correcto: volumen moderado de leads, una sola marca y un solo país. Conviene agregar 1 o 2 páginas satélite con fines SEO (FAQ completa, "cuánto cuesta una franquicia de comida en Chile"), como hace Teriyaki Madness.

### 4.2 Inversión, ROI y cifras

**Observado**
- [O] **Hay tres niveles de transparencia:**
  - *Rango total + desglose de fees:* Tropical (tabla de inversión de punta a punta), Smoothie King (tabla de gastos), Kung Fu Tea (fee US$37.000, training fee US$12.500, equipos US$25–35k), Dunkin' (fee, royalty, publicidad, total y fecha del FDD), Café Martínez (inversión, regalía, canon de publicidad, m², población mínima), Fast Not Junk (inversión total, fee, royalty, facturación, rentabilidad, break-even y payback, todo en UF).
  - *Solo requisitos de capital:* Crumbl (liquidez US$200k), Chick-fil-A (fee US$10k).
  - *Nada:* Sushi Itto, Niu Sushi.
- [O] **Las cifras de desempeño siempre van con su base.**
  - Tropical: "*$1,251,191 Top 50% Average Net Revenues, with 274 of 716 (38% of the top 50%)…*" con referencia al Item 19.
  - Smoothie King: "*Of the 544 units included… 229 units met or exceeded*".
  - Sweet Paris: "*11 franchisee-owned… 5 of these 11 (or 46%) attained or exceeded this average… There is no assurance that you will do as well*".
- [O] **Sweet Paris usa el "gating" estratégico.** Publica las ventas en la home ("Beautiful to look at. Even better on paper.") y reserva la inversión, el royalty y el detalle unitario para candidatos calificados ("Request Access"). Así convierte la pregunta "¿cuánto cuesta?" en un lead.
- [O] **Las cifras van destacadas en tarjetas o barras de KPI**, en el hero o justo después (Sweet Paris, Fast Not Junk, Tropical, Teriyaki Madness, Café Martínez).
- [O] **Calculadoras:** no encontré calculadoras de ROI interactivas en la muestra.

**Interpretación**
- [I] Una calculadora de ROI es arriesgada: crea expectativas difíciles de defender. El estándar es una tabla con rangos más una nota al pie.
- [I] En Chile no hay un equivalente directo del FDD estadounidense; esto debe validarlo un asesor legal. Aun así, el estándar de credibilidad global es acompañar cada cifra de desempeño con periodo, muestra y advertencia.
- [I] El "15% de EBITDA" de Buffalo debería ir con su base, por ejemplo: "promedio de X locales con más de 12 meses de operación en 2025; Y de Z lo superan; resultados individuales pueden variar".

### 4.3 Prueba social

**Observado**
- [O] **Testimonios en video de franquiciados:** Smoothie King (videos "Favorite Memories", "Franchisee Benefits", "Becoming an Owner"), Duck Donuts, Slim Chickens y Café Martínez (3 videos con nombre, más textos con nombre, ciudad y años en la red: "Hace nueve años que soy franquiciada…", "Hace 20 años…").
- [O] **Testimonios que hablan de negocio:** en Nothing Bundt Cakes un franquiciado menciona "cash-on-cash return" y "EBITDA number is outstanding".
- [O] **Testimonios honestos:** Chick-fil-A muestra la cita "*your business may not be profitable for the first few years*" (Dawn Kosir, Corsicana, TX).
- [O] **Rankings y prensa:**
  - Entrepreneur Franchise 500: Tropical #14 y #1 en su categoría; Smoothie King en el Hall of Fame (30+ años); Dunkin' #3; Sweet Paris "Ranked".
  - Franchise Times y Franchise Business Review (Tropical).
  - Collage de portadas de QSR y Fast Casual (Dave's).
  - Lista de medios (Sweet Paris: Inc. 5000, Fast Casual Top 100, QSR 40/40, NRN, Restaurant Business, Forbes).
- [O] **Respaldo institucional:** G&N Brands cita "el respaldo internacional de The Carlyle Group". Fast Not Junk presenta al holding "The Black Book Holding" (12 marcas, +30 locales).
- [O] **Testimonios de la audiencia equivocada:** Crumbl muestra en su página de franquicias citas de empleados ("*Literally just started working here a few weeks ago…*").

**Interpretación**
- [I] Buffalo no tiene un Franchise 500 local, pero puede usar:
  - logos de centros comerciales donde opera (Mallplaza, Boulevard Marina, que ya aparecen en sus testimonios);
  - prensa chilena real;
  - premios de gremios, solo si existen.

  Nunca hay que inventar sellos.

### 4.4 Captación y calificación de leads

**Observado**
- [O] **Formularios multipaso con progreso visible:**
  - Tropical, en el hero: "Step 1 of 3" con Contact / Financials / Operator Profile y tramos de liquidez y patrimonio.
  - Sweet Paris: "Step 1 of 3 · Introduce Yourself" → "Your Investment Profile" (capital en tramos y "¿cuándo quieres empezar?", desde "Immediately (0–3 months)" hasta "Exploring for now") → "Where should we build?" (mercado + perfil: operador multi-unidad, dueño de restaurante, inversor pasivo, primera vez…).
  - Fast Not Junk: un *survey* de LeadConnector. Primero contacto; después "¿Tienes experiencia previa en negocios/inversiones?", "¿Te interesa operar o solo invertir?" y "¿Con cuánto capital disponible cuentas?" ($80M–$100M / $100M–$120M / más de $120M).
- [O] **Preguntas de corte:** Cinnaholic agrega "*Do you have a minimum liquidity of $100,000 and/or a minimum net worth of $400,000?*" y titula el formulario "*Fill out the form below to determine your eligibility*". Dave's avisa antes del formulario: "*Considering only experienced, multi-unit restaurant franchisees at this time.*"
- [O] **Formularios largos de un solo paso:** Sushi Itto pide 14 campos, entre ellos fecha de nacimiento, profesión y dirección. Dave's, cerca de 12 campos con patrimonio y liquidez.
- [O] **Compromiso de tiempo de respuesta:** "Te contactamos en menos de 5 minutos" (Fast Not Junk), "within 24 hours" (Dave's), "en menos de 48h" (Juan Valdez), "within one business day" (Sweet Paris).
- [O] **Lead magnets:**
  - con formulario: reporte de franquicia (Teriyaki Madness, en el hero), brochure por email (Tropical), prospecto privado (Sweet Paris);
  - abiertos: e-brochure PDF (Duck Donuts), brochure PDF (Grido), "Ficha técnica" (Café Martínez), "Descarga la ficha de inversión" (G&N), sección de descargas (Smoothie King).
- [O] **Canales directos en LatAm:** WhatsApp flotante (G&N, Café Martínez), chat (Grido). En EE.UU. predomina el teléfono en el header (Tropical, Smoothie King).
- [O] **Pantalla de agradecimiento con voz de marca:** Sweet Paris: "*Welcome to the table. Your private prospectus is on its way… À bientôt.*"
- [O] **Agendar reunión:** no vi agendamiento directo antes del formulario en la muestra. Tropical describe una "Virtual Brochure Presentation" y Smoothie King un "Discovery Day" como pasos posteriores.

**Interpretación**
- [I] El patrón que mejor se adapta a Buffalo: formulario de 3 pasos y, en la pantalla de agradecimiento, el agendador de Pipedrive ("Elige tu reunión inicial") más un WhatsApp con contexto. Agendar pasa a ser el paso siguiente a la calificación, no una alternativa que compite con ella.

### 4.5 CTAs: texto, cantidad, ubicación y sticky

**Observado**
- [O] **Un verbo principal que se repite:** "Get Started" (Tropical, Cinnaholic, Slim, Smoothie King, Dunkin'), "Apply Today" (Crumbl), "Request Franchise Information" (Nothing Bundt Cakes), "become an owner" (Duck Donuts), "Quiero postular →" / "Postular ahora →" (Fast Not Junk).
- [O] **CTA secundario de baja fricción al lado del principal:** "Request your private prospectus" + "Explore the opportunity" (Sweet Paris); "Ficha técnica" + "Contactanos" (Café Martínez); "Download our franchise report" en la barra superior (Teriyaki Madness).
- [O] **Microcopy de CTA con la voz de la marca:** "Check My Market →", "Send My Prospectus →" (Sweet Paris); "Quiero mi franquicia Fast Not Junk →"; "Own your roll today" (Cinnaholic).
- [O] **Sticky:**
  - header sticky con el CTA principal: Tropical (también en móvil), Sweet Paris, Fast Not Junk, Teriyaki Madness;
  - **barra inferior fija en móvil:** Sweet Paris ("Request your prospectus →");
  - botón flotante de WhatsApp: G&N, Café Martínez.

**Interpretación**
- [I] Lo ideal son entre 1 y 2 tipos de CTA por página, repetidos en 4 a 6 puntos del recorrido. Cada canal adicional (WhatsApp, agenda, chat) debería tener un rol secundario y explícito.

### 4.6 Proceso paso a paso

**Observado**
- [O] **Número de pasos:** entre 5 y 7.
  - Nothing Bundt Cakes, 5: Request Info → Explore Opportunity & Market Availability → Get Approved → Training & Build-Out → Grand Opening.
  - Dunkin', 5: Apply → Discuss → Review (FDD) → Interview → Sign!
  - Kung Fu Tea, 5, con detalle de capacitación: "*train 2 people per location for up to 2 weeks*" y "*Senior Trainer with you for 2 weeks*".
  - Fast Not Junk, 5: postulas → firmas y pagas el fee → diseño y construcción → capacitación → apertura con campaña.
  - Tropical, 7: Pre-Qualification → Application (non-binding) → FDD Review → Program Review → Discovery Day (opcional) → Executive Committee Approval → firma.
  - Smoothie King, 7, con tiempos y montos: fee de US$30.000, 4 semanas de capacitación, 5 días de entrenamiento en el local.
- [O] **Plazo de apertura:** Nothing Bundt Cakes informa "9 to 12 months" en la FAQ.
- [O] **Mensajes que bajan la ansiedad:** "There is no cost associated with submitting your application and it is non-binding" (Tropical); "Sin compromiso" (Fast Not Junk).
- [O] **Buffalo** ya tiene 7 pasos y "2 a 4 meses desde la firma", pero dentro de la respuesta 5 de la FAQ.

**Interpretación**
- [I] Ese plazo de 2 a 4 meses es un argumento muy fuerte frente a los 9 a 12 meses de EE.UU. Hoy está escondido.

### 4.7 Soporte y capacitación

**Observado**
- [O] **Soporte organizado por equipos o etapas:**
  - Duck Donuts: Real Estate/Construction, Operations/Training, Marketing.
  - Sweet Paris: 01 Site & Real Estate, 02 Design & Build-Out, 03 Training & Operations, 04 Marketing & Brand ("*You're in business for yourself, not by yourself*").
  - Dunkin': Training & Support, Marketing & PR, Technology & Innovation (con un Franchise Business Consultant dedicado).
- [O] **Personas concretas:** Fast Not Junk lista "Chef ejecutivo dedicado", "Nutricionista especialista" y "Equipo de marketing".
- [O] **Métricas de capacitación:** Smoothie King, 4 semanas (3 en una tienda certificada y 1 en la oficina central); Kung Fu Tea, 2 personas por 2 semanas.

**Interpretación**
- [I] Buffalo debería mostrar su soporte como "antes, durante y después de la apertura", con nombres o roles y horas o días de capacitación reales.

### 4.8 Perfil del franquiciado ideal, requisitos y "esto no es para todos"

**Observado**
- [O] **Un espectro de dureza:**
  - *Muy duro:* Dave's ("*Firm Requirements*": 5+ restaurantes, sin otra marca de pollo frito); Juan Valdez global (empresas con 5 o más años operando franquicias y un plan de negocio a 5 años).
  - *Selectivo y aspiracional:* Sweet Paris ("*We protect it by awarding territories only to operators who share our standard of excellence*"; "*first-qualified, first-served*"); Tropical ("*Made for experienced operators*", mínimo 3 cafés).
  - *Selectivo por actitud:* Chick-fil-A ("*It's not for those seeking passive financial investment, working from the sidelines, or adding to a portfolio*"; "*Meeting these minimum requirements does not mean you will be selected*").
  - *Accesible:* Cinnaholic y Nothing Bundt Cakes ("No previous experience is necessary"); Kung Fu Tea ("*the most important thing we look for… is a shared DNA… The rest, we will teach you*").
- [O] **Grido** resume el perfil en 3 requisitos visibles con números grandes: dedicación personal full-time, residir en la zona y capital mínimo.

**Interpretación**
- [I] El "Esto no es para todos" de Buffalo ya tiene el tono justo y cercano ("Nosotros ponemos la marca… Tú pones la energía"). Le faltan:
  - el piso de capital ("desde $40M; capital propio mínimo X");
  - la dedicación esperada (operador vs. inversionista con administrador, que ya se responde en la FAQ);
  - qué no buscan.

### 4.9 FAQ: extensión y formato

**Observado**
- [O] **Extensión en la landing:** de 4 a 12 preguntas. Sushi Itto tiene 4, Fast Not Junk 5, Sweet Paris 6, Teriyaki Madness 6 (más una página propia) y Nothing Bundt Cakes unas 12, agrupadas en General / Training & Support / Growth & Territories / Financing.
- [O] **Páginas de FAQ dedicadas:** Tropical y Smoothie King.
- [O] **Datos estructurados FAQPage:** solo Teriyaki Madness, de los 20.
- [O] **Respuestas con cifras:** Nothing Bundt Cakes da patrimonio, liquidez, inversión, fee y plazo; Sweet Paris da ventas y requisitos.
- [O] **Buffalo** tiene 17 preguntas en acordeón, con buen contenido (contrato a 20 años, administrador, 2 a 4 meses, delivery), sin categorías y sin schema.

### 4.10 Señales de confianza, SEO, móvil y velocidad

**Títulos (`<title>`) [O]**
- Bien orientados a la búsqueda: "Crumbl Cookies Franchise | Own a Cookie Franchise", "Donut Shop Franchise | Duck Donuts Franchise", "Open a Kung Fu Tea Franchise — America's Bubble Tea", "Japanese Restaurant Franchise | Teriyaki Madness Franchise".
- Débiles: Café Martínez ("Franquicias"), Grido ("Grido Helado Argentina"), Niu Sushi (título de delivery), Jersey Mike's ("Real Estate").

**Meta description [O]**
- Falta en Fast Not Junk, Dave's, Nothing Bundt Cakes y Juan Valdez España. En G&N Chile está vacía.
- Sweet Paris pone la cifra del Item 19 dentro de la meta description.

**Arquitectura de contenidos para SEO [O]**
- Teriyaki Madness es el mejor caso: páginas por palabra clave, blog, podcast ("TMAD Talk"), FAQ con schema y programa de referidos ("Refer a Franchisee").

**Errores técnicos [O]**
- Exceso de H1: Slim Chickens 96, Dunkin' 10, Grido 4, Buffalo 4.
- Contadores animados que en el HTML valen 0 o 2 sin JavaScript (Crumbl, Slim Chickens, Sweet Paris): esas cifras no existen para buscadores ni lectores de pantalla.

**Accesibilidad [O]**
- Cinnaholic ofrece "*Prefer text format? Click here to view territories in a table*" junto al mapa.

**Móvil [O]**
- Tropical mantiene el header compacto con "Get Started" y el formulario multipaso queda en el primer scroll.
- Sweet Paris agrega una barra inferior fija.
- G&N pone en el primer pantallazo un hero sin CTA, más un WhatsApp flotante.
- Buffalo: ver §7.

### 4.11 Tono y manejo de marca (punto clave para Buffalo)

**Observado**
- [O] **Dos registros en la misma pantalla.** La voz de marca va en H1/H2, nombres de sección y CTAs. Las cifras y requisitos van en tipografía de datos, sobria. Ejemplos:
  - Cinnaholic: "A sweet future starts here" seguido de "$400K Net Worth · $100K Liquid Capital · $241,082 – $526,582 Investment Range" y del CTA "Own your roll today".
  - Duck Donuts: "What You'll Need to Join Our Flock" seguido de "$200,000 Minimum Liquid Capital · $536,150 – $774,500 · $400,000 Minimum Net Worth".
  - Teriyaki Madness: "Join the Madness…", "Time to strike while the wok is hot", "Way more than participation ribbons – check out our franchise awards!", junto al AUV de US$1.113.760 con referencia al FDD.
  - Tropical: "*Drink it in. Our numbers are as craveable as our smoothies and food.*"
  - Sweet Paris: "*Beautiful to look at. Even better on paper.*"
- [O] **La metáfora de marca se convierte en sistema** en Kung Fu Tea: el equipo comercial son "Kung Fu Masters", la red tiene "trained masters and black belts" y la capacitación es la "KFT Academy".
- [O] **La identidad visual del consumidor se mantiene:** paleta, tipografías display y fotos reales del local (Tropical, Cinnaholic, Dave's, Teriyaki Madness). Lo que se hace más sobrio es el layout: más aire, KPI en tarjetas, tablas.
- [O] **Sweet Paris sube el registro a "lujo"** con serif, mucho aire y un vocabulario como "Private Prospectus" o "Welcome to the table".
- [O] **Mascotas:** en la muestra no vi una mascota protagonista dentro de las secciones de datos. El personaje o el motivo de marca aparece en el copy y en los detalles (el pato de Duck Donuts, el ícono del rol de canela en el H1 de Cinnaholic).
- [O] **Las marcas con voz de consumidor muy marcada no siempre la llevan a franquicias.** Wendy's, por ejemplo, usa un tono corporativo neutro en su hub.

**Interpretación para Buffalo**
- [I] La estética sticker y streetwear y la voz cercana chilena son un activo. Lo que vende Buffalo es "una marca que la gente ya ama". La regla puede ser: **la personalidad en el envoltorio, la seriedad en el contenido.**
  - Stickers, mascota y frases en chileno van en titulares, separadores, CTAs y en la pantalla de gracias.
  - Las tablas de inversión, notas al pie, requisitos y proceso van en una "capa de datos" limpia: tipografía legible, fondos planos y sin stickers encima de las cifras.
- [I] El búfalo alado puede funcionar como guía del proceso (por ejemplo, marcando "estás aquí" en los pasos) o como sello de "local abierto" en el mapa. No debe aparecer junto a cifras de rentabilidad: ahí quita seriedad.

---

## 5. Anti-patrones a evitar

1. **Franquicias metidas en el sitio de consumidor con CTAs de compra a la vista.** [O] Crumbl ("Order Now" en el header), Café Martínez (carrito y "Envío GRATIS"), Juan Valdez España (bloque "¿Quieres un 10% de descuento?"), Nothing Bundt Cakes (menú de tortas completo).
2. **Testimonios de la audiencia equivocada.** [O] Crumbl muestra a empleados y clientes en lugar de franquiciados.
3. **Cifras de desempeño sin base ni advertencia.** [O] Fast Not Junk ("18% rentabilidad neta est.", "Mes 5 break-even proyectado") y Buffalo ("15% de EBITDA", "recupero en 2 años").
4. **Contadores animados que valen 0 sin JavaScript.** [O] Crumbl ("Locations worldwide 0"), Slim Chickens ("2 AUV*").
5. **Una página "formulario y nada más".** [O] Niu Sushi: un título de consumidor y 5 campos sin ninguna información.
6. **Formularios largos sin progreso ni explicación.** [O] Sushi Itto pide 14 campos (fecha de nacimiento, profesión, dirección) en un solo paso.
7. **Muchos H1 y estructura semántica rota.** [O] Slim Chickens (96 H1), Dunkin' (10), Buffalo (4, uno en inglés).
8. **Una urgencia que no se puede comprobar.** [O] "Cupos limitados" sin mostrar qué zonas quedan (parcialmente en Fast Not Junk). [I] La urgencia solo es creíble si se ve el mapa o la lista de zonas.
9. **Textos en otro idioma o restos de plantilla.** [O] Buffalo: "Our Recent Blogs", "Follow us on Facebook" (que enlaza al bot de WhatsApp) y testimonios de plantilla "FreshLearn" ocultos en el DOM.
10. **Imágenes sin optimizar.** [O] Buffalo carga un PNG de 31,5 MB para una miniatura del blog.
11. **CTAs que sacan al usuario del embudo en la zona de conversión.** [O] En Buffalo, el "Más información" de la sección "¿Por qué franquiciar con nosotros?" lleva al blog. El CTA principal del hero ("Hablemos") lleva a WhatsApp antes de mostrar cualquier argumento.
12. **Afirmaciones absolutas sin respaldo en meta description o titulares.** [O] La meta description de Buffalo dice "la franquicia de comida de mayor crecimiento en Chile" y en la página no hay ningún dato que lo respalde.

---

## 6. Anatomía recomendada de una landing de franquicias (para Buffalo)

Orden sugerido, de arriba a abajo. [I] Es una síntesis de los patrones observados, adaptada a Buffalo.

| # | Sección | Contenido mínimo | Por qué va aquí | Referente |
|---|---|---|---|---|
| 0 | **Header sticky** | Logo responsivo · anclas (El negocio, Números, Proceso, Requisitos, FAQ) · CTA principal "Postula". En móvil: hamburguesa visible + **barra inferior fija** con el CTA. | El inversionista vuelve a buscar el CTA después de leer cifras. En móvil es la diferencia entre convertir o no. | Tropical, Sweet Paris |
| 1 | **Hero** | H1 de propiedad con la voz de Buffalo · subtítulo con "Inversión desde $40M" · 3 o 4 KPI (locales, regiones, payback, margen) con su nota al pie · CTA principal (iniciar postulación) + CTA secundario (descargar dossier). Opcional: paso 1 del formulario dentro del hero. | Responde en 5 segundos "qué es, cuánto cuesta, por qué creerles y qué hago". | Sweet Paris, Tropical, Fast Not Junk |
| 2 | **Franja de confianza** | Logos de malls o centros donde opera, prensa real, nº de regiones, años de la marca. | Valida antes de pedir atención. | Dave's (prensa), G&N (respaldo) |
| 3 | **Por qué Buffalo (el negocio, no el producto)** | 3 o 4 diferenciales traducidos a economía: formato compacto, ticket y rotación, delivery más venta en local, marca con comunidad (seguidores, reseñas). | Convierte el amor de consumidor en un argumento de inversión. | Sweet Paris ("the emotional pull is the moat"), Fast Not Junk |
| 4 | **Números del modelo** | Tabla de inversión desglosada (derecho de franquicia, habilitación, equipamiento, capital de trabajo) · royalty y fondo de marketing · formatos (isla, local, food court) con m² y rango · ventas, EBITDA y payback **con base y advertencia** · CTA "Recibe el dossier completo". | Es la pregunta número 1 del inversionista. La transparencia filtra y genera confianza. | Tropical, Dunkin', Café Martínez, Kung Fu Tea |
| 5 | **Mapa: dónde estamos y dónde crecemos** | Locales actuales + zonas disponibles o prioritarias con estado (disponible / pocas plazas / tomada) · "Revisa tu comuna →". | Urgencia creíble + prueba de escala. | Slim Chickens, Sweet Paris, Cinnaholic |
| 6 | **Proceso en 7 pasos** | Línea de tiempo visual con duración de cada etapa y "2 a 4 meses desde la firma hasta la apertura" · "Postular no te compromete". | Baja la incertidumbre. Hoy está escondido en la FAQ. | Tropical, Smoothie King, Nothing Bundt Cakes |
| 7 | **Soporte y capacitación** | Antes, durante y después de abrir · equipos o roles · días u horas de capacitación · marketing de lanzamiento. | Responde "¿voy a estar solo?". | Sweet Paris, Duck Donuts, Kung Fu Tea |
| 8 | **Franquiciados reales** | 3 o más testimonios, idealmente video de 30 a 60 s, con nombre, local, ciudad, años en la red y algún dato de negocio. | Es la prueba social que más pesa para un inversionista. | Café Martínez, Smoothie King, Nothing Bundt Cakes |
| 9 | **Esto no es para todos (con requisitos)** | Mantener el tono actual + requisitos concretos (capital propio mínimo, dedicación, perfil) + "lo que buscamos / lo que no". | Autoselección: menos leads basura, más compromiso. | Chick-fil-A, Grido, Sweet Paris |
| 10 | **Postulación (formulario de 3 pasos)** | Paso 1 contacto · Paso 2 capital, plazo, operar o invertir, experiencia · Paso 3 ciudad o comuna de interés + mensaje opcional · compromiso de respuesta · pantalla de gracias con agendador de Pipedrive + WhatsApp. | Calificar sin espantar; agendar después de calificar. | Tropical, Sweet Paris, Fast Not Junk |
| 11 | **FAQ (10–12, por categorías)** | Inversión · Operación · Proceso · Contrato · enlace a la FAQ completa · schema FAQPage. | Responde objeciones finales y suma SEO. | Nothing Bundt Cakes, Teriyaki Madness |
| 12 | **Cierre + recursos** | CTA final con la voz de la marca · 2 o 3 artículos del blog · footer con razón social, contacto, aviso legal sobre cifras. | Último empujón y credibilidad legal. | Sweet Paris, Smoothie King |

---

## 7. Gap analysis del sitio actual de Buffalo

### 7.1 Lo que tiene bien (conservar) [O]
- **Dominio y landing dedicados** (no está dentro del sitio de consumidor). Es una ventaja frente a la mayoría de LatAm.
- **Inversión visible en el hero:** "Invierte desde $40.000.000". Pocos referentes LatAm lo hacen.
- **KPI en tarjetas:** +50 locales, +40 socios, payback, EBITDA.
- **Sección "Esto no es para todos"** con buen tono de marca.
- **FAQ completa (17)** con datos valiosos: contrato a 20 años, apertura en 2 a 4 meses desde la firma, posibilidad de operar con administrador, varios locales, búsqueda de local.
- **Testimonios reales con nombre y local** (Boulevard Marina, Mallplaza Iquique).
- **Formulario con preguntas de calificación** (plazo y capital) y CRM integrado (HubSpot + Pipedrive).
- **Identidad visual fuerte y coherente** (stickers, colores, fotos reales de locales y equipo).
- **SEO básico correcto:** `<title>` "Franquicia de Comida en Chile | Buffalo Waffles Franquicias", canonical, `lang="es-cl"`, sitemap, un blog con contenido de intención ("Cómo funciona una franquicia de comida…", "¿Por qué ser franquiciado en lugar de emprender desde cero?").

### 7.2 Lo que falta y lo que sobra, priorizado

| Prioridad | Tipo | Hallazgo [O] | Benchmark | Recomendación [I] |
|---|---|---|---|---|
| **Alto** | Sobra / técnico | `blog1.png` de 4480×6720 px y **31,5 MB** se carga en la landing para mostrarse a 368×503 px. Medición: ~34 MB transferidos, 93 solicitudes, LCP ~4,6 s, *load* ~9,5 s (navegador de escritorio, una sola medición). | Como referencia, el HTML de Sweet Paris pesa ~65 KB sin comprimir y el de Buffalo ~232 KB. El problema de fondo es la imagen, no el HTML. | Presupuesto de peso por página; imágenes en WebP/AVIF a su tamaño real; carga diferida bajo el pliegue. |
| **Alto** | Falta / móvil | En móvil emulado (375 px) el logo tiene 500 px de ancho fijo, el layout se estira a 1.220 px, el logo se corta ("BUFFALO ★ WA…") y el menú hamburguesa queda fuera de la pantalla. No hay CTA fijo en móvil. *Confirmar en un dispositivo real.* | Tropical (CTA en header móvil), Sweet Paris (barra inferior). | Header móvil con logo fluido, hamburguesa visible y barra inferior fija "Postula". |
| **Alto** | Falta | Las cifras "15% de EBITDA" y "recuperar la inversión en 2 años" no tienen base, periodo, muestra ni advertencia. El título de la tarjeta es "BUENA INVERSIÓN", que es vago. | Tropical, Smoothie King, Sweet Paris (nota al pie con muestra y % que supera el promedio). | Agregar nota al pie con base y advertencia; validar con legal; ponerle título concreto a la cifra ("Payback promedio: 24 meses¹"). |
| **Alto** | Falta | Sin desglose de la inversión ni formatos de local; solo "desde $40M". | Tropical, Dunkin', Café Martínez, Kung Fu Tea, Fast Not Junk (en UF). | Tabla de inversión por formato + royalty y fondo de marketing (o, al menos, en un dossier descargable). |
| **Alto** | Sobra | 5 vías de conversión sin jerarquía: "Hablemos" (WhatsApp, CTA del hero), "AGENDAR" (Pipedrive, header), formulario principal, chat proactivo y un 2º formulario ("¿Dudas o preguntas?"). El CTA del hero saca al usuario del sitio antes de cualquier argumento. | Un CTA principal + uno secundario (Sweet Paris, Tropical). | CTA principal = postular (formulario). Secundario = dossier. WhatsApp y agenda pasan a apoyo, con un rol claro. |
| **Alto** | Sobra / confianza | En el DOM hay testimonios de plantilla ocultos ("This is my testimonial about FreshLearn which is a LMS Product", "Manisha, Founder", ×3), 2 módulos de blog duplicados ocultos, un H1 "Our Recent Blogs" y "Follow us on Facebook" (que enlaza al bot de WhatsApp). | — | Limpiar la plantilla: un solo H1 y textos 100% en español. |
| **Medio** | Falta | Formulario de 9 campos en un solo paso (Nombre*, Apellidos*, Correo*, Teléfono*, Ciudad*, Comuna, Plazo, Capital, Mensaje) + reCAPTCHA. Los tramos de capital ("Menos de 25 MM", "Entre 25 y 35 MM", "Entre 35 y 50 MM", "Más de 50 MM") **quedan mayormente bajo el mínimo de $40M**. | Formularios multipaso (Tropical, Sweet Paris, Fast Not Junk); pregunta de corte (Cinnaholic). | 3 pasos; tramos alineados con la inversión real (preguntar al cliente si hay financiamiento); agregar "¿operar o invertir?" y experiencia; quitar Apellidos como obligatorio. |
| **Medio** | Falta | No hay mapa de locales ni zonas disponibles. | Slim Chickens, Sweet Paris, Cinnaholic, G&N. | Mapa de Chile con locales y zonas prioritarias, con estado. |
| **Medio** | Falta | El proceso de 7 pasos y el plazo de 2 a 4 meses están escondidos en la respuesta 5 de la FAQ. | Proceso visual en Nothing Bundt Cakes, Tropical, Kung Fu Tea, Fast Not Junk. | Sección propia con línea de tiempo. |
| **Medio** | Falta | "Esto no es para todos" no tiene requisitos medibles. | Chick-fil-A, Grido, Sweet Paris, Dave's. | Agregar el piso de capital, la dedicación y el perfil. |
| **Medio** | Falta | No hay lead magnet, aunque la FAQ dice "El detalle específico se entrega durante el proceso de evaluación". | Teriyaki Madness, Sweet Paris, Tropical, Duck Donuts, G&N. | "Dossier Buffalo" en PDF a cambio del email (paso 1 del formulario). |
| **Medio** | Falta | Testimonios: solo 2, en texto, genéricos y sin datos de negocio; no hay video. | Café Martínez, Smoothie King, Nothing Bundt Cakes. | 3 a 5 franquiciados en video corto con años en la red y algún dato. |
| **Medio** | Falta | Soporte y capacitación solo en la FAQ ("capacitación, soporte operacional, marketing…"). | Sweet Paris, Duck Donuts, Kung Fu Tea, Smoothie King. | Sección de soporte por etapas, con días de capacitación reales. |
| **Medio** | Inconsistencia | "+50 locales" en hero, tarjetas y FAQ vs. "55 locales" en el blog. La meta description dice "de mayor crecimiento en Chile" sin respaldo. | — | Una sola fuente de verdad para las cifras, con fecha de corte ("55 locales a sept. 2026"). |
| **Bajo** | Falta / SEO | Sin datos estructurados (ni Organization ni FAQPage). 4 etiquetas H1. Slugs del blog con errores ("cmo-funciona…", "…simpleo") y acentos en las URLs. | Teriyaki Madness (FAQPage + Blog). | Schema FAQPage + Organization; un solo H1; slugs limpios con redirecciones 301. |
| **Bajo** | Sobra | El "Más información" de "¿Por qué franquiciar con nosotros?" lleva al blog, en plena zona de conversión. Hay 2 secciones de blog seguidas ("Nuestro blog" con categorías y "Nuestro blog" con posts). | — | Un solo bloque de recursos, cerca del final. |
| **Bajo** | Falta | No se promete un tiempo de respuesta. | Fast Not Junk (menos de 5 min), Dave's (24 h), Juan Valdez (48 h), Sweet Paris (1 día hábil). | "Te contactamos en menos de 24 h hábiles" (solo si se puede cumplir). |
| **Bajo** | Falta | No hay prueba de prensa, premios ni malls. | Dave's, Sweet Paris, Tropical. | Logos de malls donde opera y prensa real (sin inventar sellos). |

---

## 8. Recomendaciones accionables para el equipo de diseño (15)

1. **Diseñar dos capas visuales.** Una capa de marca (stickers, mascota, tipografía display, chilenismos) para titulares, separadores y CTAs, y una capa de datos limpia (tipografía legible, fondos planos, sin stickers encima) para cifras, tablas, requisitos y notas legales. Referencias: Cinnaholic, Duck Donuts, Teriyaki Madness.
2. **Hero con 4 elementos fijos:** H1 de propiedad con la voz de Buffalo, "Inversión desde $40M", entre 3 y 4 KPI con superíndice de nota (¹) y dos botones: principal "Postula" (abre el formulario) y secundario "Descarga el dossier". WhatsApp sale del hero.
3. **Header y CTA en móvil.** Logo fluido (máx. ~60% del ancho), hamburguesa siempre visible y **barra inferior fija** con el CTA principal al pasar el hero. Probar a 360 y 375 px. Referencia: Sweet Paris.
4. **Componente "Tabla de inversión"** con filas (derecho de franquicia, habilitación, equipamiento, capital de trabajo, total), una columna por formato y un pie de nota. Diseñarlo también para que se pueda reusar en el dossier PDF.
5. **Componente "KPI con nota al pie".** Cada cifra (EBITDA, payback, ventas) lleva su superíndice, que enlaza a una nota con periodo, nº de locales considerados y advertencia ("resultados individuales pueden variar"). El texto definitivo lo valida legal.
6. **Formulario de 3 pasos con barra de progreso:**
   - Paso 1: nombre, email, WhatsApp (y descarga del dossier).
   - Paso 2: capital disponible en tramos alineados con la inversión real, plazo, operar o invertir, experiencia.
   - Paso 3: ciudad o comuna de interés + mensaje opcional.

   Microcopy: "Toma 1 minuto · Sin compromiso".
7. **Pantalla de gracias con la voz de Buffalo** + agendador de Pipedrive embebido ("Elige tu reunión inicial") + WhatsApp con mensaje prellenado. Agendar se vuelve el paso siguiente a la calificación, no una ruta paralela.
8. **Mapa de Chile** con los locales actuales y las zonas disponibles o prioritarias en 3 estados (disponible / pocas plazas / tomada), un buscador "¿Hay cupo en mi comuna?" y una alternativa en lista de texto por accesibilidad (como Cinnaholic). La urgencia solo si los datos son reales.
9. **Línea de tiempo de 7 pasos** con duración por etapa y el destacado "2–4 meses desde la firma hasta la apertura". El búfalo alado puede funcionar como marcador de avance.
10. **Bloque "Esto no es para todos" reforzado:** mantener el copy actual y agregar una tarjeta de requisitos (capital propio mínimo, dedicación, perfil) y una de "lo que buscamos / lo que no". Referencias: Grido (3 requisitos grandes), Chick-fil-A.
11. **Testimonios en formato tarjeta de video:** clip de 30 a 60 s con subtítulos, nombre, local, ciudad, años en la red y un dato (por ejemplo, "abrí mi 2º local en 2025"). Mínimo 3. Necesita producción de contenido.
12. **Sección de soporte por etapas** (antes, apertura, después) con íconos y personas o roles reales y días de capacitación. Evitar listas genéricas.
13. **FAQ de 10 a 12 preguntas en la landing, en 4 categorías** (Inversión, Operación, Proceso, Contrato), con enlace a una página con las 17 o más y marcado FAQPage.
14. **Presupuesto técnico como criterio de diseño:**
    - imágenes en su tamaño real, en WebP o AVIF;
    - menos de ~2 MB en el primer pantallazo;
    - un solo H1;
    - cifras en el HTML (sin contadores que dependan de JS);
    - todos los textos en español;
    - cero restos de plantilla.
15. **Una sola fuente de verdad para las cifras** (nº de locales, socios, regiones), con fecha de corte visible ("a septiembre de 2026") y la misma en la landing, el blog, la meta description y el dossier. Eliminar las afirmaciones absolutas que no se pueden demostrar ("de mayor crecimiento en Chile").

---

## 9. Fuentes consultadas

Todas las páginas se revisaron el 2 de octubre de 2026.

**Sitio del cliente**
- https://buffalofranquicias.com/es-cl/
- https://buffalofranquicias.com/blog
- https://buffalofranquicias.com/robots.txt · https://buffalofranquicias.com/sitemap.xml

**Capa 1: Chile y LatAm**
- https://franquiciasfastnotjunk.com/ (formulario embebido: api.leadconnectorhq.com/widget/survey/…)
- https://gnbrands.com/es/marcas-y-franquicias
- https://gnbrands.com/es/marcas-y-franquicias/franquicia-con-nosotros/chile-es/
- https://www.niusushi.cl/franquicias
- https://juanvaldez.com/franquiciados/
- https://es.juanvaldez.com/franquicias-juan-valdez/ (redirige a /franquicias/)
- https://argentina.gridohelado.com/abrir-grido/
- https://argentina.gridohelado.com/wp-content/themes/grido/brochures/brochure.pdf (solo identifiqué el enlace)
- https://www.cafemartinez.com/franquicias/
- https://www.sushi-itto.com.mx/franquicias

**Capa 2: QSR global**
- https://franchise.daveshotchicken.com/dhcfranchising/
- https://www.tropicalsmoothiefranchise.com/
- https://www.tropicalsmoothiefranchise.com/our-process/
- https://www.tropicalsmoothiefranchise.com/perfect-candidate/
- https://www.franchising.inspirebrands.com/dunkin
- https://www.chick-fil-a.com/franchise
- https://slimchickensfranchise.com/
- https://franchise.teriyakimadness.com/

**Capa 3: postres, snacks y bebidas**
- https://crumblcookies.com/franchising
- https://www.nothingbundtcakes.com/franchise-opportunities/
- https://cinnaholicfranchise.com/
- https://www.kungfutea.com/franchise/
- https://www.smoothiekingfranchise.com/
- https://www.smoothiekingfranchise.com/franchise-process/
- https://www.duckdonuts.com/franchising
- https://sweetparisfranchise.com/

**Probadas y descartadas** (motivo en §2)
- https://www.wingstop.com/franchise → https://ir.wingstop.com/
- https://www.tacobell.com/franchise → página de marca en yum.com
- https://www.popeyes.com/franchise · https://www.timhortons.com/franchising
- https://thewingsarmy.com/mx/franquicias2/
- https://franchising.nothingbundtcakes.com/
- https://www.jerseymikes.com/franchise
- https://www.wendys.com/franchising
- https://www.papajohns.cl/franquicias

**Búsquedas de contexto** (no se usaron como fuente de datos de la muestra)
- https://www.iprofesional.com/negocios/441803-franquicias-de-grido-helados-requisitos-inversion-inicial-y-recuperacion-en-2025
- https://www.eltiempo.com/economia/empresas/quien-es-la-duena-de-crepes-and-waffles-historia-y-expansion-760371 (modelo de Crepes & Waffles)

**Capturas de referencia** (`01-research/benchmark-capturas/`)
- Nombre de archivo: `<marca>-desktop.png` (1440×900) y `<marca>-mobile.png` (390×844 @2x, emulación iPhone). Hay 43 archivos: escritorio y móvil para las 20 marcas + Buffalo, y Juan Valdez España por separado.
- Teriyaki Madness no tiene captura móvil: el sitio responde 403 a navegadores headless con user-agent móvil.
- En algunas capturas se ve el banner de cookies sin aceptar.
