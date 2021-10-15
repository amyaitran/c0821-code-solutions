const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

// sum
const sum = numbers.reduce((prevValue, currValue) => (prevValue + currValue));
console.log('sum of numbers:', sum);

// product
const product = numbers.reduce((prevValue, currValue) => (prevValue * currValue));
console.log('product of numbers:', product);

// balance
const accountDeposits = account.filter(transaction => transaction.type === 'deposit');
const accountWithdrawals = account.filter(transaction => transaction.type === 'withdrawal');

const sumDeposits = accountDeposits.reduce(
  (prevValue, currValue) => {
    return prevValue + currValue.amount;
  }, 0);
const sumWithdrawals = accountWithdrawals.reduce(
  (prevValue, currValue) => {
    return prevValue + currValue.amount;
  }, 0);

const balance = sumDeposits - sumWithdrawals;
console.log('balance of account:', balance);

// composite
const composite = traits.reduce((prevValue, currValue) => (Object.assign(currValue, prevValue)));
console.log('composite of traits:', composite);
