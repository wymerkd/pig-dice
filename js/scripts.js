// function TotalScore (rollScore) {
//   this.rollScore = [],
//   console.log(rollScore)
// }

var scorePlayer1 = [];
var scorePlayer2 = [];
var totalPlayer1 = [];
var totalPlayer2= [];


var dicePlayer1 = {
  roll: function() {
    var randomNumber =
    Math.floor(Math.random() * 6) + 1;
    if (randomNumber === 1) {
      return scorePlayer1 = [];
    } else {
    scorePlayer1.push(randomNumber)}
    console.log(scorePlayer1)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

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
    if (randomNumber === 1) {
      return scorePlayer2 = [];
    } else {
    scorePlayer2.push(randomNumber)}
    console.log(scorePlayer2)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    holdPlayer2 = {
      hold: function () {
        var newReducer2 = scorePlayer2.reduce(reducer);
        totalPlayer2.push(newReducer2);
        console.log(newReducer2);
        console.log(totalPlayer2);
      }
    }
  }
};

// "Sorry, your turn is over and you add 0 to your score"


$(document).ready(function() {
  // var totalScore = new TotalScore();
  var rollButton1 = document.getElementById('roll-button-1');
  rollButton1.onclick = function(){
    var result1 = dicePlayer1.roll();
    $("#current-roll").html(result1);
  }
  var rollButton2 = document.getElementById('roll-button-2');
  rollButton2.onclick = function(){
    var result2 = dicePlayer2.roll();
    $("#current-roll").html(result2);
  }
  var holdButton1 = document.getElementById('hold-button-1');
  holdButton1.onclick = function(){
    var hold1 = holdPlayer1.hold();
    $("#player1-score").html(hold1);
  }
  var holdButton2 = document.getElementById('hold-button-2');
  holdButton2.onclick = function(){
    var hold2 = holdPlayer2.hold();
    $("#player2-score").html(hold2);
  }
});
