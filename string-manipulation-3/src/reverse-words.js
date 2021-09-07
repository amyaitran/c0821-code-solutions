/* exported reverseWords */

// -create a storage for the individual words of "string".
// -create a storage for the output.
// -look at each word.
//   -for each word, look at each letter, starting from the end and looking backwards.
//     -add these letters into the output.
//   -if the current word is not the last word,
//     -then add a space after we finish adding the letters of the word to the output.
// return the output.

function reverseWords(string) {
  var words = string.split(' ');
  var output = '';
  for (var i = 0; i < words.length; i++) {
    for (var j = words[i].length - 1; j > -1; j--) {
      output += words[i][j];
    }
    if (i !== words.length - 1) {
      output += ' ';
    }
  }
  return output;
}
