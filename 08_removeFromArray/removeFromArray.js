const removeFromArray = function (arr, a, ...theArgs) {
  let numberOccurrences = getNumberOccurrences(arr, a);

  for (let i = 0; i < numberOccurrences; i++) {
    removeValueForIndex(a);
  }

  for (let index = 0; index < theArgs.length; index++) {
    const element = theArgs[index];
    let indexToRemove = arr.indexOf(element);

    if (indexToRemove >= 0) {
      arr.splice(indexToRemove, 1);
    }
  }

  return arr;

  function removeValueForIndex(value) {
    let indexToRemove = arr.indexOf(value);

    if (indexToRemove >= 0) {
      arr.splice(indexToRemove, 1);
    }
  }
};

function getNumberOccurrences(array, value) {
  var count = 0;
  array.forEach((v) => v === value && count++);
  return count;
}

// Do not edit below this line
module.exports = removeFromArray;
