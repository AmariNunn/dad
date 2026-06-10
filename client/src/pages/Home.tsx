import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, GraduationCap, Building2, Notebook, Shirt, Play, Pause, VolumeX, Volume2 } from "lucide-react";
import { ShootingStars } from "@/components/ShootingStars";
import clientLogos from "@assets/client-logos_1768588141832.webp";
import vslVideo from "@assets/0610_1781128078224.mp4";

// Asset imports
import schoolImage1 from "@assets/stock_images/premium_school_spiri_511360d3.jpg";
import schoolImage3 from "@assets/stock_images/custom_branded_appar_b6531585.jpg";

import bizImage1 from "@assets/stock_images/high-end_office_desk_eaedea1b.jpg";
import bizImage2 from "@assets/stock_images/luxury_promotional_t_e1cedbda.jpg";

function VSLVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleClick = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused || v.ended) {
      v.currentTime = 0;
      v.muted = false;
      setMuted(false);
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  }, []);

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,163,224,0.25)] cursor-pointer select-none border border-white/10"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={vslVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-full block"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      <AnimatePresence>
        {hovering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/30 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40">
              {playing ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {muted && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 text-xs text-white/80">
          <VolumeX className="w-3 h-3" /> <span>Tap to unmute</span>
        </div>
      )}
      {!muted && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/20 text-xs text-white/60">
          <Volume2 className="w-3 h-3" />
        </div>
      )}
    </div>
  );
}

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

      {/* Video Section */}
      <motion.section
        className="container mx-auto px-4 pb-16 relative z-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="max-w-3xl mx-auto">
          <VSLVideo />
        </div>
      </motion.section>

      {/* Clients Section */}
      <section className="container mx-auto px-4 py-20 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">Trusted By Industry Leaders</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            We've had the privilege of working with a diverse range of organizations, helping them bring their brand vision to life through innovative promotional solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <img 
            src={clientLogos} 
            alt="TRI Creative Group Past Clients" 
            className="w-full max-w-4xl mx-auto opacity-80 hover:opacity-100 transition-opacity duration-500"
          />
        </motion.div>
      </section>
    </div>
  );
}
