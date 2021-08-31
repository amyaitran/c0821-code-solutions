/* exported getValues */

// create a storage for the output.
// look at all the traits of the object.
// look at the values of those traits and add them into the output.
// return the output.

function getValues(object) {
  var output = [];
  for (var trait in object) {
    output.push(object[trait]);
  }
  return output;
}
