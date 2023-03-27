'use strict';

// Lesson 213: ES6 Classes

class PersonC1 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property.
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonC1(firstName, birthYear);
jessica.calcAge();
console.log(jessica.__proto__ == PersonC1.prototype);

// This is the same as above.
// PersonC1.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// }

// 1. Classes are not hoisted. We cannot use them before they are decleared.
// 2. Classes are first-class citizens.
// 3. Classes are executed in strict mode.
