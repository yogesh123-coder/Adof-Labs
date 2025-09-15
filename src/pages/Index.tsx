import HeroSection from "@/components/HeroSection";
import WhatIsSystemSection from "@/components/WhatIsSystemSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import OurWorksSection from "@/components/OurWorksSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="w-full">
      {/* Hero Section - Sticky background */}
      <HeroSection />
      
      {/* System section slides over hero */}
      <div className="slide-over-section">
        <WhatIsSystemSection />
      </div>
      
      {/* Normal scrolling sections */}
      <div className="normal-scroll">
        <FeaturesSection />
        <WhyDifferentSection />
        <OurWorksSection />
        <HowItWorksSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
