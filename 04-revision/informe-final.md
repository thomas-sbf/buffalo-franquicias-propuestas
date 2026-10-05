# Informe final: propuestas web Buffalo Franquicias

**Fecha:** 3 oct 2026 · **Orquestador:** Claude · **Alcance:** 4 remakes completos de https://buffalofranquicias.com/es-cl/ (home one-page + flujos), desktop y móvil.

## 1. Qué se hizo

| Fase | Agente | Entregable |
|---|---|---|
| 1 | A1: benchmark de 20 sitios de franquicias (Chile/LatAm, QSR global, postres/bebidas) | [benchmark-franquicias.md](../01-research/benchmark-franquicias.md) + 43 capturas |
| 1 | A2: tendencias web 2026, con foco en color (15 sitios, mayormente premiados en Awwwards) | [tendencias-web.md](../01-research/tendencias-web.md) + 16 capturas |
| 2 | A3: design system web v2 (copia; el original no se tocó) | [02-design-system-web/](../02-design-system-web/index.html): tokens, 58 pares de contraste AA, 20 componentes, voz para inversionistas, contenido real, 20 pendientes del cliente |
| — | Checkpoint con el usuario | Aprobado, con la indicación: **remakes completos, no mejoras incrementales** |
| 3 | A4: dirección "raíz de marca" | A4-1 y A4-2 |
| 3 | A5: dirección "disruptivo 2026" | A5-1 y A5-2 |
| 4 | Revisión del orquestador: 1 ronda de feedback a cada diseñador, más verificación | Este informe |

## 2. Las 4 propuestas

### A4-1 · De la calle a tu local
Recorrido como **ruta** desde un waffle en kraft hasta la inauguración de tu local, sobre fondo de kraft con textura y un rail lateral con forma de carretera.
- **Nuevo:** relato de origen con fotos reales de locales (Brandbook); pre-cuenta de costos sellada «por validar»; Chile en 16 letreros de carretera; configurador **«Arma tu Buffalo»** (formato, región, rol, plazo y capital) que arma una comanda y prellena la postulación; 7 hitos kilométricos; testimonios como afiches de paradero; FAQ como pizarra.
- **Firma:** el papel kraft se desenvuelve al hacer scroll y los stickers se «pegan».

### A4-2 · La Crew
«No buscamos compradores. Buscamos crew.» Un **fanzine riso N.º 01** de varias páginas, con el test de postulación en otra pantalla (`carnet.html`).
- **Nuevo:** manifiesto de 7 reglas; cartas de franquiciados que se dan vuelta; álbum de láminas por región (11/16); «La letra grande» con los costos; proceso como carnet con 7 timbres; FAQ como «correo de lectores»; **test «¿Eres Buffalo?»** que califica al postulante y arma un carnet «en revisión».
- **Firma:** mascota en collage, cartas, álbum y carnet.

### A5-1 · El negocio en vivo
El sitio como **tablero o pitch deck del inversionista**, con tema oscuro, islas claras para los números y un rail numerado 00–08.
- **Nuevo:** H1 cinético «Tu Buffalo, con los números sobre la mesa»; cada cifra muestra su fuente (sitio / blog / por confirmar); «El trato» como libro contable; **simulador de inversión** (capital, región y formato frente a las cifras oficiales; sin montos calculados) que y prellena el formulario; Chile en 16 regiones; Gantt de los 7 pasos; FAQ con buscador.
- **Firma:** el simulador y el sistema de fuentes.

### A5-2 · Bloques de sabor
La franquicia como **una carta de 7 capítulos**, cada uno con un sabor y un color; el color es la navegación.
- **Nuevo:** selector de sabor en la portada (cambia el color y el producto); pistas horizontales que se recorren con teclado; «pizarra de precios»; tarjetas Antes / Durante / Después; autoevaluación «La receta del franquiciado»; **postulación conversacional tipo chat**, con formulario clásico como alternativa.
- **Exploratorio:** usa Persian Plum #661A2B y Laird Green #7E823D, marcados en pantalla como «por confirmar».

## 3. Evaluación (1–5)

| Criterio | A4-1 Calle | A4-2 Crew | A5-1 En vivo | A5-2 Sabores |
|---|---|---|---|---|
| Fidelidad de marca | **5** | **5** | 3 | 4 |
| Credibilidad ante el inversionista | 4 | 3 | **5** | 4 |
| Conversión (CTA, calificación, agenda) | **5** | 4 | **5** | 4 |
| Aplicación del benchmark (A1) | **5** | 4 | **5** | 4 |
| Aplicación de tendencias (A2) | 4 | 4 | **5** | **5** |
| Originalidad (remake real) | 4 | **5** | **5** | **5** |
| Móvil (tras la ronda 1) | 4 | **5** | 4 | 4 |
| Rigor de datos (sin inventar) | **5** | **5** | **5** | **5** |
| Factibilidad en HubSpot | 4 | 3 | 3 | 3 |
| **Total / 45** | **40** | **38** | **40** | **38** |

**Verificado por mí en el navegador**, a 1440×900 y 375×812, después de la ronda 1:
- Sin scroll horizontal ni imágenes rotas, con un solo H1.
- Barra fija **Postula + WhatsApp** en móvil.
- Imagen de marca en la primera pantalla de móvil.
- Flujos principales: configurador, test, simulador y chat.
- Cifras marcadas como pendientes.

| | A4-1 | A4-2 | A5-1 | A5-2 |
|---|---|---|---|---|
| Alto en móvil | 14.623 px | 13.017 px | 14.275 px | 16.243 px |
| Peso de la carpeta | 1,6 MB | 1,7 MB | 0,7 MB | 1,2 MB |
| Marcas «pendiente» | 33 | 39 | 44 | 35 |

