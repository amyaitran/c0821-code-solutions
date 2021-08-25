var x = 2;
var y = 5;
var z = 17;

var maximumValue = Math.max(x, y, z);
console.log('result of maximumValue:', maximumValue);

var heroes = ['Skitter', 'Batman', 'Iron Man', 'Spider-Man'];

var randomNumber = Math.random();
randomNumber = Math.random() * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library =
  [
    {
      title: 'Dune',
      author: 'Frank Herbert'
    },
    {
      title: 'The Little Prince',
      author: 'Antoine de Saint-Exupery'
    },
    {
      title: 'Jane Eyre',
      author: 'Charlotte Bronte'
    }
  ];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library:', library);

var fullName = 'Amy Tran';

var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
