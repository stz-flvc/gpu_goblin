import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

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
              {/* X (Twitter) */}
              <a href="https://x.com/GPUGOBLINS" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary hover:border-primary transition-colors" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.734l7.757-8.875L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Telegram */}
              <a href="https://t.me/+VqYSXsC_Va9jZjIx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary hover:border-primary transition-colors" aria-label="Telegram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
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
