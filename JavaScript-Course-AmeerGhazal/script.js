'use strict';

// Lesson 214: Setters & Getters

class PersonC1 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property.
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Setting a property that already exits
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonC1('Jessica Davis', 1996);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ == PersonC1.prototype);

const walter = new PersonC1('Walter', 1956);

const account = {
  owwner: 'Jonas',
  movements: [200, 5340, 30, 30, 400],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // uses the getter.
account.latest = 50; // sets / adds the last element
console.log(account.movements);
