/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() !== undefined) {
    const firstElement = stack.pop();
    stack.push(value);
    return stack.push(firstElement);
  }
}
