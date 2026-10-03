# Testimonial

Demo: [`testimonial.card.html`](testimonial.card.html) · CSS: incluido en `styles.css`.

**Qué es.** Prueba social para inversionistas: franquiciados reales con nombre, local, ciudad, años en la red y, ojalá, un dato de negocio. Variante video (30–60 s, con subtítulos).

**Anatomía.** `.bw-testimonials` > `figure.bw-testimonial` (`__mark` · `blockquote.__quote` · `figcaption.__person` con `__photo`, `__name`, `__meta`). Video: `--video` con `.bw-video` (póster + `button.bw-video__play` + duración).

**Contenido real:** Jonathan (Boulevard Marina) · Eduardo y Alex (Mallplaza Iquique). Las fotos existen en el sitio actual (ver `contenido-real.md` §4) pero no se descargaron: en la demo hay iniciales.

**Reglas**
- Sin carrusel automático (WCAG 2.2.2): grilla.
- Nunca testimonios de clientes o empleados en esta página (anti-patrón A1 §5.2).
- Video: subtítulos obligatorios, póster liviano, sin autoplay, carga del reproductor al hacer clic (facade).
- Eliminar los testimonios de plantilla ocultos del sitio actual ("FreshLearn… Manisha").

**HubSpot.** Módulo `testimonios`: repeater (`cita`, `nombre`, `local`, `ciudad`, `anios_en_red`, `dato`, `foto`, `video_url`, `poster`).
