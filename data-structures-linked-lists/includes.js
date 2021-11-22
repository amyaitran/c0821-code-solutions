/* exported includes */

function includes(list, value) {
  while (list) {
    if (value === list.data) {
      return true;
    }
    list = list.next;
  }
  return false;
}
