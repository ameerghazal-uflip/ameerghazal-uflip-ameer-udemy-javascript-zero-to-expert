// Coding Challenge 3

// Test Data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const avgDolphins = (96 + 108 + 89) / (3);
const avgKoalas = (88 + 91 + 110) / (3);
console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas) {
    console.log("Dolphins win!");
}
else if (avgDolphins === avgKoalas) {
    console.log("Draw");
}
else {
    console.log("Koalas win!");
}

// Bonus #1
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
const avgDolphinsBonus1 = (97 + 112 + 101) / (3);
const avgKoalasBonus1 = (109 + 95 + 123) / (3);
console.log(avgDolphinsBonus1, avgKoalasBonus1);

if ((avgDolphinsBonus1 > avgKoalasBonus1) && ((avgDolphinsBonus1 || avgKoalasBonus1) >= 100)) {
    console.log("Dolphins win!");
}
else if ((avgDolphinsBonus1 === avgKoalasBonus1) && ((avgDolphinsBonus1 && avgKoalasBonus1) >= 100)) {
    console.log("Draw");
}
else if ((avgKoalasBonus1 > avgDolphinsBonus1) && ((avgDolphinsBonus1 || avgKoalasBonus1) >= 100)) {
    console.log("Koalas win!");
}

// Bonus #2
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const avgDolphinsBonus2 = (97 + 112 + 101) / (3);
const avgKoalasBonus2 = (109 + 95 + 106) / (3);
console.log(avgDolphinsBonus2, avgKoalasBonus2);

if ((avgDolphinsBonus2 > avgKoalasBonus2) && ((avgDolphinsBonus2 || avgKoalasBonus2) >= 100)) {
    console.log("Dolphins win!");
}
else if ((avgDolphinsBonus2 === avgKoalasBonus2) && ((avgDolphinsBonus2 && avgKoalasBonus2) >= 100)) {
    console.log("Draw");
}
else if ((avgKoalasBonus2 > avgDolphinsBonus2) && ((avgDolphinsBonus2 || avgKoalasBonus2) >= 100)) {
    console.log("Koalas win!");
}

// Did extra things for the over 100 calculations; nevertheless, it still functions the same. 

