// Section 17: Lesson 273 Top-level Await (2022)

// await keyword works outside of async function. This blocks the execution of the entire module, though.

// previoulsy: (async function() {})();

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

import * as ShoppingCart from './shoppingCart.js';

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost); // does not get us what we want. The workaround is to use regular promises.

// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
