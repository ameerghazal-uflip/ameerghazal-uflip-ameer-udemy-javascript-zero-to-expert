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
    <div class="movements__value">${mov}€</div>
    </div>`;

    // want to insert new child element right after the beginning element. (after-begin)
    containerMovements.insertAdjacentHTML('afterbegin', html); // button from above
  });
};

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
createUserName(accounts); // creates the nickname for all the accounts.

// lesson 153
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((accum, mov) => accum + mov, 0);
  labelBalance.textContent = `${balance}€`;
};

// lesson 155
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((accum, mov) => accum + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((accum, mov) => accum + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0) // filters out negatives
    .map(deposit => (deposit * acc.interestRate) / 100) // edits the values
    .filter((interest, index, array) => {
      // filters out less than 1
      console.log(array);
      return interest >= 1;
    })
    .reduce((accum, interest) => accum + interest, 0); // gets the total

  labelSumInterest.textContent = `${interest}€`;
};

// lesson 158
let currentAccount;
btnLogin.addEventListener('click', function (event) {
  // Prevents form from submitting
  event.preventDefault();

  // gets the current account input from the user.
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  // we can use optional chaining to check if feasible .
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // if the pin is correct,

    // Display UI and Welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }.`;

    containerApp.style.opacity = 100; // gets rid of the opacity if logged in

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Display Movements
    displayMovements(currentAccount.movements);

    // Display Balance
    calcDisplayBalance(currentAccount.movements);

    // Display Summary
    calcDisplaySummary(currentAccount);
  }
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////

// Section 11 Lesson 158: Implementing the Login
