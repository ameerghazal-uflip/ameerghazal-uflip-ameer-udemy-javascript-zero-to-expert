'use strict';

// Section 10 Lesson 133-134 The Call, Apply, and Bind Methods

const lufthansa = {
  airline: 'Luftansa',
  iataCode: 'LH',
  bookings: [],
  // the old way: book: function {} can be done under
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    ); // this. gets from the object.

    this.bookings.push({ flight: `${this.iataCode}${flightNum},`, name }); // adds a new object to the array (it contains the flight number and the name.
  },
};

lufthansa.book(239, 'Jonas Scehm');
lufthansa.book(635, 'John smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; // sets the variable equal to the function which makes the book var. the function. This is a copy, but it is not a method, it is a function.

// Does not work.
//book(23, 'Sarah Williams'); // not useable, the this keyword points toward undefined.

// Call
book.call(eurowings, 23, 'Sarah Williams'); // we called the call method which extends the book function with the this keyword set to eurowings.
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method.
// This is similar to call, but instead it takes an array of data for the arugements.
const fligthData = [583, 'George Cooper'];
book.apply(swiss, fligthData);
console.log(swiss);

// Used in modern javascript. Call method with a spread operator.
book.call(swiss, ...fligthData);

// Bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
// returns a new function with bookEW function always attached to the eurowings this keyword.

bookEW(23, 'Steven'); // we can go back to the original parameters since the function is the same this keyword

// we can use bind to create a function for one specfifc airline and flight number

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schem');
bookEW23('Martha cooper');

// With Event Listeners
lufthansa.planes = 300; // adds a new property to the luft. object
lufthansa.buyPlane = function () {
  // every time the button is clicked, inc.
  this.planes++;
  console.log(this, this.planes);
};

// makes the click functionable
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // would point the this keyword inside the luft. function to the buy element, which is not what we want. We need to manually define the this keyword. We need to pass in a function, not call it; therefore, use the bind method.

// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// creates a more specific function from the general function
const addVAT = addTax.bind(null, 0.23); // pre-sets the 0.23 'rate'.
// is the same as: addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Create a function that will return another function instead of using the bind method.

const addTaxFunction = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVATFunction = addTaxFunction(0.23); // this will pre-set the function returned to 0.23
console.log(addVATFunction(100));
console.log(addVATFunction(23));
