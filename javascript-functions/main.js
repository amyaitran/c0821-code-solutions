function convertMinutesToSeconds(minutes) {
  console.log('output of function convertMinutesToSeconds:', minutes * 60);
}
convertMinutesToSeconds(5);

function greet(name) {
  console.log('output of function greet:', 'Hey, ' + name);
}
greet('Beavis');

function getArea(width, height) {
  console.log('output of function getArea:', width * height);
}
getArea(17, 42);

function getFirstName(person) {
  console.log('output of function getFirstName:', person.firstName);
}
getFirstName(
  {
    firstName: 'Lelouche',
    lastName: 'Lamperouge'
  }
);

function getLastElement(array) {
  console.log('output of function getLastElement:', array[array.length - 1]);
}
getLastElement(['propane', 'and', 'propane', 'accessories']);
