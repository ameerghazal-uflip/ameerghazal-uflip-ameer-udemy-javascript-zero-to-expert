'use strict';

/*

// Section 9 Lesson 121 (Working with Strings )

const airline = 'Tap Air Portugal';
const plane = 'A320';

// getting an element
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B23b'[0]); // will return B

// length
console.log(airline.length);
console.log('B232'.length);

// indexOf
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

// slice
console.log(airline.slice(4)); // splits the string and starts at this index
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// we can specifcy a neegative end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B & E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got a middle seat.');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23BC');
checkMiddleSeat('3BE');


// Section 9 Lesson 122 Working With Strings (P2)

const airline = 'Tap Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Capitalization
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); // gets the letter at the index and converts it to uppercase.

console.log(passengerCorrect);

// Comparing Emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail === email);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // we can stack these
console.log(priceUS);

const annoncement = 'All passenger come to barding door 23. Boarding door 23!';

console.log(annoncement.replace('door', 'gate')); // replaces only one occurence.
console.log(annoncement.replaceAll('door', 'gate')); // replaces all of the instances.

console.log(annoncement.replace(/door/g, 'gate')); // replaces all occurences.

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('A'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase(); // converts to string to all lowercase since the includes is case sensative.
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some food and a Pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks ands a gun for protection');

*/

// Section 9 Lesson 123 Working With Strings (P3)

// Split & Join
console.log('a+very+nice+string'.split('+')); // splits us the string into a new array
console.log('Jonas Schemedtmann'.split(' '));

// with destructuring
const [firstName, lastName] = 'Jonas Schemdtmann'.split(' '); // the split method splits it into an array, the the two values are assigned to the two variables in the destrucutre.
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1)); // converts the first letter to upper case and joins it with the remaining string

    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // replaces the first letter with the upper case version
  }

  console.log(namesUpper.join(' ')); // combines the array into a string.
};

capitalizeName('jessica ann smith davis'); // better to use inisde of an array to make the first letter of each word capital
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').length);

console.log(message.padStart(25, '+').padEnd(35, '+')); // adds the extra characters.

const maskCreditCard = function (number) {
  const str = number + ''; // concat, number but as a string
  const last = str.slice(-4); // this gets the last four character
  return last.padStart(str.length, '*'); // so this pads the start of the last 4 numbers with stars just like a credit card number and it is the total length of the inputed string.
};

console.log(maskCreditCard(31313251321321));
console.log(maskCreditCard('33032032030320320320'));

// Repeat
const message2 = 'Bad weather... All departuers delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'planes'.repeat(n)}`);
};

planesInLine(3);
planesInLine(4);
