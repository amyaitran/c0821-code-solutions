/* exported invert */

// create a storage for the output.
// extract and create a storage for all the traits from the source.
// extract and create a separate storage for all the values from the source.
// for each trait and value from the source,
// assign the source value as the output trait, and the source trait as the output value.
// return the output.

function invert(source) {
  var output = {};
  var sourceKeys = Object.keys(source);
  var sourceValues = Object.values(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    output[sourceValues[i]] = sourceKeys[i];
  }
  return output;
}
