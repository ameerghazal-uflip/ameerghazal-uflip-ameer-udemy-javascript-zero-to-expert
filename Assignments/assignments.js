// Section 9 Coding Challenge 3

const gameEvents = new Map([
  [17, "⚽ GOAL"], // left side is the key, value [key, value]
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// #1 creates an array of all the different events
const tester = gameEvents.values();
const set = new Set(tester);
const events = [...set]; // this is the array containing the different events with no duplicates

// we can combine in one line: const events = [...new Set(gameEvents.values())];

console.log(events);

// #2 removes the key from the map
gameEvents.delete(64);
console.log(gameEvents);

// 3. average per event.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes.`
);

// if we wanted to be even more specifc (92 mins)
const time = [...gameEvents.keys()].pop(); // creates an array of the keys. From there, it removes the element from the array and returns it
console.log(time);

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes.`
);

// #4 print the half
for (const [key, value] of gameEvents) {
  key < 45
    ? console.log(`[FIRST HALF] ${key}: ${value}`)
    : console.log(`[SECOND HALF] ${key}: ${value}`);
} // if the key is less than 45 mins, it is the first half, vice versa.
