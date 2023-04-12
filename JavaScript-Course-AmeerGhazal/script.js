// Section 17: Lesson 272 Exporting and Importing in ES6

// Importing Module
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log('Importing');
addToCart('bread', 5); // calls the imported module
console.log(price, tq);

// imports everything at the same time
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

// importing default exports  (don't need curly braces, and we can name it whatever we want)
// import add from './shoppingCart.js';
// add('pizza', 2);

// testing the imports are not copy of exports.
import add, { cart } from './shoppingCart.js'; // mixes default and normal exports
add('pizza', 2);
add('bread', 3);
add('apples', 4);

console.log(cart);
