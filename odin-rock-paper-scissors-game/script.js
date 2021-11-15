'use strict';

// AI choice
const computerPlay = function () {
  let x = Math.floor(Math.random() * 3);
  // returns a number between 0-2
  console.log(x);
  if (x === 0) {
    return 'rock';
  } else if (x === 1) {
    return 'paper';
  } else if (x === 2) {
    return 'scissors';
  }
};

// player's choice
const playerSelection = function () {
  const userAnswer = prompt('Rock, paper, or scissors?').toLowerCase();
  // always set user input to lowercase for comparison ease
  return userAnswer;
};

console.log(computerPlay(), playerSelection());
