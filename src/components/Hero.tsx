
import { useState, useEffect } from 'react';
import { Moon, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Add random stars to the background
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 3 + 1}px`,
    delay: `${Math.random() * 5}s`
  }));

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 px-4" id="home">
      {/* Cinematic retro background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-afterhours-darkpurple/80 to-afterhours-black/90 z-0"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-800/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-800/10 blur-3xl"></div>
      
      {/* Retro scanlines effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] opacity-20 z-10 pointer-events-none"></div>
      
      {/* Cosmic stars */}
      {stars.map(star => (
        <div 
          key={star.id}
          className="cosmic-star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay
          }}
        />
      ))}
      
      <div className="text-center max-w-3xl mx-auto z-20 px-4">
        <div className="inline-block px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 mb-6 animate-fade-in">
          <Star className="w-4 h-4 inline-block mr-2 text-yellow-300" />
          <span>A space for your late-night thoughts</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight font-montserrat animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="block text-white text-stroke">When the world</span>
          <span className="block bg-gradient-to-r from-afterhours-purple via-afterhours-blue to-purple-300 bg-clip-text text-transparent text-glow">
            goes to sleep
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          A safe space for your late-night thoughts, worries, and reflections—because sometimes the most meaningful conversations happen after hours.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button className="bg-gradient-to-r from-purple-700 to-afterhours-blue text-white px-8 py-6 text-lg neo-glow">
            Share Your Thoughts
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-lg backdrop-blur-sm">
            Explore Community
          </Button>
        </div>
      </div>
      
      {/* VHS time indicator */}
      <div className="absolute top-32 right-8 hidden md:flex items-center text-sm font-mono bg-black/30 px-3 py-1 rounded-md border border-white/10">
        <Moon className="w-4 h-4 mr-2 text-blue-300" />
        <span className="text-red-300">{currentTime}</span>
      </div>
    </section>
  );
};

export default Hero;
