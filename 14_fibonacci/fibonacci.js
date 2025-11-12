const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS"
  }

  if (typeof num === "string") {
    num = Number(num)
  }

  if (num <= 1) {
    return num;
  }

  let a = 0, b = 1;

  for (let i = 2; i <= num; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b
};

// Do not edit below this line
module.exports = fibonacci;
