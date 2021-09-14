/* exported difference */

// -create a storage for the output.
// -look at each element of the first array.
//   -if the current element of the first array is not found in the second array,
//     -then add the current element of the first array into the output.
// -look at each element of the second array.
//   -if the current element of the second array is not found in the first array,
//     -then add the current element of the second array into the output.
// return the output.

function difference(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) < 0) {
      output.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) < 0) {
      output.push(second[j]);
    }
  }
  return output;
}
