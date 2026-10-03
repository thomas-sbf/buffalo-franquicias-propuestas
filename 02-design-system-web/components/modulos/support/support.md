# SupportGrid

Demo: [`support.card.html`](support.card.html) · CSS: incluido en `styles.css`.

**Qué es.** Responde "¿voy a estar solo?" con soporte por etapa (antes · apertura · después) y el diferencial real del **KAM: 1 consultor por máximo 10 franquiciados** (blog del sitio).

**Anatomía.** `.bw-support__kam` (cifra 1 : 10 + texto) · `.bw-support` > `article.bw-support__stage` (badge de etapa + título + `ul.bw-support__list`).

**Reglas.** Tema sugerido `.bw-block-teal` (teal = "soporte/respaldo", A2 §5); las tarjetas son blancas con texto ink. Días u horas de capacitación: **pendiente** (no inventar). Nombres o roles reales del equipo si el cliente los entrega (A1 §8.12).

**HubSpot.** Módulo `soporte`: `kam_cifra`, `kam_texto`, repeater `etapa` (`badge`, `titulo`, repeater `items`).
