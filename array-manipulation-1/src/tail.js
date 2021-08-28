/* exported tail */

// create a storage for a new array output.
// look at each element of the array.
// if we're not looking at the first element of the array,
// then add that element into the new output.
// return the output.

function tail(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== 0) {
      output.push(array[i]);
    }
  }
  return output;
}
