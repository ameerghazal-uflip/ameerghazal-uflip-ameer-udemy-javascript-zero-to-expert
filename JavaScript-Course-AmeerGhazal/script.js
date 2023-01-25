'use strict';

// Section 3 Lesson 44: Object Methods
/*
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
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge3()} year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
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


console.log(jonas.getSummary());

// What does this say: first, it checks the condition after the ? is the if, then : is the else. Good for one-liners (ternary).
jonas.hasDriverLicense ? console.log(`${jonas.firstName} is a ${jonas.calcAge3()} year old ${jonas.job}, and he has a driver's license.`) : console.log(`${jonas.firstName} is a ${jonas.calcAge3()} year old ${jonas.job}, and he does not have a driver's license.`);


*/