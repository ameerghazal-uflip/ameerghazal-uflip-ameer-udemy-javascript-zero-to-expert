// Exporting Module
console.log('Exporting');

// Blocking code
console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish fetching');

// are top level variables are private in local scoped.
const shippingCost = 10;
export const cart = [];

// exports the function.
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to the cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

// exporting more than one.
export { totalPrice, totalQuantity as tq };

// default exports
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} ${quantity} added to the cart`);
}
