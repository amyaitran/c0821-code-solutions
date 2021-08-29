/* exported chunk */

// create a storage for the output.
// create a storage for a sub-array.
// look at all the elements of the array.
// add the current element into the subarray.
// if the number of elements inside the sub-array is equivalent to the count,
// then the sub-array is full. add the sub-array to the output,
// and clear the sub-array.
// if the current element is the last element of the array,
// then add the sub-array to the output.
// return the output.

function chunk(array, size) {
  var output = [];
  var subarray = [];
  for (var i = 0; i < array.length; i++) {
    subarray.push(array[i]);
    if (subarray.length === size) {
      output.push(subarray);
      subarray = [];
    } else if (i === array.length - 1) {
      output.push(subarray);
    }
  }
  return output;
}
