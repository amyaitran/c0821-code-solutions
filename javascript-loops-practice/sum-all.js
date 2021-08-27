/* exported sumAll */
function sumAll(numbers) {
  var res = 0;
  for (var i = 0; i < numbers.length; i++) {
    res += numbers[i];
  }
  return res;
}
