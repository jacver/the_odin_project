'use strict';

// Selectors

const btnRock = document.querySelector('.player-choice-rock');
const btnPaper = document.querySelector('.player-choice-paper');
const btnScissors = document.querySelector('.player-choice-scissors');

let labelSelections = document.getElementById('selections');
let labelScoreboard = document.getElementById('scoreboard');

// pre-game
let playerSelection = '';

let playerScore = 0;
let computerScore = 0;

labelSelections.textContent = 'Rock, paper, or scissors?';
labelScoreboard.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

// functions

// AI selection
const computerPlay = function () {
  let x = Math.floor(Math.random() * 3);
  // returns a number between 0-2
  if (x === 0) {
    return '✊';
  } else if (x === 1) {
    return '🤚';
  } else if (x === 2) {
    return '✌';
  }
};

// player selection buttons

btnRock.addEventListener('click', function () {
  // player pick
  let playerSelection = 'rock';
  console.log(playerSelection);
  // ai pick
  let computerSelection = computerPlay();
  console.log(computerSelection);
  // play round
  labelSelections.textContent = `✊ to ${computerSelection}`;
});

btnPaper.addEventListener('click', function () {
  //player pick
  let playerSelection = 'paper';
  // ai pick
  let computerSelection = computerPlay();
  // play round
  labelSelections.textContent = `🤚 to ${computerSelection}`;
  playRound(playerSelection, computerSelection);
});

btnScissors.addEventListener('click', function () {
  // player pick
  let playerSelection = 'scissors';
  // ai pick
  let computerSelection = computerPlay();
  // play round
  labelSelections.textContent = `✌ to ${computerSelection}`;
  playRound(playerSelection, computerSelection);
});

// one round of play

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    if (computerSelection === '✌') {
      playerScore++;
      return 'win';
    } else if (computerSelection === '🤚') {
      return 'lose';
    } else {
      return 'tie';
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection === '✊') {
      return 'win';
    } else if (computerSelection === '✌') {
      return 'lose';
    } else {
      return 'tie';
    }
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === '🤚') {
      return 'win';
    } else if (computerSelection === '✊') {
      return 'lose';
    } else {
      return 'tie';
    }
  }

  // scoring
  if (result === 'win') {
  }
  if (result === 'lose') {
    computerScore++;
  }
};

// after all rounds - final score
if (playerScore > computerScore) {
  console.log(`You win! ${playerScore} to ${computerScore}`);
}
if (playerScore < computerScore) {
  console.log(`You lose! ${playerScore} to ${computerScore}`);
}
if (computerScore > 0 && computerScore === playerScore) {
  console.log(`Game ends in a tie! ${playerScore} to ${computerScore}`);
}
