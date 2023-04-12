'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Section 16 Lesson 263: Error handling with try...catch

// Mini-example
// try {
//   let x = 20;
//   const y = 30;
//   y = x; // reassinging fails
// } catch (error) {
//   alert(error.message);
// }

const whereAmI2 = async function (country) {
  try {
    // Geolocation
    const pos = await getPosition(); // awaits the position
    const { latitude: lat, longitude: lng } = pos.coords; // destructuring

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data.');
    const dataGeo = await resGeo.json();

    // Country Data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );

    const data = await res.json();
    renderCountry(data[0]);
  } catch (error) {
    console.error(error);
    renderError(`Something went wrong ${error.message}`);
  }
};

whereAmI2();

function renderCountry(data, className = '') {
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
  countriesContainer.style.opacity = 1;
}

// we change the signature and don't store it for order purposes.
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject); // this is the same thing since both resolve and reject are call back functions.
  });
}
function renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
}
