/* exported compact */

// create a storage for the output.
// look at each element in the array.
// if the element has a "truthy" value,
// then add it into the output.
// return output

function compact(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      output.push(array[i]);
    }
  }
  return output;
}
