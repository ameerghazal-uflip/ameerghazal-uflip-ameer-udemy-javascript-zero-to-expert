// Section 3 Coding Challenge 1

// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);


function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}).`)
    }
    else if (avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}).`)
    }
    else {
        console.log("No winner");
    }
}

checkWinner(avgDolphins, avgKoalas);

// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
