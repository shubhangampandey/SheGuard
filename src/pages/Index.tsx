import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { SOSFeatures } from '@/components/SOSFeatures';
import { EmpowermentHub } from '@/components/EmpowermentHub';
import { Testimonials } from '@/components/Testimonials';
import { TakeAction } from '@/components/TakeAction';
import { Footer } from '@/components/Footer';
import { NeonOrb } from '@/components/NeonOrb';
import { Particles } from '@/components/Particles';

const Index = () => {
  return (
    <main className="relative">
      <Particles />
      <NeonOrb />
      
      <Hero />
      <About />
      <SOSFeatures />
      <EmpowermentHub />
      <Testimonials />
      <TakeAction />
      <Footer />
    </main>
  );
};

export default Index;
