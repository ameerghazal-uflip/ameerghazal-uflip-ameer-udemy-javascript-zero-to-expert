'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Section 16 Lesson 254: Handling Rejected Promises

// takes in some data
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

// const getCountryAndNeigbor = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest(); // old way, may be needed later.
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data); // calls the render function.

//     // Get neighbour country 2
//     const neighbor = data.borders?.[0]; // optional chaining accounts for countries with no border.

//     if (!neighbor) return; // guard clause.

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest(); // old way, may be needed later.
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText); // no longer an array we search for the code rather than the name.
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeigbor('pakistan'); // two ajax calls happening at the same time.

// arrow version: shorter
const getCountryDataArrow = function (country) {
  const request = fetch(`https://restcountries.com/v2/name/${country}`) // fethces, we get the response, transform to json, and have the data.
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Country not found. ${response.status}`); // rejects the promise on purpose to catch later.
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0]; // once we get the data, check the borders via optional chaining.

      if (!neighbor) return; // fake guard clasue

      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbor}`); // by returing this promise, the fullfiled value of the next then method is this
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(err);
      renderError(`Something went wrong ${err}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1; // this happens regardless.
    });
};

btn.addEventListener('click', function () {
  getCountryDataArrow('afgan');
});

getCountryDataArrow('diisjidj');
