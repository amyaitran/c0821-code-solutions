/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
var shia = {
  name: 'Shia LeBouf',
  age: 34
};

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
isUnderFive(shia.age);

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
isEven(shia.age);

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
startsWithJ(shia.name);

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
isOldEnoughToDrink(shia);

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
isOldEnoughToDrink(shia);

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
isOldEnoughToDrinkAndDrive(shia);

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7) {
    return 'acid';
  } else if (pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
categorizeAcidity(8);

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
introduceWarnerBro('wakko');
