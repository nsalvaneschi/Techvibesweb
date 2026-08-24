export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TechVibes',
  url: 'https://www.techvibes.ar',
  logo: 'https://www.techvibes.ar/images/TV_TLOGO06.png',
  description: 'Empresa especializada en domótica, seguridad, redes y audio/video para hogares inteligentes.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mariano Castex 3869',
    addressLocality: 'Canning',
    addressRegion: 'Buenos Aires',
    postalCode: 'B1801DHJ',
    addressCountry: 'AR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+54-9-11-3784-4697',
    contactType: 'customer service',
    email: 'info@techvibes.ar',
    availableLanguage: ['Spanish', 'English'],
  },
  sameAs: [
    'https://www.instagram.com/techvibes_ar/?hl=es-la',
    'https://www.linkedin.com/company/techvibes-canning',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'TechVibes',
  image: 'https://www.techvibes.ar/images/TV_TLOGO06.png',
  url: 'https://www.techvibes.ar',
  telephone: '+54-9-11-3784-4697',
  email: 'info@techvibes.ar',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mariano Castex 3869',
    addressLocality: 'Canning',
    addressRegion: 'Buenos Aires',
    postalCode: 'B1801DHJ',
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.888381,
    longitude: -58.5093839,
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '$$',
  areaServed: 'Buenos Aires, Argentina',
};

interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(function(item) {
      return {
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      };
    }),
  };
}

const services = [
  {
    name: 'Domótica',
    description: 'Instalación de sistemas KNX, control de iluminación, cortinas motorizadas, persianas inteligentes, sensores de presencia, climatización inteligente y automatización integral del hogar.',
    url: 'https://www.techvibes.ar/es/soluciones/domotica',
    category: 'HomeAutomation',
  },
  {
    name: 'Seguridad',
    description: 'Cámaras IP, sistemas de alarma, sensores de movimiento, cercos perimetrales, alarmas técnicas (gas, humo, inundación) y monitoreo 24/7 para hogares y comercios.',
    url: 'https://www.techvibes.ar/es/soluciones/seguridad',
    category: 'SecuritySystems',
  },
  {
    name: 'Red WiFi',
    description: 'Redes WiFi mesh, Access Points UniFi, switches PoE, cableado estructurado y redes para hogares y oficinas con cobertura total sin zonas muertas.',
    url: 'https://www.techvibes.ar/es/soluciones/red-wifi',
    category: 'NetworkService',
  },
  {
    name: 'Audio & Video',
    description: 'Audio multiroom, Home Theater, barras de sonido, video portero IP, sistemas de intercomunicación y distribución de audio/video en todo el hogar.',
    url: 'https://www.techvibes.ar/es/soluciones/audio-video',
    category: 'Entertainment',
  },
  {
    name: 'Soporte Técnico',
    description: 'Soporte técnico presencial y remoto en Canning, San Isidro y zona norte de Buenos Aires. Mantenimiento de sistemas smart home, redes y equipos de seguridad.',
    url: 'https://www.techvibes.ar/es/soluciones/soporte-tecnico',
    category: 'TechnicalSupport',
  },
];

export function getServiceSchemas() {
  return services.map(function(service) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'TechVibes - ' + service.name,
      description: service.description,
      url: service.url,
      provider: {
        '@type': 'Organization',
        name: 'TechVibes',
        url: 'https://www.techvibes.ar',
      },
      areaServed: 'Buenos Aires, Argentina',
      category: service.category,
    };
  });
}
