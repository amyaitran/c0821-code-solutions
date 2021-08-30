/* exported capitalize */

// create variable for output in which the first character is the first letter of "word" as an uppercase
// look at each character of the word
// set the character to lower case and add it to the output
// return output

function capitalize(word) {
  var res = word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    res += word[i].toLowerCase();
  }
  return res;
}
