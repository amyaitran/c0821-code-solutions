/* exported isAnagram */

// -create a storage for a copy of the first string, in which the spaces are removed and only letters remain.
// -create a storage for a copy of the second string, in which the spaces are removed and only letters remain.
// -create a storage to keep track of the letters in the given strings.

// -look at each character in the first string.
//   -if the current character doesn't already exist in our count,
//     -then instantiate the character in the count with a count of 1.
//   -otherwise, if the current character already exists in the count,
//     -then increment the count for that character by 1.

// -look at each character in the second string.
//   -if the current character does not exist in the count,
//     -then return false.
//   -otherwise, if the character exists in the count,
//     -then decrement its count by 1.

// return true after we've finished running through all the characters of each string and confirmed that all characters are accounted for.

function isAnagram(firstString, secondString) {
  var firstStringChars = firstString.split(' ').join('');
  var secondStringChars = secondString.split(' ').join('');

  var count = {};

  for (var x = 0; x < firstStringChars.length; x++) {
    if (!count[firstStringChars[x]]) {
      count[firstStringChars[x]] = 1;
    } else {
      count[firstStringChars[x]]++;
    }
  }

  for (var y = 0; y < secondStringChars.length; y++) {
    if (!count[secondStringChars[y]]) {
      return false;
    } else {
      count[secondStringChars[y]]--;
    }
  }
  return true;
}
