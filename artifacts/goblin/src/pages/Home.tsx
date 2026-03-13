import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { VaultChronicles } from '@/components/sections/VaultChronicles';
import { TheConflict } from '@/components/sections/TheConflict';
import { GoblinSociety } from '@/components/sections/GoblinSociety';
import { Tokenomics } from '@/components/sections/Tokenomics';
import { Roadmap } from '@/components/sections/Roadmap';
import { Mission } from '@/components/sections/Mission';
import { Community } from '@/components/sections/Community';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <VaultChronicles />
        <TheConflict />
        <GoblinSociety />
        <Tokenomics />
        <Roadmap />
        <Mission />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
