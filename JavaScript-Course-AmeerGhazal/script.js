'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Section 16 Lesson 259: Building a Simple Promise

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win'); // fullfilled
    } else {
      reject(new Error('You lost your money!')); // this will be for the catch, rejected state
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err)); // cosumes the promise.

// Promisifying setTimeout
const wait = function (secs) {
  return new Promise(function (resolve) {
    setTimeout(resolve, secs * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 secs');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('abc')).catch(x => console.error(x));
