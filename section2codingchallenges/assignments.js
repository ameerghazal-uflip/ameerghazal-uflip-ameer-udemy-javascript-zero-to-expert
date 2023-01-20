// Type Conversion and Coercion: Predictions

console.log('9' - '5'); // should be the number 4
console.log('19' - '13' + '17'); // should be the number 6 added to the string 17, equaling the string '617'
console.log('19' - '13' + 17); // number 6 added to the number 17 == the number 23
console.log('123' < 57); // should be false, converting the 123 to a number
console.log(5 + 6 + '4' + 9 - 4 - 2); // 11 plus '4' converting to string "114" + 9, becoming 1149 - 4 - 2, equaling 1143 number.