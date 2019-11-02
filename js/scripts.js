// business logic

//this is the array where everything will go on the back end
var sentenceLatin =[]

//this is where highest level work gets done. The function looper is called by the user interface. Inside it, we have the ability to take individual words (from wordSplit, aka running .split on sentence), and push them into the final array.
function looper(sentence) {
 var wordSplit = analyzer(sentence);
 wordSplit.forEach(function(word) {
   var test = pigLatinized(word);
   sentenceLatin.push(test);
 });
 return sentenceLatin;
}

//this is where the user's sentence ends up getting the method .split so that within looper() we can treat each word separately.
function analyzer(sentence) {
  var wordSplit = sentence.split(" ");
  return wordSplit
}


//this is where we figure out what will happen to each word. it's not true pig Latin, but I could go and add that functionality within this structure
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



//these are the individual functions that get called within latinizer. They were written assuming that latinizer will sort out what goes where.
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
