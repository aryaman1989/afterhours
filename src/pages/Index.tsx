
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ThoughtForm from "../components/ThoughtForm";
import ThoughtCard from "../components/ThoughtCard";
import ParticleBackground from "../components/ParticleBackground";
import { Headphones, Heart, MessageCircle, MoonStar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Sample thoughts data
  const thoughts = [
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
  ];
  
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
    <div className="min-h-screen">
      <ParticleBackground />
      <Navbar />
      
      <Hero />
      
      <section className="container mx-auto px-4 py-16" id="thoughts">
        <div className="max-w-lg mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 mb-6">
            <MoonStar className="w-4 h-4 inline-block mr-2 text-afterhours-neon" />
            <span>Share your thoughts</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-white">When words need a place to go</h2>
          <p className="text-gray-300 mb-8">
            This is a judgment-free zone for those thoughts that keep you up at night. Share what's on your mind, connect with others who understand, and know you're never alone in the dark.
          </p>
          
          <ThoughtForm />
        </div>
        
        <div className="pt-16" id="community">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-montserrat text-white">Community Thoughts</h2>
            <p className="text-gray-400">See what others are thinking in the late hours</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thoughts.map(thought => (
              <ThoughtCard key={thought.id} thought={thought} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/5">
              See More Thoughts
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 relative" id="features">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-montserrat text-white">Coming Soon</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Features we're working on to help make your late-night experience even better</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<User className="w-10 h-10 text-afterhours-neon" />}
              title="Anonymity Mode"
              description="Share your thoughts without revealing your identity, perfect for those vulnerable moments."
            />
            
            <FeatureCard 
              icon={<Heart className="w-10 h-10 text-afterhours-crimson" />}
              title="AI Night Companion"
              description="A supportive AI companion that's there to listen and respond when you need someone to talk to."
            />
            
            <FeatureCard 
              icon={<Headphones className="w-10 h-10 text-afterhours-blue" />}
              title="Lo-fi & Ambient Sounds"
              description="Curated playlists to help calm your mind and create the perfect late-night atmosphere."
            />
          </div>
        </div>
      </section>
      
      <footer className="py-10 bg-afterhours-black/30 backdrop-blur-md border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold text-white font-montserrat">
                <span className="text-afterhours-neon text-glow">After</span>
                <span>Hours</span>
              </h2>
              <p className="text-gray-400 text-sm mt-1">A space for your late-night thoughts</p>
            </div>
            
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} After Hours. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="glass-card p-6 flex flex-col items-center text-center transition-transform duration-300 hover:transform hover:translate-y-[-5px]">
    <div className="mb-4 p-3 rounded-full bg-white/5">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default Index;
