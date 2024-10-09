// script.js

// Initialize player scores
const playerScores = {
    player1: 0, // Human player
    player2: 0, // AI Player 1
    player3: 0, // AI Player 2
    player4: 0, // AI Player 3
    player5: 0  // AI Player 4
};

let targetNumber;
const totalPlayers = 5;

// Function to simulate AI number selection
function getAISelection() {
    return Math.floor(Math.random() * 101);
}

// Function to handle the submission of the player's number
document.getElementById('submitButton').addEventListener('click', () => {
    const playerNumber = parseInt(document.getElementById('playerNumber').value);
    if (isNaN(playerNumber) || playerNumber < 0 || playerNumber > 100) {
        alert("Please enter a valid number between 0 and 100.");
        return;
    }

    // Get AI selections
    const aiSelections = [];
    for (let i = 2; i <= totalPlayers; i++) {
        const aiNumber = getAISelection();
        aiSelections.push(aiNumber);
        document.getElementById(`player${i}`).querySelector('.player-selection').innerText = aiNumber;
    }

    // Display human selection
    document.getElementById('player1').querySelector('.player-selection').innerText = playerNumber;

    // Calculate average and target number
    const allSelections = [playerNumber, ...aiSelections];
    const average = allSelections.reduce((sum, num) => sum + num, 0) / totalPlayers;
    targetNumber = Math.floor(average * 0.8);

    // Display target number
    document.getElementById('targetNumber').innerText = targetNumber;

    // Determine closest selection
    let closestPlayer = null;
    let closestDiff = Infinity;

    allSelections.forEach((selection, index) => {
        const diff = Math.abs(selection - targetNumber);
        if (diff < closestDiff) {
            closestDiff = diff;
            closestPlayer = index + 1; // +1 for player index (1 to 5)
        }
    });

    // Update scores
    updateScores(closestPlayer, allSelections);
});

// Function to update scores and handle elimination
function updateScores(winnerIndex, selections) {
    // Deduct points from all players except the closest
    for (let i = 1; i <= totalPlayers; i++) {
        if (i === winnerIndex) {
            continue; // Skip the winner
        }
        playerScores[`player${i}`] -= 1;
    }

    // Check for elimination
    for (let i = 1; i <= totalPlayers; i++) {
        if (playerScores[`player${i}`] <= -10) {
            disablePlayer(i);
        }
    }

    // Update score display
    updateScoreDisplay();
}

// Function to disable player and check for game over
function disablePlayer(playerIndex) {
    const playerDiv = document.getElementById(`player${playerIndex}`);
    playerDiv.style.opacity = 0.5; // Dim the eliminated player
    playerDiv.style.pointerEvents = 'none'; // Disable interaction
    const stopMark = document.createElement('div');
    stopMark.innerText = '🛑'; // Red stop mark
    stopMark.className = 'stop-mark';
    playerDiv.appendChild(stopMark);

    // Check if human player is eliminated
    if (playerIndex === 1) {
        alert("Game Over! You have been eliminated.");
        // Optionally: disable further actions, reset the game, etc.
    }
}

// Function to update score display
function updateScoreDisplay() {
    const scoresBody = document.getElementById('scoresBody');
    scoresBody.innerHTML = ''; // Clear previous scores
    for (let i = 1; i <= totalPlayers; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>Player ${i}</td><td>${playerScores[`player${i}`]}</td>`;
        scoresBody.appendChild(row);
    }
}
