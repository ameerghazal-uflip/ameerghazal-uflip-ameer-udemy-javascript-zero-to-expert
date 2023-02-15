'use strict';

/* 

// Section 9 Lesson 116: Sets
const openingHours = {
  fri: {
    open: 12,
    close: 22,
  },

  sat: {
    open: 11,
    close: 23,
  },

  sun: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enchanced object literals
  openingHours,

  // we can erase the function and colon aspect to just keep it like this.
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ** this destructres for us & we added starter values incase of failure
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = 20,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your amazing pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonas'));

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

ordersSet.delete('Risotto');
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

*/

// Section 9 Lesson 177: Maps: Fundementals

const rest = new Map(); // contructs the Map
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
rest
  .set('categories', [
    'Italian',
    'Organic',
    'Pizzeria',
    'Vegetarian',
    'Organic',
  ])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open') // stacks the set methods
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true)); // prints out the correct value to the console
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // the result is true or false, which will map to once of the values above

console.log(rest.has('categories'));
rest.delete(2); // deletes the element at the key
console.log(rest);
console.log(rest.size);

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);

console.log(rest.get(arr)); // will not work, they are not the same object in the heap. Needs to be the exact same object in memory

rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
