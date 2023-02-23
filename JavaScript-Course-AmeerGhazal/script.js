'use strict';

// Section 10 Lesson 138: More Closuers

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g(); // calls function which reassigns f
f(); // runs and has access to a due to closure.
console.dir(f);

// reassigning f-function. This changes the closure.
h(); // reassigns f again.
f(); // uses the reassigned data due to closure
console.dir(f);

// Example 2: Timer
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`); // does not wait for the timer.
};

const perGroup = 1000; // this will not change anything, the closure has prioirty over the scope chain.
boardPassengers(180, 3); // 180 people, 3 seconds
