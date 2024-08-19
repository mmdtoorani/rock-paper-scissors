let resultObj = {
  won: 0,
  lost: 0,
  tie: 0,
};

let choicesObj = {
  myMove: "rock",
  computerMove: "rock",
};

function displayResult() {
  // TODO: This function must only show the result on the screen
  // *HINT*: search about how to use javascript object in the HTML tag
  console.log(resultObj);
}

function manipulateResult() {
  /* TODO: This function should call and manipulate the result (resultObj object) 
  after every time the game finished */
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (0 <= randomNumber < 1 / 3) {
    choicesObj.computerMove = "rock";
  } else if (1 / 3 <= randomNumber < 2 / 3) {
    choicesObj.computerMove = "paper";
  } else if (2 / 3 <= randomNumber < 1) {
    choicesObj.computerMove = "scissors";
  }
}

function rock() {
  // TODO: complete this function again with new structure
}

function paper() {
  // TODO: complete this function again with new structure
}

function scissors() {
  // TODO: complete this function again with new structure
}

function shakingRocks() {
  // TODO: When this function called it must show two rock animation shaking for start
  const yourChoice = document.getElementById("your-choice");
  const computerChoice = document.getElementById("computer-choice");
  console.log(yourChoice);
  console.log(computerChoice);
}

function doAnimation() {
  /*
    TODO: When this function called, two hands should move toward eachother
    and call shakingRocks function and then the hands should convert to the choices.
    Your hand (the left one) shout convert to the your choice and the same way for computer
    Its's going to become similar the actual rock paper scissors game in real
  */
}
