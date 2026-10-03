# Tendencias de web design 2026 (foco en color) — insumo para Buffalo Franquicias

- **Autor:** agente A2 (investigación de tendencias)
- **Fecha de investigación:** 2 de octubre de 2026
- **Alcance:** tendencias generales de diseño web, con prioridad en color, filtradas para el sitio de captación de franquiciados de Buffalo Waffles (https://buffalofranquicias.com/es-cl/).
- **Capturas:** `01-research/tendencias-capturas/` (16 imágenes, nombradas por sitio).

## Cómo leer este documento

- **[Obs]** = observado directamente: estilos computados y variables CSS leídos con el navegador el 2-oct-2026, o datos tal como los publica la fuente (por ejemplo, la ficha de Awwwards).
- **[Fuente]** = afirmación de un reporte o documentación de terceros, citada con URL en la sección 7.
- **[Int]** = interpretación o recomendación mía. No es un hecho.
- Los hex de los sitios se sacaron de `getComputedStyle` y de las custom properties de `:root`, con un script que pondera el color de fondo por área y el color de texto por cantidad de caracteres (detalle en la sección 7.4). Cuando el sitio declara variables (`--red`, `--mustard`, etc.) se citan con su nombre real.
- Las cifras de performance son **indicativas**: vienen de un solo navegador de escritorio sin throttling y son una **cota inferior**, porque los recursos cross-origin sin `Timing-Allow-Origin` no se cuentan. No son datos de campo (CrUX). El intento de usar la API de PageSpeed Insights falló por cuota.

---

## 1. Resumen ejecutivo: 10 tendencias clave

1. **El "blanco" de 2026 es cálido.** [Obs] 11 de los 15 sitios de referencia usan un off-white cálido o crema (#F5E3CD, #FBF5E7, #FFF6EB, #F4F4ED, #F7F7EE…) en vez de #FFFFFF. Los 4 que usan blanco puro o grises fríos son fintech o infraestructura: Moto, Terminal, Cerebrium y Klarna. [Fuente] El Color del Año 2026 de Pantone es un blanco, PANTONE 11-4201 Cloud Dancer. [Int] El crema #F6E7C6 de Buffalo ya está en esta onda.
2. **Casi-negros, no #000.** [Obs] 13 de 15 evitan el #000 puro como negro principal. En 9 de ellos el casi-negro tiene matiz: marrón (#100B06, #291210), verde (#282C20, #052424, #2C2E2A), oliva (#292919), navy (#101421, #181B48) o violeta (#0B051D). [Int] El ink #191410 de Buffalo, un marrón casi negro, calza con esto.
3. **Color en sistema, no un acento suelto.** [Fuente] Webflow llama a esto "Explosion of color": pasar de un acento único a sistemas completos de color. [Obs] Las marcas de comida asignan un color a cada producto o sabor (Bucks Sauce: 4 colores de sabor; Partake: 5 pares claro/oscuro). Las B2B y fintech se quedan con neutros más un único acento ácido o saturado (lima #D2FF00, #ABFF02; rosa #FF488B).
4. **Color plano. Los gradientes casi desaparecen.** [Obs] Solo 2 de los 13 sitios medidos usan gradientes decorativos (Sunbeam con un "amanecer" rojo→naranja→lila; Cerebrium con rosa→magenta en palabras clave, interpolado `in oklab`). El resto usa bloques planos y, a lo más, glows radiales sutiles.
5. **Display gigante condensado, grotesk neutra y mono como "etiqueta".** [Obs] Los H1 llegan a 432 px (Crav), 216 px (Don Molinico) y 140 px (MindMarket). 5 de 6 marcas de comida usan display pesada en mayúsculas, al menos 4 de ellas condensadas. 5 de 15 sitios usan una monoespaciada para etiquetas o datos. La script aparece solo como acento puntual.
6. **Lo hecho a mano funciona como señal de confianza (anti-IA).** [Fuente] NN/g (abril 2026): ante la fatiga de IA, lo hecho a mano se lee como señal de confianza. Adobe y Webflow apuntan en la misma dirección. [Obs] Aparecen mascotas y personajes (ciervo de Bucks, hamburguesa con ojos de Crav, personajes Rive de MindMarket), stickers y badges.
7. **B2B con personalidad sin perder credibilidad.** [Obs] MindMarket (investigación de mercado B2B, Site of the Month dic-2025) combina ilustración plana, verde y amarillo, "Pricing" en el nav y un CTA "Get a quote" fijo. Klarna pone una barra de cifras bajo el hero (4.5 Trustpilot, 20 años, 120m usuarios, 1.2m+ comercios). [Fuente] Webflow propone la "TL;DR experience": resúmenes tipo pitch deck pensados para B2B.
8. **Motion nativo y con propósito.** [Fuente] Las scroll-driven animations en CSS ya funcionan en Chromium y Safari 26, y forman parte de Interop 2026. Las view transitions same-document llegaron a todos los motores con Firefox 144. [Fuente] NN/g advierte que animar el texto al hacer scroll retrasa al usuario, sobre todo en sitios financieros o B2B.
9. **El 3D/WebGL gana premios, pero tiene un costo.** [Obs] 9 de los 13 sitios medidos usan `<canvas>`. Lando Norris (Site of the Year 2025) tiene 20 canvas y su evento `load` llegó a 13 s en nuestro entorno. La Revoltosa mostró una pantalla roja plana por más de 15 s. MindMarket logra personalidad con ilustración animada liviana: ~755 KB y `load` en 1,2 s.
10. **La accesibilidad pasa a ser requisito y no siempre se cumple.** [Obs] 7 de 13 sitios medidos no tienen ninguna regla `prefers-reduced-motion` en su CSS. [Fuente] `contrast-color()` ya está en Safari 26 y en Interop 2026. [Int] Para Buffalo la regla clave: el Fire Yellow #F5B60E sobre blanco da **1,81:1**, así que no sirve ni como texto ni como borde de un componente. Se usa como **fondo con texto ink** (10,08:1).

**Hallazgo de color más útil para Buffalo** [Fuente + Int]: los Key Colours S/S 26 de WGSN × Coloro incluyen **Transformative Teal** (Color del Año 2026, Coloro 092-37-14), **Electric Fuchsia** y **Amber Haze**. Son exactamente las familias del teal de apoyo #1F6E6A, el Magenta #E74691 y el Fire Yellow #F5B60E. La paleta oficial ya está alineada con el pronóstico. El trabajo está en las proporciones y el contraste, no en cambiar colores.

---

## 2. Sitios de referencia

Criterio de selección: premiados o curados entre 2025 y 2026, con mezcla de comida, bebida y consumo con personalidad fuerte, y de B2B, fintech e inversión que transmiten confianza de forma moderna. La paleta indicada es la **observada** con el navegador. Cuando coincide con la ficha de Awwwards se indica "(=Awwwards)".

| # | Sitio | URL | Fuente / premio | Categoría | Paleta observada (hex) | Por qué es referente |
|---|---|---|---|---|---|---|
| 1 | Crav Burgers | https://www.cravburgers.shop/ | Awwwards SOTD 13-jun-2026 (7,25) | Comida / QSR | #F5E3CD crema, #F91814 rojo (=Awwwards), #FFD750 mostaza, #F4A804 mostaza oscura, #1B1B1B | El producto se vuelve personaje (hamburguesa con ojos dibujados). Stickers, H1 de 432 px. Paleta análoga a Buffalo |
| 2 | Bucks Sauce | https://buckssauce.com/ | Awwwards SOTD 3-jul-2026 (7,34) + E-commerce Honors jun-2026 | Comida / salsas | #100B06, #F5E4C7 (=Awwwards), #322C23, sabores #EF8F4A #BE8D3F #F15726 #DA1F27 | Mascota animal en badge circular, ink cálido + crema + kraft, color por sabor, link "Wholesale" (canal B2B) en el nav |
| 3 | La Revoltosa | https://larevoltosa.es/ | Awwwards SOTD 21-may-2026 (7,45) | Bebidas | #FE3E29, #F4F2EA (=Awwwards), #1A1A1A | Marca con 70 años y voz en primera persona. Bloques rojos planos. Advierte del costo del WebGL |
| 4 | Don Molinico | https://www.donmolinico.es/ | Awwwards SOTD 25-abr-2026 (7,35) | Comida / conservas | `--c-bg` #FBF5E7, `--c-accent` #D70321 (=Awwwards), `--c-secondary` #CBA058, `--c-accent-dark` #9F0005, #FFB82E | "Desde 1987 · Nueva tradición": herencia con frescura. Foto cenital de mesa compartida |
| 5 | Sunbeam Bagels & Coffee | https://sunbeambagels.com/ | Awwwards Honorable Mention 23-jul-2026 | Cafetería local | `--tan` #FCE9D5, `--red` #EE3629, `--yellow` #FFA344, `--lilac` #C3ABC6, #000, #FFF | Mezcla display + mono + script. Nav flotante abajo en móvil. Easter eggs que no bloquean |
| 6 | Partake Foods | https://partakefoods.com/ | Awwwards HM 15-ago-2026 (promedio de votos de la comunidad: 8,11) | Comida / galletas | Base #FFF6EB. Pares #82D8E7/#00559B, #EAACD2/#BE008B, #FFEBC1/#FFB600, #FFCD78/#FF7700, #C2E5E2/#40BCB5. Ink #181B48 | Sistema de **pares tinte/tono por color**. Magenta y amarillo conviven. Botones "táctiles" |
| 7 | Lando Norris | https://landonorris.com/ | Awwwards **Site of the Year 2025** + Users' Choice; SOTD 17-nov-2025 (8,18) | Marca personal / deporte | `--color--lime` #D2FF00, `--color--white` #F4F4ED, `--color--dark-green` #282C20, `--color--black` #111112, `--color--orange` #FF6B00 | Un solo acento ácido usado con disciplina sobre neutros con matiz verde. Benchmark de WebGL (y de su peso) |
| 8 | MindMarket | https://mindmarket.com/ | Awwwards SOTD 29-dic-2025 (7,85); Site of the Month dic-2025 | **B2B** / investigación | #8ED462 verde, #F5E211 amarillo (=Awwwards), #F5F1E4 crema, #2C2E2A ink, #FF705D, #2BA0FF | El mejor análogo de "credibilidad + personalidad": ilustración Rive, CTA fijo, Pricing en el nav |
| 9 | Moto Finance | https://www.moto-card.com/ | Awwwards SOTD 24-sep-2026 (7,3) | **Fintech** premium | `--_colors---dark` #080808, `--_colors---light` #E1E5E5, grises #1C2227…#838A8F | Confianza por contención: monocromo, una sola tipografía, tarjeta 3D en pedestal |
| 10 | Terminal Industries | https://terminal-industries.com/ | Awwwards SOTD 3-sep-2025 (7,68); SOTM sep-2025 | **B2B** / logística | `--c-dark-green` #052424, `--c-lime` #ABFF02, `--c-orange` #FB6B3C, #FFFFFF, #EDEDED | Jerarquía de 3 CTAs por color en el nav. Mono UC para etiquetas |
| 11 | Shopify Editions Winter '26 | https://www.shopify.com/editions/winter2026 | Awwwards SOTD 9-feb-2026 (7,92); SOTM feb-2026 | **B2B** / plataforma | #F7F7EE pergamino, #DCDCD0, #292919 (=Awwwards), #909083, #5C5C4E | Arte clásico más UI ("art converging with UI"). Neutro cálido como lienzo editorial |
| 12 | Cerebrium | https://cerebrium.ai/ | Awwwards SOTD 10-sep-2026 (7,39) | **B2B** / infra IA | #172B76 navy (=Awwwards), #101421, #FF488B / #F6186A, gradiente #FF488B→#E33ADB, #EEF2F5 | Magenta como único acento en un contexto de confianza. Franja de logos de clientes bajo el hero |
| 13 | Gumroad | https://gumroad.com/ | Curado en Lapa Ninja (fecha de la ficha no verificada) | Plataforma / creadores | Light: #F4F4F0, #000, #FF90E8 rosa, #FFC900 amarillo, #F1F333, #DC341E. Tiene modo oscuro | **Rosa + amarillo + negro** neobrutalista, donde el negro hace de mediador |
| 14 | Klarna (US) | https://www.klarna.com/us/ | Referencia de industria (sin premio o curaduría 2025–26 verificada) | **Fintech** | #FFFFFF, #0B051D ink violeta, #FFA8CD rosa (CTA con texto ink), #EFECFF | Rosa pastel en fintech sin perder confianza. Prueba social en cifras justo bajo el hero |
| 15 | Cleo | https://web.meetcleo.com/ | Curado en Lapa Ninja › Fintech (visto el 2-oct-2026) | **Fintech** / IA | #F8F6F2, #AC9B98, ink marrón #291210 / #47201C | Ink **marrón cálido** en fintech (≈ Buffalo #191410). Voz con humor |

**Otros revisados, no incluidos en la tabla:**
- Ponpon Mania: SOTD 22-oct-2025, cómic interactivo, ficha #7E7EFF / #F894C0.
- CIAO Energy: SOTD 30-jul-2026, 3D + sonido, #EEEEEE / #191917.
- Possible Finance: HM 28-ago-2025, #0577FF.
- Milledollars: SOTD 2-oct-2026, productora audiovisual.
- Dunkin' Franchising (Inspire Brands): benchmark de categoría, no premiado. Observado #231F20, #EF6A00, #C9252C, fuentes DunkinSans/DunkinSerif.

### 2.1 Fichas por sitio (paleta · tipografía · layout · motion · imagen · qué destaca)

**1. Crav Burgers** [Obs] (capturas `01-crav-burgers-scroll.jpg`, `17-crav-mobile-loader.jpg`)
- Tipografía: *Mouse Memoirs* (display condensada; el H1 "THE BURGER" mide 432 px) y *Modak* (letra "burbuja" para el logo y los stickers).
- Layout: hero tipográfico gigante con el producto recortado encima. Al hacer scroll aparecen palabras sueltas ("JUICY", "CHEESY", "FULLY") en distintos tamaños y tonos de rojo.
- Motion: GSAP. El `<title>` cambia ("Flipping", "Sizzling", "Grilling"). El loader tiene microcopy de marca ("Toasting the artisan bun…") y retrasa el contenido. 0 reglas `prefers-reduced-motion`.
- Imagen: hamburguesa real con ojos y líneas de movimiento dibujadas (producto convertido en mascota), stickers rotados ("Smashed fresh", "Bold flavor") y un CTA "Order now" con forma de blob.
- Destaca: la paleta crema + rojo + mostaza + negro es casi la de Buffalo (crema #F6E7C6, strawberry #E23A2B, Fire Yellow, ink).
- Perf (indicativa): 61 requests, ~5,8 MB transferidos (~5 MB en imágenes), LCP medido de 4,7 s, CLS 0.

**2. Bucks Sauce** [Obs] (`03-bucks-sauce-hero.jpg`)
- Tipografía: *PeperoncinoSans* (custom, condensada UC, H1 de 100 px) y *Inter Tight*.
- Layout: titular irreverente centrado ("The BBQ sauce that makes other sauces insecure"), slider de productos con flechas circulares y menú vertical. El nav incluye **Wholesale** y **Stores**.
- Motion: fruta en 3D (6 canvas) y stop-motion de la botella.
- Imagen: logo-badge con una mascota ciervo con gorro de chef y lentes.
- Color: cada sabor tiene su color de botón (#EF8F4A, #BE8D3F, #F15726, #DA1F27), siempre con texto crema #F5E4C7.
- Perf: 92 requests, ~2,3 MB transferidos, ~2,7 MB de JS decodificado, `load` en 7,7 s.

**3. La Revoltosa** [Obs]
- Tipografía: *Teko* UC (condensada), *GT America* y *Vulf Mono*.
- Voz: la bebida habla en primera persona ("I am La Revoltosa"). Navega con "Mis bebidas / Mi vida".
- Motion: WebGL / Three.js. En nuestro entorno se vio un rojo plano por más de 15 s. Tiene 1 regla `prefers-reduced-motion`. El banner de cookies trae "Rechazar" visible.
- Destaca: herencia contada con humor. Color plano a sangre.

**4. Don Molinico** [Obs] (`13-don-molinico-hero.jpg`)
- Tipografía: *super-med* UC (H1 de 216 px).
- Imagen: foto cenital de una mesa con varios platos, luz cálida, manos en cuadro y producto en contexto de consumo. El logo va en un bloque rojo tipo etiqueta.
- Color: crema, rojo y **dorado/kraft #CBA058**. Este último es casi idéntico al kraft de Buffalo (#C89A5E).

**5. Sunbeam Bagels & Coffee** [Obs] (`04-sunbeam-bagels-hero.jpg`, `16-sunbeam-mobile-bottom-nav.jpg`)
- Tipografía: *Belgard* (serif "chunky", H1 de 115 px), *forma-djr-mono* para el texto corrido, *Archivo Narrow* y *Tilda Petite* (script de acento).
- UX: barra de navegación flotante abajo con el gradiente "amanecer". En móvil queda en la zona del pulgar. Sonido opcional ("Listen for Mmms") y un easter egg ("Drop a Bagel. Or 20").
- Imagen: foto real del local, sin producción de estudio.

**6. Partake Foods** [Obs] (`12-partake-foods-hero-popup.jpg`)
- Tipografía: *Toroka Condensed/Black*, *Bunch Bold* y *Gilroy*.
- Color: variables `--custom-*` en **pares claro/oscuro por color**: el tono claro va de fondo y el oscuro de texto o borde. El magenta #BE008B y el amarillo #FFB600 conviven en el sistema sin tocarse como texto/fondo.
- UI: botones con sombra dura (efecto "táctil") y marquee "Delicious • Wholesome • Inclusive". Tiene 10 reglas `prefers-reduced-motion`, el mejor resultado de la muestra.
- Conversión: **pop-up de descuento al entrar**, que tapa el hero (antipatrón para el caso Buffalo).

**7. Lando Norris** [Obs] (`09-lando-norris-hero.jpg`)
- Tipografía: *Mona Sans Variable* y *Brier*.
- Color: la lima #D2FF00 aparece solo en el CTA "Store", en highlights y en un glow radial. Los neutros tienen matiz verde (#F4F4ED, #282C20).
- Motion: cabeza 3D y líneas topográficas, con 20–21 canvas. `load` en 13 s en nuestro entorno.

**8. MindMarket** [Obs] (`05-mindmarket-hero.jpg`, `06-mindmarket-scroll.jpg`)
- Tipografía: *Inter 500* (H1 "Real human insights" a 140 px).
- Layout: nav en píldora blanca fija con "Pricing", y el CTA "Get a quote" en una píldora aparte, siempre visible. El fondo pasa de verde a crema al hacer scroll.
- Ilustración: personajes planos diversos animados con Rive (14 canvas).
- Perf: ~755 KB y `load` en 1,2 s. Tiene 1 regla reduced-motion.
- Destaca: personalidad fuerte en un servicio B2B "serio".

**9. Moto Finance** [Obs] (`07-moto-finance-hero.jpg`)
- Tipografía: *Neue Montreal 500* como única familia. H1 "BUILT FOR MODERN WEALTH" a 64 px.
- Escena 3D: sala oscura con la tarjeta en un pedestal. "Apply for Access" se repite en el nav y en el hero.
- Perf: ~540 KB y `load` en 3,5 s.

**10. Terminal Industries** [Obs] (`08-terminal-industries-hero.jpg`)
- Tipografía: *SuisseIntl* y *Geist Mono* UC en etiquetas y botones.
- Nav flotante con teléfono y 3 CTAs jerarquizados por color: "Explore product" (lima), "Request demo" (blanco), "Contact us" (gris). Tiene 3 reglas reduced-motion.

**11. Shopify Editions Winter '26** [Obs] (`10-shopify-editions-w26-intro.jpg`)
- Tipografía: *NeueMontreal 700*, *HWCigars* e *Inter*. El logotipo mezcla una itálica en "Ren*ai*ssance".
- Color: pergamino y oliva-negro. Los gradientes se interpolan `in oklab`.

**12. Cerebrium** [Obs] (`11-cerebrium-scroll.jpg`)
- Tipografía: *ABC Favorit* (H1 de 86 px), *Suisse Intl* y *Suisse Intl Mono*.
- Color: el rosa-magenta se reserva para "Sign up", "Try it" y las palabras destacadas. Texto navy #172B76 sobre fondos gris-azulado.
- Prueba social: franja de logos de clientes inmediatamente después del hero.

**13. Gumroad** [Obs] (`14-gumroad-hero-light.jpg`)
- Tipografía: *ABC Favorit*.
- Estilo neobrutalista: bordes negros, monedas 3D rosas con la "G", CTA negro. Respeta `prefers-color-scheme`: en modo oscuro el CTA pasa a rosa #FF90E8 con texto negro.

**14. Klarna** [Obs] (`15-klarna-hero-stats.jpg`)
- Tipografía: *Klarna Title* y *Klarna Text* (propietarias).
- El CTA rosa #FFA8CD lleva texto ink #0B051D. Hay una barra de 4 cifras bajo el hero y un aviso anti-phishing arriba (confianza explícita).

**15. Cleo** [Obs]
- Tipografía: *PP Neue Montreal* y *Simplon Mono*.
- Color: ink marrón #47201C / #291210 sobre #F8F6F2. Copy con humor ("Money talks. Cleo talks back.").

### 2.2 Performance indicativa (cota inferior, un navegador de escritorio, 2-oct-2026)

| Sitio | Requests | Transferido | `load` | Canvas | Nota |
|---|---|---|---|---|---|
| MindMarket | 108 | ~755 KB | 1,2 s | 14 (Rive) | Personalidad con poco peso |
| Moto Finance | 40 | ~540 KB | 3,5 s | 3 | 1,6 MB de JS decodificado |
| Partake | 339 | ~2,9 MB | 1,4 s* | 0 | *mucho se carga después de `load`. ~4,8 MB de JS decodificado |
| Bucks Sauce | 92 | ~2,3 MB | 7,7 s | 6 | 3D |
| Crav Burgers | 61 | ~5,8 MB | 5,2 s | 0 | ~5 MB de imágenes. LCP de 4,7 s |
| Lando Norris | 21 visibles | n/d (cross-origin) | 13,0 s | 20 | WebGL intenso |
| La Revoltosa | — | — | >15 s en rojo plano | 1 | Loader WebGL |

[Fuente] Umbral "bueno" de Core Web Vitals en el percentil 75: LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 (web.dev). [Int] Varios ganadores de premios no cumplirían LCP en móvil. Un sitio para inversionistas no puede darse ese lujo.

---

## 3. Tendencias por dimensión

### 3.1 Color (prioritario)

**C1. Off-white cálido como base.**
- [Obs] 11 de 15 sitios: Crav, Bucks (su color claro), La Revoltosa, Don Molinico, Sunbeam, Partake, Lando, MindMarket, Shopify, Gumroad y Cleo. Usan blanco puro o grises fríos Moto, Terminal, Cerebrium y Klarna.
- [Fuente] Pantone eligió un blanco como Color del Año 2026 (11-4201 Cloud Dancer; hex aproximado #F0EEE9 según conversores de terceros, porque Pantone lo publica detrás de su paywall). Es la primera vez que elige un blanco (NPR, 4-dic-2025).
- [Int] El cálido se asocia con comida y artesanía. El frío, con tecnología y finanzas.

**C2. Casi-negros en vez de #000.**
- [Obs] 13 de 15 evitan el #000 puro como negro principal. Solo Sunbeam y Gumroad lo usan.
- [Obs] En 9 de esos 13 el casi-negro tiene matiz. Los otros 4 usan un casi-negro neutro: Crav #1B1B1B, La Revoltosa #1A1A1A, Don Molinico #222222 y Moto #080808.
- [Int] El ink #191410 de Buffalo es exactamente este recurso. Hay que usarlo en lugar del #000 para texto y fondos oscuros, y dejar el #000 para el logo y los contornos de sticker.

**C3. Saturados vs. neutros cálidos.**
- [Obs] El patrón dominante es neutro cálido (60–80 % de la superficie) más 1–2 acentos saturados en bloques.
- [Obs] Las marcas de comida extienden el acento a un sistema por producto (Bucks, Partake, Sunbeam).
- [Fuente] Figma ("Vibrant color palettes") y Envato ("Bold color and expressive palettes", "dopamine design") hablan del regreso de lo saturado. Adobe Express habla de "Immersive, High-Energy Style". Webflow: "Explosion of color".
- [Int] Lo saturado vuelve, pero siempre apoyado sobre crema o ink, nunca sobre blanco frío.

**C4. Modo oscuro.**
- [Obs] Los premiados usan lo oscuro como **dirección de arte fija** (Bucks, Moto, el hero de Cerebrium y secciones de Lando), no como toggle.
- [Obs] Al emular `prefers-color-scheme: dark`, de los sitios revisados solo Gumroad cambió su paleta.
- [Fuente] Figma lista el toggle light/dark como tendencia.
- [Int] Para Buffalo, una o dos secciones "de noche" valen más que un modo oscuro completo.

**C5. Bloques de color plano.**
- [Obs] Hay secciones a sangre de un solo color: el rojo de La Revoltosa y Don Molinico, el hero verde de MindMarket, el crema de Crav.
- [Obs] Las pantallas de carga son de color plano (Crav rojo, Don Molinico rojo, La Revoltosa rojo).

**C6. Gradientes.**
- [Obs] Solo 2 de los 13 sitios medidos los usan como decoración, y los dos son funcionales:
  - Sunbeam: un "amanecer" en la barra de navegación.
  - Cerebrium: realce de palabras clave.
- [Obs] Cuando aparecen, se interpolan en OKLab (`linear-gradient(in oklab, …)`: Shopify, Cerebrium), lo que evita los grises sucios a mitad de camino.
- [Fuente] Envato y Figma mencionan los "neon gradients".
- [Int] En la muestra curada de comida y B2B no dominan. Encaja mejor con Buffalo el color plano tipo serigrafía o sticker.

**C7. Contraste y accesibilidad.**
- [Obs] Los acentos claros (lima #D2FF00, rosa #FFA8CD / #FF90E8, amarillo #FFC900) **siempre llevan texto oscuro** (Lando, Klarna, Gumroad, Terminal).
- [Fuente] Safari 26 incorporó `contrast-color()`, que elige negro o blanco según el fondo, y la función está en Interop 2026.
- [Fuente] WCAG 2.2 pide 4,5:1 para texto normal, 3:1 para texto grande (≥ 24 px, o ≥ 18,66 px en negrita) y 3:1 para componentes de interfaz.

**C8. El color como sistema de navegación.**
- [Obs] Así se usa en la muestra:
  - Bucks: un color por sabor en los botones.
  - Partake: un par de color por sabor.
  - Terminal: CTAs jerarquizados por color.
  - MindMarket: el fondo cambia según la sección.
- [Fuente] Webflow: "Guided scrolling", con indicadores de progreso y señales visuales que muestran en qué parte del recorrido está el usuario.
- [Int] Sirve para un recorrido del tipo "tu camino a franquiciado" en el que cada etapa tiene su color.

**C9. Cómo se combinan amarillos y magentas hoy.**
- [Obs] Partake tiene amarillo #FFB600 y magenta #BE008B en el mismo sistema, separados por la base crema. Cada uno tiene su tinte claro y nunca se usan como texto uno sobre otro.
- [Obs] Gumroad combina rosa #FF90E8 y amarillo #FFC900 como rellenos planos con contorno y texto negros: el negro hace de mediador.
- [Obs] En fintech y B2B el magenta o rosa se usa como **único** acento (Cerebrium #FF488B, Klarna #FFA8CD) y con texto oscuro.
- [Fuente] WGSN × Coloro S/S 26 pone en la misma temporada Electric Fuchsia y Amber Haze. Para S/S 27 anuncia Pop Pink y Energy Orange.
- [Int] Reglas para Buffalo:
  - Amarillo y magenta **no** llevan texto uno sobre otro (2,04:1).
  - Un color domina y el otro acentúa.
  - Se separan con ink, crema o el borde blanco tipo sticker troquelado del logo.

**C10. Colores de pronóstico 2026–27.** [Fuente]
- Pantone 2026: Cloud Dancer.
- WGSN × Coloro, Color del Año 2026: Transformative Teal (092-37-14, aproximadamente #316064 según Encycolorpedia).
- S/S 26: Electric Fuchsia, Blue Aura, Amber Haze, Jelly Mint.
- A/W 26/27: Wax Paper (035-88-12), Fresh Purple (136-32-33), Cocoa Powder (008-35-06), Green Glow (057-82-32).
- S/S 27: Luminous Blue (Color del Año 2027, 125-28-38), Energy Orange (018-57-34), Pop Pink (151-73-22), Meadowland Green (050-61-19), Clay (014-60-13).
- [Int] Wax Paper y Cocoa Powder son el crema/kraft y el ink de Buffalo con otros nombres.

### 3.2 Tipografía

- **Display gigante.** [Obs] Tamaño del H1 computado: Crav 432 px, Don Molinico 216 px, MindMarket 140 px, Sunbeam 115 px, Bucks 100 px, Cerebrium 86 px, Klarna 84 px, Terminal 70 px, Moto 64 px. [Int] Las marcas de consumo usan 100–430 px. B2B y fintech, 64–140 px.
- **Display UC en comida.** [Obs] 5 de 6 marcas de comida usan display pesada en mayúsculas (Mouse Memoirs, PeperoncinoSans, Teko, Toroka Condensed, super-med). Al menos 4 de ellas son condensadas. [Int] Mostin (heavy, uppercase) está en el centro de la tendencia.
- **Grotesk neutra para texto.** [Obs] Inter / Inter Tight, GT America, Neue Montreal, Suisse, Mona Sans, ABC Favorit, Gilroy y Klarna Text: la grotesk es la tipografía de texto en 12 de 15. [Int] Montserrat cumple ese rol.
- **Mono como etiqueta o dato.** [Obs] Vulf Mono, forma-djr-mono, Geist Mono, Suisse Intl Mono, Simplon Mono (5 de 15), casi siempre en mayúsculas pequeñas para labels, precios, pasos y metadatos.
- **Mezclas con script.** [Obs] Sunbeam (Tilda Petite) usa la script como acento puntual. [Fuente] Adobe Express 2026 menciona "handwritten scripts, loopy cursives" y "exaggerated, playful letters". [Int] Teenage Dreams debe aparecer en 1–3 palabras por pantalla, nunca en párrafos ni en cifras.
- **Tipografía cinética.** [Fuente] Envato ("Kinetic and variable typography") y Webflow ("Dynamic text treatments"). [Obs] Crav hace aparecer palabras al hacer scroll. Cerebrium rota palabras en el hero ("Quickly / Scale / Globally"). [Fuente] NN/g (2017) encontró que el texto que se anima al hacer scroll frustra y retrasa, y recomienda evitarlo en sitios financieros o B2B orientados a tareas.
- **Serif vs. grotesk.** [Obs] La serif aparece como acento de carácter (Belgard en Sunbeam, la itálica de Shopify), no como texto. [Int] El brandbook no tiene serif y no hace falta agregarla.

### 3.3 Layout

- **TL;DR / estilo pitch deck.** [Fuente] Webflow 2026 recomienda resúmenes estructurados para B2B y consultoría: dar el panorama completo arriba y luego dejar profundizar. [Int] Es la tendencia más directamente aplicable a un sitio para inversionistas.
- **Bento grids.** [Obs] Lapa Ninja tiene una categoría "Bento Grid" con 75 entradas, señal de que es un patrón consolidado. Gumroad usa tarjetas modulares. [Int] Sirve para cifras, formatos de local y beneficios.
- **Scroll storytelling → guided scrolling.** [Fuente] Webflow plantea que en 2026 el scroll funciona como herramienta de navegación (progreso, pasos numerados), más que como narrativa sofisticada. [Fuente] NN/g (2023) sobre scrolljacking: desorienta. Se tolera solo si revela información progresivamente, es corto, no exige leer texto y se evita en móvil.
- **Navegación y secciones sticky.** [Obs] Se ven navs en píldora flotante (MindMarket, Terminal, Moto) y un nav inferior en móvil (Sunbeam). [Fuente] NN/g sobre sticky headers: pequeños, con fondo opaco (no translúcido), poca animación, y considerar headers que se esconden al bajar y reaparecen al subir.
- **Editorial, asimetría y collage.** [Fuente] Envato ("Organic layouts and breaking the grid"); Adobe Express ("Freeform and storytelling layouts", "Collage and layered visual elements", "Maximalist, chaotic layouts"). [Obs] Crav dispersa palabras y stickers. Bucks combina recortes de fruta con la botella.
- **Maximalismo vs. minimalismo.** [Obs] Conviven. Lo B2C se acerca a un maximalismo ordenado; lo fintech es minimalista (Moto). [Fuente] Webflow habla de "minimalismo en el copy": decir menos. [Fuente] NN/g (State of UX 2026): la interfaz de superficie se comoditiza y la diferenciación pasa a la estrategia.

### 3.4 Motion e interacción

- **Microinteracciones.** [Obs] Botones "táctiles" (Partake), botones de sabor (Bucks), easter eggs y sonido opcional (Sunbeam). [Fuente] Envato y Figma.
- **Scroll-driven animations en CSS nativo.** [Fuente] Safari 26.0 (15-sep-2025) agregó `animation-timeline: scroll()/view()`. Safari 26.4 las ejecuta en el compositor (fuera del hilo principal). Chromium las tiene desde Chrome 115. Son área de foco de Interop 2026. [Int] Usarlas como mejora progresiva con `@supports` y verificar el estado en Firefox antes de depender de ellas.
- **View transitions.** [Fuente] Firefox 144 (14-oct-2025) agregó las same-document, así que ya están en los tres motores. Las cross-document (entre páginas de un sitio multipágina) funcionan en Chromium y Safari pero aún no en Firefox estable, según fuentes secundarias, y están en Interop 2026. [Int] Si el sitio es multipágina, aplicarlas como mejora progresiva.
- **Cursores custom.** [Obs] No aparecieron como patrón en la muestra. [Int] Agregan poco en un sitio de conversión y no existen en táctil.
- **3D/WebGL.** [Obs] 9 de los 13 sitios medidos tienen canvas. Lo usan el Site of the Year 2025, Shopify, Moto y Bucks. [Obs] Costo visible: Lando con `load` en 13 s, La Revoltosa con más de 15 s de pantalla plana, Bucks en 7,7 s. [Int] El 3D es un recurso de premio, no de conversión.
- **Loaders de marca.** [Obs] Crav, La Revoltosa, Don Molinico y Cleo muestran pantalla de carga. [Int] Va en contra de LCP y de la paciencia del inversionista.
- **Sonido.** [Obs] Sunbeam y CIAO Energy, siempre opcional.

### 3.5 Ilustración, mascotas, stickers, texturas y estética hecha a mano

- **Lo hecho a mano como señal de confianza.** [Fuente] NN/g, "Handmade Designs: The New Trust Signal" (Megan Chan, 10-abr-2026): líneas de grosor variable, imperfección y textura visible se leen como esfuerzo humano. Incluso empresas de IA adoptan colores cálidos e ilustración. NN/g recomienda probarlo por partes y acompañarlo con copy humano. [Fuente] Webflow: "Art converging with advanced UI". [Fuente] Adobe: "Organic and imperfect design" y la tendencia "All the Feels" (táctil, sensorial).
- **Mascotas y personajes.** [Obs] Ciervo en badge (Bucks), producto con ojos (Crav), personajes animados con Rive (MindMarket), la oveja de Ponpon Mania, la bebida que habla en primera persona (La Revoltosa). [Int] El búfalo alado de Buffalo es un activo competitivo de primer nivel para 2026.
- **Stickers y badges.** [Obs] Stickers rotados (Crav), logo-badge circular (Bucks), logo en bloque-etiqueta (Don Molinico).
- **Texturas.** [Obs] Líneas topográficas (Lando) y texturas reales en la fotografía (terrazo y cerámica en Don Molinico). [Int] La textura kraft de Buffalo puede ir en SVG o CSS liviano (ruido o grano) en lugar de JPG de fondo.
- **Collage foto + dibujo.** [Obs] Crav: foto real con trazos dibujados. [Fuente] Adobe Express: "Collage and layered visual elements".
- **Fotografía.** [Obs] Se ve foto real o documental (el local de Sunbeam, la mesa de Don Molinico) y producto recortado (Crav, Bucks). [Fuente] Adobe: "Local Flavor", con representación local y fotografía cándida.

### 3.6 Conversión moderna

- **CTAs persistentes.** [Obs]
  - MindMarket: CTA en píldora fija ("Get a quote").
  - Terminal: 3 CTAs fijos jerarquizados.
  - Moto: el CTA "Apply for Access" se repite.
  - Sunbeam: nav inferior en móvil.
- **Formularios.**
  - [Fuente] NN/g sobre wizards: sirven para procesos infrecuentes. Piden mostrar el progreso, botones con verbos claros, guardar avance y pasos autosuficientes.
  - [Fuente] NN/g sobre chatbots: los usuarios los usan como un buscador y no conversan.
  - [Int] Para un lead de franquicia conviene un formulario por pasos y no un chatbot-formulario.
- **Prueba social integrada.** [Obs] Barra de cifras bajo el hero (Klarna), franja de logos (Cerebrium), "Stores / Find in store" (Bucks, Partake).
- **Transparencia.** [Obs] MindMarket tiene "Pricing" en el nav. [Int] Para franquicias: rango de inversión, plazo de retorno estimado y requisitos, visibles desde el inicio.
- **Pop-ups al entrar.** [Obs] Partake abre un modal de descuento que tapa el hero. [Int] No aplica a un inversionista.
- [Fuente] Framer, *State of Sites 2026* (mayo 2026, 1.900+ profesionales): el 71 % dice que la conversión es su KPI principal.

### 3.7 Accesibilidad, performance y `prefers-reduced-motion`

- [Obs] 7 de 13 sitios medidos no tienen reglas `prefers-reduced-motion` en su CSS (Crav, Bucks, Sunbeam, Moto, Lando, Shopify, Don Molinico). Puede que algunos lo resuelvan en JS, pero no se ve en el CSS.
- [Fuente] WCAG 2.2: 2.2.2 *Pause, Stop, Hide* (nivel A) exige poder pausar lo que se mueva solo por más de 5 s, como un marquee. 2.3.3 *Animation from Interactions* (AAA) pide poder desactivar el movimiento que dispara la interacción.
- [Fuente] Core Web Vitals: LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 en el percentil 75.
- [Obs] Los banners de cookies con "Rechazar" visible ya son la norma en los sitios europeos de la muestra (La Revoltosa, Don Molinico, MindMarket, Cerebrium).
- [Fuente secundaria, fuera de alcance] En Chile, la Ley 21.719 de protección de datos personales entra en vigencia el 1-dic-2026 (publicada el 13-dic-2024). Afecta al formulario de leads y al consentimiento; conviene que lo valide quien vea lo legal.

---

## 4. Análisis de color en profundidad

### 4.1 Paletas tendencia 2026 en hex (observadas en sitios premiados)

| Arquetipo | Ejemplo | Hex | Lectura [Int] |
|---|---|---|---|
| Crema + rojo + mostaza (QSR pop) | Crav | #F5E3CD · #F91814 · #FFD750 · #F4A804 · #1B1B1B | Apetito y energía. Casi la paleta Buffalo |
| Ink cálido + crema + kraft (craft nocturno) | Bucks | #100B06 · #F5E4C7 · #322C23 · #BE8D3F (+ #EF8F4A #F15726 #DA1F27) | Premium artesanal, "pequeño lote" |
| Herencia moderna | Don Molinico | #FBF5E7 · #D70321 · #CBA058 · #9F0005 · #FFB82E | Tradición confiable con frescura |
| Pares tinte/tono | Partake | #FFF6EB + (#FFEBC1/#FFB600) (#EAACD2/#BE008B) (#82D8E7/#00559B) | Sistema escalable y accesible por construcción |
| Neutro con matiz + acento ácido | Lando / Terminal | #F4F4ED · #282C20 · #D2FF00 / #052424 · #ABFF02 | Alto rendimiento, tech |
| Neobrutal pop | Gumroad | #F4F4F0 · #000 · #FF90E8 · #FFC900 | Irreverente, de creador |
| Monocromo premium | Moto | #080808 · #E1E5E5 · #666F76 | Lujo y discreción |
| Pergamino editorial | Shopify W26 | #F7F7EE · #DCDCD0 · #292919 | Autoridad cultural |
| Fintech cálida | Cleo / Klarna | #F8F6F2 · #47201C / #FFFFFF · #0B051D · #FFA8CD | Confianza con calidez |
| Pronóstico [Fuente] | Pantone / WGSN | Cloud Dancer ≈ #F0EEE9 · Transformative Teal ≈ #316064 | Blanco cálido + verde azulado |

**Observaciones transversales** [Obs]:
1. El "blanco" es crema (11 de 15).
2. El "negro" no es #000 (13 de 15) y en 9 casos tiene matiz.
3. El acento saturado ocupa poca superficie pero se ve mucho (CTA, highlights, stickers).
4. Los acentos claros siempre llevan texto oscuro.
5. Casi no hay gradientes decorativos.

### 4.2 Contraste de la paleta oficial de Buffalo (WCAG 2.x, calculado)

| Par (texto / fondo, o viceversa) | Ratio | Texto normal AA (4,5) | Texto grande / UI (3,0) |
|---|---|---|---|
| Blanco / Negro | 21,00 | Sí | Sí |
| Blanco / Ink #191410 | 18,28 | Sí | Sí |
| Negro / Cream #F6E7C6 | 17,16 | Sí | Sí |
| Ink / Cream | **14,94** | Sí | Sí |
| Negro / Fire Yellow #F5B60E | 11,58 | Sí | Sí |
| **Ink / Fire Yellow** | **10,08** | Sí | Sí |
| Negro / Kraft #C89A5E | 8,24 | Sí | Sí |
| Ink / Kraft | 7,17 | Sí | Sí |
| Blanco / Teal #1F6E6A | 6,01 | Sí | Sí |
| Negro / Magenta #E74691 | 5,68 | Sí | Sí |
| **Ink / Magenta** | **4,95** | Sí | Sí |
| Cream / Teal | 4,91 | Sí | Sí |
| Negro / Strawberry #E23A2B | 4,87 | Sí | Sí |
| Blanco / Strawberry | 4,31 | **No** | Sí |
| Ink / Strawberry | 4,24 | **No** | Sí |
| **Blanco / Magenta** | **3,70** | **No** | Sí (solo ≥ 24 px, o ≥ 18,66 px en negrita) |
| Cream / Strawberry | 3,52 | No | Sí |
| Negro / Teal | 3,50 | No | Sí |
| Fire Yellow / Teal | 3,31 | No | Sí |
| Ink / Teal | 3,04 | No | Sí (al límite) |
| Magenta / Cream | 3,02 | No | Sí (al límite) |
| Blanco / Kraft | 2,55 | No | **No** |
| Fire Yellow / Strawberry | 2,38 | No | No |
| Cream / Kraft | 2,08 | No | No |
| **Fire Yellow / Magenta** | **2,04** | No | **No** |
| **Fire Yellow / Blanco** | **1,81** | **No** | **No** (tampoco sirve para bordes o íconos) |
| Fire Yellow / Cream | 1,48 | No | No |

**Tokens derivados accesibles** [Int, calculados manteniendo tono y saturación y bajando la luminosidad]:

| Token propuesto | Hex | Uso | Ratio |
|---|---|---|---|
| `magenta-700` | **#C71A6A** | Links y texto magenta sobre blanco o crema | 5,55 (blanco) · 4,54 (crema) |
| `magenta-btn` | #E01D78 | Fondo de botón con texto blanco a 16 px | 4,55 (blanco), al límite. Mejor usar texto ink sobre #E74691 (4,95) |
| `yellow-ink` | #866306 | Texto "amarillo" sobre blanco o crema (para tags) | 5,52 · 4,52 |
| `kraft-700` | #88612E | Texto kraft sobre blanco o crema | 5,53 · 4,52 |
| `strawberry-700` | #C6291B | Error o alerta sobre blanco o crema | 5,62 · 4,60 |

**Reglas de oro** [Int]:
- El Fire Yellow es **fondo**, nunca texto ni borde sobre claro. El botón primario es amarillo con texto ink (10,08).
- El anillo de foco no puede ser solo amarillo sobre claro (1,81 / 1,48). Usar ink o doble anillo ink + amarillo.
- El magenta lleva **texto ink o negro** (4,95 / 5,68). El texto blanco sobre magenta solo va en Mostin a ≥ 24 px o en negrita ≥ 18,66 px.
- Amarillo y magenta nunca llevan texto uno sobre otro. Si se tocan como bloques, se separan con ink, crema o el borde blanco del sticker.
- Teal sobre ink (3,04) es solo decorativo. El texto teal va sobre crema (4,91) o blanco (6,01).
- `contrast-color()` puede usarse como mejora progresiva, con fallback explícito.

### 4.3 Tres propuestas de expresión de la paleta oficial

> Las proporciones son de **superficie visible promedio por página**. Todos los pares de texto citados se verificaron en la tabla 4.2.

#### Propuesta 1: "Crema & Kraft" (base clara cálida, evolución fiel)
Referentes: Crav, Don Molinico, Sunbeam, Cleo.

| Color | % | Rol |
|---|---|---|
| Cream #F6E7C6 | 45 % | Fondo base de todas las secciones |
| Ink #191410 | 20 % | Texto, footer, bloque de cifras "Inversión" |
| Blanco #FFFFFF | 15 % | Tarjetas de datos, tablas, formulario (máxima legibilidad) |
| Fire Yellow #F5B60E | 10 % | CTA primario, highlights detrás de palabras, stickers |
| Magenta #E74691 | 5 % | Badges ("Nuevo", "Cupos 2027"), script Teenage Dreams en tamaño grande, subrayados |
| Kraft #C89A5E | 3 % | Textura de papel, separadores, íconos grandes |
| Strawberry / Teal | 2 % | Estados (error / éxito) y gráficos |

Pares clave:
- ink/cream 14,94
- ink sobre amarillo 10,08 (CTA)
- `magenta-700` #C71A6A sobre crema 4,54 (links)
- teal sobre crema 4,91 (texto de "soporte")
- ink sobre kraft 7,17

Evitar amarillo o magenta como texto normal sobre crema.

#### Propuesta 2: "Bloques de sabor" (color blocking por capítulo, color como navegación)
Referentes: Partake, Bucks, MindMarket, Webflow "Explosion of color" y "Guided scrolling".

| Capítulo (ejemplo) | Fondo | Texto | Ratio |
|---|---|---|---|
| Hero / Por qué Buffalo | Fire Yellow | Ink | 10,08 |
| La inversión en números | Ink | Cream (cifras en amarillo) | 14,94 / 10,08 |
| Formatos y proceso | Cream | Ink | 14,94 |
| Franquiciados que ya están | Magenta | Ink (o blanco solo en titulares ≥ 24 px) | 4,95 / 3,70 |
| Soporte y capacitación | Teal | Blanco o crema | 6,01 / 4,91 |
| Formulario | Blanco | Ink | 18,28 |

Proporción global: Ink 25 %, Cream 25 %, Fire Yellow 20 %, Magenta 12 %, Blanco 8 %, Teal 7 %, Kraft/Strawberry 3 %.

Color como navegación: el índice o barra de progreso sticky toma el color del capítulo activo (scroll-driven CSS con fallback estático). Cada capítulo tiene además un tinte claro de su color para tarjetas internas, al estilo Partake. Ejemplos: amarillo claro sobre crema para chips, magenta claro para quotes. Esos tintes deben definirse en el design system.

#### Propuesta 3: "Noche streetwear" (base ink, disruptiva)
Referentes: Bucks Sauce, Lando, Cerebrium, Moto.

| Color | % | Rol |
|---|---|---|
| Ink #191410 | 50 % | Fondo |
| Cream #F6E7C6 | 20 % | Texto principal e "islas claras" para datos |
| Fire Yellow | 15 % | CTA, cifras gigantes, highlights |
| Magenta | 8 % | Stickers, hover, palabras en script |
| Blanco | 4 % | Logo y contornos de sticker |
| Teal / Kraft | 3 % | Detalles, texturas |

Pares clave:
- cream/ink 14,94
- blanco/ink 18,28
- amarillo/ink 10,08
- magenta/ink 4,95 (pasa AA para texto normal, pero va al límite: mejor ≥ 18 px)

Teal sobre ink (3,04) es solo decorativo.

Riesgo [Int]: lo oscuro completo puede leerse como "vida nocturna" y no como "negocio". Para mitigarlo, poner las secciones de inversión y requisitos sobre cream o blanco y usar esta propuesta como una o dos secciones de alto impacto, no como todo el sitio.

---

## 5. Matriz "¿aplica a Buffalo Franquicias?"

| Tendencia | ¿Aplica? | Justificación [Int] |
|---|---|---|
| Off-white cálido como base | **Sí** | El crema #F6E7C6 ya es de la marca y está en la tendencia del momento (Cloud Dancer, 11 de 15 sitios) |
| Casi-negro con matiz (ink) | **Sí** | Ink #191410 en lugar de #000 en texto y fondos. Es más cálido y está más al día |
| Sistema completo de color / color blocking | **Sí** (B) / **Con matices** (A) | Paleta de 4 + 5 colores lista para eso. En A, reservar los bloques para 2–3 secciones |
| Color como navegación (por capítulo) | **Sí** | Ordena un sitio largo para inversionistas y muestra profesionalismo |
| Acento ácido / neón (lima) | **No** | No está en el brandbook. Fire Yellow cumple el rol de "acento ácido propio" |
| Gradientes decorativos / neón | **No** | La marca es plana, tipo sticker. Como mucho, un glow radial muy sutil |
| Modo oscuro completo con toggle | **Con matices** | Mejor secciones oscuras como dirección de arte (Propuesta 3) que un toggle |
| Monocromo frío tipo fintech | **No** | Borra la personalidad, que es lo que diferencia a Buffalo |
| Cloud Dancer (blanco del año) | **Con matices** | Usar blanco puro solo en formularios y tablas. El crema de marca ya cumple el rol |
| Transformative Teal | **Con matices** | El teal #1F6E6A está en la paleta: sirve para "soporte / respaldo", no como protagonista |
| Amarillo + magenta juntos | **Sí** | Con las reglas de 4.2: nunca texto uno sobre otro, separados por ink, crema o borde sticker |
| Display gigante condensado UC | **Sí** | Mostin heavy UC. Hero de 120–200 px en desktop y ~56–72 px en móvil |
| Tipografía cinética | **Con matices** | Solo en titulares cortos. Nunca en cifras, requisitos o formularios (NN/g) |
| Mono para etiquetas y datos | **Con matices** | No está en el brandbook. Usar Montserrat con cifras tabulares (`font-variant-numeric: tabular-nums`) en UC pequeñas, o validar una mono con marca |
| Script de acento | **Sí** | Teenage Dreams en 1–3 palabras por pantalla |
| Serif editorial | **No** | No pertenece al sistema tipográfico |
| TL;DR / overview tipo pitch deck | **Sí** | Es lo que busca el inversionista: inversión, retorno, requisitos y soporte en una pantalla |
| Bento grid | **Sí** | Ideal para cifras, formatos de local y "qué incluye la franquicia" |
| Scroll storytelling | **Con matices** | Para la historia de la marca, sí. Sin scrolljacking y nunca con texto obligatorio animado |
| Guided scrolling (progreso) | **Sí** | "Tu camino a franquiciado" en pasos con indicador |
| Asimetría / collage / broken grid | **Con matices** | En hero y secciones de marca. Los datos van en grilla ordenada |
| Maximalismo | **Con matices** | Maximalismo ordenado en B. En las secciones de datos, minimalismo |
| Infinite canvas / dot grid | **No** | Es una estética de herramientas creativas o IA, no de comida |
| Microinteracciones (botones sticker, hover) | **Sí** | Bajo costo y muy de marca (botones que "se pegan" o se despegan) |
| Scroll-driven animations CSS | **Sí** | Mejora progresiva, sin JS pesado, con `prefers-reduced-motion` |
| View transitions | **Con matices** | Same-document ya es Baseline. Cross-document no está en Firefox: usar como mejora |
| Cursores custom | **No** | Agregan poco a la conversión y no existen en móvil |
| 3D / WebGL | **No** (o 1 pieza mínima) | Costo alto de LCP. Si se usa, solo un waffle o una mascota liviana y diferida |
| Loader de marca | **No** | Retrasa el contenido. El microcopy de marca se lleva a estados vacíos o de envío |
| Mascota animada (Rive / Lottie liviano) | **Sí** | Gran diferencial. MindMarket muestra que puede ser liviano (~755 KB en total) |
| Stickers y badges | **Sí** | Es el ADN del logo |
| Texturas (kraft, grano, papel) | **Sí** | En SVG o CSS. Apela a lo táctil (Adobe, "All the Feels") |
| Collage foto + doodle | **Sí** | Waffles reales con trazos dibujados (patrón Crav) |
| Imágenes genéricas de IA | **No** | Van contra la señal de confianza de lo hecho a mano (NN/g) |
| Glassmorphism / Liquid Glass | **No** | Choca con lo plano tipo sticker. Además NN/g pide headers opacos |
| Neobrutalismo (bordes y sombras duras) | **Con matices** | Encaja con el estilo sticker. Dosificarlo para no perder seriedad |
| CTA sticky / barra inferior en móvil | **Sí** | "Quiero mi franquicia" siempre a mano, en amarillo + ink |
| Formulario por pasos con progreso | **Sí** | Recomendación de NN/g para procesos infrecuentes |
| Chatbot como formulario | **No** | NN/g: los usuarios no conversan con los bots. El lead necesita estructura |
| Prueba social integrada (cifras, testimonios, prensa) | **Sí** | Barra de cifras tipo Klarna con locales, años y ciudades |
| Pop-up de captura al entrar | **No** | Interrumpe y resta credibilidad |
| Transparencia de inversión (rangos visibles) | **Sí** | Equivale al "Pricing en el nav" de MindMarket |
| Fotografía real / local | **Sí** | Locales y franquiciados reales en Chile (Adobe "Local Flavor") |
| AA estricto + tokens derivados | **Sí** | Sin excepción: crítico por el amarillo |
| `prefers-reduced-motion` | **Sí** | La mayoría de los premiados falla aquí. Para Buffalo es una oportunidad |
| Presupuesto de Core Web Vitals | **Sí** | LCP ≤ 2,5 s en móvil como requisito de diseño |

---

## 6. Recomendaciones para dos direcciones creativas

### A. Evolución fiel a la marca ("Crema & Kraft", Propuesta 1 de color)

**Usar (8):**
1. Base crema + ink con matiz, y blanco solo en tarjetas de datos y formulario.
2. Mostin gigante (hero de 120–200 px) + Montserrat + Teenage Dreams en una o dos palabras por pantalla.
3. Bloque **TL;DR del inversionista** arriba del pliegue: inversión, formatos, retorno estimado, soporte y CTA.
4. **Bento de cifras** con stickers ("+X locales", "X años", "X ciudades") y prueba social justo bajo el hero.
5. Fotografía real de producto en kraft y de locales y franquiciados chilenos, con algún doodle encima.
6. Mascota en momentos clave, estática o con microanimación (estado de envío del formulario, 404, footer).
7. CTA persistente "Quiero mi franquicia" (amarillo + ink) y formulario por pasos con progreso.
8. Microinteracciones de botón tipo sticker y animaciones de entrada solo en elementos secundarios, con `prefers-reduced-motion`.

**Evitar (3):** 3D/WebGL y loaders de marca, texto animado al hacer scroll en cifras o requisitos, y amarillo como texto o borde sobre claro.

### B. Disruptiva 2026 dentro de la marca ("Bloques de sabor" + "Noche streetwear", Propuestas 2 y 3)

**Usar (8):**
1. **Color blocking por capítulo** a sangre (amarillo, ink, crema, magenta, teal), con el color como sistema de navegación.
2. **Guided scrolling**: "Tu camino a franquiciado" en 4–5 pasos con una barra de progreso que toma el color del capítulo (scroll-driven CSS).
3. **Mascota animada** (Rive o Lottie liviano) que reacciona al scroll y al hover, por ejemplo con alas que se mueven y un guiño en el CTA, con presupuesto de peso.
4. **Collage**: waffles recortados con trazos a mano, stickers rotados y texturas kraft (el patrón Crav con la paleta Buffalo).
5. **Tipografía cinética** en titulares cortos (palabras que se reemplazan o crecen al entrar al viewport), nunca en datos.
6. Una sección **"after hours"** en ink con amarillo y magenta (Propuesta 3) para la historia de marca y el lifestyle.
7. **Neobrutalismo dosificado**: bordes y sombras duras en ink en tarjetas bento y botones, en coherencia con el sticker.
8. **View transitions** como mejora progresiva entre pasos del formulario y secciones (same-document).

**Evitar (3):** scrolljacking o secciones que bloquean el scroll, gradientes neón o glassmorphism (fuera de la marca), y un modo oscuro total que haga ver el negocio como vida nocturna.

---

## 7. Fuentes

### 7.1 Galerías, premios y curadurías (consultadas el 2-oct-2026)
- Awwwards, Sites of the Day: https://www.awwwards.com/websites/sites_of_the_day/
- Awwwards, Sites of the Month: https://www.awwwards.com/websites/sites_of_the_month/
- Awwwards, Sites of the Year: https://www.awwwards.com/websites/sites_of_the_year/
- Awwwards, Annual Awards Winners (Lando Norris SOTY, Messenger Developer SOTY, Scout Motors E-commerce, Immersive Garden Agency, Malvah Studio, Louis Paquet Independent): https://www.awwwards.com/annual-awards/winners
- Awwwards, Food & Drink: https://www.awwwards.com/websites/food-drink/ y https://www.awwwards.com/inspiration_search/food-drink/
- Awwwards, Finance: https://www.awwwards.com/websites/finance/
- Awwwards, Business & Corporate: https://www.awwwards.com/websites/business-corporate/
- Fichas de Awwwards (premio, fecha, puntaje, paleta, tecnologías):
  - https://www.awwwards.com/sites/crav-burgers
  - https://www.awwwards.com/sites/bucks-sauce
  - https://www.awwwards.com/sites/la-revoltosa
  - https://www.awwwards.com/sites/don-molinico
  - https://www.awwwards.com/sites/sunbeam-bagels-coffee
  - https://www.awwwards.com/sites/partake-foods
  - https://www.awwwards.com/sites/lando-norris
  - https://www.awwwards.com/sites/mindmarket
  - https://www.awwwards.com/sites/moto-finance
  - https://www.awwwards.com/sites/terminal-industries
  - https://www.awwwards.com/sites/the-renaissance-edition
  - https://www.awwwards.com/sites/cerebrium
  - https://www.awwwards.com/sites/ciao-energy-launch-website
  - https://www.awwwards.com/sites/ponpon-mania
  - https://www.awwwards.com/sites/possible-finance
  - https://www.awwwards.com/sites/milledollars
- CSS Design Awards (WOTD recientes; no aportó referentes de comida): https://www.cssdesignawards.com/
- Godly: `https://godly.website/` hoy redirige (301) a https://recent.design/?ref=godly. Se revisó y no aportó referentes de comida ni de B2B.
- Land-book (listado general; el filtro de categoría por URL no se aplicó): https://land-book.com/
- Lapa Ninja, Fintech (Cleo, Stripe, Sharplink, Lasso; categoría "Bento Grid" con 75 entradas): https://www.lapa.ninja/category/fintech/ · Gumroad: https://www.lapa.ninja/post/gumroad-2/
- SiteInspire (sesgo minimal y tipográfico; Union Boulangerie, Stereoscope Coffee, House of Honey): https://www.siteinspire.com/
- One Page Love (sin referentes relevantes de comida): https://onepagelove.com/
- Mobbin: **no consultado**, porque requiere iniciar sesión.

### 7.2 Reportes de tendencias
- Figma, "Top Web Design Trends for 2026" (sin fecha visible): https://www.figma.com/resource-library/web-design-trends/
- Webflow, "8 web design trends to watch in 2026" (Leah Retta, Jose Ocando): https://webflow.com/blog/web-design-trends-2026
- Framer, "State of Sites 2026" (13-may-2026, 1.900+ encuestados): https://www.framer.com/state-of-sites-2026/
- Envato Elements, "Web design trends for 2026" (Adi Purdila, 30-mar-2026): https://elements.envato.com/learn/web-design-trends
- Adobe, "The four creative trends that will define marketing in 2026" (Lia Haberman, 9-dic-2025): https://blog.adobe.com/en/publish/2025/12/09/four-creative-trends-define-marketing-2026
- Adobe Express, "Top 10 graphic design trends for 2026" (12-dic-2025): https://www.adobe.com/express/learn/blog/design-trends-2026
- Adobe Express, "Color of the Year trends for 2026" (28-ene-2026): https://www.adobe.com/express/learn/blog/color-of-year-trends
- Apple Newsroom, Liquid Glass (9-jun-2025): https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/

### 7.3 UX (Nielsen Norman Group)
- "Handmade Designs: The New Trust Signal" (Megan Chan, 10-abr-2026): https://www.nngroup.com/articles/handmade-designs/
- "State of UX 2026" (Moran, Budiu, Gibbons; 16-ene-2026): https://www.nngroup.com/articles/state-of-ux-2026/
- "Scroll-Triggered Text Animations Delay Users" (Aurora Harley, 16-abr-2017): https://www.nngroup.com/articles/scroll-animations/
- "Scrolljacking 101" (Sara Paul, 6-ago-2023): https://www.nngroup.com/articles/scrolljacking-101/
- "Sticky Headers: 5 Ways to Make Them Better" (Page Laubheimer, 4-abr-2021): https://www.nngroup.com/articles/sticky-headers/
- "Wizards: Definition and Design Recommendations" (Raluca Budiu, 25-jun-2017): https://www.nngroup.com/articles/wizards/
- "The User Experience of Chatbots": https://www.nngroup.com/articles/chatbots/ y "Less Chat, More Answer": https://www.nngroup.com/articles/less-chat-more-answer/ (citados según el resumen del buscador; no se leyeron completos)

### 7.4 Color
- Pantone, Color del Año 2026 (11-4201 Cloud Dancer): https://www.pantone.com/color-of-the-year/2026. El hex no es público (paywall de Pantone Connect: https://www.pantone.com/color-finder/11-4201-TCX). #F0EEE9 es una aproximación de terceros.
- NPR, "Pantone's 2026 Color of the Year is 'Cloud Dancer'" (4-dic-2025): https://www.npr.org/2025/12/04/nx-s1-5632651/pantones-color-of-the-year-2026-white
- WGSN, Colour of the Year 2026 Transformative Teal: https://www.wgsn.com/en/blog/colour-year-2026-transformative-teal
- WGSN × Coloro, Key Colours S/S 26 (8-may-2024): https://www.wgsn.com/en/blog/coloro-x-wgsn-introduce-key-colours-s-s-26
- Coloro, Key Colors (A/W 26/27 y S/S 27 con códigos): https://coloro.com/key-colors
- Encycolorpedia, Coloro 092-37-14 ≈ #316064 (conversión de terceros): https://encycolorpedia.com/316064
- Método propio: ratios de contraste con la fórmula de luminancia relativa de WCAG 2.x (script Python). Los hex de los sitios se leyeron con `getComputedStyle` y las reglas `:root` de los stylesheets accesibles, en una ventana de 1440×900. Las primeras mediciones se hicieron con el navegador emulando `prefers-color-scheme: dark`; se verificó que solo Gumroad cambia y se re-midió en modo claro. Las paletas observadas coinciden total o parcialmente con las fichas de Awwwards donde existen. Las diferencias corresponden a colores que solo viven en imágenes o en 3D (por ejemplo, el #902177 de Cerebrium).

### 7.5 Plataforma web, accesibilidad y performance
- WebKit, "WebKit Features in Safari 26.0" (15-sep-2025; scroll-driven animations, `contrast-color()`): https://webkit.org/blog/17333/webkit-features-in-safari-26-0/
- WebKit, "WebKit Features for Safari 26.4" (scroll-driven animations en el compositor): https://webkit.org/blog/17862/webkit-features-for-safari-26-4/
- WebKit, "A guide to Scroll-driven Animations with just CSS": https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/
- WebKit, "Announcing Interop 2026" (12-feb-2026; incluye scroll-driven animations, view transitions, `contrast-color()`, anchor positioning y container style queries): https://webkit.org/blog/17818/announcing-interop-2026/
- Chrome for Developers, scroll-driven animations (desde Chrome 115): https://developer.chrome.com/docs/css-ui/scroll-driven-animations
- MDN, Firefox 144 release notes (14-oct-2025; View Transition API same-document): https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/144
- MDN, View Transition API: https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API
- Estado de las cross-document view transitions (fuente secundaria): https://css-tricks.com/cross-document-view-transitions-part-1/
- MDN, `prefers-reduced-motion`: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- web.dev, "Web Vitals" (umbrales LCP, INP y CLS en el p75): https://web.dev/articles/vitals
- W3C, WCAG 2.2 Understanding:
  - Contrast (Minimum): https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
  - Non-text Contrast: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
  - Pause, Stop, Hide: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
  - Animation from Interactions: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- Ley 21.719 (Chile), vigencia el 1-dic-2026 (fuente secundaria, estudio Araya & Cía.; verificar en la BCN): https://araya.cl/ley-de-proteccion-de-datos-se-postergara-su-entrada-en-vigencia/

### 7.6 Sitios inspeccionados con el navegador (2-oct-2026)
https://www.cravburgers.shop/ · https://buckssauce.com/ · https://larevoltosa.es/ · https://www.donmolinico.es/ · https://sunbeambagels.com/ · https://partakefoods.com/ · https://landonorris.com/ · https://mindmarket.com/ · https://www.moto-card.com/ · https://terminal-industries.com/ · https://www.shopify.com/editions/winter2026 · https://cerebrium.ai/ · https://gumroad.com/ · https://www.klarna.com/us/ · https://web.meetcleo.com/ · https://www.dunkinfranchising.com/ (redirige a franchising.inspirebrands.com/dunkin). https://www.lemonade.com/ no se pudo revisar porque mostró una verificación anti-bots de Cloudflare, que no se intentó sortear.

**Notas de conducta:** no se inició sesión en ningún sitio, no se rellenaron formularios (el pop-up de email de Partake no se tocó) y en los banners de cookies se eligió "Rechazar", "Reject all" o "Later" cuando existía la opción.
