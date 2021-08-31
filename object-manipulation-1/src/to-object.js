/* exported toObject */

// create a storage for the output.
// assign the value of the first element of our key-value pair as the "key".
// assign the value of the second element of our key-value pair as the "value".
// to the output, add the "key" from our key-value pair and assign to it the "value" from our key-value pair.
// return the output.

function toObject(keyValuePair) {
  var output = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  output[key] = value;
  return output;
}
