// Looping Backwards and Nested Loops


const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let outer = 0; outer < listOfNeighbors.length; ++outer) {
    for (let inner = 0; inner < listOfNeighbors[outer].length; ++inner) {
        console.log("Neighbor: " + listOfNeighbors[outer][inner]);
    }
}