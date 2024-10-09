# King of Diamonds Game

Welcome to the **King of Diamonds Game**, inspired by the Alice in Borderland series. This game combines elements of strategy, psychology, and mathematics, challenging players to outthink each other to survive.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Game Rules](#game-rules)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Author](#author)

## Overview

The King of Diamonds is a high-stakes game where players select numbers between 0 and 100. The target number is determined by calculating the average of all players' selections. The player closest to the target survives the round, while others face point deductions, leading to elimination if they reach -10 points.

## Features

- Interactive UI with a material design aesthetic
- Supports one human player and four AI players
- Random AI number generation
- Real-time score tracking and elimination logic
- Game over notifications for eliminated players

## Game Rules

1. Each player selects a number between 0 and 100.
2. The average of all selections is calculated.
3. The target number is determined by multiplying the average by 0.8.
4. The player whose selection is closest to the target number survives the round.
5. Players who are not closest receive a point deduction.
6. A player reaching -10 points is eliminated from the game.

## Getting Started

To run the game locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sohamdalwadi/king-of-diamonds-game.git
   cd king-of-diamonds-game
   ```

2. **Open the HTML file**:

   Open `index.html` in your web browser to start playing the game.

3. **Modify Code** (optional):

   Feel free to explore and modify the code as you see fit!

## Technologies Used

- HTML
- CSS
- JavaScript

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch** for your feature or fix:
   
   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Make your changes** and commit them:
   
   ```bash
   git commit -m "Add some feature"
   ```

4. **Push to the branch**:

   ```bash
   git push origin feature/YourFeatureName
   ```

5. **Open a pull request**.

## Author

- **Soham Dalwadi** - [GitHub Profile](https://github.com/sohamdalwadi)

Feel free to reach out with any questions or suggestions!
