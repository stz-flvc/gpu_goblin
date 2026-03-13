import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function Community() {
  return (
    <section id="community" className="py-32 relative overflow-hidden bg-background border-t border-white/5">
      {/* Background emojis pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.02] pointer-events-none select-none flex flex-wrap gap-8 justify-center items-center">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="text-4xl" style={{ 
            transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 1.5 + 0.5})` 
          }}>
            🧌
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-12 md:p-20 rounded-3xl border-primary/20 shadow-[0_0_50px_rgba(0,255,136,0.1)]"
        >
          <span className="text-6xl mb-6 block animate-bounce">🧌</span>
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">BECOME A GOBLIN</h2>
          <p className="text-xl text-muted-foreground mb-12 font-mono">
            Join thousands of entities operating inside the vaults.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button 
              size="lg" 
              className="w-full sm:w-auto"
              onClick={() => window.open('https://t.me/+VqYSXsC_Va9jZjIx', '_blank')}
            >
              Join Telegram
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="w-full sm:w-auto"
              onClick={() => window.open('https://x.com/GPUGOBLINS', '_blank')}
            >
              Follow on X
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
