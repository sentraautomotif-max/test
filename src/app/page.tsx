import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import ResultsVideos from "@/components/ResultsVideos";
import PremiumGallery from "@/components/PremiumGallery";
import BrandPartners from "@/components/BrandPartners";
import Reviews from "@/components/Reviews";
import HomeServiceBanner from "@/components/HomeServiceBanner";
import ArticleTeaser from "@/components/ArticleTeaser";
import LocationsSection from "@/components/LocationsSection";
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
        
        {/* Social proof video slider */}
        <ResultsVideos />
        
        {/* Premium car gallery */}
        <PremiumGallery />
        
        {/* Brand partners */}
        <BrandPartners />
        
        {/* Customer reviews */}
        <Reviews />
        
        {/* Home service banner */}
        <HomeServiceBanner />
        
        {/* Article teaser for SEO */}
        <ArticleTeaser />
        
        {/* Locations */}
        <LocationsSection />
        
        {/* FAQ */}
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
