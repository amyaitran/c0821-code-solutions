/* exported getValue */

// look at the listed traits of the object, and the values of those traits.
// if the trait that we're looking at is the same as the key we're looking for,
// then return the value of that trait.

function getValue(object, key) {
  for (var trait in object) {
    if (trait === key) {
      return object[trait];
    }
  }
}
