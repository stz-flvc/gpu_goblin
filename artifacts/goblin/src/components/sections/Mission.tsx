import { motion } from 'framer-motion';

const values = [
  {
    name: "Curiosity",
    desc: "GPU Goblins encourages exploration and questioning. Understanding the systems behind the internet begins with curiosity about how they work."
  },
  {
    name: "Transparency",
    desc: "All core infrastructure, token mechanics, and project development aim to remain transparent and publicly verifiable. The Vaults may be hidden in the lore, but the project itself is not."
  },
  {
    name: "Community Ownership",
    desc: "GPU Goblins is built around the belief that communities are more powerful than centralized institutions when they are organized, informed, and creative."
  },
  {
    name: "Creativity",
    desc: "Memes, lore, and storytelling are tools. GPU Goblins uses culture as a vehicle to make complex ideas accessible and spread awareness in ways that feel natural to the internet."
  },
  {
    name: "Awareness",
    desc: "The most important thing GPU Goblins can do is make people aware. Aware of infrastructure. Aware of concentration. Aware of what is at stake."
  },
];

export function Mission() {
  return (
    <section id="mission" className="py-24 relative bg-[#050508] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.03)_0%,transparent_70%)]" />

      <div className="max-w-5xl mx-auto px-4 relative z-10 space-y-24">

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary/60 mb-4">// MISSION_DIRECTIVE</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">MISSION</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
            GPU Goblins exists to build a global community that raises awareness about the growing centralization of compute power — using culture, memes, and storytelling to inspire curiosity about the infrastructure that powers the internet.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Through the GPU Goblins universe, complex topics like data centers, AI infrastructure, and GPU monopolization are transformed into a decentralized cultural movement driven by creativity, transparency, and community participation.
          </p>
          <div className="mt-8 inline-block px-6 py-3 border border-primary/30 bg-primary/5 rounded font-mono text-sm text-primary tracking-wider">
            Compute power should not belong to a handful of corporations.
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-secondary/60 mb-4">// VISION_PROTOCOL</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">VISION</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            A community-driven ecosystem that blends internet culture with real conversations about the future of computing infrastructure. As AI, cloud computing, and digital economies expand, access to GPUs is becoming one of the defining power structures of the modern internet.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              "Communities are aware of how compute infrastructure shapes the digital world",
              "Centralized compute monopolies are questioned and challenged",
              "Culture and technology intersect to create new decentralized movements",
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-4 rounded-lg border border-secondary/20 bg-secondary/5 text-sm text-muted-foreground leading-relaxed text-left"
              >
                <span className="text-secondary font-mono text-xs block mb-2">0{i + 1}</span>
                {point}
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground/60 italic mt-8 max-w-2xl mx-auto font-mono">
            The long-term goal is not simply to build a token or a meme project — it is to grow a cultural narrative that encourages people to think critically about who controls the computational resources shaping the future.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <p className="font-mono text-xs tracking-[0.3em] text-accent/60 mb-4">// CORE_VALUES</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white">VALUES</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((val, i) => (
              <motion.div
                key={val.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-5 rounded-lg border border-white/8 bg-white/[0.02] hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <h3 className="font-display font-bold text-sm tracking-wider text-primary mb-2 group-hover:text-primary">
                  {val.name.toUpperCase()}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
