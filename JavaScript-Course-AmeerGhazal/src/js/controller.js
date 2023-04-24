// Section 18 Lesson 301: Updating Recipe Servings

import * as model from './model.js'; // * imports everything exported from model.
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import icons from 'url:../img/icons.svg'; // parcel 2
import 'core-js/stable'; // polyfilling.
import 'regenerator-runtime/runtime';

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

    // 1) Loading Recipe
    await model.loadRecipe(id);

    // 2) Rendering Recipe
    recipeView.render(model.state.recipe);
    // if we exported the class, we would do, const rec = new recipeView(model....)
  } catch (err) {
    recipeView.renderError();
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
    console.log(err);
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

// loops over to add the eventListener
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
