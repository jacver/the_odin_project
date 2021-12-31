"use strict";

// Selectors

const btnRock = document.querySelector(".player-choice-rock");
const btnPaper = document.querySelector(".player-choice-paper");
const btnScissors = document.querySelector(".player-choice-scissors");

let labelSelections = document.getElementById("selections");
let labelScoreboard = document.getElementById("scoreboard");
let labelPlayerScore = document.querySelector(".player-score");
let labelComputerScore = document.querySelector(".computer-score");

// external declarations

let playerSelection, result, playerScore, computerScore;

// game init

labelSelections.textContent = "Rock, paper, or scissors?";

labelComputerScore.textContent = 0;
labelPlayerScore.textContent = 0;

playerScore = 0;
computerScore = 0;

// functions

// AI selection
const computerPlay = function () {
  let x = Math.floor(Math.random() * 3);
  // returns a number between 0-2
  if (x === 0) {
    return "✊";
  } else if (x === 1) {
    return "🤚";
  } else if (x === 2) {
    return "✌";
  }
};

// invoking playRound()

btnRock.addEventListener("click", function () {
  // player pick
  let playerSelection = "✊";
  console.log(playerSelection);
  // ai pick
  let computerSelection = computerPlay();
  console.log(computerSelection);
  // play round
  playRound(playerSelection, computerSelection);
  labelSelections.textContent = `✊ to ${computerSelection}`;
  // score
  scoring(result);
});

btnPaper.addEventListener("click", function () {
  //player pick
  let playerSelection = "🤚";
  console.log(playerSelection);
  // ai pick
  let computerSelection = computerPlay();
  console.log(computerSelection);
  // play round
  playRound(playerSelection, computerSelection);
  labelSelections.textContent = `🤚 to ${computerSelection}`;
  // score
  scoring(result);
});

btnScissors.addEventListener("click", function () {
  // player pick
  let playerSelection = "✌";
  console.log(playerSelection);
  // ai pick
  let computerSelection = computerPlay();
  console.log(computerSelection);
  // play round
  playRound(playerSelection, computerSelection);
  labelSelections.textContent = `✌ to ${computerSelection}`;
  // score
  scoring(result);
});

// one round of play

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === "✊") {
    if (computerSelection === "✌") {
      result = "win";
    } else if (computerSelection === "🤚") {
      result = "lose";
    } else {
      result = "tie";
    }
  }
  if (playerSelection === "🤚") {
    if (computerSelection === "✊") {
      result = "win";
    } else if (computerSelection === "✌") {
      result = "lose";
    } else {
      result = "tie";
    }
  }
  if (playerSelection === "✌") {
    if (computerSelection === "🤚") {
      result = "win";
    } else if (computerSelection === "✊") {
      result = "lose";
    } else {
      result = "tie";
    }
    return result;
  }

  // // scoring
  // if (result === "win") {
  //   playerScore++;
  // }
  // if (result === "lose") {
  //   computerScore++;
  // }
};

const scoring = function (result) {
  // determine result
  if (result === "win") {
    playerScore++;
    console.log(result);
  } else if (result === "lose") {
    computerScore++;
    console.log(result);
  } else {
    console.log("tie round");
  }
  // change score on UI
  console.log(playerScore, computerScore);
  labelPlayerScore.textContent = playerScore;
  labelComputerScore.textContent = computerScore;
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
