'use strict';

// Section 3 Lesson 4 : Basic Array Methods

// push methods add an element to the end of the array, and returns the length
const friends = ['Micheal', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(newLength);

// adds an element to the front of the array, and returns the length 
friends.unshift('John');
console.log(friends)

// Remove elements
friends.pop(); // removes the last element of the array and returns the removed element 
console.log(friends);

const popp = friends.shift(); // removes the first element 
console.log(popp);

console.log(friends.indexOf('Steven')); // returns the index of the element

console.log(friends.includes('Bob')); // returns true or false if the value is in the array

if (friends.includes('Peter')) {
    console.log("Peterrrr");
}