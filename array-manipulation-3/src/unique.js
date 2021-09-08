/* exported unique */

// -create a storage for the output.
// -look at each element of the array.
//   -if the current element of the array is not already in the output,
//     -then add the current element of the array into the output.
// return the output.

function unique(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (output.indexOf(array[i]) < 0) {
      output.push(array[i]);
    }
  }
  return output;
}
