import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background-hq.png";
import logo from "@/assets/logo.png";
import adofLogo from "@/assets/adof_logo.png";
const HeroSection = () => {
  const backgroundStyle = {
    background: 'linear-gradient(145deg, #02050A 0%, #0C121B 50%, #171F2B 100%)'
  };
  return <div className="relative w-full h-screen min-h-[600px] max-h-[900px] flex flex-col sticky top-0" style={backgroundStyle}>
      {/* Background Image */}
      <img src={heroBackground} alt="Digital ownership hero background" className="absolute inset-0 w-full h-full object-cover object-center opacity-70" style={{
      imageRendering: 'crisp-edges',
      filter: 'contrast(1.1) saturate(1.2)',
      transform: 'translateZ(0)'
    }} loading="eager" />
      
      {/* Navigation */}
      <div className="relative z-10 w-full pt-4 md:pt-6 px-4 md:px-6">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <img src={adofLogo} alt="ADOF Logo" className="h-4 sm:h-5 md:h-6 lg:h-7 w-auto" />
          </div>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {["System", "Features", "Results"].map(item => <button key={item} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-white text-xs font-dm-mono font-medium uppercase tracking-wider-2 hover:bg-white/20 hover:scale-105 hover:border-white/30 transition-all duration-300 ease-out">
                {item}
              </button>)}
          </div>
          
          {/* CTA Button */}
          <Link to="/schedule-call" className="px-3 py-2 bg-white rounded-full text-black text-xs font-dm-mono font-medium uppercase tracking-wider-2 hover:bg-gray-100 transition-all">
            Schedule a Call
          </Link>
        </div>
      </div>
      
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
    </div>;
};
export default HeroSection;