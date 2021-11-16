/* exported getFront */

function getFront(queue) {
  if (typeof queue === 'undefined') return;
  return queue.peek();
}
