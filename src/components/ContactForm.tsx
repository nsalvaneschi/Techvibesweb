'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const whatsappMessage = `Hola! Soy ${formData.name}.%0AEmail: ${formData.email}%0ATeléfono: ${formData.phone}%0AServicio: ${formData.service}%0AMensaje: ${formData.message}`;
    window.open(`https://wa.me/5491137844697?text=${whatsappMessage}`, '_blank');

    setStatus('sent');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const services = [
    'Ingeniería de Planos',
    'Domótica',
    'Red / WiFi',
    'Seguridad',
    'Soporte Técnico',
    'Audio & Video',
    'Otro',
  ];

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {status === 'sent' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <CheckCircle2 size={48} className="text-[#A9C1A9] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">¡Mensaje enviado!</h3>
          <p className="text-neutral-400">Te redirigimos a WhatsApp para continuar la conversación.</p>
        </motion.div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:border-[#CBD4BF] focus:outline-none transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:border-[#CBD4BF] focus:outline-none transition-colors"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:border-[#CBD4BF] focus:outline-none transition-colors"
                placeholder="+54 9 11 ..."
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-neutral-300 mb-2">
                Servicio de interés
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#CBD4BF] focus:outline-none transition-colors appearance-none"
              >
                <option value="" className="bg-[#0a0a0a]">Seleccioná un servicio</option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-[#0a0a0a]">{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:border-[#CBD4BF] focus:outline-none transition-colors resize-none"
              placeholder="Contanos sobre tu proyecto..."
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle size={16} />
              <span>Hubo un error al enviar. Intentá de nuevo.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#CBD4BF] text-black px-8 py-3 rounded-full font-medium hover:bg-[#A9C1A9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <>Enviando...</>
            ) : (
              <>
                <Send size={18} />
                Enviar por WhatsApp
              </>
            )}
          </button>
        </>
      )}
    </motion.form>
  );
}
