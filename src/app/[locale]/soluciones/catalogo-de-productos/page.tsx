'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ArrowLeft, MessageCircle, ExternalLink, Package } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { brandCatalogs } from '@/lib/catalog-data';

const brandLogos: Record<string, string> = {
  'control4': '/images/brands/control4.png',
  'sonos': '/images/brands/sonos.png',
  'yale': '/images/brands/yale.svg',
  'bond': '/images/brands/bond.png',
  'denon': '/images/brands/denon.png',
  'yamaha': '/images/brands/yamaha.jpg',
  'tplink': '/images/brands/tplink.png',
  'truaudio': '/images/brands/truaudio.png',
  'vssl': '/images/brands/vssl.png',
  'shelly': '/images/brands/shelly.png',
};

function BrandCard({ brand, index }: { brand: typeof brandCatalogs[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });
  const background = useMotionTemplate`radial-gradient(200px circle at ${springX}px ${springY}px, rgba(203, 212, 191, 0.08), transparent 80%)`;
  const logoSrc = brandLogos[brand.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      className="group relative block rounded-2xl overflow-hidden"
    >
      <Link href={`/soluciones/catalogo-de-productos/${brand.id}`} className="block h-full">
        <motion.div
          className="absolute inset-0 z-10"
          style={{ background: background as unknown as string }}
        />
        <motion.div
          className="relative z-20 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 group-hover:border-[#CBD4BF]/20 transition-all duration-500 h-full"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-center p-8 pb-4 bg-gradient-to-b from-[#CBD4BF]/5 to-transparent">
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt={brand.name}
                width={160}
                height={60}
                className="h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            ) : (
              <div className="w-14 h-14 rounded-xl bg-[#CBD4BF]/10 flex items-center justify-center">
                <Package size={26} className="text-[#A9C1A9]" />
              </div>
            )}
          </div>
          <div className="px-8 pb-8">
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#CBD4BF] transition-colors duration-300">
              {brand.name}
            </h3>
            <p className="text-sm text-neutral-400 mb-3">{brand.description}</p>
            <p className="text-xs text-[#A9C1A9] mb-4">
              {brand.products.length} productos
            </p>
            <motion.span
              className="inline-flex items-center gap-2 text-sm font-medium text-[#A9C1A9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span className="px-4 py-2 rounded-full bg-[#CBD4BF]/10 border border-[#CBD4BF]/20 group-hover:bg-[#CBD4BF]/20 transition-colors">
                Ver productos
              </span>
              <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function CatalogoPage() {
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
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#A9C1A9] uppercase tracking-wider mb-3">
              Productos
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Catálogo de Productos
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Explorá nuestra selección de productos premium de las mejores marcas del mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {brandCatalogs.map((brand, index) => (
              <BrandCard key={brand.id} brand={brand} index={index} />
            ))}
          </div>

          <div className="text-center p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#CBD4BF]/10 via-[#A9C1A9]/5 to-transparent border border-[#CBD4BF]/10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Accedé al catálogo completo
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto mb-8">
              Solicitanos acceso y descubrí todos los productos que podemos ofrecerte para tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://docs.google.com/folderview?id=0ACEiYLu7z8_FUk9PVA"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-[#CBD4BF] text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-[#A9C1A9] transition-colors"
              >
                <ExternalLink size={20} />
                Ver Catálogo en Google Drive
              </a>
              <a
                href="https://wa.me/5491137844697"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-lg border border-white/10 text-white hover:bg-white/5 transition-colors"
              >
                <MessageCircle size={20} />
                Solicitar Acceso
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
