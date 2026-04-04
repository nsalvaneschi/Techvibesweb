import type { Metadata } from 'next';

const BASE_URL = 'https://www.techvibes.ar';

export function generateMetadata({
  title,
  description,
  path = '',
  locale = 'es',
}: {
  title: string;
  description: string;
  path?: string;
  locale?: string;
}): Metadata {
  const fullTitle = `${title} | TechVibes`;
  const url = `${BASE_URL}/${locale}${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: 'website',
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      siteName: 'TechVibes',
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'TechVibes - Tecnología Inteligente para tu Hogar',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${BASE_URL}/og-image.jpg`],
    },
    alternates: {
      canonical: url,
    },
  };
}
