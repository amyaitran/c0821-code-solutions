/* exported defaults */

// look at all the traits in the source.
//   if the target doesn't already have the source trait,
//   then add the source trait to the target and assign the value from the source trait to it.

function defaults(target, source) {
  for (var traits in source) {
    if (target[traits] === undefined) {
      target[traits] = source[traits];
    }
  }
}
