import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-transparent relative z-10">
      <div className="glass-panel p-12 rounded-3xl text-center max-w-md mx-4">
        <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 text-destructive animate-pulse">
          <AlertTriangle size={40} />
        </div>
        
        <h1 className="text-4xl font-black text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">Page Not Found</p>
        <p className="text-gray-400 mb-8">
          The coordinates you've entered seem to be lost in deep space.
        </p>
        
        <Link href="/" className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold tracking-wider uppercase transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}
