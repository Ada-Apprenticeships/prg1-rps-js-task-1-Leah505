/**
/**
 * Plays a single round of Rock, Paper, Scissors, Lizard, Spock.
 * Logs the result as "player1", "player2", or "draw".
 * @param {string} player1 - Player one's choice.
 * @param {string} player2 - Player two's choice.
 * @returns {string} - The winner: "player1", "player2", or "draw".
 */
function rockPaperScissors(player1, player2) {
  // Object that defines what each choice defeats
  const winningRules = {
      rock: ['scissors', 'lizard'],
      paper: ['rock', 'spock'],
      scissors: ['paper', 'lizard'],
      lizard: ['spock', 'paper'],
      spock: ['scissors', 'rock'],
  };

  player1 = player1?.toLowerCase();
  player2 = player2?.toLowerCase();

  // Validate that both player choices are valid entries
  if (!winningRules[player1] || !winningRules[player2]) {
      console.error('Invalid choices. Please select from: rock, paper, scissors, lizard, spock.');
      throw new Error('Invalid choices.');
  }

  if (player1 === player2) {
      console.log('draw');
      return 'draw';
  }

  // Determine the winner by checking if player1's choice defeats player2's choice
  const result = winningRules[player1].includes(player2) ? 'player1' : 'player2';

  console.log(result);

  return result;
}

// Code for the automated tests
module.exports = {
  rockPaperScissors,
}