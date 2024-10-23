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


  if (player1 === player2) {
      console.log('draw');
      return 'draw';
  }
  
  const result = winningRules[player1].includes(player2) ? 'player1' : 'player2';

  console.log(result);

  return result;
}

// Code for the automated tests
module.exports = {
  rockPaperScissors,
}