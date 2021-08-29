/* exported capitalizeWords */

// create a storage for the output
// create a copy of the string, where all letters are in lowercase.
// create a copy of the string, where all letters are in uppercase.
// look at each character of the string.
// if we're looking at the first letter,
// then add it as an uppercased letter to the output.
// otherwise, if there is a space before the character,
// then add an uppercased letter to the output.
// otherwise, add a lowercased letter to the output.
// return the output.

function capitalizeWords(string) {
  var output = '';
  var lowerCased = string.toLowerCase();
  var upperCased = string.toUpperCase();
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      output = upperCased[i];
    } else if (string[i - 1] === ' ') {
      output += upperCased[i];
    } else {
      output += lowerCased[i];
    }
  }
  return output;
}
