'use strict';

// Lesson 215: Static Methods

class PersonC1 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property: Instance Methods.
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

  // Static Methods
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

PersonC1.hey();

const jessica = new PersonC1('Jessica Davis', 1996);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ == PersonC1.prototype);

//const walter = new PersonC1('Walter', 1956);
