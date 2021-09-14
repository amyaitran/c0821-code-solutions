/* exported intersection */

// -look at each element of the first array.
//   -if the current element of the first array is found in the second array,
//     -then add the current element of the first array into the output.
// return the output.

function intersection(first, second) {
  var output = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) > -1) {
      output.push(first[i]);
    }
  }
  return output;
}
