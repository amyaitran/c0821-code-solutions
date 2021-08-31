/* exported isVowel */

// check if the character is equal to each uppercase vowel
// check if the character is equal to each lowercase vowel
// if the character is a vowel, then return true
// otherwise, return false

function isVowel(character) {
  if (character === 'A' ||
  character === 'E' ||
  character === 'I' ||
  character === 'O' ||
  character === 'U' ||
  character === 'a' ||
  character === 'e' ||
  character === 'i' ||
  character === 'o' ||
  character === 'u') {
    return true;
  } else {
    return false;
  }
}
