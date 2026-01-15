import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, GraduationCap, Building2, Notebook, Shirt } from "lucide-react";
import { useEffect, useState } from "react";

// Asset imports
import schoolImage1 from "@assets/stock_images/premium_school_spiri_511360d3.jpg";
import schoolImage2 from "@assets/stock_images/premium_school_spiri_c9b3707a.jpg";
import schoolImage3 from "@assets/stock_images/custom_branded_appar_b6531585.jpg";
import schoolImage4 from "@assets/stock_images/premium_school_spiri_dcc30503.jpg";

import bizImage1 from "@assets/stock_images/high-end_office_desk_eaedea1b.jpg";
import bizImage2 from "@assets/stock_images/luxury_promotional_t_e1cedbda.jpg";
import bizImage3 from "@assets/stock_images/premium_corporate_gi_dfe673e0.jpg";
import bizImage4 from "@assets/stock_images/luxury_promotional_t_e1cedbda.jpg";

const ShootingStars = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${2 + Math.random() * 3}s`
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-shooting-star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
            boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.4)'
          }}
        />
      ))}
      <style>{`
        @keyframes shooting-star {
          0% { transform: translateX(0) translateY(0) rotate(215deg) scale(0); opacity: 0; }
          70% { opacity: 1; }
          100% { transform: translateX(-500px) translateY(500px) rotate(215deg) scale(1); opacity: 0; }
        }
        .animate-shooting-star {
          position: absolute;
          animation-name: shooting-star;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

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
      <ShootingStars />
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
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link 
            href="/products"
            className="group relative px-8 py-4 bg-primary text-black font-bold tracking-widest uppercase rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              See More <ArrowRight size={20} />
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
    </div>
  );
}
