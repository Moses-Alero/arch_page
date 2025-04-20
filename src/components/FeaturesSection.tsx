import { motion } from "framer-motion";
import { 
  Code, 
  Wallet, 
  ShieldCheck, 
  Zap, 
  LineChart, 
  Globe 
} from "lucide-react";
import { zoomIn, cardHover, staggerContainer, staggerItem } from "@/lib/animations";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  iconColor = "primary",
  bgColor = "primary-dark" 
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  iconColor?: string;
  bgColor?: string;
}) => {
  return (
    <motion.div 
      className="bg-neutral-900/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 flex flex-col h-full"
      variants={staggerItem}
      {...cardHover}
    >
      <div className={`mb-5 bg-${bgColor}/20 p-3 rounded-xl w-fit`}>
        <div className={`w-6 h-6 text-${iconColor}`}>{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-300 mb-4 flex-grow">{description}</p>
      <ul className="text-sm text-neutral-400 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className={`w-5 h-5 text-${iconColor} mr-2 flex-shrink-0 mt-0.5`} viewBox="0 0 24 24" fill="none">
              <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function FeaturesSection() {
  const features = [
    {
      icon: <Code />,
      title: "Developer-First SDK",
      description: "Build and launch stablecoin payment features in hours, not weeks, with our intuitive and well-documented SDKs.",
      features: [
        "SDK libraries for React, Node.js, Python, and more",
        "Webhook support for real-time payment notifications",
        "Robust API with comprehensive documentation"
      ],
      iconColor: "primary",
      bgColor: "primary-dark"
    },
    {
      icon: <Wallet />,
      title: "Stablecoin Support",
      description: "Accept popular stablecoins without worrying about price volatility, offering more payment options to your customers.",
      features: [
        "Support for USDC, USDT, DAI, and more",
        "Multi-wallet compatibility (Phantom, Solflare, Backpack)",
        "Automatic price conversion and rate updates"
      ],
      iconColor: "secondary",
      bgColor: "secondary-dark"
    },
    {
      icon: <Zap />,
      title: "Plug-and-Play Checkout",
      description: "Get your payment solution up and running quickly with our customizable checkout components for web and mobile.",
      features: [
        "Responsive UI components ready to embed",
        "Customizable styles to match your brand",
        "One-click stablecoin payment options"
      ],
      iconColor: "primary",
      bgColor: "primary-dark"
    },
    {
      icon: <LineChart />,
      title: "Advanced Analytics",
      description: "Access detailed insights on your payment flows with real-time dashboards designed for developers and business users.",
      features: [
        "Transaction history and payment tracking",
        "Conversion metrics and settlement reports",
        "API usage statistics and performance monitoring"
      ],
      iconColor: "secondary",
      bgColor: "secondary-dark"
    },
    {
      icon: <ShieldCheck />,
      title: "Security & Compliance",
      description: "Built with enterprise-grade security standards to protect both developers and end-users throughout the payment process.",
      features: [
        "Industry-standard encryption for all transactions",
        "Multi-signature wallet architecture",
        "Compliance-ready for global regulations"
      ],
      iconColor: "primary",
      bgColor: "primary-dark"
    },
    {
      icon: <Globe />,
      title: "Global Settlement",
      description: "Receive stablecoin payments from customers worldwide and automatically settle to your preferred currency or wallet.",
      features: [
        "Instant payment confirmation for digital products",
        "Flexible settlement options",
        "Lower fees than traditional payment processors"
      ],
      iconColor: "secondary",
      bgColor: "secondary-dark"
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#050714] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          {...zoomIn(0.2)}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Built for Builders</h2>
          <p className="text-lg text-neutral-300">
            Everything you need to integrate stablecoin payments into your applications with minimal effort. Simple, flexible, and powerful.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              features={feature.features}
              iconColor={feature.iconColor}
              bgColor={feature.bgColor}
            />
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
    </section>
  );
}
