'use strict';

// Section 7 Project 2 & Guess the number

let score = 20; // inital score, state variable
let secretNumber = Math.trunc(Math.random() * 20) + 1; // gets random number
let highScore = 0; // counter
const overlay = document.querySelector('.overlay'); // same for all
const modal = document.querySelector('.modal'); // same for all
const buttonCloser = document.querySelector('.close-modal'); // for the x

// functions
const openModel = function (guess, secretNumber, score) {
  // which model to open
  if (guess === secretNumber) {
    document.querySelector('.modal-header').textContent = 'You win!'; // changes text on the modal
    document.querySelector('.modal-text').textContent = 'Great Job!';
    document.querySelector('.modal-header').style.color = '#60b347'; // changes the header to green
  } else if (guess !== secretNumber && score > 1) {
    guess > secretNumber
      ? (document.querySelector('.modal-text').textContent = 'Too High') // similar approach as prev.
      : (document.querySelector('.modal-text').textContent = 'Too Low');
    document.querySelector('.modal-header').textContent = 'Try Again';
    document.querySelector('.modal-header').style.color = 'red';
  } else {
    document.querySelector('.modal-header').textContent = 'You Lost!';
    document.querySelector('.modal-text').textContent =
      'Better Luck Next Time!';
  }

  modal.classList.remove('hidden'); // opens the model for all
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  modal.classList.add('hidden'); // hides the model & overlay
  overlay.classList.add('hidden');
};

const checkGuess = function (guess, score, highScore, secretNumber) {
  if (!guess) {
    // if no guess, print no number using the function ref.
    displayMessage('No Number!');
  } else if (guess === secretNumber) {
    // if correct number is selected, print correct number to message html
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber; // displays the random number they guessed
    document.querySelector('body').style.backgroundColor = '#60b347'; //changes the screen to green
    document.querySelector('.number').style.width = '30rem';
    openModel(guess, secretNumber, score);

    if (score > highScore) {
      highScore = score; // if the score is greater, it becomes the new highscore
      document.querySelector('.highscore').textContent = highScore; // displays to the user
    }
  } else if (guess !== secretNumber) {
    // Wrong number
    if (score > 1) {
      // checks to make sure the score is not failure status
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      openModel(guess, secretNumber, score); // opens the modal with the correct output
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      openModel(guess, secretNumber, score);
      document.querySelector('.score').textContent = 0; // sets score to 0
    }
  }

  // Makes the again functionable
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

  return score;
};

const displayMessage = function (message) {
  // displays message
  document.querySelector('.message').textContent = message;
};

overlay.addEventListener('click', closeModel); // closes the pop-up on click
buttonCloser.addEventListener('click', closeModel); // closes based on the x

document.addEventListener('keydown', function (event) {
  //if enter is pressed, it functions the same way
  if (event.key === 'Enter') {
    if (!modal.classList.contains('.hidden')) {
      const guess = Number(document.querySelector('.guess').value);
      score = checkGuess(guess, score, highScore, secretNumber);
    }
  }
});

document.querySelector('.check').addEventListener('click', function () {
  // if click is pressed, it runs
  const guess = Number(document.querySelector('.guess').value);
  score = checkGuess(guess, score, highScore, secretNumber);
});
