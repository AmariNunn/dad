import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="relative pt-20 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
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
            to organizations of all sizes and industries. Transform your vision into reality 
            with our expert guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
              href="/services"
              className="group px-8 py-4 bg-transparent border border-white/20 text-white font-bold tracking-widest uppercase rounded-lg hover:bg-white/5 hover:border-primary/50 hover:text-primary transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
            >
              Our Services <ChevronRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </div>
  );
}
