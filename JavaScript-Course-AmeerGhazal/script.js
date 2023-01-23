'use strict';

// Section 3 Lesson 36: Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4; // this machine cuts the fruit into pieces.
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3)); // the arguements replace the parameter place holders. From there cutPieces is called inside of the function. 