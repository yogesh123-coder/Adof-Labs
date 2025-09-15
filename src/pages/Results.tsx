import { ArrowLeft, TrendingUp, Users, DollarSign, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Results = () => {
  const backgroundStyle = {
    background: 'linear-gradient(145deg, #02050A 0%, #0C121B 50%, #171F2B 100%)'
  };

  const results = [
    {
      metric: "300%",
      label: "Transaction Speed Increase",
      description: "FinTech clients experienced dramatic performance improvements",
      icon: TrendingUp
    },
    {
      metric: "250%",
      label: "Sales Growth",
      description: "E-commerce platforms saw substantial revenue increases",
      icon: DollarSign
    },
    {
      metric: "350%",
      label: "Booking Rate Improvement",
      description: "Hospitality clients achieved exceptional conversion rates",
      icon: Users
    },
    {
      metric: "400%",
      label: "Patient Engagement",
      description: "Healthcare providers enhanced their patient interactions",
      icon: Clock
    }
  ];

  return (
    <div style={backgroundStyle} className="min-h-screen bg-gray-950">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-white font-space-grotesk text-5xl md:text-6xl font-light leading-tight mb-6">
            Our Results
          </h1>
          <p className="text-white/80 font-poppins text-lg leading-[1.8] max-w-3xl tracking-wide">
            Discover the measurable impact we've delivered for businesses across various industries
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {results.map((result, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-white/20 transition-all">
                <result.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-space-grotesk font-light text-white mb-4">
                {result.metric}
              </div>
              <h3 className="text-white font-space-grotesk text-xl font-medium mb-3">
                {result.label}
              </h3>
              <p className="text-white/70 font-poppins text-base leading-[1.7] tracking-wide">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
          <h2 className="text-white font-space-grotesk text-3xl md:text-4xl font-light leading-tight mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-white/80 font-poppins text-lg leading-[1.8] max-w-2xl mx-auto mb-8">
            Let us help you transform your business and achieve exceptional growth with our proven methodologies
          </p>
          <Link 
            to="/schedule-call" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-dm-mono font-medium uppercase tracking-wider rounded-lg hover:bg-gray-100 transition-all"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;