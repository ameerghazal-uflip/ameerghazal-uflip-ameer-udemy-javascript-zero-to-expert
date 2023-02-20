'use strict';

// Section 10 Lesson 131 Functions Accepting Callback Functions

// takes a string, returns lowercase w/ no space.
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// de
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' '); // destructure
  return [first.toUpperCase(), ...others].join(' '); //first word upper case in array then join.
};

// Higher order function: it takes in a function. This is more important than the low-level functions above.
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformerd string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

// transforms the string using the function
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses call-backs all the time.
const high5 = function () {
  console.log('hi');
};

// addEvent is the higher order, while high% is the lower.
document.body.addEventListener('click', high5);

['Jonas', 'Martha'].forEach(high5); // for each of them, the method will be called
