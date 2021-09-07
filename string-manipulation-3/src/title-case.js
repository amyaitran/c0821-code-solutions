/* exported titleCase */

// -create a copy of the "title" string in which all characters are lowercase, called lowerCased.
// -split the string into its individual words.

// -look at each word of the string.
//   -if the word is not an article, then capitalize the first letter of the word.

// -capitalize the first letter of the entire string.

// -create a copy of lowerCased in which the individual words are joined together as one string, called wordsJoined.
// -create a storage called wordsSpecialCases, in which we will handle special cases such as 'JavaScript' and 'API'.

// -look at each character of the single string wordsJoined.
//   -if there is a sequence in the string that matches 'Api',
//     -then add 'API' into wordsSpecialCases,
//     -and increment the current character by the length of 'Api', which is 3.
//   -if there is a sequence in the string that matches 'Javascript',
//     -then add 'JavaScript' into wordsSpecialCases,
//     -and increment the current character by the length of 'Javascript', which is 9.
//   -otherwise, simply add the current character into wordsSpecialCases.

// -create a storage called wordsSplitted, in which wordsSpecialCases is split into its individual characters.
// -create a storage called output, in which we will make our finishing edits and store our final output.

// -look at each character of wordsSplitted.
//   -if there is a colon(:) that is two characters behind the current character, or if there is a hyphen(-) that is one character behind the current character,
//     -then uppercase the current character and add it into the output.
//   -otherwise, add the current character as it is into the output.

// return the output.

function titleCase(title) {
  var lowerCased = title.toLowerCase();
  var words = lowerCased.split(' ');

  for (var i = 0; i < words.length; i++) {
    if (
      words[i] !== 'in' &&
      words[i] !== 'for' &&
      words[i] !== 'of' &&
      words[i] !== 'the' &&
      words[i] !== 'to' &&
      words[i] !== 'an') {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
  }

  words[0] = words[0][0].toUpperCase() + words[0].substring(1);

  var wordsJoined = words.join(' ');
  var wordsSpecialCases = '';

  for (var x = 0; x < wordsJoined.length; x++) {
    if (x === wordsJoined.indexOf('Api')) {
      wordsSpecialCases += 'API';
      x += 3;
    } else if (x === wordsJoined.indexOf('Javascript')) {
      wordsSpecialCases += 'JavaScript';
      x += 9;
    } else { wordsSpecialCases += wordsJoined[x]; }
  }

  var wordsSplitted = wordsSpecialCases.split('');
  var output = '';

  for (var y = 0; y < wordsSplitted.length; y++) {
    if (wordsSplitted[y - 2] === ':' || wordsSplitted[y - 1] === '-') {
      output += wordsSplitted[y].toUpperCase();
    } else { output += wordsSplitted[y]; }
  }

  return output;
}
