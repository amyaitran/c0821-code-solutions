/* exported capitalize */

// create variable for output
// look at each character of the word
// if the character is the first letter of the word,
// then capitalize it and assign it to the output.
// if the character is not the first letter of the word,
// then set the character to lower case and add it to the output
// return output

function capitalize(word) {
  var res = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      res = word[i].toUpperCase();
    } else if (i !== 0) {
      res += word[i].toLowerCase();
    }
  }
  return res;
}
