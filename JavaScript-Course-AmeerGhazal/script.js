'use strict';

// Section 8 Lesson 93

/*

What are the 3 types of scoping?

- Global scoping, function scoping, block scoping.

What makes var different than let and const?

- let and const are block scoped, while var is function scoped. 

Pick 3 variable with different scopes and label what scope (global, function, block) they are.

- const firstName = ... is a global scope. 
- const age = ... is function scoped (calcAge())
- const str = ... is block scoped (inside the if statement)

*/

function calcAge(birthYear) {
  // defined in the global scope, and creates a function scope
  const age = 2037 - birthYear;

  function printAge() {
    // nested scope, but has access to all the parent scopes.
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven'; // this will change the output as js will look for the variable in the current scope, then shift to the global. Outside of the block, though, the firstName will not be changed
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT'; //re-assigns outer scope's variable.
    }

    // console.log(str); // const and let variablea are block scoped; therefore, we cannot call it outside of the block.
    console.log(millenial); // this works, var variables are function scoped, not block scoped, so it works.
    // console.log(add(2,3)); // does not work since it is defined in the if block. This only applies in strict mode!

    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas'; // similar to java, this is tech the main
calcAge(1991);
