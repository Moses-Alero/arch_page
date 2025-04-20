import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// import { scrollToElement } from "@/lib/utils";
import { slideInFromLeft, slideInFromRight, staggerContainer, staggerItem } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-[#0A0C1B] via-[#0F172A] to-[#0A0C1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            {...slideInFromLeft(0.2)}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span>Effortless</span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Stablecoin</span>{" "}
              <span>Payments</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto lg:mx-0">
              Easily integrate stablecoin payments into your business or app. Designed for developers and built for everyone.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/80 shadow-lg shadow-primary/20">
                Start Accepting Payments
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-0">
                <span>View Documentation</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <motion.div 
              className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <p className="text-sm text-neutral-400">Trusted by developers and businesses worldwide</p>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <motion.div variants={staggerItem} className="opacity-70 hover:opacity-100 transition-opacity">
                  <div className="h-10 w-24 bg-white/20 rounded-md flex items-center justify-center p-1">
                    <img 
                      src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000" 
                      alt="React" 
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                </motion.div>
                <motion.div variants={staggerItem} className="opacity-70 hover:opacity-100 transition-opacity">
                  <div className="h-10 w-24 bg-white/20 rounded-md flex items-center justify-center p-1">
                    <img 
                      src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000" 
                      alt="Next.js" 
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                </motion.div>
                <motion.div variants={staggerItem} className="opacity-70 hover:opacity-100 transition-opacity">
                  <div className="h-10 w-24 bg-white/20 rounded-md flex items-center justify-center p-1">
                    <img 
                      src="https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000" 
                      alt="Vue" 
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative hidden lg:block"
            {...slideInFromRight(0.4)}
            whileHover={{ y: -5 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full -translate-x-1/4 translate-y-1/4"></div>
            <div className="relative bg-neutral-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-neutral-400">Arch Business Dashboard</div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-neutral-800 p-4">
                  <div className="flex items-center text-neutral-300 text-sm mb-2">
                    <svg className="w-4 h-4 mr-2 text-primary" viewBox="0 0 24 24" fill="none">
                      <path d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>SDK Implementation</span>
                  </div>
                  <code className="text-xs text-neutral-400 block whitespace-pre overflow-x-auto scrollbar-hide">
{`import { Arch } from '@arch/sdk';

const arch = new Arch(apiKey);

const checkout = await arch.createCheckout({
  amount: '99.99',
  currency: 'USD',
  products: [{ name: 'Pro Plan' }],
  stablecoins: ['USDC', 'USDT']
});`}
                  </code>
                </div>
                <div className="rounded-lg bg-neutral-800 p-4">
                  <div className="flex items-center text-neutral-300 text-sm mb-2">
                    <svg className="w-4 h-4 mr-2 text-green-500" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Checkout Response</span>
                  </div>
                  <code className="text-xs text-neutral-400 block whitespace-pre overflow-x-auto scrollbar-hide">
{`{
  "status": "success",
  "id": "chk_7a9fb23c8d",
  "checkoutUrl": "https://pay.arch.io/c/7a9fb23c8d",
  "qrCode": "https://api.arch.io/qr/7a9fb23c8d",
  "expiresAt": "2025-04-19T15:30:00Z",
  "paymentOptions": [
    {
      "token": "USDC",
      "address": "0xabc...def",
      "amount": "99.99",
      "network": "Solana"
    },
    {
      "token": "USDT",
      "address": "0x123...789", 
      "amount": "99.99",
      "network": "Solana"
    }
  ]
}`}
                  </code>
                </div>
                <div className="flex items-center justify-between text-sm text-neutral-400 mt-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Processing Time: 87ms</span>
                  </div>
                  <div>
                    <span className="bg-neutral-700 text-neutral-300 px-2 py-1 rounded text-xs">READY TO USE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
    </section>
  );
}
