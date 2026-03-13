# GPU Goblins ($GOBLIN)

A decentralized movement reclaiming idle compute power from corporate silos. We are the architects of the new web.

**GPU Goblins** is a modern Web3 project homepage for a Solana memecoin, featuring a premium, cinematic, and mysterious cyberpunk data center aesthetic.

## 🚀 Features

- **The Vault Chronicles**: Lore and story format.
- **The Conflict**: Immersive narrative of the movement.
- **Goblin Society**: Factions of the decentralized network.
- **Tokenomics ($GOBLIN)**:
  - Total Supply: 1,000,000,000
  - Network: Solana
  - Contract Address (`2FW5Jz55z98s81QjgjywW95mjUu7ZHXx6hpdBGjMjupx`)
- **Roadmap**: Phases of the Vault Expansion.
- **Community**: Official Telegram and X integration.

## 🛠️ Tech Stack

- **Framework**: React / Vite
- **Styling**: Tailwind CSS, Class Variance Authority (CVA), clsx, tailwind-merge
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: Radix UI (Shadcn UI base)
- **Routing**: wouter
- **Build Tool**: Vite (Production-ready)

## 📦 Local Development

1. **Install Dependencies**
   The project uses `pnpm` workspace structure. From the root directory, run:
   ```bash
   pnpm install
   ```

2. **Start Development Server**
   Start the frontend app locally:
   ```bash
   cd artifacts/goblin
   pnpm dev
   ```
   *The app will be available on `http://localhost:5173`.*

## 🚢 Deployment to Production (Vercel / Netlify)

The project is fully prepared for standard hosting services:
1. Push this repository to GitHub/GitLab.
2. Connect your Git repository to your hosting provider.
3. Use the following build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `pnpm build`
   - **Output Directory**: `artifacts/goblin/dist/public`

## 📜 License

© 2026 GPU Goblins Syndicate. All rights reserved.
