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

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; // two different ways
console.log(jonasNew);

// for multi-line string
console.log('String with \n\
multiple \n\
lines');

// Template Literate Instead
console.log(`String
with 
multiple lines`);


const age = 15;
if (age >= 18) {
    console.log("Sarah can start driving license");
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait anohter ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century; // defined before similar to java 
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}

console.log(century);

*/

// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23));

// Type Coercion
console.log("I am " + 23 + " years old"); // all converted to a string
console.log(23 - 10 - 3); // all converted to a number 

let n = '1' + 1; // ('11', converts to a String)
n = n - 1 // '11' = 1 = 10 (converts to a number)
console.log(n);

