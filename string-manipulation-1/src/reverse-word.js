/* exported reverseWord */

// create storage for the output.
// look at each character of the word, starting from the end and stopping at the beginning.
// add the value of each character into the output
// return the output

function reverseWord(word) {
  var res = '';
  for (var i = word.length - 1; i >= 0; i--) {
    res += word[i];
  }
  return res;
}
