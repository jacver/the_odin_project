'use strict';

// player's choice
const playerPlay = function () {
  const userAnswer = prompt('Rock, paper, or scissors?').trim().toLowerCase();
  // always set user input to lowercase for comparison ease
  // trim() to remove white space
  console.log('USER: ' + userAnswer);
  return userAnswer;
};

// AI choice
const computerPlay = function () {
  let x = Math.floor(Math.random() * 3);
  // returns a number between 0-2
  if (x === 0) {
    console.log('PC: rock');
    // the console logs here log it, but you also need to return it
    return 'rock';
  } else if (x === 1) {
    console.log('PC: paper');
    return 'paper';
  } else if (x === 2) {
    console.log('PC: scissors');
    return 'scissors';
  }
};

// one round of play
const playRound = function (playerSelection, computerSelection) {
  // this runs one round of play
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

let playerSelection = playerPlay();
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
