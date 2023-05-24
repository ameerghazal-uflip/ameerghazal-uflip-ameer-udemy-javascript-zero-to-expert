import icons from 'url:../../img/icons.svg'; // parcel 2 for the pictures
import fracty from 'fracty'; // for the fractions
import View from './View.js';
import addRecipeView from './addRecipeView.js';

class RecipeView extends View {
  _parentElement = document.querySelector('.recipe'); // query selector
  _errorMessage = `We could not find that recipe. Please try again.`;
  _message = ` `;

  addHandlerRender(handler) {
    // loops over to add the eventListener
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  addHandlerUpdateServings(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--update-servings');
      if (!btn) return;
      console.log(btn);

      // console.log(btn.dataset.updateTo); different notation.
      const { updateTo } = btn.dataset; // destructre and remember that for a data set, the dashes make it camel case.

      if (+updateTo > 0) handler(+updateTo); // calls the handler function
    });
  }

  addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--bookmark'); // event delegation to see if it was clicked on te correct thing.
      if (!btn) return;
      handler();
    });
  }

  // ADDITIONAL FEATURE ADVANCED: Shopping List.
  addHandlerAddCartIngredient(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.cart_btn');

      if (!btn) return;

      const quantity = e.target
        .closest('.recipe__ingredient')
        .querySelector('.recipe__quantity').textContent;

      const unit_description = (
        '' +
        e.target
          .closest('.recipe__ingredient')
          .querySelector('.recipe__description').textContent
      )
        .replaceAll('\n', '')
        .trim()
        .replace(/\s+/g, ' '); // string manupluation to get the correct format

      const ingredient = '' + quantity + ' ' + unit_description;

      handler(ingredient); // passes in the correct ingredient to use.
    });
  }

  // ADD Feature 5: Delete Recipe Button
  addHandlerDeleteRecipe(handler) {
    debugger;
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.delete_btn'); // deletes the recipe

      // Guard Clause
      if (!btn) return;

      handler();
    });
  }

  addHandlerEditRecipe(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.edit_ingredients_btn');
      console.log(btn);

      if (!btn) return; // guard

      addRecipeView.toggleWindow(); // toggles the form to reopen.

      handler();
    });
  }

  _generateMarkup() {
    return `
  <figure class="recipe__fig">
    <img src="${this._data.image}" alt="${
      this._data.title
    }" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${
        this._data.cookingTime
      }</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${icons}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${
        this._data.servings
      }</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to="${
          this._data.servings - 1
        }">
          <svg>
            <use href="${icons}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to="${
          this._data.servings + 1
        }">
          <svg>
            <use href="${icons}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
     <svg>
        <use href="${icons}#icon-user"></use>
      </svg>
    </div>
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${icons}#icon-bookmark${
      this._data.bookmarked ? '-fill' : ''
    }"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
      ${this._data.ingredients
        .map(this._generateMarkupIngredient)
        .join('')} </ul>
      
        ${
          this._data.key
            ? `
            <button class="btn--small delete_btn">
              <span>Delete Recipe</span>
              <i class='fas fa-trash-alt'></i>
            </button>
            <button class="btn--small edit_ingredients_btn">
              <span>Edit Ingredients</span>
              <i class='fas fa-pencil-alt'></i>
            </button>`
            : ''
        }
       
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${
        this._data.publisher
      }</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`;
  }

  _generateMarkupIngredient(ing) {
    // ADDED A BUTTON UNDER LI FOR ADVANCED AD. FT. & changed icon.
    return `
      <li class="recipe__ingredient">
        <button class="btn--tiny cart_btn">
          <i class='fas fa-cart-plus'></i>
        </button>
      <div class="recipe__quantity">${
        ing.quantity ? fracty(ing.quantity) : ''
      }</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
      </div>
    </li>`;
  }
}

export default new RecipeView();
