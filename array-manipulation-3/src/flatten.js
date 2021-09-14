/* exported flatten */

// -create a storage for the output.
// -look at each element in the array.
//   -if the current element is not of type "array",
//     -then add the current element into the output.
//   -otherwise, if the current element is of type "array",
//     -then look at each element of that array-type element.
//       -add each element of the array-type element into the output.
// return the output.

function flatten(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      output.push(array[i]);
    } else {
      for (var x = 0; x < array[i].length; x++) {
        output.push(array[i][x]);
      }
    }
  }
  return output;
}
