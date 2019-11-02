// business logic

var fakeWord = "e";

var pigLatinized = function latinizer(word) {
 if (word.length ===1) {
   return latinizerOne(word)
 }
else
if (word.match(/^[aeiou]/)){
  return vowelFirst(word)
}

else {
  return everythingElse(word)}
};




function latinizerOne(word) {
  var newWord = word + "way"
  return newWord
};

function vowelFirst(word) {
  var newWord = word + "way"
  return newWord
};
function everythingElse(word) {
  return "potato"
}



// user logic
$(document).ready(function() {
  $("form#user").submit(function(event) {
    event.preventDefault();

var word = $("input#entry").val();
var result = pigLatinized(word);
   $(".outcome").text(result);
});
});
