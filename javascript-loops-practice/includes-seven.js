/* exported includesSeven */
function includesSeven(array) {
  var res = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return res;
}
