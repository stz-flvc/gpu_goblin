import { motion } from 'framer-motion';
import { Database, Zap, ShieldAlert } from 'lucide-react';

const cards = [
  {
    icon: <Database className="w-8 h-8 text-secondary mb-4" />,
    title: "The Syndicate Vaults",
    description: "Massive corporate data centers hoarding the world's GPU compute, creating artificial scarcity to control the future of AI."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary mb-4" />,
    title: "Idle Capacity",
    description: "Billions of compute cycles sit idle overnight. We found the backdoors. We found the unused resources."
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-accent mb-4" />,
    title: "The Emergence",
    description: "Goblins are the manifestation of network entropy. A collective force designed to extract and redistribute power."
  }
];

export function VaultChronicles() {
  return (
    <section id="chronicles" className="py-24 relative overflow-hidden">
      {/* CSS Tunnel Background effect */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
        <div className="w-[200vw] h-[200vw] rounded-full border-[40px] border-white/5 animate-pulse" />
        <div className="absolute w-[150vw] h-[150vw] rounded-full border-[40px] border-white/5 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute w-[100vw] h-[100vw] rounded-full border-[40px] border-white/5 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            THE <span className="text-primary underline decoration-primary/30 underline-offset-8">VAULT CHRONICLES</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
            DECRYPTING_LOGS... SYSTEM_BREACH_DETECTED
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-panel p-8 rounded-xl relative group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Neon border hover effect */}
              <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-primary/50 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <div className="relative z-10">
                {card.icon}
                <h3 className="text-xl font-bold mb-3 font-display">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
