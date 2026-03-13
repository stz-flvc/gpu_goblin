import React from 'react';
import { cn } from '@/lib/utils';

export function VaultCore({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center", className)}>
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-[60px] animate-pulse-glow" />
      
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        {/* Outer Ring */}
        <circle 
          cx="100" cy="100" r="90" 
          fill="none" 
          stroke="hsl(var(--secondary)/0.3)" 
          strokeWidth="1"
          strokeDasharray="4 8"
          className="animate-spin-slow origin-center"
        />
        
        {/* Hexagon 1 */}
        <polygon 
          points="100,20 169.28,60 169.28,140 100,180 30.72,140 30.72,60" 
          fill="none" 
          stroke="hsl(var(--primary))" 
          strokeWidth="2"
          className="animate-spin-reverse-slow origin-center drop-shadow-[0_0_8px_hsl(var(--primary))]"
        />
        
        {/* Hexagon 2 */}
        <polygon 
          points="100,35 156.29,67.5 156.29,132.5 100,165 43.71,132.5 43.71,67.5" 
          fill="none" 
          stroke="hsl(var(--secondary))" 
          strokeWidth="1.5"
          strokeDasharray="10 5"
          className="animate-spin-slow origin-center drop-shadow-[0_0_5px_hsl(var(--secondary))]"
        />
        
        {/* Inner Core */}
        <circle 
          cx="100" cy="100" r="25" 
          fill="hsl(var(--background))" 
          stroke="hsl(var(--primary))" 
          strokeWidth="3"
          className="drop-shadow-[0_0_15px_hsl(var(--primary))]"
        />
        
        {/* Circuit lines */}
        <path d="M100,75 L100,50 M121.65,87.5 L143.3,75 M121.65,112.5 L143.3,125 M100,125 L100,150 M78.35,112.5 L56.7,125 M78.35,87.5 L56.7,75" 
              stroke="hsl(var(--primary))" 
              strokeWidth="2"
              className="opacity-50"
        />
      </svg>

      {/* Center Emoji */}
      <div className="absolute text-4xl animate-pulse">🧌</div>
    </div>
  );
}
