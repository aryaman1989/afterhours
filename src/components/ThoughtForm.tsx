
import { useState } from 'react';
import { Moon, Send, UserCircle, MessageSquare, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ThoughtForm = () => {
  const [thought, setThought] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [loading, setLoading] = useState(false);
  const [mood, setMood] = useState<'reflective' | 'anxious' | 'calm'>('reflective');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!thought.trim()) {
      toast.error("Please enter a thought before submitting");
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Your thought has been shared with the community");
      setThought('');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="glass-card p-6 backdrop-blur-md max-w-lg mx-auto w-full border-white/10 relative overflow-hidden">
      {/* Subtle glow effect in the corner */}
      <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-afterhours-neon/20 blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-afterhours-blue/20 blur-xl"></div>
      
      <div className="flex items-center mb-4">
        <Moon className="w-5 h-5 text-afterhours-neon mr-2" />
        <h3 className="text-lg font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">What's on your mind tonight?</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="relative z-10">
        <Textarea
          placeholder="Type your late-night thoughts here..."
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none min-h-[150px] mb-4 focus:ring-afterhours-neon/50 focus:border-afterhours-neon/50 transition-all"
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        />
        
        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-2 flex items-center">
            <Star className="w-4 h-4 mr-1 text-yellow-300" />
            Current mood
          </p>
          <div className="flex space-x-2">
            <MoodButton 
              active={mood === 'reflective'} 
              onClick={() => setMood('reflective')}
              label="Reflective"
              color="bg-afterhours-purple"
            />
            <MoodButton 
              active={mood === 'anxious'} 
              onClick={() => setMood('anxious')}
              label="Anxious"
              color="bg-afterhours-crimson"
            />
            <MoodButton 
              active={mood === 'calm'} 
              onClick={() => setMood('calm')}
              label="Calm"
              color="bg-afterhours-blue"
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center">
            <Switch 
              checked={isAnonymous} 
              onCheckedChange={setIsAnonymous}
              className="data-[state=checked]:bg-afterhours-neon"
            />
            <label className="ml-2 text-sm text-gray-300 flex items-center">
              <UserCircle className="w-4 h-4 mr-1" />
              Post anonymously
            </label>
          </div>
          
          <Button 
            type="submit" 
            className={`neo-glow ${thought.trim() ? 'bg-gradient-to-r from-afterhours-crimson to-afterhours-neon' : 'bg-gray-700'} text-white hover:bg-afterhours-neon/90 transition-all`}
            disabled={loading || !thought.trim()}
          >
            {loading ? (
              <>
                <div className="animate-pulse w-4 h-4 mr-2 rounded-full bg-white"></div>
                Sharing...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Share Thought
              </>
            )}
          </Button>
        </div>
      </form>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-xs text-gray-500 flex items-center">
          <MessageSquare className="w-3 h-3 mr-1" />
          Your thoughts are shared with our supportive community. We're all in this together.
        </p>
      </div>
    </div>
  );
};

interface MoodButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  color: string;
}

const MoodButton = ({ active, onClick, label, color }: MoodButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`py-1 px-3 rounded-full text-xs transition-all ${
      active 
        ? `${color} text-white ring-2 ring-white/20 ring-offset-1 ring-offset-afterhours-black` 
        : 'bg-white/5 text-gray-400 hover:bg-white/10'
    }`}
  >
    {label}
  </button>
);

export default ThoughtForm;
