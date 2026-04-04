import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import { use } from 'react';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}

export default function BlogLayout({ params, children }: BlogPageProps) {
  use(params);
  return (
    <PageTransition>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </PageTransition>
  );
}
