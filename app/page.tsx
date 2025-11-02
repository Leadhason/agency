import Image from "next/image";
import HeroSection from "@/components/hero"; 
import Header from "@/components/header";
import AboutSection from "@/components/about";
import ServicesSection from '@/components/services'
import WhyChooseUs from '@/components/whychooseus'
import OverlayScene from '@/components/overlay-scene'
import OurPlayers from '@/components/ourplayers'
import FAQSection from '@/components/faq'
import TestimonialsSection from '@/components/testimonials'
import CTASection from '@/components/cta'
import FooterSection from '@/components/footer'


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <OverlayScene />
      <OurPlayers />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
