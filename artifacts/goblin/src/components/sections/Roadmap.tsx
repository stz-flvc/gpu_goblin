import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Zap, Globe, Users, Database, Network, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

const phases = [
  {
    num: 1,
    title: "GOBLIN AWAKENING",
    goal: "Awaken the Goblins",
    status: "active",
    icon: Zap,
    items: [
      "Launch $GOBLIN on Solana",
      "Build the first Goblin community",
      "Spread GPU Goblin memes",
      "Expand social channels",
      "Reach the first 100 Goblins",
    ],
    milestone: "100 Holders",
    milestoneIcon: Users,
  },
  {
    num: 2,
    title: "DATA CENTER RAIDS",
    goal: "Expose the compute monopolies",
    status: "locked",
    icon: Database,
    items: [
      "Grow the Goblin community",
      "Release more GPU Goblin lore & memes",
      "Expose data center centralization",
      "Reach 500+ Goblins",
    ],
    milestone: "500 Holders",
    milestoneIcon: Users,
  },
  {
    num: 3,
    title: "GOBLIN NETWORK",
    goal: "Build the Goblin network",
    status: "locked",
    icon: Network,
    items: [
      "Expand the GPU Goblin movement",
      "Community-created memes and art",
      "Partner with creators & developers",
      "Launch Goblin-themed tools",
      "Reach 1,000+ Goblins",
    ],
    milestone: "1,000 Holders",
    milestoneIcon: Users,
  },
  {
    num: 4,
    title: "FREE THE COMPUTE",
    goal: "Challenge centralized compute",
    status: "locked",
    icon: Globe,
    items: [
      "Raise compute centralization awareness",
      "Publish educational content",
      "Grow into a real movement",
      "Explore decentralized compute",
    ],
    milestone: "The Movement",
    milestoneIcon: Target,
  }
];

export function Roadmap() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-background">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            THE VAULT <span className="text-secondary">EXPANSION</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm tracking-widest">LOADING_DIRECTIVES... PHASE_SEQUENCE_INITIALIZED</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, i) => {
            const Icon = phase.status === 'active' ? Unlock : Lock;
            const MilestoneIcon = phase.milestoneIcon;
            const isHovered = hovered === i;
            const isActive = phase.status === 'active';

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative"
              >
                <div className={cn(
                  "relative bg-[#0a0a12] border-2 rounded-lg transition-all duration-500 overflow-hidden flex flex-col",
                  isActive
                    ? "border-primary shadow-[0_0_20px_hsl(var(--primary)/0.25)]"
                    : isHovered
                      ? "border-secondary/60 shadow-[0_0_20px_hsl(var(--secondary)/0.2)] -translate-y-2"
                      : "border-white/10"
                )}>
                  {/* Corner rivets */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-white/20" />

                  {/* Active glow inner */}
                  {isActive && (
                    <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                  )}

                  <div className="p-5 flex-1 flex flex-col gap-4">
                    {/* Header row */}
                    <div className="flex justify-between items-start">
                      <span className={cn(
                        "font-mono text-3xl font-bold opacity-25",
                        isActive ? "text-primary" : "text-white"
                      )}>
                        0{phase.num}
                      </span>
                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="text-[10px] font-mono text-primary border border-primary/40 px-1.5 py-0.5 rounded tracking-widest animate-pulse">
                            ACTIVE
                          </span>
                        )}
                        <Icon className={cn(
                          "w-5 h-5",
                          isActive ? "text-primary" : isHovered ? "text-secondary" : "text-muted-foreground"
                        )} />
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className={cn(
                        "font-display font-bold text-base tracking-wider leading-tight",
                        isActive ? "text-white" : isHovered ? "text-white" : "text-muted-foreground"
                      )}>
                        {phase.title}
                      </h3>
                    </div>

                    {/* Bullet items */}
                    <ul className="flex-1 space-y-1.5">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs">
                          <span className={cn(
                            "mt-1 w-1 h-1 rounded-full shrink-0",
                            isActive ? "bg-primary" : isHovered ? "bg-secondary" : "bg-white/20"
                          )} />
                          <span className={cn(
                            "transition-colors duration-300",
                            isActive ? "text-foreground/80" : isHovered ? "text-foreground/70" : "text-muted-foreground/60"
                          )}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Goal + milestone */}
                    <div className={cn(
                      "border-t pt-3 mt-auto space-y-1.5 transition-colors duration-300",
                      isActive ? "border-primary/20" : "border-white/5"
                    )}>
                      <div className="flex items-center gap-1.5">
                        <MilestoneIcon className={cn(
                          "w-3.5 h-3.5",
                          isActive ? "text-primary" : isHovered ? "text-secondary" : "text-muted-foreground/50"
                        )} />
                        <span className={cn(
                          "font-mono text-[11px] font-bold tracking-wider",
                          isActive ? "text-primary" : isHovered ? "text-secondary" : "text-muted-foreground/50"
                        )}>
                          {phase.milestone}
                        </span>
                      </div>
                      <p className={cn(
                        "font-mono text-[10px] tracking-wide italic",
                        isActive ? "text-primary/70" : "text-muted-foreground/40"
                      )}>
                        GOAL: {phase.goal}
                      </p>
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className={cn(
                    "h-1.5 w-full transition-all duration-500",
                    isActive ? "bg-primary" : isHovered ? "bg-secondary/50" : "bg-white/5"
                  )} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Connecting line */}
        <div className="hidden lg:flex items-center justify-between mt-8 px-16 relative">
          <div className="absolute left-16 right-16 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-primary/50 via-secondary/30 to-white/5" />
          {phases.map((phase, i) => (
            <div key={i} className={cn(
              "relative w-3 h-3 rounded-full border-2 z-10",
              phase.status === 'active'
                ? "bg-primary border-primary shadow-[0_0_10px_hsl(var(--primary)/0.8)]"
                : "bg-background border-white/20"
            )} />
          ))}
        </div>
      </div>
    </section>
  );
}
