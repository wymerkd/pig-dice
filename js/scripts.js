// business logic
var sentenceLatin =[]


function looper(sentence) {
 var wordSplit = analyzer(sentence);
 wordSplit.forEach(function(word) {
   var test = pigLatinized(word);
   sentenceLatin.push(test);
 });
 return sentenceLatin;
}

function analyzer(sentence) {
  var wordSplit = sentence.split(" ");
  return wordSplit
}



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

var sentence = $("input#entry").val();
var result = looper(sentence);
   $(".outcome").text(result);
});
});
