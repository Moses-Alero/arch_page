import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Check } from "lucide-react";
import { fadeIn, slideInFromLeft, slideInFromRight } from "@/lib/animations";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, projectType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Submitted",
        description: "Thanks for reaching out! Our development team will contact you shortly with your API key.",
        variant: "default",
      });
      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-[#050714] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-neutral-900/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden relative"
          {...fadeIn(0.2)}
        >
          <div className="absolute top-0 right-0 -mt-24 -mr-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <motion.div 
              className="p-8 sm:p-12 relative"
              {...slideInFromLeft(0.3)}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Add Stablecoin Payments?</h2>
              <p className="text-neutral-300 mb-8">
                Get your API key and start accepting stablecoin payments in minutes. Our team is here to help you with any questions along the way.
              </p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name" className="text-neutral-300">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-neutral-300">Email Address</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="projectType" className="text-neutral-300">Project Type</Label>
                  <Select onValueChange={handleSelectChange} value={formData.projectType}>
                    <SelectTrigger
                      id="projectType"
                      className="w-full px-4 py-6 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    >
                      <SelectValue placeholder="Select your project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="webapp">Web Application</SelectItem>
                      <SelectItem value="mobile">Mobile App</SelectItem>
                      <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                      <SelectItem value="saas">SaaS Platform</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-neutral-300">Tell us about your project</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    required
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/80 text-white py-6 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all duration-200 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">Processing...</span>
                    ) : (
                      <>
                        <span>Get Your API Key</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
            
            <motion.div 
              className="hidden lg:block relative bg-gradient-to-br from-primary/10 to-purple-500/10"
              {...slideInFromRight(0.3)}
            >
              <div className="absolute inset-0 bg-neutral-900/20 backdrop-blur-sm"></div>
              <div className="relative h-full p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <div className="inline-block bg-white/10 backdrop-blur-sm p-3 rounded-lg mb-4">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Integration in Minutes, Not Days</h3>
                  <p className="text-neutral-300">Our developer-friendly SDK can be implemented in just minutes with a few lines of code.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                      <span className="text-xs font-medium">1</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Get API Credentials</h4>
                      <p className="text-neutral-400 text-sm">Receive your API key instantly after registration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/30 flex items-center justify-center mt-1">
                      <span className="text-xs font-medium">2</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Install SDK</h4>
                      <p className="text-neutral-400 text-sm">Add our SDK to your project with npm, yarn, or use our CDN</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/40 flex items-center justify-center mt-1">
                      <span className="text-xs font-medium">3</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Implement Checkout</h4>
                      <p className="text-neutral-400 text-sm">Add just a few lines of code to create your first checkout</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/50 flex items-center justify-center mt-1">
                      <span className="text-xs font-medium">4</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium">Accept Payments</h4>
                      <p className="text-neutral-400 text-sm">Start accepting stablecoin payments from customers worldwide</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-12">
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-neutral-800"></div>
                      <div className="ml-4">
                        <p className="text-sm text-neutral-300">"Implementing Arch took less than an hour and increased our global conversion rate by 23% in the first month."</p>
                        <p className="text-xs text-neutral-400 mt-1">— Startup Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
