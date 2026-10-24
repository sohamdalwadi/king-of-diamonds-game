# 👑♦️ King of Diamonds: Beauty Contest (Alice in Borderland)

> *"In order to earn profits from the market, one mustn't base their predictions on what they believe to be the best, but what they believe the market believes to be the best."*  
> — John Maynard Keynes / Takashi Asuma (*Alice in Borderland*, Sixth Side Story)

[![GitHub Pages](https://img.shields.io/badge/Demo-GitHub%20Pages-brightgreen)](https://sohamdalwadi.github.io/king-of-diamonds-game/)
[![Game](https://img.shields.io/badge/Difficulty-King%20of%20%E2%99%A6-red)](https://aliceinborderland.fandom.com/wiki/King_of_Diamonds)
[![Vanilla JS](https://img.shields.io/badge/Stack-Vanilla%20JS%20%2F%20HTML5%20%2F%20CSS3-blue)](https://developer.mozilla.org)
[![Web Audio](https://img.shields.io/badge/Audio-Procedural%20Web%20Audio-orange)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An interactive, psychological web adaptation of the iconic **King of Diamonds (Beauty Contest • 美人投票)** game from *Alice in Borderland*. Face off against **Keiichi Kuzuryū** and 3 other contestants in the Supreme Court arena where every wrong prediction brings you closer to dissolution in lethal **Aqua Regia**.

---

## 🎮 Play Live
The game runs directly in any modern browser via GitHub Pages:  
👉 **[Play King of Diamonds Online](https://sohamdalwadi.github.io/king-of-diamonds-game/)**

---

## ⚖️ Game Rules & Mechanics

### 1. Base Beauty Contest Formula
- In every round, each active contestant chooses an integer from **0 to 100**.
- The average of all active selections is calculated and multiplied by **0.8**:
  $$\text{Target} = \left(\frac{\sum \text{Selections}}{N}\right) \times 0.8$$
- The player whose chosen number is closest to the calculated target wins the round.
- All non-winning players receive a **-1 point penalty**.
- **Game Over**: When any player reaches **-10 points**, the balanced scale suspended above their seat tips over, dumping lethal **Aqua Regia** and dissolving them.
- **Game Clear**: Be the last surviving player remaining in the arena.

### 2. Dynamic Rule Evolutions (Unlocked Upon Elimination)
As players are eliminated, new rules unlock to counteract simple Nash equilibrium traps:

| Survivors | Unlocked Rule | Effect |
| :---: | :--- | :--- |
| **4 Players** | **Rule I: Clash Invalidation** | If 2 or more players pick the same number, their picks are disqualified. They cannot win the round and both receive penalties, even if their number was closest. |
| **3 Players** | **Rule II: Exact Match Double Penalty** | If any player chooses the **exact calculated target** (rounded), all losers suffer **-2 points** instead of -1. |
| **2 Players** | **Rule III: The 0 vs 100 Paradox** | In the final duel against Kuzuryū, if one player chooses `0`, an opponent choosing `100` **immediately overrules and wins**! This establishes an intense Rock-Paper-Scissors loop ($0 \to 1 \to 100 \to 0$). |

---

## 🧠 Cognitive AI Profiles

Unlike standard random-number bots, each AI opponent is modeled after their canonical cognitive hierarchy and game theory archetype:

- **Keiichi Kuzuryū (King of Diamonds ♦️)**: Master Game Theorist. Operates on recursive Level-$k$ iterations (anticipating convergence toward 0), while dynamically adapting to erratic or disruptive human behavior. In the final duel, he tests your morality.
- **Hinako Daimon (Quantitative Trader)**: High-risk disruptor. Occasionally injects extreme numbers (such as $100$ or $40$) to drag the average upward and sabotage rationalists, or exploits clash traps.
- **Takashi Asuma (Corporate Economist)**: Strict Level-1 and Level-2 Keynesian logic ($\text{Target} \approx \text{Last Target} \times 0.8$). Rational and disciplined, but vulnerable to irrational wildcards.
- **Benzo Yashige (Intuitive Gambler)**: Operates on gut instincts and superstitions. Ignores deep math, creating chaotic noise that throws off textbook equilibrium models.

---

## ✨ Features & Polish

- **Supreme Courtroom Aesthetics**: Cinematic dark-mode arena with glowing ♦️ Diamond motifs and glassmorphic HUD.
- **Animated Aqua Regia Scales**: Overhead acid beakers that fill, bubble, fume, and dramatically tilt ($95^\circ$) with sizzling acid vapor upon elimination.
- **Zero-Dependency Procedural Web Audio**: Real-time sound effects generated entirely with the HTML5 Web Audio API (countdown tension ticks, mechanical locks, duplicate clash buzz, calculation chimes, acid sizzle, and victory fanfare).
- **Match History Table**: Comprehensive round-by-round ledger matching the canonical manga table, tracking selections, targets, clashes, and rule events.
- **Simulation Speed Controls**: Toggle between standard cinematic suspense ($1\times$) and fast simulation ($2.5\times$).
- **Fully Responsive**: Optimized for desktop, laptop, tablet, and mobile browsers.

---

## 🚀 Running Locally

No build tools or node dependencies required. Simply clone and serve:

```bash
# Clone the repository
git clone https://github.com/sohamdalwadi/king-of-diamonds-game.git
cd king-of-diamonds-game

# Open in browser directly, or run a local server
npx serve .
# or with python:
python -m http.server 8000
```

Visit `http://localhost:8000` in your browser.

---

## 📜 License
Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
