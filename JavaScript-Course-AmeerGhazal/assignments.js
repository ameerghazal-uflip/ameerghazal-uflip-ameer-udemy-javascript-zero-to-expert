// Functions

function describeCountry(country, population, capitalCity) {
    return (`${country} has ${population} million people and its capital city is ${capitalCity}.`);
}

const us = describeCountry("United States", 331.45, "D.C.")
const japan = describeCountry("Japan", 126.23, "Tokyo")
const brazil = describeCountry("Brazil", 212.56, "Brasilia");

console.log(us, japan, brazil);