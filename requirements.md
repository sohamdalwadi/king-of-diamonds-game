# Game Requirements

## Instructions for Adding/Editing Requirements
- **Adding a New Requirement:**
  - Determine the category and subcategory for the new requirement.
  - Assign a new ID using the format `GXXX.XX.XX`, where:
    - The first segment (`XXX`) is a sequential number for the main category.
    - The second segment (`XX`) is a sequential number for the subcategory.
    - The third segment (`XX`) is a sequential number for the specific requirement within the subcategory.
  - Ensure each segment is zero-padded to two digits (e.g., `01`, `02`).
  - Add the requirement under the appropriate category and subcategory.

- **Editing an Existing Requirement:**
  - Locate the requirement using its ID.
  - Update the requirement details as needed.
  - Ensure the ID remains unchanged unless the requirement is moved to a different category or subcategory.

## Game Overview
- [ ] [G001.00.00]: Develop a mobile game where players compete by selecting numbers to win rounds and avoid losing points.

## Set-up
- [ ] [G002.00.00]: The game should support a player limit of 5.
- [ ] [G003.00.00]: Upon entering the game, players should be prompted to confirm the operation of the tablet in front of them.
- [ ] [G004.00.00]: Above their heads should be a virtual weight/equilibrium stand that fills Aqua Regia.

## Time Limits
- [ ] [G005.00.00]: Each round lasts 1 minute.
- [ ] [G006.00.00]: The first round and rounds with new rules should last 5 minutes.

## UI/UX
- [ ] [G007.01.00]: Design an intuitive and engaging main menu.
- [ ] [G007.02.00]: Implement a user-friendly number selection interface.
- [ ] [G007.03.00]: Display a countdown timer for each round.
- [ ] [G007.04.00]: Show the calculated average and winning number at the end of each round.
- [ ] [G007.05.00]: Display updated scores after each round.
- [ ] [G007.06.00]: Provide a dramatic visual effect for the weight stand tipping over when a player reaches -10 points.
- [ ] [G007.07.00]: Include a tutorial for new players to understand the game rules.
- [ ] [G007.08.00]: Add a leaderboard to track top players.
- [ ] [G007.09.00]: Include a chat feature for players to communicate during the game.
- [ ] [G007.10.00]: Allow players to customize their avatars.
- [ ] [G007.11.00]: Implement a social sharing feature to share game results.
- [ ] [G007.12.00]: Add achievements and rewards for milestones.
- [ ] [G007.13.00]: Include analytics to track player behavior and game performance.

## Game Mechanics
- [ ] [G008.01.00]: Players select a number between 0 and 100 within the given time.
- [ ] [G008.02.00]: The average of the selected numbers should be multiplied by 0.8.
- [ ] [G008.03.00]: The player whose number is closest to the calculated number wins the round.
- [ ] [G008.04.00]: Losers lose a point.
- [ ] [G008.05.00]: A new rule is introduced for every player eliminated.
- [ ] [G008.06.00]: Game Clear condition: Be the last person remaining.
- [ ] [G008.07.00]: Game Over condition: Reach -10 points.
- [ ] [G008.08.00]: Every player who reaches -10 points should cause the virtual weight stand to tip over, dumping Aqua Regia and "burning" the virtual victim.
- [ ] [G008.09.00]: If 2 or more players choose the same number, their number becomes invalid, and they lose a point.
- [ ] [G008.10.00]: If a player chooses the exact correct number, the loser penalty is doubled.
- [ ] [G008.11.00]: If one player chooses 0, the player who chooses 100 is the winner.

## Technical Requirements
- [ ] [G009.01.00]: Develop a responsive and optimized UI for both portrait and landscape modes.
- [ ] [G009.02.00]: Ensure the game is compatible with multiple mobile device resolutions and operating systems (iOS, Android).
- [ ] [G009.03.00]: Implement push notifications for game updates and achievements.
- [ ] [G009.04.00]: Develop an AI opponent for single-player mode with multiple difficulty levels.
- [ ] [G009.05.00]: Integrate social media sharing options (Facebook, Twitter, etc.).
- [ ] [G009.06.00]: Implement in-game analytics to track player behavior and game performance.
- [ ] [G009.07.00]: Ensure the game is secure and protects player data.
- [ ] [G009.08.00]: Optimize the game for low-end devices to ensure smooth performance.
- [ ] [G009.09.00]: Implement a robust cross-platform leaderboard system.
- [ ] [G009.10.00]: Provide offline mode support for players without an internet connection.

## Future Requirements
- [ ] [G010.01.00]: Implement additional game modes or variations.
- [ ] [G010.02.00]: Add more customization options for player avatars.
- [ ] [G010.03.00]: Develop a multiplayer matchmaking system.
- [ ] [G010.04.00]: Include more detailed strategy guides and tips within the game.
- [ ] [G010.05.00]: Implement a feature to save and load game progress.
