'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

export default function ShowroomSection() {
  const t = useTranslations('showroom');

  const showrooms = [
    {
      title: t('canning.title'),
      detail: t('canning.detail'),
      address: t('canning.address'),
      mapUrl: 'https://www.google.com/maps/place/Del+Rio+Servicios+Canning/@-34.888381,-58.5093839,17z',
    },
    {
      title: t('sanIsidro.title'),
      detail: t('sanIsidro.detail'),
      address: t('sanIsidro.address'),
      mapUrl: 'https://www.google.com/maps/place/Patagonia+Flooring/@-34.4660179,-58.5138967,19z',
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-sm font-medium text-[#A9C1A9] uppercase tracking-wider mb-3">
            Visitá nuestros espacios
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            {t('sectionTitle')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {showrooms.map((showroom, index) => (
            <motion.div
              key={showroom.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
            >
              <div className="p-8 sm:p-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#CBD4BF]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-[#A9C1A9]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold mb-1">{showroom.title}</h3>
                    <p className="text-sm text-neutral-500 mb-3">{showroom.detail}</p>
                    <p className="text-sm text-neutral-400">{showroom.address}</p>
                  </div>
                </div>

                <a
                  href={showroom.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-[#A9C1A9] hover:text-[#CBD4BF] transition-colors"
                >
                  Ver en Google Maps
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#CBD4BF]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
