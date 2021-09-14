/* exported union */

// -create a storage for the output.
// -look at each element of the first array.
//   -if the current element of the first array is found neither in the output nor the second array,
//     -then add the current element of the first array into the output.
// -look at each element of the second array.
//   -if the current element of the second array is not found in the first array,
//     -then add the current element of the second array into the output.
// return the output.

function union(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    if (output.indexOf(first[i]) < 0 || second.indexOf(first[i]) < 0) {
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
