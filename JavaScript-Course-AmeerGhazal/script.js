'use strict';

/*
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

*/

// Section 3 Lesson 35

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear; // special form of function exp.
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return ` ${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));


