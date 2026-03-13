import { motion } from 'framer-motion';

const values = [
  "Curiosity", 
  "Transparency", 
  "Community Ownership", 
  "Creativity", 
  "Awareness"
];

export function Mission() {
  return (
    <section id="mission" className="py-32 relative bg-[#050508] overflow-hidden flex items-center min-h-[70vh]">
      {/* Subtle particle field - simplified CSS version */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] opacity-50" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-12 text-white drop-shadow-xl"
        >
          "Raise awareness about centralized compute power while building a culture-driven internet community."
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-muted-foreground mb-16 italic font-serif"
        >
          Encouraging discussion about who controls the infrastructure shaping our digital future.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          {values.map((val, i) => (
            <motion.span
              key={val}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + (i * 0.1) }}
              className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-mono hover:bg-primary/20 hover:text-primary hover:border-primary transition-colors cursor-default"
            >
              {val}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
