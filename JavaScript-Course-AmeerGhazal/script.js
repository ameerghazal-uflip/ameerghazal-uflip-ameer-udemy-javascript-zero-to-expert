'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Section 16 Lesson 266: Other Promise Combinators: race, allSettled and any

// Promise.Race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long!'));
    }, s * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/usa`), timeout(0.1)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Success'),
  Promise.resolve('Success'),
]).then(res => console.log(res));

// Promise.all
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any()
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.log(err);
  }
};

get3Countries('portugal', 'canada', 'usa');

//////////////////////////////////////////////

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

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (error) {
    console.error(error);
    renderError(`Something went wrong ${error.message}`);

    // Reject promise returned from async function
    throw error; // rethrows error
  }
};

// IFFE Version: Immediate functions we call.
// (async function () {
//   try {
//     const response = await whereAmI2();
//     console.log(response);
//   } catch (error) {
//     console.error(error.message);
//   } finally {
//     console.log(`3. Finished getting location.`);
//   }
// })();

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

function getJSON(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`); // rejects the promise on purpose to catch later.
    return response.json();
  });
}
