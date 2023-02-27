// Section 11 Coding Challenge 3
"use strict";

const calcAverageHumanAgeArrow = function (ages) {
  const humanAgesAverage = ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((accum, age, i, arr) => accum + age / arr.length, 0);

  return humanAgesAverage;
};

console.log(calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]));
