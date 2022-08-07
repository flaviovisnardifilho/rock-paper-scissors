const choices = ['rock', 'paper', 'scissors'];
var score = [0, 0, 0];
var round = 1;

function getComputerChoise() {
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  round++;

  if (playerSelection === computerSelection) {
    score[2]++;
    roundResult.textContent = `${playerSelection} ties with ${computerSelection}!`;
    return;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    score[0]++;
    roundResult.textContent = `You win! ${playerSelection} wins ${computerSelection}!`;
    return;
  } else {
    score[1]++;
    roundResult.textContent = `You lost! ${computerSelection} wins ${playerSelection}!`;
    return;
  }
}

function gameEnded() {
  if (score[0] === 5) {
    roundResult.textContent = 'You Win!!';
    btnWeapon.forEach(btn => (btn.disabled = true));
    return true;
  } else if (score[1] === 5) {
    roundResult.textContent = 'You lost!';
    btnWeapon.forEach(btn => (btn.disabled = true));
    return true;
  } else {
    return false;
  }
}

function game(playerChoice) {
  computerChoice = getComputerChoise();
  playRound(playerChoice, computerChoice);
  updateRound(playerChoice, computerChoice);
  updateScore();
}

function updateScore() {
  pScore.textContent = `You: ${score[0]}  |  A.I.: ${score[1]}.`;
  if (gameEnded()) return;
}

function updateRound(player, computer) {
  const newLine = document.createElement('tr');
  const newRound = document.createElement('td');
  const playerChoice = document.createElement('td');
  const computerChoice = document.createElement('td');

  newRound.textContent = round;
  newLine.appendChild(newRound);
  playerChoice.textContent = player;
  newLine.appendChild(playerChoice);
  computerChoice.textContent = computer;
  newLine.appendChild(computerChoice);

  resultTable.appendChild(newLine);
}

function resetGame() {
  score = [0, 0, 0];
  round = 0;
  while (resultTable.rows.length) {
    resultTable.deleteRow(0);
  }
  updateScore();
  roundResult.textContent = '';
  btnWeapon.forEach(btn => (btn.disabled = false));
}

const roundResult = document.querySelector('.round-result');
const btnWeapon = document.querySelectorAll('.weapon');
const btnReset = document.querySelector('.btn-reset');
const pScore = document.querySelector('.score');
const resultTable = document.querySelector('#resultTable');

btnReset.addEventListener('click', resetGame);
btnWeapon.forEach(btn => btn.addEventListener('click', () => game(btn.id)));
