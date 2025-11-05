const leapYears = function (year) {
  const isLeapYear = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isFourCentury = year % 400 === 0;

  if (isCentury && !isFourCentury) {
    return false;
  }

  if (isLeapYear && isCentury && isFourCentury) {
    return true;
  }

  if (isLeapYear) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
