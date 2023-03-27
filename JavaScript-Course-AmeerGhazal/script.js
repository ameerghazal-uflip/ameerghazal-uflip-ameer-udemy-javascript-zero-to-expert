'use strict';

// Lesson 218: Inheritance Between "Classes": Constructor Functions (1)

// Constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// Linking Prototypes
Student.prototype = Object.create(Person.prototype); // this connects the student class with the person class.

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}, and I study ${this.course}.`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
