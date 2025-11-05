const convertToCelsius = function (fah) {
  let conversion = (fah - 32) * (5 / 9);
  return roundNumber(conversion);
};

const convertToFahrenheit = function (cel) {
  let conversion = cel * (9 / 5) + 32;
  return roundNumber(conversion);
};

function roundNumber(num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
