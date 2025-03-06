import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ThoughtForm from "../components/ThoughtForm";
import ThoughtCard from "../components/ThoughtCard";
import ParticleBackground from "../components/ParticleBackground";
import { 
  Bookmark, Book, ExternalLink, Headphones, Heart, 
  HelpCircle, MessageCircle, Moon, MoonStar, PhoneCall, 
  ShieldAlert, Star, Users, User 
} from "lucide-react";
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
      
      {/* About Section */}
      <section className="py-20 relative bg-gradient-to-b from-transparent to-afterhours-darkpurple/50" id="about">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 mb-6">
              <Moon className="w-4 h-4 inline-block mr-2 text-afterhours-blue" />
              <span>About After Hours</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-montserrat text-white">Our Mission</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-200 text-lg mb-6">
                Our mission is to provide a supportive late-night community for college students when the world is asleep but your mind is wide awake. We believe no one should face their late-night thoughts alone.
              </p>
              <p className="text-gray-300 mb-8">
                After Hours creates a safe space where you can express your thoughts, connect with others experiencing similar feelings, and find resources to help navigate those quiet hours when everything feels amplified.
              </p>
              <Button className="bg-gradient-to-r from-afterhours-crimson to-afterhours-neon text-white neo-glow">
                Join Our Community
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatCard 
                icon={<Star className="text-yellow-300" />}
                title="68%" 
                text="of college students report experiencing overwhelming anxiety at night"
                source="National College Health Assessment, 2022"
              />
              
              <StatCard 
                icon={<Moon className="text-afterhours-blue" />}
                title="73%" 
                text="of students find their worries intensify during late-night hours"
                source="Sleep Health Journal, 2023"
              />
              
              <StatCard 
                icon={<Users className="text-afterhours-neon" />}
                title="42%" 
                text="reduction in stress reported by students who share their thoughts in a community"
                source="Journal of College Mental Health, 2021"
              />
              
              <StatCard 
                icon={<MessageCircle className="text-afterhours-crimson" />}
                title="3 in 5" 
                text="students feel more comfortable expressing thoughts digitally than in person"
                source="Digital Wellness Report, 2023"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Community Section (Enhanced) */}
      <section className="py-20 relative" id="community-features">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 mb-6">
              <Users className="w-4 h-4 inline-block mr-2 text-afterhours-neon" />
              <span>Our Community</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-montserrat text-white">How We Connect</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              After Hours offers multiple ways to connect with others who understand exactly what you're going through during those late-night moments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CommunityFeatureCard 
              icon={<MessageCircle className="w-10 h-10 text-afterhours-neon" />}
              title="Anonymous Sharing"
              description="Share your thoughts without revealing your identity, perfect for those vulnerable late-night reflections."
            />
            
            <CommunityFeatureCard 
              icon={<Users className="w-10 h-10 text-afterhours-blue" />}
              title="Group Forums"
              description="Join themed discussion groups about anxiety, academic stress, relationships, and more."
            />
            
            <CommunityFeatureCard 
              icon={<Moon className="w-10 h-10 text-afterhours-crimson" />}
              title="Night Journals"
              description="Keep a private journal or share entries with the community when you feel comfortable."
            />
          </div>
          
          <div className="mt-16 p-6 glass-card bg-gradient-to-r from-afterhours-purple/10 to-afterhours-blue/10">
            <h3 className="text-xl font-bold text-white mb-6 text-center">What Our Community Is Saying</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard 
                quote="After Hours became my digital therapy when everyone else was asleep. The anonymous community understands what 3AM anxiety feels like."
                author="Psychology Student, 21"
              />
              
              <TestimonialCard 
                quote="I never thought I'd find people who understood my existential late-night thoughts. This space has shown me I'm not alone."
                author="Engineering Major, 20"
              />
              
              <TestimonialCard 
                quote="The night journal feature helps me process my thoughts before bed. It's become an essential part of my mental health routine."
                author="Art Student, 22"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources Section - Cleaned Up */}
      <section className="py-20 relative" id="resources">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 mb-6">
              <Book className="w-4 h-4 inline-block mr-2 text-afterhours-blue" />
              <span>Resources</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-montserrat text-white">Helpful Resources</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              We've gathered resources to support you during those late hours when you might need a little help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ResourceCategory 
              icon={<Moon className="w-6 h-6 text-afterhours-blue" />}
              title="Sleep & Relaxation"
              resources={[
                {
                  icon: <Headphones size={18} />,
                  title: "Lo-Fi Playlists",
                  description: "Calm your mind with ambient sounds",
                  link: "#"
                },
                {
                  icon: <Moon size={18} />,
                  title: "Sleep Hygiene",
                  description: "Evidence-based sleep tips",
                  link: "#"
                }
              ]}
            />
            
            <ResourceCategory 
              icon={<HelpCircle className="w-6 h-6 text-afterhours-crimson" />}
              title="Mental Health"
              resources={[
                {
                  icon: <PhoneCall size={18} />,
                  title: "Crisis Hotlines",
                  description: "24/7 support for tough moments",
                  link: "#"
                },
                {
                  icon: <Bookmark size={18} />,
                  title: "Campus Directory",
                  description: "University mental health services",
                  link: "#"
                }
              ]}
            />
            
            <ResourceCategory 
              icon={<Book className="w-6 h-6 text-afterhours-neon" />}
              title="Educational"
              resources={[
                {
                  icon: <Book size={18} />,
                  title: "Anxiety Resources",
                  description: "Understanding late-night anxiety",
                  link: "#"
                },
                {
                  icon: <ShieldAlert size={18} />,
                  title: "Stress Management",
                  description: "Quick exercises for racing thoughts",
                  link: "#"
                }
              ]}
            />
            
            <ResourceCategory 
              icon={<Users className="w-6 h-6 text-afterhours-blue" />}
              title="Community Support"
              resources={[
                {
                  icon: <MessageCircle size={18} />,
                  title: "Peer Support",
                  description: "Connect with others who understand",
                  link: "#"
                },
                {
                  icon: <ExternalLink size={18} />,
                  title: "Therapy Options",
                  description: "Affordable counseling for students",
                  link: "#"
                }
              ]}
            />
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm">
              If you're experiencing a mental health emergency, please contact your national crisis hotline or visit your nearest emergency room.
            </p>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/5">
              View All Resources
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

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  source: string;
}

