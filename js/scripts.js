function TotalScore (rollScore) {
  this.rollScore = [],
  console.log(rollScore)
}

var score = [];


var dice = {
  roll: function() {
    var randomNumber =
    Math.floor(Math.random() * 6) + 1;
    if (randomNumber === 1) {
      return score = [];
    } else {
    score.push(randomNumber)}
    console.log(score)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(score.reduce(reducer));
  }
};

// "Sorry, your turn is over and you add 0 to your score"






// rollScore.push(result)






$(document).ready(function() {
  var totalScore = new TotalScore();
  var rollButton = document.getElementById('roll-button');
  rollButton.onclick = function(){
    var result = dice.roll();
    $("#current-roll").html(result);
  }
});
