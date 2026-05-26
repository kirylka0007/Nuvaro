import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import FlowSection from '@/components/sections/FlowSection';
import SyncSection from '@/components/sections/SyncSection';
import WhyNuvaro from '@/components/sections/WhyNuvaro';
import ContactForm from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FlowSection />
        <SyncSection />
        <WhyNuvaro />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
