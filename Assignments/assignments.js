"use strict";

// Section 16: Coding Challenge 3

let img; // global
const imgContainer = document.querySelector(".images"); // query selected for the image html.

function wait(secs) {
  return new Promise(function (resolve) {
    setTimeout(resolve, secs * 1000);
  });
}

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    img = document.createElement("img"); // creates the element
    img.src = imgPath; // sets the src

    img.addEventListener("load", function () {
      imgContainer.append(img); // appends the image
      resolve(img); // resolve the promise with the image. If this runs, then it will resolve.
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found.")); // if the load fails, we watch for the catch to return the error.
    });
  });
};

const loadNPause = async function () {
  try {
    // try catch
    const res = await createImage("img/img-1.jpg"); // awaits
    console.log("Image 1 has been found.");
    await wait(2); // waits
    img.style.display = "none";

    const next = await createImage("img/img-2.jpg"); // next await
    await wait(2);
    console.log("Image 2 has been found.");
    img.style.display = "none";
  } catch (error) {
    console.error(`Image not found: ${error.message}`);
  }
};

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));

    const promises = await Promise.all(imgs); // uses the promise combinator function for all and gets the images.

    promises.forEach((img) => img.classList.add("parallel")); // adds the parallel class to all the images.

    console.log(promises);
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);

// createImage("img/img-1.jpg")
//   .then((img) => {
//     console.log("Image has been found."); // if no error, we check if the image used.
//     return wait(2); // waits 2 seconds.
//   })
//   .then(() => {
//     img.style.display = "none"; // hides the image.
//     return createImage("img/img-2.jpg"); // displays the 2nd image
//   })
//   .then(() => {
//     return wait(2); // pauses
//   })
//   .then(() => {
//     img.style.display = "none"; // hides second image
//   })
//   .catch((err) => console.error("Image not found.")); // if something fails, we catch it and return the reject.
