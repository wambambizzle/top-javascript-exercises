const palindromes = function (word) {
  const endsWithPunctuation = !!word.match(/[.,:!?]$/);

  let charArray = word.split(",");
  let punctuation = "";

  if (endsWithPunctuation) {
    let punctuationBlock = charArray[charArray.length - 1];
    let punctuationBlockArray = punctuationBlock.split("");
    punctuation = punctuationBlockArray.pop();

    let updateBlockArray = punctuationBlockArray.join("");
    charArray[charArray.length - 1] = updateBlockArray;
  }

  const reversedArray = charArray.reverse();
  let reversedWord = reversedArray.join(" ");

  if (endsWithPunctuation) {
    reversedWord += punctuation;
  }

  return reversedWord.toLowerCase() == word.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
