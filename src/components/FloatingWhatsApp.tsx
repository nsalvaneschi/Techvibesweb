'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-[9999]">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 w-72"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-2 right-2 p-1 text-neutral-400 hover:text-neutral-600 transition-colors"
                  aria-label="Cerrar"
                >
                  <X size={16} />
                </button>
                <div className="pr-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                    ¿Necesitás ayuda?
                  </h4>
                  <p className="text-xs text-neutral-500 mb-3">
                    Escribinos por WhatsApp y te respondemos al instante.
                  </p>
                  <a
                    href="https://wa.me/5491137844697?text=Hola!%20Me%20interesa%20saber%20m%C3%A1s%20sobre%20los%20servicios%20de%20TechVibes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#25D366] text-white text-center py-2.5 rounded-full text-sm font-medium hover:bg-[#20BD5A] transition-colors"
                  >
                    Iniciar conversación
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#20BD5A] transition-colors"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle size={28} className="text-white" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
