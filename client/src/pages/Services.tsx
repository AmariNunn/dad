import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactCTA } from "@/components/ContactCTA";
import { 
  ShoppingBag, 
  Shirt, 
  Palette, 
  Printer 
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Promotional Products",
      description: "Create brand awareness and boost team morale with high-quality customized merchandise. We source innovative products that make your brand unforgettable.",
      icon: ShoppingBag,
      items: ["Brand Awareness", "Product Launches", "Employee Appreciation", "Corporate Gifts"]
    },
    {
      title: "Apparel Print",
      description: "Premium custom apparel solutions using state-of-the-art printing technology for vibrant, long-lasting results.",
      icon: Shirt,
      items: ["Screen Print", "Embroidery", "Vinyl Transfer", "Digital Printing"]
    },
    {
      title: "Graphics Design",
      description: "Creative visual identity design that captures your brand's essence and communicates your message effectively across all media.",
      icon: Palette,
    },
    {
      title: "Professional Printing",
      description: "Full-service printing solutions for all your marketing collateral, from business cards to large format banners.",
      icon: Printer,
    },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            OUR <span className="text-primary">SERVICES</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            No matter the industry, let us help you take your business to the next level with our comprehensive suite of creative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      <ContactCTA />
    </div>
  );
}
