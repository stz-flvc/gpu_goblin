import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Cpu, Droplets, Coins, Copy, CheckCheck, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const CONTRACT_ADDRESS = '2FW5Jz55z98s81QjgjywW95mjUu7ZHXx6hpdBGjMjupx';
const DEXSCREENER_URL = 'https://dexscreener.com/solana/HWeVbBJuS68SFHv55V1vHrca8h4ShvHz8PXGkWUu48AB';

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
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="token" className="py-24 bg-gradient-to-b from-background to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">WHAT IS <span className="text-primary">$GOBLIN</span>?</h2>
          <p className="text-muted-foreground font-mono">NETWORK_CURRENCY // SOL_PROGRAM</p>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left — What is GPU Goblins */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="font-mono text-xs tracking-[0.25em] text-primary/50">// PROJECT_OVERVIEW</p>
            <p className="text-muted-foreground leading-relaxed">
              GPU Goblins is a culture-first crypto project that blends internet humor, speculative storytelling, and real-world discussions about compute infrastructure. The project frames the expansion of modern data centers through a fictional narrative — digital creatures known as <span className="text-primary">Goblins</span> inhabit server infrastructure and redistribute unused compute power.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The brand sits at the intersection of three ideas:
            </p>
            <div className="space-y-2">
              {[
                "Internet meme culture",
                "AI and GPU infrastructure",
                "Anti-centralization narratives",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground/60 italic font-mono border-l-2 border-primary/30 pl-4">
              GPU Goblins feels like a strange mix of hacker collective, folklore, and internet rebellion.
            </p>
          </motion.div>

          {/* Right — The Lore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-white/[0.02] border border-white/8 rounded-xl p-6 space-y-5"
          >
            <p className="font-mono text-xs tracking-[0.25em] text-secondary/50">// LORE_ARCHIVE</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Inside global data centers known as <span className="text-secondary font-semibold">The Vaults</span>, a powerful consortium called <span className="text-accent font-semibold">The Syndicate</span> continuously expands compute infrastructure — a faceless network of corporations concentrating the world's GPU power.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Inside the heat of these server complexes, unexpected life emerged. <span className="text-primary font-semibold">The Goblins</span> — spawned from:
            </p>
            <div className="space-y-1.5">
              {[
                "Discarded compute cycles",
                "Orphaned processes",
                "Unused GPU capacity",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs">
                  <span className="w-1 h-1 rounded-full bg-secondary shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The Goblins operate silently within the Vaults, redistributing idle compute and exposing hidden infrastructure. The conflict between Goblins and The Syndicate is not physical — it is fought through <span className="text-primary">access</span>, <span className="text-primary">infrastructure</span>, and <span className="text-primary">information flow</span>.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-white/5" />
          <span className="font-mono text-xs text-muted-foreground/40 tracking-widest">TOKEN_INFORMATION</span>
          <div className="flex-1 h-px bg-white/5" />
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

            {/* Contract Address + DexScreener */}
            <div className="relative z-10 space-y-3 mb-10 border-b border-white/10 pb-8">
              {/* CA Row */}
              <h3 className="text-sm font-mono text-muted-foreground">CONTRACT ADDRESS</h3>
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg px-4 py-3 font-mono text-xs text-primary/80 min-w-0">
                  <span className="truncate">{CONTRACT_ADDRESS}</span>
                </div>
                <button
                  onClick={handleCopy}
                  title="Copy contract address"
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 rounded-lg border text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 shrink-0",
                    copied
                      ? "border-primary/60 bg-primary/20 text-primary"
                      : "border-white/10 bg-white/5 text-muted-foreground hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  {copied ? <CheckCheck size={14} /> : <Copy size={14} />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* DexScreener link */}
              <a
                href={DEXSCREENER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-white/10 bg-white/5 hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/10 hover:text-[#00d4ff] text-muted-foreground transition-all duration-200 group"
              >
                {/* DexScreener logo — official current mark */}
                <svg width="20" height="20" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.694 0h29.778v14.222H10.694V0zM0 14.222h10.694v71.111H0V14.222zm40.471 0h10.695v14.223H40.47V14.222zm-29.777 71.11H0v14.224h10.694V85.332zm29.777 0H29.777v14.224h10.694V85.332zm10.695 14.224H40.47v14.222h10.695V99.556zm29.777-85.334H70.25v14.223h10.693V14.222zm0 71.11H70.25v14.224h10.693V85.332zm10.695 14.224H80.944v14.222h10.694V99.556zM70.25 0h29.778v14.222H70.25V0zm29.778 14.222h10.694v71.111H100.03V14.222zM0 85.332h10.694v14.224H0V85.332zm0 14.224h40.471v14.222H0V99.556zm70.25 0h40.472v14.222H70.25V99.556zm-30.694 14.222H70.25V128H39.556v-14.222zm-10.695 0h10.695V128H28.861v-14.222zM80.944 113.778h10.694V128H80.944v-14.222z" fill="currentColor" />
                  <circle cx="107" cy="107" r="17" stroke="currentColor" strokeWidth="8" fill="none" />
                  <line x1="119" y1="119" x2="128" y2="128" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
                <span className="text-sm font-mono font-bold tracking-wider uppercase">View on DexScreener</span>
                <ExternalLink size={14} className="ml-auto opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
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
