// Basic Array Operations (Methods)

const neighbors = ['Brazil', 'Venezula', 'Argentina'];
neighbors.push('Utopia'); // adds to the end=
neighbors.pop(); /// removes last element
console.log(neighbors);

if (neighbors.includes('Germany')) {
    console.log("Probably not a central country");
}

const value = neighbors.indexOf('Brazil');
neighbors[value] = 'Filler';
console.log(neighbors);