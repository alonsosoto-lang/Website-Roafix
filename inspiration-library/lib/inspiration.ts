export type Category = "Cartel" | "Señal" | "Plano" | "Territorio" | "Marca";

export const categories: Category[] = [
  "Marca",
  "Cartel",
  "Señal",
  "Plano",
  "Territorio",
];

export type Swatch = {
  hex: string;
  role: string;
};

export type Piece = {
  id: string;
  file: string;
  width: number;
  height: number;
  title: string;
  category: Category;
  style: string;
  palette: Swatch[];
  typography: string;
  brief: string;
  components: string[];
  /** Marca de agua de banco de imágenes: solo referencia, nunca publicar. */
  referenceOnly: boolean;
  designPrompt: string;
  assetPrompt: string;
  alt: string;
};

/**
 * Colores muestreados de cada archivo (promedio de píxeles por zona),
 * no estimados a ojo.
 */
export const pieces: Piece[] = [
  {
    id: "inspo",
    file: "/inspiration/inspo.jpg",
    width: 724,
    height: 1024,
    title: "Tablero Roafix",
    category: "Marca",
    style: "Collage de cartel de viaje de mediados de siglo y planos impresos",
    palette: [
      { hex: "#242021", role: "Tinta del wordmark" },
      { hex: "#FEC301", role: "Señal amarilla" },
      { hex: "#FE7A23", role: "Plano naranja" },
      { hex: "#1B74C4", role: "Cielo y río" },
      { hex: "#FFFFFF", role: "Papel" },
    ],
    typography:
      "Wordmark en grotesca negra muy gruesa; la «o» es una vía vista desde arriba: círculo negro con una raya amarilla vertical.",
    brief:
      "Es el tablero de marca del proyecto. Las piezas se pisan: paisajes de carretera de cartel antiguo, un auto clásico, planos en naranja y negro con calles crema, un río azul. Fija el tono, impreso, cívico y cálido, y las demás fichas se miden contra él.",
    components: ["Wordmark con la «o» vial", "Collage de piezas", "Rótulo de calle girado"],
    referenceOnly: false,
    designPrompt:
      "Usa el wordmark Roafix en tinta #242021 con la «o» dibujada como vía vista desde arriba: círculo negro y una raya vertical amarilla #FEC301. Compón la sección «Quiénes somos» como collage: tres o cuatro piezas de tamaños distintos que se pisan (un plano de Tijuana en naranja #FE7A23 con calles crema, un campo amarillo atravesado por una vía, el mar en #1B74C4), con bordes rectos y sin esquinas redondeadas, sobre papel blanco. El texto va en una columna que también pisa una pieza: Roafix nació en Tijuana, opera de forma independiente al gobierno y forma parte del Millennium Fellowship Class of 2026. Sin sombras entre piezas, sin degradados, sin etiqueta pequeña sobre el título.",
    assetPrompt:
      "Mid-century travel poster illustration with fine print grain, a pale winding road through layered blue, yellow and orange hills, a small red vintage car on the road, a white moon, flat colors only (#1B74C4, #FEC301, #FE7A23, #FFFFFF, #242021), no gradients, no text, no watermark, aspect ratio 3:4.",
    alt: "Tablero con el wordmark Roafix sobre un collage de carreteras ilustradas, un auto clásico y planos de calles en naranja y negro.",
  },
  {
    id: "map2",
    file: "/inspiration/map2.jpg",
    width: 736,
    height: 857,
    title: "Cartel de ruta",
    category: "Cartel",
    style: "Cartel editorial plano sobre papel",
    palette: [
      { hex: "#F9EEDC", role: "Papel" },
      { hex: "#333332", role: "Asfalto y tinta" },
      { hex: "#F4B042", role: "Ámbar de las líneas" },
    ],
    typography:
      "Grotesca geométrica de peso medio para el titular y los chips; una palabra en una display redondeada en ámbar.",
    brief:
      "La diagonal del camino carga el cartel: el texto se queda arriba a la izquierda y la vía atraviesa el resto hasta salir por dos bordes. La pastilla negra con flecha es la única acción. Lo que se aprende para Roafix: la vía es la composición, no un adorno detrás del titular.",
    components: ["Chip de contorno", "Pastilla de acción con flecha", "Listón", "Cinta de camino"],
    referenceOnly: false,
    designPrompt:
      "Construye el hero del sitio de difusión de Roafix, plataforma cívica de Tijuana para reportar baches. Fondo plano #F9EEDC. Una cinta de asfalto en SVG #333332, con bordes y raya central discontinua en ámbar #F4B042, cruza en curva desde el borde izquierdo y sale por la esquina superior derecha, ocupando cerca del 60% del alto. El titular, en tinta y en dos líneas, va arriba a la izquierda a 64px del borde. Debajo, una pastilla negra con la acción y un botón circular ámbar con flecha. Sin retícula de fondo, sin degradados, sin sombras suaves y sin etiqueta sobre el titular.",
    assetPrompt:
      "Flat vector illustration of a two-lane asphalt road ribbon (#333332) with thin amber edge lines and a dashed amber center line (#F4B042), sweeping in an S-curve diagonally across a plain warm paper background (#F9EEDC), the road exits the frame on two edges, light grey shoulder band, top-down view, solid fills only, no gradients, no grid, no text, no watermark, aspect ratio 4:5.",
    alt: "Cartel color papel con el titular «Your vision deserves a clear path» y una carretera negra con líneas ámbar que cruza en diagonal.",
  },
  {
    id: "map7",
    file: "/inspiration/map7.jpg",
    width: 547,
    height: 360,
    title: "Camino al árbol",
    category: "Cartel",
    style: "Minimalismo a dos tintas",
    palette: [
      { hex: "#F5ECE5", role: "Papel" },
      { hex: "#1D1D1B", role: "Silueta del camino" },
    ],
    typography:
      "Grotesca condensada en mayúsculas para el titular de plantilla; el cuerpo es texto de relleno.",
    brief:
      "Una sola masa negra: el camino nace ancho en la esquina inferior y se adelgaza hasta un árbol dibujado a línea. Son dos colores y nada más. Lo útil es la metáfora de llegar a un destino. El bloque «YOUR TEXT HERE» es una plantilla y se descarta.",
    components: ["Cinta de camino", "Ilustración a línea"],
    referenceOnly: false,
    designPrompt:
      "Sección «Propósito» de Roafix a dos tintas. Fondo #F5ECE5. El camino es una silueta negra #1D1D1B que nace en la esquina inferior izquierda y termina, adelgazado, en un dibujo a línea de lo que se gana: una calle reparada, una banqueta, un árbol de Tijuana. El propósito va arriba a la derecha en tinta, alineado con el final del camino. Sin color de acento, sin íconos, sin tarjetas.",
    assetPrompt:
      "Minimal two-color vector illustration, a solid black road silhouette (#1D1D1B) starting wide at the bottom-left corner and tapering as it winds to a small single-line drawing of a tree near the upper middle, warm paper background (#F5ECE5), no text, no gradients, no watermark, aspect ratio 3:2.",
    alt: "Silueta negra de un camino que se adelgaza hasta un árbol dibujado a línea sobre fondo crema.",
  },
  {
    id: "map4",
    file: "/inspiration/map4.jpg",
    width: 1024,
    height: 628,
    title: "Curva sobre campo amarillo",
    category: "Señal",
    style: "Campo de color pleno, vector plano",
    palette: [
      { hex: "#FECE00", role: "Campo amarillo" },
      { hex: "#071F2B", role: "Asfalto azul noche" },
      { hex: "#FAB413", role: "Halo junto al borde" },
    ],
    typography: "Sin texto: el campo vacío es el espacio para escribir.",
    brief:
      "Medio cuadro es amarillo puro y la otra mitad es carretera oscura que se curva hacia arriba. El único efecto es un halo naranja junto al borde de la vía, que la separa del fondo. Es una referencia para secciones donde el color llena todo el ancho.",
    components: ["Campo de color", "Cinta de camino"],
    referenceOnly: false,
    designPrompt:
      "Sección de manifiesto de Roafix sobre un campo amarillo #FECE00 de borde a borde. A la izquierda, la vía en #071F2B, con líneas de borde y raya central discontinua amarillas, se curva y sale por arriba ocupando el 40% del ancho. A la derecha, sobre el campo, el propósito en tinta #071F2B a gran tamaño (12 palabras como máximo) y un párrafo corto. Sin tarjetas, sin íconos, sin degradado de fondo: el único contraste es amarillo contra asfalto.",
    assetPrompt:
      "Flat vector illustration, dark navy asphalt road (#071F2B) curving up and out of the top-left of the frame, yellow edge lines and dashed yellow center line, on a solid signal-yellow field (#FECE00) filling the rest of the frame, a subtle orange contact shadow along the right road edge only (#FAB413), large empty yellow area on the right for copy, no text, no watermark, aspect ratio 16:10.",
    alt: "Carretera azul noche con líneas amarillas que se curva hacia arriba sobre un campo amarillo liso.",
  },
  {
    id: "mapof",
    file: "/inspiration/mapof.jpg",
    width: 626,
    height: 500,
    title: "Camino serpenteante",
    category: "Señal",
    style: "Vector plano en perspectiva",
    palette: [
      { hex: "#FEAE03", role: "Campo ámbar" },
      { hex: "#1A1A1A", role: "Asfalto" },
      { hex: "#FDFDFD", role: "Raya central" },
    ],
    typography:
      "Display condensada negra en mayúsculas («ROAD PATH») con cuerpo en lorem ipsum.",
    brief:
      "La vía entra por abajo y serpentea hasta perderse arriba a la derecha. El texto queda abajo a la izquierda, en una columna estrecha. Como el texto es de plantilla, de esta pieza solo se toma la composición.",
    components: ["Cinta de camino", "Paradas a lo largo de la vía"],
    referenceOnly: false,
    designPrompt:
      "Bloque «Cómo funciona» de Roafix sobre un campo #FEAE03. La vía #1A1A1A, con raya central blanca, serpentea de abajo hacia arriba en el tercio derecho. Los tres momentos se colocan como paradas junto a las curvas, cada uno con una frase corta en tinta: el ciudadano reporta con foto y GPS en menos de 60 segundos; el municipio ve el reporte priorizado por severidad y confirmaciones; el ciudadano recibe aviso cuando se marca como resuelto. Sin números 01/02/03 y sin tarjetas: el orden lo da el recorrido.",
    assetPrompt:
      "Flat vector winding road (#1A1A1A) with yellow edge lines and a white dashed center line, entering from the bottom of the frame and snaking upward in perspective until it vanishes near the top right, solid amber background (#FEAE03), no text, no gradients, no watermark, aspect ratio 5:4.",
    alt: "Carretera negra que serpentea hacia el horizonte sobre fondo ámbar, con el texto «Road path background» abajo a la izquierda.",
  },
  {
    id: "map6",
    file: "/inspiration/map6.jpg",
    width: 626,
    height: 500,
    title: "Carretera en fuga",
    category: "Señal",
    style: "Vector plano con perspectiva de un punto",
    palette: [
      { hex: "#FEAE03", role: "Campo ámbar" },
      { hex: "#1C1C1C", role: "Asfalto" },
      { hex: "#FEFEFE", role: "Acotamiento" },
    ],
    typography: "Serif slab negra muy compacta («Road») con una grotesca espaciada debajo.",
    brief:
      "La carretera entra en perspectiva desde la esquina inferior derecha, con franjas blancas de acotamiento. Sirve como banda de transición entre secciones. Las líneas de velocidad son adorno y no pasan al sistema.",
    components: ["Banda de transición", "Cifra grande"],
    referenceOnly: false,
    designPrompt:
      "Banda de transición horizontal para Roafix: campo #FEAE03 de 40vh de alto. La carretera #1C1C1C, con acotamiento blanco #FEFEFE, entra en perspectiva desde la esquina inferior derecha hacia el centro. A la izquierda, una sola cifra real en slab negra: «menos de 60 segundos» para reportar un bache. Sin líneas de velocidad, sin flechas, sin degradados.",
    assetPrompt:
      "Flat vector highway in one-point perspective entering from the bottom-right corner toward the center, black asphalt (#1C1C1C), white shoulder bands (#FEFEFE), white dashed lane lines, on a solid amber field (#FEAE03), no speed lines, no text, no watermark, wide 21:9 banner.",
    alt: "Carretera negra en perspectiva con acotamientos blancos sobre fondo ámbar, con el rótulo «Road background».",
  },
  {
    id: "map5",
    file: "/inspiration/map5.jpg",
    width: 636,
    height: 900,
    title: "Curvas hacia el horizonte",
    category: "Señal",
    style: "Ilustración de banco de imágenes, vista a ras de suelo",
    palette: [
      { hex: "#FFFFFF", role: "Cielo blanco" },
      { hex: "#2B2623", role: "Asfalto" },
      { hex: "#EB8A33", role: "Raya central naranja" },
      { hex: "#F4F4F4", role: "Líneas de borde" },
    ],
    typography: "Sin texto propio; trae marca de agua del banco de imágenes.",
    brief:
      "Una vía ancha ocupa la mitad de abajo y se estrecha en curvas hacia el horizonte, con raya central naranja y bordes blancos. El blanco de arriba es espacio para el mensaje. Trae marca de agua, así que se rehace como ilustración propia y nunca se publica.",
    components: ["Cinta de camino", "Cierre de página"],
    referenceOnly: true,
    designPrompt:
      "Cierre de página de Roafix. La mitad inferior es una vía #2B2623 vista a ras de suelo, con raya central naranja #EB8A33 y bordes blancos, que se estrecha en curvas hacia un horizonte alto. La mitad superior, en blanco, lleva la visión en una frase (de Tijuana hacia otros municipios de México y Latinoamérica) y un enlace de contacto. Sin sombra y sin textura fotográfica.",
    assetPrompt:
      "Original flat vector illustration, low-angle view of a wide dark asphalt road (#2B2623) filling the lower half, narrowing through several S-curves to a high horizon, orange center line (#EB8A33), white edge lines, plain white sky (#FFFFFF), no watermark, no stock texture, no text, aspect ratio 3:4.",
    alt: "Carretera oscura con raya central naranja que se estrecha en curvas hacia el horizonte sobre fondo blanco.",
  },
  {
    id: "map1",
    file: "/inspiration/map1.jpg",
    width: 736,
    height: 1001,
    title: "Plano en trama: Shoreditch",
    category: "Plano",
    style: "Cartografía impresa con trama diagonal",
    palette: [
      { hex: "#E2E4E4", role: "Papel y calles" },
      { hex: "#DB9387", role: "Trama de manzanas" },
      { hex: "#25232B", role: "Bloques y rótulos" },
      { hex: "#CBCCC4", role: "Grano del papel" },
    ],
    typography:
      "Grotesca humanista en mayúsculas con espaciado amplio, girada para seguir cada calle.",
    brief:
      "Es un plano impreso: las manzanas son tramas diagonales rojas, las calles son el papel que queda entre ellas y los nombres van girados a lo largo de cada calle. Solo dos lugares van en bloque negro: la estación y el destino. Es la mejor referencia para contar al público el mapa de calor de Roafix sin enseñar el dashboard.",
    components: ["Manzana en trama", "Rótulo de calle girado", "Bloque de destino"],
    referenceOnly: false,
    designPrompt:
      "Mapa ilustrativo de Tijuana para el sitio de Roafix, sin datos reales de reportes. Las manzanas son tramas diagonales #DB9387 sobre papel #E2E4E4 y las calles son el espacio sin trama. Los nombres de calles reales de la zona piloto (por ejemplo Av. Revolución, Calle Segunda, Blvd. Agua Caliente) van girados a lo largo de cada vía en tinta #25232B. Dos o tres bloques sólidos #25232B marcan puntos de referencia con su nombre en papel. Hazlo en SVG con <pattern> para la trama. Sin pines genéricos, sin sombras y sin leyenda de colores.",
    assetPrompt:
      "Flat printed street map illustration, irregular city blocks filled with fine red diagonal hatching (#DB9387), streets left as pale grey paper (#E2E4E4), two solid charcoal blocks (#25232B) as landmarks, slight paper grain, no lettering (labels are added later in SVG), no gradients, no pins, no watermark, aspect ratio 3:4.",
    alt: "Plano impreso de Shoreditch con manzanas en trama diagonal roja, calles claras con nombres girados y dos bloques negros.",
  },
  {
    id: "map8",
    file: "/inspiration/map8.jpg",
    width: 459,
    height: 900,
    title: "Ruta en el teléfono",
    category: "Plano",
    style: "Pictograma plano de contorno grueso",
    palette: [
      { hex: "#6BB4BC", role: "Plano teal" },
      { hex: "#FEFEFE", role: "Calles" },
      { hex: "#D70E0F", role: "Pin y ruta" },
      { hex: "#010101", role: "Marco del teléfono" },
    ],
    typography: "Sin texto; trae marca de agua del banco de imágenes.",
    brief:
      "Un teléfono de contorno grueso con un plano teal de calles blancas y una ruta roja que sube hasta un pin. Explica el gesto de Roafix (desde el teléfono, en un punto exacto) sin enseñar una interfaz inventada. Trae marca de agua, así que es solo referencia.",
    components: ["Marco de teléfono con plano", "Pin y ruta"],
    referenceOnly: true,
    designPrompt:
      "Ilustración del gesto de reporte para el sitio de Roafix: un teléfono de marco negro #010101, esquinas redondeadas y borde grueso. Dentro, un plano #6BB4BC con calles blancas #FEFEFE y un único pin rojo #D70E0F donde está el bache, con una ruta roja fina que llega a él. Al lado, en texto: foto, ubicación por GPS y menos de 60 segundos. No dibujes botones, barra de estado ni una interfaz falsa dentro del teléfono.",
    assetPrompt:
      "Flat vector smartphone with a thick black rounded outline (#010101), the screen filled with a teal city map (#6BB4BC) of irregular white streets (#FEFEFE), one red location pin (#D70E0F) with a thin red route leading to it from the bottom, no UI chrome, no status bar, no text, no watermark, aspect ratio 1:2.",
    alt: "Teléfono de contorno negro con un plano teal de calles blancas y una ruta roja que termina en un pin.",
  },
  {
    id: "via",
    file: "/inspiration/via.jpg",
    width: 819,
    height: 1024,
    title: "Sol sobre el camino",
    category: "Territorio",
    style: "Paisaje geométrico en bandas planas",
    palette: [
      { hex: "#4790D5", role: "Cielo" },
      { hex: "#EF5D50", role: "Sol" },
      { hex: "#F1ECE6", role: "Camino" },
      { hex: "#4D8D43", role: "Campo cercano al horizonte" },
      { hex: "#3A6933", role: "Campo medio" },
      { hex: "#274720", role: "Campo al frente" },
    ],
    typography: "Sin texto; solo un pequeño logotipo de cubo en la esquina.",
    brief:
      "Un paisaje en bandas: cielo azul, medio sol rojo, verdes que se oscurecen hacia el frente y un camino claro que sube hasta el horizonte. Cada banda está cortada en recto, así que el camino se desplaza de una franja a otra. Sirve para hablar de la visión sin fotos de catálogo.",
    components: ["Paisaje en bandas", "Camino quebrado"],
    referenceOnly: false,
    designPrompt:
      "Ilustración de visión para Roafix construida en SVG con polígonos planos: cielo #4790D5, medio sol #EF5D50 sobre el horizonte, campos en bandas #4D8D43, #3A6933 y #274720 que se oscurecen hacia abajo, y un camino #F1ECE6 que sube y se desplaza en cada banda. El texto de la visión (de Tijuana hacia otros municipios) va sobre el cielo, en blanco. Sin degradados, sin texturas y sin contornos.",
    assetPrompt:
      "Flat geometric landscape poster, blue sky (#4790D5), red half-sun on the horizon (#EF5D50), three horizontal bands of green fields darkening toward the viewer (#4D8D43, #3A6933, #274720), an off-white path (#F1ECE6) climbing to the horizon and shifting sideways at each band edge, solid shapes only, no outlines, no gradients, no text, no watermark, aspect ratio 4:5.",
    alt: "Paisaje geométrico con cielo azul, medio sol rojo, bandas de campo verde y un camino blanco que sube al horizonte.",
  },
  {
    id: "viaof",
    file: "/inspiration/viaof.jpg",
    width: 576,
    height: 1024,
    title: "Territorio desde arriba",
    category: "Territorio",
    style: "Ilustración cenital plana",
    palette: [
      { hex: "#F6BB03", role: "Parcelas" },
      { hex: "#416833", role: "Setos y bosque" },
      { hex: "#D3B59A", role: "Camino" },
      { hex: "#016C9C", role: "Río" },
      { hex: "#CA3E32", role: "Casa" },
    ],
    typography: "Sin texto.",
    brief:
      "Vista aérea con parcelas amarillas separadas por setos, un bosque en una esquina, un río que entra por la derecha, una casa roja y un auto blanco en el camino. Cuenta la escala del territorio y deja una sola cosa humana al centro. Para Roafix, el auto en la vía es el ciudadano dentro de su ciudad.",
    components: ["Fondo cenital", "Panel de texto sólido"],
    referenceOnly: false,
    designPrompt:
      "Fondo ilustrado para la sección «Ciudad piloto: Tijuana»: vista cenital en estilo plano, manzanas #F6BB03 separadas por franjas verdes #416833, una vía #D3B59A que recorre el cuadro de arriba abajo, un solo vehículo blanco sobre ella y un acento rojo #CA3E32. El texto va en un panel sólido de tinta, nunca encima de la ilustración. Sin brillos y sin desenfoque.",
    assetPrompt:
      "Top-down flat illustration of a patchwork landscape, mustard-yellow plots (#F6BB03) divided by dark green hedges (#416833) with small round trees at the joints, a beige winding road (#D3B59A) running top to bottom, one tiny white car on it, one red-roofed house (#CA3E32), a blue river (#016C9C) entering from the bottom right, dense green forest in the top-left corner, no text, no watermark, aspect ratio 9:16.",
    alt: "Vista aérea de parcelas amarillas con setos verdes, un camino beige con un auto blanco, una casa roja y un río azul.",
  },
];

