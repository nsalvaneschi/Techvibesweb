'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ClipboardList } from 'lucide-react';
import { Link } from '@/i18n/navigation';

const floatingWords = [
  { text: 'Domótica', href: '/soluciones/domotica', delay: 0 },
  { text: 'Seguridad', href: '/soluciones/seguridad', delay: 0.2 },
  { text: 'Redes', href: '/soluciones/red-wifi', delay: 0.4 },
  { text: 'Audio & Video', href: '/soluciones/audio-video', delay: 0.6 },
  { text: 'Ingeniería', href: '/soluciones/ingenieria-de-planos', delay: 0.8 },
];

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating words */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {floatingWords.map((word) => (
            <Link key={word.text} href={word.href}>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: word.delay, duration: 0.5 }}
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full border border-[#CBD4BF]/20 text-neutral-400 bg-black/30 backdrop-blur-sm hover:border-[#CBD4BF]/50 hover:text-[#CBD4BF] hover:bg-[#CBD4BF]/10 transition-colors cursor-pointer"
              >
                {word.text}
              </motion.span>
            </Link>
          ))}
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('title')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-6 sm:mt-8 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('subtitle')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://wa.me/5491137844697"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#CBD4BF] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-[#A9C1A9] transition-colors"
          >
            <MessageCircle size={20} />
            {t('cta')}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf44REeZhXq1fzytaJrMFqJjWgb_MhSpuYxmCBC-rgSRz5U8g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg border border-white/10 text-white hover:bg-white/5 transition-colors"
          >
            <ClipboardList size={20} />
            {t('ctaForm')}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 sm:mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
