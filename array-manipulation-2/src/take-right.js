/* exported takeRight */

// create a storage for the output.
// check if the array is empty: in the case that it contains no elements,
// then return an empty array.
// look at the elements of the array, starting at the position that is "count" amount away from the last element.
// add those elements to the output.
// return the output.

function takeRight(array, count) {
  var output = [];
  if (array.length === 0) {
    return [];
  }
  for (var i = array.length - count; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
