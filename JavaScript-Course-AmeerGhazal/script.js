'use strict';

// Section 3 Lesson 48: Looping Backwards and Nested Loops

const jonas = ['Jonas', 'Schem', 38, 'teacher', ['Mike', 'Peter']]
// 0, 1, 2 ... 4

// Backwards loop (4, 3, ... ,0)

for (let i = jonas.length - 1; i >= 0; --i) {
    console.log(i, jonas[i]);
}

// Nested Loops

for (let exercise = 1; exercise < 4; ++exercise) {
    console.log("Starting exercise " + exercise);
    for (let reps = 1; reps < 6; ++reps) {
        console.log(" Exersize: " + exercise + " Lifting weights rep: " + reps);
    }
}