"use strict";

// Section 5 Lecture 59-61

// Problem 1: We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature ampliturde. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// What is temp ampl. Difference between highest and lowest temp in array?
// How to compute max and min temp?
// What is a sensor error, and what to do?

// Breaking into sub-problems
// How to ingnore errors?
// Find max & min in temp array
// subtract min from max (amp) and return

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let index = 0; index < temps.length; ++index) {
    const currTemp = temps[index];
    if (typeof currTemp !== "number") continue; // none of the logic is exectuted if it is not the same type

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }

  console.log(max, min);

  const amplitude = max - min;
  return amplitude;
};

console.log(calcTempAmplitude(temperatures));

// Problem 2
// Function should now incorporate two array's. Just merge the two arrays
// How to merge two arrays:

const calcTempAmplitudeNew = function (array1, array2) {
  const temps = array1.concat(array2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let index = 0; index < temps.length; ++index) {
    const currTemp = temps[index];
    if (typeof currTemp !== "number") continue; // none of the logic is exectuted if it is not the same type

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }

  console.log(max, min);

  const amplitude = max - min;
  return amplitude;
};

console.log(calcTempAmplitudeNew([1, 2, 3, 4], [5, 90, -2, 100]));

function measureKelvin() {
  const measurment = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius:")),
  };

  // find bug
  console.table(measurment);

  const kelvin = measurment.value + 273;
  return kelvin;
}

// A Identify bug
console.log(measureKelvin());
