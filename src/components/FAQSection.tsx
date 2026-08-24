'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

export default function FAQSection({ title = 'Preguntas Frecuentes', subtitle, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleFAQ(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {subtitle && (
            <p className="text-sm font-medium text-[#A9C1A9] uppercase tracking-wider mb-3">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {title}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map(function(item, index) {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={false}
                className="rounded-xl bg-black/20 backdrop-blur-sm border border-white/5 overflow-hidden"
              >
                <button
                  onClick={function() { toggleFAQ(index); }}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={"text-[#A9C1A9] transition-transform duration-300 " + (isOpen ? "rotate-180" : "")}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-neutral-400">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
