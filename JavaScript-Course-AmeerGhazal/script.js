// Section 17 Lesson 278-279: Bundling with Parcel and NPM Scripts

console.log('123');

import add, { cart } from './shoppingCart.js';
add('pizwe', 2);
add('berad', 5);
add('apples', 4);
console.log(cart);

// import cloneDeep from './node_modules/lodash/cloneDeep.js'; / old version
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'bread',
      quantity: 5,
    },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state); // changes the logged in prop even after the clone
const stateDeepClone = cloneDeep(state); // clones at the point where the code is run and not chanfed.

// state.user.loggedIn = false; // mutates the object.assign version
console.log(stateDeepClone);
console.log(stateClone);

// will not reload parts of the page.
if (module.hot) {
  module.hot.accept();
}

class Person {
  greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const Jonas = new Person('Jonas');
console.log('Jonas' ?? null);
console.log(cart.find(el => el.quantity >= 2)); // finds the first element
Promise.resolve('TEST').then(x => console.log(x));

// Polyfilling
import 'core-js/stable'; // usually we want to import parts of the package.

// we could cherry pick for the certain bundle size.
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// // polyfilling async functions
import 'regenerator-runtime/runtime'; // hoisted anyway.
