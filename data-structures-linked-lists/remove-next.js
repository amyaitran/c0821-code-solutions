/* exported removeNext */

function removeNext(list) {
  if (!list.next) return;
  const nextNext = list.next.next;
  list.next = nextNext;

}
