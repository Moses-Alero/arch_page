import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleNavClick = (section: string) => {
    setMobileMenuOpen(false);
    scrollToElement(section);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 ${
        scrolled ? "bg-[#050714]/80" : "bg-[#050714]/80"
      } backdrop-blur-md border-b border-neutral-800`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center gap-2">
                <span>
                  {/* <img src="http://alero.dev/wp-content/uploads/2025/04/ARCH-ICON-PNG-BLANK.png" alt=""  className="w-10 h-10 object-contain inline-block"/> */}
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
                </span>
                <span className="text-xl font-bold">Arch</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <button onClick={() => handleNavClick("features")} className="text-neutral-300 hover:text-white border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">Developers</button>
              <button onClick={() => handleNavClick("components")} className="text-neutral-300 hover:text-white border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">Solutions</button>
              <button onClick={() => handleNavClick("benefits")} className="text-neutral-300 hover:text-white border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">Business</button>
              <button onClick={() => handleNavClick("partners")} className="text-neutral-300 hover:text-white border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">Partners</button>
              <button onClick={() => handleNavClick("contact")} className="text-neutral-300 hover:text-white border-transparent inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200">Contact</button>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="secondary" className="mr-3 bg-white/10 hover:bg-white/20 text-white">Documentation</Button>
            <Button className="bg-primary hover:bg-primary/80">Get Started</Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button variant="ghost" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
              <Menu className="h-6 w-6 text-gray-400" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#050714]/95 border-b border-neutral-800">
          <button onClick={() => handleNavClick("features")} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Developers</button>
          <button onClick={() => handleNavClick("components")} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Solutions</button>
          <button onClick={() => handleNavClick("benefits")} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Business</button>
          <button onClick={() => handleNavClick("partners")} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Partners</button>
          <button onClick={() => handleNavClick("contact")} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Contact</button>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5 space-x-3">
              <Button variant="secondary" className="w-full bg-white/10 hover:bg-white/20 text-white mb-2">Documentation</Button>
            </div>
            <div className="flex items-center px-5">
              <Button className="w-full bg-primary hover:bg-primary/80">Get Started</Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
