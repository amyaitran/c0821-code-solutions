/* exported isUpperCased */

// create storage for the uppercase word
// look at each character of the word
// covert each character into uppercase and add it into the storage for uppercase word
// compare the uppercase word with the original word
// if it matches, return true.
// if not, return false

function isUpperCased(word) {
  var uppercasedWord = '';
  for (var i = 0; i < word.length; i++) {
    uppercasedWord += word[i].toUpperCase();
  }
  if (word === uppercasedWord) {
    return true;
  } else {
    return false;
  }
}
