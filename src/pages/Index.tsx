import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Community } from "@/components/landing/Community";
import { DownloadSection } from "@/components/landing/DownloadSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Community />
      <DownloadSection />
      <Footer />
    </main>
  );
};

export default Index;
