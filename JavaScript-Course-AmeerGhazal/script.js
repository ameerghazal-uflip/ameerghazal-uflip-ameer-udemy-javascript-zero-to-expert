'use strict';

// Lesson 225: Chaining Methods

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
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // Static method
  static helper() {
    console.log('help');
  }

  // Private methods (put a #)
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
// Chaining
Account.helper(); // must use the acutal class
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
