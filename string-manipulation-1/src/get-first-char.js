/* exported getFirstChar */

// create storage for output
// look at each character of the string
// if the character is the first character of the string
// then assign the character to the output
// return string

function getFirstChar(string) {
  var res = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[0]) {
      res = string[i];
    }
  }
  return res;
}
