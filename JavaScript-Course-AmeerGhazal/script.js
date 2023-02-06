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

// Starting Conditons

// User-defined functions
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0; // resets it
  activePlayer = activePlayer === 0 ? 1 : 0; // if player 0, it flips to 1. Otherwise, vice versa.
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active'); // it will remove or add one or the other.
};

let scores, currentScore, activePlayer, playing;

const inital = function () {
  diceEl.classList.add('hidden');
  scores = [0, 0]; // these are final scores which accumulate (0 on both sides)
  currentScore = 0;
  activePlayer = 0;
  playing = true; // at the beginning we are playing.

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

inital();

// Rolling dice function
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; // each time we roll, we want a new number. Local variable

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `Images/dice-${dice}.png`; // we can dynamically load

    // 3. Check for rolled 1: if true, swtich to next player
    if (dice !== 1) {
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

btnHold.addEventListener('click', function () {
  if (playing) {
    // if we are able to play, we run the code; otherwise, we do not make the buttons functionable.
    // if we are playing, it executes the following.
    // 1. Add current score to active player's score.

    scores[activePlayer] += currentScore; // adds the current score to total based on player.
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]; // displays the total score of the active player.

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      playing = false; // not playing anymore
      // 2. Display dice
      diceEl.classList.add('hidden'); // hides the dice.
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.querySelector(
        `.player--${activePlayer}`.classList.remove('player--active') // finishes the game. If the winner is toggled, all the players are inactive.
      );
    } else {
      // Switch to next player
      switchPlayer(); // calls method
    }
  }
});

btnNew.addEventListener('click', inital);

/*  PERSONAL SOLUTION

btnNew.addEventListener('click', function () {
  // 1A. Reset all scores
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  // 1. Display and change currentScore to 0.
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  // 2. Display and change totalScore to 0.
  scores = [0, 0]; // changed to let above.
  document.getElementById(`score--${0}`).textContent = scores[0];
  document.getElementById(`score--${1}`).textContent = scores[1];

  // 3. Hide the dice.
  diceEl.classList.add('hidden'); // hides the dice

  // 4. Set Player 1 to start
  if (activePlayer === 1) {
    // resets the activePlayer to player 1 (0) and removes player 1 from active.
    activePlayer = 0;
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active'); // makes the player 0 (1) active if true.
  } //

  // if the statement is false, then active player is already 0, meaning we don't have to do anything.
});

*/
