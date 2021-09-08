/* exported invert */

// create a storage for the output.
// look at all the properties in "source".
// set the value of each of "source's" properties as a property of the output, and set the value as the source property.
// return the output.

function invert(source) {
  var output = {};
  for (var props in source) {
    output[source[props]] = props;
  }
  return output;
}
