import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logoImg from "@assets/TRI_creative_group_lines_1768588485439.png";

export function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/quote", label: "Get Quote" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img 
            src={logoImg} 
            alt="TRI Creative Group Logo" 
            className="h-12 w-auto brightness-0 invert transition-all duration-300 group-hover:scale-110 group-hover:brightness-100 group-hover:invert-0"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "relative text-sm font-medium tracking-widest uppercase transition-colors hover:text-primary py-2",
                isActive(link.href) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.div 
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:text-primary transition-colors"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium tracking-widest uppercase py-2 border-l-2 pl-4 transition-all hover:bg-white/5",
                    isActive(link.href) 
                      ? "text-primary border-primary bg-primary/10" 
                      : "text-muted-foreground border-transparent"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
