const choices = ['rock', 'paper', 'scissors'];
var score = [0, 0, 0];

function getComputerChoise() {
  return choices[Math.floor(Math.random() * 3)];
}

function getPlayerSelection() {
  let playerChoice = prompt(
    'Choose your weapon: (rock, paper, scissors)'
  ).toLowerCase();
  switch (playerChoice) {
    case 'rock':
      return 'rock';
      break;
    case 'paper':
      return 'paper';
      break;
    case 'scissors':
      return 'scissors';
      break;
    default:
      alert('Only "rock", "paper" or "scissors" are valid!');
      return getPlayerSelection();
  }
}

function playRound(playerSelection, computerSelection) {
  // const playerSelection = getPlayerSelection();
  // const computerSelection = getComputerChoise();
  if (playerSelection === computerSelection) {
    score[2]++;
    console.log(`${playerSelection} ties with ${computerSelection}!`);
    return;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    score[0]++;
    console.log(`You win! ${playerSelection} wins ${computerSelection}!`);
    return;
  } else {
    score[1]++;
    console.log(`You lost! ${computerSelection} wins ${playerSelection}!`);
    return;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(getPlayerSelection(), getComputerChoise());
  }

  let message =
    score[0] === score[1]
      ? 'Tie!'
      : score[0] > score[1]
      ? 'You win!'
      : 'You lost!';

  message += ` Final score: \nPlayer: ${score[0]} \nComputer: ${score[1]} \nDraws: ${score[2]}`;

  console.log(message);
  resetGame();
}

function resetGame() {
  score = [0, 0, 0];
}

game();
