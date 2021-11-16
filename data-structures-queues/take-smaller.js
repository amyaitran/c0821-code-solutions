/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.dequeue();
  if (typeof queue.peek() === 'undefined') return first;
  const second = queue.peek();
  const bigger = Math.max(first, second);
  if (bigger === second) {
    queue.dequeue();
    queue.enqueue(second);
    return first;
  } else {
    queue.enqueue(first);
    queue.dequeue();
    return second;
  }
}
