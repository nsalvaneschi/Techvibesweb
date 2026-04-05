import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import ShowroomSection from '@/components/ShowroomSection';
import BrandsSection from '@/components/BrandsSection';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import PageTransition from '@/components/PageTransition';

export default function HomePage() {
  return (
    <PageTransition>
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider />
        <SolutionsSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ShowroomSection />
        <SectionDivider />
        <BrandsSection />
        <SectionDivider />
        <BlogSection />
        <SectionDivider />
        <CTASection />
      </main>
      <Footer />
    </PageTransition>
  );
}
