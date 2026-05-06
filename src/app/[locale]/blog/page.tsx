'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  BlogEngineeringIllustration,
  BlogDomoticaIllustration,
  BlogIotIllustration,
  BlogControl4Illustration,
  BlogAudioVideoIllustration,
  BlogRealEstateIllustration,
  BlogEthernetIllustration,
} from '@/components/illustrations/blog';
import RelatedPagesSection from '@/components/RelatedPagesSection';

const illustrationMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'engineering': BlogEngineeringIllustration,
  'domotica': BlogDomoticaIllustration,
  'iot': BlogIotIllustration,
  'control4': BlogControl4Illustration,
  'audio': BlogAudioVideoIllustration,
  'realestate': BlogRealEstateIllustration,
  'ethernet': BlogEthernetIllustration,
};

const blogPosts = [
  {
    title: '¿Por qué es importante una ingeniería Domótica?',
    excerpt: 'Permite coordinar desde el principio la infraestructura necesaria (cañerías, bandejas, espacios técnicos) con los arquitectos, ingenieros civiles y eléctricos.',
    date: '2025-04-25',
    url: 'https://www.linkedin.com/pulse/porqu%C3%A9-es-importante-una-ingenier%C3%ADa-dom%C3%B3tica-nicol%C3%A1s-salvaneschi-lcauf/',
    illustration: 'engineering',
  },
  {
    title: '¿Qué sabés de Domótica Profesional?',
    excerpt: 'La domótica profesional es un campo que abarca el diseño, instalación y configuración de sistemas automatizados para viviendas, oficinas o edificios, con el objetivo de mejorar la eficiencia energética, la comodidad, la seguridad y el entretenimiento.',
    date: '2025-04-22',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7320169940282441729',
    illustration: 'domotica',
  },
  {
    title: '¿Cuál es la diferencia entre IoT y la Domótica Profesional?',
    excerpt: 'En el mundo de los espacios inteligentes, estos términos suelen confundirse, pero la diferencia es fundamental. IoT: soluciones puntuales. Domótica profesional: sistemas robustos e integrados.',
    date: '2025-04-24',
    url: 'https://www.linkedin.com/posts/nicosalvaneschi_iot-domaejtica-techvibesabrar-activity-7321865641131450369-8iXF/',
    illustration: 'iot',
  },
  {
    title: 'Lux by Control4: Teclados y llaves de diseño',
    excerpt: 'Introducing Lux by Control4, our collection of elegant keypads, dimmers, switches and outlets crafted to ignite inspiration and harmonize with your style.',
    date: '2025-05-15',
    url: 'https://www.linkedin.com/posts/control4_introducing-lux-by-control4-our-collection-activity-7328802202326597632-Kfgn/',
    illustration: 'control4',
  },
  {
    title: 'Audio y Video en el Hogar',
    excerpt: 'El mundo del audio y video en el hogar es impresionante. Sistemas de proyección, pantallas, audio multiroom, Home Theater y Cine.',
    date: '2025-04-29',
    url: 'https://www.linkedin.com/posts/alejandroquiroga_el-mundo-del-audio-y-video-en-el-hogar-es-activity-7322987733998546945-89gS/',
    illustration: 'audio',
  },
  {
    title: 'Domótica Profesional aplicada al Real Estate',
    excerpt: 'Desde una Desarrolladora de Real State, hasta un Electricista, o desde una empresa de Climatización hasta una de Seguridad, todos pueden ser parte de este modelo de negocios.',
    date: '2025-04-22',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7320431262156902402',
    illustration: 'realestate',
  },
  {
    title: 'Ethernet y su aplicación en Desarrollos de Viviendas',
    excerpt: '¿Por qué el Wireless no siempre es la mejor opción? Ventajas de tener conectados por cable de red (Ethernet) la mayor cantidad de aparatos fijos.',
    date: '2025-04-24',
    url: 'https://www.linkedin.com/posts/nicosalvaneschi_ethernet-y-su-aplicaci%C3%B3n-en-desarrollos-de-activity-7321476824016801793-uQB_/',
    illustration: 'ethernet',
  },
];

export default function BlogPage() {
  const relatedPages = [
    { label: 'Domótica', href: '/soluciones/domotica', icon: 'Home' },
    { label: 'Seguridad', href: '/soluciones/seguridad', icon: 'Shield' },
    { label: 'Red WiFi', href: '/soluciones/red-wifi', icon: 'Wifi' },
    { label: 'Audio & Video', href: '/soluciones/audio-video', icon: 'MonitorSpeaker' },
    { label: 'Marcas', href: '/marcas', icon: 'FileText' },
  ];

  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm text-[#A9C1A9] hover:text-[#CBD4BF] transition-colors mb-12"
          >
            <ArrowRight size={16} className="rotate-180" />
            Volver al Inicio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-[#A9C1A9] uppercase tracking-wider mb-3">
              Últimas publicaciones
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Noticias, tendencias y consejos sobre tecnología para el hogar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => {
              const Illustration = illustrationMap[post.illustration] || BlogEngineeringIllustration;
              return (
                <motion.a
                  key={post.title}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="group block rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-[#CBD4BF]/20 transition-all overflow-hidden"
                >
                  <div className="h-44 bg-gradient-to-b from-[#CBD4BF]/5 to-transparent flex items-center justify-center p-4">
                    <Illustration className="w-full h-full max-w-[200px]" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-neutral-600 mb-3">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString('es-AR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#A9C1A9] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-neutral-500 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-[#A9C1A9] opacity-0 group-hover:opacity-100 transition-opacity">
                      Leer en LinkedIn <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
      <RelatedPagesSection pages={relatedPages} />
    </>
  );
}
