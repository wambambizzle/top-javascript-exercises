const reverseString = function (string) {
  // let stringsArray = string.split("");
  // let reversedArray = stringsArray.reverse();
  // let reversedString = reversedArray.join("");
  // console.log(reversedString);

  let reversedString = string.split("").reverse().join("");

  console.log(reversedString);

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
