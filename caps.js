module.exports = (word) => {
  const wordArray = word.split("");
  wordArray[0] = wordArray[0].toUpperCase();
  return wordArray.join("");
};
