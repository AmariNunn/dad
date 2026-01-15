import { motion } from "framer-motion";
import { Link } from "wouter";
import { ExternalLink, GraduationCap, Building2, PenTool, Coffee, Notebook, Shirt } from "lucide-react";

// Asset imports
import schoolImage1 from "@/assets/images/hat.gif";
import schoolImage3 from "@/assets/images/backpack.jpg";
import bizImage1 from "@/assets/images/hand-sanitizer.gif";
import bizImage2 from "@/assets/images/phone-stand.jpg";
import bizImage3 from "@assets/stock_images/premium_corporate_gi_dfe673e0.jpg";
import bizImage4 from "@assets/stock_images/luxury_promotional_t_e1cedbda.jpg";

export default function Products() {
  const merchItems = [
    {
      title: "Apparel Print",
      category: "Services",
      image: schoolImage1,
      icon: Shirt,
      description: "• Screen Print\n• Embroidery\n• Vinyl\n• Digital Printing"
    },
    {
      title: "Promotional Products & Merchandising",
      category: "Branding",
      image: schoolImage3,
      icon: Notebook,
      description: "Whether it's creating brand awareness, launching a new product, showing employee appreciation or building team morale we have you covered."
    },
    {
      title: "Luxury Tech Accessories",
      category: "Corporate",
      image: bizImage2,
      icon: Building2,
      description: "High-end corporate gifts including metal pens and tech cases."
    },
    {
      title: "Custom Solutions",
      category: "Merch",
      image: bizImage1,
      icon: GraduationCap,
      description: "Our team has over 20 years' experience in promotional marketing."
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 flex-grow flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic">
            WHAT <span className="text-primary">WE DO</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Whether it's creating brand awareness, launching a new product, showing employee appreciation or building team morale we have you covered. Our team has over 20 years' experience in promotional marketing. No matter the industry let us help you take your business to the next level.
          </p>
          
          <a 
            href="https://thetrimovement.espwebsite.com/" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-medium transition-all hover:scale-105 mb-12"
          >
            Open Online Store <ExternalLink size={16} />
          </a>
        </motion.div>

        {/* Merch Gallery Section - Moved from Home */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase">
              PREMIUM <span className="text-primary">MERCHANDISE</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              From luxury corporate gifts to high-energy school spirit wear, we deliver quality that represents your brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {merchItems.map((item, index) => (
              <a 
                key={index} 
                href="https://thetrimovement.espwebsite.com/" 
                target="_blank" 
                rel="noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-colors cursor-pointer h-full"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon className="w-4 h-4 text-primary" />
                      <span className="text-[10px] uppercase tracking-widest text-primary/80 font-bold">{item.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-[10px] text-gray-400 leading-relaxed whitespace-pre-line mb-4">{item.description}</p>
                    <div className="mt-auto">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary hover:text-black border border-primary/20 rounded-lg text-primary text-xs font-bold uppercase tracking-wider transition-all duration-300">
                        Explore <ExternalLink size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </section>

        {/* Corporate Excellence Section - Moved from Home */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-primary/20 to-purple-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-black text-white mb-6 uppercase">Corporate Excellence</h2>
              <p className="text-gray-300 text-base mb-8 leading-relaxed">
                Elevate your business presence with high-end pens, metal accessories, and custom leather goods. We specialize in products that make a lasting impression on your high-value clients.
              </p>
              <div className="flex gap-6 mb-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary border border-primary/20">
                    <PenTool size={18} />
                  </div>
                  <span className="text-[9px] uppercase font-bold text-white/60 tracking-tighter">Premium Pens</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary border border-primary/20">
                    <Coffee size={18} />
                  </div>
                  <span className="text-[9px] uppercase font-bold text-white/60 tracking-tighter">Luxury Drinkware</span>
                </div>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
               <img src={bizImage3} className="rounded-2xl border border-white/10" alt="Promo product 1" />
               <img src={bizImage4} className="rounded-2xl border border-white/10 mt-6" alt="Promo product 2" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
