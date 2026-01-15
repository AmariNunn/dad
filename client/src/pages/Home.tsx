import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, GraduationCap, Building2, PenTool, Coffee, Notebook, Shirt } from "lucide-react";

// Asset imports
import schoolImage1 from "@assets/stock_images/premium_school_spiri_511360d3.jpg";
import schoolImage2 from "@assets/stock_images/premium_school_spiri_c9b3707a.jpg";
import schoolImage3 from "@assets/stock_images/premium_school_spiri_981b951f.jpg";
import schoolImage4 from "@assets/stock_images/premium_school_spiri_dcc30503.jpg";

import bizImage1 from "@assets/stock_images/luxury_corporate_gif_16731289.jpg";
import bizImage2 from "@assets/stock_images/luxury_corporate_gif_ae4c74ef.jpg";
import bizImage3 from "@assets/stock_images/luxury_corporate_gif_bf687a49.jpg";
import bizImage4 from "@assets/stock_images/luxury_corporate_gif_f9ded9a7.jpg";

export default function Home() {
  const merchItems = [
    {
      title: "School Spirit Wear",
      category: "Education",
      image: schoolImage1,
      icon: GraduationCap,
      description: "Premium hoodies and varsity jackets for ultimate team pride."
    },
    {
      title: "Executive Stationery",
      category: "Corporate",
      image: bizImage1,
      icon: Notebook,
      description: "Leather journals and professional notebooks for the modern desk."
    },
    {
      title: "Luxury Tech Accessories",
      category: "Corporate",
      image: bizImage2,
      icon: Building2,
      description: "High-end corporate gifts including metal pens and tech cases."
    },
    {
      title: "Custom Apparel",
      category: "Merch",
      image: schoolImage3,
      icon: Shirt,
      description: "High-quality screen printing and embroidery for any organization."
    }
  ];

  return (
    <div className="relative pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase backdrop-blur-sm">
            Elevate Your Brand Identity
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white leading-tight"
        >
          INNOVATIVE <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500 text-glow">
            PROMOTIONAL
          </span> <br/>
          SOLUTIONS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          TRI Creative Group provides branding and innovative promotional product solutions 
          to organizations of all sizes and industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-32"
        >
          <Link 
            href="/products"
            className="group relative px-8 py-4 bg-primary text-black font-bold tracking-widest uppercase rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Browse Products <ArrowRight size={20} />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <Link 
            href="/quote"
            className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold tracking-widest uppercase rounded-lg hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Get a Quote <ChevronRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* Merch Gallery Section */}
      <section className="container mx-auto px-4 py-20 relative z-10 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase italic">
            PREMIUM <span className="text-primary">MERCHANDISE</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            From luxury corporate gifts to high-energy school spirit wear, we deliver quality that represents your brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {merchItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
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
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Corporate promo highlights */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="bg-gradient-to-br from-primary/20 to-purple-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-black text-white mb-6 uppercase">Corporate Excellence</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Elevate your business presence with high-end pens, metal accessories, and custom leather goods. We specialize in products that make a lasting impression on your high-value clients.
            </p>
            <div className="flex gap-6 mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary border border-primary/20">
                  <PenTool />
                </div>
                <span className="text-[10px] uppercase font-bold text-white/60 tracking-tighter">Premium Pens</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary border border-primary/20">
                  <Coffee />
                </div>
                <span className="text-[10px] uppercase font-bold text-white/60 tracking-tighter">Luxury Drinkware</span>
              </div>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
             <img src={bizImage3} className="rounded-2xl border border-white/10" alt="Promo product 1" />
             <img src={bizImage4} className="rounded-2xl border border-white/10 mt-8" alt="Promo product 2" />
          </div>
        </div>
      </section>
    </div>
  );
}
