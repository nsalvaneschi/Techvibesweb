import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.techvibes.ar';
  const locales = ['es', 'en'];
  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/marcas', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/quienes-somos', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/quienes-somos/politicas-de-privacidad', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/contacto', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/soluciones/ingenieria-de-planos', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/soluciones/domotica', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/soluciones/red-wifi', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/soluciones/seguridad', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/soluciones/soporte-tecnico', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/soluciones/audio-video', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/soluciones/catalogo-de-productos', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  }

  return sitemapEntries;
}
