# Metalúrgica Pipo - Landing Page Moderna

## 📋 Descripción
Landing page moderna y responsive para Metalúrgica Pipo, distribuidora oficial de equipamiento gastronómico profesional Bergner. Diseñada con enfoque **Mobile First**, conversión a WhatsApp y SEO.

## 🎯 Características

✅ **Responsividad Total** - Funciona perfecto en móvil, tablet y desktop  
✅ **Mobile First** - Optimizado primero para celulares  
✅ **Conversión a WhatsApp** - Botón flotante + CTAs en cada página  
✅ **Rápido** - HTML estático puro generado por Astro  
✅ **SEO Friendly** - Meta tags, sitemap, estructura semántica  
✅ **Diseño Moderno** - Tailwind CSS, animaciones suaves, UX intuitiva  

## 📁 Estructura del Proyecto

```
src/
├── pages/              # Páginas públicas
│   ├── index.astro    # Home
│   ├── productos.astro # Catálogo
│   ├── nosotros.astro # About
│   └── contacto.astro # Contacto
├── components/         # Componentes reutilizables
│   ├── Header.astro
│   ├── Hero.astro
│   ├── ProductCard.astro
│   ├── CategoryGrid.astro
│   └── Footer.astro
├── layouts/           # Layouts
│   └── Layout.astro   # Layout principal
└── styles/            # Estilos globales
    └── global.css
```

## 🚀 Cómo Empezar

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```
Luego abre `http://localhost:3000`

### Build para Producción
```bash
npm run build
```

## 🎨 Personalización

### 1. **Colores de la Marca**
En `tailwind.config.mjs`, ajusta:
```javascript
colors: {
  bergner: {
    red: '#C41E3A',    // Color rojo de Bergner
    dark: '#1a1a1a',
    light: '#f8f8f8',
  }
}
```

### 2. **Número de WhatsApp**
Busca y reemplaza `5491100000000` en todos los archivos por tu número real (sin +).

### 3. **Contacto e Información**
Actualiza en:
- [src/components/Footer.astro](src/components/Footer.astro) - Datos de contacto
- [src/pages/contacto.astro](src/pages/contacto.astro) - Formulario y dirección

### 4. **Productos**
En [src/pages/productos.astro](src/pages/productos.astro), reemplaza el array `productos`:
```javascript
const productos = [
  {
    id: 1,
    title: 'Nombre del Producto',
    category: 'Categoría',
    description: 'Descripción breve',
    image: 'url-de-imagen.jpg',
    whatsappMessage: 'Mensaje pre-cargado'
  }
]
```

### 5. **Agregar Imágenes**
- Coloca imágenes en `public/` (por ejemplo: `public/productos/olla-1.jpg`)
- Referencia en los productos: `image: "/productos/olla-1.jpg"`

## 📱 Páginas Incluidas

### Home (`/`)
- Hero impactante con CTA
- Grid de categorías
- Estadísticas de la empresa

### Productos (`/productos`)
- Catálogo en grilla responsiva
- Tarjetas de producto con botón WhatsApp
- Filtrado por categoría (base para expandir)

### Nosotros (`/nosotros`)
- Historia de la empresa
- Valores y misión
- CTA a contacto

### Contacto (`/contacto`)
- Información de contacto
- Formulario (integrado con Formspree)
- Mapa (placeholder para Google Maps)
- Links a redes sociales

## ⚙️ Integraciones Pendientes

1. **Formspree** - Para formulario de contacto
   - Crea cuenta en [formspree.io](https://formspree.io)
   - Reemplaza `YOUR_FORM_ID` en [src/pages/contacto.astro](src/pages/contacto.astro#L95)

2. **Google Maps** - Para ubicación
   - Genera embed en [Google Maps](https://www.google.com/maps)
   - Pega en sección Ubicación de contacto.astro

3. **Analytics** - Google Analytics / Hotjar
   - Agregable en `Layout.astro` <head>

4. **CMS** - Para gestionar productos
   - Opciones: Sanity, Contentful, Strapi, o CMS headless

## 🎯 Próximos Pasos Sugeridos

1. ✅ Reemplazar placeholder con logo SVG de Bergner
2. ✅ Agregar fotos reales de productos (formato WebP)
3. ✅ Completar número de WhatsApp
4. ✅ Integrar Formspree para formulario
5. ✅ Agregar Google Analytics
6. ✅ Crear sitemap.xml para SEO
7. ✅ Implementar blog (opcional)
8. ✅ Configurar Google Search Console

## 📊 SEO Básico

- ✅ Meta descriptions en cada página
- ✅ Títulos optimizados
- ✅ Estructura semántica HTML
- ✅ URLs amigables
- ✅ Open Graph para redes sociales

## 🔒 Performance

- Astro genera HTML estático → Carga ultrarrápida
- Tailwind CSS → CSS optimizado (solo lo que usas)
- Imágenes en WebP → Menos peso, más velocidad
- Zero JavaScript innecesario

## 📦 Deployment

Opciones recomendadas:
- **Vercel** (ideal para Astro)
- **Netlify** (excelente soporte)
- **GitHub Pages** (gratis, simple)

Ejemplo Vercel:
```bash
npm install -g vercel
vercel
```

## 💡 Tips

- Usa inspector de DevTools para testing móvil
- WebP para imágenes: `cwebp -q 80 imagen.jpg -o imagen.webp`
- Para HTTPS gratis: Vercel/Netlify lo incluyen
- Mide velocidad: [PageSpeed Insights](https://pagespeed.web.dev/)

## 📞 Soporte

Para preguntas sobre Astro: [docs.astro.build](https://docs.astro.build)  
Para Tailwind: [tailwindcss.com](https://tailwindcss.com)

---

**Hecho con ❤️ para Metalúrgica Pipo | 2026**
