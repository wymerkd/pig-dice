// function TotalScore (rollScore) {
//   this.rollScore = [],
//   console.log(rollScore)
// }

var scorePlayer1 = [];
var scorePlayer2 = [];


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
    console.log(scorePlayer1.reduce(reducer));
  }
};
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
    console.log(scorePlayer2.reduce(reducer));
  }
};

// "Sorry, your turn is over and you add 0 to your score"


$(document).ready(function() {
  // var totalScore = new TotalScore();
  var rollButton1 = document.getElementById('roll-button-1');
  rollButton1.onclick = function(){
    var result = dicePlayer1.roll();
    $("#current-roll").html(result);
  }
  var rollButton2 = document.getElementById('roll-button-2');
  rollButton2.onclick = function(){
    var result = dicePlayer2.roll();
    $("#current-roll").html(result);
  }
});
