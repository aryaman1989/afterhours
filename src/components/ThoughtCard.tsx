
import { useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';

interface ThoughtCardProps {
  thought: {
    id: string;
    content: string;
    timestamp: string;
    anonymous: boolean;
    author?: string;
    likes: number;
    comments: number;
    mood?: 'calm' | 'reflective' | 'anxious' | 'hopeful';
  };
}

const ThoughtCard = ({ thought }: ThoughtCardProps) => {
  const [liked, setLiked] = useState(false);
  
  const getMoodColor = (mood?: string) => {
    switch (mood) {
      case 'calm': return 'from-blue-400/20 to-blue-600/10';
      case 'reflective': return 'from-purple-400/20 to-purple-600/10';
      case 'anxious': return 'from-red-400/20 to-red-600/10';
      case 'hopeful': return 'from-green-400/20 to-green-600/10';
      default: return 'from-gray-400/20 to-gray-600/10';
    }
  };
  
  const getRandomRotation = () => {
    return Math.random() > 0.5 ? 'rotate-1' : '-rotate-1';
  };

  return (
    <div className={`glass-card p-5 overflow-hidden transition-all duration-300 hover:shadow-xl ${getRandomRotation()}`}>
      <div className={`absolute -inset-1 opacity-30 rounded-xl bg-gradient-to-br ${getMoodColor(thought.mood)} z-0 blur-xl`}></div>
      
      <div className="relative z-10">
        <div className="text-sm text-gray-400 flex justify-between mb-3">
          <span>{thought.anonymous ? 'Anonymous' : thought.author || 'Unknown'}</span>
          <span>{formatTimeAgo(thought.timestamp)}</span>
        </div>
        
        <p className="text-white mb-4 leading-relaxed">{thought.content}</p>
        
        <div className="flex justify-between items-center pt-3 border-t border-white/10">
          <button 
            className={`flex items-center gap-1 text-sm ${liked ? 'text-red-400' : 'text-gray-400'} hover:text-red-400 transition-colors`}
            onClick={() => setLiked(!liked)}
          >
            <Heart className="w-4 h-4" />
            <span>{liked ? thought.likes + 1 : thought.likes}</span>
          </button>
          
          <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span>{thought.comments}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const formatTimeAgo = (timestamp: string) => {
  const now = new Date();
  const past = new Date(timestamp);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  return `${Math.floor(diffInSeconds / 86400)}d ago`;
};

export default ThoughtCard;
