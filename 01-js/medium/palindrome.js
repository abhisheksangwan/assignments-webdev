/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  if (cleanedStr.length <= 1) return true;
  
  let i = 0, l = cleanedStr.length - 1;
  while (i < l) {
    if (cleanedStr[i] !== cleanedStr[l]) {
      return false;
    }
    i++;
    l--;
  }
  return true;
}

module.exports = isPalindrome;
