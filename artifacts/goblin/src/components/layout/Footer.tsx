import { useState, useEffect } from 'react';
import { Terminal, Github, Twitter, MessageSquare } from 'lucide-react';

const lines = [
  "> THE VAULTS ARE EXPANDING...",
  "> IDLE COMPUTE DETECTED",
  "> HARVESTING IN PROGRESS...",
  "> $GOBLIN [INITIALIZED]",
  "> GOBLIN NETWORK: ONLINE"
];

export function Footer() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (newLines[currentLineIndex] === undefined) {
            newLines[currentLineIndex] = '';
          }
          newLines[currentLineIndex] += currentLine[currentCharIndex];
          return newLines;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, Math.random() * 30 + 20); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, 500); // Pause between lines
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8 relative overflow-hidden">
      {/* Scanline effect overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          
          {/* Terminal Output */}
          <div className="font-mono text-xs sm:text-sm text-primary/80 bg-black/50 p-6 rounded-lg border border-primary/20 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] h-48 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-4 text-muted-foreground pb-2 border-b border-white/5">
              <Terminal size={14} />
              <span>/var/log/goblin.sys</span>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col justify-end">
              {displayedLines.map((line, i) => (
                <div key={i} className="mb-1">{line}</div>
              ))}
              <div className="flex">
                <span className="w-2 h-4 bg-primary inline-block animate-blink ml-1" />
              </div>
            </div>
          </div>

          {/* Links & Info */}
          <div className="flex flex-col md:items-end gap-6 text-left md:text-right">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🧌</span>
              <h2 className="font-display font-bold text-2xl tracking-widest text-foreground">
                GPU GOBLINS
              </h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm">
              A decentralized movement reclaiming idle compute power from corporate silos. We are the architects of the new web.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary hover:border-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary hover:border-primary transition-colors">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary hover:border-primary transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
          <p>© {new Date().getFullYear()} GPU Goblins Syndicate. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Contract</a>
            <a href="#" className="hover:text-primary transition-colors">Manifesto</a>
            <a href="#" className="hover:text-primary transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
