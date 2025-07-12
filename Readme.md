@menikmati/ui-library-v4
Librería de componentes UI estilizados con Tailwind CSS v4 para uso en proyectos web.
Incluye componentes básicos reutilizables como botones, tarjetas, navbar, header y footer.

Instalación
Puedes instalar la librería desde npm:

npm install @menikmati/ui-library-v4

Uso
Importa los estilos CSS en tu proyecto:

import '@menikmati/ui-library-v4/dist/styles.css';

Luego usa las clases CSS en tu HTML, JSX o Vue:

<button class="btn">Botón</button>

<div class="card">   <h2>Título de la tarjeta</h2>   <p>Contenido de ejemplo para la tarjeta.</p> </div> <nav class="navbar">   <div>Mi Sitio</div>   <div>     <a href="#" class="mr-4 hover:underline">Inicio</a>     <a href="#" class="hover:underline">Contacto</a>   </div> </nav>
Componentes incluidos
btn — Botón estilizado con colores personalizados y efectos hover

card — Tarjeta con borde redondeado, sombra y padding

navbar — Barra de navegación horizontal con fondo y texto estilizados

header — Encabezado grande y centrado

footer — Pie de página sencillo y centrado

Desarrollo
Para clonar y desarrollar localmente:

git clone https://github.com/menikmati/ui-library-v4.git
cd ui-library-v4
npm install
npm run build
npx serve .

Abre el navegador en http://localhost:3000 para ver la demo.

Licencia
MIT © Jimmy García

Contacto
Si tienes dudas o sugerencias, puedes contactarme en [tu-email@example.com] (opcional).