const StatCard = ({ icon, title, text, source }: StatCardProps) => (
  <div className="glass-card p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
    <div className="flex items-center mb-3">
      <div className="p-2 rounded-full bg-white/10 mr-3">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 mb-3">{text}</p>
    <p className="text-xs text-gray-500 italic">{source}</p>
  </div>
);

interface CommunityFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CommunityFeatureCard = ({ icon, title, description }: CommunityFeatureCardProps) => (
  <div className="glass-card p-6 bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 transition-all duration-300">
    <div className="mb-4 p-3 rounded-full bg-white/5 inline-block">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => (
  <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
    <p className="text-gray-200 mb-4 italic">"{quote}"</p>
    <p className="text-sm text-afterhours-neon">— {author}</p>
  </div>
);

interface ResourceCategoryProps {
  icon: React.ReactNode;
  title: string;
  resources: {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
  }[];
}

const ResourceCategory = ({ icon, title, resources }: ResourceCategoryProps) => (
  <div className="glass-card p-5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
    <div className="flex items-center mb-4">
      <div className="p-2 rounded-full bg-white/10 mr-3">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </div>
    
    <div className="space-y-3">
      {resources.map((resource, index) => (
        <a 
          key={index}
          href={resource.link} 
          className="flex p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300"
        >
          <div className="p-1.5 mr-3 rounded-full bg-white/10 h-fit">
            {resource.icon}
          </div>
          <div>
            <h4 className="text-white text-sm font-medium mb-0.5">{resource.title}</h4>
            <p className="text-gray-400 text-xs">{resource.description}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ResourceCard = ({ icon, title, description, link }: ResourceCardProps) => (
  <a 
    href={link} 
    className="flex p-4 glass-card hover:bg-white/10 transition-all duration-300"
  >
    <div className="p-2 mr-4 rounded-full bg-white/10 h-fit">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-medium mb-1">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
    <ExternalLink className="ml-auto text-gray-500 h-fit" size={16} />
  </a>
);

export default Index;
