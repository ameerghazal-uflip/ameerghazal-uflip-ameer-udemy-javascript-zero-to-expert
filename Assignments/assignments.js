"use strict";

// Section 14 Coding Challenge 2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6; // in mi/h
  }

  set speedUS(speed) {
    this.speed = speed * 1.6; // km/h conversion
  }
}

const car1 = new CarCl("Ford", 120);

car1.accelerate();
car1.brake();
car1.brake(); // brake
car1.accelerate(); // acclerate
car1.accelerate();

console.log(car1.speedUS); // getter
car1.speedUS = 200; // setter
console.log(car1.speedUS);
