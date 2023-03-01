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
const displayMovements = function (movements, sort = false) {
  // remove extra elements from start
  containerMovements.innerHTML = 0;
  // .textContent = 0;

  // sorts the array.
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
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

// lesson 153: reduce method
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((accum, mov) => accum + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// lesson 155: methhod chaining
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
      return interest >= 1;
    })
    .reduce((accum, interest) => accum + interest, 0); // gets the total

  labelSumInterest.textContent = `${interest}€`;
};

// lesson 159: updates the UI
const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc.movements);

  // Display Balance
  calcDisplayBalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
};

// lesson 158: implementing login
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

    // updates UI
    updateUI(currentAccount);
  }
});

// lesson 161: some & every / requesting a loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value); // the user loan request
  // loan is only granted if any deposit is > 10% if the request

  // uses the some method: if any of the values of dep. is >= 10% of loan
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add Movement
    currentAccount.movements.push(amount);

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
  console.log('kbkjb');
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

// Section 11 Lesson 166: Array Methods Practice

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(movements >= 1000).length;

// more soph. way
const numDeposits1000_ = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);

console.log(numDeposits1000_);

// pre-fixed opertors
let a = 0;
console.log(++a);

// 3. Create an object that contains the sum of the deposits and the withdrawals
const { deposits, withdraws } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, val) => {
      val > 0 ? (sums.deposits += val) : (sums.withdraws += val);
      // bracket notation: sums[val > 0 ? 'deposits : 'withdrawals'] += val
      return sums; // we need to return the accumulator in the end.
    },
    { deposits: 0, withdraws: 0 } // creates an object as initial and enters inside of it using the accum (this works since the right param is the initial for the accm)
  );

console.log(deposits, withdraws);

// 4. title case challenge

// ex: this is a nice title ->> This Is a Nice Title.
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' '); //converts the string to lowercase and splits it into an array. If the current word is in exceptions array, then simply return the word
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
