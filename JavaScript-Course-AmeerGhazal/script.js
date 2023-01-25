'use strict';

// Section 3 Lesson 43: Dot vs. Bracket Notation

const carti = {
    firstName: "Jordan",
    lastName: 'Carter',
    age: 24,
    job: 'music',
    friends: ['ken', 'lonley', 'matt']

};

console.log(carti);

// dot notation
console.log(carti.lastName);

// bracket notation
console.log(carti['lastName']);

const nameKey = 'Name';
console.log(carti['first' + nameKey]);
console.log(carti['last' + nameKey]);


const intrest = prompt('What do you want to know about carti? Choose between firstName, lastName, age, job, friends');
console.log(carti[intrest]);

if (carti[intrest]) {
    console.log(carti[intrest]);
}
else {
    console.log("Wrong request! What do you want to know about carti? Choose between firstName, lastName, age, job, friends");
}


// using both to add new properties
carti.location = "Untited States";
carti['Twitter'] = "@playboicarti";
console.log(carti);

// Challenge
// Jonas has 3 friends, and his best friend is named Mike.

console.log(`${carti.firstName} has ${carti.friends.length} friends, and his best friend is named ${carti.friends[0]}.`);