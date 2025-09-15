import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const CTASection = () => {
  const backgroundStyle = {
    background: 'linear-gradient(145deg, #02050A 0%, #0C121B 50%, #171F2B 100%)'
  };
  return <section style={backgroundStyle} className="w-full py-16 md:py-24 bg-gray-950">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center">
          {/* Main CTA Content */}
          <div className="mb-12">
            <h2 className="text-white font-space-grotesk text-4xl md:text-6xl font-light leading-tight mb-6">
              Ready to Transform Your Digital Assets?
            </h2>
            <p className="text-white/80 font-poppins text-lg leading-[1.8] max-w-3xl mx-auto mb-12 tracking-wide">
              Join thousands of businesses already using our platform to secure, manage, and monetize their digital properties. Get started today with a free consultation.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/schedule-call" className="px-8 py-4 bg-white text-black font-dm-mono font-medium uppercase tracking-wider rounded-lg hover:bg-gray-100 transition-all inline-flex items-center gap-3">
              <Calendar className="w-4 h-4" />
              Schedule Free Call
            </Link>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-dm-mono font-medium uppercase tracking-wider rounded-lg hover:bg-white/20 transition-all inline-flex items-center gap-3">
              View Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-space-grotesk font-light text-white mb-2">10,000+</div>
              <div className="text-white/60 font-poppins text-sm uppercase tracking-[0.15em] leading-[1.6]">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-space-grotesk font-light text-white mb-2">$2B+</div>
              <div className="text-white/60 font-poppins text-sm uppercase tracking-[0.15em] leading-[1.6]">Assets Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-space-grotesk font-light text-white mb-2">99.99%</div>
              <div className="text-white/60 font-poppins text-sm uppercase tracking-[0.15em] leading-[1.6]">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;