import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Hero';
import SectionData from '@/components/SectionData';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className='font-sans'>
      <Navbar />
      <HeroSection />
      <SectionData />
      <Footer />
    </main>
  );
}
