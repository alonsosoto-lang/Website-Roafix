# Roafix — design system

Contexto fijo para cualquier prompt de diseño o código del sitio de difusión de Roafix. Pega este archivo completo antes de pedir una sección, un componente o un asset. La biblioteca interna que lo acompaña está en `inspiration-library/`: ahí están las 11 referencias, cada una con su prompt de diseño y su prompt de asset listos para copiar.

## 1. Qué es Roafix

Roafix es una plataforma de tecnología cívica nacida en Tijuana, México. El ciudadano reporta baches y problemas viales desde su smartphone en menos de 60 segundos, con foto y ubicación GPS. Los reportes llegan en tiempo real a un dashboard para las autoridades municipales, que ven un mapa de calor de zonas críticas y una lista priorizada por severidad y por número de confirmaciones ciudadanas. Cuando marcan un bache como resuelto, el ciudadano recibe un aviso, y así se cierra el ciclo.

- Roafix opera de forma independiente al gobierno: los municipios son usuarios del sistema, no sus dueños.
- Está alineada con los ODS 9, 10, 11 y 16 de la ONU.
- Forma parte del Millennium Fellowship Class of 2026.
- La ciudad piloto es Tijuana, con visión de expansión a otros municipios de México y Latinoamérica.

El sitio de difusión cuenta qué hace Roafix, quiénes son y para qué existe. No recibe reportes ni muestra el dashboard. Toda cifra que aparezca en el sitio tiene que salir de esta sección.

## 2. La idea visual

La vía y el plano son la composición, no un fondo detrás del texto. En las 11 referencias, el camino o el mapa ocupa la mayor parte del cuadro, se sale por los bordes, y el texto toma el campo que sobra. Roafix trabaja sobre calles reales, así que el sitio se construye con lo que tiene la calle: asfalto, línea amarilla, manzana, rótulo, pin.

Las referencias se agrupan en tres familias, más el tablero de marca:

| Familia | Referencias | Qué aporta |
| --- | --- | --- |
| Marca | `inspo` | Wordmark con la «o» vial, collage de piezas que se pisan, tono de cartel de viaje de mediados de siglo. |
| Cartel | `map2`, `map7` | Página tratada como cartel impreso: una diagonal fuerte, el texto arriba a la izquierda, una sola acción. |
| Señal | `map4`, `mapof`, `map6`, `map5` | Campo de color pleno (amarillo o ámbar) atravesado por asfalto. El contraste es amarillo contra negro. |
| Plano | `map1`, `map8` | Cartografía: manzanas en trama, calles como el papel que queda libre, nombres girados, un pin. |
| Territorio | `via`, `viaof` | Paisaje y vista cenital en bandas planas, para hablar de ciudad y de visión sin fotos de catálogo. |

## 3. Las 11 referencias

Los hex se muestrearon de los archivos (promedio de píxeles por zona); no están estimados a ojo.

| Pieza | Categoría estética | Paleta | Tipografía | Intención UX |
| --- | --- | --- | --- | --- |
| `inspo` Tablero Roafix | Collage de cartel de viaje y planos impresos | `#242021` `#FEC301` `#FE7A23` `#1B74C4` `#FFFFFF` | Grotesca negra muy gruesa; la «o» es una vía | Fija el tono de marca: impreso, cívico, cálido. Las demás piezas se miden contra esta. |
| `map2` Cartel de ruta | Cartel editorial plano | `#F9EEDC` `#333332` `#F4B042` | Grotesca geométrica media; una palabra en display redondeada ámbar | La diagonal del camino carga la página; una sola acción en pastilla negra con flecha. |
| `map7` Camino al árbol | Minimalismo a dos tintas | `#F5ECE5` `#1D1D1B` | Condensada en mayúsculas (plantilla) | Metáfora de destino con una sola masa negra. El texto de plantilla se descarta. |
| `map4` Curva sobre campo amarillo | Campo de color pleno | `#FECE00` `#071F2B` `#FAB413` | Sin texto | Mitad campo, mitad asfalto; el campo vacío es el lugar del mensaje. |
| `mapof` Camino serpenteante | Vector plano en perspectiva | `#FEAE03` `#1A1A1A` `#FDFDFD` | Display condensada negra | El recorrido ordena la lectura de abajo hacia arriba. |
| `map6` Carretera en fuga | Perspectiva de un punto | `#FEAE03` `#1C1C1C` `#FEFEFE` | Slab negra compacta | Banda de transición; las líneas de velocidad no pasan al sistema. |
| `map5` Curvas hacia el horizonte | Ilustración de banco, a ras de suelo | `#FFFFFF` `#2B2623` `#EB8A33` `#F4F4F4` | Sin texto | Cierre con horizonte alto. **Solo referencia: tiene marca de agua.** |
| `map1` Plano en trama | Cartografía impresa | `#E2E4E4` `#DB9387` `#25232B` `#CBCCC4` | Humanista en mayúsculas, girada con la calle | Mapa de calor contado al público sin enseñar el dashboard. |
| `map8` Ruta en el teléfono | Pictograma de contorno grueso | `#6BB4BC` `#FEFEFE` `#D70E0F` `#010101` | Sin texto | El gesto de reportar en un punto exacto, sin interfaz inventada. **Solo referencia: tiene marca de agua.** |
| `via` Sol sobre el camino | Paisaje geométrico en bandas | `#4790D5` `#EF5D50` `#F1ECE6` `#4D8D43` `#3A6933` `#274720` | Sin texto | Visión y expansión con polígonos planos. |
| `viaof` Territorio desde arriba | Ilustración cenital plana | `#F6BB03` `#416833` `#D3B59A` `#016C9C` `#CA3E32` | Sin texto | Escala de ciudad con una sola figura humana al centro: el auto en la vía. |

