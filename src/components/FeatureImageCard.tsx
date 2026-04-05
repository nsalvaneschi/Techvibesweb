'use client';

import { motion } from 'framer-motion';

export default function FeatureImageCard({ 
  image, 
  title, 
  description, 
  index 
}: { 
  image: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/5 hover:border-[#CBD4BF]/20 transition-all duration-500"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      <div className="relative z-10 -mt-12 p-6">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
