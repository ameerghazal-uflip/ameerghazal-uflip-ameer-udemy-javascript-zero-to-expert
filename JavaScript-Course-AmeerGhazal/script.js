'use strict';

// Section 7 Project 2

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

const openModel = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden'); // removes the hidden barrier
  overlay.classList.remove('hidden');

  // modal.style.display = 'block' does the same thing, but above is much better.
};

const closeModel = function () {
  modal.classList.add('hidden'); // hides the modal
  overlay.classList.add('hidden'); // hides the overally
};

for (let index = 0; index < btnsOpenModel.length; ++index) {
  btnsOpenModel[index].addEventListener('click', openModel);
}

btnCloseModel.addEventListener('click', closeModel);

overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (event) {
  // generates an object about the event it self.
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    // if the key is escape, and the modal does not contain the hidden class.
    closeModel();
  }
}); // checks everywhere for the event listener, not just the query