## 4. Color

Los roles salen de las referencias. Una sección usa un campo y un acento; no se mezclan todos los acentos en la misma vista.

| Rol | Hex | Origen | Uso |
| --- | --- | --- | --- |
| Papel | `#F9EEDC` | `map2` | Fondo general de lectura. |
| Papel frío | `#E2E4E4` | `map1` | Fondo de las secciones de plano. |
| Tinta | `#1D1D1B` | `map7` | Texto y marcas fuertes. |
| Asfalto | `#333332` | `map2` | Vías, pastilla de acción. |
| Señal | `#FECE00` | `map4` | Campo de color pleno; nunca como color de texto sobre papel. |
| Ámbar | `#F4B042` | `map2` | Líneas de la vía, chips, botón circular. |
| Trama | `#DB9387` | `map1` | Manzanas en el mapa. |
| Pin | `#D70E0F` | `map8` | Un solo punto de ubicación por ilustración. |
| Cielo | `#1B74C4` | `inspo` | Mar, río, cielo en las ilustraciones de marca. |

Proporción por sección: un campo que cubre de borde a borde, tinta para el texto y un acento en menos del 10% de la superficie. Las superficies se separan con un paso de tono (papel `#F9EEDC` contra `#EFE2CC`), nunca con sombra.

## 5. Tipografía

- Display: **Fraunces**, peso 600 a 800, óptica alta, interlineado 0.95 a 1.05. Titulares y nombres de pieza.
- Texto y datos: **Schibsted Grotesk**, 400 a 600. Cuerpo, botones, cifras con `font-variant-numeric: tabular-nums`.
- Wordmark: grotesca negra muy gruesa con la «o» dibujada como vía (círculo negro y raya amarilla). Es un dibujo, no una fuente.
- Cuerpo a 17 o 18px, medida de 60 a 70 caracteres. Titulares de sección entre 48 y 96px según el ancho.
- La palabra suelta en otro color del titular de `map2` es un recurso de un cartel. Se puede usar una vez en todo el sitio, no en cada titular.

## 6. Espacio

Escala propia, sin el ritmo de secciones iguales:

| Paso | Valor | Uso |
| --- | --- | --- |
| s12 | 12px | Dentro de un componente: icono y texto, chip y chip. |
| s20 | 20px | Entre párrafo y párrafo, entre controles. |
| s36 | 36px | Entre un bloque de texto y su ilustración. |
| s64 | 64px | Margen de cartel: del borde al titular. |

Las secciones no comparten un mismo relleno vertical. Cada una mide lo que pide su ilustración: un campo de color puede ocupar 100vh y una banda de transición 40vh.

## 7. Componentes

Todos se construyen en React + Tailwind. Si se parte de shadcn/ui (`Button`, `Badge`), se le quitan el radio, la sombra y los colores por defecto y se aplican los de este archivo.

### Chip de contorno (de `map2`)

> Chip de React + Tailwind (base: shadcn Badge variant outline). Borde de 1.5px en ámbar #F4B042, texto en tinta #333332, fondo transparente sobre papel #F9EEDC, radio completo, 14px de texto, 6px por 16px de relleno. Sin ícono, sin sombra, sin hover de color. Úsalo para nombrar temas dentro del contenido, nunca como etiqueta encima de un titular.

### Pastilla de acción con flecha (de `map2`)

