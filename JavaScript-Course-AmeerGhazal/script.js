'use strict';

/*
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

*/


// Section 3 Lesson 44: Object Methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schem',
    birthYear: 1991,
    job: 'teacher',
    friends: ["Mike", "Peter", "Steven"],
    hasDriverLicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear;
    },

    calcAge2: function () {
        // console.log(this);
        return 2037 - this.birthYear;
    },

    calcAge3: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
};

console.log(jonas.calcAge(1992)); // dot with argument 
console.log(jonas['calcAge'](1991)); // bracket

// No argument needed since it is defined in the object 
console.log(jonas.calcAge2());

// We defined this.age in the function to add a new variable
console.log(jonas.calcAge3());
console.log(jonas.age);


// Challenge
// "Jonas is a 46 year old teahcer, and he has a driver's license."

if (jonas.hasDriverLicense) 