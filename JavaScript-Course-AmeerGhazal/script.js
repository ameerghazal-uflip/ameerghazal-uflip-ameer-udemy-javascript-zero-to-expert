'use strict';


// Section 3 Lesson 37: Reviewig Functions

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return retirement;
    }
    else {
        return -1;
    }

    //return `${firstName} retires in ${retirement} years`;
}

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1800, 'Mike'));

