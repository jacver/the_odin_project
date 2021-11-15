'use strict';

// player's choice
const playerSelection = function () {
  const userAnswer = prompt('Rock, paper, or scissors?').toLowerCase();
  // always set user input to lowercase for comparison ease
  console.log(userAnswer);
  return userAnswer;
};

// AI choice
const computerPlay = function () {
  let x = Math.floor(Math.random() * 3);
  // returns a number between 0-2
  if (x === 0) {
    return 'rock';
  } else if (x === 1) {
    return 'paper';
  } else if (x === 2) {
    return 'scissors';
  }
};

// game round
const playRound = function (playerSelection, computerSelection) {
  // player wins:
  if (computerSelection === 'rock' && playerSelection === 'scissors') {
    return 'You lose! Rocks smash scissors!';
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    return 'You lose! Paper covers rock!';
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    return 'You lose! Scissors cut paper!';
    // computer wins:
  } else if (computerSelection === 'rock' && playerSelection === 'paper') {
    return 'You win! Paper covers rock!';
  } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    return 'You win! Rocks smash scissors!';
  } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    return 'You win! Scissors cut paper!';
  } else if (computerSelection === playerSelection) {
    return 'Tie! Go again.';
  } // tie
};

// to test this function run the following:
// const computerSelection = computerPlay();
// console.log('computer play: ' + computerSelection);
// console.log(playRound(playerSelection(), computerSelection));
