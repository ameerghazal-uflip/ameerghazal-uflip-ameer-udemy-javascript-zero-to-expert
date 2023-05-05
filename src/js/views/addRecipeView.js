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
  _addIngrColumn = document.querySelector('.upload__column-ingredients');
  _btnAdd = document.querySelector('.add_ingredient__btn');
  _curIngredients = []; // number of current ingredients

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
      console.log(dataArr);
      const data = Object.fromEntries(dataArr);
      console.log(data);
      handler(data);
    });
  }

  // ADDED FOR ADD. FEATURE 2
  addHandlerIngredient(handler) {
    const current = this; // used for later
    this._btnAdd.addEventListener('click', function (e) {
      e.preventDefault(); // gets rid of the default resfresh

      // Resets for the loop for no duplicates
      current._curIngredients = [];

      console.log(current._addIngrColumn.querySelectorAll('input'));

      // Loops through and adds the number of ingredients
      current._addIngrColumn.querySelectorAll('input').forEach(ingr => {
        if (ingr.value && ingr.title) {
          // if the value property exists, we add the ingrident to the data object. This is used for checking later
          current._curIngredients.push(parseInt(ingr.title.at(-1))); // goes to the name string and gets the number, pushes it to the list.
        }
      });

      handler(current._curIngredients); // passes in the list of ingrdient numbers that have values.
    });
  }

  _generateMarkup() {
    // Adds a new ingrdient to the list.
    this._data.push(this._data.length + 1);

    return `
    <label>Ingredient ${this._data.length} </label>
      <input
          type="text"
          title="quantity ingredient-${this._data.length}"
          placeholder="Quantity"
        />
      <input type="text" name="unit ingredient-${this._data.length}" placeholder="Unit" />
      <input
          type="text"
          name="description ingredient-${this._data.length}"
          placeholder="Description"
        />`;

    // return `
    // <label>Ingredient ${this._data.length} </label>
    // <input
    //   type="text"
    //   name="ingredient-${this._data.length}"
    //   placeholder="Format: 'Quantity,Unit,Description'"
    // />`;
  }
}

export default new AddRecipeView();
