// Section 5 Coding Challenge 1

function printForecast(arr) {
  let output = "";
  for (let index = 0; index < arr.length; ++index) {
    output += `${arr[index]} degrees celsuis in ${index + 1} days ... `;
  }

  return output;
}

const data1 = [17, 21, 23]; // works for both
const array = [12, 5, -5, 0, 4];
let output = printForecast(array);
console.log("... " + output);
