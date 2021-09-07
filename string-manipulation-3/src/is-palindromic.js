/* exported isPalindromic */

// -create a storage for a copy of "string", in which the spaces are removed and only letters remain.
// -create a storage where we will add "string" in reverse.

// -look at all the characters of "string", starting from the end and looking backwards.
//   -add each character into our storage for the reversed string.

// return the value of the statement as to whether the characters of the string without spaces is the same as its reversed version.

function isPalindromic(string) {
  var forwards = string.split(' ').join('');
  var backwards = '';

  for (var i = forwards.length - 1; i > -1; i--) {
    backwards += forwards[i];
  }

  return backwards === forwards;
}
