/* exported take */

// create a storage for the output.
// check if the array is empty: in the case that it contains no elements,
// then return an empty array.
// look at the elements of the array up to the specified count.
// add those elements to the output.
// return the output.

function take(array, count) {
  var output = [];
  if (array.length === 0) {
    return [];
  }
  for (var i = 0; i < count; i++) {
    output.push(array[i]);
  }
  return output;
}
