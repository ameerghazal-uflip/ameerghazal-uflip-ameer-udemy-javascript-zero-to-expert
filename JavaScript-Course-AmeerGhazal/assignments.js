// Coding Challenge #4


// Data 1: Test for bill values 275, 40 and 430

const bill = 40;
const tip = bill >= 50 && bill <= 300 ? tip = (bill * 0.15) : tip = (bill * .20);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
