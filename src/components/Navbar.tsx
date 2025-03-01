
import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-afterhours-black/70 backdrop-blur-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white font-montserrat tracking-wider">
            <span className="text-afterhours-neon text-glow">After</span>
            <span>Hours</span>
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#thoughts">Community</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#resources">Resources</NavLink>
          
          <Button variant="outline" className="ml-2 neo-glow border-afterhours-blue text-white">
            Sign In
          </Button>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-afterhours-darkpurple/95 backdrop-blur-lg border-t border-white/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="#home" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#thoughts" onClick={() => setMobileMenuOpen(false)}>Community</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#resources" onClick={() => setMobileMenuOpen(false)}>Resources</MobileNavLink>
            
            <Button variant="outline" className="w-full neo-glow border-afterhours-blue text-white">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-afterhours-neon after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <a 
    href={href}
    onClick={onClick}
    className="text-gray-300 hover:text-white transition-colors duration-300 py-2 block border-b border-white/5"
  >
    {children}
  </a>
);

export default Navbar;
