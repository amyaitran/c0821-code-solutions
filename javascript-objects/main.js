var student = {
  firstName: 'Amy',
  lastName: 'Tran',
  age: 24
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'server';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: '2006'
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;

console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Catticus',
  type: 'kitty cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
