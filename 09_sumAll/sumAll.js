const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }

  if (a < 0 || b < 0) {
    return "ERROR";
  }

  let array = createNumberArrayLoop(a, b);
  return array.reduce((sum, current) => sum + current, 0);
};

function createNumberArrayLoop(start, end) {
  const arr = [];
  if (start <= end) {
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i--) {
      arr.push(i);
    }
  }
  return arr;
}

// Do not edit below this line
module.exports = sumAll;
