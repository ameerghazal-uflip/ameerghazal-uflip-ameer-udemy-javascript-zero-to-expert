/*
Lessons before 11
let js = 'daily';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log("Whole lotta red");

let firstName = "carti"; // let is used as a variable 
console.log(firstName);
console.log(firstName);
console.log(firstName); // logs things to the computer using camelCase, similar to java

let myFirstJob = "Coder";
let myCurrentJob = "Eater";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun); // has the type to the console
console.log(typeof "Jonas"); // can either use ' ' , or , " "

javascriptIsFun = "YES!"; // we can use the same variable and swtich the data type without redefining
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun); // in this case it switched from a boolean to a string (different from java)

let year;
console.log(year);
console.log(typeof year); // returns undefined since it is empty
year = 1991;
console.log(typeof year); // dynamic typing


const birthYear = 1991;
//birthYear = 1992; // cannot do this. This is similar to final ... in java

var job = "programmer";
job = "teacher";
console.log(job); // should not use var these days

*/

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2001
console.log(ageJonas, ageSarah); // we can log more than one

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 is 2 cubed = 8 =>

const firstName = "Jonas";
const lastName = "Brothers";
console.log(firstName + " " + lastName); // similar  to java

let x = 10 + 5;
x += 10; // the same as java
x *= 4; // x = x * 4
x++;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // asks an if statment using 
console.log(ageSarah < 18);

const isFullAge = (ageSarah >= 18);
console.log(isFullAge);
console.log(now - 1991 > now - 2018); // precendence rules

