// Coding Challenge 3

const Mark = {

    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = (this.mass / (this.height ** 2));
        return this.BMI;
    }
};

const John = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = (this.mass / (this.height ** 2));
        return this.BMI;
    }
};

Mark.calcBMI();
John.calcBMI();


if (Mark.BMI > John.BMI) {
    console.log(`${Mark.firstName} ${Mark.lastName}'s BMI (${Mark.BMI}) is higher than ${John.firstName} ${John.lastName}'s (${John.BMI})!`);
}
else if (John.BMI > Mark.BMI) {
    console.log(`${John.firstName} ${John.lastName}'s BMI (${John.BMI}) is higher than ${Mark.firstName} ${Mark.lastName}'s (${Mark.BMI})!`);
}
else {
    console.log("Both are equal!");
}
