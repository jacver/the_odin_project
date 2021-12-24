'use strict';

// Selectors

const btnRock = document.querySelector('.player-choice-rock');
const btnPaper = document.querySelector('.player-choice-paper');
const btnScissors = document.querySelector('.player-choice-scissors');

// functions

// buttons

// AI selection
const computerPlay = function () {
  let x = Math.floor(Math.random() * 3);
  // returns a number between 0-2
  if (x === 0) {
    console.log('AI: rock');
    return 'rock';
  } else if (x === 1) {
    console.log('AI: paper');
    return 'paper';
  } else if (x === 2) {
    console.log('AI: scissors');
    return 'scissors';
  }
};

// Player selection via prompt
// let playerPlay = function () {
//   let userAnswer = prompt('Rock, paper, or scissors?').trim().toLowerCase();
//   console.log(`User: ${userAnswer}`);
//   return userAnswer;
// };

// one round of play
const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      console.log('win round');
      return 'win';
    } else if (computerSelection === 'paper') {
      console.log('lose round');
      return 'lose';
    } else {
      console.log('tie round');
      return 'tie';
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      console.log('win round');
      return 'win';
    } else if (computerSelection === 'scissors') {
      console.log('lose round');
      return 'lose';
    } else {
      console.log('tie round');
      return 'tie';
    }
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      console.log('win round');
      return 'win';
    } else if (computerSelection === 'rock') {
      console.log('lose round');
      return 'lose';
    } else {
      console.log('tie round');
      return 'tie';
    }
  }
};

const game = function () {
  let rounds = 1;
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= rounds; i++) {
    // player selection
    let playerSelection = playerPlay();
    // computer selection
    let computerSelection = computerPlay();

    // one round
    let round = playRound(playerSelection, computerSelection);

    // scoring and post-round messaging
    if (round === 'win') {
      playerScore++;
      console.log(
        `Round ${i}: You win. You: ${playerScore} points, Computer: ${computerScore} points`
      );
    }

    if (round === 'tie') {
      console.log(
        `Round ${i}: Tie. You: ${playerScore} points, Computer: ${computerScore} points`
      );
    }
    if (round === 'lose') {
      computerScore++;
      console.log(
        `Round ${i}: You lose. You: ${playerScore} points, Computer: ${computerScore} points`
      );
    }
  }

  // after all rounds - final score
  if (playerScore > computerScore) {
    console.log(`You win! ${playerScore} to ${computerScore}`);
  }
  if (playerScore < computerScore) {
    console.log(`You lose! ${playerScore} to ${computerScore}`);
  }
  if (computerScore === playerScore) {
    console.log(`Game ends in a tie! ${playerScore} to ${computerScore}`);
  }
};

// game();

btnRock.addEventListener('click', function () {
  // player pick
  let playerSelection = 'rock';
  console.log('user: rock');
  // ai pick
  let computerSelection = computerPlay();
  // play round
  playRound(playerSelection, computerSelection);
});

btnPaper.addEventListener('click', function () {
  //player pick
  let playerSelection = 'paper';
  console.log('user: paper');
  // ai pick
  let computerSelection = computerPlay();
  // play round
  playRound(playerSelection, computerSelection);
});

btnScissors.addEventListener('click', function () {
  // player pick
  let playerSelection = 'scissors';
  console.log('user: scissors');
  // ai pick
  let computerSelection = computerPlay();
  // play round
  playRound(playerSelection, computerSelection);
});
