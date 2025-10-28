import Image from "next/image";
import HeroSection from "@/components/hero"; 
import Header from "@/components/header";
import AboutSection from "@/components/about";
import ServicesSection from '@/components/services'
import WhyChooseUs from '@/components/whychooseus'
import OurPlayers from '@/components/ourplayers'


export default function Home() {
  return (
    <div className="flex min-h-screen items-center overflow-hidden justify-center flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <OurPlayers />
    </div>
  );
}
