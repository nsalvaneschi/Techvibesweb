'use client';

import { motion } from 'framer-motion';
import {
  Home,
  Wifi,
  Shield,
  Speaker,
  Router,
  Lock,
  Monitor,
  Server,
  Lightbulb,
  Fan,
  Flame,
  Blinds,
  Thermometer,
  Plug,
  Box,
  Music,
  Mic,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'Controladores': Server,
  'Teclados': Monitor,
  'Iluminación': Lightbulb,
  'Interfaces': Monitor,
  'Parlantes': Speaker,
  'Home Theater': Monitor,
  'Subwoofers': Speaker,
  'Amplificadores': Music,
  'Receptores': Wifi,
  'Barras de Sonido': Speaker,
  'Streaming': Wifi,
  'Reproductores': Music,
  'Access Points': Wifi,
  'Routers': Router,
  'Switches': Server,
  'Cerraduras': Lock,
  'Cerrojos': Lock,
  'Accesorios': Box,
  'Cajas Fuertes': Shield,
  'Persianas': Blinds,
  'Sensores': Thermometer,
  'Chimeneas': Flame,
  'Enchufes': Plug,
  'Relés': Home,
  'Software': Monitor,
  'Techo': Home,
  'Pared': Home,
  'Exteriores': Home,
  'Ventiladores': Fan,
};

export default function ProductImage({ productName, category, brandName }: {
  productName: string;
  category: string;
  brandName: string;
}) {
  const Icon = iconMap[category] || Box;

  return (
    <div className="h-48 bg-gradient-to-br from-[#CBD4BF]/5 to-[#A9C1A9]/5 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-4 w-20 h-20 border border-[#CBD4BF] rounded-full" />
        <div className="absolute bottom-4 right-4 w-16 h-16 border border-[#A9C1A9] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#CBD4BF] rounded-full" />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative z-10"
      >
        <div className="w-16 h-16 rounded-2xl bg-[#CBD4BF]/10 flex items-center justify-center mb-3">
          <Icon size={28} className="text-[#A9C1A9]" />
        </div>
      </motion.div>

      <div className="relative z-10 text-center">
        <p className="text-xs font-semibold text-white mb-1">{productName}</p>
        <p className="text-xs text-[#A9C1A9]">{brandName}</p>
      </div>
    </div>
  );
}
