'use client';

import { useTranslations } from 'next-intl';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import {
  BlueprintIllustration,
  SmartHomeIllustration,
  NetworkIllustration,
  SecurityIllustration,
  SupportIllustration,
  AudioVideoIllustration,
} from '@/components/illustrations';

const illustrationMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'FileText': BlueprintIllustration,
  'Home': SmartHomeIllustration,
  'Wifi': NetworkIllustration,
  'Shield': SecurityIllustration,
  'Wrench': SupportIllustration,
  'MonitorSpeaker': AudioVideoIllustration,
};

interface SolutionCardProps {
  Illustration: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
  href: string;
}

function SolutionCard({ Illustration, title, description, index, href }: SolutionCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });
  const background = useMotionTemplate`radial-gradient(200px circle at ${springX}px ${springY}px, rgba(203, 212, 191, 0.08), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative block rounded-2xl overflow-hidden"
    >
      <Link href={href} className="block h-full">
        <motion.div
          className="absolute inset-0 z-10"
          style={{ background }}
        />

        <motion.div
          className="relative z-20 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 group-hover:border-[#CBD4BF]/20 transition-all duration-500 h-full"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="relative h-48 sm:h-56 flex items-center justify-center p-6 bg-gradient-to-b from-[#CBD4BF]/5 to-transparent overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#CBD4BF]/10 via-transparent to-[#A9C1A9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <Illustration className="w-full h-full max-w-[200px] max-h-[160px]" />
            </motion.div>
          </div>

          <div className="p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#CBD4BF] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-5">{description}</p>

            <motion.span
              className="inline-flex items-center gap-2 text-sm font-medium text-[#A9C1A9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              <span className="px-4 py-2 rounded-full bg-[#CBD4BF]/10 border border-[#CBD4BF]/20 group-hover:bg-[#CBD4BF]/20 transition-colors">
                Ver más
              </span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function SolutionsSection() {
  const t = useTranslations('solutions');

  const solutions = [
    {
      icon: 'FileText',
      title: t('ingenieria.title'),
      description: t('ingenieria.description'),
      href: '/soluciones/ingenieria-de-planos',
    },
    {
      icon: 'Home',
      title: t('domotica.title'),
      description: t('domotica.description'),
      href: '/soluciones/domotica',
    },
    {
      icon: 'Wifi',
      title: t('red.title'),
      description: t('red.description'),
      href: '/soluciones/red-wifi',
    },
    {
      icon: 'Shield',
      title: t('seguridad.title'),
      description: t('seguridad.description'),
      href: '/soluciones/seguridad',
    },
    {
      icon: 'Wrench',
      title: t('soporte.title'),
      description: t('soporte.description'),
      href: '/soluciones/soporte-tecnico',
    },
    {
      icon: 'MonitorSpeaker',
      title: t('audioVideo.title'),
      description: t('audioVideo.description'),
      href: '/soluciones/audio-video',
    },
  ];

  return (
    <section id="soluciones" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-sm font-medium text-[#A9C1A9] uppercase tracking-wider mb-3">
            {t('sectionTitle')}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {t('sectionSubtitle')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {solutions.map((solution, index) => {
            const Illustration = illustrationMap[solution.icon] || SmartHomeIllustration;
            return (
              <SolutionCard
                key={solution.title}
                Illustration={Illustration}
                title={solution.title}
                description={solution.description}
                index={index}
                href={solution.href}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
