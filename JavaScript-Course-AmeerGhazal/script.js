'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Section 16 Lesson 258: The Event Loop in Practice

console.log(`Test start`); // starts us off
setTimeout(() => console.log(`0 sec timer`), 0); // last since it is still in the call-back queue
Promise.resolve('Resolved promise 1').then(res => console.log(`res`)); // 3rd since it is in the microtasks queue

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 500; i++) {
    console.log(res);
  }
});

console.log(`test end`); // 2nd since it passes everything in awaiting queues
