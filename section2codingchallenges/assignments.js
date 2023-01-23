// Equality Operators: == vs. ===

const numNeighbours = Number(prompt("How many neighbour countries does your country have?")); // type change is nessecary for strict (===) operator / type conversion.
if (numNeighbours === 1) {
    console.log("Only 1 border!"); // does not run properly since it is a strict equal (no type coericen)
}
else if (numNeighbours > 1) {
    console.log("More than one border");
}
else {
    console.log("No borders"); // 0 
}