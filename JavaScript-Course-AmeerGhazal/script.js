'use strict';

// Lesson 211: Prototypal Inheritance on Built-In Objects

const Person = function (firstName, birthYear) {
  // Instance Properties: they will be avaliable for all
  this.firstName = firstName;
  this.birthYear = birthYear;

  // This is a bad practice:
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
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

// Lesson 209: Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// --------------

console.log(jonas.__proto__.__proto__); // Object prototype.
console.log(jonas.__proto__.__proto__.__proto__); // null since Object is at the top of the prototype chain

console.dir(Person.prototype.constructor);

const arr = [3, 6, 0, 1, 2, 6]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ == Array.prototype);
console.log(arr.__proto__.__proto__); // oject

// not a good practice, but it is fire for personal small projects.
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1); // goes many levels deep

console.dir(x => x + 1);
