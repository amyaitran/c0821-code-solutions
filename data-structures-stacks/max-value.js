/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    const poppedElement = stack.pop();
    max = Math.max(max, poppedElement);
  }
  return max;
}
