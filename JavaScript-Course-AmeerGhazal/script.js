'use strict';

const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Section 11 Lesson 143: The new at method
const arr = [23, 11, 64];
console.log(arr[0]); // orginal way
console.log(arr.at(0)); // new way

console.log(arr[arr.length - 1]); // gets the last element
console.log(arr.slice(-1)[0]); // diff. gets the last element

console.log(arr.at(-1)); // new version that starts counting at the end of the array.

console.log('jonas'.at(0)); // also works on strings.
