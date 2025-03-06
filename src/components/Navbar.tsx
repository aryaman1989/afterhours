import { useState, useEffect } from 'react';
import { Menu, MoonStar, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

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
      scrolled ? 'glassmorphism py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold text-white font-inter tracking-wider flex items-center gap-2">
              <MoonStar className="w-6 h-6 text-afterhours-blue" />
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent retro-text">After Hours</span>
            </h1>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/feed">Feed</NavLink>
          <NavLink href="/#thoughts">Community</NavLink>
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/#resources">Resources</NavLink>
          
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
        <div className="md:hidden absolute top-full left-0 right-0 glassmorphism animate-fade-in vhs-effect">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/feed" onClick={() => setMobileMenuOpen(false)}>Feed</MobileNavLink>
            <MobileNavLink href="/#thoughts" onClick={() => setMobileMenuOpen(false)}>Community</MobileNavLink>
            <MobileNavLink href="/#about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/#resources" onClick={() => setMobileMenuOpen(false)}>Resources</MobileNavLink>
            
            <Button variant="outline" className="w-full neo-glow border-afterhours-blue text-white">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const isExternal = href.startsWith('http');
  
  if (href.startsWith('/#')) {
    return (
      <a 
        href={href}
        className="text-gray-300 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-afterhours-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 text-sm font-medium tracking-wide"
      >
        {children}
      </a>
    );
  }
  
  return isExternal ? (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-afterhours-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 text-sm font-medium tracking-wide"
    >
      {children}
    </a>
  ) : (
    <Link 
      to={href}
      className="text-gray-300 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-afterhours-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 text-sm font-medium tracking-wide"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => {
  const isExternal = href.startsWith('http');
  
  if (href.startsWith('/#')) {
    return (
      <a 
        href={href}
        onClick={onClick}
        className="text-gray-300 hover:text-white transition-colors duration-300 py-2 block border-b border-white/5"
      >
        {children}
      </a>
    );
  }
  
  return isExternal ? (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="text-gray-300 hover:text-white transition-colors duration-300 py-2 block border-b border-white/5"
    >
      {children}
    </a>
  ) : (
    <Link 
      to={href}
      onClick={onClick}
      className="text-gray-300 hover:text-white transition-colors duration-300 py-2 block border-b border-white/5"
    >
      {children}
    </Link>
  );
};

export default Navbar;
