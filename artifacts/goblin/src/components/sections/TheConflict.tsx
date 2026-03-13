import { motion } from 'framer-motion';
import { Network, ServerCrash } from 'lucide-react';

export function TheConflict() {
  return (
    <section id="conflict" className="py-24 relative bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-secondary mb-2 tracking-widest">SYSTEM STATUS: DIVIDED</p>
          <h2 className="text-3xl md:text-4xl font-bold">THE CONFLICT</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 relative">
          
          {/* Middle dividing line (visible on lg) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 z-10">
            <motion.div 
              animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent" 
            />
          </div>

          {/* Left: The Syndicate */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:pr-16 relative"
          >
            <div className="absolute inset-0 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="glass-panel p-8 rounded-2xl border-secondary/20 h-full">
              <div className="flex items-center gap-3 mb-6 border-b border-secondary/20 pb-4">
                <Network className="text-secondary w-6 h-6" />
                <h3 className="text-2xl font-display font-bold text-secondary tracking-wider">THE SYNDICATE</h3>
              </div>
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden border border-secondary/20">
                {/* Fallback to generated image or gradient if missing */}
                <img 
                  src={`${import.meta.env.BASE_URL}images/syndicate-datacenter.png`} 
                  alt="Corporate Data Center" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-blue-900', 'to-black');
                  }}
                />
                <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay" />
              </div>
              <ul className="space-y-4 font-mono text-sm text-muted-foreground">
                <li className="flex gap-2 items-start"><span className="text-secondary">[{'>'}]</span> Centralized control of A100/H100 clusters</li>
                <li className="flex gap-2 items-start"><span className="text-secondary">[{'>'}]</span> Access restricted to mega-corps</li>
                <li className="flex gap-2 items-start"><span className="text-secondary">[{'>'}]</span> Artificial scarcity pricing models</li>
              </ul>
            </div>
          </motion.div>

          {/* Right: The Goblins */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:pl-16 relative"
          >
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="glass-panel p-8 rounded-2xl border-primary/20 h-full">
              <div className="flex items-center gap-3 mb-6 border-b border-primary/20 pb-4">
                <ServerCrash className="text-primary w-6 h-6" />
                <h3 className="text-2xl font-display font-bold text-primary tracking-wider">THE GOBLINS</h3>
              </div>
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden border border-primary/20">
                {/* Fallback to generated image or gradient if missing */}
                <img 
                  src={`${import.meta.env.BASE_URL}images/goblin-scrap.png`} 
                  alt="Goblin Infrastructure" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-green-900', 'to-black');
                  }}
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
              <ul className="space-y-4 font-mono text-sm text-muted-foreground">
                <li className="flex gap-2 items-start"><span className="text-primary">[{'>'}]</span> Harvesting idle overnight compute</li>
                <li className="flex gap-2 items-start"><span className="text-primary">[{'>'}]</span> Decentralized peer-to-peer distribution</li>
                <li className="flex gap-2 items-start"><span className="text-primary">[{'>'}]</span> Open source, permissionless access</li>
              </ul>
            </div>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg italic text-muted-foreground border-l-2 border-accent pl-4 text-left md:text-center md:border-l-0">
            "The struggle is not physical. It is fought through access, infrastructure, and information."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
