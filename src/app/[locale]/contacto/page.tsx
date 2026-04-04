'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MessageCircle, Mail, MapPin, Phone, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactoPage() {
  const t = useTranslations('contact');

  const contactInfo = [
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+54 9 11 3784-4697',
      href: 'tel:+5491137844697',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@techvibes.com.ar',
      href: 'mailto:info@techvibes.com.ar',
    },
    {
      icon: MapPin,
      label: 'Showroom Canning',
      value: 'Mariano Castex 3869, Canning',
      href: 'https://www.google.com/maps/place/Del+Rio+Servicios+Canning/@-34.888381,-58.5093839,17z',
    },
    {
      icon: MapPin,
      label: 'Showroom San Isidro',
      value: 'Av. del Libertador 16603, San Isidro',
      href: 'https://www.google.com/maps/place/Patagonia+Flooring/@-34.4660179,-58.5138967,19z',
    },
    {
      icon: Clock,
      label: 'Horario de atención',
      value: 'Lunes a Viernes, 9:00 - 18:00',
      href: null,
    },
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#A9C1A9] uppercase tracking-wider mb-3">
              Contacto
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Hablemos sobre tu proyecto
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Contanos qué necesitás y te ayudamos a encontrar la solución perfecta para tu hogar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <ContactForm />

              <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#CBD4BF]/10 via-[#A9C1A9]/5 to-transparent border border-[#CBD4BF]/10">
                <h3 className="text-xl font-semibold text-white mb-4">
                  ¿Preferís WhatsApp directo?
                </h3>
                <p className="text-neutral-400 mb-6">
                  Escribinos directamente y te respondemos al instante.
                </p>
                <a
                  href="https://wa.me/5491137844697?text=Hola!%20Me%20interesa%20saber%20m%C3%A1s%20sobre%20los%20servicios%20de%20TechVibes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle size={20} />
                  Abrir WhatsApp
                </a>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-[#CBD4BF]/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#CBD4BF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#CBD4BF]/20 transition-colors">
                      <Icon size={20} className="text-[#A9C1A9]" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  );
                }

                return content;
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
