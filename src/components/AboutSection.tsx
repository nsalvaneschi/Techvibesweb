'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Lightbulb, Award, Home, Users } from 'lucide-react';

export default function AboutSection() {
  const t = useTranslations('about');

  const iconMap: Record<string, React.ElementType> = {
    'Innovación': Lightbulb,
    'Experiencia': Award,
    'Calidad': Home,
    '+100 Casas': Users,
  };

  const values = t.raw('values');

  return (
    <section id="quienes-somos" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-[#A9C1A9] uppercase tracking-wider mb-3">
              {t('sectionTitle')}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('subtitle')}
            </h2>
            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
              {t('description').split('\n\n').map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value: { title: string; description: string }, index: number) => {
              const Icon = iconMap[value.title] || Award;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
      </div>
    </section>
  );
}
