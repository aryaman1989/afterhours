
import { MoonStar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-white/5 backdrop-blur-md relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-afterhours-darkpurple/80 to-transparent opacity-50"></div>
      
      {/* Retro scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div>
            <span className="text-white text-lg font-medium font-montserrat">AfterHours</span>
          </div>
          <p className="text-gray-400 text-sm mt-1">A space for your late-night thoughts</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
