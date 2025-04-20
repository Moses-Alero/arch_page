import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";

interface PartnerLogoProps {
  logo: React.ReactNode;
  className?: string;
}

const PartnerLogo = ({ logo, className = "" }: PartnerLogoProps) => {
  return (
    <motion.div 
      variants={staggerItem}
      className={`bg-neutral-900/60 backdrop-blur-sm border border-white/5 rounded-xl p-4 flex items-center justify-center ${className}`}
    >
      {logo}
    </motion.div>
  );
};

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-[#050714] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          {...fadeIn(0.2)}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Trusted Partners</h2>
          <p className="text-lg text-neutral-300">
            We've partnered with leading blockchain and payment companies to bring you the best stablecoin payment experience on Solana.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12"
        >
          {/* Primary partners */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <PartnerLogo 
              logo={<img src="https://altcoinsbox.com/wp-content/uploads/2023/01/solana-logo-600x600.webp" alt="Solana" className="h-12 object-contain" />}
              className="h-24 bg-neutral-900/80" 
            />
            <PartnerLogo 
              logo={<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsTIWpzyn1TRfJ1bfeqYVxMVe_Nk6jh-LZGw&s" alt="SuperTeam" className="h-12 object-contain" />}
              className="h-24 bg-neutral-900/80"
            />
            <PartnerLogo 
              logo={<img src="http://alero.dev/wp-content/uploads/2025/04/2025-04-19-16.05.02.jpg" alt="Perena" className="h-12 object-contain" />}
              className="h-24 bg-neutral-900/80"
            />
          </div>
          
          {/* Secondary partners - payment solutions */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <PartnerLogo logo={<img src="https://cryptologos.cc/logos/usd-coin-usdc-logo.png" alt="USDC" className="h-10 object-contain" />} />
            <PartnerLogo logo={<img src="https://cryptologos.cc/logos/tether-usdt-logo.png" alt="USDT" className="h-10 object-contain" />} />
            <PartnerLogo logo={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png/800px-ETHEREUM-YOUTUBE-PROFILE-PIC.png" alt="Ethereum" className="h-10 object-contain" />} />
            <PartnerLogo logo={<img src="https://logowik.com/content/uploads/images/metamask2789.jpg" alt="MetaMask" className="h-10 object-contain" />} />
          </div> */}
          
          {/* E-commerce integrations */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <PartnerLogo logo={<img src="https://cdn.worldvectorlogo.com/logos/shopify.svg" alt="Shopify" className="h-8 object-contain" />} />
            <PartnerLogo logo={<img src="https://cdn.worldvectorlogo.com/logos/woocommerce.svg" alt="WooCommerce" className="h-8 object-contain" />} />
            <PartnerLogo logo={<img src="https://cdn.worldvectorlogo.com/logos/stripe-4.svg" alt="Stripe" className="h-8 object-contain" />} />
            <PartnerLogo logo={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Klarna-Logo-black.svg/2560px-Klarna-Logo-black.svg.png" alt="Klarna" className="h-8 object-contain" />} />
          </div> */}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-neutral-400">
            Interested in becoming a partner? <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })} className="text-primary hover:underline">Contact us</button>
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
    </section>
  );
}