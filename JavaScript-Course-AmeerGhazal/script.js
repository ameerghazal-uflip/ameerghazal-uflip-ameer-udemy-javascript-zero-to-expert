'use strict';

// Lesson 223: Encapsulation: Protected Properties and Methods

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = []; // protected
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this._movements;
  }

  // Public interface of the objects.
  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000); // nothing happens, and we should not be allowed to even call this, it should be a private field.
