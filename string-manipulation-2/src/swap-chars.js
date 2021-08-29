/* exported swapChars */

// create a storage for the output.
// look at each character of the string.
// if the position of the character matches firstIndex, then add the character at position secondIndex to the output instead.
// similarly, if the position of the character matches secondIndex, then add the character at position firstIndex to the output instead.
// otherwise, add the character to the output.
// return the string.

function swapChars(firstIndex, secondIndex, string) {
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      output += string[secondIndex];
    } else if (i === secondIndex) {
      output += string[firstIndex];
    } else {
      output += string[i];
    }
  }
  return output;
}
