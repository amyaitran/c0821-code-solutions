/* exported zip */

// -create a storage for the output.
// -create a storage for a subarray.
// -look at each element of the array that has the shorter number of elements.
//   -into the subarray, add the current element of the first array, as well as the current element of the second array.
//   -add the filled subarray into the output.
//   -empty out the subarray for the next elements.
// return the output.

function zip(first, second) {
  var output = [];
  var subarray = [];
  for (var i = 0; i < Math.min(first.length, second.length); i++) {
    subarray.push(first[i], second[i]);
    output.push(subarray);
    subarray = [];
  }
  return output;
}
