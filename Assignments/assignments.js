// Section 10 Coding Challenge 2
"use strict";

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  // sol. this works perefectly fine with closure. Even though the second function in the DOM selector is after the outer function is run, it is saved by the clousre ("backpack")
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
