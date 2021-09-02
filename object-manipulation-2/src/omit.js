/* exported omit */

// create a storage for the output that holds a copy of the source object.
// look at all the keys.
// if the key exists as a trait in the source copy,
// then delete that key from the source copy.
// return the output.

function omit(source, keys) {
  var output = { ...source };
  for (var i = 0; i < keys.length; i++) {
    if (output[keys[i]] !== undefined) {
      delete output[keys[i]];
    }
  }
  return output;
}
