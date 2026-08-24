'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Wrench, CheckCircle2 } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { SupportIllustration } from '@/components/illustrations';
import FeatureImageCard from '@/components/FeatureImageCard';

const features = [
  {
    image: '/images/soluciones/soporte-remoto.png',
    title: 'Soporte Remoto',
    description: 'Resolución rápida de inconvenientes mediante asistencia remota especializada.',
  },
  {
    image: '/images/soluciones/soporte-presencial.png',
    title: 'Asistencia Presencial',
    description: 'Equipo técnico a tu disposición.',
  },
  {
    image: '/images/soluciones/soporte-guardias.png',
    title: 'Guardias Activas',
    description: 'Atención prioritaria según el nivel de suscripción contratado.',
  },
];

const soporteTecnicoSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'TechVibes - Soporte Técnico Especializado',
  description: 'Soporte técnico presencial y remoto para domótica, audio profesional y telecomunicaciones. Guardias activas, atención prioritaria, +10 años de experiencia. Canning, San Isidro y zona norte.',
  url: 'https://www.techvibes.ar/es/soluciones/soporte-tecnico',
  provider: {
    '@type': 'Organization',
    name: 'TechVibes',
    url: 'https://www.techvibes.ar',
    logo: 'https://www.techvibes.ar/images/TV_TLOGO06.png',
  },
  areaServed: 'Buenos Aires, Argentina',
  category: 'TechnicalSupport',
  serviceType: 'Mantenimiento preventivo, soporte remoto, guardias activas, actualizaciones de firmware y configuración de sistemas smart home',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'ARS',
      minPrice: '15000',
      maxPrice: '500000',
    },
  },
};

export default function SoporteTecnicoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(soporteTecnicoSchema) }}
      />
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
                <Wrench size={16} className="text-[#A9C1A9]" />
                <span className="text-sm font-medium text-[#A9C1A9]">Soporte</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Soporte Técnico
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                No solo instalamos tecnología de vanguardia, también garantizamos su funcionamiento óptimo a lo largo del tiempo.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Contamos con un equipo técnico altamente capacitado, con más de 10 años de experiencia en domótica, sistemas de audio profesional y telecomunicaciones.
              </p>
            </div>

            <div className="h-72 sm:h-96 flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#CBD4BF]/5 to-transparent">
              <SupportIllustration className="w-full max-w-sm" />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">
              Soporte especializado
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureImageCard
                  key={feature.title}
                  image={feature.image}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="mb-16 p-8 sm:p-10 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-4">
              +10 años de experiencia
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Brindamos asistencia tanto presencial como remota, adaptándonos a las necesidades de cada cliente.
            </p>
            <div className="space-y-3">
              {[
                'Asistencia presencial y remota personalizada',
                'Servicio online para resolución ágil de inconvenientes',
                'Guardias técnicas activas con atención prioritaria',
                'Niveles de suscripción según tus necesidades',
                'Más de 10 años de experiencia en el rubro',
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
              ¿Necesitás asistencia técnica?
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto mb-8">
              Para más información contactanos a info@techvibes.com.ar
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
    </>
  );
}
