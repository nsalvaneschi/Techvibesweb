import { Inter, Playfair_Display } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import DynamicBackground from '@/components/DynamicBackground';
import CursorFollower from '@/components/CursorFollower';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { organizationSchema, localBusinessSchema, getServiceSchemas } from '@/lib/structured-data';
import './globals.css';

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'TechVibes | Tecnología Inteligente para tu Hogar',
    template: '%s | TechVibes',
  },
  description: 'Transformamos tu hogar en un espacio inteligente, conectado y seguro. Domótica, seguridad, redes y entretenimiento.',
  keywords: ['domótica', 'smart home', 'tecnología', 'seguridad', 'redes', 'audio video', 'automatización', 'Control4', 'Sonos', 'Yale'],
  authors: [{ name: 'TechVibes', url: 'https://www.techvibes.ar' }],
  creator: 'TechVibes',
  publisher: 'TechVibes',
  metadataBase: new URL('https://www.techvibes.ar'),
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.techvibes.ar',
    siteName: 'TechVibes',
    title: 'TechVibes | Tecnología Inteligente para tu Hogar',
    description: 'Transformamos tu hogar en un espacio inteligente, conectado y seguro.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'TechVibes - Tecnología Inteligente para tu Hogar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechVibes | Tecnología Inteligente para tu Hogar',
    description: 'Transformamos tu hogar en un espacio inteligente, conectado y seguro.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {getServiceSchemas().map(function(schema, index) {
          return (
            <script
              key={index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          );
        })}
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <DynamicBackground />
        <CursorFollower />
        <FloatingWhatsApp />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
