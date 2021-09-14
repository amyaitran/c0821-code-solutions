/* exported equal */

// -check whether the first string has a different number of elements as the second string.
//   -if so, then exit the function and return false.
// -look at each elements of the first string.
//   -if the element at the current position is not the same as the element from the second string at the same position,
//     -then exit the function and return false.
// return true after all elements are examined.

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
