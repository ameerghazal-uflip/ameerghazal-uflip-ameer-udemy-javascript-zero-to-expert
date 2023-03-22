'use strict';

// Lesson 208: Constructor functions and the new operator

const Person = function (firstName, birthYear) {
  // Instance Properties: they will be avaliable for all
  this.firstName = firstName;
  this.birthYear = birthYear;

  // This is a bad practice:
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const jonas = new Person('Jonas', '1991');
console.log(jonas);

// 1. New {} empty object is created.
// 2. function is called, this = {}. this keyword points to the newly object
// 3. {} linked to prototype.
// 4. function automatically returns the object {}

const matilda = new Person('Matil', '2018');
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);
