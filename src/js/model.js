import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE, KEY } from './config.js';
// import { getJSON, sendJSON } from './helpers.js';
import { AJAX } from './helpers.js';

// #2 for fact checking
let MIN_DISPLAY_INGREIDENTS = 6; // base val

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
  cart: ['3 kilos sugar'], // ADVANCED ADDITIONAL FEATURE: Shopping List
};

const createRecipeObject = function (data) {
  const { recipe } = data.data; // destructure for data on the different sides.
  console.log(recipe);
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }), // if both parts are true, the obj is returned and we spread that object (same as key: recipe.key)
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);

    // deals with reloads, so it sets the bookmarked property if it is set.
    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;

    // console.log(state.recipe);
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err; // rethrows the error
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    console.log(data);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key }),
      };
    });
    state.search.page = 1; // resets the page when other things are searched for.

    // console.log(state.search.results);
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err; // rethrows the error for the controller.
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; // 0;
  const end = page * state.search.resultsPerPage; // 9;

  return state.search.results.slice(start, end); // returns the 10
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // newQt = oldQt * newServings / old servings // 2 * 8 / 4 = 5
  });

  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // Add Bookmark into the array.
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  if (recipe.id === state.recipe.id) {
    state.recipe.bookmarked = true;
  }

  persistBookmarks();
};

export const deleteBookmark = function (id) {
  // Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark current recipe as NOT bookmarked
  if (id === state.recipe.id) {
    state.recipe.bookmarked = false;
  }

  persistBookmarks();
};

// ADVANCED ADDITIONAL FEATURE: Shopping List
const persistCart = function () {
  localStorage.setItem('cart', JSON.stringify(state.cart));
};

// ADVANCED ADDITIONAL FEATURE: Shopping List
export const addToCart = function (ingredient) {
  state.cart.push(ingredient);

  // // Mark current recipe as bookmarked
  // if (ingredient.id === state.recipe.ingredient.id) {
  //   state.recipe.addedToCart = true;
  // }

  persistCart();
};

// ADVANCED ADDITIONAL FEATURE: Shopping List
export const removeFromCart = function (id) {
  const index = state.cart.findIndex(el => el.id === id);
  state.cart.splice(index, 1);

  //  // Mark current recipe as NOT bookmarked
  //  if (id === state.recipe.id) {
  //   state.recipe.bookmarked = false;
  // }

  persistCart();
};

const init = function () {
  // Bookmarks
  const storageBookmarks = localStorage.getItem('bookmarks');
  if (storageBookmarks) state.bookmarks = JSON.parse(storageBookmarks);

  // Cart: Addtional Feature
  const storageCart = localStorage.getItem('cart');
  if (storageCart) state.cart = JSON.parse(storageCart);
};
init();

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
// clearBookmarks();

// ADVANCED ADDITIONAL FEATURE: Shopping List
const clearCart = function () {
  localStorage.clear('cart');
};
// clearCart();

export const uploadRecipe = async function (newRecipe) {
  // Take input from API and transform it
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());
        // const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format! Please use correct format!'
          );
        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description }; // returns an object with the data.
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};

// ADDITIONAL FEATURE 5: edit, delete button
export const deleteRecipe = async function (id) {
  debugger;
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`, null, 'DELETE'); // this will delete the data from the page.
  } catch (err) {
    throw err;
  }
};

// ADDITIONAL FEATURE 2-3: adding Ingredient validation
export const addIngredient = async function (data) {
  debugger;
  try {
    // Checks to make sure that all the tabs are full before displaying a new ingr.
    if (data.length < MIN_DISPLAY_INGREIDENTS) {
      throw new Error(
        'Sorry, please fill in the current ingredient tabs before requesting more.'
      );
    }

    MIN_DISPLAY_INGREIDENTS++; // updates this value for later use.
  } catch (err) {
    throw err; // rethrows the error
  }
};

// ADD 5: Edit Button
export const editIngredients = async function () {
  try {
    const id = window.location.hash.slice(1); // gets the id of the page.

    if (!id) return; // guard for no id.

    deleteBookmark(id); // deletes bookmark

    await deleteRecipe(id); // deletes the recipe behind the scences

    const recipe = state.recipe; // gets the current recipe to be used

    // Query selects the title, etc.
    const names = [
      ...document.querySelector('.upload__column').querySelectorAll('input'),
    ];

    // Hard code the title, etc., in due to object and the value always being 6
    names[0].value = recipe.title;
    names[1].value = recipe.sourceUrl;
    names[2].value = recipe.image;
    names[3].value = recipe.publisher;
    names[4].value = recipe.cookingTime;
    names[5].value = recipe.servings;

    if (recipe.ingredients.length > 6) {
      let htmlMarkup = '';
      for (
        let index = 0, count = recipe.ingredients.length - 6;
        index < recipe.ingredients.length - 6;
        ++index, --count
      ) {
        htmlMarkup += `
        <label>Ingredient ${recipe.ingredients.length - count + 1}</label>
          <input
              type="number"
              name="ingredient-${recipe.ingredients.length - count + 1}"
              title="${recipe.ingredients.length - count + 1}"
              placeholder="Quantity"
            />
          <input type="text" name="ingredient-${
            recipe.ingredients.length - count + 1
          }" placeholder="Unit" />
          <input
              type="text"
              name="ingredient-${recipe.ingredients.length - count + 1}"
              placeholder="Description"
            />`;
      }

      document
        .querySelector('.upload__column-ingredients')
        .insertAdjacentHTML('beforeend', htmlMarkup);
    }

    const ingredients = [
      ...document
        .querySelector('.upload__column-ingredients')
        .querySelectorAll('input'),
    ];

    for (let index = 0, count = 0; index < recipe.ingredients.length; ++index) {
      // we do it for the recipe ingredients so we do not update the wrong thing

      ingredients[count].value = recipe.ingredients[index].quantity;
      // ingredients[count++].quantity = recipe.ingredients[index].quantity;
      count++;

      ingredients[count].value = recipe.ingredients[index].unit;
      // ingredients[count++].unit = recipe.ingredients[index].unit;
      count++;

      ingredients[count].value = recipe.ingredients[index].description;
      // ingredients[count].description = recipe.ingredients[index].description;
      count++;
    }
  } catch (error) {
    throw error;
  }
};
