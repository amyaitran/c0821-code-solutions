/* exported findIndex */
function findIndex(array, value) {
  var res = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      res = i;
      break;
    }
  }
  return res;
}
