# 🍄 Boscdex Website

The official multilingual website for **Boscdex**, the 100% offline mushroom forager's Pokédex for Catalonia.

Built with **[Astro](https://astro.build)** and **[Tailwind CSS](https://tailwindcss.com)**.

---

## 🌐 Features

- **Trilingual Localization:** Complete native support for Catalan (`/`, default), Spanish (`/es`), and English (`/en`).
- **Retro 16-Bit Styling:** Recreates the Flutter app's Game Boy / GBA Pokédex aesthetic:
  - Exact palette: Forest Green (`#2D6E44`), Deep Forest Ink (`#1E2822`), Botanical Parchment (`#F5F3EB`), Quest Gold (`#E5A93C`), Arcade Red (`#CC4E46`).
  - Google Font / local font: `Pixelify Sans` for 16-bit headers, badges, and stats.
  - Hard unblurred 2D shadows (`3px 3px 0 #1E2822`), 2.5px comic borders, and pressable arcade buttons.
- **Interactive Handheld Mockup:** Tabbed retro smartphone showcase rendering:
  - 🍄 *Àlbum Boscdex* with discovery silhouettes and rarity tiers.
  - 📸 *Escàner Edge-AI* with targeting reticle and confidence gauge.
  - 🗺️ *Mapa de Camp* with 16-bit Catalonia map and private GPS pins.
  - ⚠️ *Seguretat* with high-visibility toxic lookalike alerts.
  - 🎖️ *Nivell Boletaire* with segmented 16-bit XP bar and trophy badges.
- **Live Sound Effects (SFX):** Interactive retro audio (`blip.wav`, `discovery.wav`, `badge.wav`) with mute toggle.
- **Open Source & APK Download:** Direct 1-click links for:
  - ARM64-v8a Release APK (~45 MB, recommended)
  - Universal Release APK (~102 MB)
  - Official GitHub Releases & Source Code
- **Field Safety First:** Interactive side-by-side diagnostic comparisons (Rovelló vs Fals Rovelló, Cep vs Mataparent de Satanàs, Xampinyó vs Cicuta Blanca, Rossinyol vs Gírgola d'Olivera) and SafetyGateService rules (10% lethal taxon zero-tolerance override).
- **Symbiotic Indicator Trees:** The 5 key Catalan mycorrhizal partner trees (*Pinus sylvestris*, *Pinus halepensis*, *Quercus ilex*, *Fagus sylvatica*, *Castanea sativa*).

---

## 🚀 Quick Start

```bash
cd website

# 1. Install dependencies
pnpm install

# 2. Run local dev server (http://localhost:4321)
pnpm run dev

# 3. Build production static site
pnpm run build

# 4. Preview production build
pnpm run preview
```

---

## 📁 Project Structure

```
website/
├── public/
│   ├── assets/
│   │   ├── audio/         # Authentic retro audio sound effects
│   │   ├── fonts/         # PixelifySans typography
│   │   ├── icons/         # App icons, mascot, logo, pixel art
│   │   ├── map/           # 16-bit Catalonia pixel map
│   │   ├── mushrooms/     # Wild mushroom specimen photos
│   │   └── trees/         # Catalonia indicator host trees
│   └── downloads/         # Pre-bundled release APKs for direct download
├── src/
│   ├── components/
│   │   ├── Header.astro              # Sticky retro navbar with lang switcher & SFX toggle
│   │   ├── Hero.astro                # Mascot hero showcase with CTAs & stats
│   │   ├── InteractivePhoneMockup.astro # Handheld device mockup with 5 interactive views
│   │   ├── FeaturesGrid.astro        # 6 pillars of Boscdex
│   │   ├── DexCatalog.astro          # Interactive filterable mushroom catalog
│   │   ├── IndicatorTrees.astro      # The 5 mycorrhizal host trees
│   │   ├── SafetySection.astro       # Safety gate & toxic lookalike comparison pairs
│   │   ├── DocsSection.astro         # Edge ML, Drift SQLite & foraging ethics
│   │   ├── DownloadSection.astro     # Direct APK downloads & build instructions
│   │   └── Footer.astro              # Legal disclaimer & open-source credits
│   ├── data/
│   │   └── species.ts                # Catalog database for mushrooms & trees
│   ├── i18n/
│   │   └── translations.ts           # Trilingual dictionaries (ca, es, en)
│   ├── layouts/
│   │   └── Layout.astro              # Base HTML layout & meta tags
│   ├── pages/
│   │   ├── index.astro               # Catalan homepage (default)
│   │   ├── es/index.astro            # Spanish homepage
│   │   └── en/index.astro            # English homepage
│   └── styles/
│       └── global.css                # Tailwind, PixelifySans & retro utilities
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```
# boscdex-web
