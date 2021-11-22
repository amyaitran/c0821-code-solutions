/* exported getLength */

function getLength(list) {
  if (!list.next) return 1;
  let count = 0;
  while (list) {
    list = list.next;
    count++;
  }
  return count;
}
