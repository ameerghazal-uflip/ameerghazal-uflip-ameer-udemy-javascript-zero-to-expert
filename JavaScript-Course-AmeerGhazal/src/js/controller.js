// Section 18 Lesson 292: Refactoring for MVC

import * as model from './model.js'; // * imports everything exported from model.
import recipeView from './views/recipeView.js';

import icons from 'url:../img/icons.svg'; // parcel 2
import 'core-js/stable'; // polyfilling.
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1); // ur; hash
    console.log(id);

    if (!id) return; //guard clause
    recipeView.renderSpinner();

    // 1) Loading Recipe
    await model.loadRecipe(id);

    // 2) Rendering Recipe
    recipeView.render(model.state.recipe);
    // if we exported the class, we would do, const rec = new recipeView(model....)

    console.log(recipe);
  } catch (err) {
    alert(err);
  }
};

// loops over to add the eventListener
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
