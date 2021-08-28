/* exported reverse */

// create a storage for the output.
// look at all the elements in the array, starting from the last element.
// add each element into the output.
// return the output

function reverse(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}
