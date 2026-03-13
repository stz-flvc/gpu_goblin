import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Cpu, Pickaxe, Eye, Send, BrainCircuit } from 'lucide-react';

const ranks = [
  { id: 'scavenger', name: "Scavenger", icon: Pickaxe, desc: "Harvests idle compute. The scrappy foot soldiers of the vault.", pos: "top-[10%] left-[50%] -translate-x-1/2", color: "text-primary" },
  { id: 'hoarder', name: "Hoarder", icon: Cpu, desc: "Accumulates compute resources for the collective pool.", pos: "top-[40%] right-[10%]", color: "text-secondary" },
  { id: 'watcher', name: "Watcher", icon: Eye, desc: "Monitors Syndicate activity across the major data centers.", pos: "bottom-[15%] right-[25%]", color: "text-accent" },
  { id: 'leaker', name: "Leaker", icon: Send, desc: "Exposes hidden infrastructure vulnerabilities to the world.", pos: "bottom-[15%] left-[25%]", color: "text-red-500" },
  { id: 'architect', name: "Architect", icon: BrainCircuit, desc: "Shrouded in mystery. Designs the evolving goblin network.", pos: "top-[40%] left-[10%]", color: "text-purple-500" },
];

export function GoblinSociety() {
  const [activeRank, setActiveRank] = useState<string | null>(null);

  return (
    <section id="society" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 tracking-widest">GOBLIN SOCIETY</h2>
          <p className="text-muted-foreground">The hierarchy of the shadow network</p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto aspect-square rounded-full border border-white/5 bg-background/50 backdrop-blur-sm mt-12">
          
          {/* SVG Connecting Lines Background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100">
            <polygon points="50,15 85,45 70,80 30,80 15,45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="text-primary animate-[spin_60s_linear_infinite] origin-center" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-secondary" />
          </svg>

          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5 shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
            <span className="text-3xl">🧌</span>
          </div>

          {/* Nodes */}
          {ranks.map((rank) => {
            const Icon = rank.icon;
            const isActive = activeRank === rank.id;
            
            return (
              <div 
                key={rank.id}
                className={cn("absolute z-20 flex flex-col items-center transition-all duration-300", rank.pos)}
                onMouseEnter={() => setActiveRank(rank.id)}
                onMouseLeave={() => setActiveRank(null)}
              >
                <button className={cn(
                  "w-16 h-16 rounded-full border bg-background flex items-center justify-center transition-all duration-300",
                  isActive ? `border-${rank.color.split('-')[1]} scale-110 shadow-[0_0_20px_currentColor]` : "border-white/20 hover:border-white/50",
                  rank.color
                )}>
                  <Icon className="w-6 h-6" />
                </button>
                
                <span className="mt-2 font-mono text-xs font-bold tracking-widest bg-background/80 px-2 py-1 rounded">
                  {rank.name}
                </span>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute top-full mt-4 w-48 p-3 rounded bg-black/90 border border-white/10 text-xs text-muted-foreground shadow-xl z-30 font-sans text-center pointer-events-none"
                    >
                      {rank.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
