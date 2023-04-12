// Section 17: Lesson 274 The Module Pattern

import * as ShoppingCart from './shoppingCart.js';

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
// console.log(lastPost); // does not get us what we want. The workaround is to use regular promises.

// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
// console.log(lastPost2);


// Export
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${product} ${quantity} added to the cart (shipping cost is ${shippingCost})`
  );
};

// Import
const { addToCart } = require('./shoppingCart.js')