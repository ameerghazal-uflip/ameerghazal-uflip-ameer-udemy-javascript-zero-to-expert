'use strict';

// Section 7 Project 2 & Guess the number

let score = 20; // inital score, state variable
let secretNumber = Math.trunc(Math.random() * 20) + 1; // gets random number
let highScore = 0;
let modal; //changes per situation
const overlay = document.querySelector('.overlay'); // same for all
const buttonCloser = document.querySelectorAll('.close-modal');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message; // displays messages
};

const openModel = function () {
  modal.classList.remove('hidden'); // opens the model
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  modal.classList.add('hidden'); // hides the model & overlay
  overlay.classList.add('hidden');
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
});

for (let index = 0; index < buttonCloser.length; ++index) {
  buttonCloser[index].addEventListener('click', closeModel); // closes with x
}

overlay.addEventListener('click', closeModel); // closes the pop-up on click

// document.addEventListener('keydown', function (event) {
//   if (event.key === 'Enter' && !modal.classList.contains('.check')) {
//     const guess = Number(document.querySelector('.guess').value);
//     closeModel();
//   }
// });

if (!guess) {
  // if no guess, print no number using the function ref.
  displayMessage('No Number!');
} else if (guess === secretNumber) {
  // if correct number is selected, print correct number to message html
  displayMessage('Correct Number');
  document.querySelector('.number').textContent = secretNumber; // displays the random number they guessed
  document.querySelector('body').style.backgroundColor = '#60b347'; //changes the screen to green
  document.querySelector('.number').style.width = '30rem';
  modal = document.querySelector('.modal-win'); // specifices
  openModel(); // opens

  if (score > highScore) {
    highScore = score; // if the score is greater, it becomes the new highscore
    document.querySelector('.highscore').textContent = highScore; // displays to the user
  }
} else if (guess !== secretNumber) {
  // Wrong number
  if (score > 1) {
    // checks to make sure the score is not failure status
    if (guess > secretNumber) {
      displayMessage('Too high!');
      modal = document.querySelector('.modal-high');
      openModel();
    } else {
      // don't need to specifiy from previous code
      displayMessage('Too low!');
      modal = document.querySelector('.modal-low');
      openModel();
    }
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You lost the game!');
    document.querySelector('.score').textContent = 0; // sets score to 0
    modal = document.querySelector('.modal-loss');
    openModel();
  }
}

// Makes the again button functionable
document.querySelector('.again').addEventListener('click', function () {
  score = 20; // resets the score
  secretNumber = Math.trunc(Math.random() * 20) + 1; // resets
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...'; // fucntion call*
  document.querySelector('.number').textContent = '?'; // changes back to hide number
  document.querySelector('.guess').value = ''; // sets it to empty
  document.querySelector('.number').style.width = '15rem'; // restores width & background
  document.querySelector('body').style.backgroundColor = '#222';
});

/*





  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    // if the key is escape, and the modal does not contain the hidden class.
    closeModel();
  }
}); // checks everywhere for the event listener, not just the query

*/
