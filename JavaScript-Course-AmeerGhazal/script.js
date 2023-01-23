'use strict';
// Section 3 Lesson 33. Fundemtals of Functions

function logger() {
    console.log('My name is Jonas');
}

// calling, running, or invoking the function
logger();
logger();
logger(); // each ti

function fruitProcessor(apples, oranges) // parameters will get defined when the function is called.
{
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // these are called the arguements
console.log(appleJuice);

const orangeJuice = fruitProcessor(0, 100); // we have to save the value returned if we want to use it again. We could also just print it.
console.log(orangeJuice);

const appleOrange = fruitProcessor(2, 4);
console.log(appleOrange)