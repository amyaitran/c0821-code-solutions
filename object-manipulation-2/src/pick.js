/* exported pick */

// create a storage for the output.
// look at all the keys that need to be entered into the output.
// if the keys-to-be-entered are listed in the source,
// then add those keys to the output and assign to them their values as well.
// return the output.

function pick(source, keys) {
  var output = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      output[keys[i]] = source[keys[i]];
    }
  }
  return output;
}
