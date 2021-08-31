/* exported getKeys */

// create a storage for the output.
// look at all the traits of the object.
// add the traits into the output.
// return the output.

function getKeys(object) {
  var output = [];
  for (var trait in object) {
    output.push(trait);
  }
  return output;
}
