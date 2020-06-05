module.exports = (word) => {
  const wordCopy = word;
  return wordCopy.split("").reverse().join("");
};
