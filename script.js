function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

function rock() {
  // TODO: corect this
  computerMove = pickComputerMove();
  shakingRocks();
  myMove = "rock";
  if (computerMove == "rock") {
    res = "Tie";
  } else if (computerMove == "paper") {
    res = "loose";
  } else if (computerMove == "scissors") {
    res = "Win";
  }
  // alert(`you picked ${myMove}. computer picked ${computerMove}. ${res}`);
}

function paper() {
  // TODO: corect this
  computerMove = pickComputerMove();
  shakingRocks();
  myMove = "paper";
  if (computerMove === "rock") {
    res = "Win";
  } else if (computerMove === "paper") {
    res = "Tie";
  } else if (computerMove === "scissors") {
    res = "loose";
  }
  // alert(`you picked ${myMove}. computer picked ${computerMove}. ${res}`);
}

function scissors() {
  // TODO: corect this
  computerMove = pickComputerMove();
  shakingRocks();
  myMove = "scissors";
  if (computerMove === "rock") {
    res = "loose";
  } else if (computerMove === "paper") {
    res = "Win";
  } else if (computerMove === "scissors") {
    res = "Tie";
  }
  // alert(`you picked ${myMove}. computer picked ${computerMove}. ${res}`);
}

function shakingRocks() {
  // TODO: corect this
  // TODO: When this function has called it must show two rock animation shaking for start
  const yourChoice = document.getElementById("your-choice");
  const computerChoice = document.getElementById("computer-choice");
  console.log(yourChoice);
  console.log(computerChoice);
}
