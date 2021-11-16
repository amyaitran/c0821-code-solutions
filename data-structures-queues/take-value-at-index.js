/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  for (let i = 0; i < index; i++) {
    const first = queue.dequeue();
    queue.enqueue(first);
  }
  return queue.dequeue();
}
