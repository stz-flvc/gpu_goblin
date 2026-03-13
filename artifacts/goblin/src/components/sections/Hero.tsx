import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnergyLines } from '@/components/canvas/EnergyLines';
import { VaultCore } from '@/components/ui/VaultCore';
import { Button } from '@/components/ui/Button';

const taglines = [
  "THE GPU SHORTAGE WAS US",
  "PROOF OF GOBLIN",
  "THE VAULTS ARE EXPANDING"
];

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid-pattern pt-20">
      <EnergyLines />
      
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 opacity-30"></div>
      
      <div className="relative z-20 max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <VaultCore />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 text-gradient-primary uppercase drop-shadow-2xl"
        >
          Free the Compute
        </motion.h1>

        <div className="h-8 mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={taglineIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl font-mono text-secondary tracking-[0.2em]"
            >
              [{taglines[taglineIndex]}]
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-2xl text-muted-foreground mb-10 text-sm sm:text-base leading-relaxed"
        >
          Spawned from discarded compute cycles and orphaned processes. 
          The Goblins operate silently, redistributing idle capacity from the corporate vaults to the decentralized network.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" onClick={() => document.querySelector('#token')?.scrollIntoView({ behavior: 'smooth' })}>
            Buy $GOBLIN
          </Button>
          <Button size="lg" variant="secondary" onClick={() => document.querySelector('#chronicles')?.scrollIntoView({ behavior: 'smooth' })}>
            View Manifesto
          </Button>
          <Button size="lg" variant="ghost" onClick={() => window.open('https://t.me/+VqYSXsC_Va9jZjIx', '_blank')}>
            Join Network
          </Button>
        </motion.div>
      </div>

      {/* Gradient fade at bottom to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
