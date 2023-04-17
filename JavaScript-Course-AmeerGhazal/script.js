// Section 17 Lesson 278-279: Bundling with Parcel and NPM Scripts

console.log('123');

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);
console.log(cart);

// import cloneDeep from './node_modules/lodash/cloneDeep.js';
// import cloneDeep from '/lodash';
import cloneDeep from './node_modules/lodash-es/fp/cloneDeep.js';

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

state.user.loggedIn = false;
console.log(stateClone, stateDeepClone);

// will not reload parts of the page.
if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const Jonas = new Person('Jonas');
console.log('Jonas' ?? null);

console.log(cart.find);
