'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// new info that is added or deleted
const displayMovements = function (movements) {
  // remove extra elements from start
  containerMovements.innerHTML = 0;
  // .textContent = 0;

  movements.forEach(function (mov, i) {
    // for deposit or withdrawl
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type
     movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
    </div>`;

    // want to insert new child element right after the beginning element. (after-begin)
    containerMovements.insertAdjacentHTML('afterbegin', html); // button from above
  });
};

displayMovements(account1.movements);

// not returning a val, it just mutates the array.
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner //  we get the name and manipulate the element.
      .toLowerCase()
      .split(' ')
      .map(name => name[0]) // same as function(name) { return name[0];}
      .join(''); // split returns an array and we can call the map method on
  });
};
createUserName(accounts);

// lesson 153
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((accum, mov) => accum + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Section 11 Lesson 153: The Reduce Method

const balance = movements.reduce(function (accum, curr, i, arr) {
  console.log(`Iteration ${i}: ${accum}`);
  return accum + curr;
}, 0);
console.log(balance);

// arrow version
const balanceArrow = movements.reduce((accum, curr) => accum + curr, 0);
console.log(balanceArrow);

// for of version
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximun Value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc; // only changes if the acc is greater
  } else {
    return mov; // if the accum is smaller, we return the new max.
  }
}, movements[0]);
console.log(max);

// Simpler form, but still confusing.
const maxSimple = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(maxSimple);
