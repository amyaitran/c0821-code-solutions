/* exported numVowels */

// create a storage for the output.
// make a copy of the string in which all letters are capitalized so that we only have to handle one set of letter typing.
// look at each character of the string.
// if the character is a vowel,
// then increment the output by 1.
// return the output.

function numVowels(string) {
  var output = 0;
  var upperCased = string.toUpperCase();
  for (var i = 0; i < string.length; i++) {
    if (upperCased[i] === 'A' ||
    upperCased[i] === 'E' ||
    upperCased[i] === 'I' ||
    upperCased[i] === 'O' ||
    upperCased[i] === 'U') {
      output++;
    }
  }
  return output;
}
