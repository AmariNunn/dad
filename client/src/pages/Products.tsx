import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Products() {
  return (
    <div className="pt-32 pb-20 min-h-screen flex flex-col">
      <div className="container mx-auto px-4 flex-grow flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            BROWSE <span className="text-primary">PRODUCTS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Explore our extensive catalog of promotional products. Find the perfect items to represent your brand.
          </p>
          
          <a 
            href="https://thetrimovement.espwebsite.com/" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white font-medium transition-all hover:scale-105"
          >
            Open in New Tab <ExternalLink size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-grow w-full glass-panel rounded-2xl overflow-hidden shadow-2xl border-primary/20"
        >
          <iframe 
            src="https://thetrimovement.espwebsite.com/" 
            title="TRI Creative Group Products"
            className="w-full h-[800px] border-none bg-white"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}
