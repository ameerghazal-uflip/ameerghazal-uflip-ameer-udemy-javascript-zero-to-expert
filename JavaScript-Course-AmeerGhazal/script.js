'use strict';

// Section 3 Lesson 49: While Loops

const jonas = ['Jonas', 'Schem', 38, 'teacher', ['Mike', 'Peter']];


let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    ++rep;
}


let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop is about to end");
}