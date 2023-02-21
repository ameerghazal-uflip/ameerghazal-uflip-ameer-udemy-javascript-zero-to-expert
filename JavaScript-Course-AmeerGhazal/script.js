'use strict';

// Section 10 Lesson 132 Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`); // greeting comes from greet function
  };
};

const greeterHey = greet('Hey'); // assigns greeterHey the function returned from greet.
greeterHey('jonas'); // we can then use the function.
greeterHey('steven');

greet('Hello')('Jonas'); // we don't have to decalre a variable to use it. Pass in the greeting, then - seperatly - pass in the name.

// Rewritten with an arrow function
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hey')('Jonas'); // this calls it.
