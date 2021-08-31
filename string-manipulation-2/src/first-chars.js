/* exported firstChars */

// create a storage for the output.
// look at each character of the string.
// if we're looking at a character whose position is less than the specified length,
// then add that character to the output.
// return the output.

function firstChars(length, string) {
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i < length) {
      output += string[i];
    }
  }
  return output;
}
