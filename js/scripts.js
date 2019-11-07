// function TotalScore (rollScore) {
//   this.rollScore = [],
//   console.log(rollScore)
// }

var scorePlayer1 = [];
var scorePlayer2 = [];
var totalPlayer1 = [];
var totalPlayer2= [];

const reducer = (accumulator, currentValue) => accumulator + currentValue
var turnPlayer1 = [];
var turnPlayer2 = [];






var dicePlayer1 = {
  roll: function() {
    var randomNumber =
    Math.floor(Math.random() * 6) + 1;
    if (randomNumber === 1) {
      scorePlayer1.push(0);
      turnPlayer1.push(0);
      // turnPlayer1.length = 0
      console.log("you rolled a 1")
    } else {
    scorePlayer1.push(randomNumber)
    turnPlayer1.push(randomNumber);}
    console.log(scorePlayer1)
    console.log(turnPlayer1)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    var newTurnPlayer1 = turnPlayer1.reduce(reducer);
    console.log(newTurnPlayer1);

    holdPlayer1 = {
      hold: function() {
        var newReducer1 = scorePlayer1.reduce(reducer);
        totalPlayer1.push(newReducer1);
        console.log(newReducer1);
        console.log(totalPlayer1);
      }
    }
  }
}


var dicePlayer2 = {
  roll: function() {
    var randomNumber =
    Math.floor(Math.random() * 6) + 1;
    scorePlayer2.push(randomNumber);
    if (scorePlayer2.includes(1)) {
      alert("Sorry, you don't get any points this turn")
      console.log("you rolled a 1")
    } else {
      turnPlayer2.push(randomNumber)}
      console.log(scorePlayer2)
      console.log(turnPlayer2)
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      var newTurnPlayer2 = turnPlayer2.reduce(reducer);
      console.log(newTurnPlayer2);

    holdPlayer2 = {
      hold: function () {
        if (scorePlayer2.includes(0)) {
          // scorePlayer2.pop();
          totalPlayer2 + 0;
          console.log(totalPlayer2)
          // totalPlayer2.push(scorePlayer2);
          //
        }

        else {
          var newReducer2 = scorePlayer2.reduce(reducer);
          totalPlayer2.push(newReducer2);
          console.log(newReducer2);
          console.log(totalPlayer2);}
      }
    }
  }
};



$(document).ready(function() {
  // var totalScore = new TotalScore();
  var rollButton1 = document.getElementById('roll-button-1');
  rollButton1.onclick = function(){
    var result1 = dicePlayer1.roll();
    $("#score-player-1").html(turnPlayer1.toString());
    $("#current-roll1").html(turnPlayer1.reduce(reducer));
  }
  var rollButton2 = document.getElementById('roll-button-2');
  rollButton2.onclick = function(){
    var result2 = dicePlayer2.roll();
    $("#score-player-2").html(turnPlayer2.toString());
    $("#current-roll2").html(turnPlayer2.reduce(reducer));
  }
  var holdButton1 = document.getElementById('hold-button-1');
  holdButton1.onclick = function(){
    var hold1 = holdPlayer1.hold();
    $("#total-player-1").html(totalPlayer1.pop());
    $("#score-player-1").html(turnPlayer1.length = 0);
    $("#current-roll1").html(turnPlayer1.length = 0);
  }
  var holdButton2 = document.getElementById('hold-button-2');
  holdButton2.onclick = function(){
    var hold2 = holdPlayer2.hold();
    $("#total-player-2").html(totalPlayer2.pop());
    $("#score-player-1").html(turnPlayer2.length = 0);
    $("#current-roll1").html(turnPlayer2.length = 0);

    // scorePlayer2 = [];
    // scorePlayer2.push(0) + totalPlayer2;

  }
});
