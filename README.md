# 🔮 Grimoire — GDR Toolkit

> **The Master's Companion** — A free, offline-capable web toolkit for tabletop RPG game masters.

[![Live App](https://img.shields.io/badge/Live%20App-gdrtools.github.io-gold?style=for-the-badge)](https://gdrtools.github.io)
[![PWA](https://img.shields.io/badge/PWA-Ready-blueviolet?style=for-the-badge)](https://gdrtools.github.io)
[![No Dependencies](https://img.shields.io/badge/Dependencies-None-brightgreen?style=for-the-badge)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

---

## ✨ Features

Grimoire packs six essential GM tools into a single, lightweight progressive web app — no account, no install, no internet connection required at the table.

| Tool | Description |
|---|---|
| 🎲 **Dice Roller** | Roll any combination from d4 to d100 with full roll history and export |
| 🃏 **Tarot Oracle** | Draw tarot cards for inspiration, divination scenes, or narrative prompts |
| 📜 **Encounter Generator** | Build balanced D&D 5e encounters using an XP-budget engine with 80+ monsters |
| 🧙 **NPC Forge** | Generate richly detailed NPCs with personality, occupation, motivation, secret and story hook |
| ⚔️ **Combat Tracker** | Manage initiative, HP and conditions — deploy encounters directly from the generator |
| 📝 **Session Notes** | Keep an in-app chronicle of events, NPCs and player decisions |

---

## 🎲 Encounter Generator

The encounter engine targets a configurable **XP budget** calculated from party level, size and difficulty (Easy → Deadly).  
It draws from a handcrafted database of **80+ monsters** spanning CR 0 to CR 20, each tagged with environment and initiative bonus, then applies the official D&D 5e multiplier for multiple-monster encounters.

Supported environments: `dungeon · forest · cave · plains · swamp · mountain · urban · any`

Generated encounters can be **deployed directly to the Combat Tracker** with pre-rolled initiative scores.

---

## 🧙 NPC Forge

Each NPC is assembled from layered random tables:

- **Archetype** — hero, villain, trickster, sage, neutral
- **Physical description & speech pattern**
- **Mannerism** — subtle behavioural tics
- **Occupation** (scaled by social class — destitute → royal)
- **Motivation** — what drives them
- **Secret / flaw** — what they hide
- **Story hook** — how they pull the party in

---

## 🛠️ Technical Details

- **Zero dependencies** — pure HTML5, CSS3 and vanilla JavaScript
- **Single file** — the entire app lives in one `index.html`
- **Progressive Web App** — installable on any device via `manifest.webmanifest` and a service worker
- **Fully offline** — service worker caches all assets on first visit
- **Mobile-first** — responsive layout tuned for phone use at the gaming table
- **Dark fantasy aesthetic** — animated starfield, gold-on-obsidian palette

---

## 🚀 Getting Started

No build step is needed. Clone and open directly in a browser:

```bash
git clone https://github.com/gdrtools/gdrtools.github.io.git
cd gdrtools.github.io
# open index.html in any modern browser
```

Or just visit **[gdrtools.github.io](https://gdrtools.github.io)** — the live version is always up to date.

---

## 📁 Project Structure

```
gdrtools.github.io/
├── index.html           # The entire application
├── styles.css           # Global styles & dark-fantasy theme
├── service-worker.js    # Offline caching strategy
├── manifest.webmanifest # PWA metadata
├── icons/               # App icons (SVG + PNG)
└── README.md
```

---

## 🤝 Contributing

Issues and pull requests are welcome.  
If you have monster entries to add, new NPC tables, or UI improvements, feel free to open a PR.

---

## 📜 License

Released under the [MIT License](LICENSE).  
D&D 5e game mechanics referenced under the [Systems Reference Document (SRD 5.1)](https://dnd.wizards.com/resources/systems-reference-document).
