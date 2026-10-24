// script.js - King of Diamonds / Alice in Borderland Beauty Contest
// Full Keynesian Game Theory Engine, Audio Synthesizer, and Dynamic Visuals

(function () {
    'use strict';

    // ==========================================
    // 1. PROCEDURAL AUDIO SYNTHESIZER (Web Audio API)
    // ==========================================
    class SoundEngine {
        constructor() {
            this.ctx = null;
            this.muted = false;
        }

        init() {
            if (!this.ctx) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                this.ctx = new AudioContext();
            }
            if (this.ctx.state === 'suspended') {
                this.ctx.resume();
            }
        }

        playTick(isDanger = false) {
            if (this.muted) return;
            this.init();
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const now = this.ctx.currentTime;

            osc.type = 'sine';
            osc.frequency.setValueAtTime(isDanger ? 880 : 440, now);
            osc.frequency.exponentialRampToValueAtTime(110, now + 0.04);

            gain.gain.setValueAtTime(isDanger ? 0.2 : 0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.05);
        }

        playLockIn() {
            if (this.muted) return;
            this.init();
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.exponentialRampToValueAtTime(60, now + 0.18);

            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.2);
        }

        playReveal() {
            if (this.muted) return;
            this.init();
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(520, now);
            osc.frequency.exponentialRampToValueAtTime(780, now + 0.12);

            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.15);
        }

        playClash() {
            if (this.muted) return;
            this.init();
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(160, now);
            osc.frequency.setValueAtTime(120, now + 0.08);
            osc.frequency.setValueAtTime(90, now + 0.16);

            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.32);
        }

        playCalculation() {
            if (this.muted) return;
            this.init();
            const now = this.ctx.currentTime;
            const chord = [330, 415, 495, 660]; // E maj

            chord.forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + idx * 0.04);

                gain.gain.setValueAtTime(0.1, now + idx * 0.04);
                gain.gain.exponentialRampToValueAtTime(0.005, now + idx * 0.04 + 0.35);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now + idx * 0.04);
                osc.stop(now + idx * 0.04 + 0.4);
            });
        }

        playWin() {
            if (this.muted) return;
            this.init();
            const now = this.ctx.currentTime;
            const notes = [523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio

            notes.forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now + idx * 0.08);

                gain.gain.setValueAtTime(0.18, now + idx * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.25);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now + idx * 0.08);
                osc.stop(now + idx * 0.08 + 0.3);
            });
        }

        playAcidSizzle() {
            if (this.muted) return;
            this.init();
            const now = this.ctx.currentTime;
            
            // White noise buffer for acid sizzle
            const bufferSize = this.ctx.sampleRate * 1.5;
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }

            const noise = this.ctx.createBufferSource();
            noise.buffer = buffer;

            const filter = this.ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(1200, now);
            filter.frequency.linearRampToValueAtTime(400, now + 1.4);
            filter.Q.value = 3;

            const gain = this.ctx.createGain();
            gain.gain.setValueAtTime(0.35, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 1.4);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(this.ctx.destination);

            noise.start(now);
            noise.stop(now + 1.5);
        }

        playGameOver() {
            if (this.muted) return;
            this.init();
            const now = this.ctx.currentTime;
            const chords = [220, 207.65, 196, 174.61]; // Tragic descending

            chords.forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freq, now + idx * 0.2);

                gain.gain.setValueAtTime(0.2, now + idx * 0.2);
                gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.2 + 0.4);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now + idx * 0.2);
                osc.stop(now + idx * 0.2 + 0.5);
            });
        }
    }

    const sound = new SoundEngine();

    // ==========================================
    // 2. CHARACTER PROFILES & COGNITIVE AI
    // ==========================================
    const CHARACTERS = {
        1: {
            id: 1,
            name: "Chishiya",
            title: "Psychological Strategist",
            isHuman: true,
            score: 0,
            alive: true,
            selection: null,
            quotes: {
                start: "Rationality is simply another pattern to read.",
                win: "Just as expected. The convergence holds.",
                lose: "A minor fluctuation in the average.",
                clash: "A mutual clash... an inefficient outcome."
            }
        },
        2: {
            id: 2,
            name: "Keiichi Kuzuryū",
            title: "The King of Diamonds",
            isHuman: false,
            score: 0,
            alive: true,
            selection: null,
            quotes: {
                start: "What is the true value of a life? Let logic decide.",
                win: "The equilibrium remains unbroken.",
                lose: "An unexpected human factor in the equation.",
                clash: "Clashing numbers... a penalty born from symmetry.",
                duel: "Only the two of us remain. Do you value your life above mine?"
            },
            // Master Game Theorist AI
            decide(round, aliveCount, history, activeRules) {
                // If in final 2-player duel with the 0 vs 100 rule
                if (aliveCount === 2 && activeRules.zeroVsHundred) {
                    const opponent = history.length > 0 ? history[history.length - 1].selections[1] : null;
                    const rand = Math.random();
                    // Rock-paper-scissors dynamic: 0 beats 1, 1 beats 100, 100 beats 0.
                    // Kuzuryu weighs philosophy vs survival:
                    if (round >= 13) {
                        // In canon, Kuzuryu eventually tests Chishiya with 0 / 100
                        return rand < 0.65 ? 0 : (rand < 0.85 ? 1 : 100);
                    }
                    return rand < 0.4 ? 1 : (rand < 0.7 ? 0 : 100);
                }

                // If 3 players remain and exact match double penalty is active
                if (aliveCount === 3 && activeRules.exactMatchDouble) {
                    // Canon round 11/12 strategy: Daimon and Chishiya might target low or exact
                    const rand = Math.random();
                    if (rand < 0.35) return 0;
                    if (rand < 0.70) return 1;
                    return Math.floor(Math.random() * 25);
                }

                // Normal progression (Level-k Keynesian Beauty Contest)
                if (history.length === 0) {
                    // Round 1: Canon pick is 29 (anticipating group average around 36)
                    return 29;
                }

                // Analyze historical averages
                const lastRound = history[history.length - 1];
                const lastTarget = lastRound.target;

                // Level-k adaptation:
                // If last round average was high due to outliers, adjust downward
                let projectedNext = lastTarget * 0.8;

                // Kuzuryu adds a slight strategic variance based on remaining personalities
                if (projectedNext < 1) {
                    return Math.random() < 0.5 ? 0 : 1;
                }

                // Fine-tune around projected target
                const noise = (Math.random() - 0.5) * 4;
                return Math.max(0, Math.min(100, Math.round(projectedNext + noise)));
            }
        },
        3: {
            id: 3,
            name: "Hinako Daimon",
            title: "Quantitative Trader",
            isHuman: false,
            score: 0,
            alive: true,
            selection: null,
            quotes: {
                start: "A volatile market rewards high-risk disruptors.",
                win: "High risk, high return. That's trading.",
                lose: "My risk-model didn't account for that outlier.",
                clash: "Tch. A duplicate collision... wasted capital."
            },
            // High variance disruptor AI
            decide(round, aliveCount, history, activeRules) {
                if (aliveCount === 3 && activeRules.exactMatchDouble) {
                    // In canon round 12, Daimon guessed high (62) hoping to disrupt
                    return Math.random() < 0.5 ? 62 : 10;
                }

                if (round === 1) return 40; // Canon round 1 pick
                if (round === 2) return 21; // Canon round 2 pick

                // She occasionally throws 100 or high picks to drag the average up and ruin rationalists
                const rand = Math.random();
                if (rand < 0.25) return 100; // Disruptor play
                if (rand < 0.40) return 8;

                const lastTarget = history[history.length - 1].target;
                const variance = (Math.random() - 0.5) * 14;
                return Math.max(0, Math.min(100, Math.round(lastTarget + variance)));
            }
        },
        4: {
            id: 4,
            name: "Takashi Asuma",
            title: "Corporate Economist",
            isHuman: false,
            score: 0,
            alive: true,
            selection: null,
            quotes: {
                start: "In Keynesian theory, you predict what others will predict.",
                win: "Strict adherence to economic theory pays off.",
                lose: "Irrational actors are skewing the sample distribution!",
                clash: "Identical strategies lead to common ruin."
            },
            // Textbook Level-1 & Level-2 Economist AI
            decide(round, aliveCount, history, activeRules) {
                if (round === 1) return 33; // Canon round 1 pick
                if (round === 2) return 15; // Canon round 2 pick
                if (round === 3) return 7;

                // Asuma assumes people will pick ~ last target, so he chooses last target * 0.8
                const lastTarget = history[history.length - 1].target;
                const pick = Math.round(lastTarget * 0.8);
                return Math.max(0, Math.min(100, pick));
            }
        },
        5: {
            id: 5,
            name: "Benzo Yashige",
            title: "Intuitive Gambler",
            isHuman: false,
            score: 0,
            alive: true,
            selection: null,
            quotes: {
                start: "All your fancy math won't beat pure gut instinct!",
                win: "Haha! Luck beats logic every single time!",
                lose: "Damn it! The acid is getting uncomfortably close!",
                clash: "Hey! Who copied my lucky number?!"
            },
            // Impulsive, low-cognitive chaos AI
            decide(round, aliveCount, history, activeRules) {
                if (round === 1) return 30; // Canon round 1 pick
                if (round === 2) return 16; // Canon round 2 pick
                if (round === 3) return 3;

                // Yashige either copies his favorite numbers or gets anxious as acid rises
                const rand = Math.random();
                if (rand < 0.35) return 0; // Tends to jump to zero prematurely
                if (rand < 0.6) return Math.floor(Math.random() * 35);
                return Math.floor(Math.random() * 101);
            }
        }
    };

    // ==========================================
    // 3. GAME STATE & CONTROLLER
    // ==========================================
    const gameState = {
        round: 1,
        phase: 'IDLE', // IDLE, SUBMISSION, REVEAL, CALCULATING, RESOLVING, GAMEOVER
        history: [],
        timer: 60,
        timerInterval: null,
        simulationSpeed: 1, // 1x or 3x
        activeRules: {
            duplicateClash: false,     // 4 or fewer alive
            exactMatchDouble: false,   // 3 or fewer alive
            zeroVsHundred: false       // 2 alive (Final Duel)
        }
    };

    // DOM Elements
    const elements = {
        currentRound: document.getElementById('currentRound'),
        alivePlayersCount: document.getElementById('alivePlayersCount'),
        timerSec: document.getElementById('timerSec'),
        timerProgress: document.getElementById('timerProgress'),
        stageTag: document.getElementById('stageTag'),
        formulaAvg: document.getElementById('formulaAvg'),
        formulaTarget: document.getElementById('formulaTarget'),
        outcomeMsg: document.getElementById('outcomeMsg'),
        playerInput: document.getElementById('playerInput'),
        numberSlider: document.getElementById('numberSlider'),
        lockInBtn: document.getElementById('lockInBtn'),
        rulesTracker: document.getElementById('rulesTracker'),
        baseRuleChip: document.getElementById('baseRuleChip'),
        rule1Chip: document.getElementById('rule1Chip'),
        rule2Chip: document.getElementById('rule2Chip'),
        rule3Chip: document.getElementById('rule3Chip'),
        rulesModal: document.getElementById('rulesModal'),
        rulesBtn: document.getElementById('rulesBtn'),
        closeRulesBtn: document.getElementById('closeRulesBtn'),
        historyModal: document.getElementById('historyModal'),
        historyBtn: document.getElementById('historyBtn'),
        closeHistoryBtn: document.getElementById('closeHistoryBtn'),
        historyTableBody: document.getElementById('historyTableBody'),
        endgameModal: document.getElementById('endgameModal'),
        endgameBox: document.getElementById('endgameBox'),
        endgameIcon: document.getElementById('endgameIcon'),
        endgameTitle: document.getElementById('endgameTitle'),
        endgameQuote: document.getElementById('endgameQuote'),
        endgameStats: document.getElementById('endgameStats'),
        restartGameBtn: document.getElementById('restartGameBtn'),
        soundToggle: document.getElementById('soundToggle'),
        soundIcon: document.getElementById('soundIcon'),
        speedToggle: document.getElementById('speedToggle'),
        speedLabel: document.getElementById('speedLabel')
    };

    // ==========================================
    // 4. CORE ENGINE FUNCTIONS
    // ==========================================

    function getAlivePlayers() {
        return Object.values(CHARACTERS).filter(c => c.alive);
    }

    function updateRulesState() {
        const aliveCount = getAlivePlayers().length;
        const previousRules = { ...gameState.activeRules };

        gameState.activeRules.duplicateClash = (aliveCount <= 4);
        gameState.activeRules.exactMatchDouble = (aliveCount <= 3);
        gameState.activeRules.zeroVsHundred = (aliveCount <= 2);

        // Update UI chips
        updateRuleChip(elements.rule1Chip, gameState.activeRules.duplicateClash, previousRules.duplicateClash);
        updateRuleChip(elements.rule2Chip, gameState.activeRules.exactMatchDouble, previousRules.exactMatchDouble);
        updateRuleChip(elements.rule3Chip, gameState.activeRules.zeroVsHundred, previousRules.zeroVsHundred);
    }

    function updateRuleChip(chipEl, isActive, wasActive) {
        if (isActive) {
            chipEl.classList.remove('locked');
            chipEl.classList.add('active');
            const lockIcon = chipEl.querySelector('.chip-lock');
            if (lockIcon) lockIcon.textContent = '🔓';

            if (!wasActive) {
                chipEl.classList.add('unlocked-new');
                setTimeout(() => chipEl.classList.remove('unlocked-new'), 6000);
            }
        } else {
            chipEl.classList.remove('active');
            chipEl.classList.add('locked');
            const lockIcon = chipEl.querySelector('.chip-lock');
            if (lockIcon) lockIcon.textContent = '🔒';
        }
    }

    function setPlayerDialogue(playerId, text) {
        const bubble = document.getElementById(`speech-p${playerId}`);
        if (bubble) {
            bubble.textContent = `"${text}"`;
            bubble.classList.add('visible');
            setTimeout(() => {
                bubble.classList.remove('visible');
            }, 4000 / gameState.simulationSpeed);
        }
    }

    function updatePlayerDisplay(playerId) {
        const char = CHARACTERS[playerId];
        const pod = document.getElementById(`pod-p${playerId}`);
        const tabletNum = document.getElementById(`num-p${playerId}`);
        const tabletStatus = document.getElementById(`status-p${playerId}`);
        const scoreReadout = document.getElementById(`score-p${playerId}`);
        const liquid = document.getElementById(`liquid-p${playerId}`);

        // Score readout
        scoreReadout.textContent = `${char.score} pts`;

        // Acid liquid height (0 pts = 0%, -10 pts = 100%)
        const acidFillPercent = Math.min(100, Math.max(0, Math.abs(char.score) * 10));
        liquid.style.height = `${acidFillPercent}%`;

        // Acid danger classes
        liquid.classList.remove('danger', 'critical');
        if (char.score <= -8) {
            liquid.classList.add('critical');
        } else if (char.score <= -5) {
            liquid.classList.add('danger');
        }

        if (!char.alive) {
            pod.classList.add('dissolved');
            tabletStatus.textContent = 'DISSOLVED';
            tabletNum.textContent = '☠️';
        }
    }

    function startTimer(durationSeconds, onExpire) {
        clearInterval(gameState.timerInterval);
        gameState.timer = durationSeconds;
        const totalDuration = durationSeconds;
        const circumference = 2 * Math.PI * 54; // r=54 from svg

        elements.timerSec.textContent = gameState.timer;
        elements.timerProgress.style.strokeDashoffset = '0';
        elements.timerProgress.classList.remove('hurry', 'danger');

        const intervalTime = 1000 / gameState.simulationSpeed;

        gameState.timerInterval = setInterval(() => {
            gameState.timer--;
            elements.timerSec.textContent = gameState.timer;

            const progress = (totalDuration - gameState.timer) / totalDuration;
            const offset = circumference * progress;
            elements.timerProgress.style.strokeDashoffset = offset.toString();

            if (gameState.timer <= 5) {
                elements.timerProgress.classList.add('danger');
                sound.playTick(true);
            } else if (gameState.timer <= 15) {
                elements.timerProgress.classList.add('hurry');
                sound.playTick(false);
            }

            if (gameState.timer <= 0) {
                clearInterval(gameState.timerInterval);
                if (onExpire) onExpire();
            }
        }, intervalTime);
    }

    // ==========================================
    // 5. ROUND FLOW & PHASES
    // ==========================================

    function initRound() {
        if (!CHARACTERS[1].alive) {
            triggerGameOver(false);
            return;
        }

        const alive = getAlivePlayers();
        if (alive.length <= 1) {
            triggerGameOver(true);
            return;
        }

        gameState.phase = 'SUBMISSION';
        elements.currentRound.textContent = gameState.round;
        elements.alivePlayersCount.textContent = `${alive.length} / 5`;
        elements.stageTag.textContent = 'SUBMISSION PHASE';
        elements.outcomeMsg.textContent = 'Select your integer on the tablet and lock in.';
        elements.formulaAvg.textContent = 'AVG: --';
        elements.formulaTarget.textContent = '--';

        // Clear previous visual highlights
        document.querySelectorAll('.player-pod').forEach(pod => {
            pod.classList.remove('winner', 'clashed');
        });

        // Reset player tablets
        for (let i = 1; i <= 5; i++) {
            const char = CHARACTERS[i];
            const numEl = document.getElementById(`num-p${i}`);
            const statusEl = document.getElementById(`status-p${i}`);

            if (char.alive) {
                numEl.textContent = (i === 1) ? elements.playerInput.value : '??';
                statusEl.textContent = (i === 1) ? 'READY' : 'THINKING';
            }
        }

        // Enable user input
        elements.lockInBtn.disabled = false;
        elements.playerInput.disabled = false;
        elements.numberSlider.disabled = false;

        // Characters initial thoughts
        if (gameState.round === 1) {
            setPlayerDialogue(2, CHARACTERS[2].quotes.start);
        } else if (alive.length === 2) {
            setPlayerDialogue(2, CHARACTERS[2].quotes.duel);
        }

        // Start countdown (60s standard)
        startTimer(60, () => {
            if (gameState.phase === 'SUBMISSION') {
                lockInHumanChoice();
            }
        });
    }

    function lockInHumanChoice() {
        if (gameState.phase !== 'SUBMISSION') return;

        clearInterval(gameState.timerInterval);
        sound.playLockIn();

        const inputVal = parseInt(elements.playerInput.value, 10);
        const validVal = isNaN(inputVal) ? 0 : Math.max(0, Math.min(100, inputVal));
        CHARACTERS[1].selection = validVal;

        elements.lockInBtn.disabled = true;
        elements.playerInput.disabled = true;
        elements.numberSlider.disabled = true;

        document.getElementById('status-p1').textContent = 'LOCKED';
        document.getElementById('num-p1').textContent = validVal;

        // Generate AI Selections
        const aliveCount = getAlivePlayers().length;
        for (let i = 2; i <= 5; i++) {
            const char = CHARACTERS[i];
            if (char.alive) {
                char.selection = char.decide(gameState.round, aliveCount, gameState.history, gameState.activeRules);
                document.getElementById(`status-p${i}`).textContent = 'LOCKED';
            } else {
                char.selection = null;
            }
        }

        // Advance to Reveal Phase
        executeRevealPhase();
    }

    function executeRevealPhase() {
        gameState.phase = 'REVEAL';
        elements.stageTag.textContent = 'REVEALING PICKS';
        elements.outcomeMsg.textContent = 'Numbers are being broadcast to the arena...';

        const stepDelay = 400 / gameState.simulationSpeed;
        let step = 0;

        for (let i = 1; i <= 5; i++) {
            const char = CHARACTERS[i];
            if (char.alive) {
                setTimeout(() => {
                    const numEl = document.getElementById(`num-p${i}`);
                    const statusEl = document.getElementById(`status-p${i}`);
                    numEl.textContent = char.selection;
                    statusEl.textContent = 'REVEALED';
                    sound.playReveal();
                }, step * stepDelay);
                step++;
            }
        }

        setTimeout(() => {
            executeClashAndCalculationPhase();
        }, (step + 1) * stepDelay);
    }

    function executeClashAndCalculationPhase() {
        gameState.phase = 'CALCULATING';
        elements.stageTag.textContent = 'CALCULATING TARGET';

        const activePlayers = getAlivePlayers();
        const selections = activePlayers.map(p => ({ id: p.id, val: p.selection }));

        // Check for duplicate clash (Rule 1: active with <= 4 players)
        const counts = {};
        selections.forEach(s => {
            counts[s.val] = (counts[s.val] || 0) + 1;
        });

        const clashedPlayerIds = new Set();
        if (gameState.activeRules.duplicateClash) {
            selections.forEach(s => {
                if (counts[s.val] > 1) {
                    clashedPlayerIds.add(s.id);
                }
            });
        }

        // Visual clash feedback
        if (clashedPlayerIds.size > 0) {
            sound.playClash();
            clashedPlayerIds.forEach(id => {
                const pod = document.getElementById(`pod-p${id}`);
                pod.classList.add('clashed');
                document.getElementById(`status-p${id}`).textContent = 'INVALID (CLASH)';
                setPlayerDialogue(id, CHARACTERS[id].quotes.clash);
            });
            elements.outcomeMsg.textContent = 'Rule I Triggered: Duplicate picks clashed and became invalid!';
        }

        // Compute average & target
        const sum = selections.reduce((acc, curr) => acc + curr.val, 0);
        const average = sum / selections.length;
        const target = average * 0.8;

        sound.playCalculation();

        elements.formulaAvg.textContent = `AVG: ${average.toFixed(2)}`;
        elements.formulaTarget.textContent = target.toFixed(2);

        setTimeout(() => {
            resolveRoundWinners(target, average, clashedPlayerIds, selections);
        }, 1200 / gameState.simulationSpeed);
    }

    function resolveRoundWinners(target, average, clashedPlayerIds, selections) {
        gameState.phase = 'RESOLVING';
        elements.stageTag.textContent = 'ROUND RESOLUTION';

        const activePlayers = getAlivePlayers();
        let winners = [];
        let ruleNote = 'Standard calculation';

        // Check Rule 3: 0 vs 100 Paradox (when in final 2-player duel)
        if (activePlayers.length === 2 && gameState.activeRules.zeroVsHundred) {
            const pA = activePlayers[0];
            const pB = activePlayers[1];

            if ((pA.selection === 0 && pB.selection === 100) || (pA.selection === 100 && pB.selection === 0)) {
                const winner = (pA.selection === 100) ? pA : pB;
                winners = [winner.id];
                ruleNote = 'Rule III: 100 overrules 0!';
            }
        }

        // Standard Closest Player Calculation if no duel override
        if (winners.length === 0) {
            let eligibleSelections = selections;

            // If duplicate rule is active, clashed players cannot win
            if (gameState.activeRules.duplicateClash) {
                eligibleSelections = selections.filter(s => !clashedPlayerIds.has(s.id));
            }

            if (eligibleSelections.length === 0) {
                // All players clashed! No winners
                winners = [];
                ruleNote = 'Mutual clash: All players invalidated!';
            } else {
                let minDiff = Infinity;
                eligibleSelections.forEach(s => {
                    const diff = Math.abs(s.val - target);
                    if (diff < minDiff) {
                        minDiff = diff;
                    }
                });

                // Can have multiple winners in case of identical distance
                eligibleSelections.forEach(s => {
                    if (Math.abs(Math.abs(s.val - target) - minDiff) < 0.0001) {
                        winners.push(s.id);
                    }
                });
            }
        }

        // Check Rule 2: Exact Match Double Penalty (active with <= 3 players)
        let isExactMatch = false;
        if (gameState.activeRules.exactMatchDouble && winners.length > 0) {
            winners.forEach(wId => {
                const pick = CHARACTERS[wId].selection;
                if (Math.round(target) === pick || Math.abs(target - pick) < 0.01) {
                    isExactMatch = true;
                }
            });
        }

        const penaltyAmount = isExactMatch ? 2 : 1;
        if (isExactMatch) {
            ruleNote = 'Rule II: Exact Match! Losers penalized -2 points!';
        }

        // Apply scores
        activePlayers.forEach(p => {
            const isWinner = winners.includes(p.id);
            const pod = document.getElementById(`pod-p${p.id}`);
            const statusEl = document.getElementById(`status-p${p.id}`);

            if (isWinner) {
                pod.classList.add('winner');
                statusEl.textContent = 'WINNER';
                setPlayerDialogue(p.id, CHARACTERS[p.id].quotes.win);
            } else {
                p.score -= penaltyAmount;
                statusEl.textContent = `PENALTY (-${penaltyAmount})`;
                setPlayerDialogue(p.id, CHARACTERS[p.id].quotes.lose);
            }

            updatePlayerDisplay(p.id);
        });

        // Sound effects
        if (winners.includes(1)) {
            sound.playWin();
        } else {
            sound.playAcidSizzle();
        }

        // Update outcome message
        if (winners.length > 0) {
            const winnerNames = winners.map(id => CHARACTERS[id].name).join(' & ');
            elements.outcomeMsg.textContent = `Winner: ${winnerNames} (Target: ${target.toFixed(2)}). ${ruleNote}`;
        } else {
            elements.outcomeMsg.textContent = `No winner! All active players penalized. ${ruleNote}`;
        }

        // Save round history
        const roundRecord = {
            round: gameState.round,
            target: target,
            average: average,
            selections: {
                1: CHARACTERS[1].selection,
                2: CHARACTERS[2].selection,
                3: CHARACTERS[3].selection,
                4: CHARACTERS[4].selection,
                5: CHARACTERS[5].selection
            },
            clashed: Array.from(clashedPlayerIds),
            winners: winners,
            ruleNote: ruleNote
        };
        gameState.history.push(roundRecord);
        appendHistoryTableRow(roundRecord);

        // Process Eliminations
        setTimeout(() => {
            processEliminations();
        }, 1800 / gameState.simulationSpeed);
    }

    function processEliminations() {
        const newlyEliminated = [];

        for (let i = 1; i <= 5; i++) {
            const char = CHARACTERS[i];
            if (char.alive && char.score <= -10) {
                char.alive = false;
                newlyEliminated.push(char);

                // Dramatic tipping scale & acid pour animation
                const beakerFrame = document.getElementById(`pod-p${i}`).querySelector('.acid-scale-frame');
                const spillFx = document.getElementById(`spill-p${i}`);
                if (beakerFrame) beakerFrame.classList.add('dumping');
                if (spillFx) spillFx.classList.add('active');

                sound.playAcidSizzle();
                updatePlayerDisplay(i);
            }
        }

        if (newlyEliminated.length > 0) {
            const deadNames = newlyEliminated.map(c => c.name).join(', ');
            elements.outcomeMsg.textContent = `⚖️ Scaled tipped! ${deadNames} reached -10 pts and dissolved in Aqua Regia!`;
            updateRulesState();
        }

        // Check End Condition or Proceed to Next Round
        setTimeout(() => {
            if (!CHARACTERS[1].alive) {
                triggerGameOver(false);
            } else if (getAlivePlayers().length <= 1) {
                triggerGameOver(true);
            } else {
                gameState.round++;
                initRound();
            }
        }, 2200 / gameState.simulationSpeed);
    }

    function triggerGameOver(isVictory) {
        gameState.phase = 'GAMEOVER';
        clearInterval(gameState.timerInterval);

        elements.endgameModal.classList.remove('hidden');

        if (isVictory) {
            sound.playWin();
            elements.endgameBox.classList.remove('game-over');
            elements.endgameIcon.textContent = '👑♦️';
            elements.endgameTitle.textContent = 'GAME CLEAR!';
            elements.endgameQuote.textContent = '"A truly rational mind... You understood the game far better than I anticipated." — Keiichi Kuzuryū';
            elements.endgameStats.innerHTML = `
                <div>Survived: <strong>${gameState.round} Rounds</strong></div>
                <div>Final Score: <strong>${CHARACTERS[1].score} pts</strong></div>
                <div>Status: <strong>Sole Survivor of the Supreme Court</strong></div>
            `;
        } else {
            sound.playGameOver();
            elements.endgameBox.classList.add('game-over');
            elements.endgameIcon.textContent = '☠️⚗️';
            elements.endgameTitle.textContent = 'GAME OVER';
            elements.endgameQuote.textContent = '"In the end, all lives are dissolved by the same unyielding judgment." — Keiichi Kuzuryū';
            elements.endgameStats.innerHTML = `
                <div>Survived Until: <strong>Round ${gameState.round}</strong></div>
                <div>Final Score: <strong>${CHARACTERS[1].score} pts</strong></div>
                <div>Cause of Death: <strong>Dissolution in Aqua Regia</strong></div>
            `;
        }
    }

    function appendHistoryTableRow(record) {
        const tr = document.createElement('tr');

        const formatPick = (id) => {
            const char = CHARACTERS[id];
            const pick = record.selections[id];
            if (pick === null || pick === undefined) {
                return '<span class="dead-cell">X</span>';
            }
            if (record.clashed.includes(id)) {
                return `<span class="clash-cell">${pick}</span>`;
            }
            if (record.winners.includes(id)) {
                return `<span class="win-cell"><strong>${pick}</strong></span>`;
            }
            return `<span class="lose-cell">${pick}</span>`;
        };

        const winnersStr = record.winners.length > 0 
            ? record.winners.map(id => CHARACTERS[id].name.split(' ')[0]).join(', ')
            : 'None';

        tr.innerHTML = `
            <td>#${record.round}</td>
            <td>${formatPick(1)}</td>
            <td>${formatPick(2)}</td>
            <td>${formatPick(3)}</td>
            <td>${formatPick(4)}</td>
            <td>${formatPick(5)}</td>
            <td>${record.average.toFixed(1)}</td>
            <td><strong>${record.target.toFixed(2)}</strong></td>
            <td class="${record.winners.includes(1) ? 'win-cell' : ''}">${winnersStr}</td>
            <td style="font-size: 10px; color: var(--text-muted);">${record.ruleNote}</td>
        `;

        elements.historyTableBody.appendChild(tr);
    }

    function resetEntireGame() {
        clearInterval(gameState.timerInterval);

        gameState.round = 1;
        gameState.phase = 'IDLE';
        gameState.history = [];
        gameState.activeRules = {
            duplicateClash: false,
            exactMatchDouble: false,
            zeroVsHundred: false
        };

        // Reset characters
        for (let i = 1; i <= 5; i++) {
            CHARACTERS[i].score = 0;
            CHARACTERS[i].alive = true;
            CHARACTERS[i].selection = null;

            const pod = document.getElementById(`pod-p${i}`);
            pod.classList.remove('dissolved', 'winner', 'clashed');

            const beakerFrame = pod.querySelector('.acid-scale-frame');
            if (beakerFrame) beakerFrame.classList.remove('dumping');

            const spillFx = document.getElementById(`spill-p${i}`);
            if (spillFx) spillFx.classList.remove('active');

            updatePlayerDisplay(i);
        }

        elements.historyTableBody.innerHTML = '';
        elements.endgameModal.classList.add('hidden');
        elements.playerInput.value = '32';
        elements.numberSlider.value = '32';

        updateRulesState();
        initRound();
    }

    // ==========================================
    // 6. EVENT LISTENERS & INITIALIZATION
    // ==========================================

    function setupEventListeners() {
        // Slider & Number Input Sync
        elements.numberSlider.addEventListener('input', (e) => {
            elements.playerInput.value = e.target.value;
            if (gameState.phase === 'SUBMISSION') {
                document.getElementById('num-p1').textContent = e.target.value;
            }
        });

        elements.playerInput.addEventListener('input', (e) => {
            let val = parseInt(e.target.value, 10);
            if (isNaN(val)) val = 0;
            val = Math.max(0, Math.min(100, val));
            elements.numberSlider.value = val;
            if (gameState.phase === 'SUBMISSION') {
                document.getElementById('num-p1').textContent = val;
            }
        });

        // Preset Chips
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (elements.playerInput.disabled) return;
                const val = btn.dataset.val;
                elements.playerInput.value = val;
                elements.numberSlider.value = val;
                sound.playTick(false);
                if (gameState.phase === 'SUBMISSION') {
                    document.getElementById('num-p1').textContent = val;
                }
            });
        });

        // Lock In Button
        elements.lockInBtn.addEventListener('click', () => {
            lockInHumanChoice();
        });

        // Modals
        elements.rulesBtn.addEventListener('click', () => {
            elements.rulesModal.classList.remove('hidden');
        });
        elements.closeRulesBtn.addEventListener('click', () => {
            elements.rulesModal.classList.add('hidden');
        });
        elements.rulesModal.addEventListener('click', (e) => {
            if (e.target === elements.rulesModal) {
                elements.rulesModal.classList.add('hidden');
            }
        });

        elements.historyBtn.addEventListener('click', () => {
            elements.historyModal.classList.remove('hidden');
        });
        elements.closeHistoryBtn.addEventListener('click', () => {
            elements.historyModal.classList.add('hidden');
        });
        elements.historyModal.addEventListener('click', (e) => {
            if (e.target === elements.historyModal) {
                elements.historyModal.classList.add('hidden');
            }
        });

        // Sound Toggle
        elements.soundToggle.addEventListener('click', () => {
            sound.muted = !sound.muted;
            elements.soundIcon.textContent = sound.muted ? '🔇' : '🔊';
            if (!sound.muted) sound.playTick(false);
        });

        // Speed Toggle
        elements.speedToggle.addEventListener('click', () => {
            if (gameState.simulationSpeed === 1) {
                gameState.simulationSpeed = 2.5;
                elements.speedLabel.textContent = '2.5x';
            } else {
                gameState.simulationSpeed = 1;
                elements.speedLabel.textContent = '1x';
            }
        });

        // Restart Game
        elements.restartGameBtn.addEventListener('click', () => {
            resetEntireGame();
        });

        // Keyboard shortcuts
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && gameState.phase === 'SUBMISSION') {
                lockInHumanChoice();
            }
        });
    }

    // Initialize on page load
    window.addEventListener('DOMContentLoaded', () => {
        setupEventListeners();
        updateRulesState();
        for (let i = 1; i <= 5; i++) {
            updatePlayerDisplay(i);
        }
        initRound();
    });

})();
