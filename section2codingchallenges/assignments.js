// Logical Operators: == vs. ===

let language = "English";
const country = "United States";
let population = 331.45;
const isIsland = false;

if ((language === "English") && (population < 50) && (!isIsland)) {
    console.log(`You should live in ${country}`);
}
else {
    console.log(`${country} does not meet your criteria`);
}
