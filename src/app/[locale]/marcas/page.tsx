'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';
import RelatedPagesSection from '@/components/RelatedPagesSection';

const brandLogos = [
  { name: 'Control4', src: '/brands/control4.png', alt: 'Control4' },
  { name: 'TruAudio', src: '/brands/truaudio.png', alt: 'TruAudio' },
  { name: 'Shelly', src: '/brands/shelly.png', alt: 'Shelly' },
  { name: 'Snap One', src: '/brands/snapone.png', alt: 'Snap One' },
  { name: 'Sonos', src: '/brands/sonos.png', alt: 'Sonos' },
  { name: 'VSSL', src: '/brands/vssl.png', alt: 'VSSL' },
  { name: 'Denon', src: '/brands/denon.png', alt: 'Denon' },
  { name: 'Yamaha', src: '/brands/yamaha.jpg', alt: 'Yamaha' },
  { name: 'TP-Link', src: '/brands/tplink.svg', alt: 'TP-Link' },
  { name: 'Yale', src: '/brands/yale.svg', alt: 'Yale' },
];

export default function MarcasPage() {
  const t = useTranslations('brands');

  const relatedPages = [
    { label: 'Domótica', href: '/soluciones/domotica', icon: 'Home' },
    { label: 'Seguridad', href: '/soluciones/seguridad', icon: 'Shield' },
    { label: 'Red WiFi', href: '/soluciones/red-wifi', icon: 'Wifi' },
    { label: 'Audio & Video', href: '/soluciones/audio-video', icon: 'MonitorSpeaker' },
    { label: 'Contacto', href: '/contacto', icon: 'Wrench' },
  ];

  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-[#A9C1A9] uppercase tracking-wider mb-3">
              Partners
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t('sectionTitle')}
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              {t('subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mb-16">
            {brandLogos.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-center p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#CBD4BF]/20 transition-all group"
              >
                <div className="relative w-full h-16 flex items-center justify-center">
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={120}
                    height={64}
                    className="max-h-12 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/5491137844697"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#CBD4BF] text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-[#A9C1A9] transition-colors"
            >
              <MessageCircle size={22} />
              Consultanos sobre marcas y productos
            </a>
          </div>
        </div>
      </section>
      <RelatedPagesSection pages={relatedPages} />
    </>
  );
}
