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
  email: 'info@techvibes.com.ar',
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
