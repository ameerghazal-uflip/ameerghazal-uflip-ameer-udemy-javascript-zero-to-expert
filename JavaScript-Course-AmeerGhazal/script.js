'use strict';
// Lesson 220: Inheritance Between "Classes": ES6 Classes (2)

// ES6 function
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

class StudentCl extends PersonC1 {
  constructor(fullName, birthYear, course) {
    // endless possibilities
    // Needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName}, and I study ${this.course}.`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }!`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'CS');
martha.introduce();
martha.calcAge();
// const martha1 = new StudentCl('Martha Jones', 2012);
