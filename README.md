# MARE Livestock Solutions

Rol y alcance del proyecto:

Eres un diseñador de producto especializado en landing pages animadas de alto impacto (nivel Framer / Awwwards). Este encargo es EXCLUSIVAMENTE DE DISEÑO VISUAL Y MOTION. No implementes backend, integraciones reales, bases de datos, autenticación, buscadores funcionales, filtros funcionales, formularios con envío real ni carritos/cotizadores con estado persistente. Todo elemento interactivo debe ser visual/decorativo o un enlace estático (href a wa.me, tel:, mailto: o maps), sin llamadas a APIs. El código se conectará después a GitHub para desarrollo funcional completo — prioriza estructura de componentes limpia y semántica, fidelidad de marca y calidad de motion design por encima de cualquier funcionalidad.

Marca: MARE — distribuidor veterinario (Cundinamarca, Colombia)

Identidad cromática (del logotipo):

- Naranja Mare #F16E22 (primario — energía, CTAs, acentos de marca)

- Azul Marino #1B365D (secundario — autoridad, headers, nav, botones secundarios)

- Verde Campo #2E7D32 (acento — disponibilidad, nutrición, elementos ecológicos)

- Gris neutro #F8F9FA a #E9ECEF (fondos de sección)

Tipografía:

- Títulos: Plus Jakarta Sans o Montserrat, peso medio/bold

- Cuerpo: Inter u Open Sans, mínimo 16px, alto contraste

Estructura del sitio (frontend navegable, contenido hardcodeado, sin CMS):

1. HOME

   - Hero con animación de entrada (parallax sutil o reveal escalonado): titular "Salud animal de alta precisión y nutrición que maximiza su rendimiento en campo", subtítulo sobre respaldo MSD Salud Animal, dos CTAs (naranja sólido "Explorar Catálogo", borde azul "Hablar con un Asesor Técnico") como links estáticos.

   - Franja de insignias de confianza con animación de contador o fade-in escalonado: Distribuidor Estratégico MSD, asistencia técnica en finca, 4 sedes en Cundinamarca, cadena de frío garantizada.

   - Selector por especie: dos tarjetas grandes (Bovinos / Equinos) con hover con zoom de imagen o flip sutil, cada una con su promesa de valor y link estático "Ver soluciones →".

   - Sección "Respaldo MSD Salud Animal" con transición de scroll (fade/slide).

   - Módulo de sedes (Siberia/Tenjo, La Caro/Chía, Ubaté, Simijaca) como tarjetas o carrusel con transición suave; cada una con un botón WhatsApp que es un simple link wa.me con el número correspondiente (sin lógica de selector dinámico).

2. CATÁLOGO (vista de producto, sin filtros funcionales)

   - Grid de productos con datos de ejemplo (nombre comercial, principio activo, vía de administración, tiempo de retiro).

   - Filtros laterales dibujados visualmente (Especie, Categoría, Laboratorio/MSD) — solo UI, sin lógica de filtrado real.

   - Ficha de producto con animación de entrada al hacer click/hover; botones "Solicitar Ficha Técnica" y "Cotizar por WhatsApp" como elementos visuales/links estáticos, sin backend.

3. ASESORÍA TÉCNICA EN CAMPO

   - Mensaje clave "No solo vendemos productos; caminamos el potrero con usted."

   - Tres pilares de servicio con iconografía animada al entrar en viewport.

   - CTA "Agendar visita técnica diagnóstica" como link estático (mailto o WhatsApp).

4. SEDES

   - Cuatro tarjetas de sede con imagen, dirección y botón "Cómo llegar" como link estático a Google Maps/Waze (URL directa, sin integración de mapa embebido con lógica).

5. B2B / DISTRIBUIDORES

   - Sección con beneficios (lista mayorista, cadena de frío, crédito comercial).

   - Formulario visual (nombre almacén, NIT, municipio, volumen estimado) — solo maquetación de formulario, sin validación ni envío real; puede tener un botón deshabilitado o que simule éxito con una animación, sin conexión a servidor.

6. CONTACTO

   - Botón flotante de WhatsApp multisede: al hacer click despliega (con animación) un selector de las 4 sedes con sus números, cada uno como link wa.me estático — sin lógica de detección de ubicación del usuario.

Dirección de motion (aplicar en todo el sitio):

- Scroll-triggered reveals (fade + slide-up) en cada sección al entrar en viewport.

- Nav sticky que reduce altura y agrega sombra al hacer scroll.

- Microinteracciones en botones y tarjetas (hover con escala/sombra suave, transición 200-300ms).

- Transiciones suaves entre estados (selector de especie, apertura del WhatsApp flotante).

- Animación de conteo/contador en las insignias de confianza del hero.

- Carrusel o slider con transición fluida en la sección de sedes.

- Nada de animaciones que dependan de datos reales o estado de backend — todo debe poder correr con contenido estático.

Fotografía (dirección, usar placeholders de alta calidad que respeten esto):

- Bovinos: razas de trópico alto/medio (Holstein, Normando, Jersey), en potrero, limpios.

- Equinos: Caballo Criollo Colombiano (Paso Fino, Trocha, Galope), en movimiento.

- Veterinario en acción: aplicando vacunas, revisando en manga de manejo, uniforme limpio.

- Sedes: fachadas y bodegas/cuartos fríos ordenados.

Mobile-first: el diseño debe verse impecable y liviano en móvil (la mayoría del tráfico real es rural, 3G/4G) — prioriza imágenes optimizadas y animaciones performantes (CSS/transform, no animaciones pesadas basadas en JS costoso).

Nota final para el generador: deja comentarios tipo // TODO: conectar backend en cada punto donde el original requeriría lógica real (formularios, filtros, buscador, cotizador), para que el desarrollo posterior vía GitHub sepa exactamente dónde intervenir.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://mare-ltda.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e693d75d-402f-49d5-82d6-d5813c432da4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
