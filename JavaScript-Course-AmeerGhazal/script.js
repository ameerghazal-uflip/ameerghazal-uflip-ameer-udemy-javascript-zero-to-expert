'use strict';

// Section 3 Lesson 34: Function declerations vs. expressions. 

// Function Declerations
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991); // argument is what we use to fill in the place holder.

// Function Expressions
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);