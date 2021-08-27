/* exported countdown */
function countdown(number) {
  var arr = [];
  for (var i = number; i >= 0; i--) {
    arr.push(i);
  }
  return arr;
}
