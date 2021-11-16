/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const firstElement = stack.pop();
  let secondElement;
  if (firstElement === undefined) {
    return undefined;
  } else {
    secondElement = stack.peek();
    stack.push(firstElement);
    return secondElement;
  }
}
