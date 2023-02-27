// Section 11 Coding Challenge 1
"use strict";

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const filteredAges = humanAges.filter((age) => age >= 18);

  const average = filteredAges.reduce((accum, age) => accum + age, 0); // adds up all the values into one.
  return average / filteredAges.length; // returns the average humanAges

  // const avgEdited = filteredAges.reduce(
  //   (accum, age, i, arr) => (accum + age) / arr.length,
  //   0
  // );

  // return avgEdited;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