export type ComponentPrompt = {
  name: string;
  source: string;
  prompt: string;
};

/** Prompts para 21st.dev o para adaptar shadcn/ui (Button, Badge) sin su radio ni su sombra por defecto. */
export const componentPrompts: ComponentPrompt[] = [
  {
    name: "Chip de contorno",
    source: "map2",
    prompt:
      "Chip de React + Tailwind (base: shadcn Badge variant outline). Borde de 1.5px en ámbar #F4B042, texto en tinta #333332, fondo transparente sobre papel #F9EEDC, radio completo, 14px de texto, 6px por 16px de relleno. Sin ícono, sin sombra, sin hover de color. Úsalo para nombrar temas dentro del contenido, nunca como etiqueta encima de un titular.",
  },
  {
    name: "Pastilla de acción con flecha",
    source: "map2",
    prompt:
      "Botón compuesto de React + Tailwind (base: shadcn Button). Una pastilla negra #333332 con texto ámbar #F4B042 de 16px y radio de 10px, seguida a 12px por un círculo ámbar #F4B042 de 44px con una flecha diagonal en tinta. Al pasar el cursor, el círculo se desplaza 4px a la derecha en 160ms. El texto nombra la acción real. Sin degradado, sin sombra ni brillo.",
  },
  {
    name: "Listón",
    source: "map2",
    prompt:
      "Listón decorativo en SVG: un rectángulo ámbar #F4B042 con una muesca en V en un extremo, sangrado desde el borde de la página (la mitad queda fuera del viewport). Plano, sin sombra. Se usa uno por página como marca de borde, nunca como contenedor de texto.",
  },
  {
    name: "Cinta de camino",
    source: "map2 · map4 · mapof",
    prompt:
      "Componente de React <RoadRibbon path={d} /> que dibuja una carretera en SVG a partir de un solo path: un trazo ancho de asfalto (#333332, stroke-width 120), dos trazos de borde en ámbar #F4B042 de 4px desplazados a cada lado y una raya central discontinua (stroke-dasharray 28 22) del mismo color, todos siguiendo la misma curva. Opcional: un trazo gris claro bajo el asfalto como acotamiento. Responsivo con viewBox y preserveAspectRatio. Sin filtros ni degradados.",
  },
  {
    name: "Manzana en trama",
    source: "map1",
    prompt:
      "Manzanas de plano en SVG: polígonos rellenos con un <pattern> de líneas diagonales a 45 grados (#DB9387, 2px de grueso, 6px de separación) sobre papel #E2E4E4. Las calles son el espacio vacío entre polígonos, de 14px de ancho. Los bloques de destino son polígonos sólidos #25232B con su nombre en papel. Sin contornos alrededor de las manzanas.",
  },
  {
    name: "Rótulo de calle girado",
    source: "map1 · inspo",
    prompt:
      "Rótulo de calle en SVG que sigue la vía: <text> con <textPath> sobre el eje de la calle, grotesca en mayúsculas de 13px con 0.12em de espaciado, en tinta #25232B. El rótulo pertenece al mapa y no se usa como etiqueta de sección fuera de él.",
  },
  {
    name: "Pin y ruta",
    source: "map8",
    prompt:
      "Marcador de ubicación en SVG: pin rojo #D70E0F de 40px con círculo blanco interior y una ruta roja de 3px en escalones ortogonales que llega a él desde abajo. Al entrar en pantalla, la ruta se dibuja una sola vez con stroke-dashoffset en 900ms; con prefers-reduced-motion aparece completa. Solo un pin por ilustración.",
  },
  {
    name: "Marco de teléfono con plano",
    source: "map8",
    prompt:
      "Marco de teléfono en React + Tailwind: un rectángulo con borde negro #010101 de 10px, radio de 36px y proporción 1:2, recortando por dentro un plano SVG teal #6BB4BC de calles blancas. Sin barra de estado, sin botones ni UI falsa. Dentro solo caben el plano, el pin y la ruta.",
  },
];
