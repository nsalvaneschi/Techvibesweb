'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
import { usePathname, useRouter, Link } from '@/i18n/navigation';
import Image from 'next/image';

const LANG_NAMES: Record<string, string> = { es: 'ES', en: 'EN' };

export default function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const currentLocale = pathname?.split('/')[1] || 'es';
  const alternateLocale = currentLocale === 'es' ? 'en' : 'es';

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (pathname === '/' || pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`) {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  };

  const navItems = [
    { label: t('inicio'), href: '#inicio' },
    { label: t('soluciones'), href: '#soluciones' },
    { label: t('marcas'), href: '/marcas' },
    { label: t('blog'), href: '/blog' },
    { label: t('quienesSomos'), href: '/quienes-somos' },
    { label: t('contacto' as any), href: '/contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-[#1a2618]' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3" aria-label="TechVibes Home">
            <Image
              src="/images/TV_TLOGO06.png"
              alt="TechVibes"
              width={140}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <Image
              src="/images/TV_ISOLOGO06.png"
              alt="TechVibes Isologo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`/${alternateLocale}${pathname?.replace(/^\/[a-z]{2}/, '') || ''}`}
              className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20"
              aria-label={`Switch to ${LANG_NAMES[alternateLocale]}`}
            >
              <Globe size={14} />
              {LANG_NAMES[alternateLocale]}
            </a>

            <a
              href="https://wa.me/5491137844697"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors"
            >
              {t('contacto')}
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-[#1a2618]">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.href}
                  onClick={() => {
                    handleNavClick(item.href);
                    setIsOpen(false);
                  }}
                  className="block text-lg text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg text-neutral-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
            <a
              href="https://wa.me/5491137844697"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-white text-black px-4 py-3 rounded-full font-medium mt-4"
            >
              {t('contacto')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
