/* exported getTail */

function getTail(list) {
  let output;
  while (list) {
    output = list.data;
    list = list.next;
  }
  return output;
}
