'use client';

import { useTranslations } from 'next-intl';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const ts = useTranslations('solutions');

  const solutions = [
    { label: ts('ingenieria.title'), href: '/soluciones/ingenieria-de-planos' },
    { label: ts('domotica.title'), href: '/soluciones/domotica' },
    { label: ts('red.title'), href: '/soluciones/red-wifi' },
    { label: ts('seguridad.title'), href: '/soluciones/seguridad' },
    { label: ts('soporte.title'), href: '/soluciones/soporte-tecnico' },
    { label: ts('audioVideo.title'), href: '/soluciones/audio-video' },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3" aria-label="TechVibes Home">
              <Image
                src="/images/TV_TLOGO06.png"
                alt="TechVibes"
                width={160}
                height={36}
                className="h-9 w-auto"
              />
              <Image
                src="/images/TV_ISOLOGO06.png"
                alt="TechVibes Isologo"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-neutral-500 max-w-xs">{t('description')}</p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/techvibes_ar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="Instagram"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/techvibes-canning"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              {t('solutions')}
            </h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-neutral-500 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              {t('company')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/quienes-somos" className="text-sm text-neutral-500 hover:text-white transition-colors">
                  {t('company')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-neutral-500 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/marcas" className="text-sm text-neutral-500 hover:text-white transition-colors">
                  Marcas
                </Link>
              </li>
              <li>
                <Link href="/quienes-somos/politicas-de-privacidad" className="text-sm text-neutral-500 hover:text-white transition-colors">
                  {t('privacy')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 mb-4">
              {t('contact')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5491137844697"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors"
                >
                  <Phone size={14} />
                  +54 9 11 3784-4697
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-neutral-500">
                  <MapPin size={14} />
                  Canning, Buenos Aires
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} TechVibes. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
