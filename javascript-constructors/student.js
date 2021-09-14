/* exported Student */

function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
  this.getFullName = function () {
    return (firstName + ' ' + lastName);
  };
  this.getIntroduction = function () {
    return ('Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.');
  };
}

Student.prototype.getFullName = function () {
  return (this.firstName + ' ' + this.lastName);
};
Student.prototype.getIntroduction = function () {
  return ('Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.');
};
