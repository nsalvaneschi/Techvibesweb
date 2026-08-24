'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Shield, CheckCircle2 } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { SecurityIllustration } from '@/components/illustrations';
import FeatureImageCard from '@/components/FeatureImageCard';

const features = [
  {
    image: '/images/soluciones/seguridad-camaras.png',
    title: 'Videovigilancia HD',
    description: 'Cámaras de alta definición con acceso remoto desde tu celular.',
  },
  {
    image: '/images/soluciones/seguridad-cerradura.png',
    title: 'Cerraduras Digitales',
    description: 'Control de acceso inteligente con cerraduras digitales de última generación.',
  },
  {
    image: '/images/soluciones/seguridad-alarma.png',
    title: 'Alarmas Inteligentes',
    description: 'Sistemas de alarma integrados con la domótica de tu hogar.',
  },
];

const seguridadSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'TechVibes - Seguridad Inteligente',
  description: 'Protegemos lo que más te importa integrando sistemas de seguridad modernos y eficientes. Alarmas inteligentes, cámaras HD, cerraduras digitales con control desde tu celular.',
  url: 'https://www.techvibes.ar/es/soluciones/seguridad',
  provider: {
    '@type': 'Organization',
    name: 'TechVibes',
    url: 'https://www.techvibes.ar',
    logo: 'https://www.techvibes.ar/images/TV_TLOGO06.png',
  },
  areaServed: 'Buenos Aires, Argentina',
  category: 'SecuritySystems',
  serviceType: 'Instalación de alarmas, videovigilancia HD, cerraduras digitales y sistemas de control de acceso',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'ARS',
      minPrice: '80000',
      maxPrice: '3000000',
    },
  },
};

export default function SeguridadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seguridadSchema) }}
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
                <Shield size={16} className="text-[#A9C1A9]" />
                <span className="text-sm font-medium text-[#A9C1A9]">Seguridad</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Seguridad Inteligente
              </h1>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                Protegemos lo que más te importa integrando sistemas de seguridad modernos y eficientes.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                Instalamos alarmas inteligentes, cámaras de videovigilancia de alta definición y cerraduras digitales que podés controlar desde tu celular, estés donde estés.
              </p>
            </div>

            <div className="h-72 sm:h-96 flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#CBD4BF]/5 to-transparent">
              <SecurityIllustration className="w-full max-w-sm" />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-8 text-center">
              Soluciones de seguridad integrales
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
              Seguridad integrada con domótica
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Nuestras soluciones se adaptan a hogares, oficinas y comercios, y pueden integrarse a sistemas de domótica para una gestión centralizada y automatizada.
            </p>
            <div className="space-y-3">
              {[
                'Cámaras HD con visión nocturna y detección de movimiento',
                'Alarmas inteligentes con notificaciones en tiempo real',
                'Cerraduras digitales con acceso por huella, código o app',
                'Integración con sistemas de domótica existentes',
                'Soporte técnico continuo y mantenimiento preventivo',
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
              Protegé tu hogar
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto mb-8">
              Contactanos para una evaluación de seguridad personalizada.
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
