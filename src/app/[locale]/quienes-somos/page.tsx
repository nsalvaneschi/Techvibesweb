'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MessageCircle, Mail, MapPin, Users, Award, Lightbulb, Home } from 'lucide-react';

export default function QuienesSomosPage() {
  const t = useTranslations('about');

  const values = t.raw('values');

  const iconMap: Record<string, React.ElementType> = {
    'Innovación': Lightbulb,
    'Experiencia': Award,
    'Calidad': Home,
    '+100 Casas': Users,
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-[#A9C1A9] uppercase tracking-wider mb-3">
            {t('sectionTitle')}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
            {t('subtitle')}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div className="space-y-6 text-neutral-300 leading-relaxed text-lg">
              {t('description').split('\n\n').map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value: { title: string; description: string }, index: number) => {
                const Icon = iconMap[value.title] || Award;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#CBD4BF]/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-[#A9C1A9]" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-neutral-500">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#CBD4BF]/5 border border-[#CBD4BF]/10">
            <h2 className="text-2xl font-semibold text-white mb-6">Contacto</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a
                href="mailto:info@techvibes.com.ar"
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
              >
                <Mail size={20} className="text-[#A9C1A9]" />
                info@techvibes.com.ar
              </a>
              <a
                href="https://wa.me/5491137844697"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
              >
                <MessageCircle size={20} className="text-[#A9C1A9]" />
                +54 9 11 3784-4697
              </a>
              <a
                href="https://g.co/kgs/NJbTZx8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors sm:col-span-2"
              >
                <MapPin size={20} className="text-[#A9C1A9]" />
                Mariano Castex 3869, Canning, Buenos Aires
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
