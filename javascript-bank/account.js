/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var newDeposit = new Transaction('deposit', amount);
  if (newDeposit.amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(newDeposit);
    return true;
  } else {
    return false;
  }
};
Account.prototype.withdraw = function (amount) {
  var newWithdrawal = new Transaction('withdrawal', amount);
  if (newWithdrawal.amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(newWithdrawal);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var deposits = 0;
  var withdrawals = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposits += this.transactions[i].amount;
    } else {
      withdrawals += this.transactions[i].amount;
    }
  }
  return deposits - withdrawals;
};
