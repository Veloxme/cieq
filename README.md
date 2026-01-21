# CIEQ - Landing Page

Landing page moderna y premium para **Comercializadora Integral de Equipo Hospitalario S. de R.L. de C.V.**

## 🚀 Stack Tecnológico

- **Framework**: Astro 4.x
- **Estilos**: Tailwind CSS
- **Animaciones**: GSAP + ScrollTrigger
- **Tipografía**: Inter + Plus Jakarta Sans (Google Fonts)

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn

## 🛠️ Instalación

```bash
# Clonar o descargar el proyecto
cd cieq-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor de desarrollo se iniciará en `http://localhost:4321`

## 🏗️ Comandos Disponibles

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia servidor de desarrollo en `localhost:4321`|
| `npm run build`           | Genera build de producción en `./dist/`         |
| `npm run preview`         | Preview del build de producción localmente       |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |

## 📁 Estructura del Proyecto

```
cieq-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── TrustBar.astro
│   │   ├── Solutions.astro
│   │   ├── Categories.astro
│   │   ├── Industries.astro
│   │   ├── Process.astro
│   │   ├── Testimonials.astro
│   │   ├── FAQ.astro
│   │   ├── ContactCTA.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── site.ts
│   ├── pages/
│   │   └── index.astro
│   └── scripts/
│       └── scroll-animations.ts
├── astro.config.mjs
├── tailwind.config.cjs
├── package.json
└── tsconfig.json
```

## ✨ Características

### Diseño y UX
- ✅ Diseño responsive mobile-first
- ✅ Animaciones suaves con scroll (GSAP + ScrollTrigger)
- ✅ Paleta de colores premium del sector salud
- ✅ Tipografía moderna y legible
- ✅ Micro-interacciones en botones y cards

### Funcionalidades
- ✅ Header sticky con efecto blur
- ✅ Navegación smooth scroll
- ✅ Barra de progreso de scroll
- ✅ Parallax en Hero
- ✅ Reveal animations por sección
- ✅ Stagger animations en cards
- ✅ Accordion accesible en FAQ
- ✅ Formulario de contacto con validación
- ✅ Botón scroll-to-top

### Accesibilidad
- ✅ Estructura semántica HTML5
- ✅ Labels y aria-labels apropiados
- ✅ Navegación por teclado
- ✅ Respeto a `prefers-reduced-motion`
- ✅ Contraste de colores WCAG AA

### Performance
- ✅ Lazy loading de imágenes
- ✅ Fonts optimizadas
- ✅ CSS compilado con Tailwind
- ✅ Build optimizado con Astro

### SEO
- ✅ Meta tags completos
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Contenido estructurado
- ✅ URLs amigables

## 🖼️ Imágenes

El proyecto incluye integración con imágenes de Unsplash. Para agregar las imágenes reales:

### Opción 1: Script Automático (Recomendado)
```bash
chmod +x download-images.sh
./download-images.sh
```

### Opción 2: Manual
Consulta el archivo `IMAGENES-UNSPLASH.md` para ver las URLs directas de descarga de cada imagen.

### Imágenes Placeholder
El proyecto incluye placeholders SVG para que funcione inmediatamente. Reemplázalas con imágenes reales de Unsplash para mejor calidad.

## 🎨 Personalización

### Datos del Sitio
Todos los datos del sitio se encuentran en `src/data/site.ts`. Puedes modificar:
- Información de contacto
- Contenido de secciones
- Categorías de productos
- Testimonios
- Preguntas frecuentes

### Colores
Los colores se configuran en `tailwind.config.cjs`:
- `primary`: Azul sanitario
- `teal`: Azul verdoso
- `success`: Verde de certificaciones

### Tipografía
Las fuentes se cargan desde Google Fonts en `src/pages/index.astro`:
- `Inter`: Fuente principal
- `Plus Jakarta Sans`: Fuente display para títulos

## 📧 Formulario de Contacto

El formulario en `ContactCTA.astro` actualmente simula el envío. Para implementar el envío real:

1. **Backend propio**: Conecta a tu API
2. **Formspree**: Servicio de formularios
3. **Netlify Forms**: Si usas Netlify
4. **Email directo**: Usando `mailto:` (no recomendado)

Ejemplo con fetch a API:

```javascript
const response = await fetch('https://tu-api.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

## 🚀 Deployment

### Netlify
```bash
npm run build
# Sube la carpeta dist/ a Netlify
```

### Vercel
```bash
npm run build
# Conecta tu repositorio con Vercel
```

### Build estático (cualquier hosting)
```bash
npm run build
# La carpeta dist/ contiene todo el sitio estático
```

## 📝 Notas Importantes

1. **Imágenes**: Agrega imágenes en `public/` y referencialas desde los componentes
2. **Favicon**: Reemplaza `public/favicon.svg` con tu logo
3. **Open Graph**: Agrega `public/og-image.jpg` para redes sociales
4. **Analytics**: Agrega Google Analytics o tu herramienta preferida en `index.astro`
5. **SSL**: Asegúrate de tener certificado SSL en producción

## 🔧 Solución de Problemas

### Las animaciones no funcionan
- Verifica que GSAP esté instalado: `npm install gsap`
- Revisa la consola del navegador por errores

### Tailwind no compila
- Ejecuta: `npx astro add tailwind`
- Reinicia el servidor de desarrollo

### Errores de TypeScript
- Ejecuta: `npm run astro check`
- Verifica que todos los imports sean correctos

## 📄 Licencia

Desarrollado para Comercializadora Integral de Equipo Hospitalario S. de R.L. de C.V.

## 👨‍💻 Soporte

Para dudas o soporte técnico, contacta a: cieqmzt@gmail.com

---

**Última actualización**: Enero 2025
