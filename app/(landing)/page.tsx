/**
 * ⚠️ Dummy Landing Page
 * This landing page uses placeholder sections for layout demonstration purposes.
 * Feel free to replace or customize the sections (Hero, Features, TechStacks, FAQ, Banner)
 * based on your actual product or service.
 */

import FAQSection from "@/components/pages/landing/faq-section";
import FeatureSection from "@/components/pages/landing/feature-section";
import HeroSection from "@/components/pages/landing/hero-section";
import LandingBanner from "@/components/pages/landing/landing-banner";
import TechStacksSection from "@/components/pages/landing/tech-stacks-section";

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <TechStacksSection />
      <FAQSection />
      <LandingBanner />
    </div>
  );
}

export default LandingPage;
