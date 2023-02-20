// Section 9 Coding Challenge 4

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  // makes the button functionable
  const input = document.querySelector("textarea").value.split("\n"); // stores the userinput and splits it into an array for each newline.

  const camelCase = []; // array that will store the data.
  for (const word of input) {
    // loops through the array
    if (!word.includes("_")) {
      continue; // skips the word if it does not have an underscorer and moves the next iteration in the loop.
    }

    let copy = word.toLowerCase().replaceAll(" ", ""); // basically creates a copy.
    const dash = copy.indexOf("_");
    copy = copy.replace("_", ""); // gets rid of the space & underscorer.

    let slicer = copy.slice(dash);
    slicer = slicer.replace(slicer[0], slicer[0].toUpperCase()); // slices at the correct index, and makes the first val a capital. Indexs the check before the print since it starts at 0. makes the index that was next to the underscorer a capital letter (we removed the "_" so staying at this index works.).

    const combined = copy.slice(0, dash) + slicer; // fully combined and working word

    camelCase.push(
      combined.padEnd(20) + " " + "✅".repeat(input.indexOf(word) + 1)
    ); // adds the camel case version to the array. Also, it uses the repeat method to determine how many times it should print the check (it checks the indexOf the word in the larger array) and adds one for the starter. We pad to get the same format.
  }

  console.log(camelCase.join("\n"));
});

// JONAS SOLUTION
/*
for (const [i, row] of rows.entries()) {
  const [first, second] = row.toLowerCase().trim().split('_');

  const output = `${first}${second.replace(
    second[0],
    second[0].toUpperCase()
  )}`;
  console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
}

*/
