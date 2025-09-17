import heroBackground from "@/assets/hero-background-hq.png";
import { NavbarMenu } from "@/components/NavbarMenu";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px] max-h-[900px] flex flex-col sticky top-0 bg-gradient-to-br from-navy-900 via-charcoal-800 to-navy-900">
      {/* Background Image */}
      <img
        src={heroBackground}
        alt="Digital ownership hero background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        style={{
          imageRendering: "crisp-edges",
          filter: "contrast(1.1) saturate(1.2)",
          transform: "translateZ(0)",
        }}
        loading="eager"
      />

      {/* Navigation */}
      {/* <div className="fixed z-10 w-full">
        <NavbarMenu />
      </div> */}
      {/* <div className="fixed top-0 z-[9999] w-full bg-background shadow-md">
        <NavbarMenu />
      </div> */}

      {/* Hero Content - Bottom Left */}
      <div className="relative z-10 flex-1 flex items-end px-4 md:px-6 pb-12 md:pb-16">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="max-w-2xl">
            <h1 className="text-white font-space-grotesk text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 md:mb-6 drop-shadow-lg font-extrabold">
              Agencies talk system deliver
            </h1>
            <p className="text-white/90 font-poppins text-sm md:text-base leading-[1.8] max-w-xl drop-shadow-md tracking-wide">
              custom growth system that drives results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
