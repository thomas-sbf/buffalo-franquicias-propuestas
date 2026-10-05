# Pendientes que solo puede resolver el cliente (Buffalo Waffles)

Ordenados por impacto en el rediseño. Mientras no se resuelvan, los prototipos los muestran con `<mark class="bw-pending">` y nada se inventa.

**Actualización 5 oct 2026:** el cliente entregó las cifras oficiales de inversión (ver «Cifras oficiales (octubre 2026)» en `contenido-real.md` §3). Quedan **resueltos #1 y #5**, y #4 se ajusta al nuevo piso de $43M. Ojo: **contrato, royalty y apertura cambiaron respecto de lo publicado hoy en el sitio y el blog** (ver la tabla al final): hay que actualizar también el sitio actual, la FAQ y el artículo del blog para que no se contradigan con la nueva landing.

| # | Pendiente | Por qué importa | Qué necesitamos | Bloquea |
|---|---|---|---|---|
| 1 | ~~**Base de las cifras de desempeño** (15 % EBITDA, recupero en 2 años)~~ **RESUELTO (5 oct 2026)** | Se publicaban sin base. | **Resultado operacional: 12 %. Payback: 2,6 años.** Reemplazan al «15 % EBITDA» y al «recupero en 2 años» del sitio actual. Supuesto obligatorio, visible junto a las dos cifras: «Resultado modelado en base a un escenario promedio de un local tipo Módulo.» Nota al pie sugerida: «Resultados individuales pueden variar según ubicación, formato y gestión.» | Aplicado en los 4 prototipos |
| 2 | **Cantidad de locales: +50 vs. 55** | El sitio dice "+50" y el blog "más de 55". | Una cifra con fecha de corte ("55 locales a sept. 2026") y la lista de locales con dirección. | Hero, KPI, FAQ 16, footer, blog, mapa |
| 3 | **Validación legal del formulario** (Ley 21.719 de protección de datos personales; según A2 entra en vigencia el 1-dic-2026, fuente secundaria: verificar en BCN) | El formulario actual no tiene consentimiento. | Texto de consentimiento, finalidades, responsable (razón social y RUT), canal para ejercer derechos, política de privacidad publicada, plazo de conservación y si los datos se comparten con Pipedrive/HubSpot/el bot de WhatsApp. | LeadForm, footer |
| 4 | **Tramos de capital del formulario** | Los actuales (hasta "Más de 50 MM") quedan casi todos bajo la inversión mínima. | Confirmar cortes propuestos, ya alineados con el piso oficial de $43M (Menos de $43M · $43M a $60M · $60M a $100M · Más de $100M · Prefiero conversarlo), capital propio mínimo, y si hay financiamiento. | LeadForm, Requisitos |
| 5 | ~~**¿Los $40M incluyen el derecho de franquicia de $10M + IVA?**~~ **RESUELTO (5 oct 2026)** | La FAQ y el blog se contradecían. | **Inversión inicial total desde $43.000.000, que incluye el derecho de franquicia ($10.000.000) y el capital de trabajo ($3.000.000).** Sigue pendiente solo el desglose por formato (habilitación, equipamiento, m²). | Aplicado en los 4 prototipos |
| 6 | **Fotos de locales y franquiciados** | La prueba social para inversionistas son personas reales con su local (A1 §4.3). En `assets/` solo hay producto y lifestyle de clientes. | Fachadas e interiores (horizontal, ≥ 2000 px), equipo trabajando, retratos de franquiciados con su local; permiso de uso. Confirmar quiénes aparecen en `founders.png`, `thomas.png` y "Operando un Buffalo Waffles". | Hero foto, Testimonial, Features |
| 7 | **Testimonios completos** (idealmente 3–5 en video de 30–60 s) | Los 2 actuales no tienen años en la red ni datos. | Nombre, local, ciudad, años en la red, un dato de negocio, autorización; videos con subtítulos. | Testimonial |
| 8 | **Licencia web de Teenage Dreams** | Es una build DEMO. **Además no tiene tildes ni ñ** (verificado: "qué" se ve "que", "ñ" se ve "n"). | Licencia web y archivo completo (WOFF2) con Latin-1 (á é í ó ú ü ñ ¡ ¿). Si no llega, el kicker pasa a Mostin (`.bw-kicker--mostin`). | Kickers en todo el sitio |
| 9 | **Licencia web de Mostin** | Los WOFF/WOFF2 están en el DS, pero no consta la licencia para web. | Confirmar licencia de uso web (y número de visitas/dominios si aplica). | Todo el sitio |
| 10 | **2 colores del Brandbook p.19** | En el render de la página aparecen **PERSIAN PLUM #661a2b (R102 G26 B43)** y **LAIRD GREEN #7e823d**, pero la capa de texto del PDF los trae incompletos y el verde es inconsistente (su RGB dice R126 G103 B130 = #7e6782, un malva). Además, el render los muestra en "Paleta secundaria" y el DS original los llama "primarios". | Confirmar valores correctos, si son primarios o secundarios y su rol. Hasta entonces están comentados en `tokens/colors.css` y no se usan. | Paleta |
| 11 | **Logo en vector (SVG)** | Solo hay PNG; el logotipo negativo trae fondo negro sólido. | SVG positivo/negativo del isologotipo y el logotipo (o PNG negativo con fondo transparente). | Header, footer, favicon |
| 12 | **Doodles / iconografía en SVG sueltos** (Brandbook p.21) | Hoy solo existe la lámina `doodle.pdf` sobre negro. Son el ADN sticker de la marca y reemplazarían los íconos de apoyo. | SVG individuales de 1 color. | Features, Support, separadores |
| 13 | **Zonas disponibles por región/comuna** | La urgencia solo es creíble con datos (A1 anti-patrón 8). | Estado por zona: disponible / pocas plazas / tomada. | LocationsMap |
| 14 | **Capacitación y equipo de soporte** | "¿Voy a estar solo?" se responde con datos. | Días/horas de capacitación, roles o nombres del equipo, qué incluye la inauguración. | SupportGrid |
| 15 | **Tiempo de respuesta al lead** | Solo prometer lo que se cumple. | "Te contactamos en [X] horas hábiles". | Hero, LeadForm |
| 16 | **Dossier descargable** (lead magnet) | 8 de 20 referentes lo tienen; capta a quien no quiere hablar todavía. | PDF con inversión, formatos, proceso. | Hero, LeadForm |
| 17 | **WhatsApp: ¿bot o número directo?** | El link actual pasa por un bot (patg.ai). | Confirmar qué canal usar y el mensaje prellenado. | Sticky CTA, footer, gracias |
| 18 | **"Sin compromiso"** | Microcopy útil, pero debe ser cierto. | Confirmar que postular y la reunión inicial no generan obligación. | Proceso, LeadForm |
| 19 | **Prensa, premios, logos de malls** | Franja de confianza (A1 §6, sección 2). | Solo material real y con permiso (no inventar sellos). | Franja de confianza |
| 20 | **Video del hero (`Banner home.mp4`)** | Pesa y compite con el LCP. | Versión corta y liviana (o descartarlo). | Hero |

