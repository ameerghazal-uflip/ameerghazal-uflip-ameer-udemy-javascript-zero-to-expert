import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // parcel 2 for the pictures

// NOTE: CLASS CREATED BY AMEER G FOR THE SHOPPING LIST ADDITIONAL FEATURE

class ShoppingListView extends View {
  _parentElement = document.querySelector('.shopping__list');
  _errorMessage = `Nothing in your cart yet. Find some ingredients and add
  them to your list!`;
  _message = ` `;

  addHandlerListRender(handler) {
    window.addEventListener('load', handler);
  }

  // ADDITIONAL FEATURE ADVANCED: Shopping List.
  addHandlerRemoveCartIngredient(handler) {
    const current = this;
    this._parentElement.addEventListener('click', function (e) {
      debugger;
      const btn = e.target.closest('.delete_ing_btn'); // big x

      if (!btn) return;

      const ingredientLi = e.target.closest('.preview'); // the entire li it would delete

      handler(ingredientLi);
    });
  }

  _generateMarkup() {
    console.log(this._data);
    console.log(
      this._data.map(item => previewView.renderList(item, false)).join('')
    );
    return this._data.map(item => previewView.renderList(item, false)).join('');
  }
}

export default new ShoppingListView();
