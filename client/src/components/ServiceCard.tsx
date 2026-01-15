import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: LucideIcon;
  delay?: number;
  items?: string[];
}

export function ServiceCard({ title, description, icon: Icon, delay = 0, items = [] }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-panel p-6 rounded-2xl relative overflow-hidden group h-full flex flex-col"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300 relative z-10 border border-primary/20">
        <Icon size={24} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <h3 className="text-xl mb-2 text-white group-hover:text-primary transition-colors relative z-10">{title}</h3>
      
      {description && (
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 relative z-10 flex-grow">{description}</p>
      )}

      {items.length > 0 && (
        <ul className="space-y-2 mt-auto relative z-10">
          {items.map((item, i) => (
            <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