## Cifras que cambian respecto del sitio actual (entregadas por el cliente el 5 oct 2026)

| Dato | Publicado hoy (sitio y blog) | Cifra oficial | Qué hacer |
|---|---|---|---|
| Inversión | desde $40.000.000 | **Inversión inicial total desde $43.000.000** (incluye derecho de franquicia $10.000.000 y capital de trabajo $3.000.000) | Actualizar hero, FAQ 1 y 2 y blog |
| Derecho de franquicia | $10.000.000 + IVA, aparte | **$10.000.000, incluido** en la inversión inicial total | Actualizar blog |
| Royalty | 7 % de las ventas netas | **9 % de la venta neta**, mensual | **Cambió:** actualizar blog |
| Fondo de marketing | 2 % | 2 % de la venta neta, mensual | Sin cambio |
| Contrato | 20 años | **5 años, renovable por 4 periodos** | **Cambió:** actualizar FAQ 14 y blog |
| Apertura | 2 a 4 meses desde la firma | **3 a 6 meses desde la firma** | **Cambió:** actualizar FAQ 6 y blog |
| Desempeño | 15 % EBITDA; recupero en 2 años | **12 % de resultado operacional; payback de 2,6 años**, con el supuesto «Resultado modelado en base a un escenario promedio de un local tipo Módulo.» | Actualizar tarjetas de cifras y blog |
