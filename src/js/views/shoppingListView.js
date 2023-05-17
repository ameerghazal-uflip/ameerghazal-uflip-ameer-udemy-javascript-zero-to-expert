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

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(item => previewView.renderList(item, false)).join('');
  }
}

export default new ShoppingListView();

/*

<!-- <li class="preview">
    <a class="preview__link" href="#23456">
      <figure class="preview__fig">
        <img src="src/img/test-1.jpg" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__name">
          Pasta with Tomato Cream ...
        </h4>
        <p class="preview__publisher">The Pioneer Woman</p>
       </div>
      </a>
    </li> -->




*/
