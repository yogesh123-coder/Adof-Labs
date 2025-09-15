import { Circle } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const backgroundStyle = {
    background: 'linear-gradient(145deg, #02050A 0%, #0C121B 50%, #171F2B 100%)'
  };
  return <footer style={backgroundStyle} className="w-full px-6 py-20 bg-gray-950">
      <div className="max-w-[1600px] mx-auto flex flex-col justify-start items-center gap-14">
        {/* Logo and Brand */}
        <div className="flex justify-start items-center gap-3">
          <div className="p-2.5 bg-white rounded-full flex justify-center items-center">
            <Circle className="w-3 h-3 text-black fill-black" />
          </div>
          <div className="text-white text-lg font-space-grotesk font-medium uppercase tracking-wider leading-[20px] text-center sm:text-left">
            ADOF Labs
          </div>
        </div>

        {/* Navigation Links */}
        

        {/* Copyright and Legal */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
          <div className="text-white/50 text-xs font-dm-mono font-medium uppercase leading-[16.32px] tracking-wider-2">
            © 2025, Digital Platform
          </div>
          <div className="w-[3px] h-[3px] bg-white/50 rounded-full hidden sm:block"></div>
          <div className="py-0.5 flex justify-center items-center">
            <div className="text-white/50 text-xs font-dm-mono font-medium uppercase leading-[16.32px] tracking-wider-2">
              Licenses
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;