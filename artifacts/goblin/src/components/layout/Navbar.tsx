import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Chronicles', href: '#chronicles' },
  { label: 'Conflict', href: '#conflict' },
  { label: 'Society', href: '#society' },
  { label: '$GOBLIN', href: '#token' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Mission', href: '#mission' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Basic scroll spy
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-background/80 backdrop-blur-lg border-white/10 py-3 shadow-lg" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🧌</span>
          <span className="font-display font-bold text-xl tracking-widest text-foreground">
            GPU GOBLINS
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-mono tracking-wide transition-colors duration-200 hover:text-primary",
                activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            size="sm" 
            onClick={() => document.querySelector('#community')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Enter the Vault
          </Button>
        </div>
      </div>
    </header>
  );
}
