'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Section 16 Lesson 262: Consuming Promises with Async/Await

// navigator.geolocation.getCurrentPosition(
//   postition => console.log(postition),
//   err => console.error(err)
// );

// console.log(`Getting position`);

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   postition => resolve(postition),
//     //   err => reject(err)
//     // );

//     navigator.geolocation.getCurrentPosition(resolve, reject); // this is the same thing since both resolve and reject are call back functions.
//   });
// };

// getPosition().then(pos => console.log(pos)); // so we turned the geolocation api into a promise based api.

// // Refactors the Coding Challenge 1 using the geolocation API.
// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords; // destructuring
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with Geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found. ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(error => console.error(`${error.message}`));
// };

// document.querySelector('.btn-country').addEventListener('click', whereAmI);

// function renderCountry(data, className = '') {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// }

// recreating whereAmI with async/await

const whereAmI2 = async function (country) {
  // Geolocation
  const pos = await getPosition(); // awaits the position
  const { latitude: lat, longitude: lng } = pos.coords; // destructuring

  // Reverse geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  // Country Data

  // same as
  // fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res));

  const res = await fetch(
    `https://restcountries.com/v2/name/${dataGeo.country}`
  );
  console.log(res);

  const data = await res.json();
  renderCountry(data[0]);
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
