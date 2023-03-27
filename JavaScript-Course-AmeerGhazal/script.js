'use strict';

// Lesson 226: ES6 Class Summary

class Person {
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
} // Parent Class

class Student extends Person {
  // Child / Sub-class
  university = 'University of Houston'; // public field
  #studyHours = 0; // private field
  #course; // private & initialized later
  static numSubjects = 10; // static field

  // constrcutor
  constructor(fullName, birthYear, startYear, course) {
    super(fullName, birthYear); // calls the parent constructor
    this.startYear = startYear;
    this.#course = course;
  }

  // public methods
  introduce() {
    console.log(`I study ${this.#course} at ${this.university}`);
  }

  study(h) {
    this.#makeCoffee();
    this.#studyHours += h;
  }

  // private method
  #makeCoffee() {
    return `Here is a coffee for you!`;
  }

  // getters & setters
  get testScore() {
    return this._testScore; // protected field
  }

  set testScore(score) {
    this._testScore = score < 20 ? score : 0;
  }

  // static method
  static printCurriculum() {
    console.log(`There are ${this.numSubjects} subjects`);
  }
}

const student = new Student('Jonas', 2020, 2037, 'Medicine');
