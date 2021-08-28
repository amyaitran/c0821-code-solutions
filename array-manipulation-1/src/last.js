/* exported last */

// look at each element of the array.
// if it's the last element of the array,
// then return that element

function last(array) {
  for (var i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      return array[i];
    }
  }
}
