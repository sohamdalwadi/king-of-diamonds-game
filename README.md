# 👑♦️ King of Diamonds - Android Edition

*"Survival by numbers... or dissolve in digital Aqua Regia."*  
[![Kotlin](https://img.shields.io/badge/lang-kotlin-%230095D5)](https://kotlinlang.org)
[![Android](https://img.shields.io/badge/📱-Android%2013%2B-brightgreen)](https://developer.android.com)
[![Firebase](https://img.shields.io/badge/🔥-Firebase_Realtime_DB-FFCA28)](https://firebase.google.com)
[![Multiplayer](https://img.shields.io/badge/🎮-Live_Matchmaking-9cf)](https://github.com/yourusername/king-of-diamonds/wiki/Multiplayer-Guide)
![Hazard](https://img.shields.io/badge/⚠️-Aqua_Regia_Simulation-orange)

<p align="center">
  <img src="docs/preview.gif" width="300" alt="Android gameplay preview">
</p>

---

## 📜 Table of Contents
- [🚀 Setup](#-setup)
- [🎯 Game Rules](#-game-rules)
- [🏗️ Architecture](#️-architecture)
- [🤝 Contribute](#-contribute)
- [🧪 Roadmap](#-roadmap)
- [📜 License](#-license)

---

## 🚀 Setup

### Prerequisites
- Android Studio Flamingo+
- Firebase Project (for real-time multiplayer)
- Kotlin 1.9+

### Installation
```bash
git clone https://github.com/yourusername/king-of-diamonds-android.git
cd king-of-diamonds-android

# Add your firebase config to:
# app/src/main/res/values/secrets.xml
```

---

## 🎯 Game Rules

### ⚖️ Dynamic Penalty System
| Players | Rule                              | Code Reference         |
|---------|-----------------------------------|------------------------|
| 5–4     | Base logic (`GameLogic.kt`)       | `calculateRound()`     |
| 4       | Duplicate check (`AntiCheat.kt`)  | `validateNumbers()`    |
| 3       | Double penalty (`PenaltySystem.kt`)| `applySpecialPenalty()`|
| 2       | 0-vs-100 showdown (`DuelMode.kt`) | `resolveDuel()`        |

**Code Snippet (Rule Engine):**
```kotlin
fun calculateTarget(numbers: List<Int>): Double {
    val validNumbers = if (playerCount == 4) filterDuplicates(numbers) else numbers
    return validNumbers.average() * 0.8
}
```

---

## 🏗️ Architecture

### Tech Stack
```mermaid
pie
    title Layer Breakdown
    "UI (Jetpack Compose)" : 35
    "Game Logic (Pure Kotlin)" : 40
    "Firebase Realtime DB" : 25
```

### Key Components
| Module          | Purpose                                | Symbolic Icon |
|-----------------|----------------------------------------|---------------|
| `AquaRegiaAnimator` | Tilt animation for elimination       | ⚗️            |
| `NumberValidator`   | Detect duplicate/illegal inputs      | 🔍            |
| `LiveMatchmaker`    | Firebase-powered multiplayer queues  | 🌐            |

---

## 🤝 Contribute

### Contribution Map
```mermaid
journey
    title Contribution Path
    section For Developers
      Fork Repo: 5: AndroidDev
      Fix Issue: 4: Contributor
      PR Review: 3: Maintainer
    section For Designers
      UI Mockups: 5: Designer
      Animations: 4: Animator
```

### How to Help:
1. **Report Bugs**: File issues with 🐞 emoji + detailed logs  
2. **Improve UI**: Enhance Jetpack Compose screens in `ui/`  
3. **Optimize Sync**: Tackle `FirebaseHelper.kt` latency issues  

**Style Guide**:  
- Use `ViewModel` for game state  
- Prefer `Sealed Classes` for game events  
- Max 2 `Modifier` chains in Compose  

---

## 🧪 Roadmap

### Priority Tasks
```mermaid
gantt
    title Android Development Timeline
    dateFormat  YYYY-MM-DD
    section Core
    Firebase Integration   :done, 2024-01-01, 15d
    Rule Engine            :active, 2024-02-01, 20d
    section Polish
    Aqua Regia Tilt Effect :2024-03-01, 10d
    Offline Mode           :2024-03-15, 14d
```

---

## 📜 License
MIT License - See [LICENSE](LICENSE).  
*"Modify freely, but credit the alchemists!"* 🔥

---

<p align="center">
  <sub>Built with ❤️ and <code>viewModelScope</code> by Soham</sub>
</p>
