/* exported setValue */

// if the trait "key" is not a part of the object,
// then add the name of the trait into the object
// & assign the value of that trait to the object

function setValue(object, key, value) {
  if (object.key === undefined) {
    object[key] = value;
  }
}
