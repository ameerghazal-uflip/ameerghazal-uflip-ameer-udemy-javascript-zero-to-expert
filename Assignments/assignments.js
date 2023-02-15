// Section 9 Coding Challenge 2

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
let count = 1; // starts at 1 for logical purposes
for (const goal of game.scored) {
  console.log(`Goal ${count}: ${goal}`);
  ++count;
}

// 2.
let average = 0;
for (const odd of Object.values(game.odds)) {
  average += odd;
}
console.log(average / Object.values(game.odds).length); // makes it reusable

// 3.
for (const [team, score] of Object.entries(game.odds)) {
  const result = team === "x" ? `draw` : `victory ${game[team]}`; // using game[team] we can access the correct team
  console.log(`Odd of ${result}: ${score}.`);
}

// 4. BONUS, VERY CONFUSING

const hoopers = {};
for (const player of game.scored) {
  console.log(player);
  console.log(hoopers[player]);
  hoopers[player] ? hoopers[player]++ : (hoopers[player] = 1);
}

console.log(hoopers);
