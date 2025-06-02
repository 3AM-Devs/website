import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../../data/navigation.tsx';
import Container from '../ui/Container.tsx';
import Button from '../ui/Button.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Github className="h-6 w-6 text-primary animate-pulse" />
              <span className="text-xl font-bold">3AM Devs</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className={`text-sm font-medium transition-colors animated-underline ${
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-foreground/90 hover:text-primary'
                }`}
              >
                {item.title}
              </Link>
            ))}
            <Button variant="primary" size="sm">Join Us</Button>
          </nav>
          
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>
      
      {isOpen && (
        <div className="md:hidden">
          <Container>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border animate-slideIn">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full" variant="primary">Join Us</Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;