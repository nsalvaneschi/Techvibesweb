'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Package } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
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

export default function BrandCatalogPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: brandId } = use(params);
  const brand = brandCatalogs.find((b) => b.id === brandId);
  const logoSrc = brand ? brandLogos[brand.id] : null;

  if (!brand) {
    return (
      <section className="py-16 sm:py-24 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Marca no encontrada</h1>
        <Link href="/soluciones/catalogo-de-productos" className="text-[#A9C1A9] hover:text-[#CBD4BF]">
          Volver al catálogo
        </Link>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/soluciones/catalogo-de-productos"
          className="inline-flex items-center gap-2 text-sm text-[#A9C1A9] hover:text-[#CBD4BF] transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Volver al Catálogo
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16">
            <div className="flex items-center gap-6 mb-4">
              {logoSrc ? (
                <div className="w-20 h-20 rounded-2xl bg-[#CBD4BF]/10 flex items-center justify-center p-3">
                  <Image
                    src={logoSrc}
                    alt={brand.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-2xl bg-[#CBD4BF]/10 flex items-center justify-center">
                  <Package size={28} className="text-[#A9C1A9]" />
                </div>
              )}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">{brand.name}</h1>
                <p className="text-neutral-400 mt-1">{brand.description}</p>
              </div>
            </div>
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#A9C1A9] hover:text-[#CBD4BF] transition-colors mt-4"
            >
              <ExternalLink size={14} />
              Ver sitio oficial de {brand.name}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brand.products.map((product, index) => (
              <motion.a
                key={product.name}
                href={product.brandUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group block rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-[#CBD4BF]/20 transition-all overflow-hidden"
              >
                {product.image ? (
                  <div className="relative h-48 bg-gradient-to-br from-[#CBD4BF]/5 to-[#A9C1A9]/5 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-[#CBD4BF]/5 to-[#A9C1A9]/5 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-4 left-4 w-16 h-16 border border-[#CBD4BF] rounded-full" />
                      <div className="absolute bottom-4 right-4 w-12 h-12 border border-[#A9C1A9] rounded-full" />
                    </div>
                    <div className="relative z-10 text-center">
                      {logoSrc && (
                        <Image
                          src={logoSrc}
                          alt={brand.name}
                          width={60}
                          height={60}
                          className="w-14 h-14 object-contain mx-auto mb-2 opacity-40"
                        />
                      )}
                      <p className="text-xs text-[#A9C1A9] uppercase tracking-wider">{product.category}</p>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <span className="text-xs font-medium text-[#A9C1A9] uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-2 mb-2 group-hover:text-[#CBD4BF] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-[#A9C1A9] opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver en {brand.name} <ExternalLink size={14} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
