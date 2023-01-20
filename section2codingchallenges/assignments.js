// Coding Challenge #1

//Test 1

let markWeightKilos = 78;
let markHeightMeters = 1.69;
let johnWeightKilos = 92;
let johnHeightMeters = 1.95;

let markBMI = (markWeightKilos) / (markHeightMeters ** 2);
let johnBMI = (johnWeightKilos) / (johnHeightMeters ** 2);
let markHigherBMI = markBMI > johnBMI;


console.log("Marks BMI: " + markBMI, " ", "Johns BMI: " + johnBMI);
console.log(markHigherBMI);


// Test 2

markWeightKilos = 95;
markHeightMeters = 1.88;
johnWeightKilos = 85;
johnHeightMeters = 1.76;

markBMI = (markWeightKilos) / (markHeightMeters ** 2);
johnBMI = (johnWeightKilos) / (johnHeightMeters ** 2);
markHigherBMI = markBMI > johnBMI;

console.log("Marks BMI: " + markBMI, " ", "Johns BMI: " + johnBMI);
console.log(markHigherBMI);


