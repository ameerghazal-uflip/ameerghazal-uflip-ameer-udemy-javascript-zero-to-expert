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

      // ADDITIONAL FEATURE 3: Gets the number of non-empty ingredients
      const numIngr = dataArr.reduce((accum, entry) => {
        if (entry[0].startsWith('ingredient') && entry[1] !== '') {
          ++accum;
        }
        return accum;
      }, 0);

      // Divide the numIngr of actual ingredients by 3 to avoid duplicates (quanity, unit, etc.) & start at the index of 1
      for (let index = 1; index <= numIngr / 3; ++index) {
        let ingFormed = ''; // string manipulation
        dataArr.forEach(entry => {
          if (entry[0].startsWith(`ingredient-${index}`))
            ingFormed += `${entry[1]},`; // concatinates all of the inputs for the upload
        });

        data[`ingredient-${index}`] = ingFormed.slice(0, -1); // update the data object we pass into the handler with the new string of all the ing.
      }
      handler(data); // passes the data back to the handler.
    });
  }

  // ADDED FOR ADD. FEATURE 2-4
  addHandlerIngredient(handler) {
    const current = this; // used for later
    this._btnAdd.addEventListener('click', function (e) {
      e.preventDefault(); // gets rid of the default resfresh

      // Resets for the loop for no duplicates
      current._curIngredients = [];
      const inputForm = current._addIngrColumn.querySelectorAll('input');

      // Loops through and adds the number of ingredients
      for (let index = 0; index < inputForm.length - 2; ++index) {
        const ingr = inputForm[index],
          ingrUnit = inputForm[index + 1],
          ingrDes = inputForm[index + 2]; // stores the unit and desprction for the three inputs

        if (ingr.value && ingrUnit.value && ingrDes.value) {
          //checks if they all have values
          if (ingr.title) {
            // only pushes for the one with the title defined to not send in duplicate ingredients.
            current._curIngredients.push(parseInt(ingr.title.at(-1))); // goes to the name string and gets the number, pushes it to the list.
          }
        }
      }

      console.log(current._curIngredients);
      handler(current._curIngredients); // passes in the list of ingrdient numbers that have values.
    });
  }

  _generateMarkup() {
    // Adds a new ingrdient to the list. & add feature
    this._data.push(this._data.length + 1);

    return `
    <label>Ingredient ${this._data.length}</label>
      <input
          type="number"
          name="ingredient-${this._data.length}"
          title="${this._data.length}"
          placeholder="Quantity"
        />
      <input type="text" name="ingredient-${this._data.length}" placeholder="Unit" />
      <input
          type="text"
          name="ingredient-${this._data.length}"
          placeholder="Description"
        />`;
  }
}

export default new AddRecipeView();
