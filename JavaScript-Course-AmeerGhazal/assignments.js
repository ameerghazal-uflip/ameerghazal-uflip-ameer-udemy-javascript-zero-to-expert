// Object Methods

const myCountry = {
    country: "United States",
    capital: "Wasington D.C.",
    language: "English",
    population: 331.45,
    neighbors: ["Mexico", "Canada"],

    describe: function () {
        return (`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries, and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbors.length === 0 ? true : false; // if the array is empty, there are no neighbors, so true.
        // no need to return anything here, optional
    }

};

console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.isIsland);

