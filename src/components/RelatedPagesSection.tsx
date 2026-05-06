import { Link } from '@/i18n/navigation';
import { ArrowRight, Home, Shield, Wifi, MonitorSpeaker, Wrench, FileText } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Shield,
  Wifi,
  MonitorSpeaker,
  Wrench,
  FileText,
};

interface RelatedPagesSectionProps {
  pages: {
    label: string;
    href: string;
    icon: string;
  }[];
}

export default function RelatedPagesSection({ pages }: RelatedPagesSectionProps) {
  return (
    <section className="py-12 sm:py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-medium text-neutral-500 uppercase tracking-wider mb-8">
          También te puede interesar
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {pages.map((page) => {
            const Icon = iconMap[page.icon] || ArrowRight;
            return (
              <Link
                key={page.href}
                href={page.href}
                className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#CBD4BF]/20 transition-all text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-[#CBD4BF]/10 flex items-center justify-center group-hover:bg-[#CBD4BF]/20 transition-colors">
                  <Icon size={20} className="text-[#A9C1A9]" />
                </div>
                <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">
                  {page.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
