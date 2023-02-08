'use strict';

// Section 7 Project 3 Pig Game

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); // this is a dom element
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// ADDED BY USER
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

// Starting Conditons & User-defined functions
let scores, currentScore, activePlayer, playing, newMaxScore; // redefined later

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0; // resets it
  activePlayer = activePlayer === 0 ? 1 : 0; // if player 0, it flips to 1. Otherwise, vice versa.
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active'); // it will remove or add one or the other.
};

debugger;
const inital = function () {
  diceEl.classList.add('hidden'); // hide the dice
  scores = [0, 0]; // these are final scores which accumulate (0 on both sides)
  currentScore = 0; // reset to 0
  activePlayer = Math.round(Math.random()); // reset player to random player
  console.log(activePlayer);
  playing = true; // at the beginning we are playing.

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  if (activePlayer === 0) {
    // depends on above
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  } else {
    player0El.classList.remove('player--active');
    player1El.classList.add('player--active');
  }

  document.querySelector('.user').textContent = 'Choose a new MAX score!'; // resets for the next input
  newMaxScore = document.querySelector('.guess').value = ''; // set the value equal to an empty String
  document.querySelector('.val').textContent = ''; // makes the max score header empty
  openModal();
};

inital(); // calls function

// Rolling dice function
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; // each time we roll, we want a new number. Local variable

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `Images/dice-${dice}.png`; // we can dynamically load

    // 3. Check for rolled 1 or 5: if true, swtich to next player
    if (dice !== 1 && dice !== 5) {
      // add the dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // builds i-d dynamica
    } else {
      // if the dice is 1, we want to move onto the next person
      switchPlayer();
    }
  }
});

// Hold button function
btnHold.addEventListener('click', function () {
  if (playing) {
    // if we are able to play, we run the code; otherwise, we do not make the buttons functionable.
    // if we are playing, it executes the following.
    // 1. Add current score to active player's score.

    scores[activePlayer] += currentScore; // adds the current score to total based on player.
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; // displays the total score of the active player.

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= newMaxScore) {
      playing = false; // not playing anymore
      // 2. Display dice
      diceEl.classList.add('hidden'); // hides the dice.
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); // finishes the game. If the winner is toggled, all the players are inactive.
    } else {
      // Switch to next player
      switchPlayer(); // calls method
    }
  }
});

//Submit button functionable
document.querySelector('.check').addEventListener('click', function () {
  newMaxScore = parseInt(document.querySelector('.guess').value); // saves the user max & makes covnerts it to an integer.
  if (newMaxScore > 0) {
    closeModal(); // closes the modal & resets values
    document.querySelector('.val').textContent = newMaxScore; // displays the score
  } else {
    document.querySelector('.user').textContent =
      'Try again, that value is invalid!';
  }
});

btnNew.addEventListener('click', function () {
  inital(); // calls function to reset variables
  // openModal(); // displays the modal
});
