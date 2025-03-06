
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ThoughtCard from "../components/ThoughtCard";
import ParticleBackground from "../components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { MoonStar } from "lucide-react";

const Feed = () => {
  // Mock data for thought feed
  const [thoughts, setThoughts] = useState([
    {
      id: "1",
      content: "Do you ever think about how many people are looking at the same stars as you right now? It makes me feel connected to strangers I'll never meet.",
      timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
      anonymous: true,
      likes: 24,
      comments: 5,
      mood: "reflective" as const
    },
    {
      id: "2",
      content: "I realized today that I'm afraid of both failure and success. One means I wasn't good enough, the other means expectations will only get higher.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
      anonymous: false,
      author: "Midnight_Mind",
      likes: 18,
      comments: 7,
      mood: "anxious" as const
    },
    {
      id: "3",
      content: "The silence at 3AM has a different quality to it. It's not just the absence of sound—it feels like the world is holding its breath.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
      anonymous: true,
      likes: 42,
      comments: 12,
      mood: "calm" as const
    }
  ]);

  // Create grain overlay effect
  useEffect(() => {
    const grainOverlay = document.createElement('div');
    grainOverlay.className = 'grain-overlay';
    document.body.appendChild(grainOverlay);
    
    return () => {
      document.body.removeChild(grainOverlay);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-afterhours-black to-afterhours-darkpurple">
      <ParticleBackground />
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4 bg-gradient-to-r from-afterhours-blue via-afterhours-purple to-afterhours-blue bg-clip-text text-transparent">Late Night Thoughts</h1>
          </div>
          
          <div className="mb-10 p-4 glass-card bg-gradient-to-br from-afterhours-blue/10 to-afterhours-darkpurple/30 rounded-xl backdrop-blur-sm">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="text-sm border-white/20 bg-white/5 hover:bg-white/10 hover:border-afterhours-blue/50 transition-all duration-300">All</Button>
              <Button variant="outline" className="text-sm border-white/20 bg-transparent hover:bg-purple-600/10 hover:border-purple-400/50 transition-all duration-300">Reflective</Button>
              <Button variant="outline" className="text-sm border-white/20 bg-transparent hover:bg-red-600/10 hover:border-red-400/50 transition-all duration-300">Anxious</Button>
              <Button variant="outline" className="text-sm border-white/20 bg-transparent hover:bg-blue-600/10 hover:border-blue-400/50 transition-all duration-300">Calm</Button>
              <Button variant="outline" className="text-sm border-white/20 bg-transparent hover:bg-green-600/10 hover:border-green-400/50 transition-all duration-300">Hopeful</Button>
            </div>
          </div>
          
          <div className="space-y-6">
            {thoughts.map(thought => (
              <ThoughtCard key={thought.id} thought={thought} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 backdrop-blur-sm neo-glow">
              Load More
            </Button>
          </div>
        </div>
      </main>
      
      {/* Simplified retro cinematic footer */}
      <footer className="py-6 border-t border-white/5 backdrop-blur-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-afterhours-darkpurple/80 to-transparent opacity-50"></div>
        
        {/* Retro scanline effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-1">
              <MoonStar className="w-4 h-4 text-afterhours-neon" />
              <span className="text-white text-sm font-medium">After Hours</span>
            </div>
            <p className="text-gray-500 text-xs mt-2">Where night owls gather</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Feed;
