'use strict';

const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);

// Section 11 Lesson 144: forEach method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of loop.
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log('-----');

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// This is how the forEach method runs in this case.
// 0: function (200)
// 1: function (450)
// 2: function (400)...
console.log('-----');

// What if we want to access a counter like, for example, the for-of loop
for (const [i, movement] of movements.entries()) {
  // where the i is the counter varaible returned from movements.entries()
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('-----');

// finding the index in the forEach

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
