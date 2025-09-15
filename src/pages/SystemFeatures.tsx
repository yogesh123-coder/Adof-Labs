import { ArrowLeft, Layers, Bot, Shield, Zap, Database, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const SystemFeatures = () => {
  const backgroundStyle = {
    background: 'linear-gradient(145deg, #02050A 0%, #0C121B 50%, #171F2B 100%)'
  };

  const features = [
    {
      icon: Layers,
      title: "Integrated Core",
      description: "All your tools in one connected system. Website, CRM, App, Security all together for seamless operations."
    },
    {
      icon: Bot,
      title: "Smart Automation",
      description: "AI that runs your daily business ops. Workflows, chatbots, auto-reports powered by advanced machine learning."
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Enterprise-grade protection with real-time threat detection and compliance monitoring for complete peace of mind."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that scales with your business growth and user demands without compromising quality."
    },
    {
      icon: Database,
      title: "Smart Analytics",
      description: "Deep insights into your business performance with predictive analytics and comprehensive reporting tools."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide infrastructure ensuring reliable access and performance across all regions and time zones."
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
            System Features
          </h1>
          <p className="text-white/80 font-poppins text-lg leading-[1.8] max-w-3xl tracking-wide">
            Explore the comprehensive features that make our platform the most advanced digital solution in the market
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-space-grotesk text-2xl font-medium mb-4">
                {feature.title}
              </h3>
              <p className="text-white/70 font-poppins text-base leading-[1.7] tracking-wide">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemFeatures;