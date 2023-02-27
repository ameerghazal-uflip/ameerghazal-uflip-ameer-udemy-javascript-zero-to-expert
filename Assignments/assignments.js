// Section 11 Coding Challenge 1
"use strict";

// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
//§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaRedo = dogsJulia.slice(1, -2); // returns a new copy from the 2nd index to the 2nd to last index exclusive

  const combinedData = dogsJuliaRedo.concat(dogsKate); // attaches both to an array.

  // loops over array for age
  combinedData.forEach(function (age, index) {
    // age is playing as the element in this forEach loop function (age, index, array), but we only need age
    console.log(
      `Dog number ${index + 1} is ${
        age >= 3 ? `an adult, and is ${age} years old.` : `still a puppy`
      }`
    );
  });
};

checkDogs([3, 5, 2, 12, 17], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
