'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const ts = useTranslations('solutions');
  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1] || 'es';

  const p = (path: string) => `/${currentLocale}${path}`;

  const solutions = [
    { label: ts('ingenieria.title'), href: p('/soluciones/ingenieria-de-planos') },
    { label: ts('domotica.title'), href: p('/soluciones/domotica') },
    { label: ts('red.title'), href: p('/soluciones/red-wifi') },
    { label: ts('seguridad.title'), href: p('/soluciones/seguridad') },
    { label: ts('soporte.title'), href: p('/soluciones/soporte-tecnico') },
    { label: ts('audioVideo.title'), href: p('/soluciones/audio-video') },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href={p('')} className="flex items-center gap-3" aria-label="TechVibes Home">
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
            </a>
            <p className="mt-4 text-sm text-neutral-500 max-w-xs">{t('description')}</p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/techvibes_ar/?hl=es-la"
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
                  <a href={item.href} className="text-sm text-neutral-500 hover:text-white transition-colors">
                    {item.label}
                  </a>
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
                <a href={p('/quienes-somos')} className="text-sm text-neutral-500 hover:text-white transition-colors">
                  {t('company')}
                </a>
              </li>
              <li>
                <a href={p('/blog')} className="text-sm text-neutral-500 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href={p('/marcas')} className="text-sm text-neutral-500 hover:text-white transition-colors">
                  Marcas
                </a>
              </li>
              <li>
                <a href={p('/quienes-somos/politicas-de-privacidad')} className="text-sm text-neutral-500 hover:text-white transition-colors">
                  {t('privacy')}
                </a>
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
