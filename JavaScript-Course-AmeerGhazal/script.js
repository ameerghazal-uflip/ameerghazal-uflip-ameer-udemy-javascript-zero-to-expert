'use strict';

// Section 9 Lesson 105: The Spread Operator

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
};

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // this creates a completely new array, but it is based on expands the array
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy, similar to object.assign...

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, string, maps, sets. Not objects.
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// Real-world example
const ingredients = [
  prompt("Let's make pasta!"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
// use escape before the ' (\)
console.log(ingredients);

// old way
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// new way with spread op
restaurant.orderPasta(...ingredients);

// Objects
const newResturant = { foundingYear: 1998, ...restaurant, founder: 'Jess' };
console.log(newResturant);

// making copies without affecting the reference
const resturantCopy = { ...restaurant };
resturantCopy.name = 'Piazzzera';
console.log(restaurant.name);
console.log(resturantCopy.name);
