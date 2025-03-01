
import { useState } from 'react';
import { Moon, Send, UserCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ThoughtForm = () => {
  const [thought, setThought] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [loading, setLoading] = useState(false);
  
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
    <div className="glass-card p-6 backdrop-blur-md max-w-lg mx-auto w-full">
      <div className="flex items-center mb-4">
        <Moon className="w-5 h-5 text-afterhours-neon mr-2" />
        <h3 className="text-lg font-medium text-white">What's on your mind tonight?</h3>
      </div>
      
      <form onSubmit={handleSubmit}>
        <Textarea
          placeholder="Type your late-night thoughts here..."
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none min-h-[150px] mb-4"
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        />
        
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
            className="neo-glow bg-afterhours-neon text-white hover:bg-afterhours-neon/90 transition-all"
            disabled={loading || !thought.trim()}
          >
            <Send className="w-4 h-4 mr-2" />
            {loading ? "Sharing..." : "Share Thought"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ThoughtForm;