**Reportado por los agentes, sin verificar por mí:** contraste AA de cada par, `prefers-reduced-motion` (revisado en código, no emulado) y Firefox (no probado; las animaciones nativas tienen fallback).

## 4. Recomendación: las 3 para presentar

1. **A4-1 · De la calle a tu local**: el mejor equilibrio entre marca y conversión. Es la más fácil de llevar a HubSpot y la que mejor cumple la anatomía que recomienda el benchmark.
2. **A5-1 · El negocio en vivo**: la más creíble para un inversionista y la más liviana. El sistema de «fuente de cada número» conviene adoptarlo en la propuesta que se elija, sea cual sea.
3. **A4-2 · La Crew**: la más distinta de todas. Su test de calificación ataca directo el problema de leads que no califican (los tramos actuales del formulario quedan bajo la inversión inicial de $43M).

**Por qué A5-2 queda cuarta:** visualmente es la más impactante, pero comparte la metáfora de «carta / comanda / pedido» con A4-1, y su chat va contra la recomendación de A2 (§3.6). Vale la pena rescatar el **selector de sabor**, la **pizarra de precios** y la **navegación por color** como piezas para la propuesta que gane.

## 5. Decisiones que tiene que tomar el usuario o el cliente

1. **Elegir** 1–3 propuestas, o una combinación (por ejemplo, A4-1 + el sistema de fuentes de A5-1 + el test de A4-2).
2. ~~¿Mostrar el EBITDA y el recupero?~~ **Resuelto (5 oct 2026):** se muestran 12 % de resultado operacional y payback de 2,6 años, con el supuesto «resultado modelado en base a un escenario promedio de un local tipo Módulo» (ver §6).
3. **Tono:** ¿sirven «crew» (A4-2) y el sticker «Rico, sexy y contundente» (A4-1) para hablarle a inversionistas?
4. **Postulación:** ¿formulario en pasos (A4-1, A5-1), test (A4-2) o chat (A5-2)?
5. **Colores exploratorios** Persian Plum y Laird Green: el hex y el RGB del Brandbook no coinciden.

## 6. Cifras oficiales de inversión (entregadas por el cliente el 5 oct 2026)
Aplicadas de forma idéntica en los 4 prototipos (ronda 2):

| Concepto | Valor | Presentación |
|---|---|---|
| Inversión inicial total | desde $43.000.000 | Siempre encabeza el bloque de inversión |
| Derecho de franquicia | $10.000.000, incluido | Debajo y más chico, nunca destacado |
| Capital de trabajo | $3.000.000, incluido | Debajo y más chico |
| Royalty | 9 % de la venta neta | — |
| Fondo de marketing | 2 % de la venta neta | — |
| Contrato | 5 años, renovable por 4 periodos | — |
| Apertura | 3 a 6 meses desde la firma | — |
| Resultado operacional / payback | 12 % / 2,6 años | Con el supuesto: «Resultado modelado en base a un escenario promedio de un local tipo Módulo» |

Regla: no se muestran montos calculados sobre ventas hipotéticas, totales derivados ni fechas proyectadas. Contrato, royalty y apertura difieren de lo que hoy publica el sitio actual (20 años, 7 %, 2–4 meses): conviene corregir también el sitio vigente y el blog.

## 7. Pendientes del cliente (bloquean la publicación, no el diseño)
Detalle completo en [PENDIENTES-CLIENTE.md](../02-design-system-web/PENDIENTES-CLIENTE.md). Los críticos:
- Una sola cifra de locales (+50 vs. 55, con fecha de corte).
- Validación legal del formulario (Ley 21.719, vigente desde el 1-dic-2026 según fuente secundaria; verificar).
- Licencias web de Mostin y Teenage Dreams. La versión DEMO de Teenage Dreams **no tiene tildes ni ñ**.
- **Nuevos de esta fase:**
  - Permiso de uso de las fotos de locales del Brandbook (págs. 22 y 44).
  - Confirmar si Coquimbo/La Serena falta en el mapa: hay un flyer de La Serena y el mapa publicado no la marca.
  - Fotos y videos de franquiciados.
  - Logo en SVG.

## 8. Hallazgos del sitio actual (arreglables ya, sin esperar el rediseño)
- La miniatura del blog `blog1.png` es de 4480×6720 px y se muestra a 368×503. Comprobado.
- En móvil el logo mide 500 px fijos y desborda la página (reportado por A1; probar en un teléfono real).
- Quedan testimonios de relleno de la plantilla ocultos en el HTML, hay 4 H1 (uno en inglés, «Our Recent Blogs») y el link «Follow us on Facebook» abre WhatsApp.

## 9. Cómo verlas
Servir la carpeta del proyecto y abrir:
- http://127.0.0.1:8765/03-prototipos/ (índice de las 4)
- `…/A4-1-de-la-calle-a-tu-local/` · `…/A4-2-la-crew/` (+ `carnet.html`) · `…/A5-1-negocio-en-vivo/` · `…/A5-2-bloques-de-sabor/`

Cada carpeta es autocontenida y trae su `RATIONALE.md`: concepto, recorrido, hallazgos aplicados, qué rompe del DS, pendientes y cómo se mapea a HubSpot.

## 10. Próximos pasos sugeridos
1. Elegir la propuesta (o la combinación) y resolver las decisiones de la sección 5.
2. Conseguir del cliente los pendientes críticos de la sección 7.
3. Hacer una iteración de la propuesta elegida con datos reales y textos legales.
4. Implementar en HubSpot: módulos por sección. El configurador, el simulador o el test necesitan un módulo propio con la HubSpot Forms API, y el agendado sigue en Pipedrive.
