// Section 9 Coding Challenge 3

const gameEvents = new Map([
  [17, "⚽ GOAL"], // left side is the key, value [key, value]
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [72, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// #1 creates an array of all the different events
const tester = gameEvents.values();
const set = new Set(tester);
const events = [...set]; // this is the array containing the different events with no duplicates

console.log(events);

// #2 removes the key from the map
gameEvents.delete(64);
console.log(gameEvents);

let average = 0;
for (const [time, event] of gameEvents) {
  // destructing the array & using a for-of loop.
  average += time; // gets the time from each key
}

average /= gameEvents.size; // divides by the size for the average
average /= 90; // for the 90 minute rule.
console.log(`An event happened, on average every ${average} minutes.`);

// #4 print the half
for (const [key, value] of gameEvents) {
  key < 45
    ? console.log(`[FIRST HALF] ${key}: ${value}`)
    : console.log(`[SECOND HALF] ${key}: ${value}`);
} // if the key is less than 45 mins, it is the first half, vice versa.
