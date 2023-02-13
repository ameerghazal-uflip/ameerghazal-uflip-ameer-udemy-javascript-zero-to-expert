'use strict';
/*
// Section 8 Lesson 95

// Hoisting with variables
// console.log(me); // undefined, var
// console.log(job); // in the TDZ
// console.log(birthYear); // in the TDX

var me = 'Jonas';
let job = 'teacher';
const birthYear = 1991;

// Hoisting Functions

console.log(addDecl(2, 3)); // works with hoisting since it is a function decleration.
// console.log(addExpr(2, 3)); // in the TDZ
// console.log(addArrow(2, 3)); // in the TDZ, arrow & variables will not work.

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example, problems of hoisting. Don't use var. Declare functions first and call them later.
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// Section 8 Lesson 96 (This keyword in practice)

console.log(this); // points to the window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined when not attached to an object
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // finds the nearest def for this. The arrow function does not get its own this keyword, meaning it uses the parent scope this. For this example, it points to the global scope, which is the window object.
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge(); // jonas is the owner of the method, then inside the jonas object, we call calcage which prints the this for the object.

const mali = {
  year: 2017,
};

mali.calcAge = jonas.calcAge; // this is called method borrowing. Defines calcAge for mali.
mali.calcAge(); // this keyword point toward the object calling the method

const f = jonas.calcAge;
f();


*/

// Section 8 Lesson 98

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // SOLUTION 1, Old-fashioned
    // const self = this; // in this case, we still have access to the this keyword in jonas
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996); // through the scopre, this works.
    // };

    // SOLUTION 2
    const isMillenial = () => {
      console.log(self.year >= 1981 && self.year <= 1996); // through the scopre, this works.
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // arrow function does not get its own this keyword. The parent scope in this case is tehe global scope.
  },
};

jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 4, 5, 4, 3);
