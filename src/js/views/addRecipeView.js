import View from './View.js';
import icons from 'url:../../img/icons.svg'; // parcel 2 for the pictures

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded.';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  // Additional Feature #2: adding a button for extra ingredients,
  _btnAddIngredient = document.querySelector('.upload__column');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    // in order to show this window, the controller does not interfere at all.
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this)); // uses bind points to the specific current object.
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      console.log(data);
      handler(data);
    });
  }

  // ADDED FOR ADD. FEATURE 2
  addHandlerIngredient(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const data = Object.fromEntries([...new FormData(this)]);
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
