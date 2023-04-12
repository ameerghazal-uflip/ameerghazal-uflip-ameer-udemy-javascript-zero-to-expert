"use strict";

// Section 16: Coding Challenge 2

let img; // global
const imgContainer = document.querySelector(".images"); // query selected for the image html.

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

createImage("img/img-1.jpg")
  .then((img) => {
    console.log("Image has been found."); // if no error, we check if the image used.
    return wait(2); // waits 2 seconds.
  })
  .then(() => {
    img.style.display = "none"; // hides the image.
    return createImage("img/img-2.jpg"); // displays the 2nd image
  })
  .then(() => {
    return wait(2); // pauses
  })
  .then(() => {
    img.style.display = "none"; // hides second image
  })
  .catch((err) => console.error("Image not found.")); // if something fails, we catch it and return the reject.

function wait(secs) {
  return new Promise(function (resolve) {
    setTimeout(resolve, secs * 1000);
  });
}
