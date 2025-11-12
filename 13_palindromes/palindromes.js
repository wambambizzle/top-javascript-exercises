const palindromes = function (string) {
  // const endsWithPunctuation = !!word.match(/[.,:!?]$/);
  // let charArray = word.split(",");
  // let punctuation = "";
  // if (endsWithPunctuation) {
  //   let punctuationBlock = charArray[charArray.length - 1];
  //   let punctuationBlockArray = punctuationBlock.split("");
  //   punctuation = punctuationBlockArray.pop();
  //   let updateBlockArray = punctuationBlockArray.join("");
  //   charArray[charArray.length - 1] = updateBlockArray;
  // }
  // const reversedArray = charArray.reverse();
  // let reversedWord = reversedArray.join(" ");
  // if (endsWithPunctuation) {
  //   reversedWord += punctuation;
  // }
  // console.log(`### reversedWord: ${reversedWord}`);
  // console.log(`### word: ${word}`);
  // return reversedWord.toLowerCase() == word.toLowerCase();

  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cleanedString = string
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

  const reversedString = cleanedString.split("").reverse().join("");

  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
