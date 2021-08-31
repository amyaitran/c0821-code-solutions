/* exported truncate */

// create a storage for the output.
// if the string is empty,
// then return only the ellipses.
// look at the characters in the string.
// stop if the character that we're looking at is up to "length" amount, since we only need to pay attention to those.
// add those characters to the output.
// after we finish looking through the relevant characters, add an ellipses to the output.
// return the output.

function truncate(length, string) {
  var output = '';
  if (string === '') {
    return '...';
  }
  for (var i = 0; i < string.length; i++) {
    if (i < length) {
      output += string[i];
    }
  }
  output += '...';
  return output;
}
