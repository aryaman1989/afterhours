
import { MoonStar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-white/5 backdrop-blur-md relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-afterhours-darkpurple/80 to-transparent opacity-50"></div>
      
      {/* Retro scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none"></div>
      
      {/* VHS tracking lines */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute h-1 bg-blue-500/30 w-full animate-[pulse_2s_infinite] left-0 top-1/4"></div>
        <div className="absolute h-1 bg-red-500/30 w-full animate-[pulse_3s_infinite] left-0 top-3/4"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <MoonStar className="w-5 h-5 text-afterhours-blue" />
            <span className="text-white text-lg font-medium font-montserrat tracking-wider retro-text">After Hours</span>
          </div>
          <p className="text-gray-400 text-sm mt-1">A space for your late-night thoughts</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
