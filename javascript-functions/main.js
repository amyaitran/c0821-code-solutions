function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

convertMinutesToSeconds(5);
console.log('output of function convertMinutesToSeconds:', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}

greet('Beavis');
console.log('output of function greet:', greet('Beavis'));

function getArea(width, height) {
  return width * height;
}

getArea(17, 42);
console.log('output of function getArea:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
getFirstName(
  {
    firstName: 'Lelouche',
    lastName: 'Lamperouge'
  }
);
console.log('output of function getFirstName:',
  getFirstName(
    {
      firstName: 'Lelouche',
      lastName: 'Lamperouge'
    }
  ));

function getLastElement(array) {
  return array[array.length - 1];
}
getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('output of function getLastElement:', getLastElement(['propane', 'and', 'propane', 'accessories']));
