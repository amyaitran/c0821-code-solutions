/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const output = new LinkedList(value);
  output.next = list;
  return output;
}
