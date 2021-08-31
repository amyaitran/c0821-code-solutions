/* exported dropRight */

// create a storage for the output.
// look at the elements of the array, up to "count" positions away from the last element.
// add those elements into the output.
// return the output.

function dropRight(array, count) {
  var output = [];
  for (var i = 0; i < array.length - count; i++) {
    output.push(array[i]);
  }
  return output;
}
