// Section 10 Coding Challenge 1
"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  // 1.1 & 1.2
  registerNewAnswer() {
    let checker = false,
      answer;
    // checks the input
    while (!checker) {
      answer = Number(
        prompt(
          `${this.question}\n${this.options.join("\n")}\n(Write option number)`
        )
      );

      if (typeof answer !== NaN && answer < 4 && answer >= 0) {
        checker = true;
      }

      console.log(answer);
    }
    //  typeof answer !== NaN || answer >= 4 || answer < 0) {

    let count = 0; // default
    this.answers[answer] += ++count; // after the answer is given and checked, the index is the input number and it is added to that values count.

    // 4. calls the method
    this.displayResults();
    this.displayResults("string");
  },

  // 3. displays results to the user.
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}.`); // use
    }
  },
};

poll.registerNewAnswer();

// 2. click selector
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll)); // binds correctly for the this keyword with that certain function.

const tester = [5, 3, 2];

// 5. Bonus, display the 2 arrays in test data w/o putting in the poll object.
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }); // uses default array type
poll.displayResults.call({ answers: [...tester] }, "string"); // specifies the string param. after the this. keyword
