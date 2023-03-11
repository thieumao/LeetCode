/**
 * @param {string} s
 * @return {boolean}
 */
function reverseString(str) {
  const length = str.length;
  let s = ""
  for (let i = 0; i < length; i++) {
      s = `${str[i]}${s}`; 
  }
  return s;
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function isCharNumber(c) {
  return c >= '0' && c <= '9';
}

var isPalindrome = function(s) {
    let s2 = s.toLowerCase();
    let newS = '';
    for (let i = 0; i < s2.length; i++) {
      if (isLetter(s2[i])|| isCharNumber(s2[i])) {
        newS = `${newS}${s2[i]}`;  
      }
    }
    return newS === reverseString(newS);
};