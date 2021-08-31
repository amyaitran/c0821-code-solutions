/* exported ransomCase */

/* exported capitalizeWord */

// create a copy of the string where all letters are lowercased.
// create a copy of the string where all letters are uppercased.
// create a storage for the output.
// look at all the characters of the string.
// if the character is at an odd-numbered position (1st, 3rd, 5th...)
// then add a character at that position from the lowercased copy to the output.
// otherwise, if the character is at an even-numbered position (2nd, 4th, 6th...)
// then add a character at that position from the uppercased copy to the output.
// return the output.

function ransomCase(string) {
  var lowerCased = string.toLowerCase();
  var upperCased = string.toUpperCase();
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      output += lowerCased[i];
    } else {
      output += upperCased[i];
    }
  }
  return output;
}
