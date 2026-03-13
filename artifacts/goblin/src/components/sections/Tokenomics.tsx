import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Cpu, Droplets, Coins } from 'lucide-react';
import { cn } from '@/lib/utils';

function AnimatedCounter({ end, duration = 2 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(end * easeOut));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
}

const features = [
  { icon: Droplets, title: "Fair Launch", desc: "No VCs. No insiders. 100% available to the goblins." },
  { icon: Lock, title: "Liquidity Locked", desc: "Permanently burned LP tokens. Rug-proof vault." },
  { icon: Coins, title: "Fixed Supply", desc: "Deflationary tokenomics by design." },
  { icon: Cpu, title: "Solana Network", desc: "High speed, low cost infrastructure." }
];

export function Tokenomics() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section id="token" className="py-24 bg-gradient-to-b from-background to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">WHAT IS <span className="text-primary">$GOBLIN</span>?</h2>
          <p className="text-muted-foreground font-mono">NETWORK_CURRENCY // SOL_PROGRAM</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Stats Card */}
          <motion.div 
            onViewportEnter={() => setIsVisible(true)}
            viewport={{ once: true }}
            className="lg:col-span-8 glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Circuit background subtle */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-white/10 pb-8">
              <div>
                <h3 className="text-sm font-mono text-muted-foreground mb-2">TOTAL SUPPLY</h3>
                <div className="text-4xl md:text-6xl font-black font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                  {isVisible ? <AnimatedCounter end={1000000000} /> : "0"}
                </div>
              </div>
              <div className="text-right">
                <h3 className="text-sm font-mono text-muted-foreground mb-2">NETWORK</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#9945FF] to-[#14F195] animate-pulse" />
                  <span className="text-xl font-bold">SOLANA</span>
                </div>
              </div>
            </div>

            {/* Distribution Bar */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono text-muted-foreground">TOKEN DISTRIBUTION</h3>
              <div className="h-6 w-full rounded-full overflow-hidden flex bg-white/5 border border-white/10">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className="bg-primary h-full relative group"
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "2%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className="bg-accent h-full relative group"
                />
              </div>
              <div className="flex justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-primary">98% Community / LP</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-accent">2% Architect Reserve</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors flex items-start gap-4 group"
              >
                <div className="p-2 rounded bg-background border border-white/10 group-hover:border-primary/50 transition-colors">
                  <f.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
