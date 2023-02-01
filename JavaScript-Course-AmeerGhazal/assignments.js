// Section 5 Lesson 61 (DeBugger)

const calculate = function (a, o, b) {
  const result = null;

  if (o === "+") {
    return a + b;
  } else if (o === "-") {
    return a - b;
  } else if (o === "/" && b !== 0) {
    return a / b;
  } else if (o === "*") {
    return a * b;
  }

  return result;
};

console.log(calculate(2, "+", 4)); //Should return 6
console.log(calculate(8, "m", 2)); //Should return null
console.log(calculate(4, "/", 0)); // null
console.log(calculate(6, "-", 1.5)); // 4.5
console.log(calculate(-4, "*", 8)); // -32
console.log(calculate(49, "/", -7)); // -7
