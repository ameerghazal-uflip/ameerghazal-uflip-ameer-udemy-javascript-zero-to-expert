// Section 17 Lesson 276: A brief intro to the command line

// import * as ShoppingCart from './shoppingCart.js';

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   // console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// // console.log(lastPost); // does not get us what we want. The workaround is to use regular promises.

// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// // console.log(lastPost2);

import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';

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
