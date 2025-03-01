
import { useState, useEffect } from 'react';
import { Moon, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 px-4" id="home">
      {/* Visual elements */}
      <div className="absolute top-1/4 left-1/5 w-20 h-20 rounded-full bg-afterhours-crimson/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/5 w-32 h-32 rounded-full bg-afterhours-blue/20 blur-3xl"></div>
      
      <div className="text-center max-w-3xl mx-auto z-10 px-4">
        <div className="inline-block px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 mb-6 animate-fade-in">
          <Star className="w-4 h-4 inline-block mr-2 text-yellow-300" />
          <span>A space for your late-night thoughts</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight font-montserrat animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="block text-white">When the world</span>
          <span className="block bg-gradient-to-r from-afterhours-crimson via-afterhours-neon to-afterhours-blue bg-clip-text text-transparent text-glow">
            goes to sleep
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          A safe space for your late-night thoughts, worries, and reflections—because sometimes the most meaningful conversations happen after hours.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button className="bg-gradient-to-r from-afterhours-crimson to-afterhours-neon text-white px-8 py-6 text-lg neo-glow">
            Share Your Thoughts
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-lg backdrop-blur-sm">
            Explore Community
          </Button>
        </div>
      </div>
      
      {/* Time indicator */}
      <div className="absolute top-32 right-8 hidden md:flex items-center text-sm text-white/50 font-mono">
        <Moon className="w-4 h-4 mr-2" />
        <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    </section>
  );
};

export default Hero;
