/* exported includes */

// create a storage for the output that contains the default value of "false".
// look at all the elements of the array.
// if the element matches the specified value,
// then change the output to "true".
// otherwise, return the output.

function includes(array, value) {
  var output = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      output = true;
    }
  }
  return output;
}
