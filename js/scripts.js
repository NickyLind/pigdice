// Pig dice
// Game object {round,}
// Player object {Name, Score, designation}
// Die Array

//Functions (Die roll)
//let rolled =
// Math.floor(Math.random() * 7)
// const randomElement = array[Math.floor(Math.random() * array.length)];
// if rolled = 2-6
// turnCount += dieRoll
// show point total of roll
// else 
// turnCount = 0
//end turn

// Function (endTurn)
// player1.score += turnCount
// if player1.score >= 100 end game
// turnCount = 0
// update scoreboard

function Game() {    // New Game Button
  this.round = 1;
  this.playerOne = 0;
  this.playerTwo = 0;
}

// On Start New Game
let newGame = new Game();
let turnCount = 0;

Game.prototype.dieRoll = function () { // Roll Button
  $("#turnOver").hide();
  $("#turnOverOne").hide();
  document.getElementById("roundCount").innerHTML = newGame.round;
  let rolled = Math.floor(Math.random() * 6) + 1;
  document.getElementById("currentRoll").innerHTML = rolled; 
  if (rolled >= 2) {
    turnCount += rolled;
    document.getElementById("turnTotal").innerHTML = turnCount;
  } else {
    turnCount = 0;
    newGame.round++;
    $("#turnOverOne").show();
  }
}

Game.prototype.endTurn = function () { // Hold Button
  if (this.round % 2 === 1) {
    this.playerOne += turnCount;
    if (this.playerOne >= 100) {
      // some win game screen
      // end game
    }
    turnCount = 0;
    document.getElementById("nameOneScore").innerHTML = newGame.playerOne; 
  } else {
    this.playerTwo += turnCount;
    if (this.playerTwo >= 100) {
      // some win game screen
      // end game
    }
    turnCount = 0;
    document.getElementById("nameTwoScore").innerHTML = newGame.playerTwo; 
  }
  newGame.round++;

  $("#turnOver").show();
}

// UI logic
$(document).ready(function() {
  $("#nameForm").submit(function(event) {
    event.preventDefault();
    let nameOne = $("#playerOneName").val();
    let nameTwo = $("#playerTwoName").val();
    $("#nameOne").text(nameOne + ": ");
    $("#nameTwo").text(nameTwo + ": ");
    
  })
})


