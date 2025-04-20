import { motion } from "framer-motion";
// import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Github, 
  Linkedin,
  // ArrowRight
} from "lucide-react";
import { scrollToElement } from "@/lib/utils";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="bg-[#050714] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={staggerItem}>
            <div className="flex items-center gap-2 mb-5">
              {/* <span className="bg-primary rounded-md p-1.5"> */}
              <img src="http://alero.dev/wp-content/uploads/2025/04/ARCH-ICON-BLACK-PNG1.png" alt="" className="w-10 h-10 object-contain inline-block"/>
                {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 2.05C13 2.05 16 6 16 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 21.95C11 21.95 8 18 8 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.63 15.5H12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.63 8.5H21.38" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 17L22 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> */}
              {/* </span> */}
              <span className="text-xl font-bold">Arch</span>
            </div>
            <p className="text-neutral-400 mb-4">Simple stablecoin payment infrastructure for developers and businesses</p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={staggerItem}>
            <h3 className="text-lg font-semibold mb-4">Developers</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToElement("features")} className="text-neutral-400 hover:text-white transition-colors duration-200">SDK & API</button></li>
              <li><button onClick={() => scrollToElement("components")} className="text-neutral-400 hover:text-white transition-colors duration-200">Solutions</button></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">API Reference</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Code Examples</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Sandbox</a></li>
            </ul>
          </motion.div>
          
          <motion.div variants={staggerItem}>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Getting Started</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Integration Guide</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">SDKs & Libraries</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Case Studies</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><button onClick={() => scrollToElement("partners")} className="text-neutral-400 hover:text-white transition-colors duration-200">Partners</button></li>
            </ul>
          </motion.div>
          
          <motion.div variants={staggerItem}>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Careers</a></li>
              <li><button onClick={() => scrollToElement("benefits")} className="text-neutral-400 hover:text-white transition-colors duration-200">For Business</button></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Security</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Legal</a></li>
              <li><button onClick={() => scrollToElement("contact")} className="text-neutral-400 hover:text-white transition-colors duration-200">Contact</button></li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-neutral-800 pt-8"
          {...fadeIn(0.4)}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">&copy; {new Date().getFullYear()} Arch. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-500 hover:text-neutral-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-neutral-500 hover:text-neutral-300 text-sm">Terms of Service</a>
              <a href="#" className="text-neutral-500 hover:text-neutral-300 text-sm">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
