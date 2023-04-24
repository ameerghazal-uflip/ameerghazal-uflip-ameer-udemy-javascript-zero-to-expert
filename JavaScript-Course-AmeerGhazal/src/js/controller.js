// Section 18 Lesson 293: Helper and Configuration Files

import * as model from './model.js'; // * imports everything exported from model.
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

import icons from 'url:../img/icons.svg'; // parcel 2
import 'core-js/stable'; // polyfilling.
import 'regenerator-runtime/runtime';

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1); // ur; hash
    // console.log(id);

    if (!id) return; //guard clause
    recipeView.renderSpinner();

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
    // 1) gets the search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) load search results
    await model.loadSearchResults(query); // does not return anything but manipulate the state, so we do not have to store it

    // 3) render results
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

controlSearchResults();

// loops over to add the eventListener
const init = function () {
  recipeView.addHandlerRender(showRecipe);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
