
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ThoughtCard from "../components/ThoughtCard";
import ParticleBackground from "../components/ParticleBackground";
import { Button } from "@/components/ui/button";

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
            <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-4">Live Thought Feed</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See what people are thinking about in real-time. These thoughts are shared anonymously from users around the world.
            </p>
          </div>
          
          <div className="mb-10 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">Filter Thoughts</h2>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="text-sm border-white/20 bg-white/5">All</Button>
              <Button variant="outline" className="text-sm border-white/20 bg-transparent">Reflective</Button>
              <Button variant="outline" className="text-sm border-white/20 bg-transparent">Anxious</Button>
              <Button variant="outline" className="text-sm border-white/20 bg-transparent">Calm</Button>
              <Button variant="outline" className="text-sm border-white/20 bg-transparent">Creative</Button>
            </div>
          </div>
          
          <div className="space-y-6">
            {thoughts.map(thought => (
              <ThoughtCard key={thought.id} thought={thought} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/5">
              Load More Thoughts
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feed;
