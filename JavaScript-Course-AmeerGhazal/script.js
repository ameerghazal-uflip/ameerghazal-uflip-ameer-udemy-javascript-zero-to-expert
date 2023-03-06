'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

// Functions

// new info that is added or deleted
const displayMovements = function (account, sort = false) {
  // remove extra elements from start
  containerMovements.innerHTML = 0;
  // .textContent = 0;

  // sorts the array.
  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach(function (mov, i) {
    // for deposit or withdrawl
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const now = new Date(account.movementsDates[i]);

    const day = `${now.getDate()}`.padStart(2, 0); // pads it with 2 0's.
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();

    // Day/Month/Year, time:mins
    const displayDate = `${day}/${month}/${year}`;

    const html = `
    <div class="movements__row">
    <div class="movements__type
    movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${mov.toFixed(2)}€</div>
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

// lesson 153: reduce method
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((accum, mov) => accum + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

// lesson 155: methhod chaining
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((accum, mov) => accum + mov, 0);

  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((accum, mov) => accum + mov, 0);

  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0) // filters out negatives
    .map(deposit => (deposit * acc.interestRate) / 100) // edits the values
    .filter((interest, index, array) => {
      // filters out less than 1
      return interest >= 1;
    })
    .reduce((accum, interest) => accum + interest, 0); // gets the total

  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

// lesson 159: updates the UI
const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc);

  // Display Balance
  calcDisplayBalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
};

// lesson 158: implementing login
let currentAccount;

// Fake Always Logged In
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100; // gets rid of the opacity if logged in

btnLogin.addEventListener('click', function (event) {
  // Prevents form from submitting
  event.preventDefault();

  // gets the current account input from the user.
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  // we can use optional chaining to check if feasible .
  if (currentAccount?.pin === +inputLoginPin.value) {
    // if the pin is correct,

    // Display UI and Welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }.`;

    containerApp.style.opacity = 100; // gets rid of the opacity if logged in

    // Creates the current date and time: lesson 176
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0); // pads it with 2 0's.
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hours = `${now.getHours()}`.padStart(2, 0);
    const mins = `${now.getMinutes()}`.padStart(2, 0);

    console.log(now);
    // Day/Month/Year, time:mins
    labelDate.textContent = `${day}/${month}/${year}, ${hours}:${mins}`;
    console.log(labelDate.value);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Updates the UI
    updateUI(currentAccount);
  }
});

// lesson 159: implementing transfers
btnTransfer.addEventListener('click', function (event) {
  event.preventDefault(); // prevents the default reload behavior
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  ); // looks if the usernames match

  // clears the input field
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();

  // checks if the money is positive, the balance can suffize the transfer, and that a user cannot send money to themselves (if the receiver is valid)
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    // transfers the money.
    currentAccount.movements.push(-amount); // negative account to the transfer
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // updates UI
    updateUI(currentAccount);
  }
});

// lesson 161: some & every / requesting a loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value); // rounds any value down and does type conversion to return a number.
  // the user loan request
  // loan is only granted if any deposit is > 10% if the request

  // uses the some method: if any of the values of dep. is >= 10% of loan
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add Movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

// lesson 160: findIndex method / closing an account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    console.log(index);

    // Delete Account
    accounts.splice(index, 1); // the spiice method is fomratted as: (index, deleteCounter)

    // Hide UI & Clear Fields
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = ''; // clears the fields
});

// lesson 163: sorting the data
let sorted = false; // in the begin. our array is not-sorted
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted); // we do the opposite of each;
  sorted = !sorted; // flips it back
  console.log('kbkjb');
});

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

// Section 12 Lesson 176: Adding Dates to "Bankist" App
