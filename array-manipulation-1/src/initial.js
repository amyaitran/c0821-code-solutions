/* exported initial */

// create a storage for a new array output.
// look at each element of the array, stopping before the last element of the array.
// add those elements into the new output.
// return the output.

function initial(array) {
  var output = [];
  for (var i = 0; i < array.length - 1; i++) {
    output.push(array[i]);
  }
  return output;
}
