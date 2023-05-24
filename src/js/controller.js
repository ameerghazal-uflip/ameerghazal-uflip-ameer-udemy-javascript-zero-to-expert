// Section 18 FORKIFY ADVANCED FEATURES

import * as model from './model.js'; // * imports everything exported from model.
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable'; // polyfilling.
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
import shoppingListView from './views/shoppingListView.js';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1); // ur; hash
    // console.log(id);

    if (!id) return; //guard clause
    recipeView.renderSpinner();

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage()); // would also work with render

    // 1) Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // 2) Loading Recipe
    await model.loadRecipe(id);

    // 3) Rendering Recipe
    recipeView.render(model.state.recipe);
    // if we exported the class, we would do, const rec = new recipeView(model....)
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

// ADD 5: Delete button for later
const controlDeleteRecipe = async function () {
  debugger;
  try {
    const id = window.location.hash.slice(1); // gets the id of the page.

    if (!id) return; // guard for no id.

    recipeView.renderSpinner(); // displays the spinner.

    model.deleteBookmark(id); // deletes the bookmark

    await model.deleteRecipe(id); // deletes the recipe.

    bookmarksView.update(model.state.bookmarks); // updating bookmarks view

    recipeView.renderMessage(
      'The recipe has been deleted. Try searching for another recipe or creating your own!'
    ); // displays a new message

    setTimeout(function () {
      location.reload();
    }, MODAL_CLOSE_SEC * 1000); // ADD A TOGGLE WINDOW
  } catch (err) {
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner(); // inherits form the View parent class

    // 1) gets the search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) load search results
    await model.loadSearchResults(query); // does not return anything but manipulate the state, so we do not have to store it

    // 3) render results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 4) Render inital pagination buttons
    paginationView.render(model.state.search); // pass in the entire state object.
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render new results
  resultsView.render(model.getSearchResultsPage(goToPage)); // state.search gets updated and from there that search is edited and used the for the next pagination call.

  // 2) Render new pagination buttons
  paginationView.render(model.state.search); // pass in the entire state object.
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe); // more efficent.
};

const controlAddBookmark = function () {
  // 1) Add or remove a bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  // if there is one, we delete it

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks); // goes into the list to display the bookmarks that are true.
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

// ADDTIONAL: Advanced Shopping List
const controlAddToCart = function (ingredient) {
  // Adds or updates something from the cart
  model.addToCart(ingredient);

  // Update the view
  // recipeView.update(model.state.recipe);

  // Display the items in the cart
  shoppingListView.render(model.state.cart);
};

const controlRemoveFromCart = function (ingredientLi) {
  model.removeFromCart(ingredientLi);

  shoppingListView.render(model.state.cart);
};

// // ADDTIONAL: Advanced Shopping List
const controlCart = function () {
  // displays the carts off reload
  shoppingListView.render(model.state.cart);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    // upload the new recipe data.
    await model.uploadRecipe(newRecipe);
    // console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success Message
    addRecipeView.renderMessage();

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // CHange ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close form window and Reload for more recipes.
    setTimeout(function () {
      addRecipeView.toggleWindow();
      location.reload();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};

// ADD 2: Addtional ingredient button
const controlAddIngredient = async function (data) {
  try {
    // Checks if applicable.
    debugger;
    await model.addIngredient(data);

    // Render it to the user assuming no errors were thrown
    addRecipeView.renderNewIngr(data);

    // Renders a new ingredient label (assuming no errors from prev.)
  } catch (err) {
    alert(err);
  }
};

// ADD 5: Edit Button
const controlEditIngredient = async function () {
  try {
    recipeView.renderSpinner(); // displays the spinner.

    model.editIngredients(); // deletes the current object, and auto sets the modal input fields for the new "updated" recipe.

    setTimeout(function () {
      // removes the bookmarks
      location.reload();
    }, MODAL_CLOSE_SEC * 100000);
  } catch (error) {
    console.error(error);
  }
};

// loops over to add the eventListener
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  recipeView.addHandlerEditRecipe(controlEditIngredient); // add feature 5
  recipeView.addHandlerDeleteRecipe(controlDeleteRecipe); // add feature 5
  recipeView.addHandlerAddCartIngredient(controlAddToCart); // add ft. advanced
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  addRecipeView.addHandlerIngredient(controlAddIngredient); // add. feature 2
  // shoppingListView.addHandlerListRender(controlCart); // add ft. advanced
  shoppingListView.addHandlerRemoveCartIngredient(controlRemoveFromCart); //adv ft.
  shoppingListView.addHandlerListRender(controlCart); // adv ft. (displays off reload)
};
init();
