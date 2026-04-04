'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

export default function BrandsSection() {
  const t = useTranslations('brands');

  return (
    <section id="marcas" className="py-20 sm:py-32 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-sm font-medium text-[#A9C1A9] uppercase tracking-wider mb-3">
            Partners
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {t('sectionTitle')}
          </h2>
          <p className="mt-4 text-neutral-500 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {brandLogos.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-center p-6 sm:p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#CBD4BF]/20 transition-all group"
            >
              <div className="relative w-full h-12 flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={48}
                  className="max-h-10 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
