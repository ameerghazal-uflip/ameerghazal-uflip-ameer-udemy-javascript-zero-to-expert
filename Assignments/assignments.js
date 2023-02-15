// Section 9 Coding Challenge 2

/*

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

// #1. Goes into the players field, renames the variables at each index & assigns them.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3 spread op
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. stores the team1 with extra subs.
const players1final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1final);

// 5. nested object creating a variable with a name change for x.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. create a function that recives a re arb. number of player names

function printGoals(...playerNames) {
  for (let index = 0; index < playerNames.length; ++index) {
    console.log(playerNames[index]);
  }
  console.log(playerNames.length); // this prints out the number of goals
}

printGoals("Davis", "Muller", "Leo", "Kimmich");
printGoals(game.scored);

// 7. which team is more likley to win.
team1 < team2 && console.log("Team 1 has better odds");
team1 > team2 && console.log("Team 2 has better odds");

*/

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
