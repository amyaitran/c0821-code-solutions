/* exported capitalizeWord */

// create a storage for the word in lowercase so that we only have to deal with one type of lettercasing.
// create a special case if the word happens to be "javascript":
// if so, then return "JavaScript".
// create a storage containing only the first letter of the word.
// capitalize that letter.
// to populate the rest of our output, look at characters from the lowercased word from the second letter on.
// add these letters to our output.
// return the output.

function capitalizeWord(word) {
  var lowercased = word.toLowerCase();
  if (lowercased === 'javascript') {
    return 'JavaScript';
  }
  var uppercasedLetter = lowercased.charAt(0);
  var output = uppercasedLetter.toUpperCase();
  for (var i = 1; i < word.length; i++) {
    output += lowercased[i];
  }
  return output;
}

// alternatively,

// function capitalizeWord(word) {
//   var lowercased = word.toLowerCase();
//   if (lowercased === 'javascript') {
//     return 'JavaScript';
//   }
//   return lowercased.charAt(0).toUpperCase() + lowercased.slice(1);
// }
