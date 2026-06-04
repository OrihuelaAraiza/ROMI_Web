# Sistema visual kawaii de ROMI

El estilo kawaii/doodle es parte de la identidad del producto, no una decoración
exclusiva de la página de inicio. Toda pantalla nueva debe heredarlo.

## Reglas permanentes

- Usar los tokens semánticos de `src/styles/theme.css`; no crear paletas grises,
  azules o moradas aisladas.
- Mantener fondos cálidos tipo papel, superficies pastel y tinta oscura.
- Tarjetas, botones y campos usan borde de tinta visible y sombra sólida
  desplazada. Evitar sombras difusas genéricas.
- Fredoka se usa en títulos y Poppins en lectura e interfaz.
- Las esquinas son suaves, pero botones y tarjetas no deben convertirse todos
  en píldoras.
- Combinar coral ROMI con amarillo, rosa, lila, menta y durazno.
- Conservar contraste, áreas táctiles de al menos 44 px y soporte para
  `prefers-reduced-motion`.

## Componentes compartidos

Antes de crear estilos locales, usar `card-premium`, `romi-panel`, `romi-field`,
`romi-action`, `kawaii-chip` y las primitivas de `src/components/ui`.

La referencia visual externa sirve como inspiración de lenguaje doodle, pero
ROMI conserva su personaje, contenido, coral y composición propios.
