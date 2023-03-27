"use strict";

// Section 14 Coding Challenge 3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

// New Stud
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype); // makes the EV class a chlid.

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1; // percent
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}.`
  );
};

const electric = new EV("Tesla", 120, 23);
electric.chargeBattery(90);
electric.accelerate();
electric.brake();
