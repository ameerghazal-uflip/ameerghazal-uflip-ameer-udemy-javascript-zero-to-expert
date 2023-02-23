'use strict';

// Section 11 Lesson 142 Simple Array Methods

const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//////////

// Slice array method
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); // returns a copy
console.log(arr.slice(2, 4)); // 4 is exclusive, similar to strings
console.log(arr.slice(-1)); // starts from the last index.
console.log(arr.slice(1, -2)); // does not include 1, or the last 2 elements, it is only from the middle: [b, c]
console.log(arr.slice()); // creates a copy.

// Splice array method
console.log(arr.splice(2)); // mutates the original array and returns the val mutated.
arr.splice(-1); // removes the last element from the original array.
arr.splice(1, 2); // starts from the index 1, and then removes 2 elements after.
console.log(arr);

// Reverse array method
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

// Concat array method
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // this is the exact same thing.

// Join array method
console.log(letters.join('-')); // returns a string of all the array elements seperated by the -.
