import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CoreComponentsSection from "@/components/CoreComponentsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { fadeIn } from "@/lib/animations";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  // Scroll to section if URL has hash on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="bg-[#0A0C1B] min-h-screen text-white"
    >
      <Navbar />
      <motion.main {...fadeIn()}>
        <HeroSection />
        <FeaturesSection />
        <CoreComponentsSection />
        <BenefitsSection />
        <PartnersSection />
        <ContactSection />
      </motion.main>
      <Footer />
    </motion.div>
  );
}
