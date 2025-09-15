import HeroSection from "@/components/HeroSection";
import WhatIsSystemSection from "@/components/WhatIsSystemSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import OurWorksSection from "@/components/OurWorksSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

const Index = () => {
  return (
    <main className="w-full">
      {/* Hero Section - Sticky background */}
      <HeroSection />
      
      {/* System section slides over hero */}
      <div className="slide-over-section">
        <ScrollAnimation>
          <WhatIsSystemSection />
        </ScrollAnimation>
      </div>
      
      {/* Normal scrolling sections */}
      <div className="normal-scroll">
        <FeaturesSection />
        <ScrollAnimation delay={0.2}>
          <WhyDifferentSection />
        </ScrollAnimation>
        <ScrollAnimation delay={0.4}>
          <OurWorksSection />
        </ScrollAnimation>
        <ScrollAnimation delay={0.6}>
          <HowItWorksSection />
        </ScrollAnimation>
        <ScrollAnimation delay={0.8}>
          <CTASection />
        </ScrollAnimation>
        <Footer />
      </div>
    </main>
  );
};

export default Index;
