/* exported tail */

// create a storage for a new array output.
// look at each element of the array, starting with the first element of the array.
// add those elements into the output.
// return the output.

function tail(array) {
  var output = [];
  for (var i = 1; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
