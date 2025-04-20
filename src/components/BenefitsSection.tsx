import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Globe,
  TrendingUp,
  Zap,
  ShieldCheck,
  CreditCard,
  LineChart,
  ArrowRight
} from "lucide-react";
import { fadeIn, staggerContainer, staggerItem, cardHover } from "@/lib/animations";
import { scrollToElement } from "@/lib/utils";

type BenefitProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
};

const Benefit = ({ icon, title, description, iconBg }: BenefitProps) => {
  return (
    <motion.div 
      className="bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center"
      variants={staggerItem}
      {...cardHover}
    >
      <div className={`bg-${iconBg}/20 p-4 rounded-full mb-6`}>
        <div className={`w-8 h-8 text-${iconBg}`}>{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-300">{description}</p>
    </motion.div>
  );
};

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Globe />,
      title: "Global Reach",
      description: "Accept payments from customers worldwide without worrying about currency conversion or international payment processing fees.",
      iconBg: "primary"
    },
    {
      icon: <TrendingUp />,
      title: "Increased Conversion",
      description: "Provide more payment options to your customers, reducing cart abandonment and boosting your sales conversion rates.",
      iconBg: "secondary"
    },
    {
      icon: <Zap />,
      title: "Fast Implementation",
      description: "Get up and running with stablecoin payments in minutes, not weeks, with our developer-friendly SDKs and plugins.",
      iconBg: "primary"
    },
    {
      icon: <ShieldCheck />,
      title: "Stable Value",
      description: "Accept stablecoins pegged to major currencies with minimal price volatility, eliminating the risks associated with crypto price swings.",
      iconBg: "secondary"
    },
    {
      icon: <CreditCard />,
      title: "Lower Transaction Fees",
      description: "Save on payment processing fees compared to traditional credit card processors and international payment methods.",
      iconBg: "primary"
    },
    {
      icon: <LineChart />,
      title: "Real-time Analytics",
      description: "Track payments, monitor conversions, and gain valuable insights into your business performance with our dashboard.",
      iconBg: "secondary"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-[#0A0C1B] via-[#0F172A] to-[#0A0C1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          {...fadeIn(0.2)}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Benefits for Your Business</h2>
          <p className="text-lg text-neutral-300">
            Supercharge your business with stablecoin payments and unlock new opportunities for growth.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map((benefit, index) => (
            <Benefit 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              iconBg={benefit.iconBg}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/80 text-white shadow-lg shadow-primary/20"
            onClick={() => scrollToElement("contact")}
          >
            <span>Start Accepting Stablecoins Today</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
    </section>
  );
}
