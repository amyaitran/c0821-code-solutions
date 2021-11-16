/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let first = queue.dequeue();
  while (first > queue.peek()) {
    queue.enqueue(first);
    first = queue.dequeue();
  }
  return first;
}
