# Contenido real del sitio actual (para usar en los prototipos)

- **Fuente:** https://buffalofranquicias.com/es-cl/ y su blog, revisados con el navegador el **2 de octubre de 2026** (texto visible + DOM, incluidas las respuestas del acordeón y las opciones del formulario).
- **Regla:** todo lo de este documento está publicado hoy por Buffalo Waffles, salvo la tabla «Cifras oficiales (octubre 2026)» de §3, que entregó el cliente el 5 de octubre de 2026 y **manda sobre lo publicado**. **No se inventó ninguna cifra.** Lo que falta está en §10 y en `PENDIENTES-CLIENTE.md`. En los prototipos, marca cualquier dato faltante con `<mark class="bw-pending">`.
- Los textos van tal cual (solo se corrigieron espacios perdidos del HTML, p. ej. "apertura,manuales" → "apertura, manuales").

---

## 1. Metadatos y SEO actuales
| Campo | Valor |
|---|---|
| `<title>` | Franquicia de Comida en Chile \| Buffalo Waffles Franquicias |
| Meta description | "Invierte en la franquicia de comida de mayor crecimiento en Chile. Buffalo Waffles: modelo probado, soporte completo y alta rentabilidad. Conoce el proceso." (!) "de mayor crecimiento en Chile" no tiene respaldo en el sitio (A1, anti-patrón 12). |
| `lang` | `es-cl` |
| Imagen OG | https://buffalofranquicias.com/hubfs/imagen%20blog%203-1.png |
| Plataforma | HubSpot CMS (formularios HubSpot + reCAPTCHA; agenda en Pipedrive) |

## 2. Textos por sección (orden actual)

**Header:** ¿Por qué Buffalo? · Resultados · ¿Cómo ser franquiciado? · Blog · botón **AGENDAR** (Pipedrive).

**Hero (H1):** «SÉ DUEÑO DE TU PROPIO *Buffalo Waffles*» (la segunda línea en script).
Bajada: «Invierte desde $40.000.000 y emprende con el respaldo de una marca consolidada. Un modelo probado, soporte continuo y una red de +50 locales que sigue creciendo.»
CTA: **Hablemos** (abre WhatsApp, sale del sitio). Fondo: video `Banner home.mp4`.

**Formulario principal:** «¿Quieres que te contactemos?» · «Nos encantaría escucharte. Completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.» · botón **Enviar** (campos en §6).

**¿Por qué franquiciar con nosotros?** (kicker «Franquicia Buffalo waffles»)
«Buffalo Waffles es una marca validada, con más de 50 locales y una propuesta que ya conecta con miles de clientes. Un modelo probado, con productos de calidad y una experiencia que marca diferencia.»
«Hoy buscamos socios para seguir creciendo. Súmate y construye tu propio negocio con una marca en expansión y un camino claro hacia resultados.» · botón «Más información» (lleva al blog (!)).

**Tarjetas de cifras (id `#cifras`):**
| Título | Texto |
|---|---|
| + 50 LOCALES | Más de cincuenta locales activos, operando con un modelo probado. Marca instalada con demanda real y crecimiento sostenido. |
| + 40 SOCIOS | Red de franquiciados sólida, con soporte constante en operación. Acompañamiento real desde la apertura hasta consolidar ventas. |
| BUENA INVERSIÓN | Modelo de negocio diseñado para recuperar inversión en un plazo de 2 años. Estructura eficiente con costos controlados y alta rotación. |
| 15% DE EBITDA. | Rentabilidad atractiva con estructura optimizada de costos. Margen competitivo en un formato probado y de alta demanda. |

**Esto no es para todos** (kicker «Franquicia Buffalo Waffles»)
«Buffalo Waffles es un modelo probado, pero necesita de alguien que lo ejecute bien. Buscamos personas con mentalidad emprendedora, foco en la operación y ganas reales de construir algo propio.»
«Nosotros ponemos la marca, el sistema y el acompañamiento. Tú pones la energía para hacerlo crecer.»
«Si te hace sentido, este puede ser tu lugar.» · botón **Quiero ser franquiciado**.

**Testimonios:** ver §4.

