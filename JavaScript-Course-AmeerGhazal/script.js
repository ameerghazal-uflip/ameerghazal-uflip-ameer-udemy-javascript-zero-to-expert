'use strict';

// Lesson 224: Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public Methods
// 4) Private methods
// 5 - 8) Static versions

class Account {
  // 1) Public Fields (Instances)
  locale = navigator.language;

  // 2) Private fields
  #movements = []; // protected
  #pin; // empty and redefined later

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    console.log(`Thanks for opening an account, ${owner}`);
    // this.locale = navigator.language; // putting it here is the same as about
    // this._movements = [];
  }

  // Public Methods
  // Public interface of the objects.
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  // Private methods (put a #)
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000); // nothing happens, and we should not be allowed to even call this, it should be a private field.

console.log(acc1.#movements);
console.log(acc1.#pin);
console.log(acc1.#approveLoan);
