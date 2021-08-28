/* exported initial */

// create a storage for a new array output.
// look at each element of the array.
// if it's not the last element of the array,
// then add that element into the new output.
// return the output.

function initial(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      output.push(array[i]);
    }
  }
  return output;
}