**Mapa (imagen):** «BUFFALO IN DA HOUSE · ★ DESDE ARICA HASTA PUNTA ARENAS ★», con pines en **11 regiones**: XV (Arica y Parinacota), I (Tarapacá), II (Antofagasta), V (Valparaíso), RM, VI (O'Higgins), VII (Maule), VIII (Biobío), IX (La Araucanía), XIV (Los Ríos) y XII (Magallanes). Es una imagen (`Mapa.png`): no hay lista de texto ni direcciones.

**FAQ:** «¿Cómo ser franquiciado?» · «¿Tienes preguntas sobre como empezar? Aquí las respondemos.» (falta la tilde en "cómo"). Preguntas en §5.

**¿Dudas o preguntas?** «Si todavía tienes dudas sobre invertir, déjanos tu nombre y correo en el formulario a continuación. Te enviaremos toda la información que necesitas para tomar la mejor decisión. ¡No te pierdas la oportunidad de ser parte de nuestro éxito!» · «También puedes escribirnos directamente por Whatsapp.» · botón WHATSAPP · 2.º formulario (Nombre*, Correo*).

**Footer:** «Más de 50 locales, un modelo validado y una oportunidad real de crecimiento.» · CONTACTO: franquicias@buffalowaffles.com · «Número oficial +569 3375 8164» · CONÉCTATE: Facebook, LinkedIn, X, Instagram · «Follow us on Facebook» ((!) en inglés y enlaza al bot de WhatsApp) · PÁGINAS · RECURSOS · «Creado por GÜÜD COMPANY».

**Blog (índice):** «EL BLOG DE LOS QUE VAN EN SERIO» · «Lo que nadie te cuenta antes de abrir una franquicia. Casos reales, métricas de operación y todo lo que necesitas saber antes de invertir.» Categorías en la home: Expansión Buffalo · Vida franquiciada · Modelo de negocio · Novedades de marca.

## 3. Cifras y datos publicados (fuente única para los prototipos)

### Cifras oficiales (octubre 2026)
Entregadas por Buffalo Waffles el 5 de octubre de 2026. **Reemplazan a las cifras publicadas de la tabla siguiente** y son las únicas que usan los prototipos para inversión, costos, plazos y desempeño. Fuente para notas al pie: «Cifras entregadas por Buffalo Waffles, octubre 2026».

| Concepto | Valor | Cómo se muestra |
|---|---|---|
| Inversión inicial total | **desde $43.000.000** | Siempre encabeza cualquier bloque de inversión: es la cifra protagonista. |
| Derecho de franquicia | $10.000.000, **incluido** en la inversión inicial total | Nunca destacado: debajo de la inversión inicial total y más chico, sin tarjeta propia ni color de acento. Sin «+ IVA». |
| Capital de trabajo | $3.000.000, **incluido** en la inversión inicial total | Igual que el derecho de franquicia: debajo y más chico. |
| Royalty | 9 % de la venta neta | Mensual. |
| Fondo de marketing | 2 % de la venta neta | Mensual. |
| Contrato | 5 años, renovable por 4 periodos | Exactamente esta frase. No se calcula un total de años. |
| Apertura | 3 a 6 meses desde la firma | «3 a 6 meses» en todas partes. |
| Resultado operacional | 12 % | Reemplaza el «15 % EBITDA». |
| Payback | 2,6 años | Reemplaza el «recupero en 2 años». Con coma decimal. |
| Supuesto (obligatorio junto a las dos cifras anteriores) | «Resultado modelado en base a un escenario promedio de un local tipo Módulo.» | Visible al lado de las cifras, no solo en el pie. Nota al pie opcional: «Resultados individuales pueden variar según ubicación, formato y gestión.» |

Patrón del bloque de inversión: **Inversión inicial total desde $43.000.000** (grande) y, debajo y más chico, «Incluye el derecho de franquicia ($10.000.000) y el capital de trabajo ($3.000.000).».
**No usar datos parciales ni calculados** (pedido explícito del cliente): nada de montos sobre una venta hipotética, totales derivados (p. ej. sumar royalty y fondo, o sumar años de contrato) ni fechas de apertura proyectadas.

### Lo publicado hoy en el sitio y el blog (referencia)
Las filas marcadas «Reemplazado» ya no se usan en los prototipos: valen las cifras oficiales de arriba.

| Dato | Valor publicado | Dónde | Base / nota | Estado |
|---|---|---|---|---|
| Locales | **+50** / "más de cincuenta" | Hero, tarjetas, FAQ 16, footer | Sin fecha de corte | (!) Inconsistente con 55 |
| Locales | **más de 55** | Blog (2 artículos, 5-jun-2026) y título del artículo | Sin fecha de corte | (!) Inconsistente con +50 |
| Socios franquiciados | **+40** | Tarjetas | — | Sin base |
| Regiones con locales | **11** (XV a XII) | Imagen del mapa | — | Contado de la imagen |
| Inversión total | **desde $40.000.000** | Hero, FAQ 1, blog | "Depende del formato y ubicación" | **Reemplazado:** inversión inicial total desde $43.000.000, que incluye el derecho de franquicia y el capital de trabajo |
| Derecho de franquicia | **$10.000.000 + IVA**, pago único al firmar | Blog «Cómo funciona…» (12-ago-2026) | — | **Reemplazado:** $10.000.000, incluido en la inversión inicial total |
| Royalty | **7 % de las ventas netas**, mensual | Blog | — | **Reemplazado (cambió):** 9 % de la venta neta |
| Fondo de marketing | **2 % de las ventas netas**, mensual | Blog | "Se destina íntegramente a campañas…" | Confirmado: 2 % de la venta neta |
| Total mensual al sistema | **9 %** de las ventas netas | Blog | 7 % + 2 % | **No usar** (total derivado) |
| Recupero de la inversión | **"en un plazo de 2 años"** / "~2 años" | Tarjeta "Buena inversión", blog | Sin base, periodo ni muestra | **Reemplazado:** payback de 2,6 años, con el supuesto del local tipo Módulo |
| EBITDA | **15 %** / "ronda el 15 %" | Tarjeta, blog | Sin base; el blog lo llama "margen operacional (EBITDA)" | **Reemplazado:** resultado operacional de 12 %, con el supuesto del local tipo Módulo |
| Duración del contrato | **20 años** | FAQ 14, blog | — | **Reemplazado (cambió):** 5 años, renovable por 4 periodos |
| Plazo de apertura | **2 a 4 meses desde la firma** | FAQ 6, blog | "Según disponibilidad del local y habilitación" | **Reemplazado (cambió):** 3 a 6 meses desde la firma |
| Equipo para operar | **2 full time (lun–vie) + 2 part time (fin de semana)** | Blog | "En términos generales" | La FAQ 10 solo dice "equipos pequeños" |
| KAM | **1 consultor por máximo 10 franquiciados** | Blog (2 artículos) | — | OK, no está en la landing |
| Experiencia en gastronomía | **No se requiere** | FAQ 3 | — | OK |
| Operar o con administrador | **Ambos** | FAQ 4, blog | Recomiendan seguir los indicadores | OK |
| Canales de venta | Presencial + delivery | FAQ 11 | — | OK |
| "Miles de clientes" | — | ¿Por qué franquiciar? | Vago | Evitar o cuantificar |
| "Cerca del 50 % de los negocios nuevos no supera los tres años" | — | Blog «¿Por qué ser franquiciado…?» | **Sin fuente citada** | No usar sin fuente |

## 4. Testimonios reales
| Persona | Local | Cita (textual) | Foto en el sitio actual |
|---|---|---|---|
| **Jonathan** | Franquiciado de Boulevard Marina | "Ser parte de la red de franquicias de Buffalo Waffles ha significado trabajar junto a una marca que entrega confianza, cercanía y un verdadero acompañamiento en cada etapa. Más que una franquicia, hemos encontrado un espacio donde nuestros objetivos pueden crecer con respaldo, apoyo humano y una visión compartida de éxito." | https://buffalofranquicias.com/hubfs/Jonathan-1.png |
| **Eduardo y Alex** | Franquiciados de Mallplaza Iquique (Región de Tarapacá) | "Gracias a nuestra pasión, la dedicación de todo nuestro equipo y una marca excepcional como Buffalo Waffles hemos conseguido instalar un negocio exitoso que ha conectado con las personas de Iquique y esperamos dejar huellas en la región de Tarapacá." | https://buffalofranquicias.com/hubfs/alexyeduardo.png |

Faltan en ambos: años en la red, ciudad de Boulevard Marina y un dato de negocio. En el DOM hay además **3 testimonios de plantilla ocultos** ("This is my testimonial about FreshLearn which is a LMS Product" · "Manisha, Founder"): eliminar.

Otras imágenes de personas en el sitio (no descargadas): `founders.png` (sección "¿Por qué franquiciar?"), `thomas.png` (sección "Esto no es para todos"), "Operando un Buffalo Waffles" (`20240829_152946.jpg`, 4000×3000). Confirmar con el cliente quiénes son y si se pueden usar.

## 5. Las 17 preguntas frecuentes (texto completo)
Orden y numeración del sitio actual. Entre corchetes, la categoría propuesta en el componente FAQ.

1. **¿Cuánto cuesta abrir una franquicia de Buffalo Waffles?** [Inversión] — La inversión total depende del formato y ubicación del local, pero generalmente parte desde los $40 millones de pesos. Este monto considera la habilitación del local, equipamiento, capacitación y otros elementos necesarios para comenzar a operar.
2. **¿Qué incluye la inversión?** [Inversión] — La inversión considera el derecho de franquicia, capacitación inicial, apoyo en la apertura, manuales operativos, acompañamiento comercial y acceso a proveedores homologados. El detalle específico se entrega durante el proceso de evaluación.
3. **¿Necesito experiencia en gastronomía para ser franquiciado?** [Operación] — No. Muchos de nuestros franquiciados provienen de rubros completamente distintos. Lo más importante es tener compromiso con la operación, capacidad de gestión y ganas de hacer crecer el negocio.
4. **¿Puedo tener la franquicia como inversión y contratar a un administrador?** [Inversión] — Sí. Existen franquiciados que participan activamente en la operación y otros que administran el negocio a través de un encargado. En ambos casos, recomendamos involucrarse en el seguimiento de los indicadores del local.
5. **¿Cuál es el proceso para convertirme en franquiciado?** [Proceso] — 1. Completar el formulario de interés. 2. Participar en una reunión de presentación de la franquicia. 3. Evaluación del perfil y capacidad de inversión. 4. Búsqueda y aprobación del local. 5. Firma de contratos. 6. Capacitación y habilitación. 7. Apertura del local.
6. **¿Cuánto tiempo demora abrir una franquicia?** [Proceso] — Dependiendo de la disponibilidad del local y los tiempos de habilitación, el proceso suele tardar entre 2 y 4 meses desde la firma hasta la apertura.
7. **¿Puedo abrir una franquicia en cualquier ciudad de Chile?** [Proceso] — Buscamos crecer en distintas regiones del país. Evaluamos cada caso según el potencial comercial de la zona, la cobertura actual de la marca y la disponibilidad territorial.
8. **¿Me ayudan a encontrar un local?** [Proceso] — Sí. Nuestro equipo acompaña a los franquiciados en la búsqueda, evaluación y negociación de ubicaciones que cumplan con los estándares de la marca.
9. **¿Qué apoyo entrega Buffalo Waffles?** [Operación] — Acompañamos a nuestros franquiciados antes, durante y después de la apertura. Esto incluye capacitación, soporte operacional, marketing, asesoría comercial, desarrollo de productos y seguimiento permanente del negocio.
10. **¿Cuántas personas necesito para operar un local?** [Operación] — Depende del formato y volumen de ventas, pero normalmente un local opera con equipos pequeños, lo que facilita la gestión y el control de costos. *(Se puede precisar con el dato del blog: 2 full time + 2 part time.)*
11. **¿Cómo se generan las ventas?** [Operación] — Las ventas provienen tanto de clientes presenciales como de plataformas de delivery, permitiendo diversificar los ingresos y aprovechar distintos momentos de consumo.
12. **¿La marca realiza acciones de marketing?** [Operación] — Sí. Buffalo Waffles desarrolla campañas de marketing digital, promociones y acciones de posicionamiento de marca que benefician a toda la red de franquicias. *(Se puede precisar: fondo de marketing de 2 % de las ventas netas.)*
13. **¿Qué requisitos debo cumplir para postular?** [Proceso] — Buscamos personas con capacidad de inversión, compromiso con la marca, orientación comercial y disposición para seguir los estándares operativos establecidos.
14. **¿Cuánto dura el contrato de franquicia?** [Contrato] — El contrato de franquicia otorga al franquiciado el derecho a usufructuar la marca y operar bajo el modelo Buffalo Waffles por un período de 20 años. Esto entrega estabilidad y una visión de largo plazo para desarrollar y hacer crecer el negocio junto a la marca.
15. **¿Puedo abrir más de una franquicia?** [Inversión] — Sí. Varios de nuestros franquiciados han continuado creciendo junto a la marca incorporando nuevos locales una vez consolidada su primera operación.
16. **¿Qué hace diferente a Buffalo Waffles?** [Contrato y marca] — No somos una franquicia tradicional. Buffalo Waffles es una marca chilena, cercana y dinámica que ha desafiado las reglas de la comida rápida con una propuesta innovadora y una identidad propia. Contamos con más de 50 locales operando a lo largo de Chile, un modelo de negocio probado y un equipo que acompaña a los franquiciados en cada etapa del camino. Más que una franquicia, buscamos construir una comunidad de emprendedores que crecen junto a la marca.
17. **¿Cómo puedo obtener más información?** [Proceso] — Completa el formulario de contacto y uno de nuestros ejecutivos te ayudará a evaluar si Buffalo Waffles es la oportunidad adecuada para ti.

## 6. Formulario actual (HubSpot)
| Campo | Obligatorio | Opciones |
|---|---|---|
| Nombre | Sí | — |
| Apellidos | Sí (A1: pasarlo a opcional) | — |
| Correo | Sí | — |
| Número de teléfono | Sí | Selector de país (+56) |
| Ciudad | Sí | — |
| Comuna | No | — |
| ¿En cuánto tiempo te gustaría invertir? | No | Menos de 6 meses · 6 meses a un año · Mayor a un año · No lo sé |
| ¿Con cuánto capital cuentas para invertir? | No | No lo sé · Menos de 25 MM · Entre 25 y 35 MM · Entre 35 y 50 MM · Más de 50 MM (!) |
| Déjanos un mensaje con más información | No | — |

Propiedades internas: `firstname`, `lastname`, `email`, `phone`, `city`, `comuna`, `en_cuanto_tiempo_te_gustaria_invertir_`, `con_cuanto_capital_cuentas_para_invertir_`, `mensaje_adicional`. (!) El *value* interno de "Entre 25 y 35 MM" es "Entre 25 y 25 MM" (error de carga en HubSpot). No hay casilla de consentimiento de datos personales.

## 7. Links reales
| Destino | URL |
|---|---|
| Agendador Pipedrive ("Reunión inicial Buffalo Waffles") | https://buffalowaffles.pipedrive.com/scheduler/57xeMet7/reunion-inicial-buffalo-waffles |
| WhatsApp (bot vía patg.ai, con mensaje prellenado) | https://patg.ai/api/v1/r/agt_01K7JJSCPT8K81DBA2J18KE126?text=Hola+quiero+mas+informaci%C3%B3n+sobre+sus+franquicias+Buffalo+Waffles&landing_url=https%3A%2F%2Fbuffalofranquicias.com%2Fes-cl%2F |
| Correo | mailto:franquicias@buffalowaffles.com |
| Teléfono ("Número oficial") | tel:+56933758164 |
| Instagram | https://www.instagram.com/buffalowaffles/ |
| Facebook | https://www.facebook.com/buffalowaffles |
| LinkedIn | https://www.linkedin.com/company/buffalo-waffles/ |
| X | https://x.com/BuffaloWaffles |
| Blog (índice) | https://buffalofranquicias.com/blog |

**Artículos del blog** (fecha de publicación en el artículo):
| Título | Fecha · autor · lectura | URL |
|---|---|---|
| Cómo funciona una franquicia de comida (y cómo opera Buffalo Waffles) explicado de forma simple | 12 ago 2026 · Francisca Bahamondes · 3 min | https://buffalofranquicias.com/blog/cmo-funciona-una-franquicia-de-comida-y-c%C3%B3mo-opera-buffalo-waffles-explicado-de-forma-simpleo |
| ¿Por qué ser franquiciado en lugar de emprender desde cero? La respuesta puede estar más cerca de lo que crees | 5 jun 2026 · Buffalo · 2 min | https://buffalofranquicias.com/blog/por-qu%C3%A9-ser-franquiciado-en-lugar-de-emprender-desde-cero-la-respuesta-puede-estar-m%C3%A1s-cerca-de-lo-que-crees |
| De emprendimiento a 55 locales: la historia de Buffalo Waffles, la franquicia chilena que conquistó Chile | 5 jun 2026 · Buffalo · 1 min | https://buffalofranquicias.com/blog/de-emprendimiento-a-55-locales-la-historia-de-buffalo-waffles-la-franquicia-chilena-que-conquist%C3%B3-chile |
| ¿Por qué Buffalo Waffles es una de las mejores franquicias gastronómicas para emprender en Chile? Una comparación honesta | 5 jun 2026 · Buffalo · 2 min | https://buffalofranquicias.com/blog/por-qu%C3%A9-buffalo-waffles-es-una-de-las-mejores-franquicias-gastron%C3%B3micas-para-emprender-en-chile-una-comparaci%C3%B3n-honesta |

Frases reutilizables del blog: «tú pones la inversión y la gestión diaria del local, y la marca pone el sistema, la reputación y el respaldo» · «No estás solo en ningún punto de este proceso» · «Una marca 100 % chilena… Eso no se importa: se construye con el tiempo y con trabajo» · «El KAM: más que un número de teléfono».

## 8. Diferenciales verificables (para "Por qué Buffalo")
Modelo probado con +50 locales · presencia en 11 regiones, de Arica a Punta Arenas · marca 100 % chilena con identidad propia · equipo chico (2 + 2) · venta presencial + delivery · KAM cada 10 franquiciados · apertura en 3 a 6 meses desde la firma · contrato de 5 años, renovable por 4 periodos · sin experiencia gastronómica previa · se puede operar o delegar · marketing de red financiado por el fondo del 2 % de la venta neta (cifras oficiales, octubre 2026).

## 9. Inconsistencias detectadas
1. **Locales: "+50" (hero, tarjetas, FAQ, footer) vs. "más de 55" (blog y título de artículo).** Unificar con fecha de corte (p. ej., "55 locales a septiembre de 2026").
2. ~~**¿Los $40M incluyen el derecho de franquicia?**~~ **Resuelto (5 oct 2026):** la inversión inicial total parte en $43.000.000 e incluye el derecho de franquicia ($10.000.000) y el capital de trabajo ($3.000.000). (Antes, la FAQ 2 decía que "la inversión considera el derecho de franquicia" y el blog lo presentaba aparte.)
3. **Fechas del blog:** la home muestra "29 may ’26" para dos artículos que dicen "junio 5, 2026".
4. **Tramos de capital del formulario** casi todos bajo la inversión mínima (hoy, $43M oficial) y un *value* interno mal cargado.
5. **"Socios" y "franquiciados"** se usan como sinónimos; la meta description dice "mayor crecimiento en Chile" sin respaldo.
6. **4 etiquetas H1** (una en inglés: "Our Recent Blogs"), "Follow us on Facebook" que abre WhatsApp, testimonios de plantilla ocultos, 2 bloques de blog seguidos.
7. **El hero manda a WhatsApp** ("Hablemos") antes de cualquier argumento; el "Más información" de "¿Por qué franquiciar?" lleva al blog.
8. Ortografía: «¿Tienes preguntas sobre como empezar?» (falta tilde en "cómo"); slugs con errores ("cmo-funciona…", "…simpleo").

## 10. Lo que falta (no inventar; pedir al cliente)
- ~~Base del EBITDA y del recupero~~ **Resuelto (5 oct 2026):** resultado operacional 12 % y payback 2,6 años, «Resultado modelado en base a un escenario promedio de un local tipo Módulo.» (ver §3).
- **Desglose de la inversión por formato** (isla, local, food court…): m², rango de inversión, habilitación y equipamiento. (El capital de trabajo ya está: $3.000.000, incluido en la inversión inicial total.)
- **Capital propio mínimo / liquidez** exigida y si existe financiamiento.
- **Fotos de locales** (fachadas, interiores, equipo trabajando) y **de franquiciados** con su local; idealmente 3–5 testimonios en video de 30–60 s con años en la red y un dato de negocio.
- **Días u horas de capacitación** y roles/nombres del equipo de soporte.
- **Lista de locales con dirección** y **zonas disponibles** (para el mapa y sus estados).
- **Tiempo de respuesta** que se puede prometer al lead.
- **Dossier/brochure** descargable (lead magnet).
- **Razón social, RUT, política de privacidad** y texto de consentimiento (Ley 21.719).
- Prensa, premios o logos de centros comerciales que se puedan mostrar (sin inventar sellos).
