import { motion } from 'framer-motion';
import { Lock, Unlock, Zap, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const phases = [
  {
    num: 1,
    title: "GOBLIN AWAKENING",
    desc: "Token launch, community building, and establishing the foundational goblin network across social channels.",
    status: "active",
    icon: Zap
  },
  {
    num: 2,
    title: "DATA CENTER RAIDS",
    desc: "Exposing centralized compute power structures through viral campaigns and decentralized tools.",
    status: "locked",
    icon: Lock
  },
  {
    num: 3,
    title: "GOBLIN NETWORK",
    desc: "Release of proprietary decentralized applications for compute sharing and validation.",
    status: "locked",
    icon: Lock
  },
  {
    num: 4,
    title: "FREE THE COMPUTE",
    desc: "Challenging monopoly infrastructure directly. The full realization of the autonomous goblin society.",
    status: "locked",
    icon: Globe
  }
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">THE VAULT <span className="text-secondary">EXPANSION</span></h2>
          <p className="text-muted-foreground font-mono">LOADING_DIRECTIVES...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, i) => {
            const Icon = phase.status === 'active' ? Unlock : phase.icon;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative h-80"
              >
                {/* Door styling container */}
                <div className={cn(
                  "absolute inset-0 bg-[#111] border-2 rounded-lg transition-all duration-500 overflow-hidden flex flex-col",
                  phase.status === 'active' 
                    ? "border-primary shadow-[0_0_15px_hsl(var(--primary)/0.3)]" 
                    : "border-white/10 group-hover:border-secondary/50 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_hsl(var(--secondary)/0.2)]"
                )}>
                  
                  {/* Metallic rivets decorative */}
                  <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-white/20" />
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/20" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-white/20" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-white/20" />

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <span className={cn(
                        "font-mono text-4xl font-bold opacity-30",
                        phase.status === 'active' ? "text-primary" : "text-white"
                      )}>
                        0{phase.num}
                      </span>
                      <Icon className={cn(
                        "w-6 h-6",
                        phase.status === 'active' ? "text-primary animate-pulse" : "text-muted-foreground group-hover:text-secondary"
                      )} />
                    </div>
                    
                    <h3 className={cn(
                      "font-display font-bold text-xl mb-4 tracking-wider",
                      phase.status === 'active' ? "text-white" : "text-muted-foreground group-hover:text-white"
                    )}>
                      {phase.title}
                    </h3>

                    {/* Door reveal content */}
                    <div className={cn(
                      "mt-auto transition-all duration-500",
                      phase.status === 'active' ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                    )}>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {phase.desc}
                      </p>
                    </div>
                  </div>

                  {/* Status indicator bar at bottom */}
                  <div className={cn(
                    "h-2 w-full",
                    phase.status === 'active' ? "bg-primary" : "bg-white/5 group-hover:bg-secondary/50 transition-colors"
                  )} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
