import { motion } from "framer-motion";
import { 
  Code, 
  Network, 
  Layers, 
  Shield, 
  Zap,
  CheckCircle
} from "lucide-react";
import { fadeIn, slideInFromLeft, slideInFromRight, staggerContainer, staggerItem } from "@/lib/animations";

const ProcessStep = ({ number, title, description }: { number: number, title: string, description: string }) => {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
      <div className={`absolute left-0 top-0 w-6 h-6 ${number % 2 === 0 ? 'bg-secondary' : 'bg-primary'} rounded-full flex items-center justify-center -ml-[11px]`}>
        <span className="text-xs font-bold">{number}</span>
      </div>
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <p className="text-neutral-300 text-sm">{description}</p>
    </div>
  );
};

const ComponentCard = ({ 
  icon, 
  title, 
  features, 
  iconBg = "primary" 
}: { 
  icon: React.ReactNode;
  title: string;
  features: string[];
  iconBg?: string;
}) => {
  return (
    <div className="bg-neutral-900/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6">
      <div className="flex items-center mb-4">
        <div className={`mr-4 p-3 bg-${iconBg}/20 rounded-xl`}>
          <div className={`w-6 h-6 text-${iconBg}`}>{icon}</div>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-3 text-neutral-300">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className={`w-5 h-5 text-${iconBg} mr-2 flex-shrink-0 mt-0.5`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function CoreComponentsSection() {
  const componentCards = [
    {
      icon: <Code />,
      title: "Developer APIs",
      features: [
        "Comprehensive REST API with complete documentation",
        "Client-side and server-side SDKs for popular languages",
        "Extensible webhook system for custom integrations"
      ],
      iconBg: "primary"
    },
    {
      icon: <Shield />,
      title: "Payment Security",
      features: [
        "End-to-end transaction encryption",
        "Multi-signature transaction validation",
        "Automated fraud prevention monitoring"
      ],
      iconBg: "secondary"
    },
    {
      icon: <Layers />,
      title: "Business Tools",
      features: [
        "Customizable checkout pages to match your brand",
        "Detailed payment analytics and reporting",
        "User management with role-based permissions"
      ],
      iconBg: "primary"
    }
  ];

  return (
    <section id="components" className="py-20 bg-[#0A0C1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          {...fadeIn(0.2)}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Tech Solutions</h2>
          <p className="text-lg text-neutral-300">
            Powerful tools that make implementing stablecoin payments simple for developers and seamless for businesses.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div 
              className="order-2 md:order-1"
              {...slideInFromLeft(0.3)}
            >
              <div className="bg-neutral-900/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 h-full">
                <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 inline-block">Integration Methods</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3 flex items-center">
                      <span className="bg-primary/20 p-2 rounded-md mr-3">
                        <Zap className="w-5 h-5 text-primary" />
                      </span>
                      Quick Implementation
                    </h4>
                    <ul className="ml-12 space-y-2 text-neutral-300">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
                        <span>Ready-to-use checkout components for your website</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
                        <span>React components and JavaScript SDK for customization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-1" />
                        <span>Fully hosted payment pages with shareable links</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-3 flex items-center">
                      <span className="bg-purple-500/20 p-2 rounded-md mr-3">
                        <Network className="w-5 h-5 text-purple-500" />
                      </span>
                      Advanced Integrations
                    </h4>
                    <ul className="ml-12 space-y-2 text-neutral-300">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Headless API for complete customization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Server SDKs for Node.js, Python, PHP, and Ruby</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Plugin support for popular e-commerce platforms</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="order-1 md:order-2"
              {...slideInFromRight(0.3)}
            >
              <div className="bg-neutral-900/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-32 -mb-32 opacity-50"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 inline-block">Payment Flow</h3>
                  
                  <div className="space-y-12 relative">
                    <ProcessStep 
                      number={1}
                      title="Create Checkout"
                      description="Generate a checkout session with our API or SDK, specifying amount, description, and other payment details."
                    />
                    
                    <ProcessStep 
                      number={2}
                      title="Customer Pays"
                      description="Users select their preferred stablecoin and complete the payment using their wallet or exchange account."
                    />
                    
                    <ProcessStep 
                      number={3}
                      title="Real-time Confirmation"
                      description="Arch instantly verifies the transaction on the blockchain and sends confirmation via webhooks to your application."
                    />
                    
                    <ProcessStep 
                      number={4}
                      title="Settlement"
                      description="The payment is automatically settled to your desired stablecoin or can be converted to fiat through our partners."
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {componentCards.map((card, index) => (
              <motion.div key={index} variants={staggerItem}>
                <ComponentCard
                  icon={card.icon}
                  title={card.title}
                  features={card.features}
                  iconBg={card.iconBg}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
    </section>
  );
}
