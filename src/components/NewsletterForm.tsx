'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sent');
    setEmail('');
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Tu email"
        required
        className="flex-1 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:border-[#CBD4BF] focus:outline-none transition-colors text-sm"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-[#CBD4BF] text-black px-5 py-2.5 rounded-full font-medium text-sm hover:bg-[#A9C1A9] transition-colors flex-shrink-0"
      >
        {status === 'sent' ? (
          <>
            <CheckCircle2 size={16} />
            ¡Suscripto!
          </>
        ) : (
          <>
            <Send size={16} />
            Suscribirse
          </>
        )}
      </button>
    </motion.form>
  );
}
