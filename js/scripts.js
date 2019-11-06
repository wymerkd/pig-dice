// function TotalScore (rollScore) {
//   this.rollScore = [],
//   console.log(rollScore)
// }

var scorePlayer1 = [];
var scorePlayer2 = [];
var totalPlayer1 = [];
var totalPlayer2= [];

const reducer = (accumulator, currentValue) => accumulator + currentValue

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
    $("#score-player-1").html(scorePlayer1);
    $("#current-roll1").html(scorePlayer1.reduce(reducer));
  }
  var rollButton2 = document.getElementById('roll-button-2');
  rollButton2.onclick = function(){
    var result2 = dicePlayer2.roll();
    $("#score-player-2").html(scorePlayer2);
    $("#current-roll2").html(scorePlayer2.reduce(reducer));
  }
  var holdButton1 = document.getElementById('hold-button-1');
  holdButton1.onclick = function(){
    var hold1 = holdPlayer1.hold();
    $("#total-player-1").html(totalPlayer1.pop());
  }
  var holdButton2 = document.getElementById('hold-button-2');
  holdButton2.onclick = function(){
    var hold2 = holdPlayer2.hold();

    $("#total-player-2").html(totalPlayer2.pop());
  }
});
