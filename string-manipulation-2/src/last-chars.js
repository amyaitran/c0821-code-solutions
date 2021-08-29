/* exported lastChars */

// create a storage for the output.
// calculate and store the value of the position where the character's position is greater than the specified length from the last character of the string.
// if the specified length is larger than that of the string, then set the starting position to the first character.
// look at each character of the string, starting from the calculated position value.
// add that character into the output.
// return the output.

function lastChars(length, string) {
  var output = '';
  var starting = string.length - length;
  if (length > string.length) {
    starting = 0;
  }
  for (var i = starting; i < string.length; i++) {
    output += string[i];
  }
  return output;
}
