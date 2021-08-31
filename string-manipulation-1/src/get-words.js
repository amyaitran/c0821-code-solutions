/* exported getWords */

// create storage for the output
// create storage for characters in current word
// if the string does not contain anything,
//  then return an empty output.
// look at each character in the string.
//  if there is a space,
//    then add the current word into the output.
//    clear the storage for the current word.
//  otherwise,
//  add the current character into the storage for current word.
// add the last value of current word into the output.
// return the output

function getWords(string) {
  var arr = [];
  var currentWord = '';
  if (string === '') {
    return [];
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      arr.push(currentWord);
      currentWord = '';
    } else {
      currentWord += string[i];
    }
  }
  arr.push(currentWord);
  return arr;
}
