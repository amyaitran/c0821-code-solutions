/* exported isLowerCased */

// create storage for the lowercase word.
// look at each character of the word.
// convert each character into lowercase and add it into the storage for lowercase word.
// compare the lowercase word with the original word.
// if it matches, return true.
// if not, return false

function isLowerCased(word) {
  var lowercasedWord = '';
  for (var i = 0; i < word.length; i++) {
    lowercasedWord += word[i].toLowerCase();
  }
  if (word === lowercasedWord) {
    return true;
  } else {
    return false;
  }
}
