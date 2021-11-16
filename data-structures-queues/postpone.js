/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() === 'undefined') return;
  const first = queue.dequeue();
  queue.enqueue(first);
}
