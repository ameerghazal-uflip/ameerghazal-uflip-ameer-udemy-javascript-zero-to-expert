// Function Declerations vs. Expressions

// Decleration
function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}

let us = percentageOfWorld1(331.45);
let japan = percentageOfWorld1(126.23);
let brazil = percentageOfWorld1(212.56);

console.log(us, japan, brazil);

// Expression
const percentageOfWorld2 = function (population) {
    return ((population / 7900) * 100);
}

us = percentageOfWorld2(331.45);
japan = percentageOfWorld2(126.23);
brazil = percentageOfWorld2(212.56);

console.log(us, japan, brazil);
