# TechVibes Website

Sitio web de TechVibes rediseñado con estilo premium tipo josh.ai, optimizado para móvil y todos los browsers, completamente editable via Sanity CMS.

## Stack

- **Next.js 16** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilos
- **Framer Motion** - Animaciones suaves
- **next-intl** - Internacionalización (ES/EN)
- **Sanity CMS** - Panel de administración editable
- **Lucide React** - Iconos

## Desarrollo

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local

# Iniciar desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar producción
npm start
```

## Sanity CMS

1. Crear cuenta en [sanity.io](https://www.sanity.io)
2. Crear proyecto: `npm create sanity@latest`
3. Copiar `projectId` al `.env.local`
4. Acceder al CMS en `/studio`

### Contenido editable

- **Site Settings**: Logo, textos del hero, links sociales, WhatsApp
- **Solutions**: Servicios con título, descripción, icono, imagen, contenido completo
- **Brands**: Logos de marcas con orden de visualización
- **Blog Posts**: Artículos con imagen, contenido rico, fecha, autor

## Deploy en VPS

### Con Docker

```bash
# Copiar .env
cp .env.example .env

# Build y start
docker compose up -d --build
```

### Con Nginx reverse proxy

```nginx
server {
    listen 80;
    server_name techvibes.ar www.techvibes.ar;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## URLs

- **Inicio ES**: `/es`
- **Inicio EN**: `/en`
- **CMS Admin**: `/admin` (redirige a `/studio`)
- **Sanity Studio**: `/studio`

## Features

- Diseño dark premium estilo josh.ai
- Optimizado para móvil (responsive)
- Compatible con Chrome, Firefox, Safari, Edge
- Animaciones suaves con Framer Motion
- Bilingüe Español/Inglés
- CMS editable con Sanity
- SEO optimizado
- Accesibilidad (focus states, aria labels, semantic HTML)
- `prefers-reduced-motion` respetado
- Docker ready para VPS
- Safe areas para dispositivos con notch
