'use strict';
// Section 11 Lesson 145: forEach with Maps & Sets

const currencies = new Map([
  ['USD', 'United States Dollar'], // each element is the [key, value]
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set; sets do not have indices / keys.
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
