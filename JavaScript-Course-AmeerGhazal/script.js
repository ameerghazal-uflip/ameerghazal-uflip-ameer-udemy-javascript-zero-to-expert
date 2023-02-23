'use strict';

// Section 10 Lesson 137: Closuers

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // this returns the new function and saves it in the booker variable.

booker(); // it is still able to access the passengerCount variable in the secureBooking function
booker();
booker();

console.dir(booker);
