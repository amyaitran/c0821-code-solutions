/* exported getLastChar */

// create storage for output
// look at each character of the string
// if the character is the last character of the string
// then assign the character to the output
// return string

function getLastChar(string) {
  var res = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[string.length - 1]) {
      res = string[i];
    }
  }
  return res;
}
