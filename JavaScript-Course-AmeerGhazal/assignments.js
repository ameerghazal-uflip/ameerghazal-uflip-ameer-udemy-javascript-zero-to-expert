// Looping Arrays, Breaking, and Continuing
const populations = [331.45, 126.23, 200.23, 111];
const percentages2 = [];

function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}


for (let index = 0; index < populations.length; ++index) {
    percentages2.push(percentageOfWorld1(populations[index]));
}

console.log(percentages2);
