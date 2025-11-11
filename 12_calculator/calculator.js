const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((a, b) => a + b, 0);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => a * b, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  // Recursion
  // if (num === 0 || num == 1) {
  //   return 1;
  // }
  // return num * factorial(num - 1);

  // Iteration

  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
