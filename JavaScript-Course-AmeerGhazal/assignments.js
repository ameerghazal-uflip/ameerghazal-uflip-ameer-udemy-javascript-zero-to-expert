// Th While Loop

const populations = [331.45, 126.23, 200.23, 111];
const percentages3 = [];

function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}

let count = 0;
while (count < populations.length) {
    percentages3.push(percentageOfWorld1(populations[count]));
    ++count;
}

console.log(percentages3);