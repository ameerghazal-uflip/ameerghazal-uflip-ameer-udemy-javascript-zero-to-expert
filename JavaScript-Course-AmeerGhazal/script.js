'use strict';

/*

document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').textContent);

*/

// Event Listener

let score = 20; // inital score, state variable
let secretNumber = Math.trunc(Math.random() * 20) + 1; // gets random number
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    // if no guess, print no number
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    // if correct number is selected, print correct number to message html
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber; // displays the random number they guessed
    document.querySelector('body').style.backgroundColor = '#60b347'; //changes the screen to green
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score; // if the score is greater, it becomes the new highscore
      document.querySelector('.highscore').textContent = highScore; // displays to the user
    }
  } else if (guess > secretNumber) {
    // too high
    if (score > 1) {
      // checks to make sure the score is not failure status
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0; // sets score to 0
    }
  } else if (guess < secretNumber) {
    // too low
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!'; // small
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0; // sets score to 0
    }
  }
});

// Coding Challenge Part
document.querySelector('.again').addEventListener('click', function () {
  score = 20; // resets the score
  secretNumber = Math.trunc(Math.random() * 20) + 1; // resets
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?'; // changes back to hide number
  document.querySelector('.guess').value = ''; // sets it to empty
  document.querySelector('.number').style.width = '15rem'; // restores width & background
  document.querySelector('body').style.backgroundColor = '#222';
});

// Highscore challenge
