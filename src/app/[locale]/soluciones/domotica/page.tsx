'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowLeft, MessageCircle, Home, CheckCircle2, Smartphone, Zap, Shield } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { SmartHomeIllustration } from '@/components/illustrations';

const features = [
  {
    icon: Smartphone,
    title: 'Control Centralizado',
    description: 'Manejá iluminación, climatización, persianas y más desde una sola app.',
  },
  {
    icon: Zap,
    title: 'Eficiencia Energética',
    description: 'Automatización inteligente que reduce el consumo energético de tu hogar.',
  },
  {
    icon: Shield,
    title: 'Seguridad Integrada',
    description: 'Sistemas de seguridad que se integran con la domótica para mayor protección.',
  },
];

function FeatureCard({ icon: Icon, title, description, index }: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });
  const background = useMotionTemplate`radial-gradient(200px circle at ${springX}px ${springY}px, rgba(203, 212, 191, 0.06), transparent 80%)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      className="group relative rounded-2xl overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-10"
        style={{ background: background as unknown as string }}
      />
      <div className="relative z-20 p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 group-hover:border-[#CBD4BF]/20 transition-all duration-500">
        <motion.div
          className="w-12 h-12 rounded-xl bg-[#CBD4BF]/10 flex items-center justify-center mb-5"
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.4 }}
        >
          <Icon size={22} className="text-[#A9C1A9]" />
        </motion.div>
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#CBD4BF] transition-colors">{title}</h3>
        <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function DomoticaPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#A9C1A9] hover:text-[#CBD4BF] transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Volver al Inicio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CBD4BF]/10 border border-[#CBD4BF]/20 mb-6">
                <Home size={16} className="text-[#A9C1A9]" />
                <span className="text-sm font-medium text-[#A9C1A9]">Domótica</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Domótica Profesional
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                La domótica permite automatizar y centralizar el control de los distintos sistemas del hogar, desde una app o control remoto.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Esto brinda comodidad, seguridad, eficiencia energética y una experiencia totalmente personalizada que incluye diseño, instalación, configuración, soporte y post-venta.
              </p>
            </div>

            <div className="h-72 sm:h-96 flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#CBD4BF]/5 to-transparent">
              <SmartHomeIllustration className="w-full max-w-sm" />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">
              ¿Por qué elegir domótica profesional?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="mb-16 p-8 sm:p-10 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-4">
              Domótica Profesional vs IoT
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              A diferencia de los sistemas IOT (Internet of Things), la domótica profesional cuenta con un seguimiento proactivo de los productos instalados, post venta personalizado y actualizaciones constantes del sistema.
            </p>
            <div className="space-y-3">
              {[
                'Sistemas centralizados y escalables (Control4, KNX, Lutron)',
                'Arquitecturas cableadas combinadas con inalámbricas',
                'Seguimiento proactivo y actualizaciones constantes',
                'Post venta personalizado y soporte técnico continuo',
                'Experiencia inmersiva, no solo instalación de productos',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-[#A9C1A9] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#CBD4BF]/10 via-[#A9C1A9]/5 to-transparent border border-[#CBD4BF]/10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Viví la experiencia
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto mb-8">
              Te invitamos a nuestro showroom para que vivas la experiencia por vos mismo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/5491137844697"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-[#CBD4BF] text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-[#A9C1A9] transition-colors"
              >
                <MessageCircle size={20} />
                Contactanos
              </a>
              <Link
                href="/soluciones/catalogo-de-productos"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-lg border border-white/10 text-white hover:bg-white/5 transition-colors"
              >
                Ver Catálogo
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
