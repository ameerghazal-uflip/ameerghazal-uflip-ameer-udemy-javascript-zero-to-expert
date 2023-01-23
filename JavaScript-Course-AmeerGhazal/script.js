'use strict';


// Section 3 Lesson 39: Intro to Arrays

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const values = new Array(1991, 1984, 2008, 2020);
console.log(values);

console.log(friends[0]); // index based, starting at 0
console.log(friends[2]);
console.log(friends.length); // not 0 based
console.log(friends[friends.length - 1]); // we had to subtract 1 for indexing reasons


friends[2] = 'Jay';
console.log(friends)


const jonas = ['Jonas', 'lastname', 2034 - 1000, 'teacher', friends]; // we can mix and match types: strings, numbers, arrays, etc.
console.log(jonas);
console.log(jonas.length);

// Exercise
function calcAge(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3, age4, age5);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


