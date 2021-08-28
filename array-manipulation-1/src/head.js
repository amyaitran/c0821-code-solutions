/* exported head */

// look at each element of the array.
// if it's the first element of the array,
// then return that element

function head(array) {
  for (var i = 0; i < array.length; i++) {
    if (i === 0) {
      return array[i];
    }
  }
}
