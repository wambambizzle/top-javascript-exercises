const repeatString = function (string, num) {
  if (num < 0) return "ERROR";

  let repeatingString = "";
  for (let i = 0; i < num; i++) {
    repeatingString += string;
  }

  return repeatingString;
};

// Do not edit below this line
module.exports = repeatString;
