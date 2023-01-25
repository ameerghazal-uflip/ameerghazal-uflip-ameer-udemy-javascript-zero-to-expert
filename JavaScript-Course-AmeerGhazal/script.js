'use strict';

// Section 3 Lesson 47: Looping Arrays, Breaking, and Continuing

const jonas = ["KO", 4, 5, "Jamie", "Peter", true, ["Jj", "Diggs"]];
/*
for (let i = 0; i < jonas.length; ++i) {
    console.log(jonas[i], typeof jonas[i]); //  how to loop arrays using loop
}

const types = [];
for (let i = 0; i < jonas.length; ++i) {
    types[i] = typeof jonas[i]; // two different ways
    types.push(typeof jonas[i]);
}
console.log(types);


const years = [1991, 2007, 1966, 2018];
const ages = [];

for (let i = 0; i < years.length; ++i) {
    ages.push(2037 - years[i]);
}

console.log(ages);



// break and continue
const types = [];
for (let i = 0; i < jonas.length; ++i) {

    if (typeof jonas[i] !== 'string') {
        continue;
    }
    types.push(typeof jonas[i]);
}
console.log(types);


const types = [];
for (let i = 0; i < jonas.length; ++i) {

    if (typeof jonas[i] === 'number') {
        break;
    }
    types.push(typeof jonas[i]);
}
console.log(types);

*/