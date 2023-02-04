'use strict';

let score = 20; // inital score, state variable
let secretNumber = Math.trunc(Math.random() * 20) + 1; // gets random number
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // if no guess, print no number using the function ref.
    displayMessage('No Number!');
  } else if (guess === secretNumber) {
    // if correct number is selected, print correct number to message html
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber; // displays the random number they guessed
    document.querySelector('body').style.backgroundColor = '#60b347'; //changes the screen to green
    document.querySelector('.number').style.width = '30rem';

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
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0; // sets score to 0
    }
  }
});

// Coding Challenge Part
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
