const palindromes = function (str) {
  if (typeof str !== 'string') {
    return false;
  }
  let   cleanStr = str.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
  if (cleanStr.length <= 0) {
    return true;
  }
  let right = cleanStr.length - 1;
  for (let left = 0; left < cleanStr.length / 2; left++) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    right--;
  }
  return true;
};

console.log(palindromes(''));

// Do not edit below this line
module.exports = palindromes;
