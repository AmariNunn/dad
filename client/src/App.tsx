import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";

// Components
import { ForceFieldBackground } from "@/components/ForceFieldBackground";
import { Navigation } from "@/components/Navigation";

// Assets
import logoWebp from "@/assets/images/logo.webp";

// Pages
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import Quote from "@/pages/Quote";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path="/">
          <PageWrapper>
            <Home />
          </PageWrapper>
        </Route>
        <Route path="/services">
          <PageWrapper>
            <Services />
          </PageWrapper>
        </Route>
        <Route path="/products">
          <PageWrapper>
            <Products />
          </PageWrapper>
        </Route>
        <Route path="/quote">
          <PageWrapper>
            <Quote />
          </PageWrapper>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

// Wrapper for page transitions
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
          {/* Fixed Background */}
          <ForceFieldBackground 
            hue={195} 
            saturation={90} 
            spacing={20} 
            forceStrength={15} 
            magnifierRadius={200}
            className="fixed inset-0"
          />
          
          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              <Router />
            </main>
            
            {/* Footer */}
            <footer className="border-t border-white/10 bg-black/60 backdrop-blur-md py-12 mt-auto">
              <div className="container mx-auto px-4 text-center">
                <img src={logoWebp} alt="TRI Creative Group Logo" className="h-12 mx-auto mb-6 opacity-80 hover:opacity-100 transition-opacity" />
                <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} TRI Creative Group. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
