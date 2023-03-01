"use strict";

// Section 11 Coding Challenge 4

// Given Test Data
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1. goes to each dog object and adds the property rec. food w/ calc.
dogs.forEach(
  (dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

console.log(dogs);

// 2. Finds sarah's dog and logs the results to the console.
dogs.filter(function (dog) {
  if (dog.owners.includes("Sarah"))
    console.log(
      `Sarah, your dog is ${
        dog.curFood > dog.recommendedFood
          ? `eating too much`
          : `eating too little`
      }.`
    );
});

// 3. create's two array's seperting the owners by dog weight.
// Begins by filters for the correct conditional array. Then, we chain on a flatMap method to get all the owner information and put it in a simple array.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4. Log a string to the console combining the data from the array's. We used the join() method.
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much.`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little.`);

// 5. Log to the console if there is any dog eating exactly the correct amount of food.

console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// 6. Log to the console whether there are any dogs eating an okay amount of food (true, false).

console.log(dogs.some((dog) => helper(dog)));

// 7. Create an array containg dogs eating an okay amount of food. Utilizes the helper method
const eatOkay = dogs.filter((dog) => helper(dog));
console.log(eatOkay);

// 8. Create a shallow copy of the dogs array and sort it by recommened food portion in ascening order.
const dogsRecSort = dogs
  .map((dog) => dog.recommendedFood)
  .sort(function (first, second) {
    if (first > second) return 1; // swithes order
    if (second > first) return -1; // keeps order
  });
console.log(dogsRecSort);

// personal helper
function helper(dog) {
  return (
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
  );
}

/*



















// 5.
dogs.some(dogs.curFood == dogs.recommendedFood);

*/
