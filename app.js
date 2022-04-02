const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const userResult = document.getElementById("user-result");
const compResult = document.getElementById("comp-result");
const overallResult = document.getElementById("overall-result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const getComputerChoice = () => {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  if (userChoice === "r") {
    switch (computerChoice) {
      case "r":
        userResult.innerHTML = "Rock";
        compResult.innerHTML = "Rock";
        overallResult.innerHTML = "Draw!";
        break;
      case "p":
        computerScore_span.innerHTML = Number(computerScore_span.innerHTML) + 1;
        userResult.innerHTML = "Rock";
        compResult.innerHTML = "Paper";
        overallResult.innerHTML = "Comp wins!";
        break;
      case "s":
        userScore_span.innerHTML = Number(userScore_span.innerHTML) + 1;
        userResult.innerHTML = "Rock";
        compResult.innerHTML = "Scissors";
        overallResult.innerHTML = "User wins!";
        break;
    }
  }
  if (userChoice === "p") {
    switch (computerChoice) {
      case "r":
        userScore_span.innerHTML = Number(userScore_span.innerHTML) + 1;
        userResult.innerHTML = "Paper";
        compResult.innerHTML = "Rock";
        overallResult.innerHTML = "User wins!";
        break;
      case "p":
        userResult.innerHTML = "Paper";
        compResult.innerHTML = "Paper";
        overallResult.innerHTML = "Draw!";
        break;
      case "s":
        computerScore_span.innerHTML = Number(computerScore_span.innerHTML) + 1;
        userResult.innerHTML = "Paper";
        compResult.innerHTML = "Scissor";
        overallResult.innerHTML = "Comp wins!";
        break;
    }
  }
  if (userChoice === "s") {
    switch (computerChoice) {
      case "r":
        computerScore_span.innerHTML = Number(computerScore_span.innerHTML) + 1;
        userResult.innerHTML = "Scissor";
        compResult.innerHTML = "Rock";
        overallResult.innerHTML = "Comp wins!";
        break;
      case "p":
        userScore_span.innerHTML = Number(userScore_span.innerHTML) + 1;
        userResult.innerHTML = "Scissor";
        compResult.innerHTML = "Paper";
        overallResult.innerHTML = "User wins!";
        break;
      case "s":
        userResult.innerHTML = "Scissor";
        compResult.innerHTML = "Scissor";
        overallResult.innerHTML = "Draw!";
        break;
    }
  }
  if (Number(userScore_span.innerHTML) === 10) {
    alert("You Win!");
    userScore_span.innerHTML = 0;
    computerScore_span.innerHTML = 0;
    userResult.innerHTML = "You";
    compResult.innerHTML = "Comp";
    overallResult.innerHTML = "Let's go!";
  }
  if (Number(computerScore_span.innerHTML) === 10) {
    alert("Comp Win!");
    userScore_span.innerHTML = 0;
    computerScore_span.innerHTML = 0;
    userResult.innerHTML = "You";
    compResult.innerHTML = "Comp";
    overallResult.innerHTML = "Let's go!";
  }
};

const main = () => {
  rock_div.addEventListener("click", () => {
    game("r");
  });

  paper_div.addEventListener("click", () => {
    game("p");
  });

  scissors_div.addEventListener("click", () => {
    game("s");
  });
};

main();
