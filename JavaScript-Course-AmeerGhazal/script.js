'use strict';

// Section 10 Lesson 136: Imediatley Invoked Function Expressions (IIFE)

// const runoce = function () {
//   console.log('This will never run again.');
// };

// Makes it so this method is for one time use only.
(function () {
  console.log('This will never run again.');
})();

// arrow ex.
(() => console.log('This 2 will never run again'))();
