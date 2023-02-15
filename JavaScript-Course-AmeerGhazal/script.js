'use strict';

/* 
// Section 9 Lesson 111: For-Of-Loop

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, element] of menu.entries()) {
  console.log(`${i + 1}: ${element}`);
}

console.log([...menu.entries()]); // checker of what .entries() does.



// Section 9 Lesson 112: Enhanced Object Literals

const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
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

// Section 9 Lesson 113: Optional Chaining

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

console.log(restaurant.openingHours.fri.open);

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.fri?.open);

const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods Optional Chaining
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays Optional Chaining

//const users = [];
const users = [{ name: 'Jonas', email: 'Hello@Jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');

*/

// Section 9 Lesson 114: Looping Objects: Object Keys, Values, and Entries

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

// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire Object, difference between array
const entires = Object.entries(openingHours);
console.log(entires);

// if it was a simple object, all we would have to do is [key, value], but since value contains objects within it, we can go furthur and destrucutre more.

for (const [key, { open, close }] of entires) {
  // first index is the data, then the innner 0 & 1 are the open close times. Look at the console.log
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}
