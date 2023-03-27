"use strict";

// Section 14 Coding Challenge 4

class CarCl {
  // Parent Class
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
    return this; // chainable
  }

  get speedUS() {
    return this.speed / 1.6; // in mi/h
  }

  set speedUS(speed) {
    this.speed = speed * 1.6; // km/h conversion
  }
}

class EVCl extends CarCl {
  // Child Class
  // extends makes it a child
  #charge; // private field

  constructor(make, speed, charge) {
    super(make, speed); // calls the parent
    this.#charge = charge; // initialzes the private
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }.`
    );
    return this; // makes it chainable.
  }
}

const electric = new EVCl("Rivian", 120, 23);
console.log(electric.accelerate());
console.log(electric.brake());
console.log(electric.chargeBattery(90));

// chain testing
console.log(electric.accelerate().brake().chargeBattery(78));
