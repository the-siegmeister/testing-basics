function caesar(shift, plainText) {
  if (!inRange(shift, -25, 25) || !shift) return null;
  if (plainText.length < 1) return null;
  const plainTextArr = plainText.split("");
  const encryptedArr = plainTextArr.map((c) => encrypt(shift, c));
  return encryptedArr.join("");
}

function encrypt(shift, char) {
  const charCode = char.charCodeAt(0);
  const isLowerCase = char == char.toLowerCase();
  const start = isLowerCase ? 97 : 65;
  const end = isLowerCase ? 122 : 90;

  if (!inRange(charCode, start, end)) return char;

  if (charCode + shift > end) {
    const diff = charCode + shift - end;
    return String.fromCharCode(start - 1 + diff);
  }

  if (charCode + shift < start) {
    const diff = charCode + shift - start;
    return String.fromCharCode(end + 1 + diff);
  }

  return String.fromCharCode(charCode + shift);
}

function inRange(n, start, end) {
  return (n - start) * (n - end) <= 0;
}

module.exports = caesar;