> Botón compuesto de React + Tailwind (base: shadcn Button). Una pastilla negra #333332 con texto ámbar #F4B042 de 16px y radio de 10px, seguida a 12px por un círculo ámbar #F4B042 de 44px con una flecha diagonal en tinta. Al pasar el cursor, el círculo se desplaza 4px a la derecha en 160ms. El texto nombra la acción real. Sin degradado, sin sombra ni brillo.

### Listón (de `map2`)

> Listón decorativo en SVG: un rectángulo ámbar #F4B042 con una muesca en V en un extremo, sangrado desde el borde de la página (la mitad queda fuera del viewport). Plano, sin sombra. Se usa uno por página como marca de borde, nunca como contenedor de texto.

### Cinta de camino (de `map2`, `map4`, `mapof`)

> Componente de React <RoadRibbon path={d} /> que dibuja una carretera en SVG a partir de un solo path: un trazo ancho de asfalto (#333332, stroke-width 120), dos trazos de borde en ámbar #F4B042 de 4px desplazados a cada lado y una raya central discontinua (stroke-dasharray 28 22) del mismo color, todos siguiendo la misma curva. Opcional: un trazo gris claro bajo el asfalto como acotamiento. Responsivo con viewBox y preserveAspectRatio. Sin filtros ni degradados.

### Manzana en trama (de `map1`)

> Manzanas de plano en SVG: polígonos rellenos con un <pattern> de líneas diagonales a 45 grados (#DB9387, 2px de grueso, 6px de separación) sobre papel #E2E4E4. Las calles son el espacio vacío entre polígonos, de 14px de ancho. Los bloques de destino son polígonos sólidos #25232B con su nombre en papel. Sin contornos alrededor de las manzanas.

### Rótulo de calle girado (de `map1`, `inspo`)

> Rótulo de calle en SVG que sigue la vía: <text> con <textPath> sobre el eje de la calle, grotesca en mayúsculas de 13px con 0.12em de espaciado, en tinta #25232B. El rótulo pertenece al mapa y no se usa como etiqueta de sección fuera de él.

### Pin y ruta (de `map8`)

> Marcador de ubicación en SVG: pin rojo #D70E0F de 40px con círculo blanco interior y una ruta roja de 3px en escalones ortogonales que llega a él desde abajo. Al entrar en pantalla, la ruta se dibuja una sola vez con stroke-dashoffset en 900ms; con prefers-reduced-motion aparece completa. Solo un pin por ilustración.

### Marco de teléfono con plano (de `map8`)

> Marco de teléfono en React + Tailwind: un rectángulo con borde negro #010101 de 10px, radio de 36px y proporción 1:2, recortando por dentro un plano SVG teal #6BB4BC de calles blancas. Sin barra de estado, sin botones ni UI falsa. Dentro solo caben el plano, el pin y la ruta.

## 8. Assets generados (Higgsfield u otro generador)

Cada ficha de la biblioteca trae un prompt de asset en inglés. Todos comparten estas condiciones, que conviene repetir en cualquier prompt nuevo:

- Flat vector, solid fills only, hex concretos de la sección 4.
- No gradients, no glow, no watermark, no stock photo texture.
- No lettering: los textos y nombres de calle se ponen después en SVG o HTML.
- Proporción explícita (4:5, 16:10, 9:16, 21:9) según dónde va el asset.
- `map5` y `map8` traen marca de agua de banco de imágenes. Se rehacen como ilustración propia y nunca se publican.

## 9. Guardarraíles

Lo que el sitio no hace, aunque sea lo que un generador propondría primero:

- Color plano. Un degradado solo existe si una referencia lo tiene (el halo naranja de `map4`) y aun así no se vuelve regla.
- Nada de violeta, vidrio esmerilado, brillos, texto en degradado ni sombra suave bajo cada tarjeta.
- La retícula milimétrica de `map2`, las cruces de diseño y las líneas de velocidad de `map6` no se vuelven adorno del sitio.
- Sin etiquetas pequeñas en mayúsculas sobre los titulares, sin numeración 01 / 02 / 03 y sin filetes de 1px como estructura. El orden lo dan la escala, la posición y el recorrido de la vía.
- Sin fila de tres tarjetas iguales con ícono en un cuadro redondeado.
- Sin dashboards falsos, barras grises ni cifras inventadas. Si una cifra no está en la sección 1, no va.
- El texto de plantilla de las referencias («Your text here», «Road path background», lorem ipsum) se descarta.
- Next.js App Router con componentes de servidor por defecto; `"use client"` solo donde hay estado. Imágenes con `next/image` y `alt` que describe la escena. Tailwind con los tokens de este archivo, no con la paleta por defecto.
- Movimiento: una sola animación distintiva (la vía que se dibuja, la ruta que llega al pin), siempre con alternativa para `prefers-reduced-motion`.
