'use strict';

// Section 10 Lesson 129 How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schem',
  passport: 24329830928,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; // this is completley diff from the other flight.
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24329830928) {
    alert('Checked in');
  } else {
    alert('Wrong Passport');
  }
};

checkIn(flight, jonas); // we passed in a refernce type. In which they point to towards the same object (so, passenger.name === jonas.name)
console.log(flight, jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas); // interacts with the same object as checkIn (jonas) which can be dangerous
checkIn(flight, jonas);
