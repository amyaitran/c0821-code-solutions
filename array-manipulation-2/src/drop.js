/* exported drop */

// create a storage for the output.
// look at the elements of the array, starting from the specified count.
// add those elements into the output.
// return the output.

function drop(array, count) {
  var output = [];
  for (var i = count; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
