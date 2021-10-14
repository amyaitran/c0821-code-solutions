const takeAChance = require('./take-a-chance');

const returnedPromise = takeAChance('Amy');

returnedPromise.then(value => {
  console.log(value);
}).catch(error => {
  console.log(error.message);
});
