// Section 17 Lesson 278: Bundling with Parcel and NPM Scripts

// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
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

state.user.loggedIn = false;
console.log(stateClone, stateDeepClone);

// will not reload parts of the page.
if (module.hot) {
  module.hot.accept();
}
