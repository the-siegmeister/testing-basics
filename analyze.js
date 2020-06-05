module.exports = (arrOfNumbers) => {
  if (!Array.isArray(arrOfNumbers)) return null;

  arrOfNumbers.forEach((n) => {
    if (!typeof n == "number") return null;
  });

  let minVal = Number.MAX_VALUE;
  let maxVal = Number.MIN_VALUE;

  const sum = arrOfNumbers.reduce((acc, cv) => {
    if (cv < minVal) minVal = cv;
    if (cv > maxVal) maxVal = cv;
    return acc + cv;
  }, arrOfNumbers[0]);

  return {
    average: Math.floor(sum / arrOfNumbers.length),
    min: minVal,
    max: maxVal,
    length: arrOfNumbers.length,
  };
};
