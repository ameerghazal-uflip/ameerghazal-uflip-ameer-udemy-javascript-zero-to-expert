// Functions Calling Other Functions

const percentageOfWorld1 = population => (population / 7900 * 100);

function describePopulation(country, population) {
    return (`${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`);
}

const us = describePopulation("United States", 331.45);
const japan = describePopulation("Japan", 126.23);
const brazil = describePopulation("Brazil", 212.56);

console.log(us, japan, brazil);