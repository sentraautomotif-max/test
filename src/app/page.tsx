import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import ResultsVideos from "@/components/ResultsVideos";
import PremiumGallery from "@/components/PremiumGallery";
import BrandPartners from "@/components/BrandPartners";
import Benefits from "@/components/Benefits";
import Reviews from "@/components/Reviews";
import HomeServiceBanner from "@/components/HomeServiceBanner";
import LocationsSection from "@/components/LocationsSection";
import TeamSection from "@/components/TeamSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero with video background */}
        <Hero />
        
        {/* Trust indicators - quick stats */}
        <TrustIndicators />
        
        {/* Video process slider */}
        <ResultsVideos />
        
        {/* Premium car gallery */}
        <PremiumGallery />
        
        {/* Brand partners */}
        <BrandPartners />
        
        {/* Benefits / work standards */}
        <Benefits />
        
        {/* Customer reviews */}
        <Reviews />
        
        {/* Home service banner */}
        <HomeServiceBanner />
        
        {/* Locations */}
        <LocationsSection />
        
        {/* Team section */}
        <TeamSection />
        
        {/* FAQ */}
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
