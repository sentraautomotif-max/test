import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import ServicesOverview from "@/components/ServicesOverview";
import HowItWorks from "@/components/HowItWorks";
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
import IntroLoader from "@/components/IntroLoader";
import RevealSection from "@/components/RevealSection";

export default function HomePage() {
  return (
    <>
      <IntroLoader />
      <Header />
      <main>
        {/* Hero with background image */}
        <Hero />
        
        <RevealSection>
          <TrustIndicators />
        </RevealSection>
        
        <RevealSection delay={80}>
          <ServicesOverview />
        </RevealSection>
        
        <RevealSection>
          <HowItWorks />
        </RevealSection>
        
        <RevealSection direction="left">
          <ResultsVideos />
        </RevealSection>
        
        <RevealSection direction="scale">
          <PremiumGallery />
        </RevealSection>
        
        <RevealSection>
          <BrandPartners />
        </RevealSection>
        
        <RevealSection>
          <Reviews />
        </RevealSection>
        
        <RevealSection direction="right">
          <HomeServiceBanner />
        </RevealSection>
        
        <RevealSection>
          <ArticleTeaser />
        </RevealSection>
        
        <RevealSection>
          <LocationsSection />
        </RevealSection>
        
        <RevealSection>
          <FAQ />
        </RevealSection>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
