'use strict';

// Section 8 Lesson 99
/*

let age = 30;
let oldAge = age;
age = 31;

console.log(age, oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me; // it is given the same reference, so it changes everything. In the stack, it points to the same address in the heap, meaning it changes everything at the address.
friend.age = 27;

console.log('Friend: ', friend);
console.log('Me: ', me);

*/

// Section 8 Lesson 100

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica; // all this does is copy the reference and changes all the data.
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John'); // attempeting to manipulate an object within an object.
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
