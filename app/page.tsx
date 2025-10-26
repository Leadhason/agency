import Image from "next/image";
import HeroSection from "@/components/hero"; 
import Header from "@/components/header";
import AboutSection from "@/components/about";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
