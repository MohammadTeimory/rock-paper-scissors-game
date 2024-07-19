let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
//-----------------computerMove()----------------
function pickcomputerMove() {
  let randomNum = Math.random();
  let computerMove = "";
  if (randomNum < 1 / 3 && randomNum >= 0) {
    computerMove = "rock";
  } else if (randomNum < 2 / 3 && randomNum >= 1 / 3) {
    computerMove = "paper";
  } else if (randomNum < 1 && randomNum >= 2 / 3) {
    computerMove = "scissors";
  }
  return computerMove;
}
updateScore();
//----------------playGame()----------------
function playGame(playerMove) {
  let computerMove = pickcomputerMove();
  let result = "";

  //----------------playerMove === "rock"----------------
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "Lose";
    } else if (computerMove === "scissors") {
      result = "Win";
    }
  }

  //----------------playerMove === "paper"----------------
  if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "Win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "Lose";
    }
  }

  //----------------playerMove === "scissors"----------------
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "Lose";
    } else if (computerMove === "paper") {
      result = "Win";
    } else if (computerMove === "scissors") {
      result = "Tie";
    }
  }

  //---------------update-score----------------

  if (result === "Win") {
    score.wins++;
    addClass() 
  } else if (result === "Lose") {
    score.losses++;
    addClass() 
  } else if (result === "Tie") {
    score.ties++;
    addClass() 
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScore();

  document.querySelector(".result").innerHTML = result;

  document.querySelector(
    ".move"
  ).innerHTML = `you
        <img src="img/${playerMove}-emoji.png" alt="">
        <img src="img/${computerMove}-emoji.png" alt="">
        computer`;

  function addClass() {
    if (result === "Win") {
      document.querySelector(".result").classList.add("win");
      document.querySelector(".result").classList.remove("lose");
      document.querySelector(".result").classList.remove("tie");
    } else if (result === "Lose") {
      document.querySelector(".result").classList.remove("win");
      document.querySelector(".result").classList.add("lose");
      document.querySelector(".result").classList.remove("tie");
    } else if (result === "Tie") {
        document.querySelector(".result").classList.remove('win');
    document.querySelector(".result").classList.remove('lose');
    document.querySelector(".result").classList.add('tie');
    }
  }
}

//---------------updateScore()----------------
function updateScore() {
  document.querySelector(
    ".score"
  ).innerHTML = `Win :${score.wins} , Loses :${score.losses} , Tie :${score.ties}`;
}
